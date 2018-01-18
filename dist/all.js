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
	
	  var extensions = ['cn-fieldset', 'cn-toggle', 'cn-datetimepicker', 'cn-autocomplete', 'cn-autocomplete-detailed', 'cn-currency', 'cn-radios', 'cn-radiobuttons', 'cn-percentage', 'cn-display', 'cn-mediaupload', 'cn-csvupload', 'cn-reusable', 'cn-table', 'cn-creativeimage', 'cn-schedule', 'cn-facebookvideo'];
	
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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-datetimepicker.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}"\n               ng-show="showTitle()">{{form.title}}</label>\n        <cn-datetimepicker\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          is-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          min-date="form.minDate"\n          max-date="form.maxDate"\n          max-view="{{form.maxView}}"\n          cn-date-required="form.required"\n          placeholder="{{form.placeholder}}"\n          model-type="{{form.schema.type}}"\n          model-formatter="form.modelFormatter"\n          model-parser="form.modelParser"\n          view-formatter="form.viewFormatter"\n          view-parser="form.viewParser"\n          format-string={{form.dateFormat}}\n          icon-class={{form.iconClass}}>\n        </cn-datetimepicker>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  var sharedAutocompleteTpl = '\n        <tags-input\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          ng-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          display-property="{{form.displayProperty || \'name\'}}"\n          value-property="{{form.valueProperty}}"\n          placeholder="{{form.placeholder || \' \'}}"\n          clear-on-blur="true"\n          add-on-comma="false"\n          add-from-autocomplete-only="{{!form.allowNew}}"\n          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n          on-init="form.onInit($tag, form, $event, $setter)"\n          model-type="{{form.getSchemaType()}}"\n          array-value-type="{{form.schema.items.type}}"\n          hide-tags="{{form.detailedList}}"\n          tags-style="{{form.selectionStyle}}"\n          required="{{form.required}}"\n          min-length="{{form.minLength}}"\n          allowed-tags-pattern=".*"\n          dropdown-icon="true"\n          item-formatter="form.itemFormatter"\n          min-tags="{{form.schema.minItems}}"\n          max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\n          allow-bulk="{{form.bulkAdd}}"\n          bulk-delimiter="{{form.bulkDelimiter}}"\n          bulk-placeholder="{{form.bulkPlaceholder}}"\n          show-clear-all="{{form.showClearAll}}"\n          show-clear-cache="{{form.showClearCache}}"\n          show-button="true">\n          <auto-complete\n            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query, options)"\n            skip-filtering="{{form.skipFiltering}}"\n            single-query="{{form.singleQuery}}"\n            min-length="{{form.minLookup}}">\n          </auto-complete>\n        </tags-input>';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <div sf-array="form">\n          <ol class="list-group cn-autocomplete-list"\n              ng-if="modelArray.length"\n              ng-model="modelArray">\n            <li class="list-group-item {{form.fieldHtmlClass}}"\n                ng-repeat="item in modelArray track by $index">\n              <button ng-hide="form.readonly || form.remove === null"\n                      ng-click="deleteFromArray($index)"\n                      type="button" class="close pull-right">\n                <span aria-hidden="true">&times;</span>\n              </button>\n              <sf-decorator form="copyWithIndex($index)"/>\n            </li>\n          </ol>\n        </div>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-currency.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <label class="input-group-addon"\n                 ng-disabled="form.readonly"\n                 for="{{form.key.join(\'.\')}}">$</label>\n          <input class="form-control"\n                 cn-currency-format="{{form.currencyFormat}}"\n                 cn-currency-placeholder="{{form.placeholder}}"\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="text"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-model="$$value$$">\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radios.html', '<div class="form-group {{form.htmlClass}}"\n            ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n         <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n         <div class="btn-group clearfix">\n           <label class="radio radio-block"\n                  ng-repeat="item in form.titleMap">\n             <input type="radio"\n                    sf-changed="form"\n                    ng-disabled="form.readonly"\n                    ng-model="$$value$$"\n                    ng-model-options="form.ngModelOptions"\n                    schema-validate="form"\n                    ff-validate="form"\n                    ng-value="item.value"\n                    name="{{form.key.join(\'.\')}}">\n             <span class="radio-block-icon" ng-if="item.iconClass">\n               <i class="fa fa-{{item.iconClass}} fa-lg"></i>\n             </span>\n             <span ng-bind-html="item.name"></span>\n           </label>\n         </div>\n         <span class="help-block" sf-message="form.description"></span>\n       </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radiobuttons.html', '\n      <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="btn-group clearfix">\n          <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\n                 ng-repeat="item in form.titleMap">\n            <input type="radio"\n                   class="{{form.fieldHtmlClass}} hide"\n                   sf-changed="form"\n                   ng-disabled="form.readonly"\n                   ng-model="$$value$$"\n                   ng-model-options="form.ngModelOptions"\n                   schema-validate="form"\n                   ff-validate="form"\n                   ng-value="item.value"\n                   name="{{form.key.join(\'.\')}}">\n            <i class="fa fa-{{item.value}} fa-lg"></i>\n            <span ng-bind-html="item.name"></span>\n          </label>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <input class="form-control"\n                 cn-percentage-format\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="number"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key && form.key[0]}}"\n                 name="{{form.key && form.key[0]}}"\n                 ng-model="$$value$$">\n           <div class="input-group-addon"\n                  ng-disabled="form.readonly"\n                  for="{{form.key && form.key[0]}}">%</div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-display.html', '\n      <div class="form-group cn-display{{form.htmlClass}}">\n        <input ng-show="form.key"\n               class="form-control"\n               id="{{form.key.join(\'.\')}}"\n               name="{{form.key.join(\'.\')}}"\n               ng-disabled="true"\n               value="{{form.getDisplay(form.key, form.arrayIndex)}}">\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n      <fieldset \n        ng-disabled="form.readonly"\n        class="schema-form-fieldset {{form.htmlClass}}"\n        ng-class="{\'borderless\': form.pos === 0, \'notitle\': form.notitle || !form.title}">\n        <legend ng-hide="form.notitle"\n                ng-click="form.toggleCollapse(form)"\n                ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                ng-mouseenter="form.render = true">\n          <i ng-show="form.collapsible"\n             class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n          {{ form.title }}\n        </legend>\n        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n        <div uib-collapse="form.collapsed">\n          <div ng-if="form.render">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </div>\n        </div>\n      </fieldset>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <media-upload ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-file-type="form.fileType"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </media-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-csvupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <csv-upload ng-model="$$value$$"\n                      cn-upload-path="form.uploadPath"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </csv-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-reusable.html', '\n      <div class="form-group cn-reusable {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <cn-select-or\n          ng-show="form.key"\n          select-from="form.library"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          sf-changed="form"\n          schema-validate="form"\n          ff-form="form"\n          directiveId="form.directiveId"\n          item-template="form.itemTemplate"\n          toggle-text="form.toggleText"\n          ng-disabled="form.readonly"\n          view="form.view">\n          <sf-decorator ng-repeat="item in form.items" form="item"/>\n        </cn-select-or>\n        <p ng-if="form.loadMore && form.view === \'list\'">\n          <a ng-click="form.loadMore()"\n             class="btn btn-default btn-block">Load More</a>\n        </p>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-table.html', '\n      <div class="form-group cn-ff-table {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <h6>{{form.title}}</h6>\n        <div class="row">\n          <div ng-repeat="col in form.columns" class="{{col.columnWidth}}">\n            <p class="column-header">{{col.columnHeader}}</p>\n          </div>\n        </div>\n        <div class="row" ng-repeat="row in form.items">\n          <div ng-repeat="col in row.items" class="{{col.columnWidth}}">\n            <sf-decorator form="col"></sf-decorator>\n          </div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-creativeimage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-creative-image ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      cn-ng-model-key="form.ngModelKey"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-creative-image>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-schedule.html', '\n      <div class="form-group {{ form.htmlClass }}"\n           ng-class="{ \'has-error\': hasError(), \'has-success\': hasSuccess() }">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{ form.key.join(\'.\') }}">\n          {{ form.title }}\n        </label>\n        <cn-schedule form="form"\n                     ng-model="$$value$$">\n        </cn-schedule>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>\n    ');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-facebookvideo.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-facebook-video ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      cn-video-key="form.videoKey"\n                      cn-thumbnail-key="form.thumbnailKey"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-facebook-video>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
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
	  'cn-currency': 'processCurrency',
	  'cn-percentage': 'processPercentage',
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
	    processPercentage: processPercentage,
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
	
	    service.scope = config.getScope();
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
	    service.getParamOverrides = config.getParms || _.noop;
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
	      if (!field.type) field.type = 'url';
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
	        vm.service.compile(vm.config.schema, vm.model);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzM2I4ZDJlNDFjMjRjMDgzOWVlMyIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc1BlcmNlbnRhZ2UiLCJwcm9jZXNzRGF0ZSIsInByb2Nlc3NIZWxwIiwicHJvY2Vzc1JhZGlvcyIsInByb2Nlc3NSYWRpb2J1dHRvbnMiLCJwcm9jZXNzUmV1c2FibGUiLCJwcm9jZXNzU2NoZW1hIiwicHJvY2Vzc1NlY3Rpb24iLCJwcm9jZXNzU2VsZWN0IiwicHJvY2Vzc1NjaGVkdWxlIiwicHJvY2Vzc1RhYmxlIiwicHJvY2Vzc1RlbXBsYXRlIiwicHJvY2Vzc1RvZ2dsZSIsInByb2Nlc3NVcGRhdGVkU2NoZW1hIiwicHJvY2Vzc01lZGlhVXBsb2FkIiwicHJvY2Vzc0NzdlVwbG9hZCIsInJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsInJlZ2lzdGVySGFuZGxlciIsInJlZ2lzdGVyUmVzb2x2ZSIsInJlcGxhY2VBcnJheUluZGV4IiwicmVwcm9jZXNzRmllbGQiLCJyZXNldFVwZGF0ZXMiLCJyZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMiLCJzZXRBcnJheUluZGV4Iiwic2V0dXBDb25maWciLCJzZXR1cEFycmF5U2VsZWN0RGlzcGxheSIsInNldHVwU2VsZWN0RGlzcGxheSIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJnZXRTZXJ2aWNlIiwiZm4iLCJmaW5kIiwiZGVzdHJveVNlcnZpY2UiLCJlbXB0eSIsInJlbW92ZSIsInMiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJleHRlbmQiLCJzY29wZSIsImdldFNjb3BlIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsInVwZGF0ZVNjaGVtYSIsImdldFNjaGVtYUZvcm0iLCJnZXRQYXJhbU92ZXJyaWRlcyIsImdldFBhcm1zIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImdldE9nS2V5cyIsInJlamVjdCIsImtleXMiLCJpc0RlZmluZWQiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwicmVzdWx0IiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsImNvbnNvbGUiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImN1clZhbCIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsImxpbmsiLCJzcGxpY2UiLCJjb3BpZXMiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwib21pdEhhc2hLZXkiLCJpZGVudGl0eSIsInBhcnRpYWxSaWdodCIsImZpbmRGbiIsImNvbXBvc2UiLCJwYXJ0aWFsIiwic3RhcnRFbXB0eSIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJzaW5nbGVRdWVyeSIsIm1pbkxvb2t1cCIsInRpdGxlUXVlcnkiLCJxIiwic2tpcEZpbHRlcmluZyIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwibGlua01vZGVsIiwiZmVhdHVyZUtleSIsInNob3dGZWF0dXJlIiwiZmVhdHVyZXMiLCJzaG93Iiwic2VsZWN0S2V5IiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RNb2RlbCIsInNlbGVjdFZhbHVlIiwiaXRlbVZhbHVlIiwic2VsZWN0RmllbGRLZXkiLCJzcGxpdEtleSIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJpc051bGwiLCJ0aGVuIiwib25Qcm9jZXNzRGlmZiIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY3VyS2V5cyIsImNvbXBhY3QiLCJwcmV2U2NoZW1hIiwibmV3U2NoZW1hIiwicmVhZG9ubHkiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsImxvZyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDbkx0Qzs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUhULFVBQVNlLG1CQUFtQjtHQUMxQixPQUFPO0tBQ0xkLFVBQVU7S0FDVnRWLE9BQU87T0FDTHJNLFFBQVE7T0FDUjBpQixRQUFRO09BQ1JDLGVBQWU7O0tBRWpCeGlCLFlBQVl5aUI7S0FDWlYsa0JBQWtCO0tBQ2xCcmYsY0FBYztLQUNkK2U7Ozs7QUF5REosVUFBU2dCLGVBQWVyQyxRQUFRO0dBQzlCOztHQUVBLFNBQVNzQyxjQUFjO0dBQ3ZCdEMsT0FBT0UsUUFBUSxJQUFJb0M7O0dBRW5CLElBQU1uQyxLQUFLOztHQUVYQSxHQUFHb0MsYUFBYUE7R0FDaEJwQyxHQUFHcUMsYUFBYUE7Ozs7R0FJaEJ4QyxPQUFPM0wsT0FBTyxtQkFBbUJvTyxXQUFXO0dBQzVDekMsT0FBTzNMLE9BQU8sMEJBQTBCcU8sa0JBQWtCOzs7O0dBSTFELFNBQVNELFlBQVk7S0FDVHRDLEdBQUd3QyxRQUFVeEMsR0FBRzFnQixPQUF2QmtqQjs7O0dBR0wsU0FBU0QsbUJBQW1CO0tBQUEsV0FPdEJ2QyxHQUFHMWdCLE9BQU9takIsZ0JBQWdCOztLQUxmekMsR0FBRzBDLGNBRlEsS0FFeEJBO0tBQ2ExQyxHQUFHMkMsY0FIUSxLQUd4QkE7S0FDWTNDLEdBQUc0QyxhQUpTLEtBSXhCQTtLQUNhNUMsR0FBRzZDLGNBTFEsS0FLeEJBO0tBQ1M3QyxHQUFHOEMsVUFOWSxLQU14QkE7OztHQUlKLFNBQVNWLGFBQWE7Ozs7S0FJcEJ2QyxPQUFPa0QsUUFBUUEsUUFBUXZVLFdBQVc7OztHQUdwQyxTQUFTNlQsV0FBV1csV0FBVztLQUM3QixJQUFHaEQsR0FBRzFnQixPQUFPK2lCLFlBQVksT0FBT3JDLEdBQUcxZ0IsT0FBTytpQixXQUFXVztLQUNyRCxPQUFPOzs7O0FBNUNYLFNBQVEsVUFnRE9qQixpQjs7Ozs7Ozs7Ozs7QUNqSGYsVUFBU2tCLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMaEMsZUFBVSxHQURMO0FBRUx0VixZQUFPLEVBQUVHLE1BQU0sYUFBUixFQUZGO0FBR0x0SSxjQUFTLFNBSEo7QUFJTDBSLFdBQU1BO0FBSkQsSUFBUDtBQU1EOztBQUVELFVBQVNBLElBQVQsQ0FBYzJLLE1BQWQsRUFBc0IzRCxJQUF0QixFQUE0QmdILEtBQTVCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQyxZQUFTQyxhQUFULEdBQXlCLENBQUU7QUFDM0J2RCxVQUFPRSxLQUFQLEdBQWUsSUFBSXFELGFBQUosRUFBZjs7QUFFQSxPQUFHdkQsT0FBTy9ULElBQVAsSUFBZStULE9BQU8vVCxJQUFQLENBQVl1WCxRQUE5QixFQUF3QztBQUN0Q3hELFlBQU8zTCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU9pUCxRQUFRRyxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVM1aUIsS0FBVCxFQUFnQjtBQUN2RTtBQUNBeWlCLGVBQVFJLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUosZUFBUUksWUFBUixDQUFxQixTQUFyQixFQUFnQzdpQixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOzttQkFFY3VpQixVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2I4ZDJlNDFjMjRjMDgzOWVlMyIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMgPSB7fSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXyh7IC4uLiRzdGF0ZVBhcmFtcywgLi4ub3ZlcnJpZGVzIH0pXG4gICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgLm9taXQodiA9PiAoXy5pc1VuZGVmaW5lZCh2KSB8fCB2ID09PSBudWxsKSlcbiAgICAgICAgLnZhbHVlKClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3JlYXRpdmVpbWFnZScsXG4gICAgdHlwZTogJ2NuLWNyZWF0aXZlaW1hZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdmYWNlYm9va3ZpZGVvJyxcbiAgICB0eXBlOiAnY24tZmFjZWJvb2t2aWRlbydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdzY2hlZHVsZScsXG4gICAgdHlwZTogJ2NuLXNjaGVkdWxlJ1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsImZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZScsXG4gICAgJ2NuLXNjaGVkdWxlJyxcbiAgICAnY24tZmFjZWJvb2t2aWRlbydcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICBuZy1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWNhY2hlPVwie3tmb3JtLnNob3dDbGVhckNhY2hlfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5LCBvcHRpb25zKVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS5za2lwRmlsdGVyaW5nfX1cIlxuICAgICAgICAgICAgc2luZ2xlLXF1ZXJ5PVwie3tmb3JtLnNpbmdsZVF1ZXJ5fX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXB9fVwiPlxuICAgICAgICAgIDwvYXV0by1jb21wbGV0ZT5cbiAgICAgICAgPC90YWdzLWlucHV0PmA7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUtZGV0YWlsZWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IHNmLWFycmF5PVwiZm9ybVwiPlxuICAgICAgICAgIDxvbCBjbGFzcz1cImxpc3QtZ3JvdXAgY24tYXV0b2NvbXBsZXRlLWxpc3RcIlxuICAgICAgICAgICAgICBuZy1pZj1cIm1vZGVsQXJyYXkubGVuZ3RoXCJcbiAgICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0ge3tmb3JtLmZpZWxkSHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gbW9kZWxBcnJheSB0cmFjayBieSAkaW5kZXhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb3B5V2l0aEluZGV4KCRpbmRleClcIi8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jdXJyZW5jeS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+JDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktZm9ybWF0PVwie3tmb3JtLmN1cnJlbmN5Rm9ybWF0fX1cIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1wbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldCBcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwLCAnbm90aXRsZSc6IGZvcm0ubm90aXRsZSB8fCAhZm9ybS50aXRsZX1cIj5cbiAgICAgICAgPGxlZ2VuZCBuZy1oaWRlPVwiZm9ybS5ub3RpdGxlXCJcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cImZvcm0udG9nZ2xlQ29sbGFwc2UoZm9ybSlcIlxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwieydzci1vbmx5JzogIXNob3dUaXRsZSgpLCBjb2xsYXBzaWJsZTogZm9ybS5jb2xsYXBzaWJsZX1cIlxuICAgICAgICAgICAgICAgIG5nLW1vdXNlZW50ZXI9XCJmb3JtLnJlbmRlciA9IHRydWVcIj5cbiAgICAgICAgICA8aSBuZy1zaG93PVwiZm9ybS5jb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYXJldC17e2Zvcm0uY29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdkb3duJ319XCI+PC9pPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgbmctc2hvdz1cImZvcm0uZGVzY3JpcHRpb25cIiBuZy1iaW5kLWh0bWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgdWliLWNvbGxhcHNlPVwiZm9ybS5jb2xsYXBzZWRcIj5cbiAgICAgICAgICA8ZGl2IG5nLWlmPVwiZm9ybS5yZW5kZXJcIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1tZWRpYXVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG1lZGlhLXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jcmVhdGl2ZWltYWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tY3JlYXRpdmUtaW1hZ2UgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbmctbW9kZWwta2V5PVwiZm9ybS5uZ01vZGVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1jcmVhdGl2ZS1pbWFnZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1zY2hlZHVsZS5odG1sJywgXG4gICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3sgZm9ybS5odG1sQ2xhc3MgfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKSB9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7IGZvcm0ua2V5LmpvaW4oJy4nKSB9fVwiPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGNuLXNjaGVkdWxlIGZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvY24tc2NoZWR1bGU+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmFjZWJvb2t2aWRlby5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWZhY2Vib29rLXZpZGVvIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXZpZGVvLWtleT1cImZvcm0udmlkZW9LZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXRodW1ibmFpbC1rZXk9XCJmb3JtLnRodW1ibmFpbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY24tZmFjZWJvb2stdmlkZW8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3JlYXRpdmVpbWFnZSc6ICdwcm9jZXNzQ3JlYXRpdmVJbWFnZScsXG4gICdjbi1mYWNlYm9va3ZpZGVvJzogJ3Byb2Nlc3NGYWNlYm9va1ZpZGVvJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknLFxuICAnY24tc2NoZWR1bGUnOiAncHJvY2Vzc1NjaGVkdWxlJ1xufTtcblxuLy8gaGFuZGxlcnMgdGhhdCBkb24ndCBydW4gb24gc2Vjb25kUGFzcyBhcmUgb25lcyB0aGF0IHNob3VsZG4ndCBldmVyIGNoYW5nZVxuLy8gYW5kIHdlIHdhbnQgdG8gYXZvaWQgY29tcG91bmRpbmcgdGhlaXIgZWZmZWN0c1xuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWxlY3REaXNwbGF5KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJmZpZWxkLndhdGNoICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiYgc2VydmljZS5wcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hKGZpZWxkKVxufV07XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIoc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENORmxleEZvcm1TZXJ2aWNlKFxuICBBcGksXG4gICRwYXJzZSxcbiAgY25GbGV4Rm9ybUNvbmZpZyxcbiAgY25GbGV4Rm9ybVR5cGVzLFxuICBzZlBhdGgsXG4gICRpbnRlcnBvbGF0ZSxcbiAgJHRpbWVvdXQsXG4gIGNuVXRpbCxcbiAgJHN0YXRlUGFyYW1zXG4pIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtdO1xuICBjb25zdCBwcm90b3R5cGUgPSB7XG4gICAgY29tcGlsZSxcbiAgICBhZGRBcnJheUNvcHksXG4gICAgYWRkVG9EYXRhQ2FjaGUsXG4gICAgYWRkVG9Gb3JtQ2FjaGUsXG4gICAgYWRkVG9TY29wZUNhY2hlLFxuICAgIGJyb2FkY2FzdEVycm9ycyxcbiAgICBidWlsZEVycm9yLFxuICAgIGNsZWFudXAsXG4gICAgZGVsZXRlQXJyYXlDb3BpZXNGb3IsXG4gICAgZGVyZWdpc3RlckhhbmRsZXJzLFxuICAgIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIGdldEFycmF5Q29weSxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXREZWZhdWx0LFxuICAgIGdldEZyb21EYXRhQ2FjaGUsXG4gICAgZ2V0RnJvbUZvcm1DYWNoZSxcbiAgICBnZXRGcm9tU2NvcGVDYWNoZSxcbiAgICBnZXRGb3Jtc1RvUHJvY2VzcyxcbiAgICBnZXRLZXksXG4gICAgZ2V0U2NoZW1hLFxuICAgIGdldFdhdGNoYWJsZXMsXG4gICAgaGFuZGxlUmVzb2x2ZSxcbiAgICBpbmNyZW1lbnRVcGRhdGVzLFxuICAgIGluaXRBcnJheUNvcHlXYXRjaCxcbiAgICBpbml0TW9kZWxXYXRjaCxcbiAgICBpbml0U2NoZW1hUGFyYW1zLFxuICAgIGlzQ29tcGlsZWQsXG4gICAgb25Nb2RlbFdhdGNoLFxuICAgIHBhcnNlQWxsLFxuICAgIHBhcnNlQW55LFxuICAgIHBhcnNlQ29uZGl0aW9uLFxuICAgIHBhcnNlRXhwcmVzc2lvbixcbiAgICBwcm9jZXNzQXJyYXksXG4gICAgcHJvY2Vzc0NyZWF0aXZlSW1hZ2UsXG4gICAgcHJvY2Vzc0RlZmF1bHQsXG4gICAgcHJvY2Vzc0Rpc3BsYXksXG4gICAgcHJvY2Vzc0ZhY2Vib29rVmlkZW8sXG4gICAgcHJvY2Vzc0ZpZWxkLFxuICAgIHByb2Nlc3NGaWVsZHNldCxcbiAgICBwcm9jZXNzRmllbGRQcm9wcyxcbiAgICBwcm9jZXNzRmllbGRUeXBlLFxuICAgIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NTY2hlZHVsZSxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzZXRVcGRhdGVzLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNjaGVtYVJlZnJlc2gsXG4gICAgc2lsZW5jZUxpc3RlbmVycyxcbiAgICBza2lwRGVmYXVsdHNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVNlcnZpY2UoZm4pIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZShmbik7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UuY2xlYW51cCgpO1xuICAgICAgXy5lbXB0eShzZXJ2aWNlKTtcbiAgICAgIF8ucmVtb3ZlKHNlcnZpY2VzLCAocykgPT4gcyA9PT0gc2VydmljZSk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGlmKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIFsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIF0gPSBhcmdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciB7IHNjaGVtYSwgbW9kZWwsIGNvbmZpZyB9ID0gYXJnc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJTZXJ2aWNlID0gZ2V0U2VydmljZSgoc2VydmljZSkgPT4gc2VydmljZS5tb2RlbCA9PT0gbW9kZWwpO1xuICAgIGlmKGN1clNlcnZpY2UpIHtcbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBjdXJTZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgIHNlcnZpY2VzLnB1c2gobmV3U2VydmljZSk7XG4gICAgcmV0dXJuIG5ld1NlcnZpY2U7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMuc2NvcGVDYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcbiAgICB0aGlzLnNraXBEZWZhdWx0ID0ge307XG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSBjb25maWcuZ2V0UGFyYW1zID8gY29uZmlnLmdldFBhcmFtcygpIDoge307XG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSwgZGVzdHJveVNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5zY29wZSA9IGNvbmZpZy5nZXRTY29wZSgpO1xuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gICAgc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcyA9IGNvbmZpZy5nZXRQYXJtcyB8fCBfLm5vb3A7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihmaWVsZC5jb25kaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHJlcGxhY2VBcnJheUluZGV4KGZpZWxkLmNvbmRpdGlvbiwgZmllbGQuYXJyYXlJbmRleCB8fCBrZXkpO1xuICAgICAgaWYoIXNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoXy5pc1VuZGVmaW5lZChtb2RlbFZhbHVlKSB8fCAoXG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpID8gYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSA6IF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSAmJlxuICAgICAgICAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdClcbiAgICAgICkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0uaXRlbXMucHJvcGVydGllcztcbiAgICAgICAgICBrZXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLnByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYXJyYXkgaXRlbVxuICAgIGZpcnN0ID0ga2V5WzBdIHx8ICdpdGVtcyc7XG5cbiAgICByZXR1cm4gZGVwdGhbZmlyc3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkID0gZmllbGQua2V5ID8gZmllbGQgOiBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZmllbGQpO1xuICAgIHJldHVybiBmaWVsZCAmJiAoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkgPyBmaWVsZC5kZWZhdWx0IDogZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5kZWZhdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdhdGNoYWJsZXMoZXhwKSB7XG4gICAgY29uc3Qgd2F0Y2hhYmxlcyA9IFtdO1xuICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICBsZXQgcmVwbGFjZVN0ciA9ICcnO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBpZigvXi0/XFxkKyQvLnRlc3QobmVzdGVkWzFdKSB8fCAvXihcInwnKS4qKFwifCcpJC8udGVzdChuZXN0ZWRbMV0pKSB7XG4gICAgICAgIHJlcGxhY2VTdHIgPSBuZXN0ZWRbMF07XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJ2ZmX3JlcGxhY2VfZmYnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3YXRjaGFibGVzLnB1c2gobmVzdGVkWzFdLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cikpO1xuICAgICAgICByZXBsYWNlU3RyID0gJyc7XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJycpO1xuICAgICAgfVxuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi53YXRjaGFibGVzLCBleHAucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goZmllbGQucmVzb2x2ZSwgZnVuY3Rpb24oZGF0YVByb3AsIGZpZWxkUHJvcCkge1xuICAgICAgZGF0YVByb3AgPSByZXBsYWNlQXJyYXlJbmRleChkYXRhUHJvcCwga2V5IHx8IGZpZWxkLmFycmF5SW5kZXgpO1xuICAgICAgaWYoZGF0YVByb3AuaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSByZXR1cm47XG5cbiAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgdHJ1ZSk7XG5cbiAgICAgIGdldFdhdGNoYWJsZXMoZGF0YVByb3ApLmZvckVhY2goKHdhdGNoYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBbLCBiYXNlLCBleHBdID0gd2F0Y2hhYmxlLm1hdGNoKC8oc2NoZW1hXFwuZGF0YVxcLnxtb2RlbFxcLikoXFxTKykvKSB8fCBbXTtcblxuICAgICAgICBpZihiYXNlKSB7XG4gICAgICAgICAgaWYoYmFzZSA9PT0gJ3NjaGVtYS5kYXRhLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgZGF0YVByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGJhc2UgPT09ICdtb2RlbC4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihleHAsICgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUFueShleHAsIGJhc2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgcmVzdWx0O1xuICAgIGNvbnN0IGVpdGhlcnMgPSBleHAuc3BsaXQoJyB8fCAnKTtcbiAgICBjb25zdCBtYXRjaCA9IF8uZmluZChlaXRoZXJzLCB4ID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIHJlc3VsdCA9IHY7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUFsbChleHAsIGJhc2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBhbGwgPSBleHAuc3BsaXQoJyAmJiAnKTtcbiAgICBjb25zdCBtYXRjaCA9IF8ucmVkdWNlKGFsbCwgKGFjYywgeCkgPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgYWNjLnB1c2godik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gYWxsLmxlbmd0aCA9PT0gbWF0Y2gubGVuZ3RoID8gXy5sYXN0KG1hdGNoKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YSA9IGV4cC5pbmNsdWRlcygnIHx8ICcpID9cbiAgICAgIHNlcnZpY2UucGFyc2VBbnkoZXhwKSA6IGV4cC5pbmNsdWRlcygnICYmICcpID9cbiAgICAgIHNlcnZpY2UucGFyc2VBbGwoZXhwKSA6IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG5cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhUHJvcCA9IGV4cC5tYXRjaCgvc2NoZW1hXFwuZGF0YVxcLiguKykvKVsxXTtcbiAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKGBkYXRhOiR7ZGF0YVByb3B9OiR7ZGF0YS5jdXJzb3J9YCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBmaWVsZC5sb2FkTW9yZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWwgPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcbiAgICBjb25zdCB2YWwxID0gZmllbGRQcm9wID09PSAnY29uZGl0aW9uJyA/IHZhbCArICcnIDogdmFsO1xuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkUHJvcCwgZmllbGQpLnNldCh2YWwxKTtcblxuICAgIGlmKCFza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgICBwcm9wID09PSBmaWVsZFByb3AgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCBleHApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goeyBmaWVsZCwgcHJvcDogZmllbGRQcm9wLCBleHAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5jb25kaXRpb25hbHMsIChjb25kaXRpb24sIGtleSkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzZXJ2aWNlLmdldEZyb21TY29wZUNhY2hlKHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkpO1xuICAgICAgICBpZihrZXkgPT09ICdyZXF1aXJlZCcgJiYgc2NvcGUpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1WYWxpZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmllbGRcbiAgICAgICAgICAuY29uZGl0aW9uYWxzW2tleV1cbiAgICAgICAgICAubWF0Y2goL21vZGVsXFwuKFteXFxzXSspL2cpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGgubWF0Y2goL21vZGVsXFwuKFteXFxzXSspLylbMV0pXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRXYXRjaChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFmaWVsZC53YXRjaCkgcmV0dXJuO1xuXG4gICAgbGV0IHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcbiAgICBmaWVsZC53YXRjaCA9IF8uaXNBcnJheShmaWVsZC53YXRjaCkgPyBmaWVsZC53YXRjaCA6IFtmaWVsZC53YXRjaF07XG5cbiAgICBfLmVhY2goZmllbGQud2F0Y2gsIGZ1bmN0aW9uKHdhdGNoKSB7XG4gICAgICBpZih3YXRjaC5yZXNvbHV0aW9uKSB7XG4gICAgICAgIGxldCBjb25kaXRpb247XG4gICAgICAgIGlmKF8uaXNTdHJpbmcoZmllbGQuY29uZGl0aW9uKSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBjb25kaXRpb24gaXNuJ3QgYWxyZWFkeSB3cmFwcGVkIGluIHBhcmVucywgd3JhcCBpdFxuICAgICAgICAgIGNvbmRpdGlvbiA9IC9eXFwoLipcXCkkLy50ZXN0KGZpZWxkLmNvbmRpdGlvbikgP1xuICAgICAgICAgICAgZmllbGQuY29uZGl0aW9uIDpcbiAgICAgICAgICAgIGAoJHtmaWVsZC5jb25kaXRpb259KWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYoXy5pc1N0cmluZyh3YXRjaC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uID9cbiAgICAgICAgICAgIGAke2NvbmRpdGlvbn0gJiYgJHt3YXRjaC5jb25kaXRpb259YCA6XG4gICAgICAgICAgICB3YXRjaC5jb25kaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgKGRheXN8aG91cnMpLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHtcbiAgICAgICAgICAgICAgdmFsOiBhZGp1c3RtZW50LmRhdGVbMV0sXG4gICAgICAgICAgICAgIHVuaXRzOiBhZGp1c3RtZW50LmRhdGVbMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZS52YWwsICcnKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5tYXRoID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcK3xcXC18XFwvfFxcKikgPyhcXFMrKS8pO1xuXG4gICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5vcGVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICAnKyc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICctJzogJ3N1YnRyYWN0JyxcbiAgICAgICAgICAgICAgICAnKic6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgJy8nOiAnZGl2aWRlJ1xuICAgICAgICAgICAgICB9W2FkanVzdG1lbnQubWF0aFsxXV07XG5cbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5hZGp1c3RlciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFkanVzdG1lbnQubWF0aFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ubWF0Y2goLyhcXFMrKSA/PSA/KFxcUyspLyk7XG5cbiAgICAgICAgICBoYW5kbGVyID0gKHZhbCwgcHJldiwga2V5LCB0cmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gY29uZGl0aW9uICYmIHJlcGxhY2VBcnJheUluZGV4KGNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgICAgIGlmKF8uaXNTdHJpbmcoY3VyQ29uZGl0aW9uKSAmJiBjdXJDb25kaXRpb24uaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBhcnJheUluZGV4IGNvdWxkIG5vdCBiZSByZXBhbGNlZCBmcm9tIGV4cHJlc3Npb24gJyR7Y3VyQ29uZGl0aW9ufSdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cGRhdGVQYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsxXSwga2V5KTtcbiAgICAgICAgICAgIGxldCBmcm9tUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMl0sIGtleSk7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih1cGRhdGVQYXRoKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgbG9vcCB3aGVyZSB0d28gd2F0Y2hlcyBrZWVwIHRyaWdnZXJpbmcgZWFjaCBvdGhlclxuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gdXBkYXRlLnBhdGgoKS5rZXkpIHJldHVybjtcbiAgICAgICAgICAgIHRyaWdnZXIgPSB1cGRhdGUucGF0aCgpLmtleTtcblxuICAgICAgICAgICAgbGV0IGZyb20gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmcm9tUGF0aCk7XG5cbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjdXJDb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQobW9tZW50KGZyb20uZ2V0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChhZGp1c3RtZW50LmRhdGUudmFsLCBhZGp1c3RtZW50LmRhdGUudW5pdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgLy8gYnkgdGhpcyBwb2ludCBkZWZhdWx0cyBzaG91bGQgYmUgcHJvY2Vzc2VkIHNvIHdlIGNhbiBnZXQgdmFsdWUgZGlyZWN0bHkgZnJvbSBtb2RlbFxuICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1clZhbCkpIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyVmFsO1xuICAgIH1cbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIGlmIGZpZWxkIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGtleVxuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSAmJiAhXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGlmKCFrZXkua2V5ICYmIGtleS5pdGVtcykge1xuICAgICAgICBfLmVhY2goa2V5Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGtleSA9IGtleS5rZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyguKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0sIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1ciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IF8uZ2V0KHNlcnZpY2UuZ2V0U2NoZW1hKGtleSksICdkZWZhdWx0Jyk7XG5cbiAgICBpZighc2VydmljZS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdmFyIHByZXYgPSBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgICAvL2lmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSBzZXJ2aWNlLnNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHNlcnZpY2UubW9kZWwsXG4gICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZihfLmlzRnVuY3Rpb24oc2VydmljZS5yZWZyZXNoU2NoZW1hKSkge1xuICAgICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAvLyBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgLy8gICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVTY29wZScsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgc2VydmljZS5kZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioc2NvcGUuZm9ybS5saW5rLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFycmF5Q29waWVzRm9yKGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKGtleSk7XG4gICAgXy5lYWNoKGNvcGllcywgbGlzdCA9PiBsaXN0ICYmIGxpc3Quc3BsaWNlKGluZGV4LCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoIV8uaXNTdHJpbmcoZXhwKSAmJiAhXy5pc0FycmF5KGV4cCkpIHtcbiAgICAgIHJldHVybiB7IGdldDogKCkgPT4gZXhwIH07XG4gICAgfVxuXG4gICAgLy8gaWYgZXhwcmVzc2lvbiBpcyBzcGVjaWZpYyB2YWx1ZVxuICAgIGlmKC9eKG51bGx8ZmFsc2V8dHJ1ZXx1bmRlZmluZWR8J1teXFwnXSonfFwiW15cXFwiXSpcInwtP1swLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBjb25zdCBpc1N0ciA9IGV4cC5tYXRjaCgvXCIoW15cXFwiXSopXCIvKSB8fCBleHAubWF0Y2goLycoW15cXCddKiknLyk7XG4gICAgICAgICAgaWYoaXNTdHIpIHJldHVybiBpc1N0clsxXTtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbiB9ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZihub0NvbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbjogdHJ1ZSB9KSB8fCB7fTtcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5kZWZhdWx0c1tyZXNvbHZlZC5yZXBsYWNlKCdtb2RlbC4nLCAnJyldO1xuICAgICAgICAgIGlmKG9iaikge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKCk7XG4gICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNpbGVuY2VMaXN0ZW5lcnMocmVzb2x2ZWQsIGRlcHRoKTtcbiAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0cyhyZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG5cbiAgICAgIHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiBleHAsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGtleTogbWF0Y2hbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBzaWxlbmNlTGlzdGVuZXJzKGtleVN0YXJ0LCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgIGlmKGtleS5pbmRleE9mKGtleVN0YXJ0KSA9PT0gMCkge1xuICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgZGVwdGgpLmdldCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBEZWZhdWx0cyhrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGluZGV4ID0ga2V5U3RhcnQubWF0Y2goL1xcW1xcZCpcXF0vKSA/IGdldEFycmF5SW5kZXgoa2V5U3RhcnQpIDogbnVsbDtcbiAgICBjb25zdCBrcyA9IHN0cmlwSW5kZXhlcyhrZXlTdGFydCk7XG4gICAgY29uc3Qga2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa3MpKTtcbiAgICBsZXQgc2tpcEtleXMgPSBbXTtcbiAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGluZGV4KTtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZiAoXy5pc0FycmF5KG1vZGVsKSkge1xuICAgICAgICBjb25zdCBjaGlsZEtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtleSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgXy5lYWNoKGNoaWxkS2V5cywgKGspID0+IHtcbiAgICAgICAgICAgIHNraXBLZXlzLnB1c2goayk7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVkQ2hpbGRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoaywgW2luZGV4LCBpXSk7XG4gICAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRDaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFza2lwS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLFxuICAgIC8vIHNjb3BlIGZvciB0aGlzIHNlY3Rpb24gd2lsbCBzb29uIGJlIGVtaXR0ZWQsIHNvIGNhbiBza2lwXG4gICAgaWYoc2Vjb25kUGFzcykgcmV0dXJuO1xuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZhY2Vib29rVmlkZW8oZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1mYWNlYm9va3ZpZGVvJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDcmVhdGl2ZUltYWdlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3JlYXRpdmVpbWFnZSc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBsZXQgb21pdEhhc2hLZXkgPSB2YWxQcm9wID8gIF8uaWRlbnRpdHkgOiBfLnBhcnRpYWxSaWdodChfLm9taXQsIFwiJCRoYXNoS2V5XCIpXG4gICAgbGV0IGZpbmRGbiA9IHZhbFByb3AgP1xuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgXy5wYXJ0aWFsKF8uc2V0LCB7fSwgdmFsUHJvcCksIG9taXRIYXNoS2V5KSA6XG4gICAgICBfLmNvbXBvc2UoXy5wYXJ0aWFsKF8uZmluZCwgdGl0bGVNYXApLCBvbWl0SGFzaEtleSlcbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHZhbC5tYXAoZmluZEZuKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEZuKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVkdWxlKGZpZWxkKSB7XG4gICAgICBmaWVsZC5zdGFydEVtcHR5ID0gdHJ1ZTtcbiAgICAgIGZpZWxkLnR5cGUgPSAnY24tc2NoZWR1bGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZvcm0ua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgaWYobmV3VmFsICE9PSB1bmRlZmluZWQpIHNldHRlcihuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFF1ZXJ5KSB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcztcbiAgICAgIGNvbnN0IHBhcmFtc0tleXMgPSBfLmtleXMocXVlcnlQYXJhbXMpO1xuICAgICAgc2VsZWN0LnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQ2FjaGUgPSAhIXNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5yZWZyZXNoRGF0YTtcbiAgICAgIHNlbGVjdC5zaW5nbGVRdWVyeSA9IHNlbGVjdC5taW5Mb29rdXAgPT09IDA7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IChxLCB7IHJlZnJlc2hEYXRhIH0pID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID1cbiAgICAgICAgICBfKHBhcmFtc0tleXMpXG4gICAgICAgICAgLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdxJykge1xuICAgICAgICAgICAgICBhY2NbcXVlcnlQYXJhbXNba2V5XV0gPSBxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAncmVmcmVzaERhdGEnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWZyZXNoRGF0YSkgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBleHAgPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KHF1ZXJ5UGFyYW1zW2tleV0sIHNlbGVjdC5hcnJheUluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gcGFyYW1zS2V5cy5sZW5ndGggPyAzIDogMDtcbiAgICAgIGlmKCFfLmhhcyhzZWxlY3QsICdza2lwRmlsdGVyaW5nJykpIHNlbGVjdC5za2lwRmlsdGVyaW5nID0gISFzZWxlY3QubWluTG9va3VwO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoIV8uaXNOdW1iZXIoc2VsZWN0Lm1pbkxvb2t1cCkpIHNlbGVjdC5taW5Mb29rdXAgPSAwO1xuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTtcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCB8fCAoXy5pc0FycmF5KHZhbGlkKSAmJiBfLmlzRW1wdHkodmFsaWQpKSkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpO1xuICAgIGNvbnN0IHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpO1xuXG4gICAgcmV0dXJuIHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyA/XG4gICAgICBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSA6XG4gICAgICBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGJhbmQtYWlkIGJlY2F1c2UgdGhpcyBpcyBiZWluZyBzZXQgYXMgYW4gb2JqZWN0IGluc3RlYWQgb2YgYXJyYXkgc29td2hlcmVcbiAgICAvLyBkZWVwIGluIHRoZSBhbmd1bGFyIG9yIGFuZ3VsYXItc2NoZW1hLWZvcm0gbmV0aGVyLXJlZ2lvbnNcbiAgICBjb25zdCBsaW5rTW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmxpbmssIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKCFsaW5rTW9kZWwuZ2V0KCkpIGxpbmtNb2RlbC5zZXQoW10pO1xuXG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgaWYoaXRlbS5zZWxlY3RGaWVsZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBrZXkgPSBfLmlzQXJyYXkoaXRlbS5rZXkpID8gaXRlbS5rZXkgOiBPYmplY3RQYXRoLnBhcnNlKGl0ZW0ua2V5KTtcbiAgICAgIGNvbnN0IGZlYXR1cmVLZXkgPSBfLmxhc3Qoa2V5KTtcblxuICAgICAgaXRlbS5zaG93RmVhdHVyZSA9IGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICAgICAgICBzZXJ2aWNlXG4gICAgICAgICAgICAgIC5wYXJzZUV4cHJlc3Npb24oYG1vZGVsLiR7c2VsZWN0RGlzcGxheS5saW5rfVske2luZGV4fV0uZmVhdHVyZXNgKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoYXJyYXlJbmRleClgO1xuICAgICAgaXRlbS5jb25kaXRpb24gPSBpdGVtLmNvbmRpdGlvbiA/XG4gICAgICAgIGAoJHtpdGVtLmNvbmRpdGlvbn0pICYmICR7Y29uZGl0aW9ufWAgOiBjb25kaXRpb247XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdEZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdEZpZWxkS2V5fWApXG4gICAgICAgICAgICAgIC5nZXQoKTtcbiAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgIGZlYXR1cmVzICYmXG4gICAgICAgICAgICAgIGZlYXR1cmVzXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhmZWF0dXJlS2V5KTtcbiAgICAgICAgcmV0dXJuIHNob3c7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjb25kaXRpb24gPSBgZm9ybS5zaG93RmVhdHVyZSgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIHRoZSBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdERpc3BsYXkua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZihkZWZhdWx0cyAmJiAhbW9kZWwuZ2V0KCkpIHtcbiAgICAgIG1vZGVsLnNldChkZWZhdWx0cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKHVwZGF0ZVNjaGVtYSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIC4uLmNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcygpKSxcbiAgICAgICAgLi4uc2VydmljZS5wYXJhbXNcbiAgICAgIH07XG4gICAgICBsZXQgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSksICd1cGRhdGVzJyk7XG4gICAgICBsZXQga2V5cztcblxuICAgICAgaWYoIV8uaXNFbXB0eShkaWZmKSB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIFsndXBkYXRlU2NoZW1hJywgJ3VwZGF0ZXMnXSkpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuICAgICAgaWYgKGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZikge1xuICAgICAgICBjbkZsZXhGb3JtQ29uZmlnLm9uUHJvY2Vzc0RpZmYoc2NoZW1hKVxuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IF8uc3RhcnRzV2l0aChrLCBrZXkpKTtcbiAgICAgICAgICBfLmVhY2goY3VyS2V5cywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1zID0gXy5jb21wYWN0KFtcbiAgICAgICAgICAgICAgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSksXG4gICAgICAgICAgICAgIC4uLihzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSkgfHwgW10pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXy5lYWNoKGZvcm1zLCBmb3JtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldlNjaGVtYSA9IGZvcm0uc2NoZW1hO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgID0gc2VydmljZS5nZXRTY2hlbWEoa2V5LCB7IFtzY2hlbWEua2V5XTogc2NoZW1hIH0pO1xuICAgICAgICAgICAgICBpZihwcmV2U2NoZW1hLnJlYWRvbmx5ICYmICFuZXdTY2hlbWEucmVhZG9ubHkpIGZvcm0ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgKGZvcm0sIGtleSkgPT4ge1xuXG4gICAgICAgICAgaWYoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcblxuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UucmVzZXRVcGRhdGVzKCk7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfLmdldChzZXJ2aWNlLCAnZXJyb3JzJykpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXFsoXFxkKilcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBrZXlDb3B5O1xuICAgIGlmICghXy5pc0FycmF5KGluZGV4KSkge1xuICAgICAgaW5kZXggPSBbaW5kZXhdO1xuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleC5sZW5ndGggJiYga2V5Q29weS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICBsZXQgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4LnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgc2VydmljZS51cGRhdGVzID0gMDtcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLm9wZW5lZC50aGVuKCgpID0+XG4gICAgICAgIHZtLm1vZGFsLmRpc21pc3MoKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRmxleEZvcm1Nb2RhbChjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlLCAkdWliTW9kYWwsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7IG9wZW4gfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxuICAgICAgICA8IS0tIHdlIHByb2Nlc3MgZGVmYXVsdHMgb3Vyc2VsdmVzLCBoZW5jZSBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgLS0+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytb3B0aW9ucz1cInsgc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIH1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGNuRmxleEZvcm1UYWcoKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaCgoKSA9PiB2bS5jb25maWcuc2NoZW1hLCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZ2V0U2NvcGU6IHZtLmNvbmZpZy5nZXRTY29wZSB8fCAoKCkgPT4gJHNjb3BlKSxcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcblxuICAgIGNuRmxleEZvcm1TZXJ2aWNlLmRlc3Ryb3lTZXJ2aWNlKHZtLnNlcnZpY2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNuRmxleEZvcm1IZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmSGVhZGVyQ29uZmlnJyxcbiAgICAgIHN1Ym1pdDogJyZmZlN1Ym1pdCcsXG4gICAgICBsb2FkT2Zmc2NyZWVuOiAnJmZmTG9hZE9mZnNjcmVlbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtSGVhZGVyLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLmxlYWRcIj57ezo6dm0udGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0udGl0bGUuaWNvblwiIGNsYXNzPVwie3t2bS50aXRsZS5pY29ufX1cIi8+XG4gICAgICAgICAgICB7e3ZtLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUuc3ViXCI+e3s6OnZtLnRpdGxlLnN1Yn19PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ZtLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0ucmV0dXJuU3R5bGUgPyB2bS5yZXR1cm5TdHlsZSA6ICdkZWZhdWx0LWRhcmsnXCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0ucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0ucmV0dXJuU3RhdGV9fVwiPlxuICAgICAgICAgICAgICB7e3ZtLnJldHVyblRleHQgfHwgJ0NhbmNlbCd9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0uY2xvc2VCdXR0b24uc3R5bGUgPyB2bS5jbG9zZUJ1dHRvbi5zdHlsZSA6ICdkZWZhdWx0LWRhcmsnfX1cIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmNsb3NlQnV0dG9uLmhhbmRsZXIoKVwiPlxuICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XCJidXR0b24gaW4gdm0uYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IG9wdGlvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJvcHRpb24udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtdXBkYXRlZC1hdCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICBpZD1cImRhdGEtdXBkYXRlZC1hdFwiXG4gICAgICAgICAgICAgbmctaGlkZT1cInZtLmNvbmZpZy5ub0RhdGFcIj5cbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0udXBkYXRlRGF0YSgpXCI+VXBkYXRlIERhdGE8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5gXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGZmSGVhZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmSGVhZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIHZtLnVwZGF0ZURhdGEgPSB1cGRhdGVEYXRhO1xuICB2bS5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAvL2FjdGl2YXRlKCk7XG4gIC8vJHNjb3BlLiRvbignJGRlc3Ryb3knLCBjbGVhbnVwKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLnRpdGxlJywgaW5pdFRpdGxlLCB0cnVlKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLmFjdGlvbkNvbmZpZycsIGluaXRBY3Rpb25Db25maWcsIHRydWUpO1xuXG4gIC8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gaW5pdFRpdGxlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBY3Rpb25Db25maWcoKSB7XG4gICAgKHtcbiAgICAgIHJldHVyblN0YXRlOiB2bS5yZXR1cm5TdGF0ZSxcbiAgICAgIHJldHVyblN0eWxlOiB2bS5yZXR1cm5TdHlsZSxcbiAgICAgIHJldHVyblRleHQ6IHZtLnJldHVyblRleHQsXG4gICAgICBjbG9zZUJ1dHRvbjogdm0uY2xvc2VCdXR0b24sXG4gICAgICBhY3Rpb25zOiB2bS5hY3Rpb25zXG4gICAgfSA9IHZtLmNvbmZpZy5hY3Rpb25Db25maWcgfHwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGF0YSgpIHtcbiAgICAvLyAkc2NvcGUuJGVtaXQoJ2ZmUmVmcmVzaERhdGEnKTtcbiAgICAvLyB0aGlzIGNvbXBvbmVudCB3aWxsIG9mdGVuIGJlIHNpYmxpbmdzIHRvIHRoZSBmbGV4IGZvcm1zIG9uZSxcbiAgICAvLyBzbyBuZWVkIHRvIGJyb2FkY2FzdCBmcm9tIHNoYXJlZCBwYXJlbnQuLi55ZXMgaXQncyB1Z2x5XG4gICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kYnJvYWRjYXN0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=