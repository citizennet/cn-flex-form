(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("objectpath"));
	else if(typeof define === 'function' && define.amd)
		define("cn-flex-form", ["lodash", "objectpath"], factory);
	else if(typeof exports === 'object')
		exports["cn-flex-form"] = factory(require("lodash"), require("objectpath"));
	else
		root["cn-flex-form"] = factory(root["lodash"], root["objectpath"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _cnFlexFormConfig = __webpack_require__(1);
	
	var _cnFlexFormConfig2 = _interopRequireDefault(_cnFlexFormConfig);
	
	var _cnFlexFormTypes = __webpack_require__(2);
	
	var _cnFlexFormTypes2 = _interopRequireDefault(_cnFlexFormTypes);
	
	var _cnFlexForm = __webpack_require__(3);
	
	var _schemaFormExtensions = __webpack_require__(4);
	
	var _cnFlexForm2 = __webpack_require__(5);
	
	var _cnFlexForm3 = _interopRequireDefault(_cnFlexForm2);
	
	var _cnFlexFormModalLoader = __webpack_require__(8);
	
	var _cnFlexFormModalLoader2 = _interopRequireDefault(_cnFlexFormModalLoader);
	
	var _cnFlexFormModalLoader3 = __webpack_require__(9);
	
	var _cnFlexForm4 = __webpack_require__(10);
	
	var _cnFlexForm5 = _interopRequireDefault(_cnFlexForm4);
	
	var _cnFlexFormHeader = __webpack_require__(12);
	
	var _cnFlexFormHeader2 = _interopRequireDefault(_cnFlexFormHeader);
	
	var _cnFlexFormValidate = __webpack_require__(13);
	
	var _cnFlexFormValidate2 = _interopRequireDefault(_cnFlexFormValidate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('cn.flex-form', ['ui.router', 'schemaForm', 'ui.bootstrap.datetimepicker', 'cnTagsInput', 'cn.util']).provider('cnFlexFormConfig', _cnFlexFormConfig2.default).provider('cnFlexFormTypes', _cnFlexFormTypes2.default).provider('cnFlexFormRoutes', _cnFlexForm.cnFlexFormRoutesProvider).config(_cnFlexForm.cnFlexFormRoutes).config(_schemaFormExtensions.schemaFormConfig).run(_schemaFormExtensions.addTemplates).provider('cnFlexFormService', _cnFlexForm3.default).provider('cnFlexFormModalLoaderService', _cnFlexFormModalLoader2.default).factory('FlexFormModal', _cnFlexFormModalLoader3.FlexFormModal).controller('FlexFormModalLoader', _cnFlexFormModalLoader3.FlexFormModalLoader).directive('cnFlexForm', _cnFlexForm5.default).directive('cnFlexFormHeader', _cnFlexFormHeader2.default).directive('ffValidate', _cnFlexFormValidate2.default).name;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function cnFlexFormConfigProvider() {
	
	  cnFlexFormConfig.$inject = ["$stateParams"];
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
	    'ngInject';
	
	    return {
	      getStateParams: getStateParams,
	      ignoreParams: ignoreParams
	    };
	
	    ////////
	
	    function getStateParams() {
	      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      return _(_extends({}, $stateParams, overrides)).omit(ignoreParams).omit(function (v) {
	        return _.isUndefined(v) || v === null;
	      }).value();
	    }
	  }
	}
	
	//angular
	//.module('cn.flex-form')
	//.provider('cnFlexFormConfig', cnFlexFormConfigProvider);
	
	exports.default = cnFlexFormConfigProvider;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	      return field.type.includes('autocomplete') || field.titleMapResolve || field.titleMap || field.titleMapQuery;
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
	      return field.schema && field.type === 'url';
	    },
	    type: 'cn-url'
	  }, {
	    condition: function condition(field) {
	      return field.type === 'toggle' || field.type === 'boolean';
	    },
	    type: 'cn-toggle'
	  }, {
	    condition: function condition(field) {
	      return field.type === 'creativeimage';
	    },
	    type: 'cn-creativeimage'
	  }, {
	    condition: function condition(field) {
	      return field.type === 'facebookvideo';
	    },
	    type: 'cn-facebookvideo'
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
	  }, {
	    condition: function condition(field) {
	      return field.type === 'schedule';
	    },
	    type: 'cn-schedule'
	  }, {
	    condition: function condition(field) {
	      return field.schema && field.schema.type === 'number';
	    },
	    type: 'cn-number'
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
	
	exports.default = cnFlexFormTypesProvider;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	cnFlexFormRoutesProvider.$inject = ["$stateProvider"];
	cnFlexFormRoutes.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function cnFlexFormRoutesProvider($stateProvider) {
	  'ngInject';
	
	  return {
	    addStates: addStates,
	    $get: $get
	  };
	
	  ////////////
	
	  function $get() {
	    // nothing to do here, but required
	  }
	
	  function addStates(_ref) {
	    var permissions = _ref.permissions,
	        name = _ref.name;
	
	    var shared = {
	      controller: 'FlexFormModalLoader',
	      controllerAs: 'vm',
	      permissions: permissions
	    };
	    $stateProvider.state(name + '.page.modal', _extends({
	      url: '/~:modal/:modalId'
	    }, shared)).state(name + '.page.modalParams', _extends({
	      url: '/~:modal/:modalId/:restParams'
	    }, shared));
	  }
	}
	
	function cnFlexFormRoutes($stateProvider) {
	  'ngInject';
	
	  $stateProvider.state('flex-form-sandbox', {
	    url: '/flex-form/sandbox',
	    controller: 'FlexFormSandbox',
	    controllerAs: 'vm',
	    templateUrl: 'app/components/cn-flex-form/sandbox.html'
	  });
	}
	
	exports.cnFlexFormRoutes = cnFlexFormRoutes;
	exports.cnFlexFormRoutesProvider = cnFlexFormRoutesProvider;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	schemaFormConfig.$inject = ["cnFlexFormServiceProvider"];
	addTemplates.$inject = ["$templateCache"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function schemaFormConfig(cnFlexFormServiceProvider) {
	  'ngInject';
	
	  tv4.addFormat({
	    'url': function url(data) {
	      return _.isString(data) && !/^(https?:\/\/.{2}|$)/.test(data) && 'invalid url';
	    }
	  });
	
	  var extensions = ['cn-fieldset', 'cn-toggle', 'cn-datetimepicker', 'cn-autocomplete', 'cn-autocomplete-detailed', 'cn-number', 'cn-currency', 'cn-url', 'cn-radios', 'cn-radiobuttons', 'cn-percentage', 'cn-display', 'cn-mediaupload', 'cn-csvupload', 'cn-reusable', 'cn-table', 'cn-creativeimage', 'cn-schedule', 'cn-facebookvideo'];
	
	  _.each(extensions, function (extension) {
	    cnFlexFormServiceProvider.registerField({
	      type: extension,
	      templateUrl: 'app/components/cn-flex-form/forms/' + extension + '.html'
	    });
	  });
	}
	
	function addTemplates($templateCache) {
	  'ngInject';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-toggle.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="clearfix">\n          <cn-toggle-switch\n            name="{{form.key.join(\'.\')}}"\n            class="pull-left"\n            ng-show="form.key"\n            ng-model-options="form.ngModelOptions"\n            ng-model="$$value$$"\n            sf-changed="form"\n            schema-validate="form"\n            on-value="form.onValue"\n            off-value="form.offValue"\n            ng-required="form.required"\n            read-only="form.readonly"\n            undefined-class="form.undefinedClass"/>\n          <span ng-show="form.onText && form.offText">\n            {{$$value$$ === form.onValue ? form.onText : form.offText}}\n          </span>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-datetimepicker.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}"\n               ng-show="showTitle()">{{form.title}}</label>\n        <cn-datetimepicker\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          is-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          min-date="form.minDate"\n          max-date="form.maxDate"\n          max-view="{{form.maxView}}"\n          default-time="form.defaultTime"\n          cn-date-required="form.required"\n          placeholder="{{form.placeholder}}"\n          model-type="{{form.schema.type}}"\n          model-formatter="form.modelFormatter"\n          model-parser="form.modelParser"\n          view-formatter="form.viewFormatter"\n          view-parser="form.viewParser"\n          format-string={{form.dateFormat}}\n          icon-class={{form.iconClass}}>\n        </cn-datetimepicker>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  var sharedAutocompleteTpl = '\n        <tags-input\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          ng-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          display-property="{{form.displayProperty || \'name\'}}"\n          value-property="{{form.valueProperty}}"\n          placeholder="{{form.placeholder || \' \'}}"\n          clear-on-blur="true"\n          add-on-comma="false"\n          add-from-autocomplete-only="{{!form.allowNew}}"\n          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n          on-init="form.onInit($tag, form, $event, $setter)"\n          model-type="{{form.getSchemaType()}}"\n          array-value-type="{{form.schema.items.type}}"\n          hide-tags="{{form.detailedList}}"\n          tags-style="{{form.selectionStyle}}"\n          required="{{form.required}}"\n          min-length="{{form.minLength}}"\n          allowed-tags-pattern=".*"\n          dropdown-icon="true"\n          item-formatter="form.itemFormatter"\n          min-tags="{{form.minItems || form.schema.minItems}}"\n          max-tags="{{form.maxItems || form.schema.maxItems || (form.getSchemaType() !== \'array\' ? 1 : 0)}}"\n          allow-bulk="{{form.bulkAdd}}"\n          bulk-delimiter="{{form.bulkDelimiter}}"\n          bulk-placeholder="{{form.bulkPlaceholder}}"\n          bulk-single-request="{{form.bulkSingleRequest}}"\n          sort-filtered-results="{{(form.titleMapResolve || form.titleMap) && !form.titleMapQuery}}"\n          show-clear-all="{{form.showClearAll}}"\n          show-clear-cache="{{form.showClearCache}}"\n          show-button="true">\n          <auto-complete\n            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query, options)"\n            skip-filtering="{{form.skipFiltering}}"\n            single-query="{{form.singleQuery}}"\n            debounce-delay="{{form.debounceDelay}}"\n            min-length="{{form.minLookup}}">\n          </auto-complete>\n        </tags-input>';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <div sf-array="form">\n          <ol class="list-group cn-autocomplete-list"\n              ng-if="modelArray.length"\n              ng-model="modelArray">\n            <li class="list-group-item {{form.fieldHtmlClass}}"\n                ng-repeat="item in modelArray track by $index">\n              <button ng-hide="form.readonly || form.remove === null"\n                      ng-click="deleteFromArray($index)"\n                      type="button" class="close pull-right">\n                <span aria-hidden="true">&times;</span>\n              </button>\n              <sf-decorator form="copyWithIndex($index)"/>\n            </li>\n          </ol>\n        </div>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-number.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}}">\n          <input class="form-control"\n                 cn-number\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="text"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-model="$$value$$">\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-currency.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <label class="input-group-addon"\n                 ng-disabled="form.readonly"\n                 for="{{form.key.join(\'.\')}}">$</label>\n          <input class="form-control"\n                 cn-currency-format="{{form.currencyFormat}}"\n                 cn-currency-placeholder="{{form.placeholder}}"\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="text"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-model="$$value$$">\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-url.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <input class="form-control"\n               placeholder="https://"\n               cn-url-format\n               ng-show="form.key"\n               ng-model-options="form.ngModelOptions"\n               ng-disabled="form.readonly"\n               sf-changed="form"\n               schema-validate="form"\n               type="text"\n               id="{{form.key.join(\'.\')}}"\n               name="{{form.key.join(\'.\')}}"\n               ng-model="$$value$$">\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radios.html', '<div class="form-group {{form.htmlClass}}"\n            ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n         <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n         <div class="btn-group clearfix">\n           <label class="radio radio-block"\n                  ng-repeat="item in form.titleMap">\n             <input type="radio"\n                    sf-changed="form"\n                    ng-disabled="form.readonly"\n                    ng-model="$$value$$"\n                    ng-model-options="form.ngModelOptions"\n                    schema-validate="form"\n                    ff-validate="form"\n                    ng-value="item.value"\n                    name="{{form.key.join(\'.\')}}">\n             <span class="radio-block-icon" ng-if="item.iconClass || item.iconPath">\n               <i ng-if="item.iconClass" class="fa fa-{{item.iconClass}} fa-lg"></i>\n               <img ng-if="item.iconPath" class="custom" ng-src="{{item.iconPath}}"/>\n             </span>\n             <span ng-bind-html="item.name"></span>\n           </label>\n         </div>\n         <span class="help-block" sf-message="form.description"></span>\n       </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radiobuttons.html', '\n      <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="btn-group clearfix">\n          <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\n                 ng-repeat="item in form.titleMap">\n            <input type="radio"\n                   class="{{form.fieldHtmlClass}} hide"\n                   sf-changed="form"\n                   ng-disabled="form.readonly"\n                   ng-model="$$value$$"\n                   ng-model-options="form.ngModelOptions"\n                   schema-validate="form"\n                   ff-validate="form"\n                   ng-value="item.value"\n                   name="{{form.key.join(\'.\')}}">\n            <i class="fa fa-{{item.value}} fa-lg"></i>\n            <span ng-bind-html="item.name"></span>\n          </label>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <input class="form-control"\n                 cn-ignore-wheel\n                 cn-percentage-format\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="number"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key && form.key[0]}}"\n                 name="{{form.key && form.key[0]}}"\n                 ng-model="$$value$$">\n           <div class="input-group-addon"\n                  ng-disabled="form.readonly"\n                  for="{{form.key && form.key[0]}}">%</div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-display.html', '\n      <div class="form-group cn-display{{form.htmlClass}}">\n        <input ng-show="form.key"\n               class="form-control"\n               id="{{form.key.join(\'.\')}}"\n               name="{{form.key.join(\'.\')}}"\n               ng-disabled="true"\n               value="{{form.getDisplay(form.key, form.arrayIndex)}}">\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n      <fieldset\n        ng-disabled="form.readonly"\n        class="schema-form-fieldset {{form.htmlClass}}"\n        ng-class="{\'borderless\': form.pos === 0, \'notitle\': form.notitle || !form.title}">\n        <legend ng-hide="form.notitle"\n                ng-click="form.toggleCollapse(form)"\n                ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                ng-mouseenter="form.render = true">\n          <i ng-show="form.collapsible"\n             class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n          {{ form.title }}\n        </legend>\n        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n        <div uib-collapse="form.collapsed">\n          <div ng-if="form.render">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </div>\n        </div>\n      </fieldset>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <media-upload ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-file-type="form.fileType"\n                      cn-text-button="form.textButton"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      cn-image-previews="form.data.imagePreviews"\n                      cn-key="form.key && form.key[0]"\n                      cn-form="form"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </media-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-csvupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <csv-upload ng-model="$$value$$"\n                      cn-upload-path="form.uploadPath"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </csv-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-reusable.html', '\n      <div class="form-group cn-reusable {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <cn-select-or\n          ng-show="form.key"\n          select-from="form.library"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          sf-changed="form"\n          schema-validate="form"\n          ff-form="form"\n          directiveId="form.directiveId"\n          item-template="form.itemTemplate"\n          toggle-text="form.toggleText"\n          ng-disabled="form.readonly"\n          view="form.view">\n          <sf-decorator ng-repeat="item in form.items" form="item"/>\n        </cn-select-or>\n        <p ng-if="form.loadMore && form.view === \'list\'">\n          <a ng-click="form.loadMore()"\n             class="btn btn-default btn-block">Load More</a>\n        </p>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-table.html', '\n      <div class="form-group cn-ff-table {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <h6>{{form.title}}</h6>\n        <div class="row">\n          <div ng-repeat="col in form.columns" class="{{col.columnWidth}}">\n            <p class="column-header">{{col.columnHeader}}</p>\n          </div>\n        </div>\n        <div class="row" ng-repeat="row in form.items">\n          <div ng-repeat="col in row.items" class="{{col.columnWidth}}">\n            <sf-decorator form="col"></sf-decorator>\n          </div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-creativeimage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-creative-image ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      cn-ng-model-key="form.ngModelKey"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-creative-image>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-schedule.html', '\n      <div class="form-group {{ form.htmlClass }}"\n           ng-class="{ \'has-error\': hasError(), \'has-success\': hasSuccess() }">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{ form.key.join(\'.\') }}">\n          {{ form.title }}\n        </label>\n        <cn-schedule form="form"\n                     ng-model="$$value$$">\n        </cn-schedule>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>\n    ');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-facebookvideo.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-facebook-video ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      cn-video-key="form.videoKey"\n                      cn-thumbnail-key="form.thumbnailKey"\n                      cn-image-id-key="form.imageIdKey"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-facebook-video>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	}
	
	exports.schemaFormConfig = schemaFormConfig;
	exports.addTemplates = addTemplates;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	cnFlexFormServiceProvider.$inject = ["schemaFormDecoratorsProvider", "cnFlexFormTypesProvider"];
	CNFlexFormService.$inject = ["Api", "$parse", "cnFlexFormConfig", "cnFlexFormTypes", "sfPath", "$interpolate", "$timeout", "cnUtil", "$stateParams", "EVENTS"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Need these modules for test bundle
	var _ = typeof window !== 'undefined' && window._ || __webpack_require__(6);
	var ObjectPath = typeof window !== 'undefined' && window.ObjectPath || __webpack_require__(7);
	
	var fieldTypeHandlers = {
	  'fieldset': 'processFieldset',
	  'cn-radios': 'processRadios',
	  'cn-radiobuttons': 'processRadiobuttons',
	  'cn-autocomplete': 'processSelect',
	  'cn-datetimepicker': 'processDate',
	  'help': 'processHelp',
	  'cn-display': 'processDisplay',
	  'cn-number': 'processNumber',
	  'cn-currency': 'processCurrency',
	  'cn-percentage': 'processPercentage',
	  'cn-url': 'processUrl',
	  'cn-mediaupload': 'processMediaUpload',
	  'cn-creativeimage': 'processCreativeImage',
	  'cn-facebookvideo': 'processFacebookVideo',
	  'cn-csvupload': 'processCsvUpload',
	  'cn-reusable': 'processReusable',
	  'cn-toggle': 'processToggle',
	  'cn-table': 'processTable',
	  'component': 'processComponent',
	  'section': 'processSection',
	  'tabarray': 'processSection',
	  'array': 'processArray',
	  'cn-schedule': 'processSchedule'
	};
	
	// handlers that don't run on secondPass are ones that shouldn't ever change
	// and we want to avoid compounding their effects
	var fieldPropHandlers = [{
	  prop: 'default',
	  handler: function handler(field, service) {
	    return service.processDefault(field);
	  }
	}, {
	  prop: 'resolve',
	  handler: function handler(field, service, secondPass) {
	    return !secondPass && service.processResolve(field);
	  }
	}, {
	  prop: 'selectDisplay',
	  handler: function handler(field, service) {
	    return service.processSelectDisplay(field);
	  }
	}, {
	  prop: 'schema',
	  handler: function handler(field, service) {
	    return _.isUndefined(field.default) && !_.isUndefined(field.schema.default) && service.processDefault(field);
	  }
	}, {
	  prop: 'watch',
	  handler: function handler(field, service, secondPass) {
	    return !secondPass && field.watch && service.processFieldWatch(field);
	  }
	}, {
	  prop: 'type',
	  handler: function handler(field, service, secondPass) {
	    return service.processFieldType(field, secondPass);
	  }
	}, {
	  prop: 'conditionals',
	  handler: function handler(field, service) {
	    return service.processConditional(field);
	  }
	}, {
	  prop: 'updateSchema',
	  handler: function handler(field, service, secondPass) {
	    return !secondPass && service.processFieldUpdatedSchema(field);
	  }
	}];
	
	function cnFlexFormServiceProvider(schemaFormDecoratorsProvider, cnFlexFormTypesProvider) {
	  'ngInject';
	
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
	
	function CNFlexFormService(Api, $parse, cnFlexFormConfig, cnFlexFormTypes, sfPath, $interpolate, $timeout, cnUtil, $stateParams, EVENTS) {
	  'ngInject';
	
	  var services = [];
	  var prototype = {
	    compile: compile,
	    addArrayCopy: addArrayCopy,
	    addToDataCache: addToDataCache,
	    addToFormCache: addToFormCache,
	    addToScopeCache: addToScopeCache,
	    broadcastErrors: broadcastErrors,
	    buildError: buildError,
	    cleanup: cleanup,
	    deleteArrayCopiesFor: deleteArrayCopiesFor,
	    deregisterHandlers: deregisterHandlers,
	    deregisterArrayHandlers: deregisterArrayHandlers,
	    getArrayCopy: getArrayCopy,
	    getArrayCopies: getArrayCopies,
	    getArrayCopiesFor: getArrayCopiesFor,
	    getArrayScopes: getArrayScopes,
	    getDefault: getDefault,
	    getFromDataCache: getFromDataCache,
	    getFromFormCache: getFromFormCache,
	    getFromScopeCache: getFromScopeCache,
	    getFormsToProcess: getFormsToProcess,
	    getKey: getKey,
	    getSchema: getSchema,
	    getWatchables: getWatchables,
	    handleResolve: handleResolve,
	    incrementUpdates: incrementUpdates,
	    initArrayCopyWatch: initArrayCopyWatch,
	    initModelWatch: initModelWatch,
	    initSchemaParams: initSchemaParams,
	    isCompiled: isCompiled,
	    onModelWatch: onModelWatch,
	    parseAll: parseAll,
	    parseAny: parseAny,
	    parseCondition: parseCondition,
	    parseExpression: parseExpression,
	    processArray: processArray,
	    processCreativeImage: processCreativeImage,
	    processDefault: processDefault,
	    processDisplay: processDisplay,
	    processFacebookVideo: processFacebookVideo,
	    processField: processField,
	    processFieldset: processFieldset,
	    processFieldProps: processFieldProps,
	    processFieldType: processFieldType,
	    processFieldUpdatedSchema: processFieldUpdatedSchema,
	    processFieldWatch: processFieldWatch,
	    processComponent: processComponent,
	    processConditional: processConditional,
	    processCurrency: processCurrency,
	    processNumber: processNumber,
	    processPercentage: processPercentage,
	    processUrl: processUrl,
	    processDate: processDate,
	    processHelp: processHelp,
	    processRadios: processRadios,
	    processRadiobuttons: processRadiobuttons,
	    processReusable: processReusable,
	    processSchema: processSchema,
	    processSelectDisplay: processSelectDisplay,
	    processResolve: processResolve,
	    processSection: processSection,
	    processSelect: processSelect,
	    processSchedule: processSchedule,
	    processTable: processTable,
	    processTemplate: processTemplate,
	    processToggle: processToggle,
	    processUpdatedSchema: processUpdatedSchema,
	    processMediaUpload: processMediaUpload,
	    processCsvUpload: processCsvUpload,
	    registerArrayHandlers: registerArrayHandlers,
	    registerHandler: registerHandler,
	    registerResolve: registerResolve,
	    replaceArrayIndex: replaceArrayIndex,
	    reprocessField: reprocessField,
	    resetUpdates: resetUpdates,
	    resolveNestedExpressions: resolveNestedExpressions,
	    setArrayIndex: setArrayIndex,
	    setupConfig: setupConfig,
	    setupSchemaRefresh: setupSchemaRefresh,
	    silenceListeners: silenceListeners,
	    skipDefaults: skipDefaults,
	    parseStringKey: parseStringKey
	  };
	
	  function getService(fn) {
	    return _.find(services, fn);
	  }
	
	  function destroyService(fn) {
	    var service = getService(fn);
	    if (service) {
	      service.cleanup();
	      _.empty(service);
	      _.remove(services, function (s) {
	        return s === service;
	      });
	    }
	  }
	
	  function CNFlexFormConstructor() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (args.length > 1) {
	      var schema = args[0],
	          model = args[1],
	          config = args[2];
	    } else {
	      var _args$ = args[0],
	          schema = _args$.schema,
	          model = _args$.model,
	          config = _args$.config;
	    }
	
	    var curService = getService(function (service) {
	      return service.model === model;
	    });
	    if (curService) {
	      if (schema) {
	        curService.compile(schema, model, config);
	      }
	      return curService;
	    }
	
	    var newService = new CNFlexForm(schema, model, config);
	    services.push(newService);
	    return newService;
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
	    this.scopeCache = {};
	    this.listeners = {};
	    this.resolveRegister = {};
	    this.model = model;
	    this.updates = 0;
	    this.skipDefault = {};
	
	    var overrides = config.getParams ? config.getParams() : {};
	    this.params = cnFlexFormConfig.getStateParams(overrides);
	
	    this._ = _;
	
	    this.compile(schema, model, config);
	  }
	
	  _.extend(CNFlexForm.prototype, prototype);
	  _.extend(CNFlexFormConstructor, prototype, { getService: getService, destroyService: destroyService });
	
	  return CNFlexFormConstructor;
	
	  //////////////
	
	  function compile(schema, model, config) {
	    var service = this;
	
	    if (config && config.getScope) {
	      service.scope = config.getScope();
	    }
	    service.schema = schema;
	    /** TODO: API-3136-rollback
	    if (!service.schema.dateConverted && Object.keys(service.schema.schema.properties || {}).length) {
	      _.each(service.schema.schema.properties, function (field) {
	        if (field.format === "datetime-local") {
	          const curVal = service.parseExpression(field.key, service.model).get();
	          try {
	            model[field.key] = cnUtil.convertToLocalTime(curVal);
	          } catch (error) {
	            service.scope.$emit(EVENTS.notify, error);
	          }
	        }
	      });
	      service.schema.dateConverted = true;
	    }
	    */
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
	    } else {
	      var initUpdates = _.debounce(function () {
	        if (schema.updates) {
	          _.each(schema.updates, function (val, key) {
	            if (key.includes('generic_creative') && key !== 'generic_creative_keys') {
	              service.schema.data[key] = val;
	            }
	            if (key.includes('dropSources') && key.endsWith('readonly')) {
	              var realKey = key.replace(".readonly", "");
	              _.each(service.getFormsToProcess(realKey), function (copy) {
	                if (copy) {
	                  copy.readonly = val;
	                  service.processField(copy);
	                }
	              });
	            }
	          });
	          if (schema.updates['generic_creative_keys']) {
	            var keys = schema.updates['generic_creative_keys'];
	            if (keys.length) {
	              _.each(keys, function (key) {
	                _.each(service.getFormsToProcess(key), function (copy) {
	                  return copy && service.processField(copy);
	                });
	              });
	            }
	          }
	        }
	      }, 200);
	      initUpdates();
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
	    service.getParamOverrides = config.getParams || _.noop;
	  }
	
	  function processSchema(field) {
	    var service = this;
	    var schema = field.schema;
	
	
	    field.getSchemaType = function () {
	      return _.isArray(schema.type) ? _.first(schema.type) : schema.type;
	    };
	    if (!field.type) field.type = field.getSchemaType && field.getSchemaType();
	  }
	
	  function processDefault(field) {
	    var service = this;
	    var schema = field.schema;
	
	    var curDefault = field.default || schema.default;
	    var key = service.getKey(field.key);
	
	    if (service.skipDefault[key]) {
	      delete service.skipDefault[key];
	      return;
	    }
	
	    if (field.condition) {
	      var condition = replaceArrayIndex(field.condition, field.arrayIndex || key);
	      if (!service.parseCondition(condition)) return;
	    }
	
	    // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
	    //if(service.updates || field.default) {
	    if (!_.isUndefined(curDefault)) {
	      if (key.includes && key.includes('[]')) return;
	      var model = service.parseExpression(field.key, service.model);
	      var modelValue = model.get();
	      // if there's an existing default and it's the same as the current value
	      // update the current value to the new default
	      if (_.isUndefined(modelValue) || (_.has(service.defaults, key) ? angular.equals(modelValue, service.defaults[key]) : _.isTrulyEmpty(modelValue)) && !angular.equals(modelValue, curDefault)) {
	        model.set(angular.copy(curDefault));
	      }
	    }
	    service.defaults[key] = angular.copy(curDefault);
	
	    if (schema && schema.format === 'url' && !field.validationMessage) {
	      if (!field.type) field.type = 'cn-url';
	      field.validationMessage = 'Must be a valid url (https://...)';
	    }
	  }
	
	  function processFieldset(fieldset) {
	    var service = this;
	
	    fieldset.type = 'cn-fieldset';
	    fieldset.items.forEach(service.processField.bind(service));
	
	    if (_.has(fieldset, 'pos') && fieldset.pos === 0) {
	      fieldset.htmlClass = (fieldset.htmlClass || '') + ' borderless';
	    }
	    if (fieldset.collapsible) {
	      fieldset.toggleCollapse = function (fieldset) {
	        if (fieldset.collapsible) {
	          fieldset.collapsed = !fieldset.collapsed;
	        }
	      };
	
	      fieldset.render = !fieldset.collapsed;
	    } else {
	      fieldset.render = true;
	    }
	  }
	
	  function processFieldType(field, secondPass) {
	    var service = this;
	    var fieldType = cnFlexFormTypes.getFieldType(field);
	    var handler = fieldTypeHandlers[fieldType];
	    if (_.isString(handler)) {
	      service[handler](field, secondPass);
	    } else if (_.isFunction(handler)) {
	      handler.call(service, field, secondPass);
	    }
	  }
	
	  function getOgKeys(field) {
	    return _.reject(_.keys(field), function (key) {
	      return (/^key$|^htmlClass$|^_/.test(key)
	      );
	    });
	  }
	
	  function processField(field, pos) {
	    var service = this;
	
	    if ((field.key || '').includes('objective_goal') && !(field.key || '').includes('dropSources')) {
	      console.log("field", field, pos);
	      service.processFieldWatch(field);
	      (field.watch || []).forEach(function (watch) {
	        var exp = (watch.resolution || '').replace(/model\./g, '');
	        var result = (exp || '').split('=')[0].trim();
	        var right = (exp || '').split('=')[1].trim();
	        var toDevide = service.parseExpression(right.split('/')[0].trim(), service.model).get() || 0;
	        var devideBy = service.parseExpression(right.split('/')[1].trim(), service.model).get() || 0;
	        var resultIn = toDevide && devideBy ? toDevide / devideBy : 0;
	        service.parseStringKey(service.model, result, resultIn);
	      });
	    }
	
	    if (angular.isDefined(pos)) {
	      field.pos = pos;
	    }
	
	    if (!field._ogKeys) {
	      field._ogKeys = getOgKeys(field);
	    }
	
	    var key = service.getKey(field.key);
	
	    if (key) {
	      service.addToFormCache(field, key);
	      var schema = service.getSchema(key);
	
	      if (schema) {
	        field.schema = schema;
	        if (schema.description) field.description = schema.description;
	        if (schema.type === 'array' && !('showClearAll' in field)) field.showClearAll = true;
	      }
	
	      service.processSchema(field);
	    }
	
	    service.processFieldProps(field);
	
	    if (key) {
	      (function (key) {
	        if (_.find(service.errors, { key: key })) {
	          service.errors = _.reject(service.errors, { key: key });
	          service.scope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
	          service.scope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
	        }
	      })(getDotKey(key));
	
	      if (field.error) {
	        service.errors.push(service.buildError(field));
	        if (_.isEmpty(field.ngModelOptions)) {
	          field.ngModelOptions = {
	            allowInvalid: true
	          };
	        } else {
	          field.ngModelOptions.allowInvalid = true;
	        }
	      }
	    }
	
	    // handle if generic_creative presents in diff.update
	    if (!_.isUndefined(field.arrayIndex)) {
	      _.each(service.schema.data, function (val, prop) {
	        if (prop.includes(key)) {
	          var diffArr = _.difference(prop.split('.'), key.split('.'));
	          if (diffArr.length) {
	            if (field.items) {
	              _.each(field.items, function (item) {
	                var _field = diffArr.filter(function (d) {
	                  return d != item.previewPath;
	                }).join('.');
	                service.parseStringKey(field, _field, val);
	              });
	            } else {
	              service.parseStringKey(field, diffArr.join('.'), val);
	            }
	            // delete service.schema.data[prop];
	          }
	        }
	      });
	      service.scope.$broadcast('cnFlexFormReprocessField', key);
	    }
	  }
	
	  function processFieldProps(field, secondPass) {
	    var service = this;
	    fieldPropHandlers.forEach(function (_ref) {
	      var prop = _ref.prop,
	          handler = _ref.handler;
	      return _.has(field, prop) && handler(field, service, secondPass);
	    });
	  }
	
	  function getKey(key) {
	    if (_.isArray(key)) {
	      key = _.reduce(key, function (total, next) {
	        return (/^(-?\d*)$/.test(next) ? total + '[' + next + ']' : total + '.' + next
	        );
	      });
	    }
	    return key;
	  }
	
	  function getSchema(key, depth) {
	    var service = this;
	    if (!key) return;
	
	    key = ObjectPath.parse(service.getKey(key));
	    depth = depth || service.schema.schema.properties;
	    var first = void 0,
	        next = void 0;
	
	    while (key.length > 1) {
	      next = key[1];
	      if (/^-?\d*$/.test(next)) {
	        if (key.length === 2) {
	          depth = depth[key.shift()];
	        } else {
	          depth = depth[key.shift()].items.properties;
	          key.shift();
	        }
	      } else {
	        depth = depth[key.shift()].properties;
	      }
	    }
	
	    // if array item
	    first = key[0] || 'items';
	
	    return depth[first];
	  }
	
	  function getDefault(field) {
	    var service = this;
	    field = field.key ? field : service.getFromFormCache(field);
	    return field && (angular.isDefined(field.default) ? field.default : field.schema && field.schema.default);
	  }
	
	  function getWatchables(exp) {
	    var watchables = [];
	    var nested = matchNestedExpression(exp);
	    var replaceStr = '';
	
	    while (nested) {
	      if (/^-?\d+$/.test(nested[1]) || /^("|').*("|')$/.test(nested[1])) {
	        replaceStr = nested[0];
	        exp = exp.replace(nested[0], 'ff_replace_ff');
	      } else {
	        watchables.push(nested[1].replace(/ff_replace_ff/g, replaceStr));
	        replaceStr = '';
	        exp = exp.replace(nested[0], '');
	      }
	      nested = matchNestedExpression(exp);
	    }
	
	    return [].concat(watchables, [exp.replace(/ff_replace_ff/g, replaceStr)]);
	  }
	
	  function processResolve(field) {
	    var service = this;
	    var key = service.getKey(field.key);
	
	    _.each(field.resolve, function (dataProp, fieldProp) {
	      dataProp = replaceArrayIndex(dataProp, key || field.arrayIndex);
	      if (dataProp.includes('[arrayIndex]')) return;
	
	      service.handleResolve(field, fieldProp, dataProp, true);
	
	      getWatchables(dataProp).forEach(function (watchable) {
	        var _ref2 = watchable.match(/(schema\.data\.|model\.)(\S+)/) || [],
	            _ref3 = _slicedToArray(_ref2, 3),
	            base = _ref3[1],
	            exp = _ref3[2];
	
	        if (base) {
	          if (base === 'schema.data.') {
	            service.registerResolve(field, fieldProp, exp, dataProp);
	          } else if (base === 'model.') {
	            service.registerHandler(exp, function () {
	              service.handleResolve(field, fieldProp, dataProp);
	            });
	          }
	        }
	      });
	    });
	
	    return field;
	  }
	
	  function parseAny(exp, base) {
	    var service = this;
	    var result = void 0;
	    var eithers = exp.split(' || ');
	    var match = _.find(eithers, function (x) {
	      var v = service.parseExpression(x, base).get();
	      if (!_.isUndefined(v)) {
	        result = v;
	        return true;
	      }
	    });
	    return result;
	  }
	
	  function parseAll(exp, base) {
	    var service = this;
	    var all = exp.split(' && ');
	    var match = _.reduce(all, function (acc, x) {
	      var v = service.parseExpression(x, base).get();
	      if (!_.isUndefined(v)) {
	        acc.push(v);
	      }
	      return acc;
	    }, []);
	    return all.length === match.length ? _.last(match) : undefined;
	  }
	
	  function handleResolve(field, fieldProp, exp, skipPropHandlers) {
	    var service = this;
	    var data = exp.includes(' || ') ? service.parseAny(exp) : exp.includes(' && ') ? service.parseAll(exp) : service.parseExpression(exp).get();
	
	    if (data && data.cursor) {
	      field.loadMore = function () {
	        var dataProp = exp.match(/schema\.data\.(.+)/)[1];
	        service.refreshSchema('data:' + dataProp + ':' + data.cursor);
	      };
	    } else {
	      delete field.loadMore;
	    }
	
	    var val = data && data.data ? data.data : data;
	    var val1 = fieldProp === 'condition' ? val + '' : val;
	    service.parseExpression(fieldProp, field).set(val1);
	
	    if (!skipPropHandlers) {
	      fieldPropHandlers.forEach(function (_ref4) {
	        var prop = _ref4.prop,
	            handler = _ref4.handler;
	        return prop === fieldProp && handler(field, service);
	      });
	    }
	  }
	
	  function registerResolve(field, fieldProp, dataProp, exp) {
	    var service = this;
	
	    var fieldKey = service.getKey(field.key);
	    service.resolveRegister[dataProp] = service.resolveRegister[dataProp] || {};
	
	    var register = service.resolveRegister[dataProp];
	    register[fieldKey] = register[fieldKey] || [];
	    register[fieldKey].push({ field: field, prop: fieldProp, exp: exp });
	  }
	
	  function processConditional(field) {
	    var service = this;
	
	    _.each(field.conditionals, function (condition, key) {
	      var handler = function handler(val, prev) {
	        field[key] = service.parseCondition(condition);
	        var scope = service.getFromScopeCache(service.getKey(field.key));
	        if (key === 'required' && scope) {
	          service.scope.$broadcast('schemaFormValidate');
	        }
	      };
	      field.conditionals[key].match(/model\.([^\s]+)/g).map(function (path) {
	        return path.match(/model\.([^\s]+)/)[1];
	      }).forEach(function (key) {
	        service.registerHandler(key, handler);
	      });
	      handler();
	    });
	  }
	
	  function processFieldWatch(field) {
	    var service = this;
	    if (!field.watch) return;
	
	    var schema = field.schema;
	    field.watch = _.isArray(field.watch) ? field.watch : [field.watch];
	
	    _.each(field.watch, function (watch) {
	      if (watch.resolution) {
	        var condition = void 0;
	        if (_.isString(field.condition)) {
	          // if the condition isn't already wrapped in parens, wrap it
	          condition = /^\(.*\)$/.test(field.condition) ? field.condition : '(' + field.condition + ')';
	        }
	        if (_.isString(watch.condition)) {
	          condition = condition ? condition + ' && ' + watch.condition : watch.condition;
	        }
	        var resolution = watch.resolution;
	        var handler = void 0;
	
	        if (_.isFunction(resolution)) {
	          handler = function handler(cur, prev) {
	            if (!condition || service.parseCondition(condition)) {
	              resolution(cur, prev);
	            }
	          };
	        } else {
	          var adjustment = {};
	
	          adjustment.date = resolution.match(/\+ ?(\d+) (days|hours)/);
	
	          if (adjustment.date) {
	            adjustment.date = {
	              val: adjustment.date[1],
	              units: adjustment.date[2]
	            };
	            resolution = resolution.replace(adjustment.date.val, '').trim();
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
	            var curCondition = condition && replaceArrayIndex(condition, key);
	            if (_.isString(curCondition) && curCondition.includes('[arrayIndex]')) {
	              return console.error('arrayIndex could not be repalced from expression \'' + curCondition + '\'');
	            }
	            var updatePath = replaceArrayIndex(resolution[1], key);
	            var fromPath = replaceArrayIndex(resolution[2], key);
	
	            var update = service.parseExpression(updatePath);
	
	            // avoid loop where two watches keep triggering each other
	            if (trigger === update.path().key) return;
	            trigger = update.path().key;
	
	            var from = service.parseExpression(fromPath);
	
	            if (!condition || service.parseCondition(curCondition)) {
	              if (adjustment.date) {
	                update.set(moment(from.get()).add(adjustment.date.val, adjustment.date.units).toDate());
	              } else if (adjustment.math) {
	                //var result = _[adjustment.operator](from.get(), adjustment.adjuster.get());
	                //let result = eval(from.get() + adjustment.math[1] + adjustment.adjuster.get());
	                adjustment.adjuster = service.parseExpression(replaceArrayIndex(adjustment.math[2], key));
	                var operand1 = from.get();
	                var operand2 = adjustment.adjuster.get();
	                var operator = adjustment.math[1];
	                var result = $parse(operand1 + operator + operand2)();
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
	
	  function parseCondition(condition) {
	    var service = this;
	    if (condition.startsWith("_")) {
	      var exp = /^_\.(.*?)\((.*?),[\s(]*(.*?)\)?\s*=>[{\s]*(?:return)?(.*?)\}?\)$/;
	
	      var _condition$match = condition.match(exp),
	          _condition$match2 = _slicedToArray(_condition$match, 5),
	          fn = _condition$match2[1],
	          list = _condition$match2[2],
	          predicateParams = _condition$match2[3],
	          predicateBody = _condition$match2[4];
	
	      return _[fn]($parse(list)(service), generatePredicate(predicateParams, predicateBody));
	    } else {
	      return $parse(condition)(service);
	    }
	  }
	
	  function generatePredicate(params, body) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return $parse(body)(params.replace(/\s/g, '').split(',').reduce(function (acc, cur, i) {
	        acc[cur] = args[i];return acc;
	      }, {}));
	    };
	  }
	
	  function processFieldUpdatedSchema(field) {
	    var service = this;
	    var key = service.getKey(field.key);
	    if (!service.updates && field.updateSchema && !service.schema.params[key]) {
	      // by this point defaults should be processed so we can get value directly from model
	      var curVal = service.parseExpression(key, service.model).get();
	      if (!_.isUndefined(curVal)) {
	        service.schema.params[key] = curVal;
	      }
	    }
	    service.registerHandler(field, null, field.updateSchema);
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
	    var arrMatch = key.match(/(.*)\[]\.?(.*)/);
	
	    if (arrMatch) {
	      service.registerArrayHandlers(arrMatch[1], arrMatch[2], handler, updateSchema, runHandler);
	      return;
	    }
	
	    var cur = service.parseExpression(key, service.model).get();
	    var defaultValue = _.get(service.getSchema(key), 'default');
	
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
	
	      if (!prev && prev !== 0 && (cur | 0) < 1) return;
	      var i, l, key;
	
	      if (prev > cur || reorder) {
	        var lastKey = fieldKey ? arrKey + '[' + (prev - 1) + '].' + fieldKey : arrKey + '[' + (prev - 1) + ']';
	
	        // only deregister handlers once each time an element is removed
	        if (service.listeners[lastKey]) {
	          for (i = 0, l = prev; i < l; i++) {
	            key = fieldKey ? arrKey + '[' + i + '].' + fieldKey : arrKey + '[' + i + ']';
	
	            service.deregisterHandlers(key);
	          }
	        }
	        for (i = 0, l = cur; i < l; i++) {
	          key = fieldKey ? arrKey + '[' + i + '].' + fieldKey : arrKey + '[' + i + ']';
	
	          service.registerHandler(key, handler, updateSchema);
	          //no need to call if just reregisering handlers
	          //if(runHandler) handler(null, null, key);
	        }
	      } else if (cur > (prev || 0)) {
	        for (i = prev | 0, l = cur; i < l; i++) {
	          key = fieldKey ? arrKey + '[' + i + '].' + fieldKey : arrKey + '[' + i + ']';
	
	          service.registerHandler(key, handler, updateSchema, runHandler);
	          //if(runHandler) handler(null, null, key);
	        }
	      }
	    };
	
	    var arrVal = service.parseExpression(arrKey, service.model).get();
	    _.each(arrVal, function (field, i) {
	      var key = fieldKey ? arrKey + '[' + i + '].' + fieldKey : arrKey + '[' + i + ']';
	
	      service.registerHandler(key, handler, updateSchema);
	      if (runHandler) handler(null, null, key);
	    });
	
	    var listenerKey = arrKey + '.length';
	    if (service.arrayListeners[listenerKey]) {
	      service.arrayListeners[listenerKey].handlers.push(onArray);
	    } else {
	      service.arrayListeners[listenerKey] = {
	        handlers: [onArray],
	        prev: arrVal ? arrVal.length : 0
	      };
	    }
	  }
	
	  function deregisterHandlers(key) {
	    var service = this;
	
	    key = service.getKey(key);
	
	    var arrMatch = key.match(/([^[\]]*)\[]\.?(.*)/);
	
	    if (arrMatch) {
	      service.deregisterArrayHandlers(arrMatch[1], arrMatch[2]);
	      return;
	    }
	
	    if (service.listeners[key]) service.listeners[key].handlers = [];
	    //if(service.listeners[key]) delete service.listeners[key];
	  }
	
	  function deregisterArrayHandlers(arrKey, fieldKey) {
	    var service = this;
	
	    service.parseExpression(arrKey, service.model).get().forEach(function (item, i) {
	      fieldKey ? service.deregisterHandlers(arrKey + '[' + i + '].' + fieldKey) : service.deregisterHandlers(arrKey + '[' + i + ']');
	    });
	  }
	
	  function initModelWatch() {
	    var service = this;
	    if (service.watching) return;
	    if (service.modelWatch) service.modelWatch();
	
	    service.modelWatch = service.scope.$watch(function () {
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
	
	      if (service.firstUpdate) {
	        service.schema.params = angular.copy(service.params);
	      }
	
	      service.firstUpdate = false;
	      cnUtil.cleanModel(service.model);
	
	      service.prevParams = angular.copy(service.params);
	
	      _.each(service.arrayListeners, function (listener, key) {
	        var val = service.parseExpression(key, service.model).get();
	        if (!angular.equals(val, listener.prev)) {
	          listener.handlers.forEach(function (handler) {
	            return handler(val, listener.prev);
	          });
	          listener.prev = angular.copy(val);
	        }
	      });
	
	      _.each(service.listeners, function (listener, key) {
	        if (listener) {
	          var val = service.parseExpression(key, service.model).get();
	          var isInitArray = angular.equals(val, []) && !listener.prev;
	          if (!angular.equals(val, listener.prev) && !isInitArray) {
	            listener.handlers.forEach(function (handler) {
	              handler(val, listener.prev, key, listener.trigger);
	            });
	            listener.trigger = null;
	            listener.prev = angular.copy(val);
	          }
	          if (listener.updateSchema && !angular.isUndefined(val) && !isInitArray && val !== null /* &&
	                                                                                                 !angular.equals(val, service.getDefault(key))*/) {
	              // if val is an array that has on object, need deep copy 
	              service.params[key] = angular.copy(val);
	            } else {
	            delete service.params[key];
	          }
	        }
	      });
	
	      if (!angular.equals(service.params, service.prevParams)) {
	        if (service.model.id && !service.updates && _.isEmpty(service.prevParams)) {
	          service.incrementUpdates();
	        } else {
	          if (_.isFunction(service.refreshSchema)) {
	            service.refreshSchema();
	          }
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
	          service.params[key] = angular.copy(val);
	        }
	      }
	    });
	    if (service.schema.updates) {
	      service.schema.params = angular.copy(service.params);
	    }
	  }
	
	  function stripIndexes(key) {
	    return key.replace(/\[\d+]/g, '[]');
	  }
	
	  function initArrayCopyWatch() {
	    var service = this;
	
	    service.events.push(service.scope.$on('schemaFormPropagateFormController', function (event, scope) {
	      var form = scope.form;
	
	      if (!form.key) {
	        form.cacheKey = form.type + '-' + _.uniqueId();
	      }
	      var key = form.cacheKey || service.getKey(form.key);
	
	      if (_.isNumber(scope.arrayIndex)) {
	        var genericKey = stripIndexes(key);
	        var index = scope.arrayIndex;
	        form.arrayIndex = index;
	
	        if (!service.getArrayCopy(genericKey, index)) {
	          service.processFieldProps(form, true);
	        }
	
	        if (!form.condition) form.condition = 'true';
	        // else if (form.condition.includes("arrayIndex")) {
	        //   form.condition = service.replaceArrayIndex(form.condition, key);
	        // }
	
	        service.addArrayCopy(scope, genericKey, index);
	        scope.$emit('flexFormArrayCopyAdded', genericKey);
	      } else {
	        service.addToScopeCache(scope, key);
	      }
	    }));
	
	    service.events.push(service.scope.$on('schemaFormDeleteScope', function (event, scope, index) {
	      var key = service.getKey(scope.form.key);
	      var listener = service.listeners[key];
	      if (listener) listener.handlers = [];
	
	      service.deleteArrayCopiesFor(key, index);
	
	      if (scope.form.link) {
	        var list = service.parseExpression(scope.form.link, service.model).get();
	        list.splice(index, 1);
	        service.deleteArrayCopiesFor(scope.form.link, index);
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
	
	  function getArrayCopy(key, index) {
	    var service = this;
	    var copies = service.arrayCopies[key];
	    return copies && copies[index];
	  }
	
	  function getArrayCopies(key) {
	    var service = this;
	    return _.pluck(service.getArrayScopes(key), 'form');
	  }
	
	  function getArrayCopiesFor(keyStart) {
	    var service = this;
	    keyStart += '[]';
	
	    return _.filter(service.arrayCopies, function (copy, key) {
	      return key.includes(keyStart);
	    });
	  }
	
	  function deleteArrayCopiesFor(key, index) {
	    var service = this;
	    var copies = service.getArrayCopiesFor(key);
	    _.each(copies, function (list) {
	      return list && list.splice(index, 1);
	    });
	  }
	
	  function getArrayScopes(key) {
	    var service = this;
	    return service.arrayCopies[key];
	  }
	
	  function addToScopeCache(scope, key) {
	    var service = this;
	    if (service.scopeCache[key]) {
	      console.warn('caching duplicate scope for', key);
	    }
	    return service.scopeCache[key] = scope;
	  }
	
	  function getFromScopeCache(key) {
	    var service = this;
	    return service.scopeCache[key];
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
	
	  function matchIntStrIndex(exp) {
	    return exp.match(/\[(-?\d+|".*"|'.*')]/);
	  }
	
	  function matchNestedExpression(exp) {
	    var _ref5 = matchIntStrIndex(exp) || [],
	        _ref6 = _slicedToArray(_ref5, 1),
	        toReplace = _ref6[0];
	
	    var replaced = [];
	
	    while (toReplace) {
	      replaced.push(toReplace);
	      exp = exp.replace(toReplace, 'ff_r' + (replaced.length - 1) + '_ff');
	
	      var _ref7 = matchIntStrIndex(exp) || [];
	
	      var _ref8 = _slicedToArray(_ref7, 1);
	
	      toReplace = _ref8[0];
	    }
	
	    var match = exp.match(/\[([^[\]]+)]([^[\]]*)/);
	
	    return match && replaced.length ? match.map(function (exp) {
	      var _ref9 = exp.match(/ff_r(\d+)_ff/) || [],
	          _ref10 = _slicedToArray(_ref9, 2),
	          toReplace = _ref10[0],
	          index = _ref10[1];
	
	      while (toReplace) {
	        exp = exp.replace(toReplace, replaced[index]);
	
	        var _ref11 = exp.match(/ff_r(\d+)_ff/) || [];
	
	        var _ref12 = _slicedToArray(_ref11, 2);
	
	        toReplace = _ref12[0];
	        index = _ref12[1];
	      }
	      return exp;
	    }) : match;
	  }
	
	  function resolveNestedExpressions(exp, depth) {
	    var service = this;
	
	    var _ref13 = matchNestedExpression(exp) || [],
	        _ref14 = _slicedToArray(_ref13, 2),
	        nested = _ref14[1];
	
	    while (nested) {
	      var parsed = service.parseExpression(nested, depth).get();
	      var keyVal = _.isUndefined(parsed) ? '' : _.isString(parsed) ? '"' + parsed + '"' : parsed;
	      exp = exp.replace('[' + nested + ']', '[' + keyVal + ']');
	
	      var _ref15 = matchNestedExpression(exp) || [];
	
	      var _ref16 = _slicedToArray(_ref15, 2);
	
	      nested = _ref16[1];
	    }
	
	    return exp;
	  }
	
	  function parseExpression(exp, depth) {
	    var service = this;
	
	    if (!_.isString(exp) && !_.isArray(exp)) {
	      return { get: function get() {
	          return exp;
	        } };
	    }
	
	    // if expression is specific value
	    if (/^(null|false|true|undefined|'[^\']*'|"[^\"]*"|-?[0-9.]+|\[]|\{})$/.test(exp)) {
	      return {
	        "get": function get() {
	          if (!exp) return exp;
	          var isStr = exp.match(/"([^\"]*)"/) || exp.match(/'([^\']*)'/);
	          if (isStr) return isStr[1];
	          switch (exp) {
	            case 'null':
	              return null;
	            case 'false':
	              return false;
	            case 'true':
	              return true;
	            case 'undefined':
	              return;
	            case '[]':
	              return [];
	            case '{}':
	              return {};
	            default:
	              return parseFloat(exp);
	          }
	        }
	      };
	    }
	
	    exp = service.getKey(exp);
	
	    var match = exp.match(/^(model\.)?(\S+)$/);
	
	    var modelValue = {
	      get: function get() {
	        var resolved = service.resolveNestedExpressions(exp, depth);
	        var path = ObjectPath.parse(resolved);
	        var start = depth || service;
	
	        while (start && path.length > 1) {
	          start = start[path.shift()];
	        }
	
	        return start && start[path[0]];
	      },
	      getAssignable: function getAssignable() {
	        var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            noConstruction = _ref17.noConstruction;
	
	        var resolved = service.resolveNestedExpressions(exp, depth);
	        var path = ObjectPath.parse(resolved);
	        var progress = [];
	        var start = depth || service;
	
	        while (start && path.length > 1) {
	          var key = path.shift();
	          progress.push(key);
	          if (!start[key]) {
	            if (noConstruction) {
	              return null;
	            }
	            if (/^\d?$/.test(path[0])) {
	              start[key] = [];
	            } else {
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
	      set: function set(val) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        var resolved = service.resolveNestedExpressions(exp, depth);
	        var path = ObjectPath.parse(resolved);
	        if (val === 'remove') {
	          var _ref18 = this.getAssignable({ noConstruction: true }) || {},
	              obj = _ref18.obj,
	              key = _ref18.key;
	
	          delete service.defaults[resolved.replace('model.', '')];
	          if (obj) {
	            delete obj[key];
	          }
	        } else {
	          var _getAssignable = this.getAssignable(),
	              _obj = _getAssignable.obj,
	              _key3 = _getAssignable.key;
	
	          _obj[_key3] = val;
	        }
	        if (options.silent) {
	          service.silenceListeners(resolved, depth);
	          service.skipDefaults(resolved);
	        }
	        return val;
	      },
	      path: function path() {
	        return {
	          exp: exp,
	          depth: depth,
	          key: match[2]
	        };
	      }
	    };
	
	    return modelValue;
	  }
	
	  function silenceListeners(keyStart, depth) {
	    var service = this;
	    _.each(service.listeners, function (listener, key) {
	      if (key.indexOf(keyStart) === 0) {
	        listener.prev = angular.copy(service.parseExpression(key, depth).get());
	      }
	    });
	  }
	
	  function skipDefaults(keyStart) {
	    var service = this;
	    var index = keyStart.match(/\[\d*\]/) ? getArrayIndex(keyStart) : null;
	    var ks = stripIndexes(keyStart);
	    var keys = _.filter(_.keys(service.formCache), function (k) {
	      return k.startsWith(ks);
	    });
	    var skipKeys = [];
	    _.each(keys, function (key) {
	      var indexedKey = service.setArrayIndex(key, index);
	      var model = service.parseExpression(indexedKey, service.model).get();
	      if (_.isArray(model)) {
	        var childKeys = _.filter(_.keys(service.formCache), function (k) {
	          return k.startsWith(key);
	        });
	
	        var _loop = function _loop(i) {
	          _.each(childKeys, function (k) {
	            skipKeys.push(k);
	            var indexedChildKey = service.setArrayIndex(k, [index, i]);
	            service.skipDefault[indexedChildKey] = true;
	          });
	        };
	
	        for (var i = 0; i < model.length; i++) {
	          _loop(i);
	        }
	      } else if (!skipKeys.includes(key)) {
	        service.skipDefault[indexedKey] = true;
	      }
	    });
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
	
	  function processSection(section, secondPass) {
	    var service = this;
	    // if we're here because a parent's scope was emitted,
	    // scope for this section will soon be emitted, so can skip
	    if (secondPass) return;
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
	
	  function processNumber(field) {
	    field.type = 'cn-number';
	  }
	
	  function processPercentage(field) {
	    field.type = 'cn-percentage';
	  }
	
	  function processUrl(field) {
	    field.type = 'cn-url';
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
	
	  function processFacebookVideo(field) {
	    var service = this;
	    field.type = 'cn-facebookvideo';
	    if (!field.resolve) {
	      field.resolve = {};
	      _.each(field.data, function (exp, prop) {
	        return field.resolve['data.' + prop] = exp;
	      });
	    }
	    service.processResolve(field);
	  }
	
	  function processCreativeImage(field) {
	    var service = this;
	    field.type = 'cn-creativeimage';
	    if (!field.resolve) {
	      field.resolve = {};
	      _.each(field.data, function (exp, prop) {
	        return field.resolve['data.' + prop] = exp;
	      });
	    }
	    service.processResolve(field);
	  }
	
	  function processMediaUpload(field) {
	    var service = this;
	    field.type = 'cn-mediaupload';
	    if (!field.resolve) {
	      field.resolve = {};
	      _.each(field.data, function (exp, prop) {
	        return field.resolve['data.' + prop] = exp;
	      });
	    }
	    service.processResolve(field);
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
	
	  function getSelectValProp(select) {
	    var isArray = select.getSchemaType() === 'array';
	    return select.valueProperty || (isArray ? select.schema.items.type : select.schema.type) !== 'object' && 'value';
	  }
	
	  function getAllowedSelectValue(select, val, titleMap) {
	    titleMap = titleMap || select.getTitleMap();
	    var valProp = getSelectValProp(select);
	    var omitHashKey = valProp ? _.identity : _.partialRight(_.omit, "$$hashKey");
	    var findFn = valProp ? _.compose(_.partial(_.find, titleMap), _.partial(_.set, {}, valProp), omitHashKey) : _.compose(_.partial(_.find, titleMap), omitHashKey);
	    if (select.getSchemaType() === 'array') {
	      if (!val || !_.isArray(val)) return;
	      return val.map(findFn).filter(function (x) {
	        return x !== undefined;
	      });
	    } else {
	      return findFn(val);
	    }
	  }
	
	  function processSchedule(field) {
	    field.startEmpty = true;
	    field.type = 'cn-schedule';
	  }
	
	  function processSelect(select) {
	    var service = this;
	    var schema = select.schema;
	
	    if (select.titleMapResolve || select.titleMap) {
	      select.getTitleMap = function () {
	        var prop = select.titleMapResolve + '[' + select.arrayIndex + ']';
	        return service.schema.data[prop] || service.schema.data[select.titleMapResolve] || select.titleMap;
	      };
	
	      select.onInit = function (val, form, event, setter) {
	        // make sure we use correct value
	        if (service.schema.updates) {
	          var temp = _.debounce(function () {
	            var modelValue = service.parseExpression(form.key, service.model);
	            if (event === 'tag-init') {
	              var newVal = getAllowedSelectValue(select, modelValue.get());
	              if (newVal !== undefined) {
	                setter(newVal);
	              }
	            }
	          }, 1000);
	          temp();
	        } else {
	          var modelValue = service.parseExpression(form.key, service.model);
	          if (event === 'tag-init') {
	            var newVal = getAllowedSelectValue(select, modelValue.get());
	            if (newVal !== undefined) setter(newVal);
	          }
	        }
	      };
	    }
	
	    if (select.titleMapQuery) {
	      var queryParams = select.titleMapQuery.params;
	      var paramsKeys = _.keys(queryParams);
	      select.showClearAll = true;
	      select.showClearCache = !!select.titleMapQuery.params.refreshData;
	      select.singleQuery = select.minLookup === 0;
	      select.titleQuery = function (q, _ref19) {
	        var refreshData = _ref19.refreshData;
	
	        var params = _(paramsKeys).reduce(function (acc, key) {
	          if (key === 'q') {
	            acc[queryParams[key]] = q;
	          } else if (key === 'refreshData') {
	            if (refreshData) acc[queryParams[key]] = true;
	          } else {
	            var exp = service.replaceArrayIndex(queryParams[key], select.arrayIndex);
	            var val = null,
	                variables = exp.split('||');
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	              for (var _iterator = variables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _exp = _step.value;
	
	                val = service.parseExpression(_exp.trim()).get();
	                if (val) {
	                  break;
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	
	            acc[key] = val;
	          }
	          return acc;
	        }, {});
	        return Api.get({
	          url: select.titleMapQuery.url,
	          params: params
	        });
	      };
	
	      if (!_.isNumber(select.minLookup)) select.minLookup = paramsKeys.length ? 3 : 0;
	      if (!_.has(select, 'skipFiltering')) select.skipFiltering = !!select.minLookup;
	
	      select.onInit = function (val, form, event, setter) {
	        if (event === 'tag-init') {
	          setter(val);
	        }
	      };
	    }
	
	    if (!_.isNumber(select.minLookup)) select.minLookup = 0;
	
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
	              if (!val.value[prop.key]) val.value[prop.key] = prop.default;
	            });
	          }
	        };
	      }
	    }
	
	    if (select.displayFormat) {
	      select.itemFormatter = service.processTemplate(select.displayFormat);
	    }
	
	    if (!select.type.includes('cn-autocomplete')) {
	      if (select.items) {
	        select.detailedList = true;
	
	        if (select.items[0].type !== 'component') {
	          if (select.items.length > 1) {
	            _.each(select.items, function (i) {
	              return i.destroyStrategy = "retain";
	            });
	            select.items = [{
	              type: "component",
	              items: select.items
	            }];
	          }
	
	          service.processFieldset(select);
	        }
	
	        select.type = 'cn-autocomplete-detailed';
	        select.destroyStrategy = 'retain';
	      } else {
	        if (!select.selectionStyle) {
	          select.selectionStyle = select.key === 'tags' ? 'tags' : select.getSchemaType() === 'array' && select.schema.maxItems !== 1 ? 'list' : 'select';
	        }
	        select.type = 'cn-autocomplete';
	      }
	
	      if (select.titleMapResolve) {
	        service.scope.$on('cnFlexFormDiff:data', function (e, data) {
	          if (data[select.titleMapResolve]) {
	            var modelValue = service.parseExpression(select.key, service.model);
	            var val = modelValue.get();
	            if (val !== undefined) {
	              var valid = getAllowedSelectValue(select, val, data[select.titleMapResolve]);
	              if (valid === undefined || _.isArray(valid) && _.isEmpty(valid)) modelValue.set();
	            }
	          }
	        });
	      }
	
	      service.registerHandler(select.key, function (val) {
	        var form = service.formCtrl && service.formCtrl[service.getKey(select.key)];
	        if (form && form.$setDirty) form.$setDirty();
	      }, select.updateSchema);
	    }
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
	        service.processField(row.items[i]);
	      }
	    });
	  }
	
	  function processSelectDisplay(selectDisplay) {
	    var service = this;
	    // Needed for batchform to check recursively
	    var selectField = null;
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      for (var _iterator2 = selectDisplay.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var item = _step2.value;
	
	        if (item.selectField) {
	          selectField = item;
	        } else if (item.items) {
	          selectField = _.find(item.items, 'selectField');
	        }
	        if (selectField) {
	          break;
	        }
	      }
	
	      // band-aid because this is being set as an object instead of array somwhere
	      // deep in the angular or angular-schema-form nether-regions
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	
	    var linkModel = service.parseExpression(selectDisplay.link, service.model);
	    if (!linkModel.get()) linkModel.set([]);
	
	    _.each(selectDisplay.items, function (item) {
	      if (item.selectField === true) return;
	
	      var key = _.isArray(item.key) ? item.key : ObjectPath.parse(item.key);
	      var featureKey = _.last(key);
	
	      item.showFeature = function (index) {
	        var features = service.parseExpression('model.' + selectDisplay.link + '[' + index + '].features').get();
	        var show = features && features.includes(featureKey);
	        return show;
	      };
	
	      var condition = 'form.showFeature(arrayIndex)';
	      item.condition = item.condition ? '(' + item.condition + ') && ' + condition : condition;
	    });
	    // handle legacy objects that don't have values set in the selectField
	    var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
	    var selectKey = service.getKey(selectField.key);
	    _.each(model, function (elem, i) {
	      var indexedSelectKey = service.setArrayIndex(selectKey, i);
	      var selectModel = service.parseExpression(indexedSelectKey, service.model);
	      if (!selectModel.get()) selectModel.set([]);
	    });
	  }
	
	  function setupSchemaRefresh(refresh) {
	    var service = this;
	    service.refreshSchema = _.debounce(function (updateSchema) {
	      var params = _extends({}, cnFlexFormConfig.getStateParams(service.getParamOverrides()), service.params);
	      var diff = _.omit(cnUtil.diff(service.schema.params, params, true), 'updates');
	      var keys = void 0;
	
	      if (!_.isEmpty(diff) || updateSchema) {
	        if (updateSchema) params.updateSchema = updateSchema;else {
	          keys = _.keys(diff);
	
	          if (keys.length > 1) {
	            diff = _.omit(diff, _.isNull);
	            keys = _.keys(diff);
	          }
	
	          params.updateSchema = _.first(keys);
	        }
	
	        if (!params.updateSchema) {
	          diff = cnUtil.diff(params, _.omit(service.schema.params, ['updateSchema', 'updates']));
	          keys = _.keys(diff);
	
	          params.updateSchema = _.first(keys);
	        }
	
	        refresh(params).then(function (schema) {
	          service.processUpdatedSchema(schema);
	        });
	      }
	    }, 100);
	
	    service.refreshData = _.debounce(function () {
	      refresh(_.extend(service.schema.params, { updateSchema: 'refreshData' })).then(function (schema) {
	        service.processUpdatedSchema(schema);
	      });
	    }, 100);
	
	    service.events.push(service.scope.$on('ffRefreshData', service.refreshData));
	  }
	
	  function processUpdatedSchema(schema) {
	    var service = this;
	    if (schema.diff) {
	      service.incrementUpdates();
	      service.schema.params = schema.params;
	      if (cnFlexFormConfig.onProcessDiff) {
	        cnFlexFormConfig.onProcessDiff(schema);
	      }
	
	      if (schema.diff.data) {
	        service.scope.$broadcast('cnFlexFormDiff:data', schema.diff.data);
	        _.each(schema.diff.data, function (data, prop) {
	          if (data && data.data && !_.isEmpty(service.schema.data[prop].data) && !data.reset) {
	            data.data = service.schema.data[prop].data.concat(data.data);
	          }
	          service.schema.data[prop] = data;
	          if (service.resolveRegister[prop]) {
	            _.each(service.resolveRegister[prop], function (registers) {
	              registers.forEach(function (register) {
	                service.handleResolve(register.field, register.prop, register.exp);
	              });
	            });
	          }
	        });
	      }
	
	      var keys = [];
	
	      if (schema.diff.schema) {
	        service.scope.$broadcast('cnFlexFormDiff:schema', schema.diff.schema);
	        _.each(schema.diff.schema, function (schema, key) {
	          reprocessSchema(schema, key, keys);
	          var curKeys = _.filter(keys, function (k) {
	            return _.startsWith(k, key);
	          });
	          _.each(curKeys, function (key) {
	            var forms = _.compact([service.getFromFormCache(key)].concat(_toConsumableArray(service.getArrayCopies(key) || [])));
	            _.each(forms, function (form) {
	              var prevSchema = form.schema;
	              var newSchema = service.getSchema(key, _defineProperty({}, schema.key, schema));
	              if (prevSchema.readonly && !newSchema.readonly) form.readonly = false;
	            });
	          });
	          service.schema.schema.properties[key] = schema;
	        });
	      }
	
	      if (schema.diff.updates) {
	        _.each(schema.diff.updates, function (val, key) {
	          if (key.includes('dropSources')) {
	            // I know this is poor condition to check
	            // this will populate them to the model
	            var dotKey = getDotKey(key);
	            if (key.endsWith('readonly')) {
	              var realKey = key.replace(".readonly", "");
	              _.each(service.getFormsToProcess(realKey), function (copy) {
	                if (copy) {
	                  copy.readonly = val;
	                  service.processField(copy);
	                } else {
	                  var debouncedFunc = _.debounce(function () {
	                    _.each(service.getFormsToProcess(realKey), function (copy) {
	                      if (copy) {
	                        copy.readonly = val;
	                        service.processField(copy);
	                      }
	                    });
	                  }, 200);
	                  debouncedFunc();
	                }
	              });
	            } else {
	              var currentIndex = dotKey.split('.')[1];
	              if (currentIndex && !isDeletedDropSource(currentIndex, schema.params) || schema.params.updateSchema === "admin.package_id") {
	                service.parseStringKey(service.model, dotKey, val);
	              }
	            }
	          }
	
	          if (key === 'dropSource_keys') {
	            var keys = val;
	            if (keys.length > 0) {
	              _.each(keys, function (k) {
	                var form = service.getFromFormCache(k.replace(/\[\d+]/g, '[]'));
	                _.each(service.getFormsToProcess(k), function (copy) {
	                  return copy && service.processField(copy);
	                });
	              });
	            }
	          }
	
	          if (key.includes('generic_creative')) {
	            // should update the form/field.resolveMap = val;
	            service.schema.data[key] = val;
	          }
	        });
	      }
	
	      if (schema.diff.form) {
	        service.scope.$broadcast('cnFlexFormDiff:form', schema.diff.form);
	        _.each(schema.diff.form, function (form, key) {
	
	          if (!keys.includes(key)) {
	            keys.push(key);
	          }
	
	          // don't want to override key when extending cached objects
	          //var key = form.key;
	          //delete form.key;
	
	          // currentForm: cached form, means processed form from original. 
	          // form: received from backend, need to update the current form 
	          _.each(service.getFormsToProcess(key), function (currentForm) {
	            return currentForm && service.reprocessField(currentForm, form);
	          });
	        });
	      }
	
	      if (keys.length) {
	        _.each(keys, function (key) {
	          _.each(service.getFormsToProcess(key), function (copy) {
	            return copy && service.processField(copy);
	          });
	        });
	      }
	
	      service.broadcastErrors();
	    } else {
	      service.resetUpdates();
	      service.updateSchema(schema);
	    }
	  }
	
	  function getFormsToProcess(key) {
	    var service = this;
	
	    var _ref20 = key.match(/\[(\d)+]/) || [],
	        _ref21 = _slicedToArray(_ref20, 2),
	        arrayIndex = _ref21[1];
	
	    var copies = service.getArrayCopies(key.replace(/\[\d+]/g, '[]'));
	    if (_.isUndefined(arrayIndex)) {
	      var cached = service.getFromFormCache(key);
	      return [cached].concat(_toConsumableArray(copies));
	    }
	    return [copies[arrayIndex]];
	  }
	
	  function reprocessField(current, update, isChild) {
	    var service = this;
	    var key = service.getKey(current.key);
	
	    // other logic in the service will add condition = 'true' to force
	    // condition to eval true, so we set the update condition to 'true'
	    // before comparing
	    if (!update.condition && current.condition) update.condition = 'true';
	    var redraw = !isChild && current.condition !== update.condition;
	
	    _.extend(current, _.omit(update, 'items', 'key'));
	
	    current._ogKeys.forEach(function (prop) {
	      if (!update[prop]) {
	        delete current[prop];
	      }
	    });
	    current._ogKeys = getOgKeys(update);
	
	    //service.deregisterHandlers(key);
	
	    service.scope.$broadcast('cnFlexFormReprocessField', key);
	
	    // why do we redraw? If we're doing it to show error message
	    // that has been addressed from the angular-schema-form library
	    // if there's another issue, try triggering the specific action required
	    // instead of redrawing the whole form
	    if (redraw && current.redraw) {
	      console.log('TODO: see if this can be removed');
	      current.redraw();
	    }
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
	
	  function getDotKey(key) {
	    return (_.isString(key) ? ObjectPath.parse(key) : key).join('.');
	  }
	
	  function parseStringKey(obj, keyStr, value) {
	    var pathParts = keyStr.split('.');
	    if (pathParts.length === 1) {
	      obj[keyStr] = value;
	    }
	    for (var i = 0; i < pathParts.length; i++) {
	      var part = pathParts[i];
	      if (i === pathParts.length - 1) {
	        obj[part] = value;
	      } else {
	        if (!obj[part]) {
	          var nextPart = pathParts[i + 1];
	          if (isNaN(nextPart)) {
	            // if (!isNaN(part) && i === 1 && pathParts[0] === "dropSources") break;
	            obj[part] = {};
	          } else {
	            obj[part] = [];
	          }
	        }
	        obj = obj[part];
	      }
	    }
	    return obj;
	  }
	
	  function buildError(field) {
	    return {
	      key: getDotKey(field.key),
	      message: field.error
	    };
	  }
	
	  function broadcastErrors() {
	    var service = this;
	    $timeout(function () {
	      if (_.get(service, 'errors')) {
	        service.errors.forEach(function (error) {
	          service.scope.$broadcast('schemaForm.error.' + error.key, 'serverValidation', error.message);
	        });
	      }
	    }, 1);
	  }
	
	  function replaceArrayIndex(resolve, key) {
	    while (resolve.includes('arrayIndex')) {
	      if (_.isNumber(key)) return resolve.replace(/arrayIndex/g, key);
	      var arrayIndexKey = /([^.[]*)\[arrayIndex\]/.exec(resolve);
	      var re = new RegExp(arrayIndexKey[1] + '\\[(-?\\d+)\\]');
	      var index = re.exec(key);
	      if (!index) return resolve;
	      resolve = resolve.replace(new RegExp(arrayIndexKey[0].replace(/(\[|\])/g, '\\$1'), 'g'), index[0]);
	    }
	    return resolve;
	  }
	
	  function getArrayIndex(key) {
	    if (_.isObject(key)) {
	      return _.find(key.key, function (key) {
	        return _.isNumber(key);
	      });
	    }
	    return (/\[(\d*)\]/.exec(key)[1]
	    );
	  }
	
	  function setArrayIndex(key, index, asArray) {
	    var service = this;
	    var keyCopy = void 0;
	    if (!_.isArray(index)) {
	      index = [index];
	    }
	    if (_.isString(key)) {
	      keyCopy = ObjectPath.parse(key);
	    } else {
	      keyCopy = _.clone(key);
	    }
	    while (index.length && keyCopy.indexOf('') > -1) {
	      var indexOfIndex = keyCopy.indexOf('');
	      keyCopy[indexOfIndex] = index.shift();
	    }
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
	
	  function resetUpdates() {
	    var service = this;
	    service.updates = 0;
	    service.params.updates = service.updates;
	  }
	
	  function incrementUpdates() {
	    var service = this;
	    ++service.updates;
	    service.params.updates = service.updates;
	  }
	
	  function isDeletedDropSource(currentIndex, params) {
	    var regex = /dropSources\[(\d+)\]/;
	    var dropSourceIndexs = new Set(Object.keys(params).filter(function (key) {
	      return key.match(regex);
	    }).map(function (key) {
	      return key.match(regex)[1];
	    }));
	    return !dropSourceIndexs.has(currentIndex);
	  }
	}
	
	//angular
	//.module('cn.flex-form')
	//.provider('cnFlexFormService', cnFlexFormServiceProvider);
	
	exports.default = cnFlexFormServiceProvider;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	cnFlexFormModalLoaderService.$inject = ["$stateParams", "$q"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var modalMap = {};
	var promiseMap = {};
	
	function getPromises(state) {
	  if (promiseMap[state]) return promiseMap[state];
	
	  var promise = {};
	  promiseMap[state] = promise;
	  return promise;
	}
	
	function getPromise(state, id, $q) {
	  var promises = getPromises(state);
	  if (promises[id]) return promises[id];
	
	  var promise = $q.defer();
	  promises[id] = promise;
	  return promise;
	}
	
	function cnFlexFormModalLoaderServiceProvider() {
	
	  parent.$inject = ["$stateParams", "$q"];
	  return {
	    addMapping: addMapping,
	    $get: cnFlexFormModalLoaderService
	  };
	
	  ////////////
	
	  function addMapping(state, def) {
	    def.resolve = { parent: parent };
	    modalMap[state] = def;
	  }
	
	  function parent($stateParams, $q) {
	    'ngInject';
	
	    return getPromise($stateParams.modal, $stateParams.modalId, $q).promise.then(function (_ref) {
	      var parent = _ref.parent;
	      return parent;
	    });
	  }
	}
	
	function cnFlexFormModalLoaderService($stateParams, $q) {
	  'ngInject';
	
	  return {
	    getMapping: getMapping,
	    resolveMapping: resolveMapping,
	    removeMapping: removeMapping
	  };
	
	  /////////////
	
	  function resolveMapping(state, id, parent) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var scope = options.scope;
	
	    if (scope) {
	      scope.options = scope.options || {};
	      scope.options.destroyStrategy = 'retain';
	      modalMap[state].scope = scope;
	    }
	    var d = getPromise(state, id, $q);
	    d.resolve({ parent: parent, options: options });
	    return d.promise;
	  }
	
	  function getMapping(state) {
	    var d = $q.defer();
	    getPromise($stateParams.modal, $stateParams.modalId, $q).promise.then(function (_ref2) {
	      var parent = _ref2.parent,
	          options = _ref2.options;
	
	      d.resolve({ state: modalMap[state], options: options });
	      return parent;
	    });
	    return d.promise;
	  }
	
	  // Holding on to scope references creates memory leaks
	  function removeMapping(state) {
	    modalMap[state] = null;
	    promiseMap[state] = null;
	  }
	}
	
	exports.default = cnFlexFormModalLoaderServiceProvider;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	FlexFormModalLoader.$inject = ["FlexFormModal", "$state", "$rootScope", "$stateParams", "$scope"];
	FlexFormModal.$inject = ["cnFlexFormModalLoaderService", "$uibModal", "$stateParams"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams, $scope) {
	  'ngInject';
	
	  function FFModalLoaderTag() {}
	  $scope.__tag = FFModalLoaderTag();
	
	  var vm = this;
	
	  activate();
	
	  //////////
	
	  function activate() {
	    FlexFormModal.open(vm).then(function (_ref) {
	      var modal = _ref.modal,
	          _ref$options = _ref.options,
	          onDismiss = _ref$options.onDismiss,
	          onAfterDismiss = _ref$options.onAfterDismiss;
	
	      vm.modal = modal;
	      vm.modal.result.finally(goBack);
	
	      if (onDismiss) vm.modal.result.catch(function () {
	        return onDismiss($stateParams.restParams);
	      });
	      vm.dismissEvent = $rootScope.$on('$stateChangeStart', dismissModal);
	    });
	  }
	
	  function goBack() {
	    if (!$state.transition) {
	      $state.go('^');
	    }
	  }
	
	  function dismissModal() {
	    // unbind event
	    vm.dismissEvent();
	    vm.modal.opened.then(function () {
	      return vm.modal.dismiss();
	    });
	  }
	}
	
	function FlexFormModal(cnFlexFormModalLoaderService, $uibModal, $stateParams) {
	  'ngInject';
	
	  return { open: open };
	
	  ////////////
	
	  function open() {
	    return cnFlexFormModalLoaderService.getMapping($stateParams.modal).then(function (_ref2) {
	      var state = _ref2.state,
	          options = _ref2.options;
	      return {
	        modal: $uibModal.open(state),
	        options: options
	      };
	    });
	  }
	}
	
	exports.FlexFormModalLoader = FlexFormModalLoader;
	exports.FlexFormModal = FlexFormModal;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	FlexForm.$inject = ["cnFlexFormService", "$scope", "$location"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function cnFlexForm() {
	  return {
	    restrict: 'E',
	    template: '\n      <div ng-if="vm.showForm()">\n        <!-- we process defaults ourselves, hence setSchemaDefaults: false -->\n        <ng-form\n          class="clearfix"\n          name="{{vm.formName}}"\n          sf-options="{ setSchemaDefaults: false }"\n          sf-schema="vm.config.schema.schema"\n          sf-form="vm.form"\n          sf-model="vm.model">\n        </ng-form>\n        <!-- debug panel to display model -->\n        <section ng-if="vm.debug">\n          <json-explorer json-data="vm.model || \'...model not loaded yet\'"/>\n        </section>\n      </div>\n    ',
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
	
	function FlexForm(cnFlexFormService, $scope, $location) {
	  'ngInject';
	
	  function cnFlexFormTag() {}
	  $scope.__tag = new cnFlexFormTag();
	
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
	
	  $scope.refreshAdbook = function () {
	    vm.model['refreshAdbook'] = !vm.model['refreshAdbook'];
	  };
	
	  //////////
	
	  function activate() {
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
	    if (vm.form) {
	      if (!vm.service) {
	        vm.service = cnFlexFormService(vm.config.schema, vm.model, {
	          getScope: vm.config.getScope || function () {
	            return $scope;
	          },
	          formCtrl: vm.config.formCtrl,
	          getSchema: vm.config.getSchema,
	          updateSchema: updateSchema
	        });
	      } else {
	        vm.service.compile(vm.config.schema, vm.model, vm.config);
	      }
	    }
	  }
	
	  function showForm() {
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
	
	    cnFlexFormService.destroyService(vm.service);
	  }
	}
	
	exports.default = cnFlexForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	FlexFormHeader.$inject = ["$scope"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	    template: '\n        <div class="col-md-6">\n          <h5 ng-if="vm.title.lead">{{::vm.title.lead}}</h5>\n          <h1>\n            <i ng-show="vm.title.icon" class="{{vm.title.icon}}"/>\n            {{vm.title.main}}\n          </h1>\n          <h5 ng-if="vm.title.sub">{{::vm.title.sub}}</h5>\n        </div>\n        <div class="{{vm.buttonContainerClass || \'page-action-btns\'}}">\n          <div class="btn-options"\n               ng-mouseover="vm.loadOffscreen()">\n            <a class="btn btn-{{vm.returnStyle ? vm.returnStyle : \'default-dark\'"\n               ng-if="vm.returnState"\n               ui-sref="{{vm.returnState}}">\n              {{vm.returnText || \'Cancel\'}}\n            </a>\n            <a class="btn btn-{{vm.closeButton.style ? vm.closeButton.style : \'default-dark\'}}"\n               ng-if="vm.closeButton"\n               ng-click="vm.closeButton.handler()">\n               Cancel\n            </a>\n            <span ng-repeat="button in vm.actions">\n              <span ng-class="{\'btn-group\': button.options}">\n                <button class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}}"\n                   ng-disabled="vm.isDisabled(button)"\n                   ng-click="vm.isDisabled(button) || vm.submit({handler: button.handler})"\n                   uib-tooltip="{{button.helptext}}"\n                   uib-tooltip-placement="bottom"\n                   ng-bind-html="button.text || \'Save\'">\n                </button>\n                <button class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}} dropdown-toggle"\n                        ng-disabled="vm.isDisabled(button)"\n                        ng-show="button.options"\n                        data-toggle="dropdown">\n                  <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu" ng-if="button.options">\n                  <li ng-repeat="option in button.options"\n                      ng-disabled="vm.isDisabled(option)">\n                    <button ng-click="vm.submit({handler: option.handler})"\n                       ng-bind-html="option.text">\n                    </button>\n                  </li>\n                </ul>\n              </span>\n            </span>\n          </div>\n          <p class="data-updated-at text-right"\n             id="data-updated-at"\n             ng-hide="vm.config.noData">\n            <a ng-click="vm.updateData()">Update Data</a>\n          </p>\n        </div>'
	  };
	}
	
	function FlexFormHeader($scope) {
	  'ngInject';
	
	  function ffHeaderTag() {}
	  $scope.__tag = new ffHeaderTag();
	
	  var vm = this;
	
	  vm.updateData = updateData;
	  vm.isDisabled = isDisabled;
	
	  //activate();
	  //$scope.$on('$destroy', cleanup);
	  $scope.$watch('vm.config.title', initTitle, true);
	  $scope.$watch('vm.config.actionConfig', initActionConfig, true);
	
	  ///////////
	
	  function initTitle() {
	    vm.title = vm.config.title;
	  }
	
	  function initActionConfig() {
	    var _ref = vm.config.actionConfig || {};
	
	    vm.returnState = _ref.returnState;
	    vm.returnStyle = _ref.returnStyle;
	    vm.returnText = _ref.returnText;
	    vm.closeButton = _ref.closeButton;
	    vm.actions = _ref.actions;
	  }
	
	  function updateData() {
	    // $scope.$emit('ffRefreshData');
	    // this component will often be siblings to the flex forms one,
	    // so need to broadcast from shared parent...yes it's ugly
	    $scope.$parent.$parent.$broadcast('ffRefreshData');
	  }
	
	  function isDisabled(btnConfig) {
	    if (vm.config.isDisabled) return vm.config.isDisabled(btnConfig);
	    return false;
	  }
	}
	
	exports.default = cnFlexFormHeader;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function ffValidate() {
	  return {
	    restrict: 'A',
	    scope: { form: '=ffValidate' },
	    require: 'ngModel',
	    link: link
	  };
	}
	
	function link($scope, elem, attrs, ngModel) {
	  function ffValidateTag() {}
	  $scope.__tag = new ffValidateTag();
	
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
	
	exports.default = ffValidate;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOTJiYTI3NjU3Y2FjNDEyNTNiMiIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXBSZXNvbHZlIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwiRVZFTlRTIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc1VybCIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzU2NoZWR1bGUiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc2V0VXBkYXRlcyIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJwYXJzZVN0cmluZ0tleSIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsImdldFBhcmFtcyIsInBhcmFtcyIsImV4dGVuZCIsImdldFNjb3BlIiwic2NvcGUiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwiaW5pdFVwZGF0ZXMiLCJkZWJvdW5jZSIsInZhbCIsImtleSIsImVuZHNXaXRoIiwicmVhbEtleSIsInJlcGxhY2UiLCJjb3B5IiwicmVhZG9ubHkiLCJrZXlzIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwidXBkYXRlU2NoZW1hIiwiZ2V0U2NoZW1hRm9ybSIsImdldFBhcmFtT3ZlcnJpZGVzIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiZ2V0T2dLZXlzIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsImV4cCIsInJlc29sdXRpb24iLCJyZXN1bHQiLCJzcGxpdCIsInRyaW0iLCJyaWdodCIsInRvRGV2aWRlIiwiZGV2aWRlQnkiLCJyZXN1bHRJbiIsImlzRGVmaW5lZCIsIl9vZ0tleXMiLCJkZXNjcmlwdGlvbiIsInNob3dDbGVhckFsbCIsIiRicm9hZGNhc3QiLCJnZXREb3RLZXkiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsImRpZmZBcnIiLCJkaWZmZXJlbmNlIiwiaXRlbSIsIl9maWVsZCIsImZpbHRlciIsImQiLCJwcmV2aWV3UGF0aCIsImpvaW4iLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0Iiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJ3YXRjaGFibGUiLCJtYXRjaCIsImJhc2UiLCJlaXRoZXJzIiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsImN1ciIsImFkanVzdG1lbnQiLCJkYXRlIiwidW5pdHMiLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwib3BlcmFuZDEiLCJvcGVyYW5kMiIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJjdXJWYWwiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsImxpbmsiLCJzcGxpY2UiLCJjb3BpZXMiLCJwbHVjayIsImtleVN0YXJ0Iiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwicGFyc2VJbnQiLCJzdGFydE9mIiwidmlld0Zvcm1hdHRlciIsImRhdGVGb3JtYXQiLCJ2aWV3UGFyc2VyIiwiZ2V0U2VsZWN0VmFsUHJvcCIsInNlbGVjdCIsInZhbHVlUHJvcGVydHkiLCJnZXRBbGxvd2VkU2VsZWN0VmFsdWUiLCJnZXRUaXRsZU1hcCIsInZhbFByb3AiLCJvbWl0SGFzaEtleSIsImlkZW50aXR5IiwicGFydGlhbFJpZ2h0IiwiZmluZEZuIiwiY29tcG9zZSIsInBhcnRpYWwiLCJzdGFydEVtcHR5Iiwib25Jbml0Iiwic2V0dGVyIiwidGVtcCIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJzaW5nbGVRdWVyeSIsIm1pbkxvb2t1cCIsInRpdGxlUXVlcnkiLCJxIiwidmFyaWFibGVzIiwic2tpcEZpbHRlcmluZyIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwibGlua01vZGVsIiwiZmVhdHVyZUtleSIsInNob3dGZWF0dXJlIiwiZmVhdHVyZXMiLCJzaG93Iiwic2VsZWN0S2V5IiwiZWxlbSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RNb2RlbCIsInJlZnJlc2giLCJkaWZmIiwiaXNOdWxsIiwidGhlbiIsIm9uUHJvY2Vzc0RpZmYiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImN1cktleXMiLCJjb21wYWN0IiwicHJldlNjaGVtYSIsIm5ld1NjaGVtYSIsImRvdEtleSIsImRlYm91bmNlZEZ1bmMiLCJjdXJyZW50SW5kZXgiLCJpc0RlbGV0ZWREcm9wU291cmNlIiwiY3VycmVudEZvcm0iLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsImtleVN0ciIsInBhdGhQYXJ0cyIsInBhcnQiLCJuZXh0UGFydCIsImlzTmFOIiwibWVzc2FnZSIsImFycmF5SW5kZXhLZXkiLCJleGVjIiwicmUiLCJSZWdFeHAiLCJhc0FycmF5Iiwia2V5Q29weSIsImNsb25lIiwiaW5kZXhPZkluZGV4IiwicmVnZXgiLCJkcm9wU291cmNlSW5kZXhzIiwiU2V0IiwiT2JqZWN0IiwibW9kYWxNYXAiLCJwcm9taXNlTWFwIiwiZ2V0UHJvbWlzZXMiLCJwcm9taXNlIiwiZ2V0UHJvbWlzZSIsIiRxIiwicHJvbWlzZXMiLCJkZWZlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UiLCJkZWYiLCJwYXJlbnQiLCJtb2RhbCIsIm1vZGFsSWQiLCJnZXRNYXBwaW5nIiwicmVzb2x2ZU1hcHBpbmciLCJyZW1vdmVNYXBwaW5nIiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCIkcm9vdFNjb3BlIiwiJHNjb3BlIiwiRkZNb2RhbExvYWRlclRhZyIsIl9fdGFnIiwidm0iLCJhY3RpdmF0ZSIsIm9wZW4iLCJvbkRpc21pc3MiLCJvbkFmdGVyRGlzbWlzcyIsImZpbmFsbHkiLCJnb0JhY2siLCJjYXRjaCIsInJlc3RQYXJhbXMiLCJkaXNtaXNzRXZlbnQiLCJkaXNtaXNzTW9kYWwiLCJ0cmFuc2l0aW9uIiwiZ28iLCJvcGVuZWQiLCJkaXNtaXNzIiwiJHVpYk1vZGFsIiwiY25GbGV4Rm9ybSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJmb3JtSW5kZXgiLCJmb3JtTmFtZSIsImRlbGF5Rm9ybSIsImNsZWFudXBFdmVudCIsIkZsZXhGb3JtIiwiYmluZFRvQ29udHJvbGxlciIsImNuRmxleEZvcm1TZXJ2aWNlIiwiJGxvY2F0aW9uIiwiY25GbGV4Rm9ybVRhZyIsInByb2Nlc3MiLCJzaG93Rm9ybSIsInJlZnJlc2hBZGJvb2siLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwiZmZIZWFkZXJUYWciLCJ1cGRhdGVEYXRhIiwiaXNEaXNhYmxlZCIsImluaXRUaXRsZSIsImluaXRBY3Rpb25Db25maWciLCJ0aXRsZSIsImFjdGlvbkNvbmZpZyIsInJldHVyblN0YXRlIiwicmV0dXJuU3R5bGUiLCJyZXR1cm5UZXh0IiwiY2xvc2VCdXR0b24iLCJhY3Rpb25zIiwiJHBhcmVudCIsImJ0bkNvbmZpZyIsImZmVmFsaWRhdGUiLCJhdHRycyIsIm5nTW9kZWwiLCJmZlZhbGlkYXRlVGFnIiwicmVxdWlyZWQiLCIkdmlld1ZhbHVlIiwiJHNldFZhbGlkaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzttQkFFZUEsUUFDWkMsTUFEWSxDQUNMLGNBREssRUFDVyxDQUN0QixXQURzQixFQUV0QixZQUZzQixFQUd0Qiw2QkFIc0IsRUFJdEIsYUFKc0IsRUFLdEIsU0FMc0IsQ0FEWCxFQVFaQyxRQVJZLENBUUgsa0JBUkcsOEJBU1pBLFFBVFksQ0FTSCxpQkFURyw2QkFVWkEsUUFWWSxDQVVILGtCQVZHLHdDQVdaQyxNQVhZLCtCQVlaQSxNQVpZLHlDQWFaQyxHQWJZLHFDQWNaRixRQWRZLENBY0gsbUJBZEcsd0JBZVpBLFFBZlksQ0FlSCw4QkFmRyxtQ0FnQlpHLE9BaEJZLENBZ0JKLGVBaEJJLHlDQWlCWkMsVUFqQlksQ0FpQkQscUJBakJDLCtDQWtCWkMsU0FsQlksQ0FrQkYsWUFsQkUsd0JBbUJaQSxTQW5CWSxDQW1CRixrQkFuQkUsOEJBb0JaQSxTQXBCWSxDQW9CRixZQXBCRSxnQ0FxQlpDLEk7Ozs7OztBQ2hDSDs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksV0FBVyxPQUFPLFVBQVUs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bml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI5MmJhMjc2NTdjYWM0MTI1M2IyIiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcbiAgLm1vZHVsZSgnY24uZmxleC1mb3JtJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdzY2hlbWFGb3JtJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnY25UYWdzSW5wdXQnLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBfKHsgLi4uJHN0YXRlUGFyYW1zLCAuLi5vdmVycmlkZXMgfSlcbiAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAub21pdCh2ID0+IChfLmlzVW5kZWZpbmVkKHYpIHx8IHYgPT09IG51bGwpKVxuICAgICAgICAudmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIoKSB7XG5cbiAgdmFyIGZpZWxkVHlwZVJlZ2lzdGVyID0gW3tcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoaWRkZW4nLFxuICAgIHR5cGU6ICdoaWRkZW4nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvcycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb3MnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvYnV0dG9ucycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb2J1dHRvbnMnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2F1dG9jb21wbGV0ZScpIHx8IGZpZWxkLnRpdGxlTWFwUmVzb2x2ZSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFF1ZXJ5LFxuICAgIHR5cGU6ICdjbi1hdXRvY29tcGxldGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjbi1kYXRldGltZXBpY2tlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJyB8fCBmaWVsZC50eXBlID09PSAndGltZS1taW51dGVzJyxcbiAgICB0eXBlOiAnY24tZGF0ZXRpbWVwaWNrZXInXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoZWxwJyxcbiAgICB0eXBlOiAnaGVscCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnZGlzcGxheScpLFxuICAgIHR5cGU6ICdjbi1kaXNwbGF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0LmluY2x1ZGVzKCdjdXJyZW5jeScpLFxuICAgIHR5cGU6ICdjbi1jdXJyZW5jeSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgPT09ICdwZXJjZW50YWdlJyxcbiAgICB0eXBlOiAnY24tcGVyY2VudGFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnR5cGUgPT09ICd1cmwnLFxuICAgIHR5cGU6ICdjbi11cmwnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3JlYXRpdmVpbWFnZScsXG4gICAgdHlwZTogJ2NuLWNyZWF0aXZlaW1hZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdmYWNlYm9va3ZpZGVvJyxcbiAgICB0eXBlOiAnY24tZmFjZWJvb2t2aWRlbydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdzY2hlZHVsZScsXG4gICAgdHlwZTogJ2NuLXNjaGVkdWxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGUgPT09ICdudW1iZXInLFxuICAgIHR5cGU6ICdjbi1udW1iZXInXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLW51bWJlcicsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tdXJsJyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnLFxuICAgICdjbi1jcmVhdGl2ZWltYWdlJyxcbiAgICAnY24tc2NoZWR1bGUnLFxuICAgICdjbi1mYWNlYm9va3ZpZGVvJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIG5nLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGRlZmF1bHQtdGltZT1cImZvcm0uZGVmYXVsdFRpbWVcIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5taW5JdGVtcyB8fCBmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5tYXhJdGVtcyB8fCBmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCAoZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMCl9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgYnVsay1zaW5nbGUtcmVxdWVzdD1cInt7Zm9ybS5idWxrU2luZ2xlUmVxdWVzdH19XCJcbiAgICAgICAgICBzb3J0LWZpbHRlcmVkLXJlc3VsdHM9XCJ7eyhmb3JtLnRpdGxlTWFwUmVzb2x2ZSB8fCBmb3JtLnRpdGxlTWFwKSAmJiAhZm9ybS50aXRsZU1hcFF1ZXJ5fX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWNhY2hlPVwie3tmb3JtLnNob3dDbGVhckNhY2hlfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5LCBvcHRpb25zKVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS5za2lwRmlsdGVyaW5nfX1cIlxuICAgICAgICAgICAgc2luZ2xlLXF1ZXJ5PVwie3tmb3JtLnNpbmdsZVF1ZXJ5fX1cIlxuICAgICAgICAgICAgZGVib3VuY2UtZGVsYXk9XCJ7e2Zvcm0uZGVib3VuY2VEZWxheX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmctaGlkZT1cImZvcm0ucmVhZG9ubHkgfHwgZm9ybS5yZW1vdmUgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbnVtYmVyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX1cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1udW1iZXJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi11cmwuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiXG4gICAgICAgICAgICAgICBjbi11cmwtZm9ybWF0XG4gICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3MgfHwgaXRlbS5pY29uUGF0aFwiPlxuICAgICAgICAgICAgICAgPGkgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgICAgPGltZyBuZy1pZj1cIml0ZW0uaWNvblBhdGhcIiBjbGFzcz1cImN1c3RvbVwiIG5nLXNyYz1cInt7aXRlbS5pY29uUGF0aH19XCIvPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1pZ25vcmUtd2hlZWxcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDAsICdub3RpdGxlJzogZm9ybS5ub3RpdGxlIHx8ICFmb3JtLnRpdGxlfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWhpZGU9XCJmb3JtLm5vdGl0bGVcIlxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXRleHQtYnV0dG9uPVwiZm9ybS50ZXh0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWltYWdlLXByZXZpZXdzPVwiZm9ybS5kYXRhLmltYWdlUHJldmlld3NcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWtleT1cImZvcm0ua2V5ICYmIGZvcm0ua2V5WzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNyZWF0aXZlaW1hZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1jcmVhdGl2ZS1pbWFnZSBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1uZy1tb2RlbC1rZXk9XCJmb3JtLm5nTW9kZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2NuLWNyZWF0aXZlLWltYWdlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXNjaGVkdWxlLmh0bWwnLFxuICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7IGZvcm0uaHRtbENsYXNzIH19XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCkgfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7eyBmb3JtLmtleS5qb2luKCcuJykgfX1cIj5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjbi1zY2hlZHVsZSBmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2NuLXNjaGVkdWxlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZhY2Vib29rdmlkZW8uaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1mYWNlYm9vay12aWRlbyBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi12aWRlby1rZXk9XCJmb3JtLnZpZGVvS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi10aHVtYm5haWwta2V5PVwiZm9ybS50aHVtYm5haWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWltYWdlLWlkLWtleT1cImZvcm0uaW1hZ2VJZEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY24tZmFjZWJvb2stdmlkZW8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1udW1iZXInOiAncHJvY2Vzc051bWJlcicsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi11cmwnOiAncHJvY2Vzc1VybCcsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3JlYXRpdmVpbWFnZSc6ICdwcm9jZXNzQ3JlYXRpdmVJbWFnZScsXG4gICdjbi1mYWNlYm9va3ZpZGVvJzogJ3Byb2Nlc3NGYWNlYm9va1ZpZGVvJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknLFxuICAnY24tc2NoZWR1bGUnOiAncHJvY2Vzc1NjaGVkdWxlJ1xufTtcblxuLy8gaGFuZGxlcnMgdGhhdCBkb24ndCBydW4gb24gc2Vjb25kUGFzcyBhcmUgb25lcyB0aGF0IHNob3VsZG4ndCBldmVyIGNoYW5nZVxuLy8gYW5kIHdlIHdhbnQgdG8gYXZvaWQgY29tcG91bmRpbmcgdGhlaXIgZWZmZWN0c1xuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWxlY3REaXNwbGF5KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBmaWVsZC53YXRjaCAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKVxufSwge1xuICBwcm9wOiAndHlwZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAndXBkYXRlU2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZClcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtcyxcbiAgRVZFTlRTLFxuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlbGV0ZUFycmF5Q29waWVzRm9yLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0Rm9ybXNUb1Byb2Nlc3MsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5jcmVtZW50VXBkYXRlcyxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUFsbCxcbiAgICBwYXJzZUFueSxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NDcmVhdGl2ZUltYWdlLFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGYWNlYm9va1ZpZGVvLFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NGaWVsZFdhdGNoLFxuICAgIHByb2Nlc3NDb21wb25lbnQsXG4gICAgcHJvY2Vzc0NvbmRpdGlvbmFsLFxuICAgIHByb2Nlc3NDdXJyZW5jeSxcbiAgICBwcm9jZXNzTnVtYmVyLFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NVcmwsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1NjaGVkdWxlLFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNldFVwZGF0ZXMsXG4gICAgcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzLFxuICAgIHBhcnNlU3RyaW5nS2V5LFxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlcnZpY2UoZm4pIHtcbiAgICByZXR1cm4gXy5maW5kKHNlcnZpY2VzLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95U2VydmljZShmbikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKGZuKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZS5jbGVhbnVwKCk7XG4gICAgICBfLmVtcHR5KHNlcnZpY2UpO1xuICAgICAgXy5yZW1vdmUoc2VydmljZXMsIChzKSA9PiBzID09PSBzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgaWYoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgWyBzY2hlbWEsIG1vZGVsLCBjb25maWcgXSA9IGFyZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIH0gPSBhcmdzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGN1clNlcnZpY2UgPSBnZXRTZXJ2aWNlKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLm1vZGVsID09PSBtb2RlbCk7XG4gICAgaWYoY3VyU2VydmljZSkge1xuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGN1clNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgc2VydmljZXMucHVzaChuZXdTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV3U2VydmljZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5zY29wZUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuICAgIHRoaXMuc2tpcERlZmF1bHQgPSB7fTtcblxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IGNvbmZpZy5nZXRQYXJhbXMgPyBjb25maWcuZ2V0UGFyYW1zKCkgOiB7fTtcbiAgICB0aGlzLnBhcmFtcyA9IGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMob3ZlcnJpZGVzKTtcblxuICAgIHRoaXMuXyA9IF87XG5cbiAgICB0aGlzLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENORmxleEZvcm0ucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICBfLmV4dGVuZChDTkZsZXhGb3JtQ29uc3RydWN0b3IsIHByb3RvdHlwZSwgeyBnZXRTZXJ2aWNlLCBkZXN0cm95U2VydmljZSB9KTtcblxuICByZXR1cm4gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yO1xuXG4gIC8vLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5nZXRTY29wZSkge1xuICAgICAgc2VydmljZS5zY29wZSA9IGNvbmZpZy5nZXRTY29wZSgpO1xuICAgIH1cbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAvKiogVE9ETzogQVBJLTMxMzYtcm9sbGJhY2tcbiAgICBpZiAoIXNlcnZpY2Uuc2NoZW1hLmRhdGVDb252ZXJ0ZWQgJiYgT2JqZWN0LmtleXMoc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXMgfHwge30pLmxlbmd0aCkge1xuICAgICAgXy5lYWNoKHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkLmZvcm1hdCA9PT0gXCJkYXRldGltZS1sb2NhbFwiKSB7XG4gICAgICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbW9kZWxbZmllbGQua2V5XSA9IGNuVXRpbC5jb252ZXJ0VG9Mb2NhbFRpbWUoY3VyVmFsKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VydmljZS5zY29wZS4kZW1pdChFVkVOVFMubm90aWZ5LCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGVDb252ZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICAqL1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0VXBkYXRlcyA9IF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICBpZiAoc2NoZW1hLnVwZGF0ZXMpIHtcbiAgICAgICAgICBfLmVhY2goc2NoZW1hLnVwZGF0ZXMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ2dlbmVyaWNfY3JlYXRpdmUnKSAmJiBrZXkgIT09ICdnZW5lcmljX2NyZWF0aXZlX2tleXMnKSB7XG4gICAgICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ2Ryb3BTb3VyY2VzJykgJiYga2V5LmVuZHNXaXRoKCdyZWFkb25seScpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlYWxLZXkgPSBrZXkucmVwbGFjZShcIi5yZWFkb25seVwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3MocmVhbEtleSksXG4gICAgICAgICAgICAgICAgKGNvcHkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvcHkucmVhZG9ubHkgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc2NoZW1hLnVwZGF0ZXNbJ2dlbmVyaWNfY3JlYXRpdmVfa2V5cyddKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IHNjaGVtYS51cGRhdGVzWydnZW5lcmljX2NyZWF0aXZlX2tleXMnXTtcbiAgICAgICAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMCk7XG4gICAgICBpbml0VXBkYXRlcygpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gICAgc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcyA9IGNvbmZpZy5nZXRQYXJhbXMgfHwgXy5ub29wO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmllbGQuY29uZGl0aW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSByZXBsYWNlQXJyYXlJbmRleChmaWVsZC5jb25kaXRpb24sIGZpZWxkLmFycmF5SW5kZXggfHwga2V5KTtcbiAgICAgIGlmKCFzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ3VybCcgJiYgIWZpZWxkLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9ICdjbi11cmwnO1xuICAgICAgZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIHVybCAoaHR0cHM6Ly8uLi4pJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRzZXQoZmllbGRzZXQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBmaWVsZHNldC50eXBlID0gJ2NuLWZpZWxkc2V0JztcbiAgICBmaWVsZHNldC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuXG4gICAgaWYoXy5oYXMoZmllbGRzZXQsICdwb3MnKSAmJiBmaWVsZHNldC5wb3MgPT09IDApIHtcbiAgICAgIGZpZWxkc2V0Lmh0bWxDbGFzcyA9IChmaWVsZHNldC5odG1sQ2xhc3MgfHwgJycpICsgJyBib3JkZXJsZXNzJztcbiAgICB9XG4gICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgIGZpZWxkc2V0LnRvZ2dsZUNvbGxhcHNlID0gKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgZmllbGRzZXQuY29sbGFwc2VkID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmllbGRzZXQucmVuZGVyID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBmaWVsZFR5cGUgPSBjbkZsZXhGb3JtVHlwZXMuZ2V0RmllbGRUeXBlKGZpZWxkKTtcbiAgICBjb25zdCBoYW5kbGVyID0gZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlXTtcbiAgICBpZihfLmlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICBzZXJ2aWNlW2hhbmRsZXJdKGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gICAgZWxzZSBpZihfLmlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChzZXJ2aWNlLCBmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T2dLZXlzKGZpZWxkKSB7XG4gICAgcmV0dXJuIF8ucmVqZWN0KFxuICAgICAgXy5rZXlzKGZpZWxkKSxcbiAgICAgIChrZXkpID0+IC9ea2V5JHxeaHRtbENsYXNzJHxeXy8udGVzdChrZXkpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZChmaWVsZCwgcG9zKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXG4gICAgaWYoKGZpZWxkLmtleSB8fCAnJykuaW5jbHVkZXMoJ29iamVjdGl2ZV9nb2FsJykgJiYgIShmaWVsZC5rZXkgfHwgJycpLmluY2x1ZGVzKCdkcm9wU291cmNlcycpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImZpZWxkXCIsIGZpZWxkLCBwb3MpO1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZCk7XG4gICAgICAoZmllbGQud2F0Y2ggfHwgW10pLmZvckVhY2god2F0Y2ggPT4ge1xuICAgICAgICBjb25zdCBleHAgPSAod2F0Y2gucmVzb2x1dGlvbiB8fCAnJykucmVwbGFjZSgvbW9kZWxcXC4vZywgJycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoZXhwIHx8ICcnKS5zcGxpdCgnPScpWzBdLnRyaW0oKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSAoZXhwIHx8ICcnKS5zcGxpdCgnPScpWzFdLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdG9EZXZpZGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihyaWdodC5zcGxpdCgnLycpWzBdLnRyaW0oKSwgc2VydmljZS5tb2RlbCkuZ2V0KCkgfHwgMDtcbiAgICAgICAgY29uc3QgZGV2aWRlQnkgID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24ocmlnaHQuc3BsaXQoJy8nKVsxXS50cmltKCksIHNlcnZpY2UubW9kZWwpLmdldCgpIHx8IDA7XG4gICAgICAgIGNvbnN0IHJlc3VsdEluID0gKHRvRGV2aWRlICYmIGRldmlkZUJ5KSA/ICh0b0RldmlkZSAvIGRldmlkZUJ5KSA6IDA7XG4gICAgICAgIHNlcnZpY2UucGFyc2VTdHJpbmdLZXkoc2VydmljZS5tb2RlbCwgcmVzdWx0LCByZXN1bHRJbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWVsZC5wb3MgPSBwb3M7XG4gICAgfVxuXG4gICAgaWYoIWZpZWxkLl9vZ0tleXMpIHtcbiAgICAgIGZpZWxkLl9vZ0tleXMgPSBnZXRPZ0tleXMoZmllbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSk7XG4gICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXkpO1xuXG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgZmllbGQuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICBpZihzY2hlbWEuZGVzY3JpcHRpb24pIGZpZWxkLmRlc2NyaXB0aW9uID0gc2NoZW1hLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZihzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiAhKCdzaG93Q2xlYXJBbGwnIGluIGZpZWxkKSkgZmllbGQuc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5wcm9jZXNzU2NoZW1hKGZpZWxkKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZpZWxkKTtcblxuICAgIGlmKGtleSkge1xuICAgICAgKChrZXkpID0+IHtcbiAgICAgICAgaWYoXy5maW5kKHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KSkge1xuICAgICAgICAgIHNlcnZpY2UuZXJyb3JzID0gXy5yZWplY3Qoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIHRydWUpO1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KShnZXREb3RLZXkoa2V5KSk7XG5cbiAgICAgIGlmKGZpZWxkLmVycm9yKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzLnB1c2goc2VydmljZS5idWlsZEVycm9yKGZpZWxkKSk7XG4gICAgICAgIGlmKF8uaXNFbXB0eShmaWVsZC5uZ01vZGVsT3B0aW9ucykpIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFsbG93SW52YWxpZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMuYWxsb3dJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhhbmRsZSBpZiBnZW5lcmljX2NyZWF0aXZlIHByZXNlbnRzIGluIGRpZmYudXBkYXRlXG4gICAgaWYoIV8uaXNVbmRlZmluZWQoZmllbGQuYXJyYXlJbmRleCkpIHtcbiAgICAgIF8uZWFjaChzZXJ2aWNlLnNjaGVtYS5kYXRhLCBmdW5jdGlvbih2YWwsIHByb3ApIHtcbiAgICAgICAgaWYocHJvcC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgY29uc3QgZGlmZkFyciA9IF8uZGlmZmVyZW5jZShwcm9wLnNwbGl0KCcuJyksIGtleS5zcGxpdCgnLicpKTtcbiAgICAgICAgICBpZihkaWZmQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYoZmllbGQuaXRlbXMpIHtcbiAgICAgICAgICAgICAgXy5lYWNoKGZpZWxkLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgX2ZpZWxkID0gZGlmZkFyci5maWx0ZXIoZCA9PiBkICE9IGl0ZW0ucHJldmlld1BhdGgpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnBhcnNlU3RyaW5nS2V5KGZpZWxkLCBfZmllbGQsIHZhbCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXJ2aWNlLnBhcnNlU3RyaW5nS2V5KGZpZWxkLCBkaWZmQXJyLmpvaW4oJy4nKSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRlbGV0ZSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIG5leHQgPSBrZXlbMV07XG4gICAgICBpZigvXi0/XFxkKiQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgaWYoa2V5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbnkoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQoZWl0aGVycywgeCA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbGwoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLnJlZHVjZShhbGwsIChhY2MsIHgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGFjYy5wdXNoKHYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGFsbC5sZW5ndGggPT09IG1hdGNoLmxlbmd0aCA/IF8ubGFzdChtYXRjaCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgc2tpcFByb3BIYW5kbGVycykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBleHAuaW5jbHVkZXMoJyB8fCAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQW55KGV4cCkgOiBleHAuaW5jbHVkZXMoJyAmJiAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQWxsKGV4cCkgOiBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgY29uc3QgdmFsMSA9IGZpZWxkUHJvcCA9PT0gJ2NvbmRpdGlvbicgPyB2YWwgKyAnJyA6IHZhbDtcbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZFByb3AsIGZpZWxkKS5zZXQodmFsMSk7XG5cbiAgICBpZighc2tpcFByb3BIYW5kbGVycykge1xuICAgICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZihfLmlzU3RyaW5nKGZpZWxkLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgY29uZGl0aW9uIGlzbid0IGFscmVhZHkgd3JhcHBlZCBpbiBwYXJlbnMsIHdyYXAgaXRcbiAgICAgICAgICBjb25kaXRpb24gPSAvXlxcKC4qXFwpJC8udGVzdChmaWVsZC5jb25kaXRpb24pID9cbiAgICAgICAgICAgIGZpZWxkLmNvbmRpdGlvbiA6XG4gICAgICAgICAgICBgKCR7ZmllbGQuY29uZGl0aW9ufSlgO1xuICAgICAgICB9XG4gICAgICAgIGlmKF8uaXNTdHJpbmcod2F0Y2guY29uZGl0aW9uKSkge1xuICAgICAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/XG4gICAgICAgICAgICBgJHtjb25kaXRpb259ICYmICR7d2F0Y2guY29uZGl0aW9ufWAgOlxuICAgICAgICAgICAgd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBpZihfLmlzU3RyaW5nKGN1ckNvbmRpdGlvbikgJiYgY3VyQ29uZGl0aW9uLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgYXJyYXlJbmRleCBjb3VsZCBub3QgYmUgcmVwYWxjZWQgZnJvbSBleHByZXNzaW9uICcke2N1ckNvbmRpdGlvbn0nYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihyZXBsYWNlQXJyYXlJbmRleChhZGp1c3RtZW50Lm1hdGhbMl0sIGtleSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhbmQxID0gZnJvbS5nZXQoKTsgXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlcmFuZDIgPSBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gYWRqdXN0bWVudC5tYXRoWzFdO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2Uob3BlcmFuZDEgKyBvcGVyYXRvciArIG9wZXJhbmQyKSgpO1xuICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYSB8fCBmaWVsZC5pdGVtcyAmJiAoZmllbGQuaXRlbXNbMF0uc2NoZW1hIHx8IChmaWVsZC5pdGVtc1swXS5pdGVtcyAmJiBmaWVsZC5pdGVtc1swXS5pdGVtc1swXS5zY2hlbWEpKTtcbiAgICAgICAgICAgICAgICBpZihmaWVsZC50eXBlID09PSAnY24tY3VycmVuY3knKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcCA9IHNjaGVtYSAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY3VycmVuY3ktZG9sbGFycycgPyAyIDogMDtcblxuICAgICAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5mbG9vcihyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmNlaWwocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLnJvdW5kKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5saXN0ZW5lcnNbdXBkYXRlLnBhdGgoKS5rZXldLnByZXYgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdLnRyaWdnZXIgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQocmVzdWx0IHx8IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQoZnJvbS5nZXQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSwgd2F0Y2guaW5pdGlhbGl6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICAvLyBieSB0aGlzIHBvaW50IGRlZmF1bHRzIHNob3VsZCBiZSBwcm9jZXNzZWQgc28gd2UgY2FuIGdldCB2YWx1ZSBkaXJlY3RseSBmcm9tIG1vZGVsXG4gICAgICBjb25zdCBjdXJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyVmFsKSkge1xuICAgICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1clZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBvbkFycmF5ID0gKGN1ciwgcHJldiwgcmVvcmRlcikgPT4ge1xuXG4gICAgICBpZighcHJldiAmJiBwcmV2ICE9PSAwICYmIChjdXIgfCAwKSA8IDEpIHJldHVybjtcbiAgICAgIHZhciBpLCBsLCBrZXk7XG5cbiAgICAgIGlmKHByZXYgPiBjdXIgfHwgcmVvcmRlcikge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV1gO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFyclZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKGFyclZhbCwgKGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7YXJyS2V5fS5sZW5ndGhgO1xuICAgIGlmKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gICAgLy9pZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBkZWxldGUgc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gc2VydmljZS5zY29wZS4kd2F0Y2goXG4gICAgICAoKSA9PiBzZXJ2aWNlLm1vZGVsLFxuICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuXG4gICAgICBpZiAoc2VydmljZS5maXJzdFVwZGF0ZSkge1xuICAgICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHZhbCBpcyBhbiBhcnJheSB0aGF0IGhhcyBvbiBvYmplY3QsIG5lZWQgZGVlcCBjb3B5IFxuICAgICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgIHNlcnZpY2UuaW5jcmVtZW50VXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmKF8uaXNGdW5jdGlvbihzZXJ2aWNlLnJlZnJlc2hTY2hlbWEpKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2NoZW1hUGFyYW1zKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyLCBrZXkpIHtcbiAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc2VydmljZS5zY2hlbWEudXBkYXRlcykge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcEluZGV4ZXMoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBcnJheUNvcHlXYXRjaCgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZm9ybSB9ID0gc2NvcGU7XG4gICAgICBpZighZm9ybS5rZXkpIHtcbiAgICAgICAgZm9ybS5jYWNoZUtleSA9IGAke2Zvcm0udHlwZX0tJHtfLnVuaXF1ZUlkKCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IGZvcm0uY2FjaGVLZXkgfHwgc2VydmljZS5nZXRLZXkoZm9ybS5rZXkpO1xuXG4gICAgICBpZihfLmlzTnVtYmVyKHNjb3BlLmFycmF5SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzY29wZS5hcnJheUluZGV4O1xuICAgICAgICBmb3JtLmFycmF5SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZighc2VydmljZS5nZXRBcnJheUNvcHkoZ2VuZXJpY0tleSwgaW5kZXgpKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmb3JtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmb3JtLmNvbmRpdGlvbikgZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIC8vIGVsc2UgaWYgKGZvcm0uY29uZGl0aW9uLmluY2x1ZGVzKFwiYXJyYXlJbmRleFwiKSkge1xuICAgICAgICAvLyAgIGZvcm0uY29uZGl0aW9uID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChmb3JtLmNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZVNjb3BlJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBzZXJ2aWNlLmRlbGV0ZUFycmF5Q29waWVzRm9yKGtleSwgaW5kZXgpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLmZvcm0ubGluaywgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgc2VydmljZS5kZWxldGVBcnJheUNvcGllc0ZvcihzY29wZS5mb3JtLmxpbmssIGluZGV4KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBcnJheUNvcHkoZm9ybSwga2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFpbmRleCB8fCBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICBpZighc2VydmljZS5hcnJheUNvcGllc1trZXldKSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0gPSBbXTtcbiAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV1baW5kZXhdID0gZm9ybTtcbiAgICAvL3NlcnZpY2UuYXJyYXlDb3BpZXNba2V5XS5wdXNoKGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3B5KGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gICAgcmV0dXJuIGNvcGllcyAmJiBjb3BpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXMoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ucGx1Y2soc2VydmljZS5nZXRBcnJheVNjb3BlcyhrZXkpLCAnZm9ybScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXlTdGFydCArPSAnW10nO1xuXG4gICAgcmV0dXJuIF8uZmlsdGVyKHNlcnZpY2UuYXJyYXlDb3BpZXMsIChjb3B5LCBrZXkpID0+IGtleS5pbmNsdWRlcyhrZXlTdGFydCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQXJyYXlDb3BpZXNGb3Ioa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5KTtcbiAgICBfLmVhY2goY29waWVzLCBsaXN0ID0+IGxpc3QgJiYgbGlzdC5zcGxpY2UoaW5kZXgsIDEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZighXy5pc1N0cmluZyhleHApICYmICFfLmlzQXJyYXkoZXhwKSkge1xuICAgICAgcmV0dXJuIHsgZ2V0OiAoKSA9PiBleHAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnW15cXCddKid8XCJbXlxcXCJdKlwifC0/WzAtOS5dK3xcXFtdfFxce30pJC8udGVzdChleHApKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighZXhwKSByZXR1cm4gZXhwO1xuICAgICAgICAgIGNvbnN0IGlzU3RyID0gZXhwLm1hdGNoKC9cIihbXlxcXCJdKilcIi8pIHx8IGV4cC5tYXRjaCgvJyhbXlxcJ10qKScvKTtcbiAgICAgICAgICBpZihpc1N0cikgcmV0dXJuIGlzU3RyWzFdO1xuICAgICAgICAgIHN3aXRjaChleHApIHtcbiAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzogcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnW10nOiByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlICd7fSc6IHJldHVybiB7fTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBwYXJzZUZsb2F0KGV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4cCA9IHNlcnZpY2UuZ2V0S2V5KGV4cCk7XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXihtb2RlbFxcLik/KFxcUyspJC8pO1xuXG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtwYXRoLnNoaWZ0KCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICYmIHN0YXJ0W3BhdGhbMF1dO1xuICAgICAgfSxcblxuICAgICAgZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKG5vQ29uc3RydWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoL15cXGQ/JC8udGVzdChwYXRoWzBdKSkge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9iajogc3RhcnQsXG4gICAgICAgICAga2V5OiBwYXRoWzBdLFxuICAgICAgICAgIHBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzKSxcbiAgICAgICAgICBmdWxsUGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MuY29uY2F0KHBhdGguc2xpY2UoMCwgMSkpKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgc2V0KHZhbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBpZih2YWwgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uOiB0cnVlIH0pIHx8IHt9O1xuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLmRlZmF1bHRzW3Jlc29sdmVkLnJlcGxhY2UoJ21vZGVsLicsICcnKV07XG4gICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIHNlcnZpY2Uuc2lsZW5jZUxpc3RlbmVycyhyZXNvbHZlZCwgZGVwdGgpO1xuICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRzKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpbGVuY2VMaXN0ZW5lcnMoa2V5U3RhcnQsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgaWYoa2V5LmluZGV4T2Yoa2V5U3RhcnQpID09PSAwKSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBkZXB0aCkuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBjb25zdCBrZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrcykpO1xuICAgIGxldCBza2lwS2V5cyA9IFtdO1xuICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaW5kZXgpO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa2V5KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfLmVhY2goY2hpbGRLZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgc2tpcEtleXMucHVzaChrKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZWRDaGlsZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrLCBbaW5kZXgsIGldKTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZENoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXNraXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24sIHNlY29uZFBhc3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgd2UncmUgaGVyZSBiZWNhdXNlIGEgcGFyZW50J3Mgc2NvcGUgd2FzIGVtaXR0ZWQsXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47XG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NOdW1iZXIoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLW51bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVXJsKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi11cmwnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGYWNlYm9va1ZpZGVvKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tZmFjZWJvb2t2aWRlbyc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3JlYXRpdmVJbWFnZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNyZWF0aXZlaW1hZ2UnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgbGV0IG9taXRIYXNoS2V5ID0gdmFsUHJvcCA/ICBfLmlkZW50aXR5IDogXy5wYXJ0aWFsUmlnaHQoXy5vbWl0LCBcIiQkaGFzaEtleVwiKVxuICAgIGxldCBmaW5kRm4gPSB2YWxQcm9wID9cbiAgICAgIF8uY29tcG9zZShfLnBhcnRpYWwoXy5maW5kLCB0aXRsZU1hcCksIF8ucGFydGlhbChfLnNldCwge30sIHZhbFByb3ApLCBvbWl0SGFzaEtleSkgOlxuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgb21pdEhhc2hLZXkpXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcbiAgICAgIHJldHVybiB2YWwubWFwKGZpbmRGbikuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRGbih2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlZHVsZShmaWVsZCkge1xuICAgICAgZmllbGQuc3RhcnRFbXB0eSA9IHRydWU7XG4gICAgICBmaWVsZC50eXBlID0gJ2NuLXNjaGVkdWxlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBgJHtzZWxlY3QudGl0bGVNYXBSZXNvbHZlfVske3NlbGVjdC5hcnJheUluZGV4fV1gO1xuICAgICAgICByZXR1cm4gIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSB8fCBzZWxlY3QudGl0bGVNYXA7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIGlmIChzZXJ2aWNlLnNjaGVtYS51cGRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IF8uZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2V0dGVyKG5ld1ZhbCk7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgdGVtcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zO1xuICAgICAgY29uc3QgcGFyYW1zS2V5cyA9IF8ua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJDYWNoZSA9ICEhc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnJlZnJlc2hEYXRhO1xuICAgICAgc2VsZWN0LnNpbmdsZVF1ZXJ5ID0gc2VsZWN0Lm1pbkxvb2t1cCA9PT0gMDtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gKHEsIHsgcmVmcmVzaERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgICAgIF8ocGFyYW1zS2V5cylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdyZWZyZXNoRGF0YScpIHtcbiAgICAgICAgICAgICAgaWYgKHJlZnJlc2hEYXRhKSBhY2NbcXVlcnlQYXJhbXNba2V5XV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cCA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgocXVlcnlQYXJhbXNba2V5XSwgc2VsZWN0LmFycmF5SW5kZXgpO1xuICAgICAgICAgICAgICBsZXQgdmFsID0gbnVsbCwgdmFyaWFibGVzID0gZXhwLnNwbGl0KCd8fCcpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBleHAgb2YgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwLnRyaW0oKSkuZ2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFjY1trZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZighXy5pc051bWJlcihzZWxlY3QubWluTG9va3VwKSkgc2VsZWN0Lm1pbkxvb2t1cCA9IHBhcmFtc0tleXMubGVuZ3RoID8gMyA6IDA7XG4gICAgICBpZighXy5oYXMoc2VsZWN0LCAnc2tpcEZpbHRlcmluZycpKSBzZWxlY3Quc2tpcEZpbHRlcmluZyA9ICEhc2VsZWN0Lm1pbkxvb2t1cDtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gMDtcblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VsZWN0Lml0ZW1zLCAoaSkgPT4gaS5kZXN0cm95U3RyYXRlZ3kgPSBcInJldGFpblwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgICBzZWxlY3QuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7XG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQgfHwgKF8uaXNBcnJheSh2YWxpZCkgJiYgXy5pc0VtcHR5KHZhbGlkKSkpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIE5lZWRlZCBmb3IgYmF0Y2hmb3JtIHRvIGNoZWNrIHJlY3Vyc2l2ZWx5XG4gICAgbGV0IHNlbGVjdEZpZWxkID0gbnVsbDtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHNlbGVjdERpc3BsYXkuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnNlbGVjdEZpZWxkKSB7XG4gICAgICAgIHNlbGVjdEZpZWxkID0gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChpdGVtLml0ZW1zLCAnc2VsZWN0RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RGaWVsZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiYW5kLWFpZCBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgc2V0IGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFycmF5IHNvbXdoZXJlXG4gICAgLy8gZGVlcCBpbiB0aGUgYW5ndWxhciBvciBhbmd1bGFyLXNjaGVtYS1mb3JtIG5ldGhlci1yZWdpb25zXG4gICAgY29uc3QgbGlua01vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5saW5rLCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZighbGlua01vZGVsLmdldCgpKSBsaW5rTW9kZWwuc2V0KFtdKTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdERpc3BsYXkubGlua31bJHtpbmRleH1dLmZlYXR1cmVzYClcbiAgICAgICAgICAgICAgLmdldCgpO1xuICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgZmVhdHVyZXMgJiZcbiAgICAgICAgICAgICAgZmVhdHVyZXNcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGZlYXR1cmVLZXkpO1xuICAgICAgICByZXR1cm4gc2hvdztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGBmb3JtLnNob3dGZWF0dXJlKGFycmF5SW5kZXgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgaWYoIXNlbGVjdE1vZGVsLmdldCgpKSBzZWxlY3RNb2RlbC5zZXQoW10pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKHVwZGF0ZVNjaGVtYSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIC4uLmNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcygpKSxcbiAgICAgICAgLi4uc2VydmljZS5wYXJhbXNcbiAgICAgIH07XG4gICAgICBsZXQgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSksICd1cGRhdGVzJyk7XG4gICAgICBsZXQga2V5cztcblxuICAgICAgaWYoIV8uaXNFbXB0eShkaWZmKSB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIFsndXBkYXRlU2NoZW1hJywgJ3VwZGF0ZXMnXSkpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuICAgICAgaWYgKGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZikge1xuICAgICAgICBjbkZsZXhGb3JtQ29uZmlnLm9uUHJvY2Vzc0RpZmYoc2NoZW1hKVxuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IF8uc3RhcnRzV2l0aChrLCBrZXkpKTtcbiAgICAgICAgICBfLmVhY2goY3VyS2V5cywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1zID0gXy5jb21wYWN0KFtcbiAgICAgICAgICAgICAgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSksXG4gICAgICAgICAgICAgIC4uLihzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSkgfHwgW10pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXy5lYWNoKGZvcm1zLCBmb3JtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldlNjaGVtYSA9IGZvcm0uc2NoZW1hO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgID0gc2VydmljZS5nZXRTY2hlbWEoa2V5LCB7IFtzY2hlbWEua2V5XTogc2NoZW1hIH0pO1xuICAgICAgICAgICAgICBpZihwcmV2U2NoZW1hLnJlYWRvbmx5ICYmICFuZXdTY2hlbWEucmVhZG9ubHkpIGZvcm0ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NoZW1hLmRpZmYudXBkYXRlcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYudXBkYXRlcywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ2Ryb3BTb3VyY2VzJykpIHtcbiAgICAgICAgICAgIC8vIEkga25vdyB0aGlzIGlzIHBvb3IgY29uZGl0aW9uIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcG9wdWxhdGUgdGhlbSB0byB0aGUgbW9kZWxcbiAgICAgICAgICAgIGNvbnN0IGRvdEtleSA9IGdldERvdEtleShrZXkpO1xuICAgICAgICAgICAgaWYgKGtleS5lbmRzV2l0aCgncmVhZG9ubHknKSkge1xuICAgICAgICAgICAgICBjb25zdCByZWFsS2V5ID0ga2V5LnJlcGxhY2UoXCIucmVhZG9ubHlcIiwgXCJcIik7XG4gICAgICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKHJlYWxLZXkpLFxuICAgICAgICAgICAgICAgIChjb3B5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgICAgICAgICAgICBjb3B5LnJlYWRvbmx5ID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlYm91bmNlZEZ1bmMgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhyZWFsS2V5KSwgKGNvcHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHkucmVhZG9ubHkgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZWRGdW5jKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gZG90S2V5LnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgIGlmICgoY3VycmVudEluZGV4ICYmICFpc0RlbGV0ZWREcm9wU291cmNlKGN1cnJlbnRJbmRleCwgc2NoZW1hLnBhcmFtcykpXG4gICAgICAgICAgICAgICAgfHwgc2NoZW1hLnBhcmFtcy51cGRhdGVTY2hlbWEgPT09IFwiYWRtaW4ucGFja2FnZV9pZFwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UucGFyc2VTdHJpbmdLZXkoc2VydmljZS5tb2RlbCwgZG90S2V5LCB2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2Ryb3BTb3VyY2Vfa2V5cycpIHtcbiAgICAgICAgICAgICAgdmFyIGtleXMgPSB2YWw7XG4gICAgICAgICAgICAgIGlmKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF8uZWFjaChrZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrLnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICAgICAgICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrKSxcbiAgICAgICAgICAgICAgICAgICAgKGNvcHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgaWYoa2V5LmluY2x1ZGVzKCdnZW5lcmljX2NyZWF0aXZlJykpIHtcbiAgICAgICAgICAgIC8vIHNob3VsZCB1cGRhdGUgdGhlIGZvcm0vZmllbGQucmVzb2x2ZU1hcCA9IHZhbDtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgICB9IFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICAvLyBjdXJyZW50Rm9ybTogY2FjaGVkIGZvcm0sIG1lYW5zIHByb2Nlc3NlZCBmb3JtIGZyb20gb3JpZ2luYWwuIFxuICAgICAgICAgIC8vIGZvcm06IHJlY2VpdmVkIGZyb20gYmFja2VuZCwgbmVlZCB0byB1cGRhdGUgdGhlIGN1cnJlbnQgZm9ybSBcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY3VycmVudEZvcm0pID0+IGN1cnJlbnRGb3JtICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY3VycmVudEZvcm0sIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgXG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5yZXNldFVwZGF0ZXMoKTtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uZGl0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmdLZXkob2JqLCBrZXlTdHIsIHZhbHVlKSB7XG4gICAgY29uc3QgcGF0aFBhcnRzID0ga2V5U3RyLnNwbGl0KCcuJyk7XG4gICAgaWYocGF0aFBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgb2JqW2tleVN0cl0gPSAgdmFsdWU7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0ID0gcGF0aFBhcnRzW2ldO1xuICAgICAgaWYgKGkgPT09IHBhdGhQYXJ0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIG9ialtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFvYmpbcGFydF0pIHtcbiAgICAgICAgICBjb25zdCBuZXh0UGFydCA9IHBhdGhQYXJ0c1tpICsgMV07XG4gICAgICAgICAgaWYgKGlzTmFOKG5leHRQYXJ0KSkge1xuICAgICAgICAgICAgLy8gaWYgKCFpc05hTihwYXJ0KSAmJiBpID09PSAxICYmIHBhdGhQYXJ0c1swXSA9PT0gXCJkcm9wU291cmNlc1wiKSBicmVhaztcbiAgICAgICAgICAgIG9ialtwYXJ0XSA9IHt9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpbcGFydF0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb2JqID0gb2JqW3BhcnRdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cblxuICBmdW5jdGlvbiBidWlsZEVycm9yKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZ2V0RG90S2V5KGZpZWxkLmtleSksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF8uZ2V0KHNlcnZpY2UsICdlcnJvcnMnKSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgd2hpbGUocmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSB7XG4gICAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICAgIGNvbnN0IGFycmF5SW5kZXhLZXkgPSAvKFteLltdKilcXFthcnJheUluZGV4XFxdLy5leGVjKHJlc29sdmUpO1xuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgICAgaWYoIWluZGV4KSByZXR1cm4gcmVzb2x2ZTtcbiAgICAgIHJlc29sdmUgPSByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gL1xcWyhcXGQqKVxcXS8uZXhlYyhrZXkpWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGtleUNvcHk7XG4gICAgaWYgKCFfLmlzQXJyYXkoaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IFtpbmRleF07XG4gICAgfVxuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4Lmxlbmd0aCAmJiBrZXlDb3B5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgIGxldCBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXguc2hpZnQoKTtcbiAgICB9XG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICBzZXJ2aWNlLnVwZGF0ZXMgPSAwO1xuICAgIHNlcnZpY2UucGFyYW1zLnVwZGF0ZXMgPSBzZXJ2aWNlLnVwZGF0ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEZWxldGVkRHJvcFNvdXJjZShjdXJyZW50SW5kZXgsIHBhcmFtcykge1xuICAgIGNvbnN0IHJlZ2V4ID0gL2Ryb3BTb3VyY2VzXFxbKFxcZCspXFxdLztcbiAgICBjb25zdCBkcm9wU291cmNlSW5kZXhzID0gbmV3IFNldChcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5tYXRjaChyZWdleCkpXG4gICAgICAubWFwKGtleSA9PiBrZXkubWF0Y2gocmVnZXgpWzFdKVxuICAgICk7XG4gICAgcmV0dXJuICFkcm9wU291cmNlSW5kZXhzLmhhcyhjdXJyZW50SW5kZXgpO1xuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3RwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxNYXAgPSB7fTtcbmNvbnN0IHByb21pc2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0UHJvbWlzZXMoc3RhdGUpIHtcbiAgaWYocHJvbWlzZU1hcFtzdGF0ZV0pIHJldHVybiBwcm9taXNlTWFwW3N0YXRlXTtcblxuICBjb25zdCBwcm9taXNlID0ge307XG4gIHByb21pc2VNYXBbc3RhdGVdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSkge1xuICBjb25zdCBwcm9taXNlcyA9IGdldFByb21pc2VzKHN0YXRlKTtcbiAgaWYocHJvbWlzZXNbaWRdKSByZXR1cm4gcHJvbWlzZXNbaWRdO1xuXG4gIGNvbnN0IHByb21pc2UgPSAkcS5kZWZlcigpO1xuICBwcm9taXNlc1tpZF0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKCkge1xuXG4gIHJldHVybiB7XG4gICAgYWRkTWFwcGluZyxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkTWFwcGluZyhzdGF0ZSwgZGVmKSB7XG4gICAgZGVmLnJlc29sdmUgPSB7IHBhcmVudCB9O1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IGRlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmVudCgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiAoXG4gICAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCB9KSA9PiBwYXJlbnQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlKCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGdldE1hcHBpbmcsXG4gICAgcmVzb2x2ZU1hcHBpbmcsXG4gICAgcmVtb3ZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICAvLyBIb2xkaW5nIG9uIHRvIHNjb3BlIHJlZmVyZW5jZXMgY3JlYXRlcyBtZW1vcnkgbGVha3NcbiAgZnVuY3Rpb24gcmVtb3ZlTWFwcGluZyhzdGF0ZSkge1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IG51bGw7XG4gICAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBGbGV4Rm9ybU1vZGFsTG9hZGVyKEZsZXhGb3JtTW9kYWwsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBGRk1vZGFsTG9hZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gRkZNb2RhbExvYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICBhY3RpdmF0ZSgpO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBGbGV4Rm9ybU1vZGFsXG4gICAgICAub3Blbih2bSlcbiAgICAgIC50aGVuKCh7IG1vZGFsLCBvcHRpb25zOiB7IG9uRGlzbWlzcywgb25BZnRlckRpc21pc3MgfSB9KSA9PiB7XG4gICAgICAgIHZtLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHZtLm1vZGFsLnJlc3VsdC5maW5hbGx5KGdvQmFjayk7XG5cbiAgICAgICAgaWYob25EaXNtaXNzKSB2bS5tb2RhbC5yZXN1bHQuY2F0Y2goKCkgPT4gb25EaXNtaXNzKCRzdGF0ZVBhcmFtcy5yZXN0UGFyYW1zKSk7XG4gICAgICAgIHZtLmRpc21pc3NFdmVudCA9ICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGRpc21pc3NNb2RhbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZighJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICRzdGF0ZS5nbygnXicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc21pc3NNb2RhbCgpIHtcbiAgICAvLyB1bmJpbmQgZXZlbnRcbiAgICB2bS5kaXNtaXNzRXZlbnQoKTtcbiAgICB2bS5tb2RhbC5vcGVuZWQudGhlbigoKSA9PlxuICAgICAgICB2bS5tb2RhbC5kaXNtaXNzKClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPCEtLSB3ZSBwcm9jZXNzIGRlZmF1bHRzIG91cnNlbHZlcywgaGVuY2Ugc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIC0tPlxuICAgICAgICA8bmctZm9ybVxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLW9wdGlvbnM9XCJ7IHNldFNjaGVtYURlZmF1bHRzOiBmYWxzZSB9XCJcbiAgICAgICAgICBzZi1zY2hlbWE9XCJ2bS5jb25maWcuc2NoZW1hLnNjaGVtYVwiXG4gICAgICAgICAgc2YtZm9ybT1cInZtLmZvcm1cIlxuICAgICAgICAgIHNmLW1vZGVsPVwidm0ubW9kZWxcIj5cbiAgICAgICAgPC9uZy1mb3JtPlxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XG4gICAgICAgIDxzZWN0aW9uIG5nLWlmPVwidm0uZGVidWdcIj5cbiAgICAgICAgICA8anNvbi1leHBsb3JlciBqc29uLWRhdGE9XCJ2bS5tb2RlbCB8fCAnLi4ubW9kZWwgbm90IGxvYWRlZCB5ZXQnXCIvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBjbkZsZXhGb3JtVGFnKCk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgdm0uc2VydmljZSA9IHVuZGVmaW5lZDtcbiAgdm0uZXZlbnRzID0gW107XG5cbiAgdm0uYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbiAgdm0uY2xlYW51cCA9IGNsZWFudXA7XG4gIHZtLnByb2Nlc3MgPSBwcm9jZXNzO1xuICB2bS5zaG93Rm9ybSA9IHNob3dGb3JtO1xuXG4gIHZtLmV2ZW50cy5wdXNoKCRzY29wZS4kd2F0Y2goKCkgPT4gdm0uY29uZmlnLnNjaGVtYSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgJHNjb3BlLnJlZnJlc2hBZGJvb2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdm0ubW9kZWxbJ3JlZnJlc2hBZGJvb2snXSA9ICF2bS5tb2RlbFsncmVmcmVzaEFkYm9vayddO1xuICB9XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGdldFNjb3BlOiB2bS5jb25maWcuZ2V0U2NvcGUgfHwgKCgpID0+ICRzY29wZSksXG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB2bS5jb25maWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcblxuICAgIGNuRmxleEZvcm1TZXJ2aWNlLmRlc3Ryb3lTZXJ2aWNlKHZtLnNlcnZpY2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNuRmxleEZvcm1IZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmSGVhZGVyQ29uZmlnJyxcbiAgICAgIHN1Ym1pdDogJyZmZlN1Ym1pdCcsXG4gICAgICBsb2FkT2Zmc2NyZWVuOiAnJmZmTG9hZE9mZnNjcmVlbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtSGVhZGVyLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLmxlYWRcIj57ezo6dm0udGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0udGl0bGUuaWNvblwiIGNsYXNzPVwie3t2bS50aXRsZS5pY29ufX1cIi8+XG4gICAgICAgICAgICB7e3ZtLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUuc3ViXCI+e3s6OnZtLnRpdGxlLnN1Yn19PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ZtLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0ucmV0dXJuU3R5bGUgPyB2bS5yZXR1cm5TdHlsZSA6ICdkZWZhdWx0LWRhcmsnXCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0ucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0ucmV0dXJuU3RhdGV9fVwiPlxuICAgICAgICAgICAgICB7e3ZtLnJldHVyblRleHQgfHwgJ0NhbmNlbCd9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0uY2xvc2VCdXR0b24uc3R5bGUgPyB2bS5jbG9zZUJ1dHRvbi5zdHlsZSA6ICdkZWZhdWx0LWRhcmsnfX1cIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmNsb3NlQnV0dG9uLmhhbmRsZXIoKVwiPlxuICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XCJidXR0b24gaW4gdm0uYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbikgfHwgdm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogb3B0aW9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cIm9wdGlvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgLy9hY3RpdmF0ZSgpO1xuICAvLyRzY29wZS4kb24oJyRkZXN0cm95JywgY2xlYW51cCk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy50aXRsZScsIGluaXRUaXRsZSwgdHJ1ZSk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy5hY3Rpb25Db25maWcnLCBpbml0QWN0aW9uQ29uZmlnLCB0cnVlKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGluaXRUaXRsZSgpIHtcbiAgICAoeyB0aXRsZTogdm0udGl0bGUgfSA9IHZtLmNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWN0aW9uQ29uZmlnKCkge1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgLy8gJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gICAgLy8gdGhpcyBjb21wb25lbnQgd2lsbCBvZnRlbiBiZSBzaWJsaW5ncyB0byB0aGUgZmxleCBmb3JtcyBvbmUsXG4gICAgLy8gc28gbmVlZCB0byBicm9hZGNhc3QgZnJvbSBzaGFyZWQgcGFyZW50Li4ueWVzIGl0J3MgdWdseVxuICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJGJyb2FkY2FzdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICBmdW5jdGlvbiBmZlZhbGlkYXRlVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmVmFsaWRhdGVUYWcoKTtcblxuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9