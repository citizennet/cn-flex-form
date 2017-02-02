// Need these modules for test bundle
var _ = typeof window !== 'undefined' && window._ || require('lodash');
var ObjectPath = typeof window !== 'undefined' && window.ObjectPath || require('objectpath');

const fieldTypeHandlers = {
  'fieldset': 'processFieldset',
  'cn-radios': 'processRadios',
  'cn-radiobuttons': 'processRadiobuttons',
  'cn-autocomplete': 'processSelect',
  'cn-datetimepicker': 'processDate',
  'help': 'processHelp',
  'cn-display': 'processDisplay',
  'cn-currency': 'processCurrency',
  'cn-percentage': 'processPercentage',
  'cn-mediaupload': 'processMediaUpload',
  'cn-csvupload': 'processCsvUpload',
  'cn-reusable': 'processReusable',
  'cn-toggle': 'processToggle',
  'cn-table': 'processTable',
  'component': 'processComponent',
  'section': 'processSection',
  'tabarray': 'processSection',
  'array': 'processArray'
};

const fieldPropHandlers = [{
  prop: 'selectDisplay',
  handler: (field, service) => service.processSelectDisplay(field)
}, {
  prop: 'resolve',
  handler: (field, service) => service.processResolve(field)
}, {
  prop: 'watch',
  handler: (field, service) => field.watch && service.processFieldWatch(field)
}, {
  prop: 'type',
  handler: (field, service) => service.processFieldType(field)
}, {
  prop: 'conditionals',
  handler: (field, service) => service.processConditional(field)
}, {
  prop: 'default',
  handler: (field, service) => service.processDefault(field)
}, {
  prop: 'schema',
  handler: (field, service) => 
    _.isUndefined(field.default) && !_.isUndefined(field.schema.default) && service.processDefault(field)
}, {
  prop: 'updateSchema',
  handler: (field, service) => service.registerHandler(field, null, field.updateSchema)
}];

function cnFlexFormServiceProvider(schemaFormDecoratorsProvider, cnFlexFormTypesProvider) {
  'ngInject';

  return {
    registerField,
    $get: CNFlexFormService
  };

  //////////

  function registerField(fieldType) {
    if(fieldType.condition) {
      cnFlexFormTypesProvider.registerFieldType({
        condition: fieldType.condition,
        type: fieldType.type
      });
    }

    if(fieldType.handler) {
      fieldTypeHandlers[fieldType.type] = fieldType.handler;
    }

    if(fieldType.templateUrl) {
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

function CNFlexFormService(
  Api,
  $parse,
  cnFlexFormConfig,
  cnFlexFormTypes,
  sfPath,
  $interpolate,
  $rootScope,
  $timeout,
  cnUtil,
  $stateParams
) {
  'ngInject';

  const services = [];
  const prototype = {
    compile,
    addArrayCopy,
    addToDataCache,
    addToFormCache,
    addToScopeCache,
    broadcastErrors,
    buildError,
    cleanup,
    deregisterHandlers,
    deregisterArrayHandlers,
    getArrayCopy,
    getArrayCopies,
    getArrayCopiesFor,
    getArrayScopes,
    getDefault,
    getFromDataCache,
    getFromFormCache,
    getFromScopeCache,
    getKey,
    getSchema,
    getWatchables,
    handleResolve,
    initArrayCopyWatch,
    initModelWatch,
    initSchemaParams,
    isCompiled,
    onModelWatch,
    parseCondition,
    parseExpression,
    processArray,
    processDefault,
    processDisplay,
    processField,
    processFieldset,
    processFieldProps,
    processFieldType,
    processFieldWatch,
    processComponent,
    processConditional,
    processCurrency,
    processPercentage,
    processDate,
    processHelp,
    processRadios,
    processRadiobuttons,
    processReusable,
    processSchema,
    processSelectDisplay,
    processResolve,
    processSection,
    processSelect,
    processTable,
    processTemplate,
    processToggle,
    processUpdatedSchema,
    processMediaUpload,
    processCsvUpload,
    registerArrayHandlers,
    registerHandler,
    registerResolve,
    replaceArrayIndex,
    reprocessField,
    resolveNestedExpressions,
    setArrayIndex,
    setupConfig,
    setupArraySelectDisplay,
    setupSelectDisplay,
    setupSchemaRefresh
  };

  function CNFlexFormConstructor(schema, model, config) {
    var service;
    if(services.length) {
      for(var i = 0, l = services.length; i < l; i++) {
        if(services[i].model === model) {
          service = services[i];
          service.compile(schema, model, config);
          break;
        }
      }
    }
    if(!service) {
      service = new CNFlexForm(schema, model, config);
      services.push(service);
    }
    return service || new CNFlexForm(schema, model, config);
  }

  function CNFlexForm(schema, model, config) {

    if($stateParams.debug) {
      window.services = services;
    }

    this.arrayCopies = {};
    this.arrayListeners = {};
    this.dataCache = {};
    this.defaults = {};
    this.errors = [];
    this.events = [];
    this.formCache = {};
    this.scopeCache = {};
    this.listeners = {};
    this.resolveRegister = {};
    this.model = model;
    this.updates = 0;

    this.params = cnFlexFormConfig.getStateParams();

    this._ = _;

    this.compile(schema, model, config);
  }

  _.extend(CNFlexForm.prototype, prototype);
  _.extend(CNFlexFormConstructor, prototype);

  return CNFlexFormConstructor;

  //////////////

  function compile(schema, model, config) {
    var service = this;

    service.schema = schema;
    service.model = model;

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
    const service = this;
    const { schema } = field;

    field.getSchemaType = () => _.isArray(schema.type) ? _.first(schema.type) : schema.type;
    if(!field.type) field.type = field.getSchemaType && field.getSchemaType();
  }

  function processDefault(field) {
    const service = this;
    const { schema } = field;
    const curDefault = field.default || schema.default;
    const key = service.getKey(field.key);
    
    // if default is returned for new form, treat it as a previous param in order to not trigger unnecessary updateSchema
    if(!service.updates && field.updateSchema && angular.isDefined(curDefault) && !service.schema.params[key]) {
      service.schema.params[key] = curDefault;
    }

    // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
    if(service.updates || field.default) {
      if(key.includes && key.includes('[]')) return;
      const model = service.parseExpression(field.key, service.model);
      const modelValue = model.get();
      // if there's an existing default and it's the same as the current value
      // update the current value to the new default
      if(_.isTrulyEmpty(modelValue) || (_.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key]))) {
        model.set(curDefault);
      }
    }
    service.defaults[key] = angular.copy(curDefault);

    if(schema.format === 'url' && !field.validationMessage) {
      if(!field.type) field.type = 'url';
      field.validationMessage = 'Must be a valid url (https://...)';
    }
  }

  function processFieldset(fieldset) {
    var service = this;

    fieldset.type = 'cn-fieldset';
    fieldset.items.forEach(service.processField.bind(service));

    if(_.has(fieldset, 'pos') && fieldset.pos === 0) {
      fieldset.htmlClass = 'borderless';
    }
    if(fieldset.collapsible) {
      fieldset.toggleCollapse = (fieldset) => {
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

  function processFieldType(field) {
    const service = this;
    const fieldType = cnFlexFormTypes.getFieldType(field);
    const handler = fieldTypeHandlers[fieldType];
    if(_.isString(handler)) {
      service[handler](field);
    }
    else if(_.isFunction(handler)) {
      handler.call(service, field);
    }
  }

  function processField(field, pos) {
    const service = this;

    if(angular.isDefined(pos)) {
      field.pos = pos;
    }

    if(!field._ogKeys) {
      field._ogKeys = _.without(_.keys(field), 'key', 'htmlClass');
    }

    const key = service.getKey(field.key);

    if(key) {
      service.addToFormCache(field, key);
      const schema = service.getSchema(key);

      if(schema) {
        field.schema = schema;
        if(schema.description) field.description = schema.description;
        if(field.readonly && !schema.readonly) field.readonly = false;
        if(schema.type === 'array' && !('showClearAll' in field)) field.showClearAll = true;
      }

      service.processSchema(field);
    }

    service.processFieldProps(field);

    if(key) {
      if(_.find(service.errors, { key })) {
        service.errors = _.reject(service.errors, {key: key});
        $rootScope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
        $rootScope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
      }
      
      if(field.error) {
        service.errors.push(service.buildError(field));
        if(_.isEmpty(field.ngModelOptions)) {
          field.ngModelOptions = {
            allowInvalid: true
          };
        } else {
          field.ngModelOptions.allowInvalid = true;
        }
      }
    }
  }

  function processFieldProps(field) {
    const service = this;
    fieldPropHandlers.forEach(({ prop, handler }) =>
        _.has(field, prop) && handler(field, service)
    );
  }

  function getKey(key) {
    if(_.isArray(key)) {
      key = _.reduce(key, (total, next) => 
          /^(-?\d*)$/.test(next) ? total + '[' + next + ']' : total + '.' + next);
    }
    return key;
  }

  function getSchema(key, depth) {
    var service = this;
    if(!key) return;

    key = ObjectPath.parse(service.getKey(key));
    depth = depth || service.schema.schema.properties;

    let first, next;

    while(key.length > 1) {
      first = key[0];
      next = key[1];
      if(/^-?\d*$/.test(next)) {
        if(key.length === 2) {
          depth = depth = depth[key.shift()];
        }
        else {
          depth = depth[key.shift()].items.properties;
          key.shift();
        }
      }
      else {
        depth = depth[key.shift()].properties;
      }
    }

    // if array item
    first = key[0] || 'items';

    return depth[first];
  }

  function getDefault(field) {
    const service = this;
    console.log(':: getDefault ::', field);
    field = field.key ? field : service.getFromFormCache(field);
    console.log(':: getDefault ::', field);
    return field && (angular.isDefined(field.default) ? field.default : field.schema && field.schema.default);
  }

  function getWatchables(exp) {
    const watchables = [];
    let nested = matchNestedExpression(exp);
    let replaceStr = '';

    while(nested) {
      if(/^-?\d+$/.test(nested[1])) {
        replaceStr = nested[0];
        exp = exp.replace(nested[0], 'ff_replace_ff');
      }
      else {
        watchables.push(nested[1].replace(/ff_replace_ff/g, replaceStr));
        replaceStr = '';
        exp = exp.replace(nested[0], '');
      }
      nested = matchNestedExpression(exp);
    }

    return [...watchables, exp.replace(/ff_replace_ff/g, replaceStr)];
  }

  function processResolve(field) {
    const service = this;
    const key = service.getKey(field.key);

    _.each(field.resolve, function(dataProp, fieldProp) {
      dataProp = replaceArrayIndex(dataProp, key);
      if(dataProp.includes('[arrayIndex]')) return;

      service.handleResolve(field, fieldProp, dataProp);

      getWatchables(dataProp).forEach((watchable) => {
        const resolveType = watchable.match(/(schema\.data\.|model\.)(\S+)/);

        if(resolveType) {
          if(resolveType[1] === 'schema.data.') {
            service.registerResolve(field, fieldProp, resolveType[2], dataProp);
          }
          else if(resolveType[1] === 'model.') {
            service.registerHandler(resolveType[2], () => {
              service.handleResolve(field, fieldProp, dataProp);
            });
          }
        }
      });
    });

    return field;
  }

  function handleResolve(field, fieldProp, exp) {
    const service = this;
    let data = service.parseExpression(exp).get();
    // if we're resolving from model but defaults haven't been applied yet, resolve from default itself
    if(!data && exp.indexOf('model.') === 0) {
      const key = exp.replace('model.', '');
      const cachedField = service.getFromFormCache(key);
      
      if(cachedField && cachedField.default) data = cachedField.default;
      else data = field.default || service.getSchema(key).default;
    }
    if(data && data.cursor) {
      field.loadMore = function() {
        const dataProp = exp.match(/schema\.data\.(.+)/)[1];
        service.refreshSchema(`data:${dataProp}:${data.cursor}`);
      };
    } 
    else {
      delete field.loadMore;
    }
    field[fieldProp] = (data && data.data) ? data.data : data;

    fieldPropHandlers.forEach(({ prop, handler }) => 
        prop === fieldProp && handler(field, service)
    );
  }

  function registerResolve(field, fieldProp, dataProp, exp) {
    var service = this;

    let fieldKey = service.getKey(field.key);
    service.resolveRegister[dataProp] = service.resolveRegister[dataProp] || {};

    let register = service.resolveRegister[dataProp];
    register[fieldKey] = register[fieldKey] || [];
    register[fieldKey].push({ field, prop: fieldProp, exp });
  }

  function processConditional(field) {
    const service = this;

    _.each(field.conditionals, (condition, key) => {
      const handler = (val, prev) => {
        field[key] = service.parseCondition(condition);
        const scope = service.getFromScopeCache(service.getKey(field.key));
        if(key === 'required' && scope) {
          $rootScope.$broadcast('schemaFormValidate');
        }
      };
      field
          .conditionals[key]
          .match(/model\.([^\s]+)/g)
          .map(path => path.match(/model\.([^\s]+)/)[1])
          .forEach(key => {
            service.registerHandler(key, handler);
          });
      handler();
    });
  }

  function processFieldWatch(field) {
    const service = this;
    if(!field.watch) return;

    let schema = field.schema;
    field.watch = _.isArray(field.watch) ? field.watch : [field.watch];

    _.each(field.watch, function(watch) {
      if(watch.resolution) {
        let condition = watch.condition;
        let resolution = watch.resolution;
        let handler;

        if(_.isFunction(resolution)) {
          handler = function(cur, prev) {
            if(!condition || service.parseCondition(condition)) {
              resolution(cur, prev);
            }
          };
        }
        else {
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

              adjustment.adjuster = service.parseExpression(adjustment.math[2]);
            }
          }

          resolution = resolution.match(/(\S+) ?= ?(\S+)/);

          handler = (val, prev, key, trigger) => {
            let curCondition = condition && replaceArrayIndex(condition, key);
            let updatePath = replaceArrayIndex(resolution[1], key);
            let fromPath = replaceArrayIndex(resolution[2], key);

            let update = service.parseExpression(updatePath);

            // avoid loop where two watches keep triggering each other
            if(trigger === update.path().key) return;
            trigger = update.path().key;

            let from = service.parseExpression(fromPath);

            if(!condition || service.parseCondition(curCondition)) {
              if(adjustment.date) {
                update.set(moment(from.get()).add(adjustment.date, 'days').toDate());
              }
              else if(adjustment.math) {
                //var result = _[adjustment.operator](from.get(), adjustment.adjuster.get());
                //let result = eval(from.get() + adjustment.math[1] + adjustment.adjuster.get());
                let result = $parse(from.get() + adjustment.math[1] + adjustment.adjuster.get())();
                schema = schema || field.items && (field.items[0].schema || (field.items[0].items && field.items[0].items[0].schema));
                if(field.type === 'cn-currency') {
                  let p = schema && schema.format === 'currency-dollars' ? 2 : 0;

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
                //service.listeners[update.path().key].prev = result;
                if(service.listeners[trigger]) {
                  service.listeners[trigger].trigger = key;
                }
                update.set(result || 0);
              }
              else {
                update.set(from.get());
              }
            }
          };
        }

        service.registerHandler(field, handler, field.updateSchema, watch.initialize);
      }
    });
  }

  function parseCondition(condition) {
    let service = this;
    if(condition.startsWith("_")) {
      let exp = /^_\.(.*?)\((.*?),[\s(]*(.*?)\)?\s*=>[{\s]*(?:return)?(.*?)\}?\)$/;
      let [, fn, list, predicateParams, predicateBody] = condition.match(exp);
      return _[fn]($parse(list)(service), generatePredicate(predicateParams, predicateBody));
    } else {
      return $parse(condition)(service);
    }
  }

  function generatePredicate(params, body) {
    return (...args) =>
      $parse(body)(params
              .replace(/\s/g, '')
              .split(',')
              .reduce((acc, cur, i) => { acc[cur] = args[i]; return acc; }, {})
            );
  }

  function registerHandler(key, handler, updateSchema, runHandler) {
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
    var arrMatch = key.match(/([^[\]]*)\[]\.?(.*)/);

    if(arrMatch) {
      service.registerArrayHandlers(arrMatch[1], arrMatch[2], handler, updateSchema, runHandler);
      return;
    }

    var cur = service.parseExpression(key, service.model).get();
    let defaultValue = _.get(service.getSchema(key), 'default');

    if(!service.listeners[key]) {
      var prev = _.isUndefined(cur) ? angular.copy(defaultValue) : angular.copy(cur);
      service.listeners[key] = {
        handlers: [],
        updateSchema: updateSchema,
        prev: prev
      };
    }

    if(handler) {
      service.listeners[key].handlers.push(handler);
      if(runHandler) handler(cur, null, key);
    }
  }

  function registerArrayHandlers(arrKey, fieldKey, handler, updateSchema, runHandler) {
    var service = this;
    var onArray = function(cur, prev, reorder) {

      if(!prev && prev !== 0 && (cur | 0) < 1) return;
      var i, l, key;

      if(prev > cur || reorder) {
        var lastKey = fieldKey ?
          arrKey + '[' + (prev - 1) + ']' + '.' + fieldKey :
          arrKey + '[' + (prev - 1) + ']';

        // only deregister handlers once each time an element is removed
        if(service.listeners[lastKey]) {
          for(i = 0, l = prev; i < l; i++) {
            key = fieldKey ?
              arrKey + '[' + i + ']' + '.' + fieldKey :
              arrKey + '[' + i + ']';

            service.deregisterHandlers(key);
          }
        }
        for(i = 0, l = cur; i < l; i++) {
          key = fieldKey ?
            arrKey + '[' + i + ']' + '.' + fieldKey :
            arrKey + '[' + i + ']';

          service.registerHandler(key, handler, updateSchema);
          //no need to call if just reregisering handlers
          //if(runHandler) handler(null, null, key);
        }
      }
      else if(cur > (prev || 0)) {
        for(i = prev | 0, l = cur; i < l; i++) {
          key = fieldKey ?
            arrKey + '[' + i + ']' + '.' + fieldKey :
            arrKey + '[' + i + ']';

          service.registerHandler(key, handler, updateSchema, runHandler);
          //if(runHandler) handler(null, null, key);
        }
      }
    };

    var arrVal = service.parseExpression(arrKey, service.model).get();
    _.each(arrVal, function(field, i) {
      var key = fieldKey ?
        arrKey + '[' + i + ']' + '.' + fieldKey :
        arrKey + '[' + i + ']';

      service.registerHandler(key, handler, updateSchema);
      if(runHandler) handler(null, null, key);
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

    key = service.getKey(key);

    var arrMatch = key.match(/([^[\]]*)\[]\.?(.*)/);

    if(arrMatch) {
      service.deregisterArrayHandlers(arrMatch[1], arrMatch[2]);
      return;
    }

    if(service.listeners[key]) service.listeners[key].handlers = [];
  }

  function deregisterArrayHandlers(arrKey, fieldKey) {
    var service = this;

    service.parseExpression(arrKey, service.model).get().forEach((item, i) => {
      fieldKey ?
        service.deregisterHandlers(`${arrKey}[${i}].${fieldKey}`) :
        service.deregisterHandlers(`${arrKey}[${i}]`);
    });
  }

  function initModelWatch() {
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
    service.firstUpdate = true;
  }

  function onModelWatch(cur, prev) {
    var service = this;
    // we always run through the listeners on the first update because angular seems to mess up
    // when the defaults are applied and uses the same object for both cur and prev
    if(service.firstUpdate || !angular.equals(cur, prev)) {
      service.firstUpdate = false;
      cnUtil.cleanModel(service.model);

      service.prevParams = angular.copy(service.params);

      _.each(service.arrayListeners, (listener, key) => {
        let val = service.parseExpression(key, service.model).get();
        if(!angular.equals(val, listener.prev)) {
          listener.handlers.forEach(handler => handler(val, listener.prev));
          listener.prev = angular.copy(val);
        }
      });

      _.each(service.listeners, (listener, key) => {
        if(listener) {
          let val = service.parseExpression(key, service.model).get();
          const isInitArray = angular.equals(val, []) && !listener.prev;
          if(!angular.equals(val, listener.prev) && !isInitArray) {
            listener.handlers.forEach(handler => {
              handler(val, listener.prev, key, listener.trigger);
            });
            listener.trigger = null;
            listener.prev = angular.copy(val);
          }
          if(listener.updateSchema && 
            !angular.isUndefined(val) &&
            !isInitArray &&
            val !== null/* &&
            !angular.equals(val, service.getDefault(key))*/) {
            service.params[key] = val;
          }
          else {
            delete service.params[key];
          }
        }
      });

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
    const service = this;

    service.events.push($rootScope.$on('schemaFormPropagateScope', function(event, scope) {
      let key = service.getKey(scope.form.key);
      let index = key.match(/^.*\[(\d+)].*$/);

      if(index) {
        key = key.replace(/\[\d+]/g, '[]');
        index = index && parseInt(index[1]);

        if(!service.getArrayCopy(key, index)) {
          service.processFieldProps(scope.form);
        }

        if(!scope.form.condition) scope.form.condition = 'true';

        service.addArrayCopy(scope, key, index);
        scope.$emit('flexFormArrayCopyAdded', key);
      }
      else {
        service.addToScopeCache(scope, key);
      }
    }));

    service.events.push($rootScope.$on('schemaFormDeleteScope', function(event, scope, index) {
      const key = service.getKey(scope.form.key);
      const listener = service.listeners[key];
      if(listener) listener.handlers = [];

      const unindexedKey = key.replace(/\[\d+]/g, '[]');
      const copies = service.getArrayCopiesFor(unindexedKey);

      copies.forEach((list) => list.splice(index, 1));

      if(scope.form.link) {
        var list = service.parseExpression(scope.form.link, service.model).get();
        list.splice(index, 1);
      }
    }));
  }

  function addArrayCopy(form, key, index) {
    const service = this;
    if(!index || index < 0) index = 0;
    if(!service.arrayCopies[key]) service.arrayCopies[key] = [];
    service.arrayCopies[key][index] = form;
    //service.arrayCopies[key].push(form);
  }

  function getArrayCopy(key, index) {
    const service = this;
    const copies = service.arrayCopies[key];
    return copies && copies[index];
  }

  function getArrayCopies(key) {
    const service = this;
    return _.pluck(service.getArrayScopes(key), 'form');
  }

  function getArrayCopiesFor(keyStart) {
    const service = this;
    keyStart += '[]';

    return _.filter(service.arrayCopies, (copy, key) => key.includes(keyStart));
  }

  function getArrayScopes(key) {
    var service = this;
    return service.arrayCopies[key];
  }

  function addToScopeCache(scope, key) {
    const service = this;
    if(service.scopeCache[key]) {
      console.warn('caching duplicate scope for', key);
    }
    return service.scopeCache[key] = scope;
  }

  function getFromScopeCache(key) {
    const service = this;
    return service.scopeCache[key];
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

  function matchNestedExpression(exp) {
    return exp.match(/\[([^[\]]+)]([^[\]]*)/);
  }

  function resolveNestedExpressions(exp, depth) {
    const service = this;
    let nested = matchNestedExpression(exp);

    while(nested) {
      exp = exp.replace(`[${nested[1]}]`, `.${service.parseExpression(nested[1], depth).get()}`);
      nested = matchNestedExpression(exp);
    }

    return exp;
  }

  function parseExpression(exp, depth) {
    const service = this;
    // if expression is specific value
    if(!exp || /^(null|false|true|undefined|'[^\']*'|"[^\"]*"|-?[0-9.]+|\[]|\{})$/.test(exp)) {
      return {
        "get": function() {
          if(!exp) return exp;
          const isStr = exp.match(/"([^\"]*)"/) || exp.match(/'([^\']*)'/);
          if(isStr) return isStr[1];
          switch(exp) {
            case 'null': return null;
            case 'false': return false;
            case 'true': return true;
            case 'undefined': return;
            case '[]': return [];
            case '{}': return {};
            default: return parseFloat(exp);
          }
        }
      };
    }

    exp = service.getKey(exp);

    const match = exp.match(/^(model\.)?(\S+)$/);

    const modelValue = {
      get() {
        let resolved = service.resolveNestedExpressions(exp, depth);
        let path = ObjectPath.parse(resolved);
        let start = depth || service;

        while(start && path.length > 1) {
          start = start[path.shift()];
        }

        return start && start[path[0]];
      },

      getAssignable() {
        let resolved = service.resolveNestedExpressions(exp, depth);
        let path = ObjectPath.parse(resolved);
        let progress = [];
        let start = depth || service;

        while(start && path.length > 1) {
          let key = path.shift();
          progress.push(key);
          if(!start[key]) {
            if(/^\d?$/.test(path[0])) {
              start[key] = [];
            }
            else {
              start[key] = {};
            }
          }
          start = start[key];
        }

        return {
          obj: start,
          key: path[0],
          path: service.getKey(progress),
          fullPath: service.getKey(progress.concat(path.slice(0, 1)))
        };
      },

      set(val) {
        let resolved = service.resolveNestedExpressions(exp, depth);
        let path = ObjectPath.parse(resolved);
        let assignable = this.getAssignable();
        assignable.obj[assignable.key] = val;
        return val;
      },

      path() {
        return {
          exp: exp,
          depth: depth,
          key: match[2]
        };
      }
    };

    return modelValue;
  }

  function processArray(array) {
    var service = this;
    var key = service.getKey(array.key);

    array.sortOptions = {
      update: function(e, ui) {
        let listener = service.arrayListeners[`${key}.length`];
        listener.handlers.forEach(handler => {
          handler(listener.prev, listener.prev, true);
        });
      }
    };

    service.processSection(array);
  }

  function processSection(section) {
    var service = this;
    _.each(section.items, service.processField.bind(service));
  }

  function processComponent(component) {
    var service = this;

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
    field.currencyFormat = {
      'currency-dollars': 'dollars',
      'currency-microcents': 'microcents',
      'currency': 'cents'
    }[field.schema.format];

    field.type = 'cn-currency';
  }

  function processPercentage(field) {
    field.type = 'cn-percentage';
  }

  function processReusable(field) {
    var service = this;
    field.type = 'cn-reusable';
    field.view = field.view || 'new';
    field.items.forEach(service.processField.bind(service));
    field.items = [{
      type: 'section',
      items: field.items,
      condition: '!model.' + service.getKey(field.key) + '.id'
    }];
  }

  function processMediaUpload(field) {
    var service = this;
    field.type = 'cn-mediaupload';
    _.each(field.data, function(dataProp, key) {
      field.data[key] = service.parseExpression(dataProp).get();
    });
  }

  function processCsvUpload(field) {
    var service = this;
    field.type = 'cn-csvupload';
  }

  function processRadios(field) {
    field.type = 'cn-radios';
  }

  function processRadiobuttons(radios) {
    var service = this;
    radios.type = 'cn-radiobuttons';
    if(radios.fullWidth) {
      radios.btnClass = 'col-sm-' + _.divide(12, radios.titleMap.length);
    }
  }

  function processDate(date) {
    var service = this;
    date.type = 'cn-datetimepicker';

    if(date.schema.format === 'time-minutes') {
      date.maxView = 'hour';
      date.iconClass = 'fa fa-clock-o';

      date.modelFormatter = val => {
        if(!val) return;

        let m = moment(val);

        return _.add(_.multiply(m.hours(), 60), m.minutes());
      };

      date.modelParser = val => {
        if(!val) return;

        let d = parseInt(val);
        let hours = _.floor(d / 60);
        let minutes = d % 60;

        return moment().startOf('day').add('hours', hours).add('minutes', minutes);
      };

      date.viewFormatter = val => {
        if(!val) return;

        return date.modelParser(val).format(date.dateFormat);
      };

      date.viewParser = val => {
        if(!val) return;

        let match = val.match(/^(\d{1,2}):?(\d{1,2})? (a|p)/);
        if(!match) return;

        let hours = _.add(match[1] === '12' ? 0 : match[1], match[3] === 'a' ? 0 : 12);
        let minutes = match[2] || '00';

        if(minutes.length === 1) minutes += '0';

        return _.add(_.multiply(hours, 60), minutes);
      };
    }
  }

  function getSelectValProp(select) {
    let isArray = select.getSchemaType() === 'array';
    return select.valueProperty ||
      (isArray ? select.schema.items.type : select.schema.type) !== 'object' && 'value';
  }

  function getAllowedSelectValue(select, val, titleMap) {
    titleMap = titleMap || select.getTitleMap();
    let valProp = getSelectValProp(select);
    if(!valProp) return;

    if(select.getSchemaType() === 'array') {
      if(!val || !_.isArray(val)) return;

      let mapVal = val.map(x => _.find(titleMap, {[valProp]: x})).filter(x => x !== undefined);

      return mapVal;
    }
    else {
      return _.find(titleMap, {[valProp]: val});
    }
  }

  function processSelect(select) {
    var service = this,
        schema = select.schema;

    if(select.titleMapResolve || select.titleMap) {
      select.getTitleMap = function() {
        return select.titleMap || service.schema.data[select.titleMapResolve];
      };

      select.onInit = function(val, form, event, setter) {
        // make sure we use correct value
        var modelValue = service.parseExpression(form.key, service.model);
        if(event === 'tag-init') {
          let newVal = getAllowedSelectValue(select, modelValue.get());
          if(newVal !== undefined) setter(newVal);
        }
      };
    }

    if(select.titleMapQuery) {
      var key = select.titleMapQuery.params.q;
      select.titleQuery = function(q) {
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
        if(!select.selectionStyle) {
          select.selectionStyle = select.key === 'tags' ?
            'tags' : (select.getSchemaType() === 'array' && select.schema.maxItems !== 1) ?
              'list' : 'select';
        }
        select.type = 'cn-autocomplete';
      }

      if(select.titleMapResolve) {
        $rootScope.$on('cnFlexFormDiff:data', (e, data) => {
          if(data[select.titleMapResolve]) {
            let modelValue = service.parseExpression(select.key, service.model);
            let val = modelValue.get();
            if(val !== undefined) {
              let valid = getAllowedSelectValue(select, val, data[select.titleMapResolve]); 
              if(valid === undefined) modelValue.set();
            }
          }
        });
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
    //var processor = /<(\S+)[^>]*>.*<\/\1>/.test(tpl) ? $compile : $interpolate;
    var processor = $interpolate;
    return function(scope, arrayIndex) {
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

  function processTable(table) {
    var service = this;
    table.type = 'cn-table';
    table.items.forEach(function(row) {
      for (var i = 0; i < table.columns.length; i++) {
        _.extend(row.items[i], table.columns[i]);
        //if(row.columns[i].key) row.columns[i].key = ObjectPath.parse(row.columns[i].key);
        service.processField(row.items[i]);
      }
    });
  }

  function processSelectDisplay(selectDisplay) {
    var service = this,
        schema = service.getSchema(selectDisplay.key),
        selectField = _.find(selectDisplay.items, 'selectField'),
        handler;

    if(schema && schema.type === 'array') {
      handler = service.setupArraySelectDisplay(selectDisplay, selectField);
    } else {
      handler = service.setupSelectDisplay(selectDisplay, selectField);
    }

    selectDisplay.selectDisplay = false;
    service.registerHandler(selectField.key, handler, selectField.updateSchema, true);
    //service.processField(selectDisplay);
  }

  function setupArraySelectDisplay(selectDisplay, selectField) {
    var service = this;
    _.each(selectDisplay.items, function(item) {
      if(item.condition !== 'false') {
        item.condition = 'true';
      }
    });
    var handler = function(val, prev, key) {
      var index = getArrayIndex(key);
      _.each(selectDisplay.items, function(item) {
        var selectKey = service.getKey(selectField.key);
        var key = service.getKey(item.key);
        var splitKey = ObjectPath.parse(key);
        if(selectKey === key) return;
        var indexedSelectKey = service.setArrayIndex(selectKey, index);
        var selectValue = service.parseExpression(indexedSelectKey, service.model).get();
        var formCopies = service.getArrayCopies(key);
        if(_.includes(selectValue, splitKey[splitKey.length - 1])) {
          _.each(formCopies, function(copy) {
            if(getArrayIndex(copy) == index) {
              copy.condition = 'true';
            }
          });
        } else {
          _.each(formCopies, function(copy) {
            if(getArrayIndex(copy) == index) {
              copy.condition = 'false';
              service.parseExpression(service.getKey(copy.key), service.model).set();
            }
          });
        }
      });
    };
    // handle legacy objects that don't have values set in the selectField
    var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
    _.each(selectDisplay.items, function(item) {
      var key = service.getKey(item.key);
      var selectKey = service.getKey(selectField.key);
      if(key === selectKey) return;
      _.each(model, function(elem, i) {
        var indexedKey = service.setArrayIndex(key, i);
        var splitIndexedKey = ObjectPath.parse(indexedKey);
        var indexedSelectKey = service.setArrayIndex(selectKey, i);
        var selectModel = service.parseExpression(indexedSelectKey, service.model);
        var selectValue = selectModel.get();
        var itemValue = service.parseExpression(indexedKey, service.model).get();
        if(itemValue && !_.includes(selectValue, splitIndexedKey[splitIndexedKey.length - 1])) {
          if(!selectValue) {
            selectValue = [];
          }
          selectValue.push(splitIndexedKey[splitIndexedKey.length - 1]);
          selectModel.set(selectValue);
        }
      });
    });
    // handle new objects with values set in defaults
    var defaults = service.getSchema(selectDisplay.key).default;
    _.each(defaults, function(elem, i) {
      var selectKey = service.getKey(selectField.key);
      var indexedSelectKey = service.setArrayIndex(selectKey, i);
      var selectModel = service.parseExpression(indexedSelectKey, service.model);
      var selectValue = selectModel.get();
      _.each(elem, function(val, key) {
        if(!selectValue) {
          selectValue = [];
        }
        selectValue.push(key);
        selectModel.set(selectValue);
      });
    });
    // run handler once all arrayCopies have been instantiated
    var count = 0;
    var keyMap = _.pluck(_.reject(selectDisplay.items, {"condition":"false"}), 'key');
    var once = $rootScope.$on('flexFormArrayCopyAdded', function(event, key) {
      var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
      if(model) {
        var total = model.length * (keyMap.length);
        if(_.includes(keyMap, key)) {
          count++;
        }
        if(count === total) {
          for (var i = 0; i < model.length; i++) {
            handler(null, null, '[' + i + ']');
          }
          count = 0;
        }
      }
    });
    var resetCount = $rootScope.$on('flexForm.updatePage', function() {
      count = 0;
    });
    service.events.push(once);
    service.events.push(resetCount);
    return handler;
  }

  function setupSelectDisplay(selectDisplay, selectField) {
    var service = this;
    var handler = function() {
      var selectKey = service.getKey(selectField.key);
      _.each(selectDisplay.items, function(item) {
        var key = service.getKey(item.key);
        var splitKey = ObjectPath.parse(key);
        if(selectKey === key) return;
        var selectValue = service.parseExpression(selectKey, service.model).get();
        if(_.includes(selectValue, splitKey[splitKey.length - 1])) {
          item.condition = 'true';
        } else {
          item.condition = 'false';
          service.parseExpression(key, service.model).set();
        }
      });
    };
    // handle legacy objects that don't have values set in the selectField
    var selectKey = service.getKey(selectField.key);
    var selectModel = service.parseExpression(selectKey, service.model);
    var selectValue = selectModel.get();
    _.each(selectDisplay.items, function(item) {
      var key = service.getKey(item.key);
      if(selectKey === key) return;
      var splitKey = ObjectPath.parse(key);
      var itemValue = service.parseExpression(key, service.model).get();
      if(itemValue && !_.includes(selectValue, splitKey[splitKey.length - 1])) {
        if(!selectValue) {
          selectValue = [];
        }
        selectValue.push(splitKey[splitKey.length - 1]);
        selectModel.set(selectValue);
      }
    });
    // handle new objects with values set in the defaults
    var defaults = service.getSchema(selectDisplay.key).default;
    _.each(defaults, function(val, key) {
      if(!selectValue) {
        selectValue = [];
      }
      selectValue.push(key);
      selectModel.set(selectValue);
    });
    // set default values here
    var model = service.parseExpression(selectDisplay.key, service.model);
    if(defaults && !model.get()) {
      model.set(defaults);
    }

    return handler;
  }

  function setupSchemaRefresh(refresh) {
    var service = this;
    service.refreshSchema = _.debounce(function(updateSchema) {
      var params = _.extend(cnFlexFormConfig.getStateParams(), service.params);
      var diff = cnUtil.diff(service.schema.params, params, true);
      var keys;

      if(diff || updateSchema) {
        if(updateSchema) params.updateSchema = updateSchema;
        else {
          keys = _.keys(diff);

          if(keys.length > 1) {
            diff = _.omit(diff, _.isNull);
            keys = _.keys(diff);
          }

          params.updateSchema = _.first(keys);
        }

        if(!params.updateSchema) {
          diff = cnUtil.diff(params, _.omit(service.schema.params, 'updateSchema'));
          keys = _.keys(diff);

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
      });
    }, 100);

    service.events.push($rootScope.$on('ffRefreshData', service.refreshData));
  }

  function processUpdatedSchema(schema) {
    var service = this;
    if(schema.diff) {
      service.schema.params = schema.params;

      if(schema.diff.data) {
        $rootScope.$broadcast('cnFlexFormDiff:data', schema.diff.data);
        _.each(schema.diff.data, (data, prop) => {
          if(data && data.data && !_.isEmpty(service.schema.data[prop].data) && !data.reset) {
            data.data = service.schema.data[prop].data.concat(data.data);
          }
          service.schema.data[prop] = data;
          if(service.resolveRegister[prop]) {
            _.each(service.resolveRegister[prop], (registers) => {
              registers.forEach(register => {
                service.handleResolve(register.field, register.prop, register.exp);
              });
            });
          }
        });
      }

      var keys = [];

      if(schema.diff.schema) {
        $rootScope.$broadcast('cnFlexFormDiff:schema', schema.diff.schema);
        _.each(schema.diff.schema, function(schema, key) {
          service.schema.schema.properties[key] = schema;
          reprocessSchema(schema, key, keys);
        });
      }

      if(schema.diff.form) {
        $rootScope.$broadcast('cnFlexFormDiff:form', schema.diff.form);
        _.each(schema.diff.form, function(form) {

          if(keys.indexOf(form.key) === -1) {
            keys.push(form.key);
          }

          // don't want to override key when extending cached objects
          //var key = form.key;
          //delete form.key;

          var cached = service.getFromFormCache(form.key);
          if(cached) {
            service.reprocessField(cached, form);
          }
          var copies = service.getArrayCopies(form.key);
          if(copies) {
            copies.forEach(copy => copy && service.reprocessField(copy, form));
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
    var service = this;

    // other logic in the service will add conition = 'true' to force
    // condition to eval true, so we set the update condition to 'true'
    // before comparing
    if(!update.condition && current.condition) update.condition = 'true';
    let redraw = !isChild && current.condition !== update.condition;

    _.extend(current, _.omit(update, 'items', 'key'));

    current._ogKeys.forEach(key => {
      if(!update[key]) delete current[key];
    });
    current._ogKeys = _.keys(update);

    service.deregisterHandlers(update.key);

    $rootScope.$broadcast('cnFlexFormReprocessField', update.key);

    // why do we redraw? If we're doing it to show error message
    // that has been addressed from the angular-schema-form library
    // if there's another issue, try triggering the specific action required
    // instead of redrawing the whole form
    if(redraw && current.redraw) {
      console.log('TODO: see if this can be removed'); 
      current.redraw();
    }
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
    if(!resolve.includes('arrayIndex')) return resolve;
    const arrayIndexKey = /([^.[]*)\[arrayIndex\]/.exec(resolve);
    const re = new RegExp(arrayIndexKey[1] + '\\[(-?\\d+)\\]');
    const index = re.exec(key);
    if(!index) return resolve;
    return resolve.replace(new RegExp(arrayIndexKey[0].replace(/(\[|\])/g, '\\$1'), 'g'), index[0]);
  }

  function getArrayIndex(key) {
    if(_.isObject(key)) {
      return _.find(key.key, function(key) {
        return _.isNumber(key);
      });
    } else {
      return /\[(\d+)\]/.exec(key)[1];
    }
  }

  function setArrayIndex(key, index, asArray) {
    var service = this;
    var keyCopy;
    if(_.isString(key)) {
      keyCopy = ObjectPath.parse(key);
    } else {
      keyCopy = _.clone(key);
    }
    var indexOfIndex = keyCopy.indexOf('');
    keyCopy[indexOfIndex] = index;

    if(asArray) {
      return keyCopy;
    } else {
      return service.getKey(keyCopy);
    }
  }

  function cleanup() {
    var service = this;
    _.each(service.events, function(listener) {
      listener();
    });
  }
}

//angular
    //.module('cn.flex-form')
    //.provider('cnFlexFormService', cnFlexFormServiceProvider);

export default cnFlexFormServiceProvider;
