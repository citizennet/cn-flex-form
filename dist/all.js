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
	    service.schema.params = angular.copy(service.params);
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
	        return select.titleMap || service.schema.data[select.titleMapResolve] || service.schema.data[prop];
	      };
	
	      select.onInit = function (val, form, event, setter) {
	        // make sure we use correct value
	        var temp = _.debounce(function () {
	          var modelValue = service.parseExpression(form.key, service.model);
	          if (event === 'tag-init') {
	            var newVal = getAllowedSelectValue(select, modelValue.get());
	            if (newVal !== undefined) {
	              setter(newVal);
	            }
	          }
	        }, 300);
	        temp();
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
	            service.parseStringKey(service.model, dotKey, val);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYWNmY2FhNzc1YjI0MTNjZjVkNyIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwiRVZFTlRTIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc1VybCIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzU2NoZWR1bGUiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc2V0VXBkYXRlcyIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJwYXJzZVN0cmluZ0tleSIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsImdldFBhcmFtcyIsInBhcmFtcyIsImV4dGVuZCIsImdldFNjb3BlIiwic2NvcGUiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwiaW5pdFVwZGF0ZXMiLCJkZWJvdW5jZSIsInZhbCIsImtleSIsImtleXMiLCJjb3B5Iiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwidXBkYXRlU2NoZW1hIiwiZ2V0U2NoZW1hRm9ybSIsImdldFBhcmFtT3ZlcnJpZGVzIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiZ2V0T2dLZXlzIiwicmVqZWN0IiwiY29uc29sZSIsImxvZyIsImV4cCIsInJlc29sdXRpb24iLCJyZXBsYWNlIiwicmVzdWx0Iiwic3BsaXQiLCJ0cmltIiwicmlnaHQiLCJ0b0RldmlkZSIsImRldmlkZUJ5IiwicmVzdWx0SW4iLCJpc0RlZmluZWQiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJkaWZmQXJyIiwiZGlmZmVyZW5jZSIsIml0ZW0iLCJfZmllbGQiLCJmaWx0ZXIiLCJkIiwicHJldmlld1BhdGgiLCJqb2luIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZGVwdGgiLCJwYXJzZSIsInByb3BlcnRpZXMiLCJzaGlmdCIsIndhdGNoYWJsZXMiLCJuZXN0ZWQiLCJtYXRjaE5lc3RlZEV4cHJlc3Npb24iLCJyZXBsYWNlU3RyIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwiZWl0aGVycyIsIngiLCJhbGwiLCJhY2MiLCJsYXN0IiwidW5kZWZpbmVkIiwic2tpcFByb3BIYW5kbGVycyIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsInZhbDEiLCJmaWVsZEtleSIsInJlZ2lzdGVyIiwiY29uZGl0aW9uYWxzIiwicHJldiIsIm1hcCIsInBhdGgiLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsIm9wZXJhbmQxIiwib3BlcmFuZDIiLCJwIiwiZmxvb3IiLCJjZWlsIiwicm91bmQiLCJpbml0aWFsaXplIiwic3RhcnRzV2l0aCIsImxpc3QiLCJwcmVkaWNhdGVQYXJhbXMiLCJwcmVkaWNhdGVCb2R5IiwiZ2VuZXJhdGVQcmVkaWNhdGUiLCJib2R5IiwiY3VyVmFsIiwicnVuSGFuZGxlciIsImlzT2JqZWN0IiwiYXJyTWF0Y2giLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVycyIsImFycktleSIsIm9uQXJyYXkiLCJyZW9yZGVyIiwibGFzdEtleSIsImFyclZhbCIsImxpc3RlbmVyS2V5Iiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsInN0cmlwSW5kZXhlcyIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiZ2VuZXJpY0tleSIsImluZGV4IiwiJGVtaXQiLCJsaW5rIiwic3BsaWNlIiwiY29waWVzIiwicGx1Y2siLCJrZXlTdGFydCIsIndhcm4iLCJtYXRjaEludFN0ckluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZWQiLCJwYXJzZWQiLCJrZXlWYWwiLCJpc1N0ciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsIm5vQ29uc3RydWN0aW9uIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsInNpbGVudCIsImluZGV4T2YiLCJnZXRBcnJheUluZGV4Iiwia3MiLCJrIiwic2tpcEtleXMiLCJpbmRleGVkS2V5IiwiY2hpbGRLZXlzIiwiaW5kZXhlZENoaWxkS2V5IiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwib21pdEhhc2hLZXkiLCJpZGVudGl0eSIsInBhcnRpYWxSaWdodCIsImZpbmRGbiIsImNvbXBvc2UiLCJwYXJ0aWFsIiwic3RhcnRFbXB0eSIsIm9uSW5pdCIsInNldHRlciIsInRlbXAiLCJuZXdWYWwiLCJxdWVyeVBhcmFtcyIsInBhcmFtc0tleXMiLCJzaG93Q2xlYXJDYWNoZSIsInJlZnJlc2hEYXRhIiwic2luZ2xlUXVlcnkiLCJtaW5Mb29rdXAiLCJ0aXRsZVF1ZXJ5IiwicSIsInZhcmlhYmxlcyIsInNraXBGaWx0ZXJpbmciLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0IiwiZGVzdHJveVN0cmF0ZWd5Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsImxpbmtNb2RlbCIsImZlYXR1cmVLZXkiLCJzaG93RmVhdHVyZSIsImZlYXR1cmVzIiwic2hvdyIsInNlbGVjdEtleSIsImVsZW0iLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0TW9kZWwiLCJyZWZyZXNoIiwiZGlmZiIsImlzTnVsbCIsInRoZW4iLCJvblByb2Nlc3NEaWZmIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjdXJLZXlzIiwiY29tcGFjdCIsInByZXZTY2hlbWEiLCJuZXdTY2hlbWEiLCJyZWFkb25seSIsImRvdEtleSIsImN1cnJlbnRGb3JtIiwiY2FjaGVkIiwiY3VycmVudCIsImlzQ2hpbGQiLCJyZWRyYXciLCJzdWJLZXkiLCJrZXlTdHIiLCJwYXRoUGFydHMiLCJwYXJ0IiwibmV4dFBhcnQiLCJpc05hTiIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwicmVtb3ZlTWFwcGluZyIsIkZsZXhGb3JtTW9kYWxMb2FkZXIiLCJGbGV4Rm9ybU1vZGFsIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiRzY29wZSIsIkZGTW9kYWxMb2FkZXJUYWciLCJfX3RhZyIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwib25BZnRlckRpc21pc3MiLCJmaW5hbGx5IiwiZ29CYWNrIiwiY2F0Y2giLCJyZXN0UGFyYW1zIiwiZGlzbWlzc0V2ZW50IiwiZGlzbWlzc01vZGFsIiwidHJhbnNpdGlvbiIsImdvIiwib3BlbmVkIiwiZGlzbWlzcyIsIiR1aWJNb2RhbCIsImNuRmxleEZvcm0iLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZm9ybUluZGV4IiwiZm9ybU5hbWUiLCJkZWxheUZvcm0iLCJjbGVhbnVwRXZlbnQiLCJGbGV4Rm9ybSIsImJpbmRUb0NvbnRyb2xsZXIiLCJjbkZsZXhGb3JtU2VydmljZSIsIiRsb2NhdGlvbiIsImNuRmxleEZvcm1UYWciLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJyZWZyZXNoQWRib29rIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJt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TCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU9pUCxRQUFRRyxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVM3akIsS0FBVCxFQUFnQjtBQUN2RTtBQUNBMGpCLGVBQVFJLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUosZUFBUUksWUFBUixDQUFxQixTQUFyQixFQUFnQzlqQixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOzttQkFFY3dqQixVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYWNmY2FhNzc1YjI0MTNjZjVkNyIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMgPSB7fSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXyh7IC4uLiRzdGF0ZVBhcmFtcywgLi4ub3ZlcnJpZGVzIH0pXG4gICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgLm9taXQodiA9PiAoXy5pc1VuZGVmaW5lZCh2KSB8fCB2ID09PSBudWxsKSlcbiAgICAgICAgLnZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC50eXBlID09PSAndXJsJyxcbiAgICB0eXBlOiAnY24tdXJsJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NyZWF0aXZlaW1hZ2UnLFxuICAgIHR5cGU6ICdjbi1jcmVhdGl2ZWltYWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnZmFjZWJvb2t2aWRlbycsXG4gICAgdHlwZTogJ2NuLWZhY2Vib29rdmlkZW8nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnc2NoZWR1bGUnLFxuICAgIHR5cGU6ICdjbi1zY2hlZHVsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJyxcbiAgICB0eXBlOiAnY24tbnVtYmVyJ1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsImZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1udW1iZXInLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXVybCcsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZScsXG4gICAgJ2NuLXNjaGVkdWxlJyxcbiAgICAnY24tZmFjZWJvb2t2aWRlbydcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICBuZy1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBkZWZhdWx0LXRpbWU9XCJmb3JtLmRlZmF1bHRUaW1lXCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0ubWluSXRlbXMgfHwgZm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0ubWF4SXRlbXMgfHwgZm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgKGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDApfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIGJ1bGstc2luZ2xlLXJlcXVlc3Q9XCJ7e2Zvcm0uYnVsa1NpbmdsZVJlcXVlc3R9fVwiXG4gICAgICAgICAgc29ydC1maWx0ZXJlZC1yZXN1bHRzPVwie3soZm9ybS50aXRsZU1hcFJlc29sdmUgfHwgZm9ybS50aXRsZU1hcCkgJiYgIWZvcm0udGl0bGVNYXBRdWVyeX19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1jYWNoZT1cInt7Zm9ybS5zaG93Q2xlYXJDYWNoZX19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSwgb3B0aW9ucylcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0uc2tpcEZpbHRlcmluZ319XCJcbiAgICAgICAgICAgIHNpbmdsZS1xdWVyeT1cInt7Zm9ybS5zaW5nbGVRdWVyeX19XCJcbiAgICAgICAgICAgIGRlYm91bmNlLWRlbGF5PVwie3tmb3JtLmRlYm91bmNlRGVsYXl9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cH19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgc2YtYXJyYXk9XCJmb3JtXCI+XG4gICAgICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICAgIG5nLWlmPVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cImRlbGV0ZUZyb21BcnJheSgkaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvcHlXaXRoSW5kZXgoJGluZGV4KVwiLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW51bWJlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tbnVtYmVyXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdXJsLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly9cIlxuICAgICAgICAgICAgICAgY24tdXJsLWZvcm1hdFxuICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzIHx8IGl0ZW0uaWNvblBhdGhcIj5cbiAgICAgICAgICAgICAgIDxpIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIiBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICAgIDxpbWcgbmctaWY9XCJpdGVtLmljb25QYXRoXCIgY2xhc3M9XCJjdXN0b21cIiBuZy1zcmM9XCJ7e2l0ZW0uaWNvblBhdGh9fVwiLz5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24taWdub3JlLXdoZWVsXG4gICAgICAgICAgICAgICAgIGNuLXBlcmNlbnRhZ2UtZm9ybWF0XG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPiU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGlzcGxheS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWRpc3BsYXl7e2Zvcm0uaHRtbENsYXNzfX1cIj5cbiAgICAgICAgPGlucHV0IG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgIHZhbHVlPVwie3tmb3JtLmdldERpc3BsYXkoZm9ybS5rZXksIGZvcm0uYXJyYXlJbmRleCl9fVwiPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmllbGRzZXQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZmllbGRzZXRcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwLCAnbm90aXRsZSc6IGZvcm0ubm90aXRsZSB8fCAhZm9ybS50aXRsZX1cIj5cbiAgICAgICAgPGxlZ2VuZCBuZy1oaWRlPVwiZm9ybS5ub3RpdGxlXCJcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cImZvcm0udG9nZ2xlQ29sbGFwc2UoZm9ybSlcIlxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwieydzci1vbmx5JzogIXNob3dUaXRsZSgpLCBjb2xsYXBzaWJsZTogZm9ybS5jb2xsYXBzaWJsZX1cIlxuICAgICAgICAgICAgICAgIG5nLW1vdXNlZW50ZXI9XCJmb3JtLnJlbmRlciA9IHRydWVcIj5cbiAgICAgICAgICA8aSBuZy1zaG93PVwiZm9ybS5jb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYXJldC17e2Zvcm0uY29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdkb3duJ319XCI+PC9pPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgbmctc2hvdz1cImZvcm0uZGVzY3JpcHRpb25cIiBuZy1iaW5kLWh0bWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgdWliLWNvbGxhcHNlPVwiZm9ybS5jb2xsYXBzZWRcIj5cbiAgICAgICAgICA8ZGl2IG5nLWlmPVwiZm9ybS5yZW5kZXJcIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1tZWRpYXVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG1lZGlhLXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi10ZXh0LWJ1dHRvbj1cImZvcm0udGV4dEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1pbWFnZS1wcmV2aWV3cz1cImZvcm0uZGF0YS5pbWFnZVByZXZpZXdzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1rZXk9XCJmb3JtLmtleSAmJiBmb3JtLmtleVswXVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jcmVhdGl2ZWltYWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tY3JlYXRpdmUtaW1hZ2UgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbmctbW9kZWwta2V5PVwiZm9ybS5uZ01vZGVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1jcmVhdGl2ZS1pbWFnZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1zY2hlZHVsZS5odG1sJyxcbiAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7eyBmb3JtLmh0bWxDbGFzcyB9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpIH1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3sgZm9ybS5rZXkuam9pbignLicpIH19XCI+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8Y24tc2NoZWR1bGUgZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9jbi1zY2hlZHVsZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1mYWNlYm9va3ZpZGVvLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZmFjZWJvb2stdmlkZW8gbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdmlkZW8ta2V5PVwiZm9ybS52aWRlb0tleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdGh1bWJuYWlsLWtleT1cImZvcm0udGh1bWJuYWlsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1pbWFnZS1pZC1rZXk9XCJmb3JtLmltYWdlSWRLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2NuLWZhY2Vib29rLXZpZGVvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xufVxuXG5leHBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2hlbWEtZm9ybS1leHRlbnNpb25zLmpzIiwiLy8gTmVlZCB0aGVzZSBtb2R1bGVzIGZvciB0ZXN0IGJ1bmRsZVxudmFyIF8gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuXyB8fCByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBPYmplY3RQYXRoID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk9iamVjdFBhdGggfHwgcmVxdWlyZSgnb2JqZWN0cGF0aCcpO1xuXG5jb25zdCBmaWVsZFR5cGVIYW5kbGVycyA9IHtcbiAgJ2ZpZWxkc2V0JzogJ3Byb2Nlc3NGaWVsZHNldCcsXG4gICdjbi1yYWRpb3MnOiAncHJvY2Vzc1JhZGlvcycsXG4gICdjbi1yYWRpb2J1dHRvbnMnOiAncHJvY2Vzc1JhZGlvYnV0dG9ucycsXG4gICdjbi1hdXRvY29tcGxldGUnOiAncHJvY2Vzc1NlbGVjdCcsXG4gICdjbi1kYXRldGltZXBpY2tlcic6ICdwcm9jZXNzRGF0ZScsXG4gICdoZWxwJzogJ3Byb2Nlc3NIZWxwJyxcbiAgJ2NuLWRpc3BsYXknOiAncHJvY2Vzc0Rpc3BsYXknLFxuICAnY24tbnVtYmVyJzogJ3Byb2Nlc3NOdW1iZXInLFxuICAnY24tY3VycmVuY3knOiAncHJvY2Vzc0N1cnJlbmN5JyxcbiAgJ2NuLXBlcmNlbnRhZ2UnOiAncHJvY2Vzc1BlcmNlbnRhZ2UnLFxuICAnY24tdXJsJzogJ3Byb2Nlc3NVcmwnLFxuICAnY24tbWVkaWF1cGxvYWQnOiAncHJvY2Vzc01lZGlhVXBsb2FkJyxcbiAgJ2NuLWNyZWF0aXZlaW1hZ2UnOiAncHJvY2Vzc0NyZWF0aXZlSW1hZ2UnLFxuICAnY24tZmFjZWJvb2t2aWRlbyc6ICdwcm9jZXNzRmFjZWJvb2tWaWRlbycsXG4gICdjbi1jc3Z1cGxvYWQnOiAncHJvY2Vzc0NzdlVwbG9hZCcsXG4gICdjbi1yZXVzYWJsZSc6ICdwcm9jZXNzUmV1c2FibGUnLFxuICAnY24tdG9nZ2xlJzogJ3Byb2Nlc3NUb2dnbGUnLFxuICAnY24tdGFibGUnOiAncHJvY2Vzc1RhYmxlJyxcbiAgJ2NvbXBvbmVudCc6ICdwcm9jZXNzQ29tcG9uZW50JyxcbiAgJ3NlY3Rpb24nOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAndGFiYXJyYXknOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAnYXJyYXknOiAncHJvY2Vzc0FycmF5JyxcbiAgJ2NuLXNjaGVkdWxlJzogJ3Byb2Nlc3NTY2hlZHVsZSdcbn07XG5cbi8vIGhhbmRsZXJzIHRoYXQgZG9uJ3QgcnVuIG9uIHNlY29uZFBhc3MgYXJlIG9uZXMgdGhhdCBzaG91bGRuJ3QgZXZlciBjaGFuZ2Vcbi8vIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGNvbXBvdW5kaW5nIHRoZWlyIGVmZmVjdHNcbmNvbnN0IGZpZWxkUHJvcEhhbmRsZXJzID0gW3tcbiAgcHJvcDogJ2RlZmF1bHQnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+XG4gICAgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3Jlc29sdmUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiYgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+XG4gICAgc2VydmljZS5wcm9jZXNzU2VsZWN0RGlzcGxheShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBfLmlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHQpICYmICFfLmlzVW5kZWZpbmVkKGZpZWxkLnNjaGVtYS5kZWZhdWx0KSAmJiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiYgZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXMsXG4gIEVWRU5UUyxcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZWxldGVBcnJheUNvcGllc0ZvcixcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VBbGwsXG4gICAgcGFyc2VBbnksXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzQ3JlYXRpdmVJbWFnZSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmFjZWJvb2tWaWRlbyxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc051bWJlcixcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzVXJsLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NTY2hlZHVsZSxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzZXRVcGRhdGVzLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwU2NoZW1hUmVmcmVzaCxcbiAgICBzaWxlbmNlTGlzdGVuZXJzLFxuICAgIHNraXBEZWZhdWx0cyxcbiAgICBwYXJzZVN0cmluZ0tleSxcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVNlcnZpY2UoZm4pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZShmbik7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UuY2xlYW51cCgpO1xuICAgICAgXy5lbXB0eShzZXJ2aWNlKTtcbiAgICAgIF8ucmVtb3ZlKHNlcnZpY2VzLCAocykgPT4gcyA9PT0gc2VydmljZSk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGlmKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIFsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIF0gPSBhcmdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciB7IHNjaGVtYSwgbW9kZWwsIGNvbmZpZyB9ID0gYXJnc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJTZXJ2aWNlID0gZ2V0U2VydmljZSgoc2VydmljZSkgPT4gc2VydmljZS5tb2RlbCA9PT0gbW9kZWwpO1xuICAgIGlmKGN1clNlcnZpY2UpIHtcbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBjdXJTZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgIHNlcnZpY2VzLnB1c2gobmV3U2VydmljZSk7XG4gICAgcmV0dXJuIG5ld1NlcnZpY2U7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMuc2NvcGVDYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcbiAgICB0aGlzLnNraXBEZWZhdWx0ID0ge307XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSBjb25maWcuZ2V0UGFyYW1zID8gY29uZmlnLmdldFBhcmFtcygpIDoge307XG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSwgZGVzdHJveVNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZ2V0U2NvcGUpIHtcbiAgICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICB9XG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgLyoqIFRPRE86IEFQSS0zMTM2LXJvbGxiYWNrXG4gICAgaWYgKCFzZXJ2aWNlLnNjaGVtYS5kYXRlQ29udmVydGVkICYmIE9iamVjdC5rZXlzKHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzIHx8IHt9KS5sZW5ndGgpIHtcbiAgICAgIF8uZWFjaChzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZC5mb3JtYXQgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIikge1xuICAgICAgICAgIGNvbnN0IGN1clZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1vZGVsW2ZpZWxkLmtleV0gPSBjblV0aWwuY29udmVydFRvTG9jYWxUaW1lKGN1clZhbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGVtaXQoRVZFTlRTLm5vdGlmeSwgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRlQ29udmVydGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdFVwZGF0ZXMgPSBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgaWYgKHNjaGVtYS51cGRhdGVzKSB7XG4gICAgICAgICAgXy5lYWNoKHNjaGVtYS51cGRhdGVzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICAgICAgaWYoa2V5LmluY2x1ZGVzKCdnZW5lcmljX2NyZWF0aXZlJykgJiYga2V5ICE9PSAnZ2VuZXJpY19jcmVhdGl2ZV9rZXlzJykge1xuICAgICAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNjaGVtYS51cGRhdGVzWydnZW5lcmljX2NyZWF0aXZlX2tleXMnXSkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBzY2hlbWEudXBkYXRlc1snZ2VuZXJpY19jcmVhdGl2ZV9rZXlzJ107XG4gICAgICAgICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAyMDApO1xuICAgICAgaW5pdFVwZGF0ZXMoKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICAgIHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMgPSBjb25maWcuZ2V0UGFyYW1zIHx8IF8ubm9vcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZiAoc2VydmljZS5za2lwRGVmYXVsdFtrZXldKSB7XG4gICAgICBkZWxldGUgc2VydmljZS5za2lwRGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGZpZWxkLmNvbmRpdGlvbikge1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gcmVwbGFjZUFycmF5SW5kZXgoZmllbGQuY29uZGl0aW9uLCBmaWVsZC5hcnJheUluZGV4IHx8IGtleSk7XG4gICAgICBpZighc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgc2NoZW1hVXBkYXRlIGhhc24ndCBiZWVuIHRyaWdnZXJlZCwgbGV0IHNjaGVtYUZvcm0gZGlyZWN0aXZlIGhhbmRsZSBkZWZhdWx0c1xuICAgIC8vaWYoc2VydmljZS51cGRhdGVzIHx8IGZpZWxkLmRlZmF1bHQpIHtcbiAgICBpZighXy5pc1VuZGVmaW5lZChjdXJEZWZhdWx0KSkge1xuICAgICAgaWYoa2V5LmluY2x1ZGVzICYmIGtleS5pbmNsdWRlcygnW10nKSkgcmV0dXJuO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IG1vZGVsLmdldCgpO1xuICAgICAgLy8gaWYgdGhlcmUncyBhbiBleGlzdGluZyBkZWZhdWx0IGFuZCBpdCdzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIG5ldyBkZWZhdWx0XG4gICAgICBpZihfLmlzVW5kZWZpbmVkKG1vZGVsVmFsdWUpIHx8IChcbiAgICAgICAgKF8uaGFzKHNlcnZpY2UuZGVmYXVsdHMsIGtleSkgPyBhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBzZXJ2aWNlLmRlZmF1bHRzW2tleV0pIDogXy5pc1RydWx5RW1wdHkobW9kZWxWYWx1ZSkpICYmXG4gICAgICAgICFhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBjdXJEZWZhdWx0KVxuICAgICAgKSkge1xuICAgICAgICBtb2RlbC5zZXQoYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VydmljZS5kZWZhdWx0c1trZXldID0gYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpO1xuXG4gICAgaWYoc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAnY24tdXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIFxuICAgIGlmKChmaWVsZC5rZXkgfHwgJycpLmluY2x1ZGVzKCdvYmplY3RpdmVfZ29hbCcpICYmICEoZmllbGQua2V5IHx8ICcnKS5pbmNsdWRlcygnZHJvcFNvdXJjZXMnKSkge1xuICAgICAgY29uc29sZS5sb2coXCJmaWVsZFwiLCBmaWVsZCwgcG9zKTtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpO1xuICAgICAgKGZpZWxkLndhdGNoIHx8IFtdKS5mb3JFYWNoKHdhdGNoID0+IHtcbiAgICAgICAgY29uc3QgZXhwID0gKHdhdGNoLnJlc29sdXRpb24gfHwgJycpLnJlcGxhY2UoL21vZGVsXFwuL2csICcnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGV4cCB8fCAnJykuc3BsaXQoJz0nKVswXS50cmltKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gKGV4cCB8fCAnJykuc3BsaXQoJz0nKVsxXS50cmltKCk7XG4gICAgICAgIGNvbnN0IHRvRGV2aWRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24ocmlnaHQuc3BsaXQoJy8nKVswXS50cmltKCksIHNlcnZpY2UubW9kZWwpLmdldCgpIHx8IDA7XG4gICAgICAgIGNvbnN0IGRldmlkZUJ5ICA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHJpZ2h0LnNwbGl0KCcvJylbMV0udHJpbSgpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKSB8fCAwO1xuICAgICAgICBjb25zdCByZXN1bHRJbiA9ICh0b0RldmlkZSAmJiBkZXZpZGVCeSkgPyAodG9EZXZpZGUgLyBkZXZpZGVCeSkgOiAwO1xuICAgICAgICBzZXJ2aWNlLnBhcnNlU3RyaW5nS2V5KHNlcnZpY2UubW9kZWwsIHJlc3VsdCwgcmVzdWx0SW4pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgaWYgZ2VuZXJpY19jcmVhdGl2ZSBwcmVzZW50cyBpbiBkaWZmLnVwZGF0ZVxuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGZpZWxkLmFycmF5SW5kZXgpKSB7XG4gICAgICBfLmVhY2goc2VydmljZS5zY2hlbWEuZGF0YSwgZnVuY3Rpb24odmFsLCBwcm9wKSB7XG4gICAgICAgIGlmKHByb3AuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGNvbnN0IGRpZmZBcnIgPSBfLmRpZmZlcmVuY2UocHJvcC5zcGxpdCgnLicpLCBrZXkuc3BsaXQoJy4nKSk7XG4gICAgICAgICAgaWYoZGlmZkFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKGZpZWxkLml0ZW1zKSB7XG4gICAgICAgICAgICAgIF8uZWFjaChmaWVsZC5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IF9maWVsZCA9IGRpZmZBcnIuZmlsdGVyKGQgPT4gZCAhPSBpdGVtLnByZXZpZXdQYXRoKS5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgc2VydmljZS5wYXJzZVN0cmluZ0tleShmaWVsZCwgX2ZpZWxkLCB2YWwpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZVN0cmluZ0tleShmaWVsZCwgZGlmZkFyci5qb2luKCcuJyksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGUgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCBrZXkpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuICAgIGxldCBmaXJzdCwgbmV4dDtcblxuICAgIHdoaWxlKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQW55KGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5maW5kKGVpdGhlcnMsIHggPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQWxsKGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5yZWR1Y2UoYWxsLCAoYWNjLCB4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBhY2MucHVzaCh2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBhbGwubGVuZ3RoID09PSBtYXRjaC5sZW5ndGggPyBfLmxhc3QobWF0Y2gpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gZXhwLmluY2x1ZGVzKCcgfHwgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFueShleHApIDogZXhwLmluY2x1ZGVzKCcgJiYgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFsbChleHApIDogc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuICAgIGNvbnN0IHZhbDEgPSBmaWVsZFByb3AgPT09ICdjb25kaXRpb24nID8gdmFsICsgJycgOiB2YWw7XG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGRQcm9wLCBmaWVsZCkuc2V0KHZhbDEpO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjtcbiAgICAgICAgaWYoXy5pc1N0cmluZyhmaWVsZC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbiBpc24ndCBhbHJlYWR5IHdyYXBwZWQgaW4gcGFyZW5zLCB3cmFwIGl0XG4gICAgICAgICAgY29uZGl0aW9uID0gL15cXCguKlxcKSQvLnRlc3QoZmllbGQuY29uZGl0aW9uKSA/XG4gICAgICAgICAgICBmaWVsZC5jb25kaXRpb24gOlxuICAgICAgICAgICAgYCgke2ZpZWxkLmNvbmRpdGlvbn0pYDtcbiAgICAgICAgfVxuICAgICAgICBpZihfLmlzU3RyaW5nKHdhdGNoLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb24gP1xuICAgICAgICAgICAgYCR7Y29uZGl0aW9ufSAmJiAke3dhdGNoLmNvbmRpdGlvbn1gIDpcbiAgICAgICAgICAgIHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSAoZGF5c3xob3VycykvKTtcblxuICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0ge1xuICAgICAgICAgICAgICB2YWw6IGFkanVzdG1lbnQuZGF0ZVsxXSxcbiAgICAgICAgICAgICAgdW5pdHM6IGFkanVzdG1lbnQuZGF0ZVsyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLnZhbCwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgaWYoXy5pc1N0cmluZyhjdXJDb25kaXRpb24pICYmIGN1ckNvbmRpdGlvbi5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYGFycmF5SW5kZXggY291bGQgbm90IGJlIHJlcGFsY2VkIGZyb20gZXhwcmVzc2lvbiAnJHtjdXJDb25kaXRpb259J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKGFkanVzdG1lbnQuZGF0ZS52YWwsIGFkanVzdG1lbnQuZGF0ZS51bml0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gX1thZGp1c3RtZW50Lm9wZXJhdG9yXShmcm9tLmdldCgpLCBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBldmFsKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24ocmVwbGFjZUFycmF5SW5kZXgoYWRqdXN0bWVudC5tYXRoWzJdLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVyYW5kMSA9IGZyb20uZ2V0KCk7IFxuICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhbmQyID0gYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IGFkanVzdG1lbnQubWF0aFsxXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJHBhcnNlKG9wZXJhbmQxICsgb3BlcmF0b3IgKyBvcGVyYW5kMikoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgLy8gYnkgdGhpcyBwb2ludCBkZWZhdWx0cyBzaG91bGQgYmUgcHJvY2Vzc2VkIHNvIHdlIGNhbiBnZXQgdmFsdWUgZGlyZWN0bHkgZnJvbSBtb2RlbFxuICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1clZhbCkpIHtcbiAgICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJWYWw7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgb25BcnJheSA9IChjdXIsIHByZXYsIHJlb3JkZXIpID0+IHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dYDtcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIChmaWVsZCwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IGAke2FycktleX0ubGVuZ3RoYDtcbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSkge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtvbkFycmF5XSxcbiAgICAgICAgcHJldjogYXJyVmFsID8gYXJyVmFsLmxlbmd0aCA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckhhbmRsZXJzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgZGVsZXRlIHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9IHNlcnZpY2Uuc2NvcGUuJHdhdGNoKFxuICAgICAgKCkgPT4gc2VydmljZS5tb2RlbCxcbiAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcblxuICAgICAgaWYgKHNlcnZpY2UuZmlyc3RVcGRhdGUpIHtcbiAgICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmXG4gICAgICAgICAgICAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgICAgICAgICAhaXNJbml0QXJyYXkgJiZcbiAgICAgICAgICAgIHZhbCAhPT0gbnVsbC8qICYmXG4gICAgICAgICAgICAhYW5ndWxhci5lcXVhbHModmFsLCBzZXJ2aWNlLmdldERlZmF1bHQoa2V5KSkqLykge1xuICAgICAgICAgICAgICAvLyBpZiB2YWwgaXMgYW4gYXJyYXkgdGhhdCBoYXMgb24gb2JqZWN0LCBuZWVkIGRlZXAgY29weSBcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZihfLmlzRnVuY3Rpb24oc2VydmljZS5yZWZyZXNoU2NoZW1hKSkge1xuICAgICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgLy8gZWxzZSBpZiAoZm9ybS5jb25kaXRpb24uaW5jbHVkZXMoXCJhcnJheUluZGV4XCIpKSB7XG4gICAgICAgIC8vICAgZm9ybS5jb25kaXRpb24gPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KGZvcm0uY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgc2VydmljZS5hZGRBcnJheUNvcHkoc2NvcGUsIGdlbmVyaWNLZXksIGluZGV4KTtcbiAgICAgICAgc2NvcGUuJGVtaXQoJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBnZW5lcmljS2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXJ2aWNlLmFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtRGVsZXRlU2NvcGUnLCAoZXZlbnQsIHNjb3BlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoc2NvcGUuZm9ybS5rZXkpO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICAgICAgaWYobGlzdGVuZXIpIGxpc3RlbmVyLmhhbmRsZXJzID0gW107XG5cbiAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioa2V5LCBpbmRleCk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICBjb25zdCBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzZXJ2aWNlLmRlbGV0ZUFycmF5Q29waWVzRm9yKHNjb3BlLmZvcm0ubGluaywgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0ZvcihrZXkpO1xuICAgIF8uZWFjaChjb3BpZXMsIGxpc3QgPT4gbGlzdCAmJiBsaXN0LnNwbGljZShpbmRleCwgMSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhY2hpbmcgZHVwbGljYXRlIHNjb3BlIGZvcicsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSA9IHNjb3BlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbVNjb3BlQ2FjaGUoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXkgPSBrZXkgfHwgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkpIHNlcnZpY2UuZm9ybUNhY2hlW2tleV0gPSBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Gb3JtQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9EYXRhQ2FjaGUoa2V5LCBtb2RlbFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldID0gbW9kZWxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRGF0YUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHJldHVybiBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hJbnRTdHJJbmRleChleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoLT9cXGQrfFwiLipcInwnLionKV0vKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICBsZXQgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgY29uc3QgcmVwbGFjZWQgPSBbXTtcblxuICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZWQucHVzaCh0b1JlcGxhY2UpO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCBgZmZfciR7cmVwbGFjZWQubGVuZ3RoIC0gMX1fZmZgKTtcbiAgICAgIFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXShbXltcXF1dKikvKTtcblxuICAgIHJldHVybiBtYXRjaCAmJlxuICAgICAgcmVwbGFjZWQubGVuZ3RoID9cbiAgICAgIG1hdGNoLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGxldCBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlZFtpbmRleF0pO1xuICAgICAgICAgIFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgICB9KSA6XG4gICAgICBtYXRjaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24obmVzdGVkLCBkZXB0aCkuZ2V0KCk7XG4gICAgICBjb25zdCBrZXlWYWwgPSBfLmlzVW5kZWZpbmVkKHBhcnNlZCkgP1xuICAgICAgICAnJyA6XG4gICAgICAgIF8uaXNTdHJpbmcocGFyc2VkKSA/XG4gICAgICAgICAgYFwiJHtwYXJzZWR9XCJgIDpcbiAgICAgICAgICBwYXJzZWQ7XG4gICAgICBleHAgPSBleHAucmVwbGFjZShgWyR7bmVzdGVkfV1gLCBgWyR7a2V5VmFsfV1gKTtcbiAgICAgIFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYgKF8uaXNBcnJheShtb2RlbCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRLZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrZXkpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIF8uZWFjaChjaGlsZEtleXMsIChrKSA9PiB7XG4gICAgICAgICAgICBza2lwS2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhlZENoaWxkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGssIFtpbmRleCwgaV0pO1xuICAgICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkQ2hpbGRLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc2tpcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRLZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCxcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjtcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc051bWJlcihmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcmwoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXVybCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZhY2Vib29rVmlkZW8oZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1mYWNlYm9va3ZpZGVvJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDcmVhdGl2ZUltYWdlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3JlYXRpdmVpbWFnZSc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBsZXQgb21pdEhhc2hLZXkgPSB2YWxQcm9wID8gIF8uaWRlbnRpdHkgOiBfLnBhcnRpYWxSaWdodChfLm9taXQsIFwiJCRoYXNoS2V5XCIpXG4gICAgbGV0IGZpbmRGbiA9IHZhbFByb3AgP1xuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgXy5wYXJ0aWFsKF8uc2V0LCB7fSwgdmFsUHJvcCksIG9taXRIYXNoS2V5KSA6XG4gICAgICBfLmNvbXBvc2UoXy5wYXJ0aWFsKF8uZmluZCwgdGl0bGVNYXApLCBvbWl0SGFzaEtleSlcbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHZhbC5tYXAoZmluZEZuKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEZuKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVkdWxlKGZpZWxkKSB7XG4gICAgICBmaWVsZC5zdGFydEVtcHR5ID0gdHJ1ZTtcbiAgICAgIGZpZWxkLnR5cGUgPSAnY24tc2NoZWR1bGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcCA9IGAke3NlbGVjdC50aXRsZU1hcFJlc29sdmV9WyR7c2VsZWN0LmFycmF5SW5kZXh9XWA7XG4gICAgICAgIHJldHVybiBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICBjb25zdCB0ZW1wID0gXy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHNldHRlcihuZXdWYWwpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICAgIHRlbXAoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zO1xuICAgICAgY29uc3QgcGFyYW1zS2V5cyA9IF8ua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJDYWNoZSA9ICEhc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnJlZnJlc2hEYXRhO1xuICAgICAgc2VsZWN0LnNpbmdsZVF1ZXJ5ID0gc2VsZWN0Lm1pbkxvb2t1cCA9PT0gMDtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gKHEsIHsgcmVmcmVzaERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgICAgIF8ocGFyYW1zS2V5cylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdyZWZyZXNoRGF0YScpIHtcbiAgICAgICAgICAgICAgaWYgKHJlZnJlc2hEYXRhKSBhY2NbcXVlcnlQYXJhbXNba2V5XV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cCA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgocXVlcnlQYXJhbXNba2V5XSwgc2VsZWN0LmFycmF5SW5kZXgpO1xuICAgICAgICAgICAgICBsZXQgdmFsID0gbnVsbCwgdmFyaWFibGVzID0gZXhwLnNwbGl0KCd8fCcpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBleHAgb2YgdmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwLnRyaW0oKSkuZ2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFjY1trZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZighXy5pc051bWJlcihzZWxlY3QubWluTG9va3VwKSkgc2VsZWN0Lm1pbkxvb2t1cCA9IHBhcmFtc0tleXMubGVuZ3RoID8gMyA6IDA7XG4gICAgICBpZighXy5oYXMoc2VsZWN0LCAnc2tpcEZpbHRlcmluZycpKSBzZWxlY3Quc2tpcEZpbHRlcmluZyA9ICEhc2VsZWN0Lm1pbkxvb2t1cDtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gMDtcblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VsZWN0Lml0ZW1zLCAoaSkgPT4gaS5kZXN0cm95U3RyYXRlZ3kgPSBcInJldGFpblwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgICBzZWxlY3QuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7XG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQgfHwgKF8uaXNBcnJheSh2YWxpZCkgJiYgXy5pc0VtcHR5KHZhbGlkKSkpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIE5lZWRlZCBmb3IgYmF0Y2hmb3JtIHRvIGNoZWNrIHJlY3Vyc2l2ZWx5XG4gICAgbGV0IHNlbGVjdEZpZWxkID0gbnVsbDtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHNlbGVjdERpc3BsYXkuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnNlbGVjdEZpZWxkKSB7XG4gICAgICAgIHNlbGVjdEZpZWxkID0gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChpdGVtLml0ZW1zLCAnc2VsZWN0RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RGaWVsZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiYW5kLWFpZCBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgc2V0IGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFycmF5IHNvbXdoZXJlXG4gICAgLy8gZGVlcCBpbiB0aGUgYW5ndWxhciBvciBhbmd1bGFyLXNjaGVtYS1mb3JtIG5ldGhlci1yZWdpb25zXG4gICAgY29uc3QgbGlua01vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5saW5rLCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZighbGlua01vZGVsLmdldCgpKSBsaW5rTW9kZWwuc2V0KFtdKTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdERpc3BsYXkubGlua31bJHtpbmRleH1dLmZlYXR1cmVzYClcbiAgICAgICAgICAgICAgLmdldCgpO1xuICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgZmVhdHVyZXMgJiZcbiAgICAgICAgICAgICAgZmVhdHVyZXNcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGZlYXR1cmVLZXkpO1xuICAgICAgICByZXR1cm4gc2hvdztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGBmb3JtLnNob3dGZWF0dXJlKGFycmF5SW5kZXgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgaWYoIXNlbGVjdE1vZGVsLmdldCgpKSBzZWxlY3RNb2RlbC5zZXQoW10pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKHVwZGF0ZVNjaGVtYSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIC4uLmNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcygpKSxcbiAgICAgICAgLi4uc2VydmljZS5wYXJhbXNcbiAgICAgIH07XG4gICAgICBsZXQgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSksICd1cGRhdGVzJyk7XG4gICAgICBsZXQga2V5cztcblxuICAgICAgaWYoIV8uaXNFbXB0eShkaWZmKSB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIFsndXBkYXRlU2NoZW1hJywgJ3VwZGF0ZXMnXSkpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuICAgICAgaWYgKGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZikge1xuICAgICAgICBjbkZsZXhGb3JtQ29uZmlnLm9uUHJvY2Vzc0RpZmYoc2NoZW1hKVxuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IF8uc3RhcnRzV2l0aChrLCBrZXkpKTtcbiAgICAgICAgICBfLmVhY2goY3VyS2V5cywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1zID0gXy5jb21wYWN0KFtcbiAgICAgICAgICAgICAgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSksXG4gICAgICAgICAgICAgIC4uLihzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSkgfHwgW10pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXy5lYWNoKGZvcm1zLCBmb3JtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldlNjaGVtYSA9IGZvcm0uc2NoZW1hO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgID0gc2VydmljZS5nZXRTY2hlbWEoa2V5LCB7IFtzY2hlbWEua2V5XTogc2NoZW1hIH0pO1xuICAgICAgICAgICAgICBpZihwcmV2U2NoZW1hLnJlYWRvbmx5ICYmICFuZXdTY2hlbWEucmVhZG9ubHkpIGZvcm0ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NoZW1hLmRpZmYudXBkYXRlcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYudXBkYXRlcywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ2Ryb3BTb3VyY2VzJykpIHtcbiAgICAgICAgICAgIC8vIEkga25vdyB0aGlzIGlzIHBvb3IgY29uZGl0aW9uIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcG9wdWxhdGUgdGhlbSB0byB0aGUgbW9kZWxcbiAgICAgICAgICAgIGNvbnN0IGRvdEtleSA9IGdldERvdEtleShrZXkpO1xuICAgICAgICAgICAgc2VydmljZS5wYXJzZVN0cmluZ0tleShzZXJ2aWNlLm1vZGVsLCBkb3RLZXksIHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGtleS5pbmNsdWRlcygnZ2VuZXJpY19jcmVhdGl2ZScpKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgdXBkYXRlIHRoZSBmb3JtL2ZpZWxkLnJlc29sdmVNYXAgPSB2YWw7XG4gICAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICAvLyBjdXJyZW50Rm9ybTogY2FjaGVkIGZvcm0sIG1lYW5zIHByb2Nlc3NlZCBmb3JtIGZyb20gb3JpZ2luYWwuIFxuICAgICAgICAgIC8vIGZvcm06IHJlY2VpdmVkIGZyb20gYmFja2VuZCwgbmVlZCB0byB1cGRhdGUgdGhlIGN1cnJlbnQgZm9ybSBcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY3VycmVudEZvcm0pID0+IGN1cnJlbnRGb3JtICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY3VycmVudEZvcm0sIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgXG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5yZXNldFVwZGF0ZXMoKTtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uZGl0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmdLZXkob2JqLCBrZXlTdHIsIHZhbHVlKSB7XG4gICAgY29uc3QgcGF0aFBhcnRzID0ga2V5U3RyLnNwbGl0KCcuJyk7XG4gICAgaWYocGF0aFBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgb2JqW2tleVN0cl0gPSAgdmFsdWU7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0ID0gcGF0aFBhcnRzW2ldO1xuICAgICAgaWYgKGkgPT09IHBhdGhQYXJ0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIG9ialtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFvYmpbcGFydF0pIHtcbiAgICAgICAgICBjb25zdCBuZXh0UGFydCA9IHBhdGhQYXJ0c1tpICsgMV07XG4gICAgICAgICAgaWYgKGlzTmFOKG5leHRQYXJ0KSkge1xuICAgICAgICAgICAgb2JqW3BhcnRdID0ge307XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtwYXJ0XSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvYmogPSBvYmpbcGFydF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoZmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBnZXREb3RLZXkoZmllbGQua2V5KSxcbiAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEVycm9ycygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoXy5nZXQoc2VydmljZSwgJ2Vycm9ycycpKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQXJyYXlJbmRleChyZXNvbHZlLCBrZXkpIHtcbiAgICB3aGlsZShyZXNvbHZlLmluY2x1ZGVzKCdhcnJheUluZGV4JykpIHtcbiAgICAgIGlmKF8uaXNOdW1iZXIoa2V5KSkgcmV0dXJuIHJlc29sdmUucmVwbGFjZSgvYXJyYXlJbmRleC9nLCBrZXkpO1xuICAgICAgY29uc3QgYXJyYXlJbmRleEtleSA9IC8oW14uW10qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVsxXSArICdcXFxcWygtP1xcXFxkKylcXFxcXScpO1xuICAgICAgY29uc3QgaW5kZXggPSByZS5leGVjKGtleSk7XG4gICAgICBpZighaW5kZXgpIHJldHVybiByZXNvbHZlO1xuICAgICAgcmVzb2x2ZSA9IHJlc29sdmUucmVwbGFjZShuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMF0ucmVwbGFjZSgvKFxcW3xcXF0pL2csICdcXFxcJDEnKSwgJ2cnKSwgaW5kZXhbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5kZXgoa2V5KSB7XG4gICAgaWYoXy5pc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gXy5maW5kKGtleS5rZXksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gXy5pc051bWJlcihrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAvXFxbKFxcZCopXFxdLy5leGVjKGtleSlbMV07XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQga2V5Q29weTtcbiAgICBpZiAoIV8uaXNBcnJheShpbmRleCkpIHtcbiAgICAgIGluZGV4ID0gW2luZGV4XTtcbiAgICB9XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB3aGlsZSAoaW5kZXgubGVuZ3RoICYmIGtleUNvcHkuaW5kZXhPZignJykgPiAtMSkge1xuICAgICAgbGV0IGluZGV4T2ZJbmRleCA9IGtleUNvcHkuaW5kZXhPZignJyk7XG4gICAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleC5zaGlmdCgpO1xuICAgIH1cbiAgICBpZihhc0FycmF5KSB7XG4gICAgICByZXR1cm4ga2V5Q29weTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ2V0S2V5KGtleUNvcHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFVwZGF0ZXMoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9ICB0aGlzO1xuICAgIHNlcnZpY2UudXBkYXRlcyA9IDA7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudFVwZGF0ZXMoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9ICB0aGlzO1xuICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgIHNlcnZpY2UucGFyYW1zLnVwZGF0ZXMgPSBzZXJ2aWNlLnVwZGF0ZXM7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLm9wZW5lZC50aGVuKCgpID0+XG4gICAgICAgIHZtLm1vZGFsLmRpc21pc3MoKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRmxleEZvcm1Nb2RhbChjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlLCAkdWliTW9kYWwsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7IG9wZW4gfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxuICAgICAgICA8IS0tIHdlIHByb2Nlc3MgZGVmYXVsdHMgb3Vyc2VsdmVzLCBoZW5jZSBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgLS0+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytb3B0aW9ucz1cInsgc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIH1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGNuRmxleEZvcm1UYWcoKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaCgoKSA9PiB2bS5jb25maWcuc2NoZW1hLCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAkc2NvcGUucmVmcmVzaEFkYm9vayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2bS5tb2RlbFsncmVmcmVzaEFkYm9vayddID0gIXZtLm1vZGVsWydyZWZyZXNoQWRib29rJ107XG4gIH1cblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZ2V0U2NvcGU6IHZtLmNvbmZpZy5nZXRTY29wZSB8fCAoKCkgPT4gJHNjb3BlKSxcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHZtLmNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuXG4gICAgY25GbGV4Rm9ybVNlcnZpY2UuZGVzdHJveVNlcnZpY2Uodm0uc2VydmljZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUhlYWRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZIZWFkZXJDb25maWcnLFxuICAgICAgc3VibWl0OiAnJmZmU3VibWl0JyxcbiAgICAgIGxvYWRPZmZzY3JlZW46ICcmZmZMb2FkT2Zmc2NyZWVuJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm1IZWFkZXIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUubGVhZFwiPnt7Ojp2bS50aXRsZS5sZWFkfX08L2g1PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxpIG5nLXNob3c9XCJ2bS50aXRsZS5pY29uXCIgY2xhc3M9XCJ7e3ZtLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0udGl0bGUubWFpbn19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5zdWJcIj57ezo6dm0udGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uYnV0dG9uQ29udGFpbmVyQ2xhc3MgfHwgJ3BhZ2UtYWN0aW9uLWJ0bnMnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctbW91c2VvdmVyPVwidm0ubG9hZE9mZnNjcmVlbigpXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5yZXR1cm5TdHlsZSA/IHZtLnJldHVyblN0eWxlIDogJ2RlZmF1bHQtZGFyaydcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5yZXR1cm5TdGF0ZVwiXG4gICAgICAgICAgICAgICB1aS1zcmVmPVwie3t2bS5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0ucmV0dXJuVGV4dCB8fCAnQ2FuY2VsJ319XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5jbG9zZUJ1dHRvbi5zdHlsZSA/IHZtLmNsb3NlQnV0dG9uLnN0eWxlIDogJ2RlZmF1bHQtZGFyayd9fVwiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY2xvc2VCdXR0b24uaGFuZGxlcigpXCI+XG4gICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cImJ1dHRvbiBpbiB2bS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVwieydidG4tZ3JvdXAnOiBidXR0b24ub3B0aW9uc31cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKSB8fCB2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1pZj1cImJ1dHRvbi5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwib3B0aW9uIGluIGJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtdXBkYXRlZC1hdCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICBpZD1cImRhdGEtdXBkYXRlZC1hdFwiXG4gICAgICAgICAgICAgbmctaGlkZT1cInZtLmNvbmZpZy5ub0RhdGFcIj5cbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0udXBkYXRlRGF0YSgpXCI+VXBkYXRlIERhdGE8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5gXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGZmSGVhZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmSGVhZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIHZtLnVwZGF0ZURhdGEgPSB1cGRhdGVEYXRhO1xuICB2bS5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAvL2FjdGl2YXRlKCk7XG4gIC8vJHNjb3BlLiRvbignJGRlc3Ryb3knLCBjbGVhbnVwKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLnRpdGxlJywgaW5pdFRpdGxlLCB0cnVlKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLmFjdGlvbkNvbmZpZycsIGluaXRBY3Rpb25Db25maWcsIHRydWUpO1xuXG4gIC8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gaW5pdFRpdGxlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBY3Rpb25Db25maWcoKSB7XG4gICAgKHtcbiAgICAgIHJldHVyblN0YXRlOiB2bS5yZXR1cm5TdGF0ZSxcbiAgICAgIHJldHVyblN0eWxlOiB2bS5yZXR1cm5TdHlsZSxcbiAgICAgIHJldHVyblRleHQ6IHZtLnJldHVyblRleHQsXG4gICAgICBjbG9zZUJ1dHRvbjogdm0uY2xvc2VCdXR0b24sXG4gICAgICBhY3Rpb25zOiB2bS5hY3Rpb25zXG4gICAgfSA9IHZtLmNvbmZpZy5hY3Rpb25Db25maWcgfHwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGF0YSgpIHtcbiAgICAvLyAkc2NvcGUuJGVtaXQoJ2ZmUmVmcmVzaERhdGEnKTtcbiAgICAvLyB0aGlzIGNvbXBvbmVudCB3aWxsIG9mdGVuIGJlIHNpYmxpbmdzIHRvIHRoZSBmbGV4IGZvcm1zIG9uZSxcbiAgICAvLyBzbyBuZWVkIHRvIGJyb2FkY2FzdCBmcm9tIHNoYXJlZCBwYXJlbnQuLi55ZXMgaXQncyB1Z2x5XG4gICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kYnJvYWRjYXN0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=