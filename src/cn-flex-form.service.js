(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .provider('cnFlexFormService', cnFlexFormServiceProvider);

  var fieldTypeRegister = [{
    condition: function(field) { return field.type === 'hidden'; },
    handler: _.noop
  }, {
    condition: function(field) { return field.type === 'boolean'; },
    handler: 'processToggle'
  }, {
    condition: function(field) { return field.type === 'radiobuttons'; },
    handler: 'processRadiobuttons'
  }, {
    condition: function(field) { return field.type === 'datetime-local'; },
    handler: 'processDate'
  }, {
    condition: function(field) { return field.type === 'help'; },
    handler: 'processHelp'
  }, {
    condition: function(field) { return field.type === 'display'; },
    handler: 'processDisplay'
  }, {
    condition: function(field) {
      return field.schema && (field.schema.format === 'currency' || field.schema.format === 'currency-dollars');
    },
    handler: 'processCurrency'
  }, {
    condition: function(field) { return field.schema && field.schema.format === 'percentage'; },
    handler: 'processPercentage'
  }, {
    condition: function(field) { return field.titleMap || field.titleMapResolve || field.titleMapQuery; },
    handler: 'processSelect'
  }, {
    condition: function(field) { return field.type === 'array'; },
    handler: 'processSection'
  }];

  cnFlexFormServiceProvider.$inject = ['schemaFormDecoratorsProvider'];

  function cnFlexFormServiceProvider(schemaFormDecoratorsProvider) {
    return {
      registerField: registerField,
      $get: CNFlexFormService
    };

    //////////

    function registerField(fieldType) {
      if(fieldType.condition && fieldType.handler) {
        fieldTypeRegister.unshift(fieldType);
      }

      if(fieldType.type && fieldType.templateUrl) {
        schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            fieldType.type,
            fieldType.templateUrl
        );
        schemaFormDecoratorsProvider.createDirective(
            fieldType.type,
            fieldType.templateUrl
        );
      }
    }
  }

  CNFlexFormService.$inject = [
    'Api', '$parse', '$q', '$stateParams',
    '$interpolate', '$compile', '$rootScope', '$timeout', 'cnUtil'
  ];

  function CNFlexFormService(Api, $parse, $q, $stateParams,
                             $interpolate, $compile, $rootScope, $timeout, cnUtil) {

    var omitParams = ['page', 'debug', 'sandbox'];
    var optionalFormKeys = ['error', 'type', 'notitle'];
    var services = [];

    function CNFlexFormConstructor(schema, model, config) {
      var service;
      if(services.length) {
        for(var i = 0, l = services.length; i < l; i++) {
          if(services[i].model === model) {
            service = services[i];
            //console.log('service.compile:', service.compile);
            service.compile(schema, model, config);
            break;
          }
        }
        //console.log('services1:', services, service);
      }
      if(!service) {
        service = new CNFlexForm(schema, model, config);
        services.push(service);
        //console.log('services2:', services, service);
      }
      return service || new CNFlexForm(schema, model, config);
    }

    function CNFlexForm(schema, model, config) {
      this.arrayCopies = {};
      this.arrayListeners = {};
      this.defaults = {};
      this.errors = [];
      this.events = [];
      this.formCache = {};
      this.listeners = {};
      this.dataCache = {};
      this.model = model;
      this.updates = 0;

      this.params = this.getStateParams();

      this.compile(schema, model, config);
    }

    _.extend(CNFlexForm.prototype, {
      compile: compile,
      //addChangeEvent: addChangeEvent,
      addArrayCopy: addArrayCopy,
      addToDataCache: addToDataCache,
      addToFormCache: addToFormCache,
      //assignHandlers: assignHandlers,
      broadcastErrors: broadcastErrors,
      buildError: buildError,
      cleanup: cleanup,
      deregisterHandlers: deregisterHandlers,
      getArrayCopies: getArrayCopies,
      getFromDataCache: getFromDataCache,
      getFromFormCache: getFromFormCache,
      getKey: getKey,
      getSchema: getSchema,
      getStateParams: getStateParams,
      initArrayCopyWatch: initArrayCopyWatch,
      initModelWatch: initModelWatch,
      initSchemaParams: initSchemaParams,
      isCompiled: isCompiled,
      isConditionFunction: isConditionFunction,
      onModelWatch: onModelWatch,
      parseCondition: parseCondition,
      parseExpression: parseExpression,
      processDefault: processDefault,
      processDisplay: processDisplay,
      processField: processField,
      processFieldset: processFieldset,
      processFieldWatch: processFieldWatch,
      processComponent: processComponent,
      processCurrency: processCurrency,
      processPercentage: processPercentage,
      processDate: processDate,
      processHelp: processHelp,
      processRadiobuttons: processRadiobuttons,
      processSchema: processSchema,
      processResolve: processResolve,
      //processSchemaUpdate: processSchemaUpdate,
      processSection: processSection,
      processSelect: processSelect,
      processTemplate: processTemplate,
      processToggle: processToggle,
      processUpdatedSchema: processUpdatedSchema,
      registerArrayHandlers: registerArrayHandlers,
      registerHandler: registerHandler,
      setupConfig: setupConfig,
      setupSchemaRefresh: setupSchemaRefresh//,
      //startEventWatch: startEventWatch,
      //watchChange: watchChange
    });

    return CNFlexFormConstructor;

    //////////////

    function compile(schema, model, config) {
      var service = this;

      service.schema = schema;
      //console.log('compile:schema, model:', schema.compiled, service.isCompiled(), schema, model);
      if(!service.isCompiled()) {
        service.setupConfig(config);

        if(schema.forms) {
          _.each(schema.forms, function(form) {
            _.each(form.form, service.processField.bind(service));
          });
        }
        else {
          _.each(schema.form, service.processField.bind(service));
        }

        //service.assignHandlers();
        service.initModelWatch();
        service.initArrayCopyWatch();
        service.isCompiled(true);
      }

      service.broadcastErrors();
    }

    function isCompiled(setValue) {
      var service = this;
      if(setValue) {
        service.schema.compiled = setValue;
      }
      return service.schema && service.schema.compiled;
    }

    function setupConfig(config) {
      var service = this;
      if(config) {
        if(config.formCtrl) service.formCtrl = config.formCtrl;
        if(config.updateSchema) service.updateSchema = config.updateSchema;
        if(config.getSchema) service.getSchemaForm = service.setupSchemaRefresh(config.getSchema);
      }
    }

    function processSchema(field) {
      var service = this,
          schema = field.schema;

      if(schema) {

        field.getSchemaType = function() {
          return _.isArray(schema.type) ? _.first(schema.type) : schema.type;
        };

        service.processDefault(field);
      }
    }

    function processDefault(field) {
      var service = this,
          schema = field.schema;
      //console.log('processDefault:', field.key, schema, service.updates);
      if(schema.default) {
        var key = service.getKey(field.key);
        // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
        if(service.updates) {
          if(key.includes && key.includes('[]')) return;
          var model = service.parseExpression(field.key, service.model);
          var modelValue = model.get();
          // if there's an existing default and it's the same as the current value
          // update the current value to the new default
          //console.error('default:', key, modelValue, service.defaults[key], angular.equals(modelValue, service.defaults[key]));
          if(!service.defaults[key] || _.isUndefined(modelValue) || angular.equals(modelValue, service.defaults[key])) {
            model.set(schema.default);
          }
        }
        service.defaults[key] = angular.copy(schema.default);
      }
    }

    function processFieldset(fieldset) {
      var service = this;

      fieldset.type = 'cn-fieldset';
      _.each(fieldset.items, service.processField.bind(service));

      if(fieldset.collapsible) {
        fieldset.toggleCollapse = function() {
          if(fieldset.collapsible) {
            fieldset.collapsed = !fieldset.collapsed;
          }
        };

        fieldset.render = !fieldset.collapsed;
      }
      else {
        fieldset.render = true;
      }
    }

    function processField(field) {
      var service = this;

      if(field.type === 'fieldset') {
        service.processFieldset(field);
      }
      else {
        if(!field._ogKeys) field._ogKeys = _.without(_.keys(field), 'key');

        var key = service.getKey(field.key);

        if(field.key) {
          service.addToFormCache(field, key);
          field.schema = service.getSchema(key);

          if(field.schema) {
            if(field.schema.description) field.description = field.schema.description;
            if(field.readonly && !field.schema.readonly) field.readonly = false;
          }
        }

        service.processSchema(field);

        if(!field.type) field.type = field.getSchemaType && field.getSchemaType();

        if(field.resolve) service.processResolve(field);

        if(field.watch) service.processFieldWatch(field);

        if(field.type === 'section' || field.type === 'tabarray') {
          service.processSection(field);
        }
        else if(field.type === 'component') {
          service.processComponent(field);
        }
        else {

          for(var i = 0, l = fieldTypeRegister.length; i < l; i++) {
            var fieldType = fieldTypeRegister[i];
            if(fieldType.condition(field)) {
              if(_.isString(fieldType.handler)) {
                service[fieldType.handler](field);
              }
              else if(_.isFunction(fieldType.handler)) {
                fieldType.handler.call(service, field);
              }
              break;
            }
          }

          //if(field.updateSchema) service.processSchemaUpdate(field);
          if(field.updateSchema) service.registerHandler(field, null, field.updateSchema);
          //if(field.handlers && field.handlers.length) service.addChangeEvent(field);
          if(field.error) service.errors.push(service.buildError(field));
        }
      }
    }

    function getKey(key) {
      if(_.isArray(key)) {
        key = _.reduce(key, function(total, next) {
          if(/^(\d*)$/.test(next)) {
            return total + '[' + next + ']';
          }
          return total + '.' + next;
        });
      }
      return key;
    }

    function getSchema(key, depth) {
      if(!key) return;
      var service = this;
      key = service.getKey(key);

      //console.log('getSchema:', key, depth, service);
      //key = key.split('.');
      key = key
          .replace(/arrayIndex/g, '')
          .replace(/(\[')([^.]+)\.([^.]+)('])/g, '.$2%ff_dt%$3')
          .replace(/\./g, '%ff_sp%')
          .replace(/%ff_dt%/g, '.')
          .split('%ff_sp%');
      depth = depth || service.schema.schema.properties;

      var first, matchArray;

      while(key.length > 1) {
        first = key[0];
        matchArray = first.match(/\[\d*]$/);
        //if(first.slice(first.length - 2) === '[]') {
        if(matchArray) {
          depth = depth[key.shift().slice(0, first.length - matchArray[0].length)].items.properties;
        }
        else {
          depth = depth[key.shift()].properties;
        }
      }

      first = key[0];
      matchArray = first.match(/\[\d*]$/);

      if(matchArray) {
        return depth[first.slice(0, first.length - matchArray[0].length)].items;
      }

      return depth[first];
    }

    function processResolve(field) {
      var service = this;

      _.each(field.resolve, function(dataKey, fieldKey) {
        //field[fieldKey] = service.schema.data[dataKey];
        //console.log('service.parseExpression(dataKey).get():', dataKey, fieldKey, service.parseExpression(dataKey).get());
        field[fieldKey] = service.parseExpression(dataKey).get();
      });

      return field;
    }

    function processFieldWatch(field) {
      var service = this,
          schema = field.schema;

      field.watch = _.isArray(field.watch) ? field.watch : [field.watch];

      _.each(field.watch, function(watch) {
        if(watch.resolution) {
          var condition = watch.condition;
          var resolution = watch.resolution;
          var adjustment = {};

          adjustment.date = resolution.match(/\+ ?(\d+) days/);

          if(adjustment.date) {
            adjustment.date = adjustment.date[1];
            resolution = resolution.replace(adjustment.date, '').trim();
          }
          else {
            adjustment.math = resolution.match(/(\+|\-|\/|\*) ?(\S+)/);

            if(adjustment.math) {
              adjustment.operator = {
                '+': 'add',
                '-': 'subtract',
                '*': 'multiply',
                '/': 'divide'
              }[adjustment.math[1]];

              //console.log('adjustment:', adjustment);
              adjustment.adjuster = service.parseExpression(adjustment.math[2]);
            }
          }

          resolution = resolution.match(/(\S+) ?= ?(\S+)/);
          //console.log('resolution:', resolution);

          var handler = function() {
            var updatePath, fromPath;
            if(resolution[1].includes('arrayIndex')) {
              updatePath = replaceArrayIndex(resolution[1], arguments[2]);
            }
            if (resolution[2].includes('arrayIndex')) {
              fromPath = replaceArrayIndex(resolution[2], arguments[2]);
            }
            var update = service.parseExpression(updatePath || resolution[1]);
            var from = service.parseExpression(fromPath || resolution[2]);

            var functionCondition = service.isConditionFunction(condition);
            var parsedCondition = functionCondition ? service.parseCondition(functionCondition) : condition;

            //console.log('handler:resolution:', field.key, condition, condition && $parse(condition)(service));
            if(!parsedCondition || $parse(parsedCondition)(service)) {
              //console.log('update:', update.get(), from.get());
              if(adjustment.date) {
                update.set(moment(from.get()).add(adjustment.date, 'days').toDate());
              }
              else if(adjustment.math) {
                //var result = _[adjustment.operator](from.get(), adjustment.adjuster.get());
                //console.log('_.%s(%s, %s):', adjustment.operator, from.get(), adjustment.adjuster.get(), result);
                var result = eval(from.get() + adjustment.math[1] + adjustment.adjuster.get());
                //console.log('eval(%s %s %s):', from.get(), adjustment.math[1], adjustment.adjuster.get(), result);
                //console.log('result:', result);
                //console.log('adjustment.math:', adjustment, from.get(), adjustment.adjuster.get(), result);
                //console.log('schema.format:', schema.format);
                schema = schema || field.items && (field.items[0].schema || (field.items[0].items && field.items[0].items[0].schema));
                if(field.type === 'cn-currency') {
                  //console.log('schema.format:', schema.format, result);
                  var p = schema && schema.format === 'currency-dollars' ? 2 : 0;

                  if(adjustment.math[1] === '*') {
                    result = _.floor(result, p);
                  }
                  else if(adjustment.math[1] === '/') {
                    result = _.ceil(result, p);
                  }
                  else {
                    result = _.round(result, p);
                  }
                }
                service.listeners[update.path().exp].prev = result;
                update.set(result || 0);
              }
              else {
                update.set(from.get());
              }
            }
          };

          service.registerHandler(field, handler, field.updateSchema);
        }
      });
    }

    field.condition = 'anguar.equals(otherfield.value, 1)';

    function isConditionFunction(condition) {
      return condition && condition.match(/(\!?)(.+)\((.+)\)/);
    }

    function parseCondition(condition) {
      var service = this,
          invert = condition[1],
          functionName = condition[2],
          functionArgument = condition[3];

      if(functionName === 'any') {
        var predicate = functionArgument.match(/(.+)\[\]\.*(.*)(===|>|<|>=|<=)(.+)/),
            arr = service.parseExpression(predicate[1]).get(),
            comparator = predicate[3],
            comparisonValue = predicate[4].trim().replace(/'/g, ''),
            key = predicate[2].trim(),
            evaluation = false;

        arr.forEach(function(value) {
          var val = key ? value[key] : value;
          if(evaluatePredicate(val, comparator, comparisonValue)) {
            evaluation = true;
          }
        });

        return invert ? (!evaluation).toString() : evaluation.toString();
      }
    }

    function evaluatePredicate(val1, comparator, val2) {
      switch(comparator) {
        case '===': return val1 === val2;
        case '>=': return val1 >= val2;
        case '<=': return val1 <= val2;
        case '>': return val1 > val2;
        case '<': return val1 < val2;
      }
    }

    function registerHandler(key, handler, updateSchema) {
      var service = this;

      // if field is passed instead of key
      if(_.isObject(key) && !_.isArray(key)) {
        if(!key.key && key.items) {
          _.each(key.items, function(field) {
            service.registerHandler(field, handler, field.updateSchema);
          });
          return;
        }
        else {
          key = key.key;
        }
      }

      key = service.getKey(key);
      var arrMatch = key.match(/([^[\]]*)\[]\.?(.+)/);

      if(arrMatch) {
        service.registerArrayHandlers(arrMatch[1], arrMatch[2], handler, updateSchema);
        return;
      }

      if(!service.listeners[key]) {
        var prev = angular.copy(service.parseExpression(key, service.model).get());
        //console.log('key, prev:', key, prev, prev === service.parseExpression(key, service.model).get());
        service.listeners[key] = {
          handlers: [],
          updateSchema: updateSchema,
          prev: prev
        };
      }

      if(handler) service.listeners[key].handlers.push(handler);
    }

    function registerArrayHandlers(arrKey, fieldKey, handler, updateSchema) {
      var service = this;
      var onArray = function(cur, prev) {
        var i, l, key;

        if(prev && prev > cur) {
          for(i = 0, l = prev; i < l; i++) {
            key = arrKey + '[' + i + ']' + '.' + fieldKey;
            service.deregisterHandlers(key);
          }
          for(i = 0, l = cur; i < l; i++) {
            key = arrKey + '[' + i + ']' + '.' + fieldKey;
            service.registerHandler(key, handler, updateSchema);
          }
        }
        else if(cur > (prev || 0)) {
          for(i = prev, l = cur; i < l; i++) {
            key = arrKey + '[' + i + ']' + '.' + fieldKey;
            service.registerHandler(key, handler, updateSchema);
          }
        }
      };

      var arrVal = service.parseExpression(arrKey, service.model).get();
      _.each(arrVal, function(field, i) {
        var key = arrKey + '[' + i + ']' + '.' + fieldKey;
        service.registerHandler(key, handler, updateSchema);
      });

      if(service.arrayListeners[arrKey + '.length']) {
        service.arrayListeners[arrKey + '.length'].handlers.push(onArray);
      } else {
        service.arrayListeners[arrKey + '.length'] = {
          handlers: [onArray],
          prev: arrVal ? arrVal.length : 0
        };
      }
    }

    function deregisterHandlers(key) {
      var service = this;
      service.listeners[key] = undefined;
    }

    function initModelWatch() {
      //console.log('initModelWatch:', initModelWatch);
      var service = this;
      if(service.watching) return;
      if(service.modelWatch) service.modelWatch();

      service.modelWatch = $rootScope.$watch(
          function() { return service.model; },
          service.onModelWatch.bind(service),
          true
      );

      service.initSchemaParams();
      service.watching = true;
    }

    function onModelWatch(cur, prev) {
      var service = this;
      if(!angular.equals(cur, prev)) {

        service.prevParams = angular.copy(service.params);
        service.params = {};

        _.each(service.arrayListeners, function(listener, key) {
          var val = service.parseExpression(key, service.model).get();
          if(!angular.equals(val, listener.prev)) {
            _.each(listener.handlers, function(handler) {
              handler(val, listener.prev);
            });
            listener.prev = angular.copy(val);
          }
        });

        _.each(service.listeners, function(listener, key) {
          //console.log('listener:', key, listener);
          if(listener) {
            var val = service.parseExpression(key, service.model).get();
            if(!angular.equals(val, listener.prev)) {
              _.each(listener.handlers, function(handler) {
                handler(val, listener.prev, key);
              });
              listener.prev = angular.copy(val);
            }
            if(listener.updateSchema && !angular.isUndefined(val) && val !== null) {
              service.params[key] = val;
            }
          }
        });

        //console.log('service.params, service.prevParams:', service.params, service.prevParams, !angular.equals(service.params, service.prevParams), service.updates);
        if(!angular.equals(service.params, service.prevParams)) {
          if(service.model.id && !service.updates && _.isEmpty(service.prevParams)) {
            ++service.updates;
          }
          else {
            service.refreshSchema();
          }
        }
      }
    }

    function initSchemaParams() {
      var service = this;
      _.each(service.listeners, function(listener, key) {
        if(listener) {
          var val = service.parseExpression(key, service.model).get();
          if(listener.updateSchema && !angular.isUndefined(val) && val !== null) {
            service.params[key] = val;
          }
        }
      });
    }

    function initArrayCopyWatch() {
      var service = this;
      service.events.push($rootScope.$on('schemaFormPropagateScope', function(event, scope) {
        //console.log('propagated scope:', service.getKey(scope.form.key), scope);
        var key = service.getKey(scope.form.key).replace(/\[\d+]/g, '[]');
        service.addArrayCopy(scope.form, key);
      }));
    }

    function addArrayCopy(form, key) {
      var service = this;
      if(!service.arrayCopies[key]) service.arrayCopies[key] = [];
      service.arrayCopies[key].push(form);
    }

    function getArrayCopies(key) {
      var service = this;
      return service.arrayCopies[key];
    }

    function addToFormCache(field, key) {
      var service = this;
      key = key || service.getKey(field.key);
      if(!service.getFromFormCache(key)) service.formCache[key] = field;
    }

    function getFromFormCache(key) {
      var service = this;
      return service.formCache[key];
    }

    function addToDataCache(key, modelValue) {
      var service = this;

      if(key) {
        service.dataCache[key] = modelValue;
      }
    }

    function getFromDataCache(key) {
      var service = this;

      return service.dataCache[key];
    }

    function parseExpression(exp, depth) {
      var service = this;
      // if expression is specific value
      if(!exp || /^(null|false|true|undefined|''|[0-9.]+|\[]|\{})$/.test(exp)) {
        return {
          "get": function() {
            return eval(exp);
          }
        };
      }

      exp = service.getKey(exp);

      var key;
      var cached;
      var match = exp.match(/^(model\.)?(\S+)$/);

      // return from cache if possible
      if(!/\[]/.test(exp) && match && match[2]) {
        if(!depth || depth === service.model) {
          key = match[2];

          cached = service.getFromDataCache(key);
          if(cached) {
            return cached;
          }
        }
      }

      var modelValue = {
        "get": function() {
          var path = exp.replace(/\[]/g, '').replace(/\[(\d+)]/g, '.$1').split('.');
          var start = depth || service;

          while(start && path.length > 1) {
            start = start[path.shift()];
          }

          //if(/\[]/g.test(exp)) {
          //  console.log('exp:', exp, start, start && start[path[0]]);
          //}
          return start && start[path[0]];
        },
        "set": function(val) {
          var path = exp.replace(/\[]/g, '').replace(/\[(\d+)]/g, '.$1').split('.');
          var start = depth || service;

          while(start && path.length > 1) {
            var key = path.shift();
            if(!start[key]) {
              start[key] = {};
            }
            start = start[key];
          }

          start[path[0]] = val;

          return val;
        },
        "path": function() {
          return {
            exp: exp,
            depth: depth
          };
        }
      };

      if(key) {
        service.addToDataCache(key, modelValue);
      }

      return modelValue;
    }

    function processSection(section) {
      var service = this;

      _.each(section.items, service.processField.bind(service));
    }

    function processComponent(component) {
      var service = this;
      //if(component.handlers) service.addChangeEvent(component);

      component.type = 'section';
      component.htmlClass = 'row';

      var cols = 12 / _.reject(component.items, 'hidden').length;

      _.each(component.items, function(field, i) {
        service.processField(field);
        component.items[i] = {
          type: 'section',
          htmlClass: 'col-sm-' + cols,
          items: [field]
        };
      });
    }

    function processCurrency(field) {
      //console.log('processCurrency:', field);
      field.currencyFormat = field.schema.format === 'currency-dollars' ? 'dollars' : 'cents';
      field.type = 'cn-currency';
    }

    function processPercentage(field) {
      field.type = 'cn-percentage';
    }

    function processRadiobuttons(radios) {
      var service = this;
      radios.type = 'cn-radiobuttons';
      if(radios.fullWidth) {
        radios.btnClass = 'col-sm-' + _.divide(12, radios.titleMap.length);
      }
    }

    function processDate(date) {
      date.type = 'cn-datetimepicker';
    }

    function processSelect(select) {
      var service = this,
          schema = select.schema;

      if(select.titleMapResolve || select.titleMap) {
        select.getTitleMap = function() {
          return select.titleMap || service.schema.data[select.titleMapResolve];
        };

        select.onInit = function(val, form, event, setter) {
          var modelValue = service.parseExpression(form.key, service.model);
          // make sure we have correct value
          //console.log('init:', form.key, val, event);
          val = modelValue.get();
          if(event === 'tag-init') {
            var newVal;
            if(form.schema.type === 'array') {
              if(form.schema.items.type !== 'object') {
                newVal = [];
                _.each(val, function(val) {
                  var match = {};
                  match[select.valueProperty || 'value'] = val;
                  newVal.push(_.find(select.getTitleMap(), match));
                });
              }
            }
            else {
              var match = {};
              match[select.valueProperty || 'value'] = val;
              newVal = _.find(select.getTitleMap(), match);
            }
            //console.log('newVal:', newVal);
            if(newVal) setter(newVal);
          }
        };
      }

      if(select.titleMapQuery) {
        var key = select.titleMapQuery.params.q;
        select.titleQuery = function(q) {
          console.log('titleMap:', q);
          var params = {};
          if(key) {
            params[key] = q;
          }
          return Api.get({
            url: select.titleMapQuery.url,
            params: params
          });
        };

        // wrap in string so returns truthy when compiled, but converted to number within directive
        if(!key) select.minLookup = '0';

        select.onInit = function(val, form, event, setter) {
          //console.log('titleQuery:onInit:', val, form, event, setter);
          if(event === 'tag-init') {
            setter(val);
          }
        };
      }

      if(schema.items) {
        var defaults = [];
        _.each(schema.items.properties, function(schema, key) {
          if(angular.isDefined(schema.default)) {
            defaults.push({
              "key": key,
              default: schema.default
            });
          }
        });
        if(defaults.length) {
          select.onAdd = function(val, form, event) {
            if(val.value && event === 'tag-added') {
              _.each(defaults, function(prop) {
                //console.log('prop:', prop, val);
                if(!val.value[prop.key]) val.value[prop.key] = prop.default;
              });
            }
          };
        }
      }

      if(!select.type.includes('cn-autocomplete')) {
        if(select.items) {
          select.detailedList = true;

          if(select.items[0].type !== 'component') {
            if(select.items.length > 1) {
              select.items = [{
                type: "component",
                items: select.items
              }];
            }

            service.processFieldset(select);
          }

          select.type = 'cn-autocomplete-detailed';
        }
        else {
          if(select.key === 'tags') {
            select.selectionStyle = 'tags';
          }
          else if(select.getSchemaType() === 'array' && select.schema.maxItems !== 1) {
            select.selectionStyle = 'list';
          }
          else {
            select.selectionStyle = 'select';
          }
          select.type = 'cn-autocomplete';
        }
      }

      if(select.displayFormat) {
        select.itemFormatter = service.processTemplate(select.displayFormat);
      }

      service.registerHandler(select.key, function(val) {
        var form = service.formCtrl && service.formCtrl[service.getKey(select.key)];
        if(form && form.$setDirty) form.$setDirty();
      }, select.updateSchema);
    }

    function processToggle(toggle) {
      toggle.type = 'cn-toggle';
    }

    function processHelp(help) {
      help.htmlClass = 'help-block';
    }

    function processDisplay(display) {
      var service = this;
      display.type = 'cn-display';
      display.getDisplay = service.processTemplate(display.displayFormat, true);
    }

    function processTemplate(tpl, parseScope) {
      var service = this;
      //console.log('tpl:', tpl);
      //var processor = /<(\S+)[^>]*>.*<\/\1>/.test(tpl) ? $compile : $interpolate;
      var processor = $interpolate;
      return function(scope, arrayIndex) {
        //console.log('tpl, scope, processor:', tpl, scope, processor);
        //console.log('processor(tpl)(scope):', processor(tpl)(scope));
        if(parseScope) {
          if(angular.isDefined(arrayIndex)) {
            scope = _.map(scope, function(key) {
              return key === 'arrayIndex' ? arrayIndex : key;
            });
          }
          scope = service.parseExpression(scope, service.model).get();
        }
        return processor(tpl)(scope);
      };
    }

    function getStateParams() {
      return _
          .chain($stateParams)
          .omit(omitParams)
          .omit(function(v) {
            return _.isUndefined(v) || _.isNull(v);
          })
          .value();
    }

    function setupSchemaRefresh(refresh) {
      var service = this;
      service.refreshSchema = _.debounce(function(force) {
        var params = _.extend(service.getStateParams(), service.params);
        var diff = cnUtil.diff(service.schema.params, params, true);

        if(diff || force) {
          var keys = _.keys(diff);

          if(keys.length > 1) {
            diff = _.omit(diff, _.isNull);
            keys = _.keys(diff);
          }
          //console.log('keys, diff:', keys, diff, {
          //  cur: _.clone(params),
          //  prev: _.clone(service.schema.params)
          //});

          params.updateSchema = _.first(keys);

          if(!params.updateSchema) {
            diff = cnUtil.diff(params, _.omit(service.schema.params, 'updateSchema'));
            keys = _.keys(diff);

            //console.log('keys, diff:', keys, diff);
            params.updateSchema = _.first(keys);
          }

          refresh(params).then(function(schema) {
            ++service.updates;
            //service.updateSchema(schema);
            service.processUpdatedSchema(schema);
          });
        }
      }, 100);

      service.refreshData = _.debounce(function() {
        refresh(_.extend(service.schema.params, {updateSchema: 'refreshData'})).then(function(schema) {
          service.processUpdatedSchema(schema);
          console.log('service.schema.params:', service.schema.params);
        });
      }, 100);

      service.events.push($rootScope.$on('ffRefreshData', service.refreshData));
    }

    function processUpdatedSchema(schema) {
      var service = this;
      if(schema.diff) {
        service.schema.params = schema.params;
        if(schema.diff.data) {
          _.each(schema.diff.data, function(data, key) {
            service.schema.data[key] = data;
          });
        }

        var keys = [];

        if(schema.diff.schema) {
          //_.extend(service.schema.schema, schema.diff.schema);
          _.each(schema.diff.schema, function(schema, key) {
            service.schema.schema.properties[key] = schema;
            reprocessSchema(schema, key, keys);
          });
        }
        if(schema.diff.form) {
          _.each(schema.diff.form, function(form) {

            if(keys.indexOf(form.key) === -1) {
              keys.push(form.key);
            }

            // don't want to override key when extending cached objects
            var key = form.key;
            delete form.key;

            var cached = service.getFromFormCache(key);
            if(cached) {
              reprocessField(cached, form);
            }
            var copies = service.getArrayCopies(key);
            if(copies) {
              _.each(copies, function(copy) {
                reprocessField(copy, form);
              });
            }
          });
        }

        if(keys.length) {
          _.each(keys, function(key) {
            var form = service.getFromFormCache(key);
            if(form) service.processField(form);
            if(key.includes('[]')) {
              var copies = service.getArrayCopies(key);
              _.each(copies, function(copy) {
                if(copy) service.processField(copy);
              });
            }
          });
        }

        service.broadcastErrors();
      }
      else {
        service.updateSchema(schema);
      }
    }

    function reprocessField(current, update, isChild) {
      _.extend(current, _.omit(update, 'items', 'key'));

      _.each(current._ogKeys, function(key) {
        if(!update[key]) delete current[key];
      });
      current._ogKeys = _.keys(update);

      // we shouldn't reprocess all child items if they haven't changed, let
      // the diff tell us which specific fields to update
      //_.each(update.items, function(child, i) {
      //  //console.log('child:', child, current.items[i]);
      //  if(child.key) reprocessField(current.items[i], child, true);
      //});

      if(!isChild && current.redraw) current.redraw();
    }

    function reprocessSchema(schema, key, keys) {
      keys.push(key);
      if(schema.properties) {
        _.each(schema.properties, function(schema, subKey) {
          reprocessSchema(schema, key + '.' + subKey, keys);
        });
      }
      if(schema.items && schema.items.properties) {
        _.each(schema.properties, function(schema, subKey) {
          reprocessSchema(schema, key + '[].' + subKey, keys);
        });
      }
    }

    function buildError(field) {
      var service = this;
      var key = service.getKey(field.key);
      return {
        key: key,
        message: field.error
      };
    }

    function broadcastErrors() {
      var service = this;
      $timeout(function() {
        service.errors.forEach(function(error) {
          $rootScope.$broadcast('schemaForm.error.' + error.key, 'serverValidation', error.message);
        });
      }, 1);
    }

    function replaceArrayIndex(resolve, key) {
      var arrayIndexKey = /([^.]*)\[arrayIndex\]/.exec(resolve);
      var re = new RegExp(arrayIndexKey[1] + '\\[(\\d+)\\]');
      var index = re.exec(key);
      return resolve.replace(arrayIndexKey[0], index[0]);
    }

    function cleanup() {
      var service = this;
      _.each(service.events, function(listener) {
        listener();
      });
    }
  }
})();