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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <input class="form-control"\n                 cn-percentage-format\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="number"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key && form.key[0]}}"\n                 name="{{form.key && form.key[0]}}"\n                 ng-model="$$value$$">\n           <div class="input-group-addon"\n                  ng-disabled="form.readonly"\n                  for="{{form.key && form.key[0]}}">%</div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
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
	CNFlexFormService.$inject = ["Api", "$parse", "cnFlexFormConfig", "cnFlexFormTypes", "sfPath", "$interpolate", "$timeout", "cnUtil", "$stateParams"];
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
	
	function CNFlexFormService(Api, $parse, cnFlexFormConfig, cnFlexFormTypes, sfPath, $interpolate, $timeout, cnUtil, $stateParams) {
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
	    skipDefaults: skipDefaults
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
	
	    if (schema.format === 'url' && !field.validationMessage) {
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
	                var result = $parse(from.get() + adjustment.math[1] + adjustment.adjuster.get())();
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
	      if (!_.isUndefined(curVal)) service.schema.params[key] = curVal;
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
	              service.params[key] = val;
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
	          service.params[key] = val;
	        }
	      }
	    });
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
	        return select.titleMap || service.schema.data[select.titleMapResolve];
	      };
	
	      select.onInit = function (val, form, event, setter) {
	        // make sure we use correct value
	        var modelValue = service.parseExpression(form.key, service.model);
	        if (event === 'tag-init') {
	          var newVal = getAllowedSelectValue(select, modelValue.get());
	          if (newVal !== undefined) setter(newVal);
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
	
	      if (Object.keys(schema.diff.data).length > 0) {
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
	
	      if (Object.keys(schema.diff.schema).length > 0) {
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
	
	      if (Object.keys(schema.diff.form).length > 0) {
	        service.scope.$broadcast('cnFlexFormDiff:form', schema.diff.form);
	        _.each(schema.diff.form, function (form, key) {
	
	          if (!keys.includes(key)) {
	            keys.push(key);
	          }
	
	          // don't want to override key when extending cached objects
	          //var key = form.key;
	          //delete form.key;
	
	          _.each(service.getFormsToProcess(key), function (copy) {
	            return copy && service.reprocessField(copy, form);
	          });
	        });
	
	        var cnFormElements = document.getElementsByClassName('cn-form');
	        var oldScrollPosition = cnFormElements && cnFormElements[0] ? cnFormElements[0].scrollTop : 0;
	
	        service.scope.$broadcast('schemaFormRedraw');
	
	        setTimeout(function () {
	          if (cnFormElements && cnFormElements[0]) {
	            cnFormElements[0].scrollTop = oldScrollPosition;
	          }
	        }, 1000);
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
	
	    // other logic in the service will add conition = 'true' to force
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
	    template: '\n        <div class="col-md-6">\n          <h5 ng-if="vm.title.lead">{{::vm.title.lead}}</h5>\n          <h1>\n            <i ng-show="vm.title.icon" class="{{vm.title.icon}}"/>\n            {{vm.title.main}}\n          </h1>\n          <h5 ng-if="vm.title.sub">{{::vm.title.sub}}</h5>\n        </div>\n        <div class="{{vm.buttonContainerClass || \'page-action-btns\'}}">\n          <div class="btn-options"\n               ng-mouseover="vm.loadOffscreen()">\n            <a class="btn btn-{{vm.returnStyle ? vm.returnStyle : \'default-dark\'"\n               ng-if="vm.returnState"\n               ui-sref="{{vm.returnState}}">\n              {{vm.returnText || \'Cancel\'}}\n            </a>\n            <a class="btn btn-{{vm.closeButton.style ? vm.closeButton.style : \'default-dark\'}}"\n               ng-if="vm.closeButton"\n               ng-click="vm.closeButton.handler()">\n               Cancel\n            </a>\n            <span ng-repeat="button in vm.actions">\n              <span ng-class="{\'btn-group\': button.options}">\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}}"\n                   ng-disabled="vm.isDisabled(button)"\n                   ng-click="vm.isDisabled(button) || vm.submit({handler: button.handler})"\n                   uib-tooltip="{{button.helptext}}"\n                   uib-tooltip-placement="bottom"\n                   ng-bind-html="button.text || \'Save\'">\n                </a>\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}} dropdown-toggle"\n                        ng-disabled="vm.isDisabled(button)"\n                        ng-show="button.options"\n                        data-toggle="dropdown">\n                  <span class="caret"></span>\n                </a>\n                <ul class="dropdown-menu" ng-if="button.options">\n                  <li ng-repeat="option in button.options"\n                      ng-disabled="vm.isDisabled(option)">\n                    <a ng-click="vm.isDisabled(option) || vm.submit({handler: option.handler})"\n                       ng-bind-html="option.text">\n                    </a>\n                  </li>\n                </ul>\n              </span>\n            </span>\n          </div>\n          <p class="data-updated-at text-right"\n             id="data-updated-at"\n             ng-hide="vm.config.noData">\n            <a ng-click="vm.updateData()">Update Data</a>\n          </p>\n        </div>'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYjExNGEyN2Q2NzZkYjZjYmM3NSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc1VybCIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzU2NoZWR1bGUiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc2V0VXBkYXRlcyIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJnZXRTZXJ2aWNlIiwiZm4iLCJmaW5kIiwiZGVzdHJveVNlcnZpY2UiLCJlbXB0eSIsInJlbW92ZSIsInMiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJleHRlbmQiLCJnZXRTY29wZSIsInNjb3BlIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsInVwZGF0ZVNjaGVtYSIsImdldFNjaGVtYUZvcm0iLCJnZXRQYXJhbU92ZXJyaWRlcyIsIm5vb3AiLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsImFycmF5SW5kZXgiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaGFzIiwiZXF1YWxzIiwiaXNUcnVseUVtcHR5Iiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJwb3MiLCJodG1sQ2xhc3MiLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJnZXRPZ0tleXMiLCJyZWplY3QiLCJrZXlzIiwiaXNEZWZpbmVkIiwiX29nS2V5cyIsImRlc2NyaXB0aW9uIiwic2hvd0NsZWFyQWxsIiwiJGJyb2FkY2FzdCIsImdldERvdEtleSIsImVycm9yIiwiaXNFbXB0eSIsIm5nTW9kZWxPcHRpb25zIiwiYWxsb3dJbnZhbGlkIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZGVwdGgiLCJwYXJzZSIsInByb3BlcnRpZXMiLCJzaGlmdCIsImV4cCIsIndhdGNoYWJsZXMiLCJuZXN0ZWQiLCJtYXRjaE5lc3RlZEV4cHJlc3Npb24iLCJyZXBsYWNlU3RyIiwicmVwbGFjZSIsInJlc29sdmUiLCJkYXRhUHJvcCIsImZpZWxkUHJvcCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsInJlc3VsdCIsImVpdGhlcnMiLCJzcGxpdCIsIngiLCJhbGwiLCJhY2MiLCJsYXN0IiwidW5kZWZpbmVkIiwic2tpcFByb3BIYW5kbGVycyIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsInZhbCIsInZhbDEiLCJmaWVsZEtleSIsInJlZ2lzdGVyIiwiY29uZGl0aW9uYWxzIiwicHJldiIsIm1hcCIsInBhdGgiLCJyZXNvbHV0aW9uIiwiY3VyIiwiYWRqdXN0bWVudCIsImRhdGUiLCJ1bml0cyIsInRyaW0iLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJjb25zb2xlIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJjdXJWYWwiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsInN0cmlwSW5kZXhlcyIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiZ2VuZXJpY0tleSIsImluZGV4IiwiJGVtaXQiLCJsaW5rIiwic3BsaWNlIiwiY29waWVzIiwicGx1Y2siLCJrZXlTdGFydCIsImZpbHRlciIsIndhcm4iLCJtYXRjaEludFN0ckluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZWQiLCJwYXJzZWQiLCJrZXlWYWwiLCJpc1N0ciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsIm5vQ29uc3RydWN0aW9uIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsInNpbGVudCIsImluZGV4T2YiLCJnZXRBcnJheUluZGV4Iiwia3MiLCJrIiwic2tpcEtleXMiLCJpbmRleGVkS2V5IiwiY2hpbGRLZXlzIiwiaW5kZXhlZENoaWxkS2V5IiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsImQiLCJwYXJzZUludCIsInN0YXJ0T2YiLCJ2aWV3Rm9ybWF0dGVyIiwiZGF0ZUZvcm1hdCIsInZpZXdQYXJzZXIiLCJnZXRTZWxlY3RWYWxQcm9wIiwic2VsZWN0IiwidmFsdWVQcm9wZXJ0eSIsImdldEFsbG93ZWRTZWxlY3RWYWx1ZSIsImdldFRpdGxlTWFwIiwidmFsUHJvcCIsIm9taXRIYXNoS2V5IiwiaWRlbnRpdHkiLCJwYXJ0aWFsUmlnaHQiLCJmaW5kRm4iLCJjb21wb3NlIiwicGFydGlhbCIsInN0YXJ0RW1wdHkiLCJvbkluaXQiLCJzZXR0ZXIiLCJuZXdWYWwiLCJxdWVyeVBhcmFtcyIsInBhcmFtc0tleXMiLCJzaG93Q2xlYXJDYWNoZSIsInJlZnJlc2hEYXRhIiwic2luZ2xlUXVlcnkiLCJtaW5Mb29rdXAiLCJ0aXRsZVF1ZXJ5IiwicSIsInZhcmlhYmxlcyIsInNraXBGaWx0ZXJpbmciLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0IiwiZGVzdHJveVN0cmF0ZWd5Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsImxpbmtNb2RlbCIsImZlYXR1cmVLZXkiLCJzaG93RmVhdHVyZSIsImZlYXR1cmVzIiwic2hvdyIsInNlbGVjdEtleSIsImVsZW0iLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0TW9kZWwiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwiaXNOdWxsIiwidGhlbiIsIm9uUHJvY2Vzc0RpZmYiLCJPYmplY3QiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImN1cktleXMiLCJjb21wYWN0IiwicHJldlNjaGVtYSIsIm5ld1NjaGVtYSIsInJlYWRvbmx5IiwiY25Gb3JtRWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbGRTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvcCIsInNldFRpbWVvdXQiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsImxvZyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNm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WCxRQUE5QixFQUF3QztBQUN0Q3hELFlBQU85TCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU9vUCxRQUFRRyxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVM5aUIsS0FBVCxFQUFnQjtBQUN2RTtBQUNBMmlCLGVBQVFJLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUosZUFBUUksWUFBUixDQUFxQixTQUFyQixFQUFnQy9pQixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOzttQkFFY3lpQixVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjExNGEyN2Q2NzZkYjZjYmM3NSIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMgPSB7fSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXyh7IC4uLiRzdGF0ZVBhcmFtcywgLi4ub3ZlcnJpZGVzIH0pXG4gICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgLm9taXQodiA9PiAoXy5pc1VuZGVmaW5lZCh2KSB8fCB2ID09PSBudWxsKSlcbiAgICAgICAgLnZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC50eXBlID09PSAndXJsJyxcbiAgICB0eXBlOiAnY24tdXJsJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NyZWF0aXZlaW1hZ2UnLFxuICAgIHR5cGU6ICdjbi1jcmVhdGl2ZWltYWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnZmFjZWJvb2t2aWRlbycsXG4gICAgdHlwZTogJ2NuLWZhY2Vib29rdmlkZW8nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnc2NoZWR1bGUnLFxuICAgIHR5cGU6ICdjbi1zY2hlZHVsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJyxcbiAgICB0eXBlOiAnY24tbnVtYmVyJ1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsImZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1udW1iZXInLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXVybCcsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZScsXG4gICAgJ2NuLXNjaGVkdWxlJyxcbiAgICAnY24tZmFjZWJvb2t2aWRlbydcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICBuZy1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBkZWZhdWx0LXRpbWU9XCJmb3JtLmRlZmF1bHRUaW1lXCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0ubWluSXRlbXMgfHwgZm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0ubWF4SXRlbXMgfHwgZm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgKGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDApfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIGJ1bGstc2luZ2xlLXJlcXVlc3Q9XCJ7e2Zvcm0uYnVsa1NpbmdsZVJlcXVlc3R9fVwiXG4gICAgICAgICAgc29ydC1maWx0ZXJlZC1yZXN1bHRzPVwie3soZm9ybS50aXRsZU1hcFJlc29sdmUgfHwgZm9ybS50aXRsZU1hcCkgJiYgIWZvcm0udGl0bGVNYXBRdWVyeX19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1jYWNoZT1cInt7Zm9ybS5zaG93Q2xlYXJDYWNoZX19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSwgb3B0aW9ucylcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0uc2tpcEZpbHRlcmluZ319XCJcbiAgICAgICAgICAgIHNpbmdsZS1xdWVyeT1cInt7Zm9ybS5zaW5nbGVRdWVyeX19XCJcbiAgICAgICAgICAgIGRlYm91bmNlLWRlbGF5PVwie3tmb3JtLmRlYm91bmNlRGVsYXl9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cH19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgc2YtYXJyYXk9XCJmb3JtXCI+XG4gICAgICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICAgIG5nLWlmPVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cImRlbGV0ZUZyb21BcnJheSgkaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvcHlXaXRoSW5kZXgoJGluZGV4KVwiLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW51bWJlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tbnVtYmVyXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdXJsLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9cIlxuICAgICAgICAgICAgICAgY24tdXJsLWZvcm1hdFxuICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzIHx8IGl0ZW0uaWNvblBhdGhcIj5cbiAgICAgICAgICAgICAgIDxpIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIiBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICAgIDxpbWcgbmctaWY9XCJpdGVtLmljb25QYXRoXCIgY2xhc3M9XCJjdXN0b21cIiBuZy1zcmM9XCJ7e2l0ZW0uaWNvblBhdGh9fVwiLz5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDAsICdub3RpdGxlJzogZm9ybS5ub3RpdGxlIHx8ICFmb3JtLnRpdGxlfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWhpZGU9XCJmb3JtLm5vdGl0bGVcIlxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXRleHQtYnV0dG9uPVwiZm9ybS50ZXh0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWltYWdlLXByZXZpZXdzPVwiZm9ybS5kYXRhLmltYWdlUHJldmlld3NcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWtleT1cImZvcm0ua2V5ICYmIGZvcm0ua2V5WzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNyZWF0aXZlaW1hZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1jcmVhdGl2ZS1pbWFnZSBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1uZy1tb2RlbC1rZXk9XCJmb3JtLm5nTW9kZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2NuLWNyZWF0aXZlLWltYWdlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXNjaGVkdWxlLmh0bWwnLFxuICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7IGZvcm0uaHRtbENsYXNzIH19XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCkgfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7eyBmb3JtLmtleS5qb2luKCcuJykgfX1cIj5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxjbi1zY2hlZHVsZSBmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2NuLXNjaGVkdWxlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZhY2Vib29rdmlkZW8uaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1mYWNlYm9vay12aWRlbyBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi12aWRlby1rZXk9XCJmb3JtLnZpZGVvS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi10aHVtYm5haWwta2V5PVwiZm9ybS50aHVtYm5haWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWltYWdlLWlkLWtleT1cImZvcm0uaW1hZ2VJZEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY24tZmFjZWJvb2stdmlkZW8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1udW1iZXInOiAncHJvY2Vzc051bWJlcicsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi11cmwnOiAncHJvY2Vzc1VybCcsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3JlYXRpdmVpbWFnZSc6ICdwcm9jZXNzQ3JlYXRpdmVJbWFnZScsXG4gICdjbi1mYWNlYm9va3ZpZGVvJzogJ3Byb2Nlc3NGYWNlYm9va1ZpZGVvJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknLFxuICAnY24tc2NoZWR1bGUnOiAncHJvY2Vzc1NjaGVkdWxlJ1xufTtcblxuLy8gaGFuZGxlcnMgdGhhdCBkb24ndCBydW4gb24gc2Vjb25kUGFzcyBhcmUgb25lcyB0aGF0IHNob3VsZG4ndCBldmVyIGNoYW5nZVxuLy8gYW5kIHdlIHdhbnQgdG8gYXZvaWQgY29tcG91bmRpbmcgdGhlaXIgZWZmZWN0c1xuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWxlY3REaXNwbGF5KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBmaWVsZC53YXRjaCAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKVxufSwge1xuICBwcm9wOiAndHlwZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAndXBkYXRlU2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZClcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtc1xuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlbGV0ZUFycmF5Q29waWVzRm9yLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0Rm9ybXNUb1Byb2Nlc3MsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5jcmVtZW50VXBkYXRlcyxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUFsbCxcbiAgICBwYXJzZUFueSxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NDcmVhdGl2ZUltYWdlLFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGYWNlYm9va1ZpZGVvLFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NGaWVsZFdhdGNoLFxuICAgIHByb2Nlc3NDb21wb25lbnQsXG4gICAgcHJvY2Vzc0NvbmRpdGlvbmFsLFxuICAgIHByb2Nlc3NDdXJyZW5jeSxcbiAgICBwcm9jZXNzTnVtYmVyLFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NVcmwsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1NjaGVkdWxlLFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNldFVwZGF0ZXMsXG4gICAgcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTZXJ2aWNlKGZuKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoZm4pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgIF8uZW1wdHkoc2VydmljZSk7XG4gICAgICBfLnJlbW92ZShzZXJ2aWNlcywgKHMpID0+IHMgPT09IHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyA/IGNvbmZpZy5nZXRQYXJhbXMoKSA6IHt9O1xuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UsIGRlc3Ryb3lTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmdldFNjb3BlKSB7XG4gICAgICBzZXJ2aWNlLnNjb3BlID0gY29uZmlnLmdldFNjb3BlKCk7XG4gICAgfVxuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gICAgc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcyA9IGNvbmZpZy5nZXRQYXJhbXMgfHwgXy5ub29wO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmllbGQuY29uZGl0aW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSByZXBsYWNlQXJyYXlJbmRleChmaWVsZC5jb25kaXRpb24sIGZpZWxkLmFycmF5SW5kZXggfHwga2V5KTtcbiAgICAgIGlmKCFzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ2NuLXVybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcblxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuICAgIGxldCBmaXJzdCwgbmV4dDtcblxuICAgIHdoaWxlKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQW55KGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5maW5kKGVpdGhlcnMsIHggPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQWxsKGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5yZWR1Y2UoYWxsLCAoYWNjLCB4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBhY2MucHVzaCh2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBhbGwubGVuZ3RoID09PSBtYXRjaC5sZW5ndGggPyBfLmxhc3QobWF0Y2gpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gZXhwLmluY2x1ZGVzKCcgfHwgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFueShleHApIDogZXhwLmluY2x1ZGVzKCcgJiYgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFsbChleHApIDogc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuICAgIGNvbnN0IHZhbDEgPSBmaWVsZFByb3AgPT09ICdjb25kaXRpb24nID8gdmFsICsgJycgOiB2YWw7XG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGRQcm9wLCBmaWVsZCkuc2V0KHZhbDEpO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjtcbiAgICAgICAgaWYoXy5pc1N0cmluZyhmaWVsZC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbiBpc24ndCBhbHJlYWR5IHdyYXBwZWQgaW4gcGFyZW5zLCB3cmFwIGl0XG4gICAgICAgICAgY29uZGl0aW9uID0gL15cXCguKlxcKSQvLnRlc3QoZmllbGQuY29uZGl0aW9uKSA/XG4gICAgICAgICAgICBmaWVsZC5jb25kaXRpb24gOlxuICAgICAgICAgICAgYCgke2ZpZWxkLmNvbmRpdGlvbn0pYDtcbiAgICAgICAgfVxuICAgICAgICBpZihfLmlzU3RyaW5nKHdhdGNoLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb24gP1xuICAgICAgICAgICAgYCR7Y29uZGl0aW9ufSAmJiAke3dhdGNoLmNvbmRpdGlvbn1gIDpcbiAgICAgICAgICAgIHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSAoZGF5c3xob3VycykvKTtcblxuICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0ge1xuICAgICAgICAgICAgICB2YWw6IGFkanVzdG1lbnQuZGF0ZVsxXSxcbiAgICAgICAgICAgICAgdW5pdHM6IGFkanVzdG1lbnQuZGF0ZVsyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLnZhbCwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgaWYoXy5pc1N0cmluZyhjdXJDb25kaXRpb24pICYmIGN1ckNvbmRpdGlvbi5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYGFycmF5SW5kZXggY291bGQgbm90IGJlIHJlcGFsY2VkIGZyb20gZXhwcmVzc2lvbiAnJHtjdXJDb25kaXRpb259J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKGFkanVzdG1lbnQuZGF0ZS52YWwsIGFkanVzdG1lbnQuZGF0ZS51bml0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gX1thZGp1c3RtZW50Lm9wZXJhdG9yXShmcm9tLmdldCgpLCBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBldmFsKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJHBhcnNlKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKSgpO1xuICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYSB8fCBmaWVsZC5pdGVtcyAmJiAoZmllbGQuaXRlbXNbMF0uc2NoZW1hIHx8IChmaWVsZC5pdGVtc1swXS5pdGVtcyAmJiBmaWVsZC5pdGVtc1swXS5pdGVtc1swXS5zY2hlbWEpKTtcbiAgICAgICAgICAgICAgICBpZihmaWVsZC50eXBlID09PSAnY24tY3VycmVuY3knKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcCA9IHNjaGVtYSAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY3VycmVuY3ktZG9sbGFycycgPyAyIDogMDtcblxuICAgICAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5mbG9vcihyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmNlaWwocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLnJvdW5kKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5saXN0ZW5lcnNbdXBkYXRlLnBhdGgoKS5rZXldLnByZXYgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdLnRyaWdnZXIgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQocmVzdWx0IHx8IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQoZnJvbS5nZXQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSwgd2F0Y2guaW5pdGlhbGl6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICAvLyBieSB0aGlzIHBvaW50IGRlZmF1bHRzIHNob3VsZCBiZSBwcm9jZXNzZWQgc28gd2UgY2FuIGdldCB2YWx1ZSBkaXJlY3RseSBmcm9tIG1vZGVsXG4gICAgICBjb25zdCBjdXJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyVmFsKSkgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJWYWw7XG4gICAgfVxuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgb25BcnJheSA9IChjdXIsIHByZXYsIHJlb3JkZXIpID0+IHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dYDtcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIChmaWVsZCwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IGAke2FycktleX0ubGVuZ3RoYDtcbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSkge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtvbkFycmF5XSxcbiAgICAgICAgcHJldjogYXJyVmFsID8gYXJyVmFsLmxlbmd0aCA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckhhbmRsZXJzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgZGVsZXRlIHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9IHNlcnZpY2Uuc2NvcGUuJHdhdGNoKFxuICAgICAgKCkgPT4gc2VydmljZS5tb2RlbCxcbiAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJlxuICAgICAgICAgICAgIWlzSW5pdEFycmF5ICYmXG4gICAgICAgICAgICB2YWwgIT09IG51bGwvKiAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKHZhbCwgc2VydmljZS5nZXREZWZhdWx0KGtleSkpKi8pIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgIHNlcnZpY2UuaW5jcmVtZW50VXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmKF8uaXNGdW5jdGlvbihzZXJ2aWNlLnJlZnJlc2hTY2hlbWEpKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2NoZW1hUGFyYW1zKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyLCBrZXkpIHtcbiAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcEluZGV4ZXMoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBcnJheUNvcHlXYXRjaCgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZm9ybSB9ID0gc2NvcGU7XG4gICAgICBpZighZm9ybS5rZXkpIHtcbiAgICAgICAgZm9ybS5jYWNoZUtleSA9IGAke2Zvcm0udHlwZX0tJHtfLnVuaXF1ZUlkKCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IGZvcm0uY2FjaGVLZXkgfHwgc2VydmljZS5nZXRLZXkoZm9ybS5rZXkpO1xuXG4gICAgICBpZihfLmlzTnVtYmVyKHNjb3BlLmFycmF5SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzY29wZS5hcnJheUluZGV4O1xuICAgICAgICBmb3JtLmFycmF5SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZighc2VydmljZS5nZXRBcnJheUNvcHkoZ2VuZXJpY0tleSwgaW5kZXgpKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmb3JtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmb3JtLmNvbmRpdGlvbikgZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIC8vIGVsc2UgaWYgKGZvcm0uY29uZGl0aW9uLmluY2x1ZGVzKFwiYXJyYXlJbmRleFwiKSkge1xuICAgICAgICAvLyAgIGZvcm0uY29uZGl0aW9uID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChmb3JtLmNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZVNjb3BlJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBzZXJ2aWNlLmRlbGV0ZUFycmF5Q29waWVzRm9yKGtleSwgaW5kZXgpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLmZvcm0ubGluaywgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgc2VydmljZS5kZWxldGVBcnJheUNvcGllc0ZvcihzY29wZS5mb3JtLmxpbmssIGluZGV4KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBcnJheUNvcHkoZm9ybSwga2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFpbmRleCB8fCBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICBpZighc2VydmljZS5hcnJheUNvcGllc1trZXldKSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0gPSBbXTtcbiAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV1baW5kZXhdID0gZm9ybTtcbiAgICAvL3NlcnZpY2UuYXJyYXlDb3BpZXNba2V5XS5wdXNoKGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3B5KGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gICAgcmV0dXJuIGNvcGllcyAmJiBjb3BpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXMoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ucGx1Y2soc2VydmljZS5nZXRBcnJheVNjb3BlcyhrZXkpLCAnZm9ybScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXlTdGFydCArPSAnW10nO1xuXG4gICAgcmV0dXJuIF8uZmlsdGVyKHNlcnZpY2UuYXJyYXlDb3BpZXMsIChjb3B5LCBrZXkpID0+IGtleS5pbmNsdWRlcyhrZXlTdGFydCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQXJyYXlDb3BpZXNGb3Ioa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5KTtcbiAgICBfLmVhY2goY29waWVzLCBsaXN0ID0+IGxpc3QgJiYgbGlzdC5zcGxpY2UoaW5kZXgsIDEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZighXy5pc1N0cmluZyhleHApICYmICFfLmlzQXJyYXkoZXhwKSkge1xuICAgICAgcmV0dXJuIHsgZ2V0OiAoKSA9PiBleHAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnW15cXCddKid8XCJbXlxcXCJdKlwifC0/WzAtOS5dK3xcXFtdfFxce30pJC8udGVzdChleHApKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighZXhwKSByZXR1cm4gZXhwO1xuICAgICAgICAgIGNvbnN0IGlzU3RyID0gZXhwLm1hdGNoKC9cIihbXlxcXCJdKilcIi8pIHx8IGV4cC5tYXRjaCgvJyhbXlxcJ10qKScvKTtcbiAgICAgICAgICBpZihpc1N0cikgcmV0dXJuIGlzU3RyWzFdO1xuICAgICAgICAgIHN3aXRjaChleHApIHtcbiAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzogcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnW10nOiByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlICd7fSc6IHJldHVybiB7fTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBwYXJzZUZsb2F0KGV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4cCA9IHNlcnZpY2UuZ2V0S2V5KGV4cCk7XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXihtb2RlbFxcLik/KFxcUyspJC8pO1xuXG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtwYXRoLnNoaWZ0KCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICYmIHN0YXJ0W3BhdGhbMF1dO1xuICAgICAgfSxcblxuICAgICAgZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKG5vQ29uc3RydWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoL15cXGQ/JC8udGVzdChwYXRoWzBdKSkge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9iajogc3RhcnQsXG4gICAgICAgICAga2V5OiBwYXRoWzBdLFxuICAgICAgICAgIHBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzKSxcbiAgICAgICAgICBmdWxsUGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MuY29uY2F0KHBhdGguc2xpY2UoMCwgMSkpKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgc2V0KHZhbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBpZih2YWwgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uOiB0cnVlIH0pIHx8IHt9O1xuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLmRlZmF1bHRzW3Jlc29sdmVkLnJlcGxhY2UoJ21vZGVsLicsICcnKV07XG4gICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIHNlcnZpY2Uuc2lsZW5jZUxpc3RlbmVycyhyZXNvbHZlZCwgZGVwdGgpO1xuICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRzKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpbGVuY2VMaXN0ZW5lcnMoa2V5U3RhcnQsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgaWYoa2V5LmluZGV4T2Yoa2V5U3RhcnQpID09PSAwKSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBkZXB0aCkuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBjb25zdCBrZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrcykpO1xuICAgIGxldCBza2lwS2V5cyA9IFtdO1xuICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaW5kZXgpO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa2V5KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfLmVhY2goY2hpbGRLZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgc2tpcEtleXMucHVzaChrKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZWRDaGlsZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrLCBbaW5kZXgsIGldKTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZENoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXNraXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24sIHNlY29uZFBhc3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgd2UncmUgaGVyZSBiZWNhdXNlIGEgcGFyZW50J3Mgc2NvcGUgd2FzIGVtaXR0ZWQsXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47XG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NOdW1iZXIoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLW51bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVXJsKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi11cmwnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGYWNlYm9va1ZpZGVvKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tZmFjZWJvb2t2aWRlbyc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3JlYXRpdmVJbWFnZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNyZWF0aXZlaW1hZ2UnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgbGV0IG9taXRIYXNoS2V5ID0gdmFsUHJvcCA/ICBfLmlkZW50aXR5IDogXy5wYXJ0aWFsUmlnaHQoXy5vbWl0LCBcIiQkaGFzaEtleVwiKVxuICAgIGxldCBmaW5kRm4gPSB2YWxQcm9wID9cbiAgICAgIF8uY29tcG9zZShfLnBhcnRpYWwoXy5maW5kLCB0aXRsZU1hcCksIF8ucGFydGlhbChfLnNldCwge30sIHZhbFByb3ApLCBvbWl0SGFzaEtleSkgOlxuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgb21pdEhhc2hLZXkpXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcbiAgICAgIHJldHVybiB2YWwubWFwKGZpbmRGbikuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRGbih2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlZHVsZShmaWVsZCkge1xuICAgICAgZmllbGQuc3RhcnRFbXB0eSA9IHRydWU7XG4gICAgICBmaWVsZC50eXBlID0gJ2NuLXNjaGVkdWxlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXM7XG4gICAgICBjb25zdCBwYXJhbXNLZXlzID0gXy5rZXlzKHF1ZXJ5UGFyYW1zKTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgc2VsZWN0LnNob3dDbGVhckNhY2hlID0gISFzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXMucmVmcmVzaERhdGE7XG4gICAgICBzZWxlY3Quc2luZ2xlUXVlcnkgPSBzZWxlY3QubWluTG9va3VwID09PSAwO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSAocSwgeyByZWZyZXNoRGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9XG4gICAgICAgICAgXyhwYXJhbXNLZXlzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncScpIHtcbiAgICAgICAgICAgICAgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3JlZnJlc2hEYXRhJykge1xuICAgICAgICAgICAgICBpZiAocmVmcmVzaERhdGEpIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChxdWVyeVBhcmFtc1trZXldLCBzZWxlY3QuYXJyYXlJbmRleCk7XG4gICAgICAgICAgICAgIGxldCB2YWwgPSBudWxsLCB2YXJpYWJsZXMgPSBleHAuc3BsaXQoJ3x8Jyk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGV4cCBvZiB2YXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHAudHJpbSgpKS5nZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gcGFyYW1zS2V5cy5sZW5ndGggPyAzIDogMDtcbiAgICAgIGlmKCFfLmhhcyhzZWxlY3QsICdza2lwRmlsdGVyaW5nJykpIHNlbGVjdC5za2lwRmlsdGVyaW5nID0gISFzZWxlY3QubWluTG9va3VwO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoIV8uaXNOdW1iZXIoc2VsZWN0Lm1pbkxvb2t1cCkpIHNlbGVjdC5taW5Mb29rdXAgPSAwO1xuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTtcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCB8fCAoXy5pc0FycmF5KHZhbGlkKSAmJiBfLmlzRW1wdHkodmFsaWQpKSkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gTmVlZGVkIGZvciBiYXRjaGZvcm0gdG8gY2hlY2sgcmVjdXJzaXZlbHlcbiAgICBsZXQgc2VsZWN0RmllbGQgPSBudWxsO1xuICAgIGZvciAobGV0IGl0ZW0gb2Ygc2VsZWN0RGlzcGxheS5pdGVtcykge1xuICAgICAgaWYgKGl0ZW0uc2VsZWN0RmllbGQpIHtcbiAgICAgICAgc2VsZWN0RmllbGQgPSBpdGVtO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdEZpZWxkID0gXy5maW5kKGl0ZW0uaXRlbXMsICdzZWxlY3RGaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdEZpZWxkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJhbmQtYWlkIGJlY2F1c2UgdGhpcyBpcyBiZWluZyBzZXQgYXMgYW4gb2JqZWN0IGluc3RlYWQgb2YgYXJyYXkgc29td2hlcmVcbiAgICAvLyBkZWVwIGluIHRoZSBhbmd1bGFyIG9yIGFuZ3VsYXItc2NoZW1hLWZvcm0gbmV0aGVyLXJlZ2lvbnNcbiAgICBjb25zdCBsaW5rTW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmxpbmssIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKCFsaW5rTW9kZWwuZ2V0KCkpIGxpbmtNb2RlbC5zZXQoW10pO1xuXG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaWYoaXRlbS5zZWxlY3RGaWVsZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBrZXkgPSBfLmlzQXJyYXkoaXRlbS5rZXkpID8gaXRlbS5rZXkgOiBPYmplY3RQYXRoLnBhcnNlKGl0ZW0ua2V5KTtcbiAgICAgIGNvbnN0IGZlYXR1cmVLZXkgPSBfLmxhc3Qoa2V5KTtcblxuICAgICAgaXRlbS5zaG93RmVhdHVyZSA9IGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICAgICAgICBzZXJ2aWNlXG4gICAgICAgICAgICAgIC5wYXJzZUV4cHJlc3Npb24oYG1vZGVsLiR7c2VsZWN0RGlzcGxheS5saW5rfVske2luZGV4fV0uZmVhdHVyZXNgKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoYXJyYXlJbmRleClgO1xuICAgICAgaXRlbS5jb25kaXRpb24gPSBpdGVtLmNvbmRpdGlvbiA/XG4gICAgICAgIGAoJHtpdGVtLmNvbmRpdGlvbn0pICYmICR7Y29uZGl0aW9ufWAgOiBjb25kaXRpb247XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBpZighc2VsZWN0TW9kZWwuZ2V0KCkpIHNlbGVjdE1vZGVsLnNldChbXSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNjaGVtYVJlZnJlc2gocmVmcmVzaCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UodXBkYXRlU2NoZW1hID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgLi4uY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhzZXJ2aWNlLmdldFBhcmFtT3ZlcnJpZGVzKCkpLFxuICAgICAgICAuLi5zZXJ2aWNlLnBhcmFtc1xuICAgICAgfTtcbiAgICAgIGxldCBkaWZmID0gXy5vbWl0KGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKSwgJ3VwZGF0ZXMnKTtcbiAgICAgIGxldCBrZXlzO1xuXG4gICAgICBpZighXy5pc0VtcHR5KGRpZmYpIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgWyd1cGRhdGVTY2hlbWEnLCAndXBkYXRlcyddKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtcyA9IHNjaGVtYS5wYXJhbXM7XG4gICAgICBpZiAoY25GbGV4Rm9ybUNvbmZpZy5vblByb2Nlc3NEaWZmKSB7XG4gICAgICAgIGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZihzY2hlbWEpXG4gICAgICB9XG5cbiAgICAgIGlmKE9iamVjdC5rZXlzKHNjaGVtYS5kaWZmLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgc2NoZW1hLmRpZmYuZGF0YSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5kYXRhLCAoZGF0YSwgcHJvcCkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5kYXRhICYmICFfLmlzRW1wdHkoc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhKSAmJiAhZGF0YS5yZXNldCkge1xuICAgICAgICAgICAgZGF0YS5kYXRhID0gc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhLmNvbmNhdChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdID0gZGF0YTtcbiAgICAgICAgICBpZihzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdLCAocmVnaXN0ZXJzKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVycy5mb3JFYWNoKHJlZ2lzdGVyID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUocmVnaXN0ZXIuZmllbGQsIHJlZ2lzdGVyLnByb3AsIHJlZ2lzdGVyLmV4cCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5cyA9IFtdO1xuXG4gICAgICBpZihPYmplY3Qua2V5cyhzY2hlbWEuZGlmZi5zY2hlbWEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cyk7XG4gICAgICAgICAgY29uc3QgY3VyS2V5cyA9IF8uZmlsdGVyKGtleXMsIGsgPT4gXy5zdGFydHNXaXRoKGssIGtleSkpO1xuICAgICAgICAgIF8uZWFjaChjdXJLZXlzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybXMgPSBfLmNvbXBhY3QoW1xuICAgICAgICAgICAgICBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSxcbiAgICAgICAgICAgICAgLi4uKHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KSB8fCBbXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBfLmVhY2goZm9ybXMsIGZvcm0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2U2NoZW1hID0gZm9ybS5zY2hlbWE7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSAgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXksIHsgW3NjaGVtYS5rZXldOiBzY2hlbWEgfSk7XG4gICAgICAgICAgICAgIGlmKHByZXZTY2hlbWEucmVhZG9ubHkgJiYgIW5ld1NjaGVtYS5yZWFkb25seSkgZm9ybS5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKE9iamVjdC5rZXlzKHNjaGVtYS5kaWZmLmZvcm0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCAoZm9ybSwga2V5KSA9PiB7XG5cbiAgICAgICAgICBpZigha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjb3B5LCBmb3JtKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNuRm9ybUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY24tZm9ybScpO1xuICAgICAgICBjb25zdCBvbGRTY3JvbGxQb3NpdGlvbiA9IGNuRm9ybUVsZW1lbnRzICYmIGNuRm9ybUVsZW1lbnRzWzBdID8gY25Gb3JtRWxlbWVudHNbMF0uc2Nyb2xsVG9wIDogMDtcblxuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1SZWRyYXcnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoY25Gb3JtRWxlbWVudHMgJiYgY25Gb3JtRWxlbWVudHNbMF0pIHtcbiAgICAgICAgICAgIGNuRm9ybUVsZW1lbnRzWzBdLnNjcm9sbFRvcCA9IG9sZFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UucmVzZXRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfLmdldChzZXJ2aWNlLCAnZXJyb3JzJykpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXFsoXFxkKilcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBrZXlDb3B5O1xuICAgIGlmICghXy5pc0FycmF5KGluZGV4KSkge1xuICAgICAgaW5kZXggPSBbaW5kZXhdO1xuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleC5sZW5ndGggJiYga2V5Q29weS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICBsZXQgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4LnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgc2VydmljZS51cGRhdGVzID0gMDtcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLm9wZW5lZC50aGVuKCgpID0+XG4gICAgICAgIHZtLm1vZGFsLmRpc21pc3MoKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRmxleEZvcm1Nb2RhbChjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlLCAkdWliTW9kYWwsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7IG9wZW4gfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxuICAgICAgICA8IS0tIHdlIHByb2Nlc3MgZGVmYXVsdHMgb3Vyc2VsdmVzLCBoZW5jZSBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgLS0+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytb3B0aW9ucz1cInsgc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIH1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGNuRmxleEZvcm1UYWcoKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaCgoKSA9PiB2bS5jb25maWcuc2NoZW1hLCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZ2V0U2NvcGU6IHZtLmNvbmZpZy5nZXRTY29wZSB8fCAoKCkgPT4gJHNjb3BlKSxcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHZtLmNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuXG4gICAgY25GbGV4Rm9ybVNlcnZpY2UuZGVzdHJveVNlcnZpY2Uodm0uc2VydmljZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUhlYWRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZIZWFkZXJDb25maWcnLFxuICAgICAgc3VibWl0OiAnJmZmU3VibWl0JyxcbiAgICAgIGxvYWRPZmZzY3JlZW46ICcmZmZMb2FkT2Zmc2NyZWVuJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm1IZWFkZXIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUubGVhZFwiPnt7Ojp2bS50aXRsZS5sZWFkfX08L2g1PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxpIG5nLXNob3c9XCJ2bS50aXRsZS5pY29uXCIgY2xhc3M9XCJ7e3ZtLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0udGl0bGUubWFpbn19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5zdWJcIj57ezo6dm0udGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uYnV0dG9uQ29udGFpbmVyQ2xhc3MgfHwgJ3BhZ2UtYWN0aW9uLWJ0bnMnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctbW91c2VvdmVyPVwidm0ubG9hZE9mZnNjcmVlbigpXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5yZXR1cm5TdHlsZSA/IHZtLnJldHVyblN0eWxlIDogJ2RlZmF1bHQtZGFyaydcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5yZXR1cm5TdGF0ZVwiXG4gICAgICAgICAgICAgICB1aS1zcmVmPVwie3t2bS5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0ucmV0dXJuVGV4dCB8fCAnQ2FuY2VsJ319XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5jbG9zZUJ1dHRvbi5zdHlsZSA/IHZtLmNsb3NlQnV0dG9uLnN0eWxlIDogJ2RlZmF1bHQtZGFyayd9fVwiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY2xvc2VCdXR0b24uaGFuZGxlcigpXCI+XG4gICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cImJ1dHRvbiBpbiB2bS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVwieydidG4tZ3JvdXAnOiBidXR0b24ub3B0aW9uc31cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbikgfHwgdm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbikgfHwgdm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgLy9hY3RpdmF0ZSgpO1xuICAvLyRzY29wZS4kb24oJyRkZXN0cm95JywgY2xlYW51cCk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy50aXRsZScsIGluaXRUaXRsZSwgdHJ1ZSk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy5hY3Rpb25Db25maWcnLCBpbml0QWN0aW9uQ29uZmlnLCB0cnVlKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGluaXRUaXRsZSgpIHtcbiAgICAoeyB0aXRsZTogdm0udGl0bGUgfSA9IHZtLmNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWN0aW9uQ29uZmlnKCkge1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgLy8gJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gICAgLy8gdGhpcyBjb21wb25lbnQgd2lsbCBvZnRlbiBiZSBzaWJsaW5ncyB0byB0aGUgZmxleCBmb3JtcyBvbmUsXG4gICAgLy8gc28gbmVlZCB0byBicm9hZGNhc3QgZnJvbSBzaGFyZWQgcGFyZW50Li4ueWVzIGl0J3MgdWdseVxuICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJGJyb2FkY2FzdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICBmdW5jdGlvbiBmZlZhbGlkYXRlVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmVmFsaWRhdGVUYWcoKTtcblxuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9