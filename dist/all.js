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
	
	  var sharedAutocompleteTpl = '\n        <tags-input\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          ng-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          display-property="{{form.displayProperty || \'name\'}}"\n          value-property="{{form.valueProperty}}"\n          placeholder="{{form.placeholder || \' \'}}"\n          clear-on-blur="true"\n          add-on-comma="false"\n          add-from-autocomplete-only="{{!form.allowNew}}"\n          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n          on-init="form.onInit($tag, form, $event, $setter)"\n          model-type="{{form.getSchemaType()}}"\n          array-value-type="{{form.schema.items.type}}"\n          hide-tags="{{form.detailedList}}"\n          tags-style="{{form.selectionStyle}}"\n          required="{{form.required}}"\n          min-length="{{form.minLength}}"\n          allowed-tags-pattern=".*"\n          dropdown-icon="true"\n          item-formatter="form.itemFormatter"\n          min-tags="{{form.schema.minItems}}"\n          max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\n          allow-bulk="{{form.bulkAdd}}"\n          bulk-delimiter="{{form.bulkDelimiter}}"\n          bulk-placeholder="{{form.bulkPlaceholder}}"\n          show-clear-all="{{form.showClearAll}}"\n          show-clear-cache="{{form.showClearCache}}"\n          show-button="true">\n          <auto-complete\n            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query, options)"\n            skip-filtering="{{form.skipFiltering}}"\n            single-query="{{form.singleQuery}}"\n            debounce-delay="{{form.debounceDelay}}"\n            min-length="{{form.minLookup}}">\n          </auto-complete>\n        </tags-input>';
	
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
	    setupArraySelectDisplay: setupArraySelectDisplay,
	    setupSelectDisplay: setupSelectDisplay,
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
	    console.log('radio', field);
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
	            var val = service.parseExpression(exp).get();
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
	        //if(row.columns[i].key) row.columns[i].key = ObjectPath.parse(row.columns[i].key);
	        service.processField(row.items[i]);
	      }
	    });
	  }
	
	  function processSelectDisplay(selectDisplay) {
	    var service = this;
	    var schema = service.getSchema(selectDisplay.key);
	    var selectField = _.find(selectDisplay.items, 'selectField');
	
	    return schema && schema.type === 'array' ? service.setupArraySelectDisplay(selectDisplay, selectField) : service.setupSelectDisplay(selectDisplay, selectField);
	  }
	
	  function setupArraySelectDisplay(selectDisplay, selectField) {
	    var service = this;
	    // band-aid because this is being set as an object instead of array somwhere
	    // deep in the angular or angular-schema-form nether-regions
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
	  }
	
	  function setupSelectDisplay(selectDisplay, selectField) {
	    var service = this;
	    var selectFieldKey = service.getKey(selectField.key);
	
	    _.each(selectDisplay.items, function (item) {
	      if (item.selectField === true) return;
	
	      var key = _.isArray(item.key) ? item.key : ObjectPath.parse(item.key);
	      var featureKey = _.last(key);
	
	      item.showFeature = function () {
	        var features = service.parseExpression('model.' + selectFieldKey).get();
	        var show = features && features.includes(featureKey);
	        return show;
	      };
	
	      var condition = 'form.showFeature()';
	      item.condition = item.condition ? '(' + item.condition + ') && ' + condition : condition;
	    });
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
	
	      if (schema.diff.form) {
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
	    template: '\n        <div class="col-md-6">\n          <h5 ng-if="vm.title.lead">{{::vm.title.lead}}</h5>\n          <h1>\n            <i ng-show="vm.title.icon" class="{{vm.title.icon}}"/>\n            {{vm.title.main}}\n          </h1>\n          <h5 ng-if="vm.title.sub">{{::vm.title.sub}}</h5>\n        </div>\n        <div class="{{vm.buttonContainerClass || \'page-action-btns\'}}">\n          <div class="btn-options"\n               ng-mouseover="vm.loadOffscreen()">\n            <a class="btn btn-{{vm.returnStyle ? vm.returnStyle : \'default-dark\'"\n               ng-if="vm.returnState"\n               ui-sref="{{vm.returnState}}">\n              {{vm.returnText || \'Cancel\'}}\n            </a>\n            <a class="btn btn-{{vm.closeButton.style ? vm.closeButton.style : \'default-dark\'}}"\n               ng-if="vm.closeButton"\n               ng-click="vm.closeButton.handler()">\n               Cancel\n            </a>\n            <span ng-repeat="button in vm.actions">\n              <span ng-class="{\'btn-group\': button.options}">\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}}"\n                   ng-disabled="vm.isDisabled(button)"\n                   ng-click="vm.submit({handler: button.handler})"\n                   uib-tooltip="{{button.helptext}}"\n                   uib-tooltip-placement="bottom"\n                   ng-bind-html="button.text || \'Save\'">\n                </a>\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}} dropdown-toggle"\n                        ng-disabled="vm.isDisabled(button)"\n                        ng-show="button.options"\n                        data-toggle="dropdown">\n                  <span class="caret"></span>\n                </a>\n                <ul class="dropdown-menu" ng-if="button.options">\n                  <li ng-repeat="option in button.options"\n                      ng-disabled="vm.isDisabled(option)">\n                    <a ng-click="vm.submit({handler: option.handler})"\n                       ng-bind-html="option.text">\n                    </a>\n                  </li>\n                </ul>\n              </span>\n            </span>\n          </div>\n          <p class="data-updated-at text-right"\n             id="data-updated-at"\n             ng-hide="vm.config.noData">\n            <a ng-click="vm.updateData()">Update Data</a>\n          </p>\n        </div>'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NThiNDU3MTVjMzE4MGJmMzE4MiIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc1VybCIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzU2NoZWR1bGUiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc2V0VXBkYXRlcyIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsImdldFBhcmFtcyIsInBhcmFtcyIsImV4dGVuZCIsImdldFNjb3BlIiwic2NvcGUiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwidXBkYXRlU2NoZW1hIiwiZ2V0U2NoZW1hRm9ybSIsImdldFBhcmFtT3ZlcnJpZGVzIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImdldE9nS2V5cyIsInJlamVjdCIsImtleXMiLCJpc0RlZmluZWQiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwicmVzdWx0IiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsImNvbnNvbGUiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImN1clZhbCIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsImxpbmsiLCJzcGxpY2UiLCJjb3BpZXMiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJsb2ciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwib21pdEhhc2hLZXkiLCJpZGVudGl0eSIsInBhcnRpYWxSaWdodCIsImZpbmRGbiIsImNvbXBvc2UiLCJwYXJ0aWFsIiwic3RhcnRFbXB0eSIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJzaW5nbGVRdWVyeSIsIm1pbkxvb2t1cCIsInRpdGxlUXVlcnkiLCJxIiwic2tpcEZpbHRlcmluZyIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwibGlua01vZGVsIiwiZmVhdHVyZUtleSIsInNob3dGZWF0dXJlIiwiZmVhdHVyZXMiLCJzaG93Iiwic2VsZWN0S2V5IiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RNb2RlbCIsInNlbGVjdFZhbHVlIiwiaXRlbVZhbHVlIiwic2VsZWN0RmllbGRLZXkiLCJzcGxpdEtleSIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJpc051bGwiLCJ0aGVuIiwib25Qcm9jZXNzRGlmZiIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY3VyS2V5cyIsImNvbXBhY3QiLCJwcmV2U2NoZW1hIiwibmV3U2NoZW1hIiwicmVhZG9ubHkiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNm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bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NThiNDU3MTVjMzE4MGJmMzE4MiIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMgPSB7fSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXyh7IC4uLiRzdGF0ZVBhcmFtcywgLi4ub3ZlcnJpZGVzIH0pXG4gICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgLm9taXQodiA9PiAoXy5pc1VuZGVmaW5lZCh2KSB8fCB2ID09PSBudWxsKSlcbiAgICAgICAgLnZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC50eXBlID09PSAndXJsJyxcbiAgICB0eXBlOiAnY24tdXJsJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NyZWF0aXZlaW1hZ2UnLFxuICAgIHR5cGU6ICdjbi1jcmVhdGl2ZWltYWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnZmFjZWJvb2t2aWRlbycsXG4gICAgdHlwZTogJ2NuLWZhY2Vib29rdmlkZW8nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnc2NoZWR1bGUnLFxuICAgIHR5cGU6ICdjbi1zY2hlZHVsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJyxcbiAgICB0eXBlOiAnY24tbnVtYmVyJ1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsImZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1udW1iZXInLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXVybCcsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZScsXG4gICAgJ2NuLXNjaGVkdWxlJyxcbiAgICAnY24tZmFjZWJvb2t2aWRlbydcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICBuZy1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBkZWZhdWx0LXRpbWU9XCJmb3JtLmRlZmF1bHRUaW1lXCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWNhY2hlPVwie3tmb3JtLnNob3dDbGVhckNhY2hlfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5LCBvcHRpb25zKVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS5za2lwRmlsdGVyaW5nfX1cIlxuICAgICAgICAgICAgc2luZ2xlLXF1ZXJ5PVwie3tmb3JtLnNpbmdsZVF1ZXJ5fX1cIlxuICAgICAgICAgICAgZGVib3VuY2UtZGVsYXk9XCJ7e2Zvcm0uZGVib3VuY2VEZWxheX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmctaGlkZT1cImZvcm0ucmVhZG9ubHkgfHwgZm9ybS5yZW1vdmUgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbnVtYmVyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX1cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1udW1iZXJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi11cmwuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiXG4gICAgICAgICAgICAgICBjbi11cmwtZm9ybWF0XG4gICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3MgfHwgaXRlbS5pY29uUGF0aFwiPlxuICAgICAgICAgICAgICAgPGkgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgICAgPGltZyBuZy1pZj1cIml0ZW0uaWNvblBhdGhcIiBjbGFzcz1cImN1c3RvbVwiIG5nLXNyYz1cInt7aXRlbS5pY29uUGF0aH19XCIvPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0XG4gICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J2JvcmRlcmxlc3MnOiBmb3JtLnBvcyA9PT0gMCwgJ25vdGl0bGUnOiBmb3JtLm5vdGl0bGUgfHwgIWZvcm0udGl0bGV9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctaGlkZT1cImZvcm0ubm90aXRsZVwiXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdGV4dC1idXR0b249XCJmb3JtLnRleHRCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24taW1hZ2UtcHJldmlld3M9XCJmb3JtLmRhdGEuaW1hZ2VQcmV2aWV3c1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24ta2V5PVwiZm9ybS5rZXkgJiYgZm9ybS5rZXlbMF1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvbWVkaWEtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3N2dXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y3N2LXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jc3YtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmV1c2FibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1yZXVzYWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tc2VsZWN0LW9yXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBzZWxlY3QtZnJvbT1cImZvcm0ubGlicmFyeVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgIGRpcmVjdGl2ZUlkPVwiZm9ybS5kaXJlY3RpdmVJZFwiXG4gICAgICAgICAgaXRlbS10ZW1wbGF0ZT1cImZvcm0uaXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICB0b2dnbGUtdGV4dD1cImZvcm0udG9nZ2xlVGV4dFwiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICB2aWV3PVwiZm9ybS52aWV3XCI+XG4gICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgPC9jbi1zZWxlY3Qtb3I+XG4gICAgICAgIDxwIG5nLWlmPVwiZm9ybS5sb2FkTW9yZSAmJiBmb3JtLnZpZXcgPT09ICdsaXN0J1wiPlxuICAgICAgICAgIDxhIG5nLWNsaWNrPVwiZm9ybS5sb2FkTW9yZSgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj5Mb2FkIE1vcmU8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10YWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWZmLXRhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxoNj57e2Zvcm0udGl0bGV9fTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiBmb3JtLmNvbHVtbnNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPnt7Y29sLmNvbHVtbkhlYWRlcn19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLXJlcGVhdD1cInJvdyBpbiBmb3JtLml0ZW1zXCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gcm93Lml0ZW1zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb2xcIj48L3NmLWRlY29yYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3JlYXRpdmVpbWFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWNyZWF0aXZlLWltYWdlIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW5nLW1vZGVsLWtleT1cImZvcm0ubmdNb2RlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY24tY3JlYXRpdmUtaW1hZ2U+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tc2NoZWR1bGUuaHRtbCcsXG4gICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3sgZm9ybS5odG1sQ2xhc3MgfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKSB9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7IGZvcm0ua2V5LmpvaW4oJy4nKSB9fVwiPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNuLXNjaGVkdWxlIGZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvY24tc2NoZWR1bGU+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmFjZWJvb2t2aWRlby5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWZhY2Vib29rLXZpZGVvIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXZpZGVvLWtleT1cImZvcm0udmlkZW9LZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXRodW1ibmFpbC1rZXk9XCJmb3JtLnRodW1ibmFpbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24taW1hZ2UtaWQta2V5PVwiZm9ybS5pbWFnZUlkS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1mYWNlYm9vay12aWRlbz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLW51bWJlcic6ICdwcm9jZXNzTnVtYmVyJyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLXVybCc6ICdwcm9jZXNzVXJsJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jcmVhdGl2ZWltYWdlJzogJ3Byb2Nlc3NDcmVhdGl2ZUltYWdlJyxcbiAgJ2NuLWZhY2Vib29rdmlkZW8nOiAncHJvY2Vzc0ZhY2Vib29rVmlkZW8nLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheScsXG4gICdjbi1zY2hlZHVsZSc6ICdwcm9jZXNzU2NoZWR1bGUnXG59O1xuXG4vLyBoYW5kbGVycyB0aGF0IGRvbid0IHJ1biBvbiBzZWNvbmRQYXNzIGFyZSBvbmVzIHRoYXQgc2hvdWxkbid0IGV2ZXIgY2hhbmdlXG4vLyBhbmQgd2Ugd2FudCB0byBhdm9pZCBjb21wb3VuZGluZyB0aGVpciBlZmZlY3RzXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzZWxlY3REaXNwbGF5JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+XG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3dhdGNoJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZWxldGVBcnJheUNvcGllc0ZvcixcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VBbGwsXG4gICAgcGFyc2VBbnksXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzQ3JlYXRpdmVJbWFnZSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmFjZWJvb2tWaWRlbyxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc051bWJlcixcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzVXJsLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NTY2hlZHVsZSxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzZXRVcGRhdGVzLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNjaGVtYVJlZnJlc2gsXG4gICAgc2lsZW5jZUxpc3RlbmVycyxcbiAgICBza2lwRGVmYXVsdHNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVNlcnZpY2UoZm4pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZShmbik7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UuY2xlYW51cCgpO1xuICAgICAgXy5lbXB0eShzZXJ2aWNlKTtcbiAgICAgIF8ucmVtb3ZlKHNlcnZpY2VzLCAocykgPT4gcyA9PT0gc2VydmljZSk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGlmKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIFsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIF0gPSBhcmdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciB7IHNjaGVtYSwgbW9kZWwsIGNvbmZpZyB9ID0gYXJnc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJTZXJ2aWNlID0gZ2V0U2VydmljZSgoc2VydmljZSkgPT4gc2VydmljZS5tb2RlbCA9PT0gbW9kZWwpO1xuICAgIGlmKGN1clNlcnZpY2UpIHtcbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBjdXJTZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgIHNlcnZpY2VzLnB1c2gobmV3U2VydmljZSk7XG4gICAgcmV0dXJuIG5ld1NlcnZpY2U7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMuc2NvcGVDYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcbiAgICB0aGlzLnNraXBEZWZhdWx0ID0ge307XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSBjb25maWcuZ2V0UGFyYW1zID8gY29uZmlnLmdldFBhcmFtcygpIDoge307XG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSwgZGVzdHJveVNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZ2V0U2NvcGUpIHtcbiAgICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICB9XG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgICBzZXJ2aWNlLmdldFBhcmFtT3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyB8fCBfLm5vb3A7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihmaWVsZC5jb25kaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHJlcGxhY2VBcnJheUluZGV4KGZpZWxkLmNvbmRpdGlvbiwgZmllbGQuYXJyYXlJbmRleCB8fCBrZXkpO1xuICAgICAgaWYoIXNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoXy5pc1VuZGVmaW5lZChtb2RlbFZhbHVlKSB8fCAoXG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpID8gYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSA6IF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSAmJlxuICAgICAgICAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdClcbiAgICAgICkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAnY24tdXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0uaXRlbXMucHJvcGVydGllcztcbiAgICAgICAgICBrZXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLnByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYXJyYXkgaXRlbVxuICAgIGZpcnN0ID0ga2V5WzBdIHx8ICdpdGVtcyc7XG5cbiAgICByZXR1cm4gZGVwdGhbZmlyc3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkID0gZmllbGQua2V5ID8gZmllbGQgOiBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZmllbGQpO1xuICAgIHJldHVybiBmaWVsZCAmJiAoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkgPyBmaWVsZC5kZWZhdWx0IDogZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5kZWZhdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdhdGNoYWJsZXMoZXhwKSB7XG4gICAgY29uc3Qgd2F0Y2hhYmxlcyA9IFtdO1xuICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICBsZXQgcmVwbGFjZVN0ciA9ICcnO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBpZigvXi0/XFxkKyQvLnRlc3QobmVzdGVkWzFdKSB8fCAvXihcInwnKS4qKFwifCcpJC8udGVzdChuZXN0ZWRbMV0pKSB7XG4gICAgICAgIHJlcGxhY2VTdHIgPSBuZXN0ZWRbMF07XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJ2ZmX3JlcGxhY2VfZmYnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3YXRjaGFibGVzLnB1c2gobmVzdGVkWzFdLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cikpO1xuICAgICAgICByZXBsYWNlU3RyID0gJyc7XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJycpO1xuICAgICAgfVxuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi53YXRjaGFibGVzLCBleHAucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goZmllbGQucmVzb2x2ZSwgZnVuY3Rpb24oZGF0YVByb3AsIGZpZWxkUHJvcCkge1xuICAgICAgZGF0YVByb3AgPSByZXBsYWNlQXJyYXlJbmRleChkYXRhUHJvcCwga2V5IHx8IGZpZWxkLmFycmF5SW5kZXgpO1xuICAgICAgaWYoZGF0YVByb3AuaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSByZXR1cm47XG5cbiAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgdHJ1ZSk7XG5cbiAgICAgIGdldFdhdGNoYWJsZXMoZGF0YVByb3ApLmZvckVhY2goKHdhdGNoYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBbLCBiYXNlLCBleHBdID0gd2F0Y2hhYmxlLm1hdGNoKC8oc2NoZW1hXFwuZGF0YVxcLnxtb2RlbFxcLikoXFxTKykvKSB8fCBbXTtcblxuICAgICAgICBpZihiYXNlKSB7XG4gICAgICAgICAgaWYoYmFzZSA9PT0gJ3NjaGVtYS5kYXRhLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgZGF0YVByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGJhc2UgPT09ICdtb2RlbC4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihleHAsICgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUFueShleHAsIGJhc2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgcmVzdWx0O1xuICAgIGNvbnN0IGVpdGhlcnMgPSBleHAuc3BsaXQoJyB8fCAnKTtcbiAgICBjb25zdCBtYXRjaCA9IF8uZmluZChlaXRoZXJzLCB4ID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUFsbChleHAsIGJhc2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBhbGwgPSBleHAuc3BsaXQoJyAmJiAnKTtcbiAgICBjb25zdCBtYXRjaCA9IF8ucmVkdWNlKGFsbCwgKGFjYywgeCkgPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgYWNjLnB1c2godik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gYWxsLmxlbmd0aCA9PT0gbWF0Y2gubGVuZ3RoID8gXy5sYXN0KG1hdGNoKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YSA9IGV4cC5pbmNsdWRlcygnIHx8ICcpID9cbiAgICAgIHNlcnZpY2UucGFyc2VBbnkoZXhwKSA6IGV4cC5pbmNsdWRlcygnICYmICcpID9cbiAgICAgIHNlcnZpY2UucGFyc2VBbGwoZXhwKSA6IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG5cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhUHJvcCA9IGV4cC5tYXRjaCgvc2NoZW1hXFwuZGF0YVxcLiguKykvKVsxXTtcbiAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKGBkYXRhOiR7ZGF0YVByb3B9OiR7ZGF0YS5jdXJzb3J9YCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBmaWVsZC5sb2FkTW9yZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWwgPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcbiAgICBjb25zdCB2YWwxID0gZmllbGRQcm9wID09PSAnY29uZGl0aW9uJyA/IHZhbCArICcnIDogdmFsO1xuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkUHJvcCwgZmllbGQpLnNldCh2YWwxKTtcblxuICAgIGlmKCFza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgICBwcm9wID09PSBmaWVsZFByb3AgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCBleHApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goeyBmaWVsZCwgcHJvcDogZmllbGRQcm9wLCBleHAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5jb25kaXRpb25hbHMsIChjb25kaXRpb24sIGtleSkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzZXJ2aWNlLmdldEZyb21TY29wZUNhY2hlKHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkpO1xuICAgICAgICBpZihrZXkgPT09ICdyZXF1aXJlZCcgJiYgc2NvcGUpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1WYWxpZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmllbGRcbiAgICAgICAgICAuY29uZGl0aW9uYWxzW2tleV1cbiAgICAgICAgICAubWF0Y2goL21vZGVsXFwuKFteXFxzXSspL2cpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGgubWF0Y2goL21vZGVsXFwuKFteXFxzXSspLylbMV0pXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRXYXRjaChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFmaWVsZC53YXRjaCkgcmV0dXJuO1xuXG4gICAgbGV0IHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcbiAgICBmaWVsZC53YXRjaCA9IF8uaXNBcnJheShmaWVsZC53YXRjaCkgPyBmaWVsZC53YXRjaCA6IFtmaWVsZC53YXRjaF07XG5cbiAgICBfLmVhY2goZmllbGQud2F0Y2gsIGZ1bmN0aW9uKHdhdGNoKSB7XG4gICAgICBpZih3YXRjaC5yZXNvbHV0aW9uKSB7XG4gICAgICAgIGxldCBjb25kaXRpb247XG4gICAgICAgIGlmKF8uaXNTdHJpbmcoZmllbGQuY29uZGl0aW9uKSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBjb25kaXRpb24gaXNuJ3QgYWxyZWFkeSB3cmFwcGVkIGluIHBhcmVucywgd3JhcCBpdFxuICAgICAgICAgIGNvbmRpdGlvbiA9IC9eXFwoLipcXCkkLy50ZXN0KGZpZWxkLmNvbmRpdGlvbikgP1xuICAgICAgICAgICAgZmllbGQuY29uZGl0aW9uIDpcbiAgICAgICAgICAgIGAoJHtmaWVsZC5jb25kaXRpb259KWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYoXy5pc1N0cmluZyh3YXRjaC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uID9cbiAgICAgICAgICAgIGAke2NvbmRpdGlvbn0gJiYgJHt3YXRjaC5jb25kaXRpb259YCA6XG4gICAgICAgICAgICB3YXRjaC5jb25kaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgKGRheXN8aG91cnMpLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHtcbiAgICAgICAgICAgICAgdmFsOiBhZGp1c3RtZW50LmRhdGVbMV0sXG4gICAgICAgICAgICAgIHVuaXRzOiBhZGp1c3RtZW50LmRhdGVbMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZS52YWwsICcnKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5tYXRoID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcK3xcXC18XFwvfFxcKikgPyhcXFMrKS8pO1xuXG4gICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5vcGVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICAnKyc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICctJzogJ3N1YnRyYWN0JyxcbiAgICAgICAgICAgICAgICAnKic6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgJy8nOiAnZGl2aWRlJ1xuICAgICAgICAgICAgICB9W2FkanVzdG1lbnQubWF0aFsxXV07XG5cbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5hZGp1c3RlciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFkanVzdG1lbnQubWF0aFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ubWF0Y2goLyhcXFMrKSA/PSA/KFxcUyspLyk7XG5cbiAgICAgICAgICBoYW5kbGVyID0gKHZhbCwgcHJldiwga2V5LCB0cmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gY29uZGl0aW9uICYmIHJlcGxhY2VBcnJheUluZGV4KGNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgICAgIGlmKF8uaXNTdHJpbmcoY3VyQ29uZGl0aW9uKSAmJiBjdXJDb25kaXRpb24uaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBhcnJheUluZGV4IGNvdWxkIG5vdCBiZSByZXBhbGNlZCBmcm9tIGV4cHJlc3Npb24gJyR7Y3VyQ29uZGl0aW9ufSdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cGRhdGVQYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsxXSwga2V5KTtcbiAgICAgICAgICAgIGxldCBmcm9tUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMl0sIGtleSk7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih1cGRhdGVQYXRoKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgbG9vcCB3aGVyZSB0d28gd2F0Y2hlcyBrZWVwIHRyaWdnZXJpbmcgZWFjaCBvdGhlclxuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gdXBkYXRlLnBhdGgoKS5rZXkpIHJldHVybjtcbiAgICAgICAgICAgIHRyaWdnZXIgPSB1cGRhdGUucGF0aCgpLmtleTtcblxuICAgICAgICAgICAgbGV0IGZyb20gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmcm9tUGF0aCk7XG5cbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjdXJDb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQobW9tZW50KGZyb20uZ2V0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChhZGp1c3RtZW50LmRhdGUudmFsLCBhZGp1c3RtZW50LmRhdGUudW5pdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgLy8gYnkgdGhpcyBwb2ludCBkZWZhdWx0cyBzaG91bGQgYmUgcHJvY2Vzc2VkIHNvIHdlIGNhbiBnZXQgdmFsdWUgZGlyZWN0bHkgZnJvbSBtb2RlbFxuICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1clZhbCkpIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyVmFsO1xuICAgIH1cbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIGlmIGZpZWxkIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGtleVxuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSAmJiAhXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGlmKCFrZXkua2V5ICYmIGtleS5pdGVtcykge1xuICAgICAgICBfLmVhY2goa2V5Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGtleSA9IGtleS5rZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyguKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0sIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1ciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IF8uZ2V0KHNlcnZpY2UuZ2V0U2NoZW1hKGtleSksICdkZWZhdWx0Jyk7XG5cbiAgICBpZighc2VydmljZS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdmFyIHByZXYgPSBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgICAvL2lmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSBzZXJ2aWNlLnNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHNlcnZpY2UubW9kZWwsXG4gICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZihfLmlzRnVuY3Rpb24oc2VydmljZS5yZWZyZXNoU2NoZW1hKSkge1xuICAgICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAvLyBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgLy8gICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVTY29wZScsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgc2VydmljZS5kZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioc2NvcGUuZm9ybS5saW5rLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFycmF5Q29waWVzRm9yKGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKGtleSk7XG4gICAgXy5lYWNoKGNvcGllcywgbGlzdCA9PiBsaXN0ICYmIGxpc3Quc3BsaWNlKGluZGV4LCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoIV8uaXNTdHJpbmcoZXhwKSAmJiAhXy5pc0FycmF5KGV4cCkpIHtcbiAgICAgIHJldHVybiB7IGdldDogKCkgPT4gZXhwIH07XG4gICAgfVxuXG4gICAgLy8gaWYgZXhwcmVzc2lvbiBpcyBzcGVjaWZpYyB2YWx1ZVxuICAgIGlmKC9eKG51bGx8ZmFsc2V8dHJ1ZXx1bmRlZmluZWR8J1teXFwnXSonfFwiW15cXFwiXSpcInwtP1swLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBjb25zdCBpc1N0ciA9IGV4cC5tYXRjaCgvXCIoW15cXFwiXSopXCIvKSB8fCBleHAubWF0Y2goLycoW15cXCddKiknLyk7XG4gICAgICAgICAgaWYoaXNTdHIpIHJldHVybiBpc1N0clsxXTtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbiB9ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZihub0NvbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbjogdHJ1ZSB9KSB8fCB7fTtcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5kZWZhdWx0c1tyZXNvbHZlZC5yZXBsYWNlKCdtb2RlbC4nLCAnJyldO1xuICAgICAgICAgIGlmKG9iaikge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKCk7XG4gICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNpbGVuY2VMaXN0ZW5lcnMocmVzb2x2ZWQsIGRlcHRoKTtcbiAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0cyhyZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG5cbiAgICAgIHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiBleHAsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGtleTogbWF0Y2hbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBzaWxlbmNlTGlzdGVuZXJzKGtleVN0YXJ0LCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgIGlmKGtleS5pbmRleE9mKGtleVN0YXJ0KSA9PT0gMCkge1xuICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgZGVwdGgpLmdldCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBEZWZhdWx0cyhrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGluZGV4ID0ga2V5U3RhcnQubWF0Y2goL1xcW1xcZCpcXF0vKSA/IGdldEFycmF5SW5kZXgoa2V5U3RhcnQpIDogbnVsbDtcbiAgICBjb25zdCBrcyA9IHN0cmlwSW5kZXhlcyhrZXlTdGFydCk7XG4gICAgY29uc3Qga2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa3MpKTtcbiAgICBsZXQgc2tpcEtleXMgPSBbXTtcbiAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGluZGV4KTtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZiAoXy5pc0FycmF5KG1vZGVsKSkge1xuICAgICAgICBjb25zdCBjaGlsZEtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtleSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgXy5lYWNoKGNoaWxkS2V5cywgKGspID0+IHtcbiAgICAgICAgICAgIHNraXBLZXlzLnB1c2goayk7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVkQ2hpbGRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoaywgW2luZGV4LCBpXSk7XG4gICAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRDaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFza2lwS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLFxuICAgIC8vIHNjb3BlIGZvciB0aGlzIHNlY3Rpb24gd2lsbCBzb29uIGJlIGVtaXR0ZWQsIHNvIGNhbiBza2lwXG4gICAgaWYoc2Vjb25kUGFzcykgcmV0dXJuO1xuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTnVtYmVyKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1udW1iZXInO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlcmNlbnRhZ2UoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXBlcmNlbnRhZ2UnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VybChmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tdXJsJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmFjZWJvb2tWaWRlbyhmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWZhY2Vib29rdmlkZW8nO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NyZWF0aXZlSW1hZ2UoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jcmVhdGl2ZWltYWdlJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZWRpYVVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLW1lZGlhdXBsb2FkJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDc3ZVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jc3Z1cGxvYWQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvcyhmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmFkaW9zJztcbiAgICBjb25zb2xlLmxvZygncmFkaW8nLCBmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBsZXQgb21pdEhhc2hLZXkgPSB2YWxQcm9wID8gIF8uaWRlbnRpdHkgOiBfLnBhcnRpYWxSaWdodChfLm9taXQsIFwiJCRoYXNoS2V5XCIpXG4gICAgbGV0IGZpbmRGbiA9IHZhbFByb3AgP1xuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgXy5wYXJ0aWFsKF8uc2V0LCB7fSwgdmFsUHJvcCksIG9taXRIYXNoS2V5KSA6XG4gICAgICBfLmNvbXBvc2UoXy5wYXJ0aWFsKF8uZmluZCwgdGl0bGVNYXApLCBvbWl0SGFzaEtleSlcbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHZhbC5tYXAoZmluZEZuKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEZuKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVkdWxlKGZpZWxkKSB7XG4gICAgICBmaWVsZC5zdGFydEVtcHR5ID0gdHJ1ZTtcbiAgICAgIGZpZWxkLnR5cGUgPSAnY24tc2NoZWR1bGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZvcm0ua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgaWYobmV3VmFsICE9PSB1bmRlZmluZWQpIHNldHRlcihuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFF1ZXJ5KSB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcztcbiAgICAgIGNvbnN0IHBhcmFtc0tleXMgPSBfLmtleXMocXVlcnlQYXJhbXMpO1xuICAgICAgc2VsZWN0LnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQ2FjaGUgPSAhIXNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5yZWZyZXNoRGF0YTtcbiAgICAgIHNlbGVjdC5zaW5nbGVRdWVyeSA9IHNlbGVjdC5taW5Mb29rdXAgPT09IDA7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IChxLCB7IHJlZnJlc2hEYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID1cbiAgICAgICAgICBfKHBhcmFtc0tleXMpXG4gICAgICAgICAgLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdxJykge1xuICAgICAgICAgICAgICBhY2NbcXVlcnlQYXJhbXNba2V5XV0gPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAncmVmcmVzaERhdGEnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWZyZXNoRGF0YSkgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBleHAgPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KHF1ZXJ5UGFyYW1zW2tleV0sIHNlbGVjdC5hcnJheUluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gcGFyYW1zS2V5cy5sZW5ndGggPyAzIDogMDtcbiAgICAgIGlmKCFfLmhhcyhzZWxlY3QsICdza2lwRmlsdGVyaW5nJykpIHNlbGVjdC5za2lwRmlsdGVyaW5nID0gISFzZWxlY3QubWluTG9va3VwO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoIV8uaXNOdW1iZXIoc2VsZWN0Lm1pbkxvb2t1cCkpIHNlbGVjdC5taW5Mb29rdXAgPSAwO1xuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTtcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCB8fCAoXy5pc0FycmF5KHZhbGlkKSAmJiBfLmlzRW1wdHkodmFsaWQpKSkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpO1xuICAgIGNvbnN0IHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpO1xuXG4gICAgcmV0dXJuIHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyA/XG4gICAgICBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSA6XG4gICAgICBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGJhbmQtYWlkIGJlY2F1c2UgdGhpcyBpcyBiZWluZyBzZXQgYXMgYW4gb2JqZWN0IGluc3RlYWQgb2YgYXJyYXkgc29td2hlcmVcbiAgICAvLyBkZWVwIGluIHRoZSBhbmd1bGFyIG9yIGFuZ3VsYXItc2NoZW1hLWZvcm0gbmV0aGVyLXJlZ2lvbnNcbiAgICBjb25zdCBsaW5rTW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmxpbmssIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKCFsaW5rTW9kZWwuZ2V0KCkpIGxpbmtNb2RlbC5zZXQoW10pO1xuXG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaWYoaXRlbS5zZWxlY3RGaWVsZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBrZXkgPSBfLmlzQXJyYXkoaXRlbS5rZXkpID8gaXRlbS5rZXkgOiBPYmplY3RQYXRoLnBhcnNlKGl0ZW0ua2V5KTtcbiAgICAgIGNvbnN0IGZlYXR1cmVLZXkgPSBfLmxhc3Qoa2V5KTtcblxuICAgICAgaXRlbS5zaG93RmVhdHVyZSA9IGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICAgICAgICBzZXJ2aWNlXG4gICAgICAgICAgICAgIC5wYXJzZUV4cHJlc3Npb24oYG1vZGVsLiR7c2VsZWN0RGlzcGxheS5saW5rfVske2luZGV4fV0uZmVhdHVyZXNgKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoYXJyYXlJbmRleClgO1xuICAgICAgaXRlbS5jb25kaXRpb24gPSBpdGVtLmNvbmRpdGlvbiA/XG4gICAgICAgIGAoJHtpdGVtLmNvbmRpdGlvbn0pICYmICR7Y29uZGl0aW9ufWAgOiBjb25kaXRpb247XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdEZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdEZpZWxkS2V5fWApXG4gICAgICAgICAgICAgIC5nZXQoKTtcbiAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIGZlYXR1cmVzICYmXG4gICAgICAgICAgICAgIGZlYXR1cmVzXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhmZWF0dXJlS2V5KTtcbiAgICAgICAgcmV0dXJuIHNob3c7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjb25kaXRpb24gPSBgZm9ybS5zaG93RmVhdHVyZSgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIHRoZSBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdERpc3BsYXkua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZihkZWZhdWx0cyAmJiAhbW9kZWwuZ2V0KCkpIHtcbiAgICAgIG1vZGVsLnNldChkZWZhdWx0cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKHVwZGF0ZVNjaGVtYSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIC4uLmNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcygpKSxcbiAgICAgICAgLi4uc2VydmljZS5wYXJhbXNcbiAgICAgIH07XG4gICAgICBsZXQgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSksICd1cGRhdGVzJyk7XG4gICAgICBsZXQga2V5cztcblxuICAgICAgaWYoIV8uaXNFbXB0eShkaWZmKSB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIFsndXBkYXRlU2NoZW1hJywgJ3VwZGF0ZXMnXSkpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuICAgICAgaWYgKGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZikge1xuICAgICAgICBjbkZsZXhGb3JtQ29uZmlnLm9uUHJvY2Vzc0RpZmYoc2NoZW1hKVxuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IF8uc3RhcnRzV2l0aChrLCBrZXkpKTtcbiAgICAgICAgICBfLmVhY2goY3VyS2V5cywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1zID0gXy5jb21wYWN0KFtcbiAgICAgICAgICAgICAgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSksXG4gICAgICAgICAgICAgIC4uLihzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSkgfHwgW10pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXy5lYWNoKGZvcm1zLCBmb3JtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldlNjaGVtYSA9IGZvcm0uc2NoZW1hO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgID0gc2VydmljZS5nZXRTY2hlbWEoa2V5LCB7IFtzY2hlbWEua2V5XTogc2NoZW1hIH0pO1xuICAgICAgICAgICAgICBpZihwcmV2U2NoZW1hLnJlYWRvbmx5ICYmICFuZXdTY2hlbWEucmVhZG9ubHkpIGZvcm0ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgKGZvcm0sIGtleSkgPT4ge1xuXG4gICAgICAgICAgaWYoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcblxuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UucmVzZXRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfLmdldChzZXJ2aWNlLCAnZXJyb3JzJykpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXFsoXFxkKilcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBrZXlDb3B5O1xuICAgIGlmICghXy5pc0FycmF5KGluZGV4KSkge1xuICAgICAgaW5kZXggPSBbaW5kZXhdO1xuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleC5sZW5ndGggJiYga2V5Q29weS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICBsZXQgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4LnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgc2VydmljZS51cGRhdGVzID0gMDtcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLm9wZW5lZC50aGVuKCgpID0+XG4gICAgICAgIHZtLm1vZGFsLmRpc21pc3MoKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRmxleEZvcm1Nb2RhbChjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlLCAkdWliTW9kYWwsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7IG9wZW4gfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxuICAgICAgICA8IS0tIHdlIHByb2Nlc3MgZGVmYXVsdHMgb3Vyc2VsdmVzLCBoZW5jZSBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgLS0+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytb3B0aW9ucz1cInsgc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIH1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGNuRmxleEZvcm1UYWcoKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaCgoKSA9PiB2bS5jb25maWcuc2NoZW1hLCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZ2V0U2NvcGU6IHZtLmNvbmZpZy5nZXRTY29wZSB8fCAoKCkgPT4gJHNjb3BlKSxcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHZtLmNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuXG4gICAgY25GbGV4Rm9ybVNlcnZpY2UuZGVzdHJveVNlcnZpY2Uodm0uc2VydmljZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUhlYWRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZIZWFkZXJDb25maWcnLFxuICAgICAgc3VibWl0OiAnJmZmU3VibWl0JyxcbiAgICAgIGxvYWRPZmZzY3JlZW46ICcmZmZMb2FkT2Zmc2NyZWVuJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm1IZWFkZXIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUubGVhZFwiPnt7Ojp2bS50aXRsZS5sZWFkfX08L2g1PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxpIG5nLXNob3c9XCJ2bS50aXRsZS5pY29uXCIgY2xhc3M9XCJ7e3ZtLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0udGl0bGUubWFpbn19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5zdWJcIj57ezo6dm0udGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uYnV0dG9uQ29udGFpbmVyQ2xhc3MgfHwgJ3BhZ2UtYWN0aW9uLWJ0bnMnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctbW91c2VvdmVyPVwidm0ubG9hZE9mZnNjcmVlbigpXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5yZXR1cm5TdHlsZSA/IHZtLnJldHVyblN0eWxlIDogJ2RlZmF1bHQtZGFyaydcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5yZXR1cm5TdGF0ZVwiXG4gICAgICAgICAgICAgICB1aS1zcmVmPVwie3t2bS5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0ucmV0dXJuVGV4dCB8fCAnQ2FuY2VsJ319XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5jbG9zZUJ1dHRvbi5zdHlsZSA/IHZtLmNsb3NlQnV0dG9uLnN0eWxlIDogJ2RlZmF1bHQtZGFyayd9fVwiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY2xvc2VCdXR0b24uaGFuZGxlcigpXCI+XG4gICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cImJ1dHRvbiBpbiB2bS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVwieydidG4tZ3JvdXAnOiBidXR0b24ub3B0aW9uc31cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctc2hvdz1cImJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1pZj1cImJ1dHRvbi5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwib3B0aW9uIGluIGJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogb3B0aW9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cIm9wdGlvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS11cGRhdGVkLWF0IHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgIGlkPVwiZGF0YS11cGRhdGVkLWF0XCJcbiAgICAgICAgICAgICBuZy1oaWRlPVwidm0uY29uZmlnLm5vRGF0YVwiPlxuICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS51cGRhdGVEYXRhKClcIj5VcGRhdGUgRGF0YTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm1IZWFkZXIoJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gZmZIZWFkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZIZWFkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIC8vYWN0aXZhdGUoKTtcbiAgLy8kc2NvcGUuJG9uKCckZGVzdHJveScsIGNsZWFudXApO1xuICAkc2NvcGUuJHdhdGNoKCd2bS5jb25maWcudGl0bGUnLCBpbml0VGl0bGUsIHRydWUpO1xuICAkc2NvcGUuJHdhdGNoKCd2bS5jb25maWcuYWN0aW9uQ29uZmlnJywgaW5pdEFjdGlvbkNvbmZpZywgdHJ1ZSk7XG5cbiAgLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBpbml0VGl0bGUoKSB7XG4gICAgKHsgdGl0bGU6IHZtLnRpdGxlIH0gPSB2bS5jb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFjdGlvbkNvbmZpZygpIHtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIC8vICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICAgIC8vIHRoaXMgY29tcG9uZW50IHdpbGwgb2Z0ZW4gYmUgc2libGluZ3MgdG8gdGhlIGZsZXggZm9ybXMgb25lLFxuICAgIC8vIHNvIG5lZWQgdG8gYnJvYWRjYXN0IGZyb20gc2hhcmVkIHBhcmVudC4uLnllcyBpdCdzIHVnbHlcbiAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRicm9hZGNhc3QoJ2ZmUmVmcmVzaERhdGEnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRGlzYWJsZWQoYnRuQ29uZmlnKSB7XG4gICAgaWYodm0uY29uZmlnLmlzRGlzYWJsZWQpIHJldHVybiB2bS5jb25maWcuaXNEaXNhYmxlZChidG5Db25maWcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgZnVuY3Rpb24gZmZWYWxpZGF0ZVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZlZhbGlkYXRlVGFnKCk7XG5cbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmZWYWxpZGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==