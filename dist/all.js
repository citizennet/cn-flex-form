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
	      select.showClearAll = select.clearable;
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
	
	    // Needed for batchform to check recursively
	    console.log('processSelectDisplay', selectDisplay);
	    var selectField = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = selectDisplay.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var item = _step.value;
	
	        if (item.selectField) {
	          selectField = item;
	        } else if (item.items) {
	          selectField = _.find(item.items, 'selectField');
	        }
	        if (selectField) {
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
	    console.log('setupSelectDisplay', selectDisplay, selectField);
	    var service = this;
	    var selectFieldKey = service.getKey(selectField.key);
	
	    var selectDisplayItems = [];
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      for (var _iterator2 = selectDisplay.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var item = _step2.value;
	
	        if (!item.items) {
	          selectDisplayItems.push(item);
	        } else if (item.items) {
	          selectDisplayItems.push.apply(selectDisplayItems, _toConsumableArray(item.items));
	        }
	      }
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
	
	    _.each(selectDisplayItems, function (item) {
	
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
	    _.each(selectDisplayItems, function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MWY5YWNmZmIxZDg5YjcyZGU2MCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc051bWJlciIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc1VybCIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzU2NoZWR1bGUiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc2V0VXBkYXRlcyIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsImdldFBhcmFtcyIsInBhcmFtcyIsImV4dGVuZCIsImdldFNjb3BlIiwic2NvcGUiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwidXBkYXRlU2NoZW1hIiwiZ2V0U2NoZW1hRm9ybSIsImdldFBhcmFtT3ZlcnJpZGVzIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImdldE9nS2V5cyIsInJlamVjdCIsImtleXMiLCJpc0RlZmluZWQiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwicmVzdWx0IiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsImNvbnNvbGUiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImN1clZhbCIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsImxpbmsiLCJzcGxpY2UiLCJjb3BpZXMiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwib21pdEhhc2hLZXkiLCJpZGVudGl0eSIsInBhcnRpYWxSaWdodCIsImZpbmRGbiIsImNvbXBvc2UiLCJwYXJ0aWFsIiwic3RhcnRFbXB0eSIsImNsZWFyYWJsZSIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJzaW5nbGVRdWVyeSIsIm1pbkxvb2t1cCIsInRpdGxlUXVlcnkiLCJxIiwic2tpcEZpbHRlcmluZyIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsImxvZyIsInNlbGVjdEZpZWxkIiwibGlua01vZGVsIiwiZmVhdHVyZUtleSIsInNob3dGZWF0dXJlIiwiZmVhdHVyZXMiLCJzaG93Iiwic2VsZWN0S2V5IiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RNb2RlbCIsInNlbGVjdFZhbHVlIiwiaXRlbVZhbHVlIiwic2VsZWN0RmllbGRLZXkiLCJzZWxlY3REaXNwbGF5SXRlbXMiLCJzcGxpdEtleSIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJpc051bGwiLCJ0aGVuIiwib25Qcm9jZXNzRGlmZiIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY3VyS2V5cyIsImNvbXBhY3QiLCJwcmV2U2NoZW1hIiwibmV3U2NoZW1hIiwicmVhZG9ubHkiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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NUNYLFNBQVEsVUFnRE9qQixpQjs7Ozs7Ozs7Ozs7QUNqSGYsVUFBU2tCLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMaEMsZUFBVSxHQURMO0FBRUx0VixZQUFPLEVBQUVFLE1BQU0sYUFBUixFQUZGO0FBR0x4SSxjQUFTLFNBSEo7QUFJTDJSLFdBQU1BO0FBSkQsSUFBUDtBQU1EOztBQUVELFVBQVNBLElBQVQsQ0FBYzZLLE1BQWQsRUFBc0IzRCxJQUF0QixFQUE0QmdILEtBQTVCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQyxZQUFTQyxhQUFULEdBQXlCLENBQUU7QUFDM0J2RCxVQUFPRSxLQUFQLEdBQWUsSUFBSXFELGFBQUosRUFBZjs7QUFFQSxPQUFHdkQsT0FBT2hVLElBQVAsSUFBZWdVLE9BQU9oVSxJQUFQLENBQVl3WCxRQUE5QixFQUF3QztBQUN0Q3hELFlBQU83TCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU9tUCxRQUFRRyxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVMvaUIsS0FBVCxFQUFnQjtBQUN2RTtBQUNBNGlCLGVBQVFJLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUosZUFBUUksWUFBUixDQUFxQixTQUFyQixFQUFnQ2hqQixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOzttQkFFYzBpQixVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MWY5YWNmZmIxZDg5YjcyZGU2MCIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMgPSB7fSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXyh7IC4uLiRzdGF0ZVBhcmFtcywgLi4ub3ZlcnJpZGVzIH0pXG4gICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgLm9taXQodiA9PiAoXy5pc1VuZGVmaW5lZCh2KSB8fCB2ID09PSBudWxsKSlcbiAgICAgICAgLnZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC50eXBlID09PSAndXJsJyxcbiAgICB0eXBlOiAnY24tdXJsJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NyZWF0aXZlaW1hZ2UnLFxuICAgIHR5cGU6ICdjbi1jcmVhdGl2ZWltYWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnZmFjZWJvb2t2aWRlbycsXG4gICAgdHlwZTogJ2NuLWZhY2Vib29rdmlkZW8nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnc2NoZWR1bGUnLFxuICAgIHR5cGU6ICdjbi1zY2hlZHVsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlID09PSAnbnVtYmVyJyxcbiAgICB0eXBlOiAnY24tbnVtYmVyJ1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsImZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1udW1iZXInLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXVybCcsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZScsXG4gICAgJ2NuLXNjaGVkdWxlJyxcbiAgICAnY24tZmFjZWJvb2t2aWRlbydcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICBuZy1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBkZWZhdWx0LXRpbWU9XCJmb3JtLmRlZmF1bHRUaW1lXCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWNhY2hlPVwie3tmb3JtLnNob3dDbGVhckNhY2hlfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5LCBvcHRpb25zKVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS5za2lwRmlsdGVyaW5nfX1cIlxuICAgICAgICAgICAgc2luZ2xlLXF1ZXJ5PVwie3tmb3JtLnNpbmdsZVF1ZXJ5fX1cIlxuICAgICAgICAgICAgZGVib3VuY2UtZGVsYXk9XCJ7e2Zvcm0uZGVib3VuY2VEZWxheX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmctaGlkZT1cImZvcm0ucmVhZG9ubHkgfHwgZm9ybS5yZW1vdmUgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbnVtYmVyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX1cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1udW1iZXJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi11cmwuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL1wiXG4gICAgICAgICAgICAgICBjbi11cmwtZm9ybWF0XG4gICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3MgfHwgaXRlbS5pY29uUGF0aFwiPlxuICAgICAgICAgICAgICAgPGkgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgICAgPGltZyBuZy1pZj1cIml0ZW0uaWNvblBhdGhcIiBjbGFzcz1cImN1c3RvbVwiIG5nLXNyYz1cInt7aXRlbS5pY29uUGF0aH19XCIvPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0XG4gICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J2JvcmRlcmxlc3MnOiBmb3JtLnBvcyA9PT0gMCwgJ25vdGl0bGUnOiBmb3JtLm5vdGl0bGUgfHwgIWZvcm0udGl0bGV9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctaGlkZT1cImZvcm0ubm90aXRsZVwiXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdGV4dC1idXR0b249XCJmb3JtLnRleHRCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24taW1hZ2UtcHJldmlld3M9XCJmb3JtLmRhdGEuaW1hZ2VQcmV2aWV3c1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24ta2V5PVwiZm9ybS5rZXkgJiYgZm9ybS5rZXlbMF1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvbWVkaWEtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3N2dXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y3N2LXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jc3YtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmV1c2FibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1yZXVzYWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tc2VsZWN0LW9yXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBzZWxlY3QtZnJvbT1cImZvcm0ubGlicmFyeVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgIGRpcmVjdGl2ZUlkPVwiZm9ybS5kaXJlY3RpdmVJZFwiXG4gICAgICAgICAgaXRlbS10ZW1wbGF0ZT1cImZvcm0uaXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICB0b2dnbGUtdGV4dD1cImZvcm0udG9nZ2xlVGV4dFwiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICB2aWV3PVwiZm9ybS52aWV3XCI+XG4gICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgPC9jbi1zZWxlY3Qtb3I+XG4gICAgICAgIDxwIG5nLWlmPVwiZm9ybS5sb2FkTW9yZSAmJiBmb3JtLnZpZXcgPT09ICdsaXN0J1wiPlxuICAgICAgICAgIDxhIG5nLWNsaWNrPVwiZm9ybS5sb2FkTW9yZSgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj5Mb2FkIE1vcmU8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10YWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWZmLXRhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxoNj57e2Zvcm0udGl0bGV9fTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiBmb3JtLmNvbHVtbnNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPnt7Y29sLmNvbHVtbkhlYWRlcn19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLXJlcGVhdD1cInJvdyBpbiBmb3JtLml0ZW1zXCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gcm93Lml0ZW1zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb2xcIj48L3NmLWRlY29yYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3JlYXRpdmVpbWFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWNyZWF0aXZlLWltYWdlIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW5nLW1vZGVsLWtleT1cImZvcm0ubmdNb2RlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY24tY3JlYXRpdmUtaW1hZ2U+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tc2NoZWR1bGUuaHRtbCcsXG4gICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3sgZm9ybS5odG1sQ2xhc3MgfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKSB9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7IGZvcm0ua2V5LmpvaW4oJy4nKSB9fVwiPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNuLXNjaGVkdWxlIGZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvY24tc2NoZWR1bGU+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmFjZWJvb2t2aWRlby5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWZhY2Vib29rLXZpZGVvIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXZpZGVvLWtleT1cImZvcm0udmlkZW9LZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXRodW1ibmFpbC1rZXk9XCJmb3JtLnRodW1ibmFpbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24taW1hZ2UtaWQta2V5PVwiZm9ybS5pbWFnZUlkS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1mYWNlYm9vay12aWRlbz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLW51bWJlcic6ICdwcm9jZXNzTnVtYmVyJyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLXVybCc6ICdwcm9jZXNzVXJsJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jcmVhdGl2ZWltYWdlJzogJ3Byb2Nlc3NDcmVhdGl2ZUltYWdlJyxcbiAgJ2NuLWZhY2Vib29rdmlkZW8nOiAncHJvY2Vzc0ZhY2Vib29rVmlkZW8nLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheScsXG4gICdjbi1zY2hlZHVsZSc6ICdwcm9jZXNzU2NoZWR1bGUnXG59O1xuXG4vLyBoYW5kbGVycyB0aGF0IGRvbid0IHJ1biBvbiBzZWNvbmRQYXNzIGFyZSBvbmVzIHRoYXQgc2hvdWxkbid0IGV2ZXIgY2hhbmdlXG4vLyBhbmQgd2Ugd2FudCB0byBhdm9pZCBjb21wb3VuZGluZyB0aGVpciBlZmZlY3RzXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzZWxlY3REaXNwbGF5JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+XG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3dhdGNoJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZWxldGVBcnJheUNvcGllc0ZvcixcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VBbGwsXG4gICAgcGFyc2VBbnksXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzQ3JlYXRpdmVJbWFnZSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmFjZWJvb2tWaWRlbyxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc051bWJlcixcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzVXJsLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NTY2hlZHVsZSxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzZXRVcGRhdGVzLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNjaGVtYVJlZnJlc2gsXG4gICAgc2lsZW5jZUxpc3RlbmVycyxcbiAgICBza2lwRGVmYXVsdHNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVNlcnZpY2UoZm4pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZShmbik7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UuY2xlYW51cCgpO1xuICAgICAgXy5lbXB0eShzZXJ2aWNlKTtcbiAgICAgIF8ucmVtb3ZlKHNlcnZpY2VzLCAocykgPT4gcyA9PT0gc2VydmljZSk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGlmKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIFsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIF0gPSBhcmdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciB7IHNjaGVtYSwgbW9kZWwsIGNvbmZpZyB9ID0gYXJnc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJTZXJ2aWNlID0gZ2V0U2VydmljZSgoc2VydmljZSkgPT4gc2VydmljZS5tb2RlbCA9PT0gbW9kZWwpO1xuICAgIGlmKGN1clNlcnZpY2UpIHtcbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBjdXJTZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgIHNlcnZpY2VzLnB1c2gobmV3U2VydmljZSk7XG4gICAgcmV0dXJuIG5ld1NlcnZpY2U7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMuc2NvcGVDYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcbiAgICB0aGlzLnNraXBEZWZhdWx0ID0ge307XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSBjb25maWcuZ2V0UGFyYW1zID8gY29uZmlnLmdldFBhcmFtcygpIDoge307XG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSwgZGVzdHJveVNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZ2V0U2NvcGUpIHtcbiAgICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICB9XG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgICBzZXJ2aWNlLmdldFBhcmFtT3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyB8fCBfLm5vb3A7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihmaWVsZC5jb25kaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHJlcGxhY2VBcnJheUluZGV4KGZpZWxkLmNvbmRpdGlvbiwgZmllbGQuYXJyYXlJbmRleCB8fCBrZXkpO1xuICAgICAgaWYoIXNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoXy5pc1VuZGVmaW5lZChtb2RlbFZhbHVlKSB8fCAoXG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpID8gYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSA6IF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSAmJlxuICAgICAgICAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdClcbiAgICAgICkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAnY24tdXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIG5leHQgPSBrZXlbMV07XG4gICAgICBpZigvXi0/XFxkKiQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgaWYoa2V5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbnkoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQoZWl0aGVycywgeCA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbGwoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLnJlZHVjZShhbGwsIChhY2MsIHgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGFjYy5wdXNoKHYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGFsbC5sZW5ndGggPT09IG1hdGNoLmxlbmd0aCA/IF8ubGFzdChtYXRjaCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgc2tpcFByb3BIYW5kbGVycykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBleHAuaW5jbHVkZXMoJyB8fCAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQW55KGV4cCkgOiBleHAuaW5jbHVkZXMoJyAmJiAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQWxsKGV4cCkgOiBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgY29uc3QgdmFsMSA9IGZpZWxkUHJvcCA9PT0gJ2NvbmRpdGlvbicgPyB2YWwgKyAnJyA6IHZhbDtcbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZFByb3AsIGZpZWxkKS5zZXQodmFsMSk7XG5cbiAgICBpZighc2tpcFByb3BIYW5kbGVycykge1xuICAgICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZihfLmlzU3RyaW5nKGZpZWxkLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgY29uZGl0aW9uIGlzbid0IGFscmVhZHkgd3JhcHBlZCBpbiBwYXJlbnMsIHdyYXAgaXRcbiAgICAgICAgICBjb25kaXRpb24gPSAvXlxcKC4qXFwpJC8udGVzdChmaWVsZC5jb25kaXRpb24pID9cbiAgICAgICAgICAgIGZpZWxkLmNvbmRpdGlvbiA6XG4gICAgICAgICAgICBgKCR7ZmllbGQuY29uZGl0aW9ufSlgO1xuICAgICAgICB9XG4gICAgICAgIGlmKF8uaXNTdHJpbmcod2F0Y2guY29uZGl0aW9uKSkge1xuICAgICAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/XG4gICAgICAgICAgICBgJHtjb25kaXRpb259ICYmICR7d2F0Y2guY29uZGl0aW9ufWAgOlxuICAgICAgICAgICAgd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBpZihfLmlzU3RyaW5nKGN1ckNvbmRpdGlvbikgJiYgY3VyQ29uZGl0aW9uLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgYXJyYXlJbmRleCBjb3VsZCBub3QgYmUgcmVwYWxjZWQgZnJvbSBleHByZXNzaW9uICcke2N1ckNvbmRpdGlvbn0nYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS51cGRhdGVzICYmIGZpZWxkLnVwZGF0ZVNjaGVtYSAmJiAhc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0pIHtcbiAgICAgIC8vIGJ5IHRoaXMgcG9pbnQgZGVmYXVsdHMgc2hvdWxkIGJlIHByb2Nlc3NlZCBzbyB3ZSBjYW4gZ2V0IHZhbHVlIGRpcmVjdGx5IGZyb20gbW9kZWxcbiAgICAgIGNvbnN0IGN1clZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZChjdXJWYWwpKSBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1clZhbDtcbiAgICB9XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBvbkFycmF5ID0gKGN1ciwgcHJldiwgcmVvcmRlcikgPT4ge1xuXG4gICAgICBpZighcHJldiAmJiBwcmV2ICE9PSAwICYmIChjdXIgfCAwKSA8IDEpIHJldHVybjtcbiAgICAgIHZhciBpLCBsLCBrZXk7XG5cbiAgICAgIGlmKHByZXYgPiBjdXIgfHwgcmVvcmRlcikge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV1gO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFyclZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKGFyclZhbCwgKGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7YXJyS2V5fS5sZW5ndGhgO1xuICAgIGlmKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gICAgLy9pZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBkZWxldGUgc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gc2VydmljZS5zY29wZS4kd2F0Y2goXG4gICAgICAoKSA9PiBzZXJ2aWNlLm1vZGVsLFxuICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmXG4gICAgICAgICAgICAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgICAgICAgICAhaXNJbml0QXJyYXkgJiZcbiAgICAgICAgICAgIHZhbCAhPT0gbnVsbC8qICYmXG4gICAgICAgICAgICAhYW5ndWxhci5lcXVhbHModmFsLCBzZXJ2aWNlLmdldERlZmF1bHQoa2V5KSkqLykge1xuICAgICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZighYW5ndWxhci5lcXVhbHMoc2VydmljZS5wYXJhbXMsIHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgaWYoc2VydmljZS5tb2RlbC5pZCAmJiAhc2VydmljZS51cGRhdGVzICYmIF8uaXNFbXB0eShzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHNlcnZpY2UucmVmcmVzaFNjaGVtYSkpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTY2hlbWFQYXJhbXMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIsIGtleSkge1xuICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgLy8gZWxzZSBpZiAoZm9ybS5jb25kaXRpb24uaW5jbHVkZXMoXCJhcnJheUluZGV4XCIpKSB7XG4gICAgICAgIC8vICAgZm9ybS5jb25kaXRpb24gPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KGZvcm0uY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgc2VydmljZS5hZGRBcnJheUNvcHkoc2NvcGUsIGdlbmVyaWNLZXksIGluZGV4KTtcbiAgICAgICAgc2NvcGUuJGVtaXQoJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBnZW5lcmljS2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXJ2aWNlLmFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtRGVsZXRlU2NvcGUnLCAoZXZlbnQsIHNjb3BlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoc2NvcGUuZm9ybS5rZXkpO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICAgICAgaWYobGlzdGVuZXIpIGxpc3RlbmVyLmhhbmRsZXJzID0gW107XG5cbiAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioa2V5LCBpbmRleCk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICBjb25zdCBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzZXJ2aWNlLmRlbGV0ZUFycmF5Q29waWVzRm9yKHNjb3BlLmZvcm0ubGluaywgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0ZvcihrZXkpO1xuICAgIF8uZWFjaChjb3BpZXMsIGxpc3QgPT4gbGlzdCAmJiBsaXN0LnNwbGljZShpbmRleCwgMSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhY2hpbmcgZHVwbGljYXRlIHNjb3BlIGZvcicsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSA9IHNjb3BlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbVNjb3BlQ2FjaGUoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cdFx0cmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXkgPSBrZXkgfHwgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkpIHNlcnZpY2UuZm9ybUNhY2hlW2tleV0gPSBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Gb3JtQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9EYXRhQ2FjaGUoa2V5LCBtb2RlbFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldID0gbW9kZWxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRGF0YUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHJldHVybiBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hJbnRTdHJJbmRleChleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoLT9cXGQrfFwiLipcInwnLionKV0vKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICBsZXQgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgY29uc3QgcmVwbGFjZWQgPSBbXTtcblxuICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZWQucHVzaCh0b1JlcGxhY2UpO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCBgZmZfciR7cmVwbGFjZWQubGVuZ3RoIC0gMX1fZmZgKTtcbiAgICAgIFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXShbXltcXF1dKikvKTtcblxuICAgIHJldHVybiBtYXRjaCAmJlxuICAgICAgcmVwbGFjZWQubGVuZ3RoID9cbiAgICAgIG1hdGNoLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGxldCBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlZFtpbmRleF0pO1xuICAgICAgICAgIFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgICB9KSA6XG4gICAgICBtYXRjaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24obmVzdGVkLCBkZXB0aCkuZ2V0KCk7XG4gICAgICBjb25zdCBrZXlWYWwgPSBfLmlzVW5kZWZpbmVkKHBhcnNlZCkgP1xuICAgICAgICAnJyA6XG4gICAgICAgIF8uaXNTdHJpbmcocGFyc2VkKSA/XG4gICAgICAgICAgYFwiJHtwYXJzZWR9XCJgIDpcbiAgICAgICAgICBwYXJzZWQ7XG4gICAgICBleHAgPSBleHAucmVwbGFjZShgWyR7bmVzdGVkfV1gLCBgWyR7a2V5VmFsfV1gKTtcbiAgICAgIFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYgKF8uaXNBcnJheShtb2RlbCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRLZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrZXkpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIF8uZWFjaChjaGlsZEtleXMsIChrKSA9PiB7XG4gICAgICAgICAgICBza2lwS2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhlZENoaWxkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGssIFtpbmRleCwgaV0pO1xuICAgICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkQ2hpbGRLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc2tpcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRLZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCxcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjtcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc051bWJlcihmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcmwoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXVybCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZhY2Vib29rVmlkZW8oZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1mYWNlYm9va3ZpZGVvJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDcmVhdGl2ZUltYWdlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3JlYXRpdmVpbWFnZSc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBsZXQgb21pdEhhc2hLZXkgPSB2YWxQcm9wID8gIF8uaWRlbnRpdHkgOiBfLnBhcnRpYWxSaWdodChfLm9taXQsIFwiJCRoYXNoS2V5XCIpXG4gICAgbGV0IGZpbmRGbiA9IHZhbFByb3AgP1xuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgXy5wYXJ0aWFsKF8uc2V0LCB7fSwgdmFsUHJvcCksIG9taXRIYXNoS2V5KSA6XG4gICAgICBfLmNvbXBvc2UoXy5wYXJ0aWFsKF8uZmluZCwgdGl0bGVNYXApLCBvbWl0SGFzaEtleSlcbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHZhbC5tYXAoZmluZEZuKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEZuKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVkdWxlKGZpZWxkKSB7XG4gICAgICBmaWVsZC5zdGFydEVtcHR5ID0gdHJ1ZTtcbiAgICAgIGZpZWxkLnR5cGUgPSAnY24tc2NoZWR1bGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJBbGwgPSBzZWxlY3QuY2xlYXJhYmxlO1xuICAgICAgc2VsZWN0LmdldFRpdGxlTWFwID0gKCkgPT5cbiAgICAgICAgc2VsZWN0LnRpdGxlTWFwIHx8IHNlcnZpY2Uuc2NoZW1hLmRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV07XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zO1xuICAgICAgY29uc3QgcGFyYW1zS2V5cyA9IF8ua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJDYWNoZSA9ICEhc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnJlZnJlc2hEYXRhO1xuICAgICAgc2VsZWN0LnNpbmdsZVF1ZXJ5ID0gc2VsZWN0Lm1pbkxvb2t1cCA9PT0gMDtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gKHEsIHsgcmVmcmVzaERhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPVxuICAgICAgICAgIF8ocGFyYW1zS2V5cylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdyZWZyZXNoRGF0YScpIHtcbiAgICAgICAgICAgICAgaWYgKHJlZnJlc2hEYXRhKSBhY2NbcXVlcnlQYXJhbXNba2V5XV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGV4cCA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgocXVlcnlQYXJhbXNba2V5XSwgc2VsZWN0LmFycmF5SW5kZXgpO1xuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuICAgICAgICAgICAgICBhY2Nba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgaWYoIV8uaXNOdW1iZXIoc2VsZWN0Lm1pbkxvb2t1cCkpIHNlbGVjdC5taW5Mb29rdXAgPSBwYXJhbXNLZXlzLmxlbmd0aCA/IDMgOiAwO1xuICAgICAgaWYoIV8uaGFzKHNlbGVjdCwgJ3NraXBGaWx0ZXJpbmcnKSkgc2VsZWN0LnNraXBGaWx0ZXJpbmcgPSAhIXNlbGVjdC5taW5Mb29rdXA7XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZighXy5pc051bWJlcihzZWxlY3QubWluTG9va3VwKSkgc2VsZWN0Lm1pbkxvb2t1cCA9IDA7XG5cbiAgICBpZihzY2hlbWEuaXRlbXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgXy5lYWNoKHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChzY2hlbWEuZGVmYXVsdCkpIHtcbiAgICAgICAgICBkZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIFwia2V5XCI6IGtleSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHNjaGVtYS5kZWZhdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYoZGVmYXVsdHMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdC5vbkFkZCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQpIHtcbiAgICAgICAgICBpZih2YWwudmFsdWUgJiYgZXZlbnQgPT09ICd0YWctYWRkZWQnKSB7XG4gICAgICAgICAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgICAgaWYoIXZhbC52YWx1ZVtwcm9wLmtleV0pIHZhbC52YWx1ZVtwcm9wLmtleV0gPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHNlbGVjdC5pdGVtRm9ybWF0dGVyID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoc2VsZWN0LmRpc3BsYXlGb3JtYXQpO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3QudHlwZS5pbmNsdWRlcygnY24tYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGlmKHNlbGVjdC5pdGVtcykge1xuICAgICAgICBzZWxlY3QuZGV0YWlsZWRMaXN0ID0gdHJ1ZTtcblxuICAgICAgICBpZihzZWxlY3QuaXRlbXNbMF0udHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICBpZihzZWxlY3QuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlbGVjdC5pdGVtcywgKGkpID0+IGkuZGVzdHJveVN0cmF0ZWd5ID0gXCJyZXRhaW5cIik7XG4gICAgICAgICAgICBzZWxlY3QuaXRlbXMgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBpdGVtczogc2VsZWN0Lml0ZW1zXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZHNldChzZWxlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJztcbiAgICAgICAgc2VsZWN0LmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFzZWxlY3Quc2VsZWN0aW9uU3R5bGUpIHtcbiAgICAgICAgICBzZWxlY3Quc2VsZWN0aW9uU3R5bGUgPSBzZWxlY3Qua2V5ID09PSAndGFncycgP1xuICAgICAgICAgICAgJ3RhZ3MnIDogKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScgJiYgc2VsZWN0LnNjaGVtYS5tYXhJdGVtcyAhPT0gMSkgP1xuICAgICAgICAgICAgICAnbGlzdCcgOiAnc2VsZWN0JztcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUnO1xuICAgICAgfVxuXG4gICAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJG9uKCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgKGUsIGRhdGEpID0+IHtcbiAgICAgICAgICBpZihkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG1vZGVsVmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICBpZih2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pO1xuICAgICAgICAgICAgICBpZih2YWxpZCA9PT0gdW5kZWZpbmVkIHx8IChfLmlzQXJyYXkodmFsaWQpICYmIF8uaXNFbXB0eSh2YWxpZCkpKSBtb2RlbFZhbHVlLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdC5rZXksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZm9ybUN0cmwgJiYgc2VydmljZS5mb3JtQ3RybFtzZXJ2aWNlLmdldEtleShzZWxlY3Qua2V5KV07XG4gICAgICAgIGlmKGZvcm0gJiYgZm9ybS4kc2V0RGlydHkpIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICB9LCBzZWxlY3QudXBkYXRlU2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVG9nZ2xlKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS50eXBlID0gJ2NuLXRvZ2dsZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSGVscChoZWxwKSB7XG4gICAgaGVscC5odG1sQ2xhc3MgPSAnaGVscC1ibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGlzcGxheShkaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRpc3BsYXkudHlwZSA9ICdjbi1kaXNwbGF5JztcbiAgICBkaXNwbGF5LmdldERpc3BsYXkgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShkaXNwbGF5LmRpc3BsYXlGb3JtYXQsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RlbXBsYXRlKHRwbCwgcGFyc2VTY29wZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvL3ZhciBwcm9jZXNzb3IgPSAvPChcXFMrKVtePl0qPi4qPFxcL1xcMT4vLnRlc3QodHBsKSA/ICRjb21waWxlIDogJGludGVycG9sYXRlO1xuICAgIHZhciBwcm9jZXNzb3IgPSAkaW50ZXJwb2xhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBhcnJheUluZGV4KSB7XG4gICAgICBpZihwYXJzZVNjb3BlKSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICAgICAgc2NvcGUgPSBfLm1hcChzY29wZSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSAnYXJyYXlJbmRleCcgPyBhcnJheUluZGV4IDoga2V5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjb3BlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUsIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3Nvcih0cGwpKHNjb3BlKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RhYmxlKHRhYmxlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHRhYmxlLnR5cGUgPSAnY24tdGFibGUnO1xuICAgIHRhYmxlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXy5leHRlbmQocm93Lml0ZW1zW2ldLCB0YWJsZS5jb2x1bW5zW2ldKTtcbiAgICAgICAgLy9pZihyb3cuY29sdW1uc1tpXS5rZXkpIHJvdy5jb2x1bW5zW2ldLmtleSA9IE9iamVjdFBhdGgucGFyc2Uocm93LmNvbHVtbnNbaV0ua2V5KTtcbiAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQocm93Lml0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSk7XG5cbiAgICAvLyBOZWVkZWQgZm9yIGJhdGNoZm9ybSB0byBjaGVjayByZWN1cnNpdmVseVxuICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzU2VsZWN0RGlzcGxheScsIHNlbGVjdERpc3BsYXkpXG4gICAgbGV0IHNlbGVjdEZpZWxkID0gbnVsbDtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHNlbGVjdERpc3BsYXkuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnNlbGVjdEZpZWxkKSB7XG4gICAgICAgIHNlbGVjdEZpZWxkID0gaXRlbTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChpdGVtLml0ZW1zLCAnc2VsZWN0RmllbGQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RGaWVsZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyA/XG4gICAgICBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSA6XG4gICAgICBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGJhbmQtYWlkIGJlY2F1c2UgdGhpcyBpcyBiZWluZyBzZXQgYXMgYW4gb2JqZWN0IGluc3RlYWQgb2YgYXJyYXkgc29td2hlcmVcbiAgICAvLyBkZWVwIGluIHRoZSBhbmd1bGFyIG9yIGFuZ3VsYXItc2NoZW1hLWZvcm0gbmV0aGVyLXJlZ2lvbnNcbiAgICBjb25zdCBsaW5rTW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmxpbmssIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKCFsaW5rTW9kZWwuZ2V0KCkpIGxpbmtNb2RlbC5zZXQoW10pO1xuXG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaWYoaXRlbS5zZWxlY3RGaWVsZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBrZXkgPSBfLmlzQXJyYXkoaXRlbS5rZXkpID8gaXRlbS5rZXkgOiBPYmplY3RQYXRoLnBhcnNlKGl0ZW0ua2V5KTtcbiAgICAgIGNvbnN0IGZlYXR1cmVLZXkgPSBfLmxhc3Qoa2V5KTtcblxuICAgICAgaXRlbS5zaG93RmVhdHVyZSA9IGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICAgICAgICBzZXJ2aWNlXG4gICAgICAgICAgICAgIC5wYXJzZUV4cHJlc3Npb24oYG1vZGVsLiR7c2VsZWN0RGlzcGxheS5saW5rfVske2luZGV4fV0uZmVhdHVyZXNgKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoYXJyYXlJbmRleClgO1xuICAgICAgaXRlbS5jb25kaXRpb24gPSBpdGVtLmNvbmRpdGlvbiA/XG4gICAgICAgIGAoJHtpdGVtLmNvbmRpdGlvbn0pICYmICR7Y29uZGl0aW9ufWAgOiBjb25kaXRpb247XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnNvbGUubG9nKCdzZXR1cFNlbGVjdERpc3BsYXknLCBzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZClcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RGaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG5cbiAgICBsZXQgc2VsZWN0RGlzcGxheUl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaXRlbSBvZiBzZWxlY3REaXNwbGF5Lml0ZW1zKSB7XG4gICAgICBpZiAoIWl0ZW0uaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0RGlzcGxheUl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0RGlzcGxheUl0ZW1zLnB1c2goLi4uaXRlbS5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXlJdGVtcywgaXRlbSA9PiB7XG5cbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdEZpZWxkS2V5fWApXG4gICAgICAgICAgICAgIC5nZXQoKTtcbiAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIGZlYXR1cmVzICYmXG4gICAgICAgICAgICAgIGZlYXR1cmVzXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhmZWF0dXJlS2V5KTtcbiAgICAgICAgcmV0dXJuIHNob3c7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjb25kaXRpb24gPSBgZm9ybS5zaG93RmVhdHVyZSgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5SXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNjaGVtYVJlZnJlc2gocmVmcmVzaCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UodXBkYXRlU2NoZW1hID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgLi4uY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhzZXJ2aWNlLmdldFBhcmFtT3ZlcnJpZGVzKCkpLFxuICAgICAgICAuLi5zZXJ2aWNlLnBhcmFtc1xuICAgICAgfTtcbiAgICAgIGxldCBkaWZmID0gXy5vbWl0KGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKSwgJ3VwZGF0ZXMnKTtcbiAgICAgIGxldCBrZXlzO1xuXG4gICAgICBpZighXy5pc0VtcHR5KGRpZmYpIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgWyd1cGRhdGVTY2hlbWEnLCAndXBkYXRlcyddKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtcyA9IHNjaGVtYS5wYXJhbXM7XG4gICAgICBpZiAoY25GbGV4Rm9ybUNvbmZpZy5vblByb2Nlc3NEaWZmKSB7XG4gICAgICAgIGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZihzY2hlbWEpXG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmRhdGEpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgc2NoZW1hLmRpZmYuZGF0YSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5kYXRhLCAoZGF0YSwgcHJvcCkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5kYXRhICYmICFfLmlzRW1wdHkoc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhKSAmJiAhZGF0YS5yZXNldCkge1xuICAgICAgICAgICAgZGF0YS5kYXRhID0gc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhLmNvbmNhdChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdID0gZGF0YTtcbiAgICAgICAgICBpZihzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdLCAocmVnaXN0ZXJzKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVycy5mb3JFYWNoKHJlZ2lzdGVyID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUocmVnaXN0ZXIuZmllbGQsIHJlZ2lzdGVyLnByb3AsIHJlZ2lzdGVyLmV4cCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5cyA9IFtdO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5zY2hlbWEpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cyk7XG4gICAgICAgICAgY29uc3QgY3VyS2V5cyA9IF8uZmlsdGVyKGtleXMsIGsgPT4gXy5zdGFydHNXaXRoKGssIGtleSkpO1xuICAgICAgICAgIF8uZWFjaChjdXJLZXlzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybXMgPSBfLmNvbXBhY3QoW1xuICAgICAgICAgICAgICBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSxcbiAgICAgICAgICAgICAgLi4uKHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KSB8fCBbXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBfLmVhY2goZm9ybXMsIGZvcm0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2U2NoZW1hID0gZm9ybS5zY2hlbWE7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSAgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXksIHsgW3NjaGVtYS5rZXldOiBzY2hlbWEgfSk7XG4gICAgICAgICAgICAgIGlmKHByZXZTY2hlbWEucmVhZG9ubHkgJiYgIW5ld1NjaGVtYS5yZWFkb25seSkgZm9ybS5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCAoZm9ybSwga2V5KSA9PiB7XG5cbiAgICAgICAgICBpZigha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjb3B5LCBmb3JtKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5yZXNldFVwZGF0ZXMoKTtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uaXRpb24gPSAndHJ1ZScgdG8gZm9yY2VcbiAgICAvLyBjb25kaXRpb24gdG8gZXZhbCB0cnVlLCBzbyB3ZSBzZXQgdGhlIHVwZGF0ZSBjb25kaXRpb24gdG8gJ3RydWUnXG4gICAgLy8gYmVmb3JlIGNvbXBhcmluZ1xuICAgIGlmKCF1cGRhdGUuY29uZGl0aW9uICYmIGN1cnJlbnQuY29uZGl0aW9uKSB1cGRhdGUuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgIGxldCByZWRyYXcgPSAhaXNDaGlsZCAmJiBjdXJyZW50LmNvbmRpdGlvbiAhPT0gdXBkYXRlLmNvbmRpdGlvbjtcblxuICAgIF8uZXh0ZW5kKGN1cnJlbnQsIF8ub21pdCh1cGRhdGUsICdpdGVtcycsICdrZXknKSk7XG5cbiAgICBjdXJyZW50Ll9vZ0tleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYoIXVwZGF0ZVtwcm9wXSkge1xuICAgICAgICBkZWxldGUgY3VycmVudFtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBnZXRPZ0tleXModXBkYXRlKTtcblxuICAgIC8vc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcblxuICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybVJlcHJvY2Vzc0ZpZWxkJywga2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSB7XG4gICAgICBjb25zb2xlLmxvZygnVE9ETzogc2VlIGlmIHRoaXMgY2FuIGJlIHJlbW92ZWQnKTtcbiAgICAgIGN1cnJlbnQucmVkcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG90S2V5KGtleSkge1xuICAgIHJldHVybiAoXy5pc1N0cmluZyhrZXkpID8gT2JqZWN0UGF0aC5wYXJzZShrZXkpIDoga2V5KS5qb2luKCcuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEVycm9yKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZ2V0RG90S2V5KGZpZWxkLmtleSksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF8uZ2V0KHNlcnZpY2UsICdlcnJvcnMnKSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgd2hpbGUocmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSB7XG4gICAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICAgIGNvbnN0IGFycmF5SW5kZXhLZXkgPSAvKFteLltdKilcXFthcnJheUluZGV4XFxdLy5leGVjKHJlc29sdmUpO1xuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgICAgaWYoIWluZGV4KSByZXR1cm4gcmVzb2x2ZTtcbiAgICAgIHJlc29sdmUgPSByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gL1xcWyhcXGQqKVxcXS8uZXhlYyhrZXkpWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGtleUNvcHk7XG4gICAgaWYgKCFfLmlzQXJyYXkoaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IFtpbmRleF07XG4gICAgfVxuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4Lmxlbmd0aCAmJiBrZXlDb3B5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgIGxldCBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXguc2hpZnQoKTtcbiAgICB9XG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICBzZXJ2aWNlLnVwZGF0ZXMgPSAwO1xuICAgIHNlcnZpY2UucGFyYW1zLnVwZGF0ZXMgPSBzZXJ2aWNlLnVwZGF0ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0cGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1vZGFsTWFwID0ge307XG5jb25zdCBwcm9taXNlTWFwID0ge307XG5cbmZ1bmN0aW9uIGdldFByb21pc2VzKHN0YXRlKSB7XG4gIGlmKHByb21pc2VNYXBbc3RhdGVdKSByZXR1cm4gcHJvbWlzZU1hcFtzdGF0ZV07XG5cbiAgY29uc3QgcHJvbWlzZSA9IHt9O1xuICBwcm9taXNlTWFwW3N0YXRlXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBnZXRQcm9taXNlcyhzdGF0ZSk7XG4gIGlmKHByb21pc2VzW2lkXSkgcmV0dXJuIHByb21pc2VzW2lkXTtcblxuICBjb25zdCBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgcHJvbWlzZXNbaWRdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcigpIHtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hcHBpbmcsXG4gICAgJGdldDogY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZE1hcHBpbmcoc3RhdGUsIGRlZikge1xuICAgIGRlZi5yZXNvbHZlID0geyBwYXJlbnQgfTtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBkZWY7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnQoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nLFxuICAgIHJlbW92ZU1hcHBpbmdcbiAgfTtcblxuICAvLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU1hcHBpbmcoc3RhdGUsIGlkLCBwYXJlbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgc2NvcGUgfSA9IG9wdGlvbnM7XG4gICAgaWYoc2NvcGUpIHtcbiAgICAgIHNjb3BlLm9wdGlvbnMgPSBzY29wZS5vcHRpb25zIHx8IHt9O1xuICAgICAgc2NvcGUub3B0aW9ucy5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIG1vZGFsTWFwW3N0YXRlXS5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBjb25zdCBkID0gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKTtcbiAgICBkLnJlc29sdmUoeyBwYXJlbnQsIG9wdGlvbnMgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcHBpbmcoc3RhdGUpIHtcbiAgICBjb25zdCBkID0gJHEuZGVmZXIoKTtcbiAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGQucmVzb2x2ZSh7IHN0YXRlOiBtb2RhbE1hcFtzdGF0ZV0sIG9wdGlvbnMgfSk7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgLy8gSG9sZGluZyBvbiB0byBzY29wZSByZWZlcmVuY2VzIGNyZWF0ZXMgbWVtb3J5IGxlYWtzXG4gIGZ1bmN0aW9uIHJlbW92ZU1hcHBpbmcoc3RhdGUpIHtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBudWxsO1xuICAgIHByb21pc2VNYXBbc3RhdGVdID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gRmxleEZvcm1Nb2RhbExvYWRlcihGbGV4Rm9ybU1vZGFsLCAkc3RhdGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gRkZNb2RhbExvYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IEZGTW9kYWxMb2FkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgLy8gdW5iaW5kIGV2ZW50XG4gICAgdm0uZGlzbWlzc0V2ZW50KCk7XG4gICAgdm0ubW9kYWwub3BlbmVkLnRoZW4oKCkgPT5cbiAgICAgICAgdm0ubW9kYWwuZGlzbWlzcygpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgICAgICAgLmdldE1hcHBpbmcoJHN0YXRlUGFyYW1zLm1vZGFsKVxuICAgICAgICAudGhlbigoeyBzdGF0ZSwgb3B0aW9ucyB9KSA9PiAoe1xuICAgICAgICAgIG1vZGFsOiAkdWliTW9kYWwub3BlbihzdGF0ZSksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDwhLS0gd2UgcHJvY2VzcyBkZWZhdWx0cyBvdXJzZWx2ZXMsIGhlbmNlIHNldFNjaGVtYURlZmF1bHRzOiBmYWxzZSAtLT5cbiAgICAgICAgPG5nLWZvcm1cbiAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCJcbiAgICAgICAgICBuYW1lPVwie3t2bS5mb3JtTmFtZX19XCJcbiAgICAgICAgICBzZi1vcHRpb25zPVwieyBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgfVwiXG4gICAgICAgICAgc2Ytc2NoZW1hPVwidm0uY29uZmlnLnNjaGVtYS5zY2hlbWFcIlxuICAgICAgICAgIHNmLWZvcm09XCJ2bS5mb3JtXCJcbiAgICAgICAgICBzZi1tb2RlbD1cInZtLm1vZGVsXCI+XG4gICAgICAgIDwvbmctZm9ybT5cbiAgICAgICAgPCEtLSBkZWJ1ZyBwYW5lbCB0byBkaXNwbGF5IG1vZGVsIC0tPlxuICAgICAgICA8c2VjdGlvbiBuZy1pZj1cInZtLmRlYnVnXCI+XG4gICAgICAgICAgPGpzb24tZXhwbG9yZXIganNvbi1kYXRhPVwidm0ubW9kZWwgfHwgJy4uLm1vZGVsIG5vdCBsb2FkZWQgeWV0J1wiLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmQ29uZmlnJyxcbiAgICAgIG1vZGVsOiAnPWZmTW9kZWwnLFxuICAgICAgZm9ybUluZGV4OiAnPWZmRm9ybUluZGV4JyxcbiAgICAgIGZvcm1OYW1lOiAnPWZmRm9ybU5hbWUnLFxuICAgICAgZGVsYXlGb3JtOiAnPWZmRGVsYXlGb3JtJyxcbiAgICAgIGNsZWFudXBFdmVudDogJz1mZkNsZWFudXBFdmVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtKGNuRmxleEZvcm1TZXJ2aWNlLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgY25GbGV4Rm9ybVRhZygpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKCgpID0+IHZtLmNvbmZpZy5zY2hlbWEsIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBnZXRTY29wZTogdm0uY29uZmlnLmdldFNjb3BlIHx8ICgoKSA9PiAkc2NvcGUpLFxuICAgICAgICAgIGZvcm1DdHJsOiB2bS5jb25maWcuZm9ybUN0cmwsXG4gICAgICAgICAgZ2V0U2NoZW1hOiB2bS5jb25maWcuZ2V0U2NoZW1hLFxuICAgICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZtLnNlcnZpY2UuY29tcGlsZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwgdm0uY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG5cbiAgICBjbkZsZXhGb3JtU2VydmljZS5kZXN0cm95U2VydmljZSh2bS5zZXJ2aWNlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgLy9hY3RpdmF0ZSgpO1xuICAvLyRzY29wZS4kb24oJyRkZXN0cm95JywgY2xlYW51cCk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy50aXRsZScsIGluaXRUaXRsZSwgdHJ1ZSk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy5hY3Rpb25Db25maWcnLCBpbml0QWN0aW9uQ29uZmlnLCB0cnVlKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGluaXRUaXRsZSgpIHtcbiAgICAoeyB0aXRsZTogdm0udGl0bGUgfSA9IHZtLmNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWN0aW9uQ29uZmlnKCkge1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgLy8gJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gICAgLy8gdGhpcyBjb21wb25lbnQgd2lsbCBvZnRlbiBiZSBzaWJsaW5ncyB0byB0aGUgZmxleCBmb3JtcyBvbmUsXG4gICAgLy8gc28gbmVlZCB0byBicm9hZGNhc3QgZnJvbSBzaGFyZWQgcGFyZW50Li4ueWVzIGl0J3MgdWdseVxuICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJGJyb2FkY2FzdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICBmdW5jdGlvbiBmZlZhbGlkYXRlVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmVmFsaWRhdGVUYWcoKTtcblxuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9