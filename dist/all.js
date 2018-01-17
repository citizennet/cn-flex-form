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
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
	          service.incrementUpdates();
	          //service.updateSchema(schema);
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

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
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

/***/ }),
/* 13 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNDA5ZTRhZmZmODNkZmJkYzhiZCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGYWNlYm9va1ZpZGVvIiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc1BlcmNlbnRhZ2UiLCJwcm9jZXNzRGF0ZSIsInByb2Nlc3NIZWxwIiwicHJvY2Vzc1JhZGlvcyIsInByb2Nlc3NSYWRpb2J1dHRvbnMiLCJwcm9jZXNzUmV1c2FibGUiLCJwcm9jZXNzU2NoZW1hIiwicHJvY2Vzc1NlY3Rpb24iLCJwcm9jZXNzU2VsZWN0IiwicHJvY2Vzc1NjaGVkdWxlIiwicHJvY2Vzc1RhYmxlIiwicHJvY2Vzc1RlbXBsYXRlIiwicHJvY2Vzc1RvZ2dsZSIsInByb2Nlc3NVcGRhdGVkU2NoZW1hIiwicHJvY2Vzc01lZGlhVXBsb2FkIiwicHJvY2Vzc0NzdlVwbG9hZCIsInJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsInJlZ2lzdGVySGFuZGxlciIsInJlZ2lzdGVyUmVzb2x2ZSIsInJlcGxhY2VBcnJheUluZGV4IiwicmVwcm9jZXNzRmllbGQiLCJyZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMiLCJzZXRBcnJheUluZGV4Iiwic2V0dXBDb25maWciLCJzZXR1cEFycmF5U2VsZWN0RGlzcGxheSIsInNldHVwU2VsZWN0RGlzcGxheSIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJnZXRTZXJ2aWNlIiwiZm4iLCJmaW5kIiwiZGVzdHJveVNlcnZpY2UiLCJlbXB0eSIsInJlbW92ZSIsInMiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJleHRlbmQiLCJzY29wZSIsImdldFNjb3BlIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsInVwZGF0ZVNjaGVtYSIsImdldFNjaGVtYUZvcm0iLCJnZXRQYXJhbU92ZXJyaWRlcyIsImdldFBhcm1zIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiYXJyYXlJbmRleCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImdldE9nS2V5cyIsInJlamVjdCIsImtleXMiLCJpc0RlZmluZWQiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwicmVzdWx0IiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsImNvbnNvbGUiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImN1clZhbCIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsImxpbmsiLCJzcGxpY2UiLCJjb3BpZXMiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwib21pdEhhc2hLZXkiLCJpZGVudGl0eSIsInBhcnRpYWxSaWdodCIsImZpbmRGbiIsImNvbXBvc2UiLCJwYXJ0aWFsIiwic3RhcnRFbXB0eSIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJzaW5nbGVRdWVyeSIsIm1pbkxvb2t1cCIsInRpdGxlUXVlcnkiLCJxIiwic2tpcEZpbHRlcmluZyIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwibGlua01vZGVsIiwiZmVhdHVyZUtleSIsInNob3dGZWF0dXJlIiwiZmVhdHVyZXMiLCJzaG93Iiwic2VsZWN0S2V5IiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RNb2RlbCIsInNlbGVjdFZhbHVlIiwiaXRlbVZhbHVlIiwic2VsZWN0RmllbGRLZXkiLCJzcGxpdEtleSIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJpc051bGwiLCJ0aGVuIiwib25Qcm9jZXNzRGlmZiIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY3VyS2V5cyIsImNvbXBhY3QiLCJwcmV2U2NoZW1hIiwibmV3U2NoZW1hIiwicmVhZG9ubHkiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsImxvZyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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ZSxJQUFJcUQsYUFBSixFQUFmOztBQUVBLE9BQUd2RCxPQUFPL1QsSUFBUCxJQUFlK1QsT0FBTy9ULElBQVAsQ0FBWXVYLFFBQTlCLEVBQXdDO0FBQ3RDeEQsWUFBTzNMLE1BQVAsQ0FBYyxZQUFXO0FBQUUsY0FBT2lQLFFBQVFHLFVBQWY7QUFBNEIsTUFBdkQsRUFBeUQsVUFBUzNpQixLQUFULEVBQWdCO0FBQ3ZFO0FBQ0F3aUIsZUFBUUksWUFBUixDQUFxQixZQUFyQixFQUFtQyxJQUFuQztBQUNBSixlQUFRSSxZQUFSLENBQXFCLFNBQXJCLEVBQWdDNWlCLEtBQWhDO0FBQ0QsTUFKRDtBQUtEO0FBQ0Y7O21CQUVjc2lCLFUiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ0MDllNGFmZmY4M2RmYmRjOGJkIiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcbiAgLm1vZHVsZSgnY24uZmxleC1mb3JtJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdzY2hlbWFGb3JtJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnY25UYWdzSW5wdXQnLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBfKHsgLi4uJHN0YXRlUGFyYW1zLCAuLi5vdmVycmlkZXMgfSlcbiAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAub21pdCh2ID0+IChfLmlzVW5kZWZpbmVkKHYpIHx8IHYgPT09IG51bGwpKVxuICAgICAgICAudmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIoKSB7XG5cbiAgdmFyIGZpZWxkVHlwZVJlZ2lzdGVyID0gW3tcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoaWRkZW4nLFxuICAgIHR5cGU6ICdoaWRkZW4nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvcycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb3MnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvYnV0dG9ucycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb2J1dHRvbnMnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2F1dG9jb21wbGV0ZScpIHx8IGZpZWxkLnRpdGxlTWFwIHx8IGZpZWxkLnRpdGxlTWFwUmVzb2x2ZSB8fCBmaWVsZC50aXRsZU1hcFF1ZXJ5LFxuICAgIHR5cGU6ICdjbi1hdXRvY29tcGxldGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjbi1kYXRldGltZXBpY2tlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJyB8fCBmaWVsZC50eXBlID09PSAndGltZS1taW51dGVzJyxcbiAgICB0eXBlOiAnY24tZGF0ZXRpbWVwaWNrZXInXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoZWxwJyxcbiAgICB0eXBlOiAnaGVscCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnZGlzcGxheScpLFxuICAgIHR5cGU6ICdjbi1kaXNwbGF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0LmluY2x1ZGVzKCdjdXJyZW5jeScpLFxuICAgIHR5cGU6ICdjbi1jdXJyZW5jeSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgPT09ICdwZXJjZW50YWdlJyxcbiAgICB0eXBlOiAnY24tcGVyY2VudGFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nLFxuICAgIHR5cGU6ICdjbi10b2dnbGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjcmVhdGl2ZWltYWdlJyxcbiAgICB0eXBlOiAnY24tY3JlYXRpdmVpbWFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2ZhY2Vib29rdmlkZW8nLFxuICAgIHR5cGU6ICdjbi1mYWNlYm9va3ZpZGVvJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3NjaGVkdWxlJyxcbiAgICB0eXBlOiAnY24tc2NoZWR1bGUnXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnLFxuICAgICdjbi1jcmVhdGl2ZWltYWdlJyxcbiAgICAnY24tc2NoZWR1bGUnLFxuICAgICdjbi1mYWNlYm9va3ZpZGVvJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIG5nLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItY2FjaGU9XCJ7e2Zvcm0uc2hvd0NsZWFyQ2FjaGV9fVwiXG4gICAgICAgICAgc2hvdy1idXR0b249XCJ0cnVlXCI+XG4gICAgICAgICAgPGF1dG8tY29tcGxldGVcbiAgICAgICAgICAgIHNvdXJjZT1cImZvcm0uZ2V0VGl0bGVNYXAgJiYgZm9ybS5nZXRUaXRsZU1hcCgpIHx8IGZvcm0udGl0bGVRdWVyeSgkcXVlcnksIG9wdGlvbnMpXCJcbiAgICAgICAgICAgIHNraXAtZmlsdGVyaW5nPVwie3tmb3JtLnNraXBGaWx0ZXJpbmd9fVwiXG4gICAgICAgICAgICBzaW5nbGUtcXVlcnk9XCJ7e2Zvcm0uc2luZ2xlUXVlcnl9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cH19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgc2YtYXJyYXk9XCJmb3JtXCI+XG4gICAgICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICAgIG5nLWlmPVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cImRlbGV0ZUZyb21BcnJheSgkaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvcHlXaXRoSW5kZXgoJGluZGV4KVwiLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDAsICdub3RpdGxlJzogZm9ybS5ub3RpdGxlIHx8ICFmb3JtLnRpdGxlfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWhpZGU9XCJmb3JtLm5vdGl0bGVcIlxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNyZWF0aXZlaW1hZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1jcmVhdGl2ZS1pbWFnZSBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1uZy1tb2RlbC1rZXk9XCJmb3JtLm5nTW9kZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2NuLWNyZWF0aXZlLWltYWdlPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXNjaGVkdWxlLmh0bWwnLCBcbiAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7eyBmb3JtLmh0bWxDbGFzcyB9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpIH1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3sgZm9ybS5rZXkuam9pbignLicpIH19XCI+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8Y24tc2NoZWR1bGUgZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9jbi1zY2hlZHVsZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1mYWNlYm9va3ZpZGVvLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZmFjZWJvb2stdmlkZW8gbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdmlkZW8ta2V5PVwiZm9ybS52aWRlb0tleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdGh1bWJuYWlsLWtleT1cImZvcm0udGh1bWJuYWlsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1mYWNlYm9vay12aWRlbz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jcmVhdGl2ZWltYWdlJzogJ3Byb2Nlc3NDcmVhdGl2ZUltYWdlJyxcbiAgJ2NuLWZhY2Vib29rdmlkZW8nOiAncHJvY2Vzc0ZhY2Vib29rVmlkZW8nLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheScsXG4gICdjbi1zY2hlZHVsZSc6ICdwcm9jZXNzU2NoZWR1bGUnXG59O1xuXG4vLyBoYW5kbGVycyB0aGF0IGRvbid0IHJ1biBvbiBzZWNvbmRQYXNzIGFyZSBvbmVzIHRoYXQgc2hvdWxkbid0IGV2ZXIgY2hhbmdlXG4vLyBhbmQgd2Ugd2FudCB0byBhdm9pZCBjb21wb3VuZGluZyB0aGVpciBlZmZlY3RzXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzZWxlY3REaXNwbGF5JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+XG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3dhdGNoJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZWxldGVBcnJheUNvcGllc0ZvcixcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VBbGwsXG4gICAgcGFyc2VBbnksXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzQ3JlYXRpdmVJbWFnZSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmFjZWJvb2tWaWRlbyxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc1BlcmNlbnRhZ2UsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1NjaGVkdWxlLFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTZXJ2aWNlKGZuKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoZm4pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgIF8uZW1wdHkoc2VydmljZSk7XG4gICAgICBfLnJlbW92ZShzZXJ2aWNlcywgKHMpID0+IHMgPT09IHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyA/IGNvbmZpZy5nZXRQYXJhbXMoKSA6IHt9O1xuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UsIGRlc3Ryb3lTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICAgIHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMgPSBjb25maWcuZ2V0UGFybXMgfHwgXy5ub29wO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmllbGQuY29uZGl0aW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSByZXBsYWNlQXJyYXlJbmRleChmaWVsZC5jb25kaXRpb24sIGZpZWxkLmFycmF5SW5kZXggfHwga2V5KTtcbiAgICAgIGlmKCFzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcblxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIG5leHQgPSBrZXlbMV07XG4gICAgICBpZigvXi0/XFxkKiQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgaWYoa2V5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbnkoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQoZWl0aGVycywgeCA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbGwoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLnJlZHVjZShhbGwsIChhY2MsIHgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGFjYy5wdXNoKHYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGFsbC5sZW5ndGggPT09IG1hdGNoLmxlbmd0aCA/IF8ubGFzdChtYXRjaCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgc2tpcFByb3BIYW5kbGVycykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBleHAuaW5jbHVkZXMoJyB8fCAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQW55KGV4cCkgOiBleHAuaW5jbHVkZXMoJyAmJiAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQWxsKGV4cCkgOiBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgY29uc3QgdmFsMSA9IGZpZWxkUHJvcCA9PT0gJ2NvbmRpdGlvbicgPyB2YWwgKyAnJyA6IHZhbDtcbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZFByb3AsIGZpZWxkKS5zZXQodmFsMSk7XG5cbiAgICBpZighc2tpcFByb3BIYW5kbGVycykge1xuICAgICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZihfLmlzU3RyaW5nKGZpZWxkLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgY29uZGl0aW9uIGlzbid0IGFscmVhZHkgd3JhcHBlZCBpbiBwYXJlbnMsIHdyYXAgaXRcbiAgICAgICAgICBjb25kaXRpb24gPSAvXlxcKC4qXFwpJC8udGVzdChmaWVsZC5jb25kaXRpb24pID9cbiAgICAgICAgICAgIGZpZWxkLmNvbmRpdGlvbiA6XG4gICAgICAgICAgICBgKCR7ZmllbGQuY29uZGl0aW9ufSlgO1xuICAgICAgICB9XG4gICAgICAgIGlmKF8uaXNTdHJpbmcod2F0Y2guY29uZGl0aW9uKSkge1xuICAgICAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/XG4gICAgICAgICAgICBgJHtjb25kaXRpb259ICYmICR7d2F0Y2guY29uZGl0aW9ufWAgOlxuICAgICAgICAgICAgd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBpZihfLmlzU3RyaW5nKGN1ckNvbmRpdGlvbikgJiYgY3VyQ29uZGl0aW9uLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgYXJyYXlJbmRleCBjb3VsZCBub3QgYmUgcmVwYWxjZWQgZnJvbSBleHByZXNzaW9uICcke2N1ckNvbmRpdGlvbn0nYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS51cGRhdGVzICYmIGZpZWxkLnVwZGF0ZVNjaGVtYSAmJiAhc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0pIHtcbiAgICAgIC8vIGJ5IHRoaXMgcG9pbnQgZGVmYXVsdHMgc2hvdWxkIGJlIHByb2Nlc3NlZCBzbyB3ZSBjYW4gZ2V0IHZhbHVlIGRpcmVjdGx5IGZyb20gbW9kZWxcbiAgICAgIGNvbnN0IGN1clZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZChjdXJWYWwpKSBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1clZhbDtcbiAgICB9XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBvbkFycmF5ID0gKGN1ciwgcHJldiwgcmVvcmRlcikgPT4ge1xuXG4gICAgICBpZighcHJldiAmJiBwcmV2ICE9PSAwICYmIChjdXIgfCAwKSA8IDEpIHJldHVybjtcbiAgICAgIHZhciBpLCBsLCBrZXk7XG5cbiAgICAgIGlmKHByZXYgPiBjdXIgfHwgcmVvcmRlcikge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV1gO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFyclZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKGFyclZhbCwgKGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7YXJyS2V5fS5sZW5ndGhgO1xuICAgIGlmKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gICAgLy9pZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBkZWxldGUgc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gc2VydmljZS5zY29wZS4kd2F0Y2goXG4gICAgICAoKSA9PiBzZXJ2aWNlLm1vZGVsLFxuICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmXG4gICAgICAgICAgICAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgICAgICAgICAhaXNJbml0QXJyYXkgJiZcbiAgICAgICAgICAgIHZhbCAhPT0gbnVsbC8qICYmXG4gICAgICAgICAgICAhYW5ndWxhci5lcXVhbHModmFsLCBzZXJ2aWNlLmdldERlZmF1bHQoa2V5KSkqLykge1xuICAgICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZighYW5ndWxhci5lcXVhbHMoc2VydmljZS5wYXJhbXMsIHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgaWYoc2VydmljZS5tb2RlbC5pZCAmJiAhc2VydmljZS51cGRhdGVzICYmIF8uaXNFbXB0eShzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHNlcnZpY2UucmVmcmVzaFNjaGVtYSkpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTY2hlbWFQYXJhbXMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIsIGtleSkge1xuICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgLy8gZWxzZSBpZiAoZm9ybS5jb25kaXRpb24uaW5jbHVkZXMoXCJhcnJheUluZGV4XCIpKSB7XG4gICAgICAgIC8vICAgZm9ybS5jb25kaXRpb24gPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KGZvcm0uY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgc2VydmljZS5hZGRBcnJheUNvcHkoc2NvcGUsIGdlbmVyaWNLZXksIGluZGV4KTtcbiAgICAgICAgc2NvcGUuJGVtaXQoJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBnZW5lcmljS2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXJ2aWNlLmFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtRGVsZXRlU2NvcGUnLCAoZXZlbnQsIHNjb3BlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoc2NvcGUuZm9ybS5rZXkpO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICAgICAgaWYobGlzdGVuZXIpIGxpc3RlbmVyLmhhbmRsZXJzID0gW107XG5cbiAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioa2V5LCBpbmRleCk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICBjb25zdCBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzZXJ2aWNlLmRlbGV0ZUFycmF5Q29waWVzRm9yKHNjb3BlLmZvcm0ubGluaywgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0ZvcihrZXkpO1xuICAgIF8uZWFjaChjb3BpZXMsIGxpc3QgPT4gbGlzdCAmJiBsaXN0LnNwbGljZShpbmRleCwgMSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhY2hpbmcgZHVwbGljYXRlIHNjb3BlIGZvcicsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSA9IHNjb3BlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbVNjb3BlQ2FjaGUoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXkgPSBrZXkgfHwgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkpIHNlcnZpY2UuZm9ybUNhY2hlW2tleV0gPSBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Gb3JtQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9EYXRhQ2FjaGUoa2V5LCBtb2RlbFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldID0gbW9kZWxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRGF0YUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHJldHVybiBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hJbnRTdHJJbmRleChleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoLT9cXGQrfFwiLipcInwnLionKV0vKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICBsZXQgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgY29uc3QgcmVwbGFjZWQgPSBbXTtcblxuICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZWQucHVzaCh0b1JlcGxhY2UpO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCBgZmZfciR7cmVwbGFjZWQubGVuZ3RoIC0gMX1fZmZgKTtcbiAgICAgIFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXShbXltcXF1dKikvKTtcblxuICAgIHJldHVybiBtYXRjaCAmJlxuICAgICAgcmVwbGFjZWQubGVuZ3RoID9cbiAgICAgIG1hdGNoLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGxldCBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlZFtpbmRleF0pO1xuICAgICAgICAgIFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgICB9KSA6XG4gICAgICBtYXRjaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24obmVzdGVkLCBkZXB0aCkuZ2V0KCk7XG4gICAgICBjb25zdCBrZXlWYWwgPSBfLmlzVW5kZWZpbmVkKHBhcnNlZCkgP1xuICAgICAgICAnJyA6XG4gICAgICAgIF8uaXNTdHJpbmcocGFyc2VkKSA/XG4gICAgICAgICAgYFwiJHtwYXJzZWR9XCJgIDpcbiAgICAgICAgICBwYXJzZWQ7XG4gICAgICBleHAgPSBleHAucmVwbGFjZShgWyR7bmVzdGVkfV1gLCBgWyR7a2V5VmFsfV1gKTtcbiAgICAgIFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYgKF8uaXNBcnJheShtb2RlbCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRLZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrZXkpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIF8uZWFjaChjaGlsZEtleXMsIChrKSA9PiB7XG4gICAgICAgICAgICBza2lwS2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhlZENoaWxkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGssIFtpbmRleCwgaV0pO1xuICAgICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkQ2hpbGRLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc2tpcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRLZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCxcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjtcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlcmNlbnRhZ2UoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXBlcmNlbnRhZ2UnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGYWNlYm9va1ZpZGVvKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tZmFjZWJvb2t2aWRlbyc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3JlYXRpdmVJbWFnZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNyZWF0aXZlaW1hZ2UnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgbGV0IG9taXRIYXNoS2V5ID0gdmFsUHJvcCA/ICBfLmlkZW50aXR5IDogXy5wYXJ0aWFsUmlnaHQoXy5vbWl0LCBcIiQkaGFzaEtleVwiKVxuICAgIGxldCBmaW5kRm4gPSB2YWxQcm9wID9cbiAgICAgIF8uY29tcG9zZShfLnBhcnRpYWwoXy5maW5kLCB0aXRsZU1hcCksIF8ucGFydGlhbChfLnNldCwge30sIHZhbFByb3ApLCBvbWl0SGFzaEtleSkgOlxuICAgICAgXy5jb21wb3NlKF8ucGFydGlhbChfLmZpbmQsIHRpdGxlTWFwKSwgb21pdEhhc2hLZXkpXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcbiAgICAgIHJldHVybiB2YWwubWFwKGZpbmRGbikuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmRGbih2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlZHVsZShmaWVsZCkge1xuICAgICAgZmllbGQuc3RhcnRFbXB0eSA9IHRydWU7XG4gICAgICBmaWVsZC50eXBlID0gJ2NuLXNjaGVkdWxlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXM7XG4gICAgICBjb25zdCBwYXJhbXNLZXlzID0gXy5rZXlzKHF1ZXJ5UGFyYW1zKTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgc2VsZWN0LnNob3dDbGVhckNhY2hlID0gISFzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXMucmVmcmVzaERhdGE7XG4gICAgICBzZWxlY3Quc2luZ2xlUXVlcnkgPSBzZWxlY3QubWluTG9va3VwID09PSAwO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSAocSwgeyByZWZyZXNoRGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9XG4gICAgICAgICAgXyhwYXJhbXNLZXlzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncScpIHtcbiAgICAgICAgICAgICAgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3JlZnJlc2hEYXRhJykge1xuICAgICAgICAgICAgICBpZiAocmVmcmVzaERhdGEpIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgZXhwID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChxdWVyeVBhcmFtc1trZXldLCBzZWxlY3QuYXJyYXlJbmRleCk7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG4gICAgICAgICAgICAgIGFjY1trZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZighXy5pc051bWJlcihzZWxlY3QubWluTG9va3VwKSkgc2VsZWN0Lm1pbkxvb2t1cCA9IHBhcmFtc0tleXMubGVuZ3RoID8gMyA6IDA7XG4gICAgICBpZighXy5oYXMoc2VsZWN0LCAnc2tpcEZpbHRlcmluZycpKSBzZWxlY3Quc2tpcEZpbHRlcmluZyA9ICEhc2VsZWN0Lm1pbkxvb2t1cDtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gMDtcblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VsZWN0Lml0ZW1zLCAoaSkgPT4gaS5kZXN0cm95U3RyYXRlZ3kgPSBcInJldGFpblwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgICBzZWxlY3QuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7XG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQgfHwgKF8uaXNBcnJheSh2YWxpZCkgJiYgXy5pc0VtcHR5KHZhbGlkKSkpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KTtcbiAgICBjb25zdCBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKTtcblxuICAgIHJldHVybiBzY2hlbWEgJiYgc2NoZW1hLnR5cGUgPT09ICdhcnJheScgP1xuICAgICAgc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkgOlxuICAgICAgc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBiYW5kLWFpZCBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgc2V0IGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFycmF5IHNvbXdoZXJlXG4gICAgLy8gZGVlcCBpbiB0aGUgYW5ndWxhciBvciBhbmd1bGFyLXNjaGVtYS1mb3JtIG5ldGhlci1yZWdpb25zXG4gICAgY29uc3QgbGlua01vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5saW5rLCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZighbGlua01vZGVsLmdldCgpKSBsaW5rTW9kZWwuc2V0KFtdKTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdERpc3BsYXkubGlua31bJHtpbmRleH1dLmZlYXR1cmVzYClcbiAgICAgICAgICAgICAgLmdldCgpO1xuICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgZmVhdHVyZXMgJiZcbiAgICAgICAgICAgICAgZmVhdHVyZXNcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGZlYXR1cmVLZXkpO1xuICAgICAgICByZXR1cm4gc2hvdztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGBmb3JtLnNob3dGZWF0dXJlKGFycmF5SW5kZXgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBpZihrZXkgPT09IHNlbGVjdEtleSkgcmV0dXJuO1xuICAgICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICAgIHZhciBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaSk7XG4gICAgICAgIHZhciBzcGxpdEluZGV4ZWRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGluZGV4ZWRLZXkpO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgXy5lYWNoKGVsZW0sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RGaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgaXRlbSA9PiB7XG4gICAgICBpZihpdGVtLnNlbGVjdEZpZWxkID09PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGtleSA9IF8uaXNBcnJheShpdGVtLmtleSkgPyBpdGVtLmtleSA6IE9iamVjdFBhdGgucGFyc2UoaXRlbS5rZXkpO1xuICAgICAgY29uc3QgZmVhdHVyZUtleSA9IF8ubGFzdChrZXkpO1xuXG4gICAgICBpdGVtLnNob3dGZWF0dXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgICAgICAgIHNlcnZpY2VcbiAgICAgICAgICAgICAgLnBhcnNlRXhwcmVzc2lvbihgbW9kZWwuJHtzZWxlY3RGaWVsZEtleX1gKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoKWA7XG4gICAgICBpdGVtLmNvbmRpdGlvbiA9IGl0ZW0uY29uZGl0aW9uID9cbiAgICAgICAgYCgke2l0ZW0uY29uZGl0aW9ufSkgJiYgJHtjb25kaXRpb259YCA6IGNvbmRpdGlvbjtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiB0aGUgZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgaWYoZGVmYXVsdHMgJiYgIW1vZGVsLmdldCgpKSB7XG4gICAgICBtb2RlbC5zZXQoZGVmYXVsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgc2VydmljZS5yZWZyZXNoU2NoZW1hID0gXy5kZWJvdW5jZSh1cGRhdGVTY2hlbWEgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAuLi5jbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMoKSksXG4gICAgICAgIC4uLnNlcnZpY2UucGFyYW1zXG4gICAgICB9O1xuICAgICAgbGV0IGRpZmYgPSBfLm9taXQoY25VdGlsLmRpZmYoc2VydmljZS5zY2hlbWEucGFyYW1zLCBwYXJhbXMsIHRydWUpLCAndXBkYXRlcycpO1xuICAgICAgbGV0IGtleXM7XG5cbiAgICAgIGlmKCFfLmlzRW1wdHkoZGlmZikgfHwgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIGlmKHVwZGF0ZVNjaGVtYSkgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IHVwZGF0ZVNjaGVtYTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIGlmKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGlmZiA9IF8ub21pdChkaWZmLCBfLmlzTnVsbCk7XG4gICAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXBhcmFtcy51cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgICBkaWZmID0gY25VdGlsLmRpZmYocGFyYW1zLCBfLm9taXQoc2VydmljZS5zY2hlbWEucGFyYW1zLCBbJ3VwZGF0ZVNjaGVtYScsICd1cGRhdGVzJ10pKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuICAgICAgaWYgKGNuRmxleEZvcm1Db25maWcub25Qcm9jZXNzRGlmZikge1xuICAgICAgICBjbkZsZXhGb3JtQ29uZmlnLm9uUHJvY2Vzc0RpZmYoc2NoZW1hKVxuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IF8uc3RhcnRzV2l0aChrLCBrZXkpKTtcbiAgICAgICAgICBfLmVhY2goY3VyS2V5cywga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1zID0gXy5jb21wYWN0KFtcbiAgICAgICAgICAgICAgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSksXG4gICAgICAgICAgICAgIC4uLihzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSkgfHwgW10pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXy5lYWNoKGZvcm1zLCBmb3JtID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldlNjaGVtYSA9IGZvcm0uc2NoZW1hO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTY2hlbWEgID0gc2VydmljZS5nZXRTY2hlbWEoa2V5LCB7IFtzY2hlbWEua2V5XTogc2NoZW1hIH0pO1xuICAgICAgICAgICAgICBpZihwcmV2U2NoZW1hLnJlYWRvbmx5ICYmICFuZXdTY2hlbWEucmVhZG9ubHkpIGZvcm0ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgKGZvcm0sIGtleSkgPT4ge1xuXG4gICAgICAgICAgaWYoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcblxuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uaXRpb24gPSAndHJ1ZScgdG8gZm9yY2VcbiAgICAvLyBjb25kaXRpb24gdG8gZXZhbCB0cnVlLCBzbyB3ZSBzZXQgdGhlIHVwZGF0ZSBjb25kaXRpb24gdG8gJ3RydWUnXG4gICAgLy8gYmVmb3JlIGNvbXBhcmluZ1xuICAgIGlmKCF1cGRhdGUuY29uZGl0aW9uICYmIGN1cnJlbnQuY29uZGl0aW9uKSB1cGRhdGUuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgIGxldCByZWRyYXcgPSAhaXNDaGlsZCAmJiBjdXJyZW50LmNvbmRpdGlvbiAhPT0gdXBkYXRlLmNvbmRpdGlvbjtcblxuICAgIF8uZXh0ZW5kKGN1cnJlbnQsIF8ub21pdCh1cGRhdGUsICdpdGVtcycsICdrZXknKSk7XG5cbiAgICBjdXJyZW50Ll9vZ0tleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYoIXVwZGF0ZVtwcm9wXSkge1xuICAgICAgICBkZWxldGUgY3VycmVudFtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBnZXRPZ0tleXModXBkYXRlKTtcblxuICAgIC8vc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcblxuICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybVJlcHJvY2Vzc0ZpZWxkJywga2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSB7XG4gICAgICBjb25zb2xlLmxvZygnVE9ETzogc2VlIGlmIHRoaXMgY2FuIGJlIHJlbW92ZWQnKTtcbiAgICAgIGN1cnJlbnQucmVkcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG90S2V5KGtleSkge1xuICAgIHJldHVybiAoXy5pc1N0cmluZyhrZXkpID8gT2JqZWN0UGF0aC5wYXJzZShrZXkpIDoga2V5KS5qb2luKCcuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEVycm9yKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZ2V0RG90S2V5KGZpZWxkLmtleSksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF8uZ2V0KHNlcnZpY2UsICdlcnJvcnMnKSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgd2hpbGUocmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSB7XG4gICAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICAgIGNvbnN0IGFycmF5SW5kZXhLZXkgPSAvKFteLltdKilcXFthcnJheUluZGV4XFxdLy5leGVjKHJlc29sdmUpO1xuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgICAgaWYoIWluZGV4KSByZXR1cm4gcmVzb2x2ZTtcbiAgICAgIHJlc29sdmUgPSByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gL1xcWyhcXGQqKVxcXS8uZXhlYyhrZXkpWzFdO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGtleUNvcHk7XG4gICAgaWYgKCFfLmlzQXJyYXkoaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IFtpbmRleF07XG4gICAgfVxuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4Lmxlbmd0aCAmJiBrZXlDb3B5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgIGxldCBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXguc2hpZnQoKTtcbiAgICB9XG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLm9wZW5lZC50aGVuKCgpID0+XG4gICAgICAgIHZtLm1vZGFsLmRpc21pc3MoKVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRmxleEZvcm1Nb2RhbChjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlLCAkdWliTW9kYWwsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7IG9wZW4gfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxuICAgICAgICA8IS0tIHdlIHByb2Nlc3MgZGVmYXVsdHMgb3Vyc2VsdmVzLCBoZW5jZSBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgLS0+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytb3B0aW9ucz1cInsgc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIH1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGNuRmxleEZvcm1UYWcoKTtcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaCgoKSA9PiB2bS5jb25maWcuc2NoZW1hLCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZ2V0U2NvcGU6IHZtLmNvbmZpZy5nZXRTY29wZSB8fCAoKCkgPT4gJHNjb3BlKSxcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcblxuICAgIGNuRmxleEZvcm1TZXJ2aWNlLmRlc3Ryb3lTZXJ2aWNlKHZtLnNlcnZpY2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNuRmxleEZvcm1IZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmSGVhZGVyQ29uZmlnJyxcbiAgICAgIHN1Ym1pdDogJyZmZlN1Ym1pdCcsXG4gICAgICBsb2FkT2Zmc2NyZWVuOiAnJmZmTG9hZE9mZnNjcmVlbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtSGVhZGVyLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLmxlYWRcIj57ezo6dm0udGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0udGl0bGUuaWNvblwiIGNsYXNzPVwie3t2bS50aXRsZS5pY29ufX1cIi8+XG4gICAgICAgICAgICB7e3ZtLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUuc3ViXCI+e3s6OnZtLnRpdGxlLnN1Yn19PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ZtLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0ucmV0dXJuU3R5bGUgPyB2bS5yZXR1cm5TdHlsZSA6ICdkZWZhdWx0LWRhcmsnXCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0ucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0ucmV0dXJuU3RhdGV9fVwiPlxuICAgICAgICAgICAgICB7e3ZtLnJldHVyblRleHQgfHwgJ0NhbmNlbCd9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0uY2xvc2VCdXR0b24uc3R5bGUgPyB2bS5jbG9zZUJ1dHRvbi5zdHlsZSA6ICdkZWZhdWx0LWRhcmsnfX1cIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmNsb3NlQnV0dG9uLmhhbmRsZXIoKVwiPlxuICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XCJidXR0b24gaW4gdm0uYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IG9wdGlvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJvcHRpb24udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtdXBkYXRlZC1hdCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICBpZD1cImRhdGEtdXBkYXRlZC1hdFwiXG4gICAgICAgICAgICAgbmctaGlkZT1cInZtLmNvbmZpZy5ub0RhdGFcIj5cbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0udXBkYXRlRGF0YSgpXCI+VXBkYXRlIERhdGE8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5gXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGZmSGVhZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmSGVhZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIHZtLnVwZGF0ZURhdGEgPSB1cGRhdGVEYXRhO1xuICB2bS5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAvL2FjdGl2YXRlKCk7XG4gIC8vJHNjb3BlLiRvbignJGRlc3Ryb3knLCBjbGVhbnVwKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLnRpdGxlJywgaW5pdFRpdGxlLCB0cnVlKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnLmFjdGlvbkNvbmZpZycsIGluaXRBY3Rpb25Db25maWcsIHRydWUpO1xuXG4gIC8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gaW5pdFRpdGxlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBY3Rpb25Db25maWcoKSB7XG4gICAgKHtcbiAgICAgIHJldHVyblN0YXRlOiB2bS5yZXR1cm5TdGF0ZSxcbiAgICAgIHJldHVyblN0eWxlOiB2bS5yZXR1cm5TdHlsZSxcbiAgICAgIHJldHVyblRleHQ6IHZtLnJldHVyblRleHQsXG4gICAgICBjbG9zZUJ1dHRvbjogdm0uY2xvc2VCdXR0b24sXG4gICAgICBhY3Rpb25zOiB2bS5hY3Rpb25zXG4gICAgfSA9IHZtLmNvbmZpZy5hY3Rpb25Db25maWcgfHwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGF0YSgpIHtcbiAgICAvLyAkc2NvcGUuJGVtaXQoJ2ZmUmVmcmVzaERhdGEnKTtcbiAgICAvLyB0aGlzIGNvbXBvbmVudCB3aWxsIG9mdGVuIGJlIHNpYmxpbmdzIHRvIHRoZSBmbGV4IGZvcm1zIG9uZSxcbiAgICAvLyBzbyBuZWVkIHRvIGJyb2FkY2FzdCBmcm9tIHNoYXJlZCBwYXJlbnQuLi55ZXMgaXQncyB1Z2x5XG4gICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kYnJvYWRjYXN0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=