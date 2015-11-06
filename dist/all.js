(function() {
  'use strict';
  angular.module('cn.flex-form', ['ui.router', 'schemaForm', 'cnTagsInput']);
})();
(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .controller('FlexFormModalLoader', FlexFormModalLoader)
      .factory('FlexFormModal', FlexFormModal);

  FlexFormModalLoader.$inject = [
    'FlexFormModal', '$state', '$rootScope', '$stateParams'
  ];
  function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams) {

    var vm = this;
    console.log('FlexFormModalLoader:', $stateParams.modal);

    activate();

    //////////

    function activate() {
      vm.modal = FlexFormModal.open(vm);
      vm.modal.result.finally(goBack);

      vm.dismiss = $rootScope.$on('$stateChangeStart', dismissModal);
    }

    function goBack() {
      $state.go('^');
    }

    function dismissModal() {
      vm.dismiss();
      vm.modal.dismiss();
    }
  }

  FlexFormModal.$inject = ['cnFlexFormModalLoaderService', '$modal', '$stateParams'];
  function FlexFormModal(cnFlexFormModalLoaderService, $modal, $stateParams) {

    var instance = {
      open: openModal
    };

    return instance;

    function openModal() {
      var currentModal = cnFlexFormModalLoaderService.getMapping($stateParams.modal);
      console.log('currentModal:', currentModal);

      this.modal = $modal.open(currentModal);
      return this.modal;
    }

  }

})();

(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);

  var modalMap = {};
  var promiseMap = {};

  function getPromises(state) {
    var promises = promiseMap[state];
    if(!promises) {
      promises = {};
      promiseMap[state] = promises;
    }
    return promises;
  }

  function getPromise(state, id, $q) {
    var promises = getPromises(state);
    var promise = promises[id];
    if(!promise) {
      promise = $q.defer();
      promises[id] = promise;
    }
    return promise;
  }

  function cnFlexFormModalLoaderServiceProvider() {

    var provider = {
      addMapping: addMapping,
      $get: cnFlexFormModalLoaderService
    };

    parent.$inject = ['$stateParams', '$q'];

    return provider;

    ////////////

    function addMapping(state, def) {
      def.resolve = {
        parent: parent
      };
      modalMap[state] = def;
    }

    function parent($stateParams, $q) {
      return getPromise($stateParams.modal, $stateParams.modalId, $q).promise;
    }
  }

  cnFlexFormModalLoaderService.$inject = ['$q'];

  function cnFlexFormModalLoaderService($q) {
    var service = {
      getMapping: getMapping,
      resolveMapping: resolveMapping
    };

    return service;

    /////////////

    function resolveMapping(state, id, parent) {
      getPromise(state, id, $q).resolve(parent);
    }

    function getMapping(state) {
      return modalMap[state];
    }
  }

})();
(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .directive('ffValidate', ffValidate);

  function ffValidate() {
    return {
      restrict: 'A',
      scope: { form: '=ffValidate' },
      require: 'ngModel',
      link: link
    };
  }

  function link($scope, elem, attrs, ngModel) {
    //console.log('$scope, ngModel:', $scope.form, ngModel);
    if($scope.form && $scope.form.required) {
      $scope.$watch(function() { return ngModel.$viewValue; }, function(value) {
        // override schemaForm validation
        ngModel.$setValidity('schemaForm', true);
        ngModel.$setValidity('tv4-302', value);
      });
    }
  }
})();
(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .directive('cnFlexForm', cnFlexForm);

  function cnFlexForm() {
    return {
      restrict: 'E',
      template: '\
        <div ng-if="vm.showForm()">\
          <form name="{{vm.formName}}"\
                sf-schema="vm.config.schema.schema"\
                sf-form="vm.form"\
                sf-model="vm.model"></form>\
        </div>\
      ',
      scope: {
        config: '=ffConfig',
        model: '=ffModel',
        formIndex: '=ffFormIndex',
        formName: '=ffFormName',
        delayForm: '=ffDelayForm'
      },
      controller: FlexForm,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  FlexForm.$inject = ['cnFlexFormService', '$scope'];
  function FlexForm(cnFlexFormService, $scope) {
    var vm = this;
    vm.service = undefined;

    vm.activate = activate;
    vm.process = process;
    vm.showForm = showForm;

    $scope.$watch(function() { return vm.config.schema; }, vm.process);

    vm.activate();

    //////////

    function activate() {
      //console.log('vm.formName:', vm.formName);
      if(angular.isNumber(vm.formIndex)) {
        vm.form = vm.config.schema.forms[vm.formIndex].form;
      }
      else {
        vm.form = vm.config.schema.form;
      }
    }

    function process(cur, prev) {
      //console.log('process:', cur, prev);
      if(vm.form) {
        if(!vm.service) {
          vm.service = cnFlexFormService(vm.config.schema, vm.model, {
            formCtrl: vm.config.formCtrl,
            getSchema: vm.config.getSchema,
            updateSchema: updateSchema
          });
        }
        else {
          console.log('vm.service.isCompiled():', vm.service.isCompiled());
          vm.service.compile(vm.config.schema, vm.model);
        }
        //$scope.$broadcast('schemaFormRedraw');
      }
    }

    function showForm() {
      //console.log('showForm:', vm.delayForm, vm.formName);
      return !vm.delayForm && vm.service && vm.service.isCompiled();
    }

    function updateSchema(schema) {
      vm.config.schema = schema;
      vm.activate();
    }

  }
})();
(function() {
  angular
      .module('cn.flex-form')
      .provider('cnFlexFormRoutes', cnFlexFormRoutesProvider)
      .config(cnFlexFormRoutes);

  cnFlexFormRoutesProvider.$inject = ['$stateProvider'];
  function cnFlexFormRoutesProvider($stateProvider) {
    var provider = {
      addStates: addStates,
      $get: $get
    };

    return provider;

    ////////////

    function $get() {
      // nothing to do here, but required
    }

    function addStates(options) {
      $stateProvider
          .state(options.name + '.page.modal', {
            url: '/~:modal/:modalId',
            controller: 'FlexFormModalLoader',
            controllerAs: 'vm',
            permissions: options.permissions
          });
    }
  }

  cnFlexFormRoutes.$inject = ['$stateProvider'];
  function cnFlexFormRoutes($stateProvider) {

    $stateProvider
        .state('flex-form-sandbox', {
          url: '/flex-form/sandbox',
          controller: 'FlexFormSandbox',
          controllerAs: 'vm',
          templateUrl: 'app/components/cn-flex-form/sandbox.html'
        });
  }

})();
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
        service.defaults[key] = _.cloneDeep(schema.default);
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
        }

        service.processSchema(field);

        if(!field.type) field.type = field.getSchemaType && field.getSchemaType();

        if(field.resolve) service.processResolve(field);

        if(field.watch) service.processFieldWatch(field);

        if(field.readonly && field.schema && !field.schema.readonly) field.readonly = false;

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
            var updatePath;
            if(resolution[1].includes('arrayIndex')) {
              updatePath = replaceArrayIndex(resolution[1], arguments[2]);
            }
            var update = service.parseExpression(updatePath || resolution[1]);
            var from = service.parseExpression(resolution[2]);

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
        var prev = _.clone(service.parseExpression(key, service.model).get(), true);
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

        service.prevParams = _.clone(service.params, true);
        service.params = {};

        _.each(service.arrayListeners, function(listener, key) {
          var val = service.parseExpression(key, service.model).get();
          if(!angular.equals(val, listener.prev)) {
            _.each(listener.handlers, function(handler) {
              handler(val, listener.prev);
            });
            listener.prev = _.clone(val, true);
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
              listener.prev = _.clone(val, true);
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
      $rootScope.$on('schemaFormPropagateScope', function(event, scope) {
        //console.log('propagated scope:', service.getKey(scope.form.key), scope);
        var key = service.getKey(scope.form.key).replace(/\[\d+]/g, '[]');
        service.addArrayCopy(scope.form, key);
      });
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

      if(select.items) {
        select.detailedList = true;

        if(select.items.length > 1) {
          select.items = [{
            type: "component",
            items: select.items
          }];
        }

        service.processFieldset(select);

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

      if(select.displayFormat) {
        select.itemFormatter = service.processTemplate(select.displayFormat);
      }
      //service.setValidity(select);

      //select.handlers = select.handlers || [];

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
        refresh(_.extend({updateSchema: 'refreshData'}, service.schema.params)).then(function(schema) {
          service.processUpdatedSchema(schema);
          console.log('service.schema.params:', service.schema.params);
        });
      }, 100);

      $rootScope.$on('ffRefreshData', service.refreshData);
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

    function reprocessField(current, update) {
      _.extend(current, update);
      _.each(current._ogKeys, function(key) {
        if(!update[key]) delete current[key];
      });
      current._ogKeys = _.keys(update);
      if(current.redraw) current.redraw();
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
  }
})();
(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .controller('FlexFormSandbox', FlexFormSandbox);

  /* @ngInject */
  function FlexFormSandbox() {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.onSchema = onSchema;
    vm.model = {};
    vm.config = {};
    vm.schemaStr = '';

    activate();

    ////////////////

    function activate() {
      console.log('FlexFormSandbox');
    }

    function onSchema() {
      if(vm.schemaStr) {
        var schema = angular.fromJson(vm.schemaStr);
        console.log('schema:', schema);
        if(!schema.form && schema.forms) {
          schema.form = schema.forms[0].form;
        }
        vm.config.schema = schema.form && schema;
      }
    }

  }
})();
(function() {
  'use strict';

  angular.module('cn.flex-form')
      .config(schemaFormConfig)
      .run(addTemplates);

  schemaFormConfig.$inject = ['cnFlexFormServiceProvider'];

  function schemaFormConfig(cnFlexFormServiceProvider) {
    var extensions = [
      'cn-fieldset',
      'cn-toggle',
      'cn-datetimepicker',
      'cn-autocomplete',
      'cn-autocomplete-detailed',
      'cn-currency',
      'cn-radiobuttons',
      'cn-percentage',
      'cn-display'
    ];

    _.each(extensions, function(extension) {
      cnFlexFormServiceProvider.registerField({
        type: extension,
        templateUrl: 'app/components/cn-flex-form/forms/' + extension + '.html'
      });
    });
  }

  addTemplates.$inject = ['$templateCache'];

  function addTemplates($templateCache) {
    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-toggle.html',
        '\
        <div class="form-group {{form.htmlClass}}" \
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\
          <div class="clearfix">\
            <cn-toggle-switch\
              class="pull-left"\
              ng-show="form.key"\
              enabled="$$value$$"\
              on-value="angular.isDefined(form.onValue) ? form.onValue : true"\
              off-value="angular.isDefined(form.offValue) ? form.offValue : false">\
            </cn-toggle-switch>\
            <span ng-show="form.onText && form.offText">\
              {{$$value$$ === form.onValue ? form.onText : form.offText}}\
            </span>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-datetimepicker.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}"\
                 ng-show="showTitle()">{{form.title}}</label>\
          <cn-datetimepicker\
            ng-show="form.key"\
            ng-model="$$value$$"\
            ng-model-options="form.ngModelOptions"\
            is-disabled="form.readonly"\
            sf-changed="form"\
            schema-validate="form"\
            input-id="{{form.key.join(\'.\')}}"\
            min-date="form.minDate"\
            required="form.required"\
            model-type="{{form.schema.type}}">\
          </cn-datetimepicker>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    var sharedAutocompleteTpl = '\
          <tags-input\
            ng-show="form.key"\
            ng-model="$$value$$"\
            ng-model-options="form.ngModelOptions"\
            ng-disabled="form.readonly"\
            sf-changed="form"\
            schema-validate="form"\
            input-id="{{form.key.join(\'.\')}}"\
            display-property="{{form.displayProperty || \'name\'}}"\
            value-property="{{form.valueProperty || \'value\'}}"\
            placeholder="{{form.placeholder || \' \'}}"\
            add-on-blur="{{form.allowNew}}"\
            add-from-autocomplete-only="{{!form.allowNew}}"\
            on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\
            on-init="form.onInit($tag, form, $event, $setter)"\
            model-type="{{form.getSchemaType()}}"\
            array-value-type="{{form.schema.items.type}}"\
            hide-tags="{{form.detailedList}}"\
            tags-style="{{form.selectionStyle}}"\
            required="{{form.required}}"\
            min-length="{{form.minLength}}"\
            allowed-tags-pattern=".*"\
            dropdown="true"\
            item-formatter="form.itemFormatter"\
            min-tags="{{form.schema.minItems}}"\
            max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\
            allow-bulk="{{form.bulkAdd}}"\
            bulk-delimiter="{{form.bulkDelimiter}}"\
            bulk-placeholder="{{form.bulkPlaceholder}}"\
            show-button="true">\
            <auto-complete\
              source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query)"\
              skip-filtering="{{form.titleQuery ? true : false}}"\
              min-length="{{form.minLookup || (form.titleQuery && 3 || 0)}}">\
            </auto-complete>\
          </tags-input>\
          ';

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-autocomplete.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}-input"\
                 ng-show="showTitle()">{{form.title}}</label>\
          ' + sharedAutocompleteTpl + '\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-autocomplete-detailed.html',
        '\
        <div sf-array="form"\
             class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}-input"\
                 ng-show="showTitle()">{{form.title}}</label>\
          <ol class="list-group cn-autocomplete-list"\
              ng-show="modelArray.length"\
              ng-model="modelArray">\
            <li class="list-group-item {{form.fieldHtmlClass}}"\
                ng-repeat="item in modelArray track by $index">\
              <button ng-hide="form.readonly || form.remove === null"\
                      ng-click="deleteFromArray($index)"\
                      type="button" class="close pull-right">\
                <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>\
              </button>\
              <sf-decorator ng-init="arrayIndex = $index" form="copyWithIndex($index)"></sf-decorator>\
            </li>\
          </ol>\
          ' + sharedAutocompleteTpl + '\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-currency.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 ng-show="showTitle()"\
                 for="{{form.key.join(\'.\')}}">{{form.title}}</label>\
          <div class="{{form.fieldClass}} input-group">\
            <label class="input-group-addon"\
                   ng-disabled="form.readonly"\
                   for="{{form.key.join(\'.\')}}">$</label>\
            <input class="form-control"\
                   cn-currency-format="{{form.currencyFormat}}"\
                   ng-show="form.key"\
                   ng-model-options="form.ngModelOptions"\
                   ng-disabled="form.readonly"\
                   sf-changed="form"\
                   schema-validate="form"\
                   ff-validate="form"\
                   type="text"\
                   step="any"\
                   min="{{form.min}}"\
                   max="{{form.max}}"\
                   id="{{form.key.join(\'.\')}}"\
                   name="{{form.key.join(\'.\')}}"\
                   ng-model="$$value$$">\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-radiobuttons.html',
        '\
        <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\
          <div class="btn-group clearfix">\
            <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\
                   ng-repeat="item in form.titleMap">\
              <input type="radio"\
                     class="{{form.fieldHtmlClass}} hide"\
                     sf-changed="form"\
                     ng-disabled="form.readonly"\
                     ng-model="$$value$$"\
                     ng-model-options="form.ngModelOptions"\
                     schema-validate="form"\
                     ff-validate="form"\
                     ng-value="item.value"\
                     name="{{form.key.join(\'.\')}}">\
              <i class="fa fa-{{item.value}} fa-lg"></i>\
              <span ng-bind-html="item.name"></span>\
            </label>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-percentage.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 ng-show="showTitle()"\
                 for="{{form.key && form.key[0]}}">{{form.title}}</label>\
          <div class="{{form.fieldClass}} input-group">\
            <input class="form-control"\
                   cn-percentage-format\
                   ng-show="form.key"\
                   ng-model-options="form.ngModelOptions"\
                   ng-disabled="form.readonly"\
                   sf-changed="form"\
                   schema-validate="form"\
                   type="number"\
                   step="any"\
                   min="{{form.min}}"\
                   max="{{form.max}}"\
                   id="{{form.key && form.key[0]}}"\
                   name="{{form.key && form.key[0]}}"\
                   ng-model="$$value$$">\
             <div class="input-group-addon"\
                    ng-disabled="form.readonly"\
                    for="{{form.key && form.key[0]}}">%</div>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-display.html',
        '\
        <div class="form-group cn-display{{form.htmlClass}}">\
          <input ng-show="form.key"\
                 class="form-control"\
                 id="{{form.key.join(\'.\')}}"\
                 name="{{form.key.join(\'.\')}}"\
                 ng-disabled="true"\
                 value="{{form.getDisplay(form.key, form.arrayIndex)}}">\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-fieldset.html',
        '\
        <fieldset ng-disabled="form.readonly" class="schema-form-fieldset {{form.htmlClass}}">\
          <legend ng-click="form.toggleCollapse()"\
                  ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\
                  ng-mouseenter="form.render = true">\
            <i ng-show="form.collapsible"\
               class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\
            {{ form.title }}\
          </legend>\
          <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\
          <div collapse="form.collapsed">\
            <div ng-if="form.render">\
              <sf-decorator ng-repeat="item in form.items" form="item"></sf-decorator>\
            </div>\
          </div>\
        </fieldset>\
        '
    );
  }

})();