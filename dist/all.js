'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form', ['ui.router', 'schemaForm', 'ui.bootstrap.datetimepicker', 'cnTagsInput', 'cn.util']);
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').provider('cnFlexFormConfig', cnFlexFormConfigProvider);

  function cnFlexFormConfigProvider() {

    cnFlexFormConfig.$inject = ['$stateParams'];

    var ignoreParams = ['page', 'debug', 'sandbox', 'modal', 'modalId'];

    return {
      addIgnoreParam: addIgnoreParam,
      $get: cnFlexFormConfig
    };

    ////////

    function addIgnoreParam(param) {
      ignoreParams.push(param);
    }

    function cnFlexFormConfig($stateParams) {
      return {
        getStateParams: getStateParams,
        ignoreParams: ignoreParams
      };

      ////////

      function getStateParams() {
        return _.chain($stateParams).omit(ignoreParams).omit(function (v) {
          return _.isUndefined(v) || _.isNull(v);
        }).value();
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').directive('cnFlexFormHeader', cnFlexFormHeader);

  function cnFlexFormHeader() {
    return {
      restrict: 'E',
      scope: {
        config: '=ffHeaderConfig',
        submit: '&ffSubmit',
        loadOffscreen: '&ffLoadOffscreen'
      },
      controller: FlexFormHeader,
      bindToController: true,
      controllerAs: 'vm',
      template: '\n          <div class="col-md-6">\n            <h5 ng-if="vm.config.title.lead">{{::vm.config.title.lead}}</h5>\n            <h1>{{vm.config.title.main}}</h1>\n            <h5 ng-if="vm.config.title.sub">{{::vm.config.title.sub}}</h5>\n          </div>\n          <div class="{{vm.config.buttonContainerClass || \'page-action-btns\'}}">\n            <div class="btn-options"\n                 ng-mouseover="vm.loadOffscreen()">\n              <a class="btn"\n                 ng-if="vm.config.actionConfig.returnState"\n                 ui-sref="{{vm.config.actionConfig.returnState}}">\n                {{vm.config.actionConfig.returnText || \'Cancel\'}}\n              </a>\n              <span ng-repeat="button in vm.config.actionConfig.actions">\n                <a class="btn {{button.style && \'btn-\'+button.style}}"\n                   ng-disabled="vm.isDisabled(button)"\n                   ng-class="{\'btn-primary\': $index === vm.config.actionConfig.actions.length - 1}"\n                   ng-click="vm.submit({ handler: button.handler})"\n                   tooltip="{{button.helptext}}"\n                   tooltip-placement="bottom"\n                   ng-bind-html="button.text || \'Save\'">\n                </a>\n              </span>\n            </div>\n            <p class="data-updated-at text-right"\n               id="data-updated-at"\n               ng-hide="vm.config.noData">\n              <a ng-click="vm.updateData()">Update Data</a>\n            </p>\n          </div>'
    };
  }

  FlexFormHeader.$inject = ['$scope'];
  function FlexFormHeader($scope) {
    var vm = this;

    vm.updateData = updateData;
    vm.isDisabled = isDisabled;

    ///////////

    function updateData() {
      console.log('updateData:', updateData);
      $scope.$emit('ffRefreshData');
    }

    function isDisabled(btnConfig) {
      if (vm.config.isDisabled) return vm.config.isDisabled(btnConfig);
      return false;
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').controller('FlexFormModalLoader', FlexFormModalLoader).factory('FlexFormModal', FlexFormModal);

  FlexFormModalLoader.$inject = ['FlexFormModal', '$state', '$rootScope', '$stateParams'];
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
      if (!$state.transition) {
        $state.go('^');
      }
    }

    function dismissModal() {
      console.log('dismissModal:', arguments);
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
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);

  var modalMap = {};
  var promiseMap = {};

  function getPromises(state) {
    var promises = promiseMap[state];
    if (!promises) {
      promises = {};
      promiseMap[state] = promises;
    }
    return promises;
  }

  function getPromise(state, id, $q) {
    var promises = getPromises(state);
    var promise = promises[id];
    if (!promise) {
      promise = $q.defer();
      promises[id] = promise;
    }
    return promise;
  }

  function getPromiseForResolve(state, id, $q) {
    var promises = getPromises(state);
    var promise = $q.defer();
    promises[id] = promise;
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
      var d = getPromiseForResolve(state, id, $q);
      d.resolve(parent);
      return d.promise;
    }

    function getMapping(state) {
      return modalMap[state];
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').provider('cnFlexFormTypes', cnFlexFormTypesProvider);

  function cnFlexFormTypesProvider() {

    var fieldTypeRegister = [{
      condition: function condition(field) {
        return field.type === 'hidden';
      },
      type: 'hidden'
    }, {
      condition: function condition(field) {
        return field.type.includes('radios');
      },
      type: 'cn-radios'
    }, {
      condition: function condition(field) {
        return field.type.includes('radiobuttons');
      },
      type: 'cn-radiobuttons'
    }, {
      condition: function condition(field) {
        return field.type.includes('autocomplete') || field.titleMap || field.titleMapResolve || field.titleMapQuery;
      },
      type: 'cn-autocomplete'
    }, {
      condition: function condition(field) {
        return field.type === 'cn-datetimepicker' || field.type === 'datetime-local' || field.type === 'time-minutes';
      },
      type: 'cn-datetimepicker'
    }, {
      condition: function condition(field) {
        return field.type === 'help';
      },
      type: 'help'
    }, {
      condition: function condition(field) {
        return field.type.includes('display');
      },
      type: 'cn-display'
    }, {
      condition: function condition(field) {
        return field.schema && field.schema.format && field.schema.format.includes('currency');
      },
      type: 'cn-currency'
    }, {
      condition: function condition(field) {
        return field.schema && field.schema.format === 'percentage';
      },
      type: 'cn-percentage'
    }, {
      condition: function condition(field) {
        return field.type === 'toggle' || field.type === 'boolean';
      },
      type: 'cn-toggle'
    }, {
      condition: function condition(field) {
        return field.type === 'mediaupload';
      },
      type: 'cn-mediaupload'
    }, {
      condition: function condition(field) {
        return field.type === 'csvupload';
      },
      type: 'cn-csvupload'
    }, {
      condition: function condition(field) {
        return field.type === 'reusable';
      },
      type: 'cn-reusable'
    }, {
      condition: function condition(field) {
        return field.type === 'table';
      },
      type: 'cn-table'
    }, {
      condition: function condition(field) {
        return field.type === 'array';
      },
      type: 'array'
    }];

    return {
      registerFieldType: registerFieldType,
      $get: cnFlexFormTypes
    };

    ////////

    function registerFieldType(fieldType) {
      fieldTypeRegister.unshift(fieldType);
    }

    function cnFlexFormTypes() {
      return {
        fieldTypeRegister: fieldTypeRegister,
        getFieldType: getFieldType
      };

      /////////

      function getFieldType(field) {
        for (var i = 0, l = fieldTypeRegister.length; i < l; i++) {
          if (fieldTypeRegister[i].condition(field)) {
            return fieldTypeRegister[i].type;
          }
        }
        return field.type || field.schema && field.schema.type;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').directive('ffValidate', ffValidate);

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
    if ($scope.form && $scope.form.required) {
      $scope.$watch(function () {
        return ngModel.$viewValue;
      }, function (value) {
        // override schemaForm validation
        ngModel.$setValidity('schemaForm', true);
        ngModel.$setValidity('tv4-302', value);
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').directive('cnFlexForm', cnFlexForm);

  function cnFlexForm() {
    return {
      restrict: 'E',
      template: '\
        <div ng-if="vm.showForm()">\
          <ng-form name="{{vm.formName}}"\
                sf-schema="vm.config.schema.schema"\
                sf-form="vm.form"\
                sf-model="vm.model"></ng-form>\
          <!-- debug panel to display model -->\
          <section ng-if="vm.debug"><pre pretty-json="vm.model"></pre></section>\
        </div>\
      ',
      scope: {
        config: '=ffConfig',
        model: '=ffModel',
        formIndex: '=ffFormIndex',
        formName: '=ffFormName',
        delayForm: '=ffDelayForm',
        cleanupEvent: '=ffCleanupEvent'
      },
      controller: FlexForm,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  FlexForm.$inject = ['cnFlexFormService', '$scope', '$location'];
  function FlexForm(cnFlexFormService, $scope, $location) {
    var vm = this;
    vm.service = undefined;
    vm.events = [];

    vm.activate = activate;
    vm.cleanup = cleanup;
    vm.process = process;
    vm.showForm = showForm;

    vm.events.push($scope.$watch(function () {
      return vm.config.schema;
    }, vm.process));

    vm.activate();

    $scope.$on(vm.cleanupEvent || '$destroy', vm.cleanup);

    //////////

    function activate() {
      //console.log('vm.formName:', vm.formName);
      if (angular.isNumber(vm.formIndex)) {
        vm.form = vm.config.schema.forms[vm.formIndex].form;
      } else {
        vm.form = vm.config.schema.form;
      }

      // debug
      if ($location.search().debug) {
        vm.debug = true;
      }
    }

    function process(cur, prev) {
      //console.log('process:', cur, prev);
      if (vm.form) {
        if (!vm.service) {
          vm.service = cnFlexFormService(vm.config.schema, vm.model, {
            formCtrl: vm.config.formCtrl,
            getSchema: vm.config.getSchema,
            updateSchema: updateSchema
          });
        } else {
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

    function cleanup() {
      _.each(vm.events, function (listener) {
        listener();
      });
      vm.service.cleanup();
    }
  }
})();
'use strict';

(function () {
  angular.module('cn.flex-form').provider('cnFlexFormRoutes', cnFlexFormRoutesProvider).config(cnFlexFormRoutes);

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
      $stateProvider.state(options.name + '.page.modal', {
        url: '/~:modal/:modalId',
        controller: 'FlexFormModalLoader',
        controllerAs: 'vm',
        permissions: options.permissions
      });
    }
  }

  cnFlexFormRoutes.$inject = ['$stateProvider'];
  function cnFlexFormRoutes($stateProvider) {

    $stateProvider.state('flex-form-sandbox', {
      url: '/flex-form/sandbox',
      controller: 'FlexFormSandbox',
      controllerAs: 'vm',
      templateUrl: 'app/components/cn-flex-form/sandbox.html'
    });
  }
})();
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  'use strict';

  angular.module('cn.flex-form').provider('cnFlexFormService', cnFlexFormServiceProvider);

  var fieldTypeHandlers = {
    //'cn-radios': 'processRadios',
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
    'array': 'processArray'
  };

  cnFlexFormServiceProvider.$inject = ['schemaFormDecoratorsProvider', 'cnFlexFormTypesProvider'];

  function cnFlexFormServiceProvider(schemaFormDecoratorsProvider, cnFlexFormTypesProvider) {
    return {
      registerField: registerField,
      $get: CNFlexFormService
    };

    //////////

    function registerField(fieldType) {
      if (fieldType.condition) {
        cnFlexFormTypesProvider.registerFieldType({
          condition: fieldType.condition,
          type: fieldType.type
        });
      }

      if (fieldType.handler) {
        fieldTypeHandlers[fieldType.type] = fieldType.handler;
      }

      if (fieldType.templateUrl) {
        schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', fieldType.type, fieldType.templateUrl);
        schemaFormDecoratorsProvider.createDirective(fieldType.type, fieldType.templateUrl);
      }
    }
  }

  CNFlexFormService.$inject = ['Api', '$parse', 'cnFlexFormConfig', 'cnFlexFormTypes', 'sfPath', '$interpolate', '$rootScope', '$timeout', 'cnUtil', '$stateParams'];

  function CNFlexFormService(Api, $parse, cnFlexFormConfig, cnFlexFormTypes, sfPath, $interpolate, $rootScope, $timeout, cnUtil, $stateParams) {

    var services = [];
    var prototype = {
      compile: compile,
      addArrayCopy: addArrayCopy,
      addToDataCache: addToDataCache,
      addToFormCache: addToFormCache,
      broadcastErrors: broadcastErrors,
      buildError: buildError,
      cleanup: cleanup,
      deregisterHandlers: deregisterHandlers,
      deregisterArrayHandlers: deregisterArrayHandlers,
      getArrayCopies: getArrayCopies,
      getArrayCopiesFor: getArrayCopiesFor,
      getFromDataCache: getFromDataCache,
      getFromFormCache: getFromFormCache,
      getKey: getKey,
      getSchema: getSchema,
      handleResolve: handleResolve,
      initArrayCopyWatch: initArrayCopyWatch,
      initModelWatch: initModelWatch,
      initSchemaParams: initSchemaParams,
      isCompiled: isCompiled,
      isConditionFunction: isConditionFunction,
      onModelWatch: onModelWatch,
      parseCondition: parseCondition,
      parseExpression: parseExpression,
      processArray: processArray,
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
      //processRadios,
      processRadiobuttons: processRadiobuttons,
      processReusable: processReusable,
      processSchema: processSchema,
      processSelectDisplay: processSelectDisplay,
      processResolve: processResolve,
      processSection: processSection,
      processSelect: processSelect,
      processTable: processTable,
      processTemplate: processTemplate,
      processToggle: processToggle,
      processUpdatedSchema: processUpdatedSchema,
      processMediaUpload: processMediaUpload,
      processCsvUpload: processCsvUpload,
      registerArrayHandlers: registerArrayHandlers,
      registerHandler: registerHandler,
      registerResolve: registerResolve,
      reprocessField: reprocessField,
      setArrayIndex: setArrayIndex,
      setupConfig: setupConfig,
      setupArraySelectDisplay: setupArraySelectDisplay,
      setupSelectDisplay: setupSelectDisplay,
      setupSchemaRefresh: setupSchemaRefresh
    };

    function CNFlexFormConstructor(schema, model, config) {
      var service;
      if (services.length) {
        for (var i = 0, l = services.length; i < l; i++) {
          if (services[i].model === model) {
            service = services[i];
            service.compile(schema, model, config);
            break;
          }
        }
      }
      if (!service) {
        service = new CNFlexForm(schema, model, config);
        services.push(service);
      }
      return service || new CNFlexForm(schema, model, config);
    }

    function CNFlexForm(schema, model, config) {

      if ($stateParams.debug) {
        window.services = services;
      }

      this.arrayCopies = {};
      this.arrayListeners = {};
      this.dataCache = {};
      this.defaults = {};
      this.errors = [];
      this.events = [];
      this.formCache = {};
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

      if (!service.isCompiled()) {
        service.setupConfig(config);

        if (schema.forms) {
          _.each(schema.forms, function (form) {
            _.each(form.form, service.processField.bind(service));
          });
        } else {
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
      if (setValue) {
        service.schema.compiled = setValue;
      }
      return service.schema && service.schema.compiled;
    }

    function setupConfig(config) {
      var service = this;
      if (config) {
        if (config.formCtrl) service.formCtrl = config.formCtrl;
        if (config.updateSchema) service.updateSchema = config.updateSchema;
        if (config.getSchema) service.getSchemaForm = service.setupSchemaRefresh(config.getSchema);
      }
    }

    function processSchema(field) {
      var service = this,
          schema = field.schema;

      if (schema) {

        field.getSchemaType = function () {
          return _.isArray(schema.type) ? _.first(schema.type) : schema.type;
        };

        service.processDefault(field);
      }
    }

    function processDefault(field) {
      var service = this,
          schema = field.schema;

      if (schema.default) {
        var key = service.getKey(field.key);
        // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
        if (service.updates) {
          if (key.includes && key.includes('[]')) return;
          var model = service.parseExpression(field.key, service.model);
          var modelValue = model.get();
          // if there's an existing default and it's the same as the current value
          // update the current value to the new default
          if (!service.defaults[key] || _.isUndefined(modelValue) || angular.equals(modelValue, service.defaults[key])) {
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

      if (fieldset.collapsible) {
        fieldset.toggleCollapse = function () {
          if (fieldset.collapsible) {
            fieldset.collapsed = !fieldset.collapsed;
          }
        };

        fieldset.render = !fieldset.collapsed;
      } else {
        fieldset.render = true;
      }
    }

    function processField(field) {
      var service = this;

      if (field.selectDisplay) {
        service.processSelectDisplay(field, service.getSchema(field.key));
      }

      if (field.type === 'fieldset') {
        service.processFieldset(field);
      } else {
        if (!field._ogKeys) {
          field._ogKeys = _.without(_.keys(field), 'key', 'htmlClass');
        }

        var key = service.getKey(field.key);

        if (field.key) {
          service.addToFormCache(field, key);
          field.schema = service.getSchema(key);

          if ( /*!field.immutable && */field.schema) {
            if (field.schema.description) field.description = field.schema.description;
            if (field.readonly && !field.schema.readonly) field.readonly = false;
          }
        }

        service.processSchema(field);

        if (!field.type) field.type = field.getSchemaType && field.getSchemaType();

        if (field.resolve) service.processResolve(field);

        if (field.watch) service.processFieldWatch(field);

        if (field.type === 'section' || field.type === 'tabarray') {
          service.processSection(field);
        } else if (field.type === 'component') {
          service.processComponent(field);
        } else {

          var fieldType = cnFlexFormTypes.getFieldType(field);
          var handler = fieldTypeHandlers[fieldType];
          if (_.isString(handler)) {
            service[handler](field);
          } else if (_.isFunction(handler)) {
            handler.call(service, field);
          }

          if (field.updateSchema) {
            service.registerHandler(field, null, field.updateSchema);
          }
          if (field.error) {
            service.errors.push(service.buildError(field));
            if (_.isEmpty(field.ngModelOptions)) {
              field.ngModelOptions = {
                allowInvalid: true
              };
            } else {
              field.ngModelOptions.allowInvalid = true;
            }
          } else if (_.find(service.errors, { key: key })) {
            service.errors = _.reject(service.errors, { key: key });
            $rootScope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
            $rootScope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
          }
        }
      }
    }

    function getKey(key) {
      if (_.isArray(key)) {
        key = _.reduce(key, function (total, next) {
          if (/^(\d*)$/.test(next)) {
            return total + '[' + next + ']';
          }
          return total + '.' + next;
        });
      }
      return key;
    }

    function getSchema(key, depth) {
      var service = this;
      if (!key) return;

      key = service.getKey(key);

      //key = key.split('.');
      //key = key
      //    .replace(/arrayIndex/g, '')
      //    .replace(/(\[')([^.]+)\.([^.]+)('])/g, '.$2%ff_dt%$3')
      //    .replace(/\./g, '%ff_sp%')
      //    .replace(/%ff_dt%/g, '.')
      //    .split('%ff_sp%');
      key = sfPath.parse(key);
      depth = depth || service.schema.schema.properties;

      if (_.last(key) === '') key.pop();

      var first, next, matchArray;

      while (key.length > 1) {
        first = key[0];
        next = key[1];
        matchArray = next.match(/^\d*$/);
        //if(first.slice(first.length - 2) === '[]') {
        if (matchArray) {
          depth = depth[key.shift()].items.properties;
          key.shift();
        } else {
          depth = depth[key.shift()].properties;
        }
      }

      first = key[0];

      return depth[first];
    }

    function processResolve(field) {
      var service = this;

      _.each(field.resolve, function (dataProp, fieldProp) {
        service.handleResolve(field, fieldProp, dataProp);

        var resolveType = dataProp.match(/^(schema\.data\.|model\.)(\w+)/);

        if (resolveType) {
          if (resolveType[1] === 'schema.data.') {
            service.registerResolve(field, fieldProp, resolveType[2]);
          } else if (resolveType[1] === 'model.') {
            service.registerHandler(resolveType[2], function () {
              service.handleResolve(field, fieldProp, dataProp);
            });
          }
        }
      });

      return field;
    }

    function handleResolve(field, fieldProp, exp) {
      var service = this;
      var data = service.parseExpression(exp).get();
      if (data && data.cursor) {
        field.loadMore = function () {
          var dataProp = exp.match(/schema\.data\.(.+)/)[1];
          service.refreshSchema('data:' + dataProp + ':' + data.cursor);
        };
      } else {
        delete field.loadMore;
      }
      field[fieldProp] = data && data.data ? data.data : data;
    }

    function registerResolve(field, fieldProp, dataProp) {
      var service = this;

      var fieldKey = service.getKey(field.key);
      service.resolveRegister[dataProp] = service.resolveRegister[dataProp] || {};

      var register = service.resolveRegister[dataProp];
      register[fieldKey] = register[fieldKey] || [];
      register[fieldKey].push({
        field: field,
        prop: fieldProp
      });
    }

    function processFieldWatch(field) {
      var service = this,
          schema = field.schema;

      field.watch = _.isArray(field.watch) ? field.watch : [field.watch];

      _.each(field.watch, function (watch) {
        if (watch.resolution) {
          var condition = watch.condition;
          var functionCondition = service.isConditionFunction(condition);

          var resolution = watch.resolution;
          var handler;

          if (_.isFunction(resolution)) {
            handler = function handler(cur, prev) {
              var parsedCondition = functionCondition ? service.parseCondition(functionCondition) : condition;
              if (!parsedCondition || $parse(parsedCondition)(service)) {
                resolution(cur, prev);
              }
            };
          } else {
            var adjustment = {};

            adjustment.date = resolution.match(/\+ ?(\d+) days/);

            if (adjustment.date) {
              adjustment.date = adjustment.date[1];
              resolution = resolution.replace(adjustment.date, '').trim();
            } else {
              adjustment.math = resolution.match(/(\+|\-|\/|\*) ?(\S+)/);

              if (adjustment.math) {
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

            handler = function handler(val, prev, key, trigger) {
              var updatePath = undefined,
                  fromPath = undefined;

              if (resolution[1].includes('arrayIndex')) {
                updatePath = replaceArrayIndex(resolution[1], key);
              }
              var update = service.parseExpression(updatePath || resolution[1]);

              // avoid loop where two watches keep triggering each other
              if (trigger === update.path().key) return;
              trigger = update.path().key;

              if (resolution[2].includes('arrayIndex')) {
                fromPath = replaceArrayIndex(resolution[2], key);
              }
              var from = service.parseExpression(fromPath || resolution[2]);

              var parsedCondition = functionCondition ? service.parseCondition(functionCondition, condition) : condition;
              if (!parsedCondition || $parse(parsedCondition)(service)) {
                if (adjustment.date) {
                  update.set(moment(from.get()).add(adjustment.date, 'days').toDate());
                } else if (adjustment.math) {
                  //var result = _[adjustment.operator](from.get(), adjustment.adjuster.get());
                  //console.log('_.%s(%s, %s):', adjustment.operator, from.get(), adjustment.adjuster.get(), result);
                  var result = eval(from.get() + adjustment.math[1] + adjustment.adjuster.get());
                  //console.log('eval(%s %s %s):', from.get(), adjustment.math[1], adjustment.adjuster.get(), result);
                  //console.log('result:', result);
                  //console.log('adjustment.math:', adjustment, from.get(), adjustment.adjuster.get(), result);
                  //console.log('schema.format:', schema.format);
                  schema = schema || field.items && (field.items[0].schema || field.items[0].items && field.items[0].items[0].schema);
                  if (field.type === 'cn-currency') {
                    var p = schema && schema.format === 'currency-dollars' ? 2 : 0;

                    if (adjustment.math[1] === '*') {
                      result = _.floor(result, p);
                    } else if (adjustment.math[1] === '/') {
                      result = _.ceil(result, p);
                    } else {
                      result = _.round(result, p);
                    }
                  }
                  //service.listeners[update.path().key].prev = result;
                  if (service.listeners[trigger]) {
                    service.listeners[trigger].trigger = key;
                  }
                  update.set(result || 0);
                } else {
                  update.set(from.get());
                }
              }
            };
          }

          service.registerHandler(field, handler, field.updateSchema, watch.initialize);
        }
      });
    }

    function isConditionFunction(condition) {
      return condition && condition.match(/(\!?)(.+)\((.+)\)/);
    }

    function parseCondition(condition, original) {
      var service = this,
          invert = condition[1],
          functionName = condition[2],
          functionArgument = condition[3];

      if (functionName === 'any') {
        var predicate = functionArgument.match(/(.+)\[\]\.*(.*)(===|>|<|>=|<=)(.+)/),
            arr = service.parseExpression(predicate[1]).get(),
            comparator = predicate[3],
            comparisonValue = predicate[4].trim().replace(/'/g, ''),
            key = predicate[2].trim(),
            evaluation = false;

        arr.forEach(function (value) {
          var val = key ? value[key] : value;
          if (evaluatePredicate(val, comparator, comparisonValue)) {
            evaluation = true;
          }
        });

        return invert ? (!evaluation).toString() : evaluation.toString();
      } else {
        condition = original.replace(/model\./g, 'service.model.');
        //console.log('eval:', condition, eval(condition));
        // stupid hack so we can evaluate the evaluated results
        return !!eval(condition) + '';
      }
    }

    function evaluatePredicate(val1, comparator, val2) {
      switch (comparator) {
        case '===':
          return val1 === val2;
        case '>=':
          return val1 >= val2;
        case '<=':
          return val1 <= val2;
        case '>':
          return val1 > val2;
        case '<':
          return val1 < val2;
      }
    }

    function registerHandler(key, handler, updateSchema, runHandler) {
      var service = this;

      // if field is passed instead of key
      if (_.isObject(key) && !_.isArray(key)) {
        if (!key.key && key.items) {
          _.each(key.items, function (field) {
            service.registerHandler(field, handler, field.updateSchema);
          });
          return;
        } else {
          key = key.key;
        }
      }

      key = service.getKey(key);
      var arrMatch = key.match(/([^[\]]*)\[]\.?(.+)/);

      if (arrMatch) {
        service.registerArrayHandlers(arrMatch[1], arrMatch[2], handler, updateSchema, runHandler);
        return;
      }

      var cur = service.parseExpression(key, service.model).get();

      if (!service.listeners[key]) {
        var prev = angular.copy(cur);
        service.listeners[key] = {
          handlers: [],
          updateSchema: updateSchema,
          prev: prev
        };
      }

      if (handler) {
        service.listeners[key].handlers.push(handler);
        if (runHandler) handler(cur, null, key);
      }
    }

    function registerArrayHandlers(arrKey, fieldKey, handler, updateSchema, runHandler) {
      var service = this;
      var onArray = function onArray(cur, prev, reorder) {

        if (!prev && prev !== 0) return;
        var i, l, key;

        if (prev > cur || reorder) {
          var lastKey = arrKey + '[' + (prev - 1) + ']' + '.' + fieldKey;
          // only deregister handlers once each time an element is removed
          if (service.listeners[lastKey]) {
            for (i = 0, l = prev; i < l; i++) {
              key = arrKey + '[' + i + ']' + '.' + fieldKey;
              service.deregisterHandlers(key);
            }
          }
          for (i = 0, l = cur; i < l; i++) {
            key = arrKey + '[' + i + ']' + '.' + fieldKey;
            service.registerHandler(key, handler, updateSchema);
            //no need to call if just reregisering handlers
            //if(runHandler) handler(null, null, key);
          }
        } else if (cur > (prev || 0)) {
            for (i = prev, l = cur; i < l; i++) {
              key = arrKey + '[' + i + ']' + '.' + fieldKey;
              service.registerHandler(key, handler, updateSchema, runHandler);
              //if(runHandler) handler(null, null, key);
            }
          }
      };

      var arrVal = service.parseExpression(arrKey, service.model).get();
      _.each(arrVal, function (field, i) {
        var key = arrKey + '[' + i + ']' + '.' + fieldKey;
        service.registerHandler(key, handler, updateSchema);
        if (runHandler) handler(null, null, key);
      });

      if (service.arrayListeners[arrKey + '.length']) {
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
      var arrMatch = key.match(/([^[\]]*)\[]\.?(.+)/);

      if (arrMatch) {
        service.deregisterArrayHandlers(arrMatch[1], arrMatch[2]);
        return;
      }

      //console.log('deregisterHandlers:', key);
      if (service.listeners[key]) service.listeners[key].handlers = [];
    }

    function deregisterArrayHandlers(arrKey, fieldKey) {
      var service = this;

      //console.log('deregisterArrayHandlers:', arrKey, fieldKey);

      service.parseExpression(arrKey, service.model).get().forEach(function (item, i) {
        service.deregisterHandlers(arrKey + '[' + i + '].' + fieldKey);
      });
    }

    function initModelWatch() {
      //console.log('initModelWatch:', initModelWatch);
      var service = this;
      if (service.watching) return;
      if (service.modelWatch) service.modelWatch();

      service.modelWatch = $rootScope.$watch(function () {
        return service.model;
      }, service.onModelWatch.bind(service), true);

      service.initSchemaParams();
      service.watching = true;
      service.firstUpdate = true;
    }

    function onModelWatch(cur, prev) {
      var service = this;
      // we always run through the listeners on the first update because angular seems to mess up
      // when the defaults are applied and uses the same object for both cur and prev
      if (service.firstUpdate || !angular.equals(cur, prev)) {
        service.firstUpdate = false;
        cnUtil.cleanModel(service.model);

        service.prevParams = angular.copy(service.params);
        service.params = {};

        _.each(service.arrayListeners, function (listener, key) {
          var val = service.parseExpression(key, service.model).get();
          if (!angular.equals(val, listener.prev)) {
            _.each(listener.handlers, function (handler) {
              handler(val, listener.prev);
            });
            listener.prev = angular.copy(val);
          }
        });

        _.each(service.listeners, function (listener, key) {
          if (listener) {
            var val = service.parseExpression(key, service.model).get();
            //console.log('listener:', key, val, listener.prev, angular.equals(val, listener.prev));
            if (!angular.equals(val, listener.prev)) {
              _.each(listener.handlers, function (handler) {
                //console.log('key, listener.trigger:', key, listener.trigger);
                handler(val, listener.prev, key, listener.trigger);
              });
              listener.trigger = null;
              listener.prev = angular.copy(val);
            }
            if (listener.updateSchema && !angular.isUndefined(val) && val !== null) {
              service.params[key] = val;
            }
          }
        });

        if (!angular.equals(service.params, service.prevParams)) {
          if (service.model.id && !service.updates && _.isEmpty(service.prevParams)) {
            ++service.updates;
          } else {
            service.refreshSchema();
          }
        }
      }
    }

    function initSchemaParams() {
      var service = this;
      _.each(service.listeners, function (listener, key) {
        if (listener) {
          var val = service.parseExpression(key, service.model).get();
          if (listener.updateSchema && !angular.isUndefined(val) && val !== null) {
            service.params[key] = val;
          }
        }
      });
    }

    function initArrayCopyWatch() {
      console.log('initArrayCopyWatch: how many times does this event get registered?');
      var service = this;

      //TODO: refactor this, only register event once
      service.events.push($rootScope.$on('schemaFormPropagateScope', function (event, scope) {
        var key = service.getKey(scope.form.key);
        var index = key.match(/^.*\[(\d+)].*$/);

        key = key.replace(/\[\d+]/g, '[]');
        index = index && parseInt(index[1]);

        if (!scope.form.condition) scope.form.condition = 'true';

        service.addArrayCopy(scope.form, key, index);
        //console.log('service.arrayCopies:', service.arrayCopies);
        scope.$emit('flexFormArrayCopyAdded', key);
      }));

      service.events.push($rootScope.$on('schemaFormDeleteScope', function (event, scope, index) {
        console.log('schemaFormDeleteScope:', index, scope.form, scope);
        var key = service.getKey(scope.form.key).replace(/\[\d+]/g, '[]');
        var copies = service.getArrayCopiesFor(key);

        copies.forEach(function (list) {
          list.splice(index, 1);
        });

        if (scope.form.link) {
          var list = service.parseExpression(scope.form.link, service.model).get();
          list.splice(index, 1);
        }
      }));
    }

    function addArrayCopy(form, key, index) {
      var service = this;
      if (!index || index < 0) index = 0;
      if (!service.arrayCopies[key]) service.arrayCopies[key] = [];
      service.arrayCopies[key][index] = form;
      //service.arrayCopies[key].push(form);
    }

    function getArrayCopies(key) {
      var service = this;
      return service.arrayCopies[key];
    }

    function getArrayCopiesFor(keyStart) {
      var service = this;
      var copiesList = [];
      keyStart += '[]';

      _.each(service.arrayCopies, function (copies, key) {
        if (key.includes(keyStart)) copiesList.push(copies);
      });

      return copiesList;
    }

    function addToFormCache(field, key) {
      var service = this;
      key = key || service.getKey(field.key);
      if (!service.getFromFormCache(key)) service.formCache[key] = field;
    }

    function getFromFormCache(key) {
      var service = this;
      return service.formCache[key];
    }

    function addToDataCache(key, modelValue) {
      var service = this;

      if (key) {
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
      if (!exp || /^(null|false|true|undefined|''|[0-9.]+|\[]|\{})$/.test(exp)) {
        return {
          "get": function get() {
            return eval(exp);
          }
        };
      }

      exp = service.getKey(exp);

      //var key;
      var match = exp.match(/^(model\.)?(\S+)$/);

      // cache fucks shit up if the model changes so disabling
      //var cached;

      // return from cache if possible
      //if(!/\[]/.test(exp) && match && match[2]) {
      //  if(!depth || depth === service.model) {
      //    key = match[2];
      //
      //    cached = service.getFromDataCache(key);
      //    if(cached) {
      //      return cached;
      //    }
      //  }
      //}

      var modelValue = {
        "get": function get() {
          //var path = exp.replace(/\[]/g, '').replace(/\[(\d+)]/g, '.$1').split('.');
          var path = sfPath.parse(exp);
          var start = depth || service;

          while (start && path.length > 1) {
            start = start[path.shift()];
          }

          //if(/\[]/g.test(exp)) {
          //  console.log('exp:', exp, start, start && start[path[0]]);
          //}
          return start && start[path[0]];
        },
        "set": function set(val) {
          //var path = exp.replace(/\[]/g, '').replace(/\[(\d+)]/g, '.$1').split('.');
          var path = sfPath.parse(exp);
          var start = depth || service;

          while (start && path.length > 1) {
            var key = path.shift();
            if (!start[key]) {
              if (/^\d?$/.test(path[0])) {
                start[key] = [];
              } else {
                start[key] = {};
              }
            }
            start = start[key];
          }

          start[path[0]] = val;

          return val;
        },
        "path": function path() {
          return {
            exp: exp,
            depth: depth,
            key: match[2]
          };
        }
      };

      //if(key) {
      //  service.addToDataCache(key, modelValue);
      //}

      return modelValue;
    }

    function processArray(array) {
      var service = this;
      var key = service.getKey(array.key);

      array.sortOptions = {
        update: function update(e, ui) {
          var listener = service.arrayListeners[key + '.length'];
          listener.handlers.forEach(function (handler) {
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

      _.each(component.items, function (field, i) {
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
      _.each(field.data, function (dataProp, key) {
        field.data[key] = service.parseExpression(dataProp).get();
      });
    }

    function processCsvUpload(field) {
      var service = this;
      field.type = 'cn-csvupload';
      // _.each(field.data, function(dataProp, key) {
      //   field.data[key] = service.parseExpression(dataProp).get();
      // });
    }

    function processRadiobuttons(radios) {
      var service = this;
      radios.type = 'cn-radiobuttons';
      if (radios.fullWidth) {
        radios.btnClass = 'col-sm-' + _.divide(12, radios.titleMap.length);
      }
    }

    function processDate(date) {
      var service = this;
      date.type = 'cn-datetimepicker';

      if (date.schema.format === 'time-minutes') {
        date.maxView = 'hour';
        date.iconClass = 'fa fa-clock-o';

        date.modelFormatter = function (val) {
          if (!val) return;

          var m = moment(val);

          return _.add(_.multiply(m.hours(), 60), m.minutes());
        };

        date.modelParser = function (val) {
          if (!val) return;

          var d = parseInt(val);
          var hours = _.floor(d / 60);
          var minutes = d % 60;

          return moment().startOf('day').add('hours', hours).add('minutes', minutes);
        };

        date.viewFormatter = function (val) {
          if (!val) return;

          return date.modelParser(val).format(date.dateFormat);
        };

        date.viewParser = function (val) {
          if (!val) return;

          var match = val.match(/^(\d{1,2}):?(\d{1,2})? (a|p)/);
          if (!match) return;

          var hours = _.add(match[1] === '12' ? 0 : match[1], match[3] === 'a' ? 0 : 12);
          var minutes = match[2] || '00';

          if (minutes.length === 1) minutes += '0';

          return _.add(_.multiply(hours, 60), minutes);
        };
      }
    }

    function processSelect(select) {
      var service = this,
          schema = select.schema;

      if (select.titleMapResolve || select.titleMap) {
        select.getTitleMap = function () {
          return select.titleMap || service.schema.data[select.titleMapResolve];
        };

        select.onInit = function (val, form, event, setter) {
          var modelValue = service.parseExpression(form.key, service.model);
          // make sure we have correct value
          val = modelValue.get();
          //console.log('service.getKey(form.key), val:', service.getKey(form.key), val);
          if (event === 'tag-init') {
            var newVal;
            if (form.schema.type === 'array') {
              newVal = [];
              _.each(val, function (val) {
                var valProp = select.valueProperty || select.schema.items.type !== 'object' && 'value';
                var match = valProp ? _defineProperty({}, valProp, val) : val;
                newVal.push(_.find(select.getTitleMap(), match));
              });
            } else {
              var valProp = select.valueProperty || form.schema.type !== 'object' && 'value';
              var match = valProp ? _defineProperty({}, valProp, val) : val;
              newVal = _.find(select.getTitleMap(), match);
            }
            //console.log('newVal:', newVal);
            if (newVal) setter(newVal);
          }
        };
      }

      if (select.titleMapQuery) {
        var key = select.titleMapQuery.params.q;
        select.titleQuery = function (q) {
          console.log('titleMap:', q);
          var params = {};
          if (key) {
            params[key] = q;
          }
          return Api.get({
            url: select.titleMapQuery.url,
            params: params
          });
        };

        // wrap in string so returns truthy when compiled, but converted to number within directive
        if (!key) select.minLookup = '0';

        select.onInit = function (val, form, event, setter) {
          //console.log('titleQuery:onInit:', val, form, event, setter);
          if (event === 'tag-init') {
            setter(val);
          }
        };
      }

      if (schema.items) {
        var defaults = [];
        _.each(schema.items.properties, function (schema, key) {
          if (angular.isDefined(schema.default)) {
            defaults.push({
              "key": key,
              default: schema.default
            });
          }
        });
        if (defaults.length) {
          select.onAdd = function (val, form, event) {
            if (val.value && event === 'tag-added') {
              _.each(defaults, function (prop) {
                //console.log('prop:', prop, val);
                if (!val.value[prop.key]) val.value[prop.key] = prop.default;
              });
            }
          };
        }
      }

      if (!select.type.includes('cn-autocomplete')) {
        if (select.items) {
          select.detailedList = true;

          if (select.items[0].type !== 'component') {
            if (select.items.length > 1) {
              select.items = [{
                type: "component",
                items: select.items
              }];
            }

            service.processFieldset(select);
          }

          select.type = 'cn-autocomplete-detailed';
        } else {
          if (!select.selectionStyle) {
            if (select.key === 'tags') {
              select.selectionStyle = 'tags';
            } else if (select.getSchemaType() === 'array' && select.schema.maxItems !== 1) {
              select.selectionStyle = 'list';
            } else {
              select.selectionStyle = 'select';
            }
          }
          select.type = 'cn-autocomplete';
        }
      }

      if (select.displayFormat) {
        select.itemFormatter = service.processTemplate(select.displayFormat);
      }

      service.registerHandler(select.key, function (val) {
        var form = service.formCtrl && service.formCtrl[service.getKey(select.key)];
        if (form && form.$setDirty) form.$setDirty();
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
      return function (scope, arrayIndex) {
        if (parseScope) {
          if (angular.isDefined(arrayIndex)) {
            scope = _.map(scope, function (key) {
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
      table.items.forEach(function (row) {
        for (var i = 0; i < table.columns.length; i++) {
          _.extend(row.items[i], table.columns[i]);
          //if (row.columns[i].key) row.columns[i].key = ObjectPath.parse(row.columns[i].key);
          service.processField(row.items[i]);
        }
      });
    }

    function processSelectDisplay(selectDisplay, schema) {
      var service = this,
          selectField = _.find(selectDisplay.items, 'selectField'),
          handler;

      if (schema && schema.type === 'array') {
        handler = service.setupArraySelectDisplay(selectDisplay, selectField);
      } else {
        handler = service.setupSelectDisplay(selectDisplay, selectField);
      }

      selectDisplay.selectDisplay = false;
      service.registerHandler(selectField.key, handler, selectField.updateSchema, true);
      service.processField(selectDisplay);
    }

    function setupArraySelectDisplay(selectDisplay, selectField) {
      var service = this;
      _.each(selectDisplay.items, function (item) {
        if (item.condition !== 'false') {
          item.condition = 'true';
        }
      });
      var handler = function handler(val, prev, key) {
        var index = getArrayIndex(key);
        _.each(selectDisplay.items, function (item) {
          var selectKey = service.getKey(selectField.key);
          var key = service.getKey(item.key);
          var splitKey = ObjectPath.parse(key);
          if (selectKey === key) return;
          var indexedSelectKey = service.setArrayIndex(selectKey, index);
          var selectValue = service.parseExpression(indexedSelectKey, service.model).get();
          var formCopies = service.getArrayCopies(key);
          if (_.includes(selectValue, splitKey[splitKey.length - 1])) {
            _.each(formCopies, function (copy) {
              if (getArrayIndex(copy) == index) {
                copy.condition = 'true';
              }
            });
          } else {
            _.each(formCopies, function (copy) {
              if (getArrayIndex(copy) == index) {
                copy.condition = 'false';
                service.parseExpression(service.getKey(copy.key), service.model).set();
              }
            });
          }
        });
      };
      // handle legacy objects that don't have values set in the selectField
      var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
      _.each(selectDisplay.items, function (item) {
        var key = service.getKey(item.key);
        var selectKey = service.getKey(selectField.key);
        if (key === selectKey) return;
        _.each(model, function (elem, i) {
          var indexedKey = service.setArrayIndex(key, i);
          var splitIndexedKey = ObjectPath.parse(indexedKey);
          var indexedSelectKey = service.setArrayIndex(selectKey, i);
          var selectModel = service.parseExpression(indexedSelectKey, service.model);
          var selectValue = selectModel.get();
          var itemValue = service.parseExpression(indexedKey, service.model).get();
          if (itemValue && !_.includes(selectValue, splitIndexedKey[splitIndexedKey.length - 1])) {
            if (!selectValue) {
              selectValue = [];
            }
            selectValue.push(splitIndexedKey[splitIndexedKey.length - 1]);
            selectModel.set(selectValue);
          }
        });
      });
      // handle new objects with values set in defaults
      var defaults = service.getSchema(selectDisplay.key).default;
      _.each(defaults, function (elem, i) {
        var selectKey = service.getKey(selectField.key);
        var indexedSelectKey = service.setArrayIndex(selectKey, i);
        var selectModel = service.parseExpression(indexedSelectKey, service.model);
        var selectValue = selectModel.get();
        _.each(elem, function (val, key) {
          if (!selectValue) {
            selectValue = [];
          }
          selectValue.push(key);
          selectModel.set(selectValue);
        });
      });
      // run handler once all arrayCopies have been instantiated
      var count = 0;
      var keyMap = _.pluck(_.reject(selectDisplay.items, { "condition": "false" }), 'key');
      var once = $rootScope.$on('flexFormArrayCopyAdded', function (event, key) {
        var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
        if (model) {
          var total = model.length * keyMap.length;
          if (_.includes(keyMap, key)) {
            count++;
          }
          if (count === total) {
            for (var i = 0; i < model.length; i++) {
              handler(null, null, '[' + i + ']');
            }
            count = 0;
          }
        }
      });
      var resetCount = $rootScope.$on('flexForm.updatePage', function () {
        count = 0;
      });
      service.events.push(once);
      service.events.push(resetCount);
      return handler;
    }

    function setupSelectDisplay(selectDisplay, selectField) {
      var service = this;
      var handler = function handler() {
        var selectKey = service.getKey(selectField.key);
        _.each(selectDisplay.items, function (item) {
          var key = service.getKey(item.key);
          var splitKey = ObjectPath.parse(key);
          if (selectKey === key) return;
          var selectValue = service.parseExpression(selectKey, service.model).get();
          if (_.includes(selectValue, splitKey[splitKey.length - 1])) {
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
      _.each(selectDisplay.items, function (item) {
        var key = service.getKey(item.key);
        if (selectKey === key) return;
        var splitKey = ObjectPath.parse(key);
        var itemValue = service.parseExpression(key, service.model).get();
        if (itemValue && !_.includes(selectValue, splitKey[splitKey.length - 1])) {
          if (!selectValue) {
            selectValue = [];
          }
          selectValue.push(splitKey[splitKey.length - 1]);
          selectModel.set(selectValue);
        }
      });
      // handle new objects with values set in the defaults
      var defaults = service.getSchema(selectDisplay.key).default;
      _.each(defaults, function (val, key) {
        if (!selectValue) {
          selectValue = [];
        }
        selectValue.push(key);
        selectModel.set(selectValue);
      });
      // set default values here
      var model = service.parseExpression(selectDisplay.key, service.model);
      if (defaults && !model.get()) {
        model.set(defaults);
      }

      return handler;
    }

    function setupSchemaRefresh(refresh) {
      var service = this;
      service.refreshSchema = _.debounce(function (updateSchema) {
        var params = _.extend(cnFlexFormConfig.getStateParams(), service.params);
        console.log('service.schema.params, params:', service.schema.params, params);
        var diff = cnUtil.diff(service.schema.params, params, true);
        var keys;

        if (diff || updateSchema) {
          if (updateSchema) params.updateSchema = updateSchema;else {
            keys = _.keys(diff);

            if (keys.length > 1) {
              diff = _.omit(diff, _.isNull);
              keys = _.keys(diff);
            }
            //console.log('keys, diff:', keys, diff, {
            //  cur: _.clone(params),
            //  prev: _.clone(service.schema.params)
            //});

            params.updateSchema = _.first(keys);
          }

          if (!params.updateSchema) {
            diff = cnUtil.diff(params, _.omit(service.schema.params, 'updateSchema'));
            keys = _.keys(diff);

            params.updateSchema = _.first(keys);
          }

          refresh(params).then(function (schema) {
            ++service.updates;
            //service.updateSchema(schema);
            service.processUpdatedSchema(schema);
          });
        }
      }, 100);

      service.refreshData = _.debounce(function () {
        refresh(_.extend(service.schema.params, { updateSchema: 'refreshData' })).then(function (schema) {
          service.processUpdatedSchema(schema);
          console.log('service.schema.params:', service.schema.params);
        });
      }, 100);

      service.events.push($rootScope.$on('ffRefreshData', service.refreshData));
    }

    function processUpdatedSchema(schema) {
      var service = this;
      if (schema.diff) {
        service.schema.params = schema.params;

        if (schema.diff.data) {
          _.each(schema.diff.data, function (data, prop) {
            if (data && data.data && !_.isEmpty(service.schema.data[prop].data) && !data.reset) {
              data.data = service.schema.data[prop].data.concat(data.data);
            }
            service.schema.data[prop] = data;
            if (service.resolveRegister[prop]) {
              _.each(service.resolveRegister[prop], function (registers) {
                registers.forEach(function (register) {
                  service.handleResolve(register.field, register.prop, 'schema.data.' + prop);
                });
              });
            }
          });
        }

        var keys = [];

        if (schema.diff.schema) {
          _.each(schema.diff.schema, function (schema, key) {
            service.schema.schema.properties[key] = schema;
            reprocessSchema(schema, key, keys);
          });
        }

        if (schema.diff.form) {
          _.each(schema.diff.form, function (form) {

            if (keys.indexOf(form.key) === -1) {
              keys.push(form.key);
            }

            // don't want to override key when extending cached objects
            //var key = form.key;
            //delete form.key;

            var cached = service.getFromFormCache(form.key);
            if (cached) {
              service.reprocessField(cached, form);
            }
            var copies = service.getArrayCopies(form.key);
            if (copies) {
              _.each(copies, function (copy) {
                service.reprocessField(copy, form);
              });
            }
          });
        }

        if (keys.length) {
          _.each(keys, function (key) {
            var form = service.getFromFormCache(key);
            if (form) service.processField(form);
            if (key.includes('[]')) {
              var copies = service.getArrayCopies(key);
              _.each(copies, function (copy) {
                if (copy) service.processField(copy);
              });
            }
          });
        }

        service.broadcastErrors();
      } else {
        service.updateSchema(schema);
      }
    }

    function reprocessField(current, update, isChild) {
      var service = this;

      _.extend(current, _.omit(update, 'items', 'key'));

      current._ogKeys.forEach(function (key) {
        if (!update[key]) delete current[key];
      });
      current._ogKeys = _.keys(update);

      service.deregisterHandlers(update.key);

      if (!isChild && current.redraw) current.redraw();
    }

    function reprocessSchema(schema, key, keys) {
      keys.push(key);
      if (schema.properties) {
        _.each(schema.properties, function (schema, subKey) {
          reprocessSchema(schema, key + '.' + subKey, keys);
        });
      }
      if (schema.items && schema.items.properties) {
        _.each(schema.properties, function (schema, subKey) {
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
      $timeout(function () {
        service.errors.forEach(function (error) {
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

    function getArrayIndex(key) {
      if (_.isObject(key)) {
        return _.find(key.key, function (key) {
          return _.isNumber(key);
        });
      } else {
        return (/\[(\d+)\]/.exec(key)[1]
        );
      }
    }

    function setArrayIndex(key, index, asArray) {
      var service = this;
      var keyCopy;
      if (_.isString(key)) {
        keyCopy = ObjectPath.parse(key);
      } else {
        keyCopy = _.clone(key);
      }
      var indexOfIndex = keyCopy.indexOf('');
      keyCopy[indexOfIndex] = index;

      if (asArray) {
        return keyCopy;
      } else {
        return service.getKey(keyCopy);
      }
    }

    function cleanup() {
      var service = this;
      _.each(service.events, function (listener) {
        listener();
      });
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').controller('FlexFormSandbox', FlexFormSandbox);

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
      if (vm.schemaStr) {
        var schema = angular.fromJson(vm.schemaStr);
        console.log('schema:', schema);
        if (!schema.form && schema.forms) {
          schema.form = schema.forms[0].form;
        }
        vm.config.schema = schema.form && schema;
      }
    }
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('cn.flex-form').config(schemaFormConfig).run(addTemplates);

  schemaFormConfig.$inject = ['cnFlexFormServiceProvider'];

  function schemaFormConfig(cnFlexFormServiceProvider) {
    var extensions = ['cn-fieldset', 'cn-toggle', 'cn-datetimepicker', 'cn-autocomplete', 'cn-autocomplete-detailed', 'cn-currency', 'cn-radiobuttons', 'cn-percentage', 'cn-display', 'cn-mediaupload', 'cn-csvupload', 'cn-reusable', 'cn-table'];

    _.each(extensions, function (extension) {
      cnFlexFormServiceProvider.registerField({
        type: extension,
        templateUrl: 'app/components/cn-flex-form/forms/' + extension + '.html'
      });
    });
  }

  addTemplates.$inject = ['$templateCache'];

  function addTemplates($templateCache) {
    $templateCache.put('app/components/cn-flex-form/forms/cn-toggle.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n          <div class="clearfix">\n            <cn-toggle-switch\n              class="pull-left"\n              ng-show="form.key"\n              ng-model-options="form.ngModelOptions"\n              ng-model="$$value$$"\n              sf-changed="form"\n              schema-validate="form"\n              on-value="form.onValue"\n              off-value="form.offValue"\n              undefined-class="form.undefinedClass"/>\n            <span ng-show="form.onText && form.offText">\n              {{$$value$$ === form.onValue ? form.onText : form.offText}}\n            </span>\n          </div>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-datetimepicker.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 for="{{form.key.join(\'.\')}}"\n                 ng-show="showTitle()">{{form.title}}</label>\n          <cn-datetimepicker\n            ng-show="form.key"\n            ng-model="$$value$$"\n            ng-model-options="form.ngModelOptions"\n            is-disabled="form.readonly"\n            sf-changed="form"\n            schema-validate="form"\n            input-id="{{form.key.join(\'.\')}}"\n            min-date="form.minDate"\n            max-view="{{form.maxView}}"\n            cn-date-required="form.required"\n            placeholder="{{form.placeholder}}"\n            model-type="{{form.schema.type}}"\n            model-formatter="form.modelFormatter"\n            model-parser="form.modelParser"\n            view-formatter="form.viewFormatter"\n            view-parser="form.viewParser"\n            format-string={{form.dateFormat}}\n            icon-class={{form.iconClass}}>\n          </cn-datetimepicker>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    var sharedAutocompleteTpl = '\n          <tags-input\n            ng-show="form.key"\n            ng-model="$$value$$"\n            ng-model-options="form.ngModelOptions"\n            ng-disabled="form.readonly"\n            sf-changed="form"\n            schema-validate="form"\n            input-id="{{form.key.join(\'.\')}}"\n            display-property="{{form.displayProperty || \'name\'}}"\n            value-property="{{form.valueProperty}}"\n            placeholder="{{form.placeholder || \' \'}}"\n            add-on-blur="true"\n            add-on-comma="false"\n            add-from-autocomplete-only="{{!form.allowNew}}"\n            on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n            on-init="form.onInit($tag, form, $event, $setter)"\n            model-type="{{form.getSchemaType()}}"\n            array-value-type="{{form.schema.items.type}}"\n            hide-tags="{{form.detailedList}}"\n            tags-style="{{form.selectionStyle}}"\n            required="{{form.required}}"\n            min-length="{{form.minLength}}"\n            allowed-tags-pattern=".*"\n            dropdown="true"\n            item-formatter="form.itemFormatter"\n            min-tags="{{form.schema.minItems}}"\n            max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\n            allow-bulk="{{form.bulkAdd}}"\n            bulk-delimiter="{{form.bulkDelimiter}}"\n            bulk-placeholder="{{form.bulkPlaceholder}}"\n            show-button="true">\n            <auto-complete\n              source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query)"\n              skip-filtering="{{form.titleQuery ? true : false}}"\n              min-length="{{form.minLookup || (form.titleQuery && 3 || 0)}}">\n            </auto-complete>\n          </tags-input>';

    $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 for="{{form.key.join(\'.\')}}-input"\n                 ng-show="showTitle()">{{form.title}}</label>\n          ' + sharedAutocompleteTpl + '\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n        <div sf-array="form"\n             class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 for="{{form.key.join(\'.\')}}-input"\n                 ng-show="showTitle()">{{form.title}}</label>\n          <ol class="list-group cn-autocomplete-list"\n              ng-show="modelArray.length"\n              ng-model="modelArray">\n            <li class="list-group-item {{form.fieldHtmlClass}}"\n                ng-repeat="item in modelArray track by $index">\n              <button ng-hide="form.readonly || form.remove === null"\n                      ng-click="deleteFromArray($index)"\n                      type="button" class="close pull-right">\n                <span aria-hidden="true">&times;</span>\n              </button>\n              <sf-decorator ng-init="arrayIndex = $index" form="copyWithIndex($index)"/>\n            </li>\n          </ol>\n          ' + sharedAutocompleteTpl + '\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-currency.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 ng-show="showTitle()"\n                 for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n          <div class="{{form.fieldClass}} input-group">\n            <label class="input-group-addon"\n                   ng-disabled="form.readonly"\n                   for="{{form.key.join(\'.\')}}">$</label>\n            <input class="form-control"\n                   cn-currency-format="{{form.currencyFormat}}"\n                   cn-currency-placeholder="{{form.placeholder}}"\n                   ng-show="form.key"\n                   ng-model-options="form.ngModelOptions"\n                   ng-disabled="form.readonly"\n                   sf-changed="form"\n                   schema-validate="form"\n                   ff-validate="form"\n                   type="text"\n                   step="any"\n                   min="{{form.min}}"\n                   max="{{form.max}}"\n                   id="{{form.key.join(\'.\')}}"\n                   name="{{form.key.join(\'.\')}}"\n                   ng-model="$$value$$">\n          </div>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-radiobuttons.html', '\n        <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n          <div class="btn-group clearfix">\n            <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\n                   ng-repeat="item in form.titleMap">\n              <input type="radio"\n                     class="{{form.fieldHtmlClass}} hide"\n                     sf-changed="form"\n                     ng-disabled="form.readonly"\n                     ng-model="$$value$$"\n                     ng-model-options="form.ngModelOptions"\n                     schema-validate="form"\n                     ff-validate="form"\n                     ng-value="item.value"\n                     name="{{form.key.join(\'.\')}}">\n              <i class="fa fa-{{item.value}} fa-lg"></i>\n              <span ng-bind-html="item.name"></span>\n            </label>\n          </div>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 ng-show="showTitle()"\n                 for="{{form.key && form.key[0]}}">{{form.title}}</label>\n          <div class="{{form.fieldClass}} input-group">\n            <input class="form-control"\n                   cn-percentage-format\n                   ng-show="form.key"\n                   ng-model-options="form.ngModelOptions"\n                   ng-disabled="form.readonly"\n                   sf-changed="form"\n                   schema-validate="form"\n                   type="number"\n                   step="any"\n                   min="{{form.min}}"\n                   max="{{form.max}}"\n                   id="{{form.key && form.key[0]}}"\n                   name="{{form.key && form.key[0]}}"\n                   ng-model="$$value$$">\n             <div class="input-group-addon"\n                    ng-disabled="form.readonly"\n                    for="{{form.key && form.key[0]}}">%</div>\n          </div>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-display.html', '\n        <div class="form-group cn-display{{form.htmlClass}}">\n          <input ng-show="form.key"\n                 class="form-control"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-disabled="true"\n                 value="{{form.getDisplay(form.key, form.arrayIndex)}}">\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n        <fieldset ng-disabled="form.readonly" class="schema-form-fieldset {{form.htmlClass}}">\n          <legend ng-click="form.toggleCollapse()"\n                  ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                  ng-mouseenter="form.render = true">\n            <i ng-show="form.collapsible"\n               class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n            {{ form.title }}\n          </legend>\n          <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n          <div collapse="form.collapsed">\n            <div ng-if="form.render">\n              <sf-decorator ng-repeat="item in form.items" form="item"/>\n            </div>\n          </div>\n        </fieldset>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 ng-show="showTitle()"\n                 for="{{form.key && form.key[0]}}">{{form.title}}</label>\n          <media-upload ng-model="$$value$$"\n                        cn-file-type="form.fileType"\n                        cn-upload-path="form.uploadPath"\n                        cn-data="form.data"\n                        cn-preview-path="form.previewPath"\n                        cn-model-value-key="form.modelValueKey"\n                        ng-model-options="form.ngModelOptions"\n                        sf-changed="form"\n                        schema-validate="form"\n                        ff-form="form"\n                        class="clearfix">\n          </media-upload>\n          <span class="help-block" sf-message="form.description"></span>\n       </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-csvupload.html', '\n        <div class="form-group {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 ng-show="showTitle()"\n                 for="{{form.key && form.key[0]}}">{{form.title}}</label>\n          <csv-upload ng-model="$$value$$"\n                        cn-upload-path="form.uploadPath"\n                        ng-model-options="form.ngModelOptions"\n                        sf-changed="form"\n                        schema-validate="form"\n                        ff-form="form"\n                        class="clearfix">\n          </csv-upload>\n          <span class="help-block" sf-message="form.description"></span>\n       </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-reusable.html', '\n        <div class="form-group cn-reusable {{form.htmlClass}}"\n             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n          <label class="control-label"\n                 ng-show="showTitle()"\n                 for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n          <cn-select-or\n            ng-show="form.key"\n            select-from="form.library"\n            ng-model="$$value$$"\n            ng-model-options="form.ngModelOptions"\n            sf-changed="form"\n            schema-validate="form"\n            ff-form="form"\n            directiveId="form.directiveId"\n            item-template="form.itemTemplate"\n            toggle-text="form.toggleText"\n            disabled="form.readonly"\n            view="form.view">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </cn-select-or>\n          <p ng-if="form.loadMore && form.view === \'list\'">\n            <a ng-click="form.loadMore()"\n               class="btn btn-default btn-block">Load More</a>\n          </p>\n          <span class="help-block" sf-message="form.description"></span>\n        </div>');

    $templateCache.put('app/components/cn-flex-form/forms/cn-table.html', '\
        <div class="form-group cn-ff-table {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <h6>{{form.title}}</h6>\
          <div class="row">\
            <div ng-repeat="col in form.columns" class="{{col.columnWidth}}">\
              <p class="column-header">{{col.columnHeader}}</p>\
            </div>\
          </div>\
          <div class="row" ng-repeat="row in form.items">\
            <div ng-repeat="col in row.items" class="{{col.columnWidth}}">\
              <sf-decorator form="col"></sf-decorator>\
            </div>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        ');
  }
})();