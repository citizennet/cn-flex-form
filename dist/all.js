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
	
	//angular
	//.module('cn.flex-form')
	//.provider('cnFlexFormTypes', cnFlexFormTypesProvider);
	
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
	//angular.module('cn.flex-form')
	//.config(schemaFormConfig)
	//.run(addTemplates);
	
	function schemaFormConfig(cnFlexFormServiceProvider) {
	  'ngInject';
	
	  tv4.addFormat({
	    'url': function url(data) {
	      return _.isString(data) && !/^(https?:\/\/.{2}|$)/.test(data) && 'invalid url';
	    }
	  });
	
	  var extensions = ['cn-fieldset', 'cn-toggle', 'cn-datetimepicker', 'cn-autocomplete', 'cn-autocomplete-detailed', 'cn-currency', 'cn-radios', 'cn-radiobuttons', 'cn-percentage', 'cn-display', 'cn-mediaupload', 'cn-csvupload', 'cn-reusable', 'cn-table', 'cn-creativeimage'];
	
	  _.each(extensions, function (extension) {
	    cnFlexFormServiceProvider.registerField({
	      type: extension,
	      templateUrl: 'app/components/cn-flex-form/forms/' + extension + '.html'
	    });
	  });
	}
	
	function addTemplates($templateCache) {
	  'ngInject';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-toggle.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="clearfix">\n          <cn-toggle-switch\n            class="pull-left"\n            ng-show="form.key"\n            ng-model-options="form.ngModelOptions"\n            ng-model="$$value$$"\n            sf-changed="form"\n            schema-validate="form"\n            on-value="form.onValue"\n            off-value="form.offValue"\n            read-only="form.readonly"\n            undefined-class="form.undefinedClass"/>\n          <span ng-show="form.onText && form.offText">\n            {{$$value$$ === form.onValue ? form.onText : form.offText}}\n          </span>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-datetimepicker.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}"\n               ng-show="showTitle()">{{form.title}}</label>\n        <cn-datetimepicker\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          is-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          min-date="form.minDate"\n          max-date="form.maxDate"\n          max-view="{{form.maxView}}"\n          cn-date-required="form.required"\n          placeholder="{{form.placeholder}}"\n          model-type="{{form.schema.type}}"\n          model-formatter="form.modelFormatter"\n          model-parser="form.modelParser"\n          view-formatter="form.viewFormatter"\n          view-parser="form.viewParser"\n          format-string={{form.dateFormat}}\n          icon-class={{form.iconClass}}>\n        </cn-datetimepicker>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  var sharedAutocompleteTpl = '\n        <tags-input\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          ng-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          display-property="{{form.displayProperty || \'name\'}}"\n          value-property="{{form.valueProperty}}"\n          placeholder="{{form.placeholder || \' \'}}"\n          clear-on-blur="true"\n          add-on-comma="false"\n          add-from-autocomplete-only="{{!form.allowNew}}"\n          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n          on-init="form.onInit($tag, form, $event, $setter)"\n          model-type="{{form.getSchemaType()}}"\n          array-value-type="{{form.schema.items.type}}"\n          hide-tags="{{form.detailedList}}"\n          tags-style="{{form.selectionStyle}}"\n          required="{{form.required}}"\n          min-length="{{form.minLength}}"\n          allowed-tags-pattern=".*"\n          dropdown-icon="true"\n          item-formatter="form.itemFormatter"\n          min-tags="{{form.schema.minItems}}"\n          max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\n          allow-bulk="{{form.bulkAdd}}"\n          bulk-delimiter="{{form.bulkDelimiter}}"\n          bulk-placeholder="{{form.bulkPlaceholder}}"\n          show-clear-all="{{form.showClearAll}}"\n          show-clear-cache="{{form.showClearCache}}"\n          show-button="true">\n          <auto-complete\n            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query, options)"\n            skip-filtering="{{form.skipFiltering}}"\n            min-length="{{form.minLookup}}">\n          </auto-complete>\n        </tags-input>';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <div sf-array="form">\n          <ol class="list-group cn-autocomplete-list"\n              ng-if="modelArray.length"\n              ng-model="modelArray">\n            <li class="list-group-item {{form.fieldHtmlClass}}"\n                ng-repeat="item in modelArray track by $index">\n              <button ng-hide="form.readonly || form.remove === null"\n                      ng-click="deleteFromArray($index)"\n                      type="button" class="close pull-right">\n                <span aria-hidden="true">&times;</span>\n              </button>\n              <sf-decorator form="copyWithIndex($index)"/>\n            </li>\n          </ol>\n        </div>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-currency.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <label class="input-group-addon"\n                 ng-disabled="form.readonly"\n                 for="{{form.key.join(\'.\')}}">$</label>\n          <input class="form-control"\n                 cn-currency-format="{{form.currencyFormat}}"\n                 cn-currency-placeholder="{{form.placeholder}}"\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="text"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-model="$$value$$">\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radios.html', '<div class="form-group {{form.htmlClass}}"\n            ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n         <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n         <div class="btn-group clearfix">\n           <label class="radio radio-block"\n                  ng-repeat="item in form.titleMap">\n             <input type="radio"\n                    sf-changed="form"\n                    ng-disabled="form.readonly"\n                    ng-model="$$value$$"\n                    ng-model-options="form.ngModelOptions"\n                    schema-validate="form"\n                    ff-validate="form"\n                    ng-value="item.value"\n                    name="{{form.key.join(\'.\')}}">\n             <span class="radio-block-icon" ng-if="item.iconClass">\n               <i class="fa fa-{{item.iconClass}} fa-lg"></i>\n             </span>\n             <span ng-bind-html="item.name"></span>\n           </label>\n         </div>\n         <span class="help-block" sf-message="form.description"></span>\n       </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radiobuttons.html', '\n      <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="btn-group clearfix">\n          <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\n                 ng-repeat="item in form.titleMap">\n            <input type="radio"\n                   class="{{form.fieldHtmlClass}} hide"\n                   sf-changed="form"\n                   ng-disabled="form.readonly"\n                   ng-model="$$value$$"\n                   ng-model-options="form.ngModelOptions"\n                   schema-validate="form"\n                   ff-validate="form"\n                   ng-value="item.value"\n                   name="{{form.key.join(\'.\')}}">\n            <i class="fa fa-{{item.value}} fa-lg"></i>\n            <span ng-bind-html="item.name"></span>\n          </label>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <input class="form-control"\n                 cn-percentage-format\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="number"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key && form.key[0]}}"\n                 name="{{form.key && form.key[0]}}"\n                 ng-model="$$value$$">\n           <div class="input-group-addon"\n                  ng-disabled="form.readonly"\n                  for="{{form.key && form.key[0]}}">%</div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-display.html', '\n      <div class="form-group cn-display{{form.htmlClass}}">\n        <input ng-show="form.key"\n               class="form-control"\n               id="{{form.key.join(\'.\')}}"\n               name="{{form.key.join(\'.\')}}"\n               ng-disabled="true"\n               value="{{form.getDisplay(form.key, form.arrayIndex)}}">\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n      <fieldset \n        ng-disabled="form.readonly"\n        class="schema-form-fieldset {{form.htmlClass}}"\n        ng-class="{\'borderless\': form.pos === 0}">\n        <legend ng-click="form.toggleCollapse(form)"\n                ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                ng-mouseenter="form.render = true">\n          <i ng-show="form.collapsible"\n             class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n          {{ form.title }}\n        </legend>\n        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n        <div uib-collapse="form.collapsed">\n          <div ng-if="form.render">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </div>\n        </div>\n      </fieldset>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <media-upload ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-file-type="form.fileType"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </media-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-csvupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <csv-upload ng-model="$$value$$"\n                      cn-upload-path="form.uploadPath"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </csv-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-reusable.html', '\n      <div class="form-group cn-reusable {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <cn-select-or\n          ng-show="form.key"\n          select-from="form.library"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          sf-changed="form"\n          schema-validate="form"\n          ff-form="form"\n          directiveId="form.directiveId"\n          item-template="form.itemTemplate"\n          toggle-text="form.toggleText"\n          disabled="form.readonly"\n          view="form.view">\n          <sf-decorator ng-repeat="item in form.items" form="item"/>\n        </cn-select-or>\n        <p ng-if="form.loadMore && form.view === \'list\'">\n          <a ng-click="form.loadMore()"\n             class="btn btn-default btn-block">Load More</a>\n        </p>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-table.html', '\n      <div class="form-group cn-ff-table {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <h6>{{form.title}}</h6>\n        <div class="row">\n          <div ng-repeat="col in form.columns" class="{{col.columnWidth}}">\n            <p class="column-header">{{col.columnHeader}}</p>\n          </div>\n        </div>\n        <div class="row" ng-repeat="row in form.items">\n          <div ng-repeat="col in row.items" class="{{col.columnWidth}}">\n            <sf-decorator form="col"></sf-decorator>\n          </div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-creativeimage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-creative-image ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      cn-ng-model-key="form.ngModelKey"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-creative-image>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
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
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	  'cn-csvupload': 'processCsvUpload',
	  'cn-reusable': 'processReusable',
	  'cn-toggle': 'processToggle',
	  'cn-table': 'processTable',
	  'component': 'processComponent',
	  'section': 'processSection',
	  'tabarray': 'processSection',
	  'array': 'processArray'
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
	      first = key[0];
	      next = key[1];
	      if (/^-?\d*$/.test(next)) {
	        if (key.length === 2) {
	          depth = depth = depth[key.shift()];
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
	    if (!valProp) return;
	
	    if (select.getSchemaType() === 'array') {
	      if (!val || !_.isArray(val)) return;
	
	      var mapVal = val.map(function (x) {
	        return _.find(titleMap, _defineProperty({}, valProp, x));
	      }).filter(function (x) {
	        return x !== undefined;
	      });
	
	      return mapVal;
	    } else {
	      return _.find(titleMap, _defineProperty({}, valProp, val));
	    }
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
	      select.titleQuery = function (q, _ref19) {
	        var refreshData = _ref19.refreshData;
	
	        var params = _(paramsKeys).reduce(function (acc, key) {
	          if (key === 'q') {
	            acc[queryParams[key]] = q;
	          } else if (key === 'refreshData') {
	            if (refreshData) acc[queryParams[key]] = true;
	          } else {
	            var val = service.parseExpression(queryParams[key]).get();
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
	              if (valid === undefined) modelValue.set();
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
	      var diff = _.omit(cnUtil.diff(service.schema.params, params, true, 'delete'), 'updates');
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
	            return k.includes(key);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMDdjNTAzYjBkY2VhMmFhN2M3MSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVsZXRlQXJyYXlDb3BpZXNGb3IiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VBbGwiLCJwYXJzZUFueSIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0NyZWF0aXZlSW1hZ2UiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGaWVsZCIsInByb2Nlc3NGaWVsZHNldCIsInByb2Nlc3NGaWVsZFByb3BzIiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlckhhbmRsZXIiLCJyZWdpc3RlclJlc29sdmUiLCJyZXBsYWNlQXJyYXlJbmRleCIsInJlcHJvY2Vzc0ZpZWxkIiwicmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zIiwic2V0QXJyYXlJbmRleCIsInNldHVwQ29uZmlnIiwic2V0dXBBcnJheVNlbGVjdERpc3BsYXkiLCJzZXR1cFNlbGVjdERpc3BsYXkiLCJzZXR1cFNjaGVtYVJlZnJlc2giLCJzaWxlbmNlTGlzdGVuZXJzIiwic2tpcERlZmF1bHRzIiwiZ2V0U2VydmljZSIsImZuIiwiZmluZCIsImRlc3Ryb3lTZXJ2aWNlIiwiZW1wdHkiLCJyZW1vdmUiLCJzIiwiQ05GbGV4Rm9ybUNvbnN0cnVjdG9yIiwiYXJncyIsIm1vZGVsIiwiY3VyU2VydmljZSIsIm5ld1NlcnZpY2UiLCJDTkZsZXhGb3JtIiwiZGVidWciLCJhcnJheUNvcGllcyIsImFycmF5TGlzdGVuZXJzIiwiZGF0YUNhY2hlIiwiZGVmYXVsdHMiLCJlcnJvcnMiLCJldmVudHMiLCJmb3JtQ2FjaGUiLCJzY29wZUNhY2hlIiwibGlzdGVuZXJzIiwicmVzb2x2ZVJlZ2lzdGVyIiwidXBkYXRlcyIsInNraXBEZWZhdWx0IiwiZ2V0UGFyYW1zIiwicGFyYW1zIiwiZXh0ZW5kIiwic2NvcGUiLCJnZXRTY29wZSIsImZvcm1zIiwiZm9ybSIsImJpbmQiLCJzZXRWYWx1ZSIsImNvbXBpbGVkIiwiZm9ybUN0cmwiLCJ1cGRhdGVTY2hlbWEiLCJnZXRTY2hlbWFGb3JtIiwiZ2V0UGFyYW1PdmVycmlkZXMiLCJnZXRQYXJtcyIsIm5vb3AiLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsImFycmF5SW5kZXgiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaGFzIiwiZXF1YWxzIiwiaXNUcnVseUVtcHR5Iiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJwb3MiLCJodG1sQ2xhc3MiLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJnZXRPZ0tleXMiLCJyZWplY3QiLCJrZXlzIiwiaXNEZWZpbmVkIiwiX29nS2V5cyIsImRlc2NyaXB0aW9uIiwic2hvd0NsZWFyQWxsIiwiJGJyb2FkY2FzdCIsImdldERvdEtleSIsImVycm9yIiwiaXNFbXB0eSIsIm5nTW9kZWxPcHRpb25zIiwiYWxsb3dJbnZhbGlkIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZGVwdGgiLCJwYXJzZSIsInByb3BlcnRpZXMiLCJzaGlmdCIsImV4cCIsIndhdGNoYWJsZXMiLCJuZXN0ZWQiLCJtYXRjaE5lc3RlZEV4cHJlc3Npb24iLCJyZXBsYWNlU3RyIiwicmVwbGFjZSIsInJlc29sdmUiLCJkYXRhUHJvcCIsImZpZWxkUHJvcCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsInJlc3VsdCIsImVpdGhlcnMiLCJzcGxpdCIsIngiLCJhbGwiLCJhY2MiLCJsYXN0IiwidW5kZWZpbmVkIiwic2tpcFByb3BIYW5kbGVycyIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsInZhbCIsInZhbDEiLCJmaWVsZEtleSIsInJlZ2lzdGVyIiwiY29uZGl0aW9uYWxzIiwicHJldiIsIm1hcCIsInBhdGgiLCJyZXNvbHV0aW9uIiwiY3VyIiwiYWRqdXN0bWVudCIsImRhdGUiLCJ1bml0cyIsInRyaW0iLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJjb25zb2xlIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJjdXJWYWwiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsInN0cmlwSW5kZXhlcyIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiZ2VuZXJpY0tleSIsImluZGV4IiwiJGVtaXQiLCJsaW5rIiwic3BsaWNlIiwiY29waWVzIiwicGx1Y2siLCJrZXlTdGFydCIsImZpbHRlciIsIndhcm4iLCJtYXRjaEludFN0ckluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZWQiLCJwYXJzZWQiLCJrZXlWYWwiLCJpc1N0ciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsIm5vQ29uc3RydWN0aW9uIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsInNpbGVudCIsImluZGV4T2YiLCJnZXRBcnJheUluZGV4Iiwia3MiLCJrIiwic2tpcEtleXMiLCJpbmRleGVkS2V5IiwiY2hpbGRLZXlzIiwiaW5kZXhlZENoaWxkS2V5IiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsImQiLCJwYXJzZUludCIsInN0YXJ0T2YiLCJ2aWV3Rm9ybWF0dGVyIiwiZGF0ZUZvcm1hdCIsInZpZXdQYXJzZXIiLCJnZXRTZWxlY3RWYWxQcm9wIiwic2VsZWN0IiwidmFsdWVQcm9wZXJ0eSIsImdldEFsbG93ZWRTZWxlY3RWYWx1ZSIsImdldFRpdGxlTWFwIiwidmFsUHJvcCIsIm1hcFZhbCIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInF1ZXJ5UGFyYW1zIiwicGFyYW1zS2V5cyIsInNob3dDbGVhckNhY2hlIiwicmVmcmVzaERhdGEiLCJ0aXRsZVF1ZXJ5IiwicSIsIm1pbkxvb2t1cCIsInNraXBGaWx0ZXJpbmciLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0IiwiZGVzdHJveVN0cmF0ZWd5Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsImxpbmtNb2RlbCIsImZlYXR1cmVLZXkiLCJzaG93RmVhdHVyZSIsImZlYXR1cmVzIiwic2hvdyIsInNlbGVjdEtleSIsImVsZW0iLCJzcGxpdEluZGV4ZWRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0TW9kZWwiLCJzZWxlY3RWYWx1ZSIsIml0ZW1WYWx1ZSIsInNlbGVjdEZpZWxkS2V5Iiwic3BsaXRLZXkiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwiaXNOdWxsIiwidGhlbiIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY3VyS2V5cyIsImNvbXBhY3QiLCJwcmV2U2NoZW1hIiwibmV3U2NoZW1hIiwicmVhZG9ubHkiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsImxvZyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRyb290U2NvcGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsIm9wZW5lZCIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJpbml0VGl0bGUiLCJpbml0QWN0aW9uQ29uZmlnIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsIiRwYXJlbnQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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QVc7QUFBRSxjQUFPeU8sUUFBUUcsVUFBZjtBQUE0QixNQUF2RCxFQUF5RCxVQUFTamlCLEtBQVQsRUFBZ0I7QUFDdkU7QUFDQThoQixlQUFRSSxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FKLGVBQVFJLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0NsaUIsS0FBaEM7QUFDRCxNQUpEO0FBS0Q7QUFDRjs7bUJBRWM0aEIsVSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY24tZmxleC1mb3JtXCIsIFtcImxvZGFzaFwiLCBcIm9iamVjdHBhdGhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyb290W1wibG9kYXNoXCJdLCByb290W1wib2JqZWN0cGF0aFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTA3YzUwM2IwZGNlYTJhYTdjNzEiLCJpbXBvcnQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciwgY25GbGV4Rm9ybVJvdXRlcyB9IGZyb20gJy4vY24tZmxleC1mb3JtLnJvdXRlcyc7XG5pbXBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfSBmcm9tICcuL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMnO1xuaW1wb3J0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0uc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXInO1xuaW1wb3J0IGNuRmxleEZvcm0gZnJvbSAnLi9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlJztcbmltcG9ydCBjbkZsZXhGb3JtSGVhZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IGZmVmFsaWRhdGUgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjb25zdCBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtQ29uZmlnXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRJZ25vcmVQYXJhbShwYXJhbSkge1xuICAgIGlnbm9yZVBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWcoJHN0YXRlUGFyYW1zKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMob3ZlcnJpZGVzID0ge30pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIF8oeyAuLi4kc3RhdGVQYXJhbXMsIC4uLm92ZXJyaWRlcyB9KVxuICAgICAgICAub21pdChpZ25vcmVQYXJhbXMpXG4gICAgICAgIC5vbWl0KHYgPT4gKF8uaXNVbmRlZmluZWQodikgfHwgdiA9PT0gbnVsbCkpXG4gICAgICAgIC52YWx1ZSgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Db25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcigpIHtcblxuICB2YXIgZmllbGRUeXBlUmVnaXN0ZXIgPSBbe1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hpZGRlbicsXG4gICAgdHlwZTogJ2hpZGRlbidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvcydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9idXR0b25zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvYnV0dG9ucydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnYXV0b2NvbXBsZXRlJykgfHwgZmllbGQudGl0bGVNYXAgfHwgZmllbGQudGl0bGVNYXBSZXNvbHZlIHx8IGZpZWxkLnRpdGxlTWFwUXVlcnksXG4gICAgdHlwZTogJ2NuLWF1dG9jb21wbGV0ZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NuLWRhdGV0aW1lcGlja2VyJyB8fCBmaWVsZC50eXBlID09PSAnZGF0ZXRpbWUtbG9jYWwnIHx8IGZpZWxkLnR5cGUgPT09ICd0aW1lLW1pbnV0ZXMnLFxuICAgIHR5cGU6ICdjbi1kYXRldGltZXBpY2tlcidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hlbHAnLFxuICAgIHR5cGU6ICdoZWxwJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdkaXNwbGF5JyksXG4gICAgdHlwZTogJ2NuLWRpc3BsYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQuaW5jbHVkZXMoJ2N1cnJlbmN5JyksXG4gICAgdHlwZTogJ2NuLWN1cnJlbmN5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCA9PT0gJ3BlcmNlbnRhZ2UnLFxuICAgIHR5cGU6ICdjbi1wZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NyZWF0aXZlaW1hZ2UnLFxuICAgIHR5cGU6ICdjbi1jcmVhdGl2ZWltYWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiLy9hbmd1bGFyLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgICAvLy5ydW4oYWRkVGVtcGxhdGVzKTtcblxuZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnLFxuICAgICdjbi1jcmVhdGl2ZWltYWdlJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIHJlYWQtb25seT1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgdW5kZWZpbmVkLWNsYXNzPVwiZm9ybS51bmRlZmluZWRDbGFzc1wiLz5cbiAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5vblRleHQgJiYgZm9ybS5vZmZUZXh0XCI+XG4gICAgICAgICAgICB7eyQkdmFsdWUkJCA9PT0gZm9ybS5vblZhbHVlID8gZm9ybS5vblRleHQgOiBmb3JtLm9mZlRleHR9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGF0ZXRpbWVwaWNrZXIuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZGF0ZXRpbWVwaWNrZXJcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgaXMtZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBtaW4tZGF0ZT1cImZvcm0ubWluRGF0ZVwiXG4gICAgICAgICAgbWF4LWRhdGU9XCJmb3JtLm1heERhdGVcIlxuICAgICAgICAgIG1heC12aWV3PVwie3tmb3JtLm1heFZpZXd9fVwiXG4gICAgICAgICAgY24tZGF0ZS1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLnR5cGV9fVwiXG4gICAgICAgICAgbW9kZWwtZm9ybWF0dGVyPVwiZm9ybS5tb2RlbEZvcm1hdHRlclwiXG4gICAgICAgICAgbW9kZWwtcGFyc2VyPVwiZm9ybS5tb2RlbFBhcnNlclwiXG4gICAgICAgICAgdmlldy1mb3JtYXR0ZXI9XCJmb3JtLnZpZXdGb3JtYXR0ZXJcIlxuICAgICAgICAgIHZpZXctcGFyc2VyPVwiZm9ybS52aWV3UGFyc2VyXCJcbiAgICAgICAgICBmb3JtYXQtc3RyaW5nPXt7Zm9ybS5kYXRlRm9ybWF0fX1cbiAgICAgICAgICBpY29uLWNsYXNzPXt7Zm9ybS5pY29uQ2xhc3N9fT5cbiAgICAgICAgPC9jbi1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgdmFyIHNoYXJlZEF1dG9jb21wbGV0ZVRwbCA9IGBcbiAgICAgICAgPHRhZ3MtaW5wdXRcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5PVwie3tmb3JtLmRpc3BsYXlQcm9wZXJ0eSB8fCAnbmFtZSd9fVwiXG4gICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJ7e2Zvcm0udmFsdWVQcm9wZXJ0eX19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlciB8fCAnICd9fVwiXG4gICAgICAgICAgY2xlYXItb24tYmx1cj1cInRydWVcIlxuICAgICAgICAgIGFkZC1vbi1jb21tYT1cImZhbHNlXCJcbiAgICAgICAgICBhZGQtZnJvbS1hdXRvY29tcGxldGUtb25seT1cInt7IWZvcm0uYWxsb3dOZXd9fVwiXG4gICAgICAgICAgb24tYmVmb3JlLXRhZy1hZGRlZD1cImZvcm0ub25BZGQoe3ZhbHVlOiAkdGFnfSwgZm9ybSwgJGV2ZW50LCAkcHJldilcIlxuICAgICAgICAgIG9uLWluaXQ9XCJmb3JtLm9uSW5pdCgkdGFnLCBmb3JtLCAkZXZlbnQsICRzZXR0ZXIpXCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLmdldFNjaGVtYVR5cGUoKX19XCJcbiAgICAgICAgICBhcnJheS12YWx1ZS10eXBlPVwie3tmb3JtLnNjaGVtYS5pdGVtcy50eXBlfX1cIlxuICAgICAgICAgIGhpZGUtdGFncz1cInt7Zm9ybS5kZXRhaWxlZExpc3R9fVwiXG4gICAgICAgICAgdGFncy1zdHlsZT1cInt7Zm9ybS5zZWxlY3Rpb25TdHlsZX19XCJcbiAgICAgICAgICByZXF1aXJlZD1cInt7Zm9ybS5yZXF1aXJlZH19XCJcbiAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxlbmd0aH19XCJcbiAgICAgICAgICBhbGxvd2VkLXRhZ3MtcGF0dGVybj1cIi4qXCJcbiAgICAgICAgICBkcm9wZG93bi1pY29uPVwidHJ1ZVwiXG4gICAgICAgICAgaXRlbS1mb3JtYXR0ZXI9XCJmb3JtLml0ZW1Gb3JtYXR0ZXJcIlxuICAgICAgICAgIG1pbi10YWdzPVwie3tmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMH19XCJcbiAgICAgICAgICBhbGxvdy1idWxrPVwie3tmb3JtLmJ1bGtBZGR9fVwiXG4gICAgICAgICAgYnVsay1kZWxpbWl0ZXI9XCJ7e2Zvcm0uYnVsa0RlbGltaXRlcn19XCJcbiAgICAgICAgICBidWxrLXBsYWNlaG9sZGVyPVwie3tmb3JtLmJ1bGtQbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1jYWNoZT1cInt7Zm9ybS5zaG93Q2xlYXJDYWNoZX19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSwgb3B0aW9ucylcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0uc2tpcEZpbHRlcmluZ319XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmctaGlkZT1cImZvcm0ucmVhZG9ubHkgfHwgZm9ybS5yZW1vdmUgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb3MuaHRtbCcsXG4gICAgICBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpbyByYWRpby1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpby1ibG9jay1pY29uXCIgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0uaWNvbkNsYXNzfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9idXR0b25zLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NoZW1hLWZvcm0tcmFkaW9idXR0b25zIGNuLXJhZGlvYnV0dG9ucyB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi17e2l0ZW0udmFsdWV9fSB7e2Zvcm0uYnRuQ2xhc3N9fSB7e2l0ZW0udmFsdWUgPT09ICQkdmFsdWUkJCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fSBoaWRlXCJcbiAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0udmFsdWV9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1wZXJjZW50YWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLXBlcmNlbnRhZ2UtZm9ybWF0XG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPiU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGlzcGxheS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWRpc3BsYXl7e2Zvcm0uaHRtbENsYXNzfX1cIj5cbiAgICAgICAgPGlucHV0IG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgIHZhbHVlPVwie3tmb3JtLmdldERpc3BsYXkoZm9ybS5rZXksIGZvcm0uYXJyYXlJbmRleCl9fVwiPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmllbGRzZXQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZmllbGRzZXQgXG4gICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J2JvcmRlcmxlc3MnOiBmb3JtLnBvcyA9PT0gMH1cIj5cbiAgICAgICAgPGxlZ2VuZCBuZy1jbGljaz1cImZvcm0udG9nZ2xlQ29sbGFwc2UoZm9ybSlcIlxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwieydzci1vbmx5JzogIXNob3dUaXRsZSgpLCBjb2xsYXBzaWJsZTogZm9ybS5jb2xsYXBzaWJsZX1cIlxuICAgICAgICAgICAgICAgIG5nLW1vdXNlZW50ZXI9XCJmb3JtLnJlbmRlciA9IHRydWVcIj5cbiAgICAgICAgICA8aSBuZy1zaG93PVwiZm9ybS5jb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYXJldC17e2Zvcm0uY29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdkb3duJ319XCI+PC9pPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgbmctc2hvdz1cImZvcm0uZGVzY3JpcHRpb25cIiBuZy1iaW5kLWh0bWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgdWliLWNvbGxhcHNlPVwiZm9ybS5jb2xsYXBzZWRcIj5cbiAgICAgICAgICA8ZGl2IG5nLWlmPVwiZm9ybS5yZW5kZXJcIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1tZWRpYXVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG1lZGlhLXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBkaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jcmVhdGl2ZWltYWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tY3JlYXRpdmUtaW1hZ2UgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbmctbW9kZWwta2V5PVwiZm9ybS5uZ01vZGVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1jcmVhdGl2ZS1pbWFnZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jcmVhdGl2ZWltYWdlJzogJ3Byb2Nlc3NDcmVhdGl2ZUltYWdlJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknXG59O1xuXG4vLyBoYW5kbGVycyB0aGF0IGRvbid0IHJ1biBvbiBzZWNvbmRQYXNzIGFyZSBvbmVzIHRoYXQgc2hvdWxkbid0IGV2ZXIgY2hhbmdlXG4vLyBhbmQgd2Ugd2FudCB0byBhdm9pZCBjb21wb3VuZGluZyB0aGVpciBlZmZlY3RzXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzZWxlY3REaXNwbGF5JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IFxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJmZpZWxkLndhdGNoICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiYgc2VydmljZS5wcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hKGZpZWxkKVxufV07XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIoc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENORmxleEZvcm1TZXJ2aWNlKFxuICBBcGksXG4gICRwYXJzZSxcbiAgY25GbGV4Rm9ybUNvbmZpZyxcbiAgY25GbGV4Rm9ybVR5cGVzLFxuICBzZlBhdGgsXG4gICRpbnRlcnBvbGF0ZSxcbiAgJHRpbWVvdXQsXG4gIGNuVXRpbCxcbiAgJHN0YXRlUGFyYW1zXG4pIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtdO1xuICBjb25zdCBwcm90b3R5cGUgPSB7XG4gICAgY29tcGlsZSxcbiAgICBhZGRBcnJheUNvcHksXG4gICAgYWRkVG9EYXRhQ2FjaGUsXG4gICAgYWRkVG9Gb3JtQ2FjaGUsXG4gICAgYWRkVG9TY29wZUNhY2hlLFxuICAgIGJyb2FkY2FzdEVycm9ycyxcbiAgICBidWlsZEVycm9yLFxuICAgIGNsZWFudXAsXG4gICAgZGVsZXRlQXJyYXlDb3BpZXNGb3IsXG4gICAgZGVyZWdpc3RlckhhbmRsZXJzLFxuICAgIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIGdldEFycmF5Q29weSxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXREZWZhdWx0LFxuICAgIGdldEZyb21EYXRhQ2FjaGUsXG4gICAgZ2V0RnJvbUZvcm1DYWNoZSxcbiAgICBnZXRGcm9tU2NvcGVDYWNoZSxcbiAgICBnZXRGb3Jtc1RvUHJvY2VzcyxcbiAgICBnZXRLZXksXG4gICAgZ2V0U2NoZW1hLFxuICAgIGdldFdhdGNoYWJsZXMsXG4gICAgaGFuZGxlUmVzb2x2ZSxcbiAgICBpbmNyZW1lbnRVcGRhdGVzLFxuICAgIGluaXRBcnJheUNvcHlXYXRjaCxcbiAgICBpbml0TW9kZWxXYXRjaCxcbiAgICBpbml0U2NoZW1hUGFyYW1zLFxuICAgIGlzQ29tcGlsZWQsXG4gICAgb25Nb2RlbFdhdGNoLFxuICAgIHBhcnNlQWxsLFxuICAgIHBhcnNlQW55LFxuICAgIHBhcnNlQ29uZGl0aW9uLFxuICAgIHBhcnNlRXhwcmVzc2lvbixcbiAgICBwcm9jZXNzQXJyYXksXG4gICAgcHJvY2Vzc0NyZWF0aXZlSW1hZ2UsXG4gICAgcHJvY2Vzc0RlZmF1bHQsXG4gICAgcHJvY2Vzc0Rpc3BsYXksXG4gICAgcHJvY2Vzc0ZpZWxkLFxuICAgIHByb2Nlc3NGaWVsZHNldCxcbiAgICBwcm9jZXNzRmllbGRQcm9wcyxcbiAgICBwcm9jZXNzRmllbGRUeXBlLFxuICAgIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTZXJ2aWNlKGZuKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoZm4pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgIF8uZW1wdHkoc2VydmljZSk7XG4gICAgICBfLnJlbW92ZShzZXJ2aWNlcywgKHMpID0+IHMgPT09IHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyA/IGNvbmZpZy5nZXRQYXJhbXMoKSA6IHt9O1xuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UsIGRlc3Ryb3lTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICAgIHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMgPSBjb25maWcuZ2V0UGFybXMgfHwgXy5ub29wO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmllbGQuY29uZGl0aW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSByZXBsYWNlQXJyYXlJbmRleChmaWVsZC5jb25kaXRpb24sIGZpZWxkLmFycmF5SW5kZXggfHwga2V5KTtcbiAgICAgIGlmKCFzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcblxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQW55KGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5maW5kKGVpdGhlcnMsIHggPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQWxsKGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5yZWR1Y2UoYWxsLCAoYWNjLCB4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBhY2MucHVzaCh2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBhbGwubGVuZ3RoID09PSBtYXRjaC5sZW5ndGggPyBfLmxhc3QobWF0Y2gpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gZXhwLmluY2x1ZGVzKCcgfHwgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFueShleHApIDogZXhwLmluY2x1ZGVzKCcgJiYgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFsbChleHApIDogc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuICAgIGNvbnN0IHZhbDEgPSBmaWVsZFByb3AgPT09ICdjb25kaXRpb24nID8gdmFsICsgJycgOiB2YWw7XG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGRQcm9wLCBmaWVsZCkuc2V0KHZhbDEpO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjtcbiAgICAgICAgaWYoXy5pc1N0cmluZyhmaWVsZC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbiBpc24ndCBhbHJlYWR5IHdyYXBwZWQgaW4gcGFyZW5zLCB3cmFwIGl0XG4gICAgICAgICAgY29uZGl0aW9uID0gL15cXCguKlxcKSQvLnRlc3QoZmllbGQuY29uZGl0aW9uKSA/XG4gICAgICAgICAgICBmaWVsZC5jb25kaXRpb24gOlxuICAgICAgICAgICAgYCgke2ZpZWxkLmNvbmRpdGlvbn0pYDtcbiAgICAgICAgfVxuICAgICAgICBpZihfLmlzU3RyaW5nKHdhdGNoLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb24gP1xuICAgICAgICAgICAgYCR7Y29uZGl0aW9ufSAmJiAke3dhdGNoLmNvbmRpdGlvbn1gIDpcbiAgICAgICAgICAgIHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSAoZGF5c3xob3VycykvKTtcblxuICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0ge1xuICAgICAgICAgICAgICB2YWw6IGFkanVzdG1lbnQuZGF0ZVsxXSxcbiAgICAgICAgICAgICAgdW5pdHM6IGFkanVzdG1lbnQuZGF0ZVsyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLnZhbCwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgaWYoXy5pc1N0cmluZyhjdXJDb25kaXRpb24pICYmIGN1ckNvbmRpdGlvbi5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYGFycmF5SW5kZXggY291bGQgbm90IGJlIHJlcGFsY2VkIGZyb20gZXhwcmVzc2lvbiAnJHtjdXJDb25kaXRpb259J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKGFkanVzdG1lbnQuZGF0ZS52YWwsIGFkanVzdG1lbnQuZGF0ZS51bml0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gX1thZGp1c3RtZW50Lm9wZXJhdG9yXShmcm9tLmdldCgpLCBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBldmFsKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJHBhcnNlKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKSgpO1xuICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYSB8fCBmaWVsZC5pdGVtcyAmJiAoZmllbGQuaXRlbXNbMF0uc2NoZW1hIHx8IChmaWVsZC5pdGVtc1swXS5pdGVtcyAmJiBmaWVsZC5pdGVtc1swXS5pdGVtc1swXS5zY2hlbWEpKTtcbiAgICAgICAgICAgICAgICBpZihmaWVsZC50eXBlID09PSAnY24tY3VycmVuY3knKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcCA9IHNjaGVtYSAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY3VycmVuY3ktZG9sbGFycycgPyAyIDogMDtcblxuICAgICAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5mbG9vcihyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmNlaWwocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLnJvdW5kKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5saXN0ZW5lcnNbdXBkYXRlLnBhdGgoKS5rZXldLnByZXYgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdLnRyaWdnZXIgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQocmVzdWx0IHx8IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQoZnJvbS5nZXQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSwgd2F0Y2guaW5pdGlhbGl6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBsZXQgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgLy8gYnkgdGhpcyBwb2ludCBkZWZhdWx0cyBzaG91bGQgYmUgcHJvY2Vzc2VkIHNvIHdlIGNhbiBnZXQgdmFsdWUgZGlyZWN0bHkgZnJvbSBtb2RlbFxuICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1clZhbCkpIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyVmFsO1xuICAgIH1cbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIGlmIGZpZWxkIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGtleVxuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSAmJiAhXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGlmKCFrZXkua2V5ICYmIGtleS5pdGVtcykge1xuICAgICAgICBfLmVhY2goa2V5Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGtleSA9IGtleS5rZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyguKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0sIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1ciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IF8uZ2V0KHNlcnZpY2UuZ2V0U2NoZW1hKGtleSksICdkZWZhdWx0Jyk7XG5cbiAgICBpZighc2VydmljZS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdmFyIHByZXYgPSBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgICAvL2lmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSBzZXJ2aWNlLnNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHNlcnZpY2UubW9kZWwsXG4gICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZihfLmlzRnVuY3Rpb24oc2VydmljZS5yZWZyZXNoU2NoZW1hKSkge1xuICAgICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAvLyBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgLy8gICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVTY29wZScsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgc2VydmljZS5kZWxldGVBcnJheUNvcGllc0ZvcihrZXksIGluZGV4KTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHNlcnZpY2UuZGVsZXRlQXJyYXlDb3BpZXNGb3Ioc2NvcGUuZm9ybS5saW5rLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUFycmF5Q29waWVzRm9yKGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKGtleSk7XG4gICAgXy5lYWNoKGNvcGllcywgbGlzdCA9PiBsaXN0ICYmIGxpc3Quc3BsaWNlKGluZGV4LCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoIV8uaXNTdHJpbmcoZXhwKSAmJiAhXy5pc0FycmF5KGV4cCkpIHtcbiAgICAgIHJldHVybiB7IGdldDogKCkgPT4gZXhwIH07XG4gICAgfVxuXG4gICAgLy8gaWYgZXhwcmVzc2lvbiBpcyBzcGVjaWZpYyB2YWx1ZVxuICAgIGlmKC9eKG51bGx8ZmFsc2V8dHJ1ZXx1bmRlZmluZWR8J1teXFwnXSonfFwiW15cXFwiXSpcInwtP1swLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBjb25zdCBpc1N0ciA9IGV4cC5tYXRjaCgvXCIoW15cXFwiXSopXCIvKSB8fCBleHAubWF0Y2goLycoW15cXCddKiknLyk7XG4gICAgICAgICAgaWYoaXNTdHIpIHJldHVybiBpc1N0clsxXTtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbiB9ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZihub0NvbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbjogdHJ1ZSB9KSB8fCB7fTtcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5kZWZhdWx0c1tyZXNvbHZlZC5yZXBsYWNlKCdtb2RlbC4nLCAnJyldO1xuICAgICAgICAgIGlmKG9iaikge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKCk7XG4gICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNpbGVuY2VMaXN0ZW5lcnMocmVzb2x2ZWQsIGRlcHRoKTtcbiAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0cyhyZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG5cbiAgICAgIHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiBleHAsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGtleTogbWF0Y2hbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBzaWxlbmNlTGlzdGVuZXJzKGtleVN0YXJ0LCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgIGlmKGtleS5pbmRleE9mKGtleVN0YXJ0KSA9PT0gMCkge1xuICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgZGVwdGgpLmdldCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBEZWZhdWx0cyhrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGluZGV4ID0ga2V5U3RhcnQubWF0Y2goL1xcW1xcZCpcXF0vKSA/IGdldEFycmF5SW5kZXgoa2V5U3RhcnQpIDogbnVsbDtcbiAgICBjb25zdCBrcyA9IHN0cmlwSW5kZXhlcyhrZXlTdGFydCk7XG4gICAgY29uc3Qga2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa3MpKTtcbiAgICBsZXQgc2tpcEtleXMgPSBbXTtcbiAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGluZGV4KTsgXG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYgKF8uaXNBcnJheShtb2RlbCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRLZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrZXkpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIF8uZWFjaChjaGlsZEtleXMsIChrKSA9PiB7XG4gICAgICAgICAgICBza2lwS2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhlZENoaWxkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGssIFtpbmRleCwgaV0pO1xuICAgICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkQ2hpbGRLZXldID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghc2tpcEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRLZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCxcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjtcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlcmNlbnRhZ2UoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXBlcmNlbnRhZ2UnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDcmVhdGl2ZUltYWdlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3JlYXRpdmVpbWFnZSc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHNjaGVtYSA9IHNlbGVjdC5zY2hlbWE7XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlIHx8IHNlbGVjdC50aXRsZU1hcCkge1xuICAgICAgc2VsZWN0LmdldFRpdGxlTWFwID0gKCkgPT5cbiAgICAgICAgc2VsZWN0LnRpdGxlTWFwIHx8IHNlcnZpY2Uuc2NoZW1hLmRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV07XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zO1xuICAgICAgY29uc3QgcGFyYW1zS2V5cyA9IF8ua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICBzZWxlY3Quc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJDYWNoZSA9ICEhc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnJlZnJlc2hEYXRhO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSAocSwgeyByZWZyZXNoRGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9XG4gICAgICAgICAgXyhwYXJhbXNLZXlzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncScpIHtcbiAgICAgICAgICAgICAgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3JlZnJlc2hEYXRhJykge1xuICAgICAgICAgICAgICBpZiAocmVmcmVzaERhdGEpIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24ocXVlcnlQYXJhbXNba2V5XSkuZ2V0KCk7XG4gICAgICAgICAgICAgIGFjY1trZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZighXy5pc051bWJlcihzZWxlY3QubWluTG9va3VwKSkgc2VsZWN0Lm1pbkxvb2t1cCA9IHBhcmFtc0tleXMubGVuZ3RoID8gMyA6IDA7XG4gICAgICBpZighXy5oYXMoc2VsZWN0LCAnc2tpcEZpbHRlcmluZycpKSBzZWxlY3Quc2tpcEZpbHRlcmluZyA9ICEhc2VsZWN0Lm1pbkxvb2t1cDtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKCFfLmlzTnVtYmVyKHNlbGVjdC5taW5Mb29rdXApKSBzZWxlY3QubWluTG9va3VwID0gMDtcblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VsZWN0Lml0ZW1zLCAoaSkgPT4gaS5kZXN0cm95U3RyYXRlZ3kgPSBcInJldGFpblwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgICBzZWxlY3QuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7XG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KTtcbiAgICBjb25zdCBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKTtcblxuICAgIHJldHVybiBzY2hlbWEgJiYgc2NoZW1hLnR5cGUgPT09ICdhcnJheScgP1xuICAgICAgc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkgOlxuICAgICAgc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBiYW5kLWFpZCBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgc2V0IGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFycmF5IHNvbXdoZXJlXG4gICAgLy8gZGVlcCBpbiB0aGUgYW5ndWxhciBvciBhbmd1bGFyLXNjaGVtYS1mb3JtIG5ldGhlci1yZWdpb25zXG4gICAgY29uc3QgbGlua01vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5saW5rLCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZighbGlua01vZGVsLmdldCgpKSBsaW5rTW9kZWwuc2V0KFtdKTtcblxuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBpdGVtID0+IHtcbiAgICAgIGlmKGl0ZW0uc2VsZWN0RmllbGQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgY29uc3Qga2V5ID0gXy5pc0FycmF5KGl0ZW0ua2V5KSA/IGl0ZW0ua2V5IDogT2JqZWN0UGF0aC5wYXJzZShpdGVtLmtleSk7XG4gICAgICBjb25zdCBmZWF0dXJlS2V5ID0gXy5sYXN0KGtleSk7XG5cbiAgICAgIGl0ZW0uc2hvd0ZlYXR1cmUgPSBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID1cbiAgICAgICAgICAgICAgc2VydmljZVxuICAgICAgICAgICAgICAucGFyc2VFeHByZXNzaW9uKGBtb2RlbC4ke3NlbGVjdERpc3BsYXkubGlua31bJHtpbmRleH1dLmZlYXR1cmVzYClcbiAgICAgICAgICAgICAgLmdldCgpO1xuICAgICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgICAgICAgZmVhdHVyZXMgJiZcbiAgICAgICAgICAgICAgZmVhdHVyZXNcbiAgICAgICAgICAgICAgLmluY2x1ZGVzKGZlYXR1cmVLZXkpO1xuICAgICAgICByZXR1cm4gc2hvdztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGBmb3JtLnNob3dGZWF0dXJlKGFycmF5SW5kZXgpYDtcbiAgICAgIGl0ZW0uY29uZGl0aW9uID0gaXRlbS5jb25kaXRpb24gP1xuICAgICAgICBgKCR7aXRlbS5jb25kaXRpb259KSAmJiAke2NvbmRpdGlvbn1gIDogY29uZGl0aW9uO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBpZihrZXkgPT09IHNlbGVjdEtleSkgcmV0dXJuO1xuICAgICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICAgIHZhciBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaSk7XG4gICAgICAgIHZhciBzcGxpdEluZGV4ZWRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGluZGV4ZWRLZXkpO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgXy5lYWNoKGVsZW0sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RGaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgaXRlbSA9PiB7XG4gICAgICBpZihpdGVtLnNlbGVjdEZpZWxkID09PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGtleSA9IF8uaXNBcnJheShpdGVtLmtleSkgPyBpdGVtLmtleSA6IE9iamVjdFBhdGgucGFyc2UoaXRlbS5rZXkpO1xuICAgICAgY29uc3QgZmVhdHVyZUtleSA9IF8ubGFzdChrZXkpO1xuXG4gICAgICBpdGVtLnNob3dGZWF0dXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgICAgICAgIHNlcnZpY2VcbiAgICAgICAgICAgICAgLnBhcnNlRXhwcmVzc2lvbihgbW9kZWwuJHtzZWxlY3RGaWVsZEtleX1gKVxuICAgICAgICAgICAgICAuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICAgICAgICBmZWF0dXJlcyAmJlxuICAgICAgICAgICAgICBmZWF0dXJlc1xuICAgICAgICAgICAgICAuaW5jbHVkZXMoZmVhdHVyZUtleSk7XG4gICAgICAgIHJldHVybiBzaG93O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY29uZGl0aW9uID0gYGZvcm0uc2hvd0ZlYXR1cmUoKWA7XG4gICAgICBpdGVtLmNvbmRpdGlvbiA9IGl0ZW0uY29uZGl0aW9uID9cbiAgICAgICAgYCgke2l0ZW0uY29uZGl0aW9ufSkgJiYgJHtjb25kaXRpb259YCA6IGNvbmRpdGlvbjtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiB0aGUgZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgaWYoZGVmYXVsdHMgJiYgIW1vZGVsLmdldCgpKSB7XG4gICAgICBtb2RlbC5zZXQoZGVmYXVsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgc2VydmljZS5yZWZyZXNoU2NoZW1hID0gXy5kZWJvdW5jZSh1cGRhdGVTY2hlbWEgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAuLi5jbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMoKSksXG4gICAgICAgIC4uLnNlcnZpY2UucGFyYW1zXG4gICAgICB9O1xuICAgICAgbGV0IGRpZmYgPSBfLm9taXQoY25VdGlsLmRpZmYoc2VydmljZS5zY2hlbWEucGFyYW1zLCBwYXJhbXMsIHRydWUsICdkZWxldGUnKSwgJ3VwZGF0ZXMnKTtcbiAgICAgIGxldCBrZXlzO1xuXG4gICAgICBpZighXy5pc0VtcHR5KGRpZmYpIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgWyd1cGRhdGVTY2hlbWEnLCAndXBkYXRlcyddKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgICAgLy9zZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgcmVnaXN0ZXIuZXhwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLnNjaGVtYSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOnNjaGVtYScsIHNjaGVtYS5kaWZmLnNjaGVtYSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5zY2hlbWEsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgICBjb25zdCBjdXJLZXlzID0gXy5maWx0ZXIoa2V5cywgayA9PiBrLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgIF8uZWFjaChjdXJLZXlzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybXMgPSBfLmNvbXBhY3QoW1xuICAgICAgICAgICAgICBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSxcbiAgICAgICAgICAgICAgLi4uKHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KSB8fCBbXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBfLmVhY2goZm9ybXMsIGZvcm0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2U2NoZW1hID0gZm9ybS5zY2hlbWE7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSAgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXksIHsgW3NjaGVtYS5rZXldOiBzY2hlbWEgfSk7XG4gICAgICAgICAgICAgIGlmKHByZXZTY2hlbWEucmVhZG9ubHkgJiYgIW5ld1NjaGVtYS5yZWFkb25seSkgZm9ybS5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCAoZm9ybSwga2V5KSA9PiB7XG5cbiAgICAgICAgICBpZigha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjb3B5LCBmb3JtKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS51cGRhdGVTY2hlbWEoc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGb3Jtc1RvUHJvY2VzcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBbICwgYXJyYXlJbmRleCBdID0ga2V5Lm1hdGNoKC9cXFsoXFxkKStdLykgfHwgW107XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJykpO1xuICAgIGlmKF8uaXNVbmRlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgIGNvbnN0IGNhY2hlZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpO1xuICAgICAgcmV0dXJuIFsgY2FjaGVkLCAuLi5jb3BpZXMgXTtcbiAgICB9XG4gICAgcmV0dXJuIFsgY29waWVzW2FycmF5SW5kZXhdIF07XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NGaWVsZChjdXJyZW50LCB1cGRhdGUsIGlzQ2hpbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShjdXJyZW50LmtleSk7XG5cbiAgICAvLyBvdGhlciBsb2dpYyBpbiB0aGUgc2VydmljZSB3aWxsIGFkZCBjb25pdGlvbiA9ICd0cnVlJyB0byBmb3JjZVxuICAgIC8vIGNvbmRpdGlvbiB0byBldmFsIHRydWUsIHNvIHdlIHNldCB0aGUgdXBkYXRlIGNvbmRpdGlvbiB0byAndHJ1ZSdcbiAgICAvLyBiZWZvcmUgY29tcGFyaW5nXG4gICAgaWYoIXVwZGF0ZS5jb25kaXRpb24gJiYgY3VycmVudC5jb25kaXRpb24pIHVwZGF0ZS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgbGV0IHJlZHJhdyA9ICFpc0NoaWxkICYmIGN1cnJlbnQuY29uZGl0aW9uICE9PSB1cGRhdGUuY29uZGl0aW9uO1xuXG4gICAgXy5leHRlbmQoY3VycmVudCwgXy5vbWl0KHVwZGF0ZSwgJ2l0ZW1zJywgJ2tleScpKTtcblxuICAgIGN1cnJlbnQuX29nS2V5cy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZighdXBkYXRlW3Byb3BdKSB7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50W3Byb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGN1cnJlbnQuX29nS2V5cyA9IGdldE9nS2V5cyh1cGRhdGUpO1xuXG4gICAgLy9zZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuXG4gICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCBrZXkpO1xuXG4gICAgLy8gd2h5IGRvIHdlIHJlZHJhdz8gSWYgd2UncmUgZG9pbmcgaXQgdG8gc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgLy8gdGhhdCBoYXMgYmVlbiBhZGRyZXNzZWQgZnJvbSB0aGUgYW5ndWxhci1zY2hlbWEtZm9ybSBsaWJyYXJ5XG4gICAgLy8gaWYgdGhlcmUncyBhbm90aGVyIGlzc3VlLCB0cnkgdHJpZ2dlcmluZyB0aGUgc3BlY2lmaWMgYWN0aW9uIHJlcXVpcmVkXG4gICAgLy8gaW5zdGVhZCBvZiByZWRyYXdpbmcgdGhlIHdob2xlIGZvcm1cbiAgICBpZihyZWRyYXcgJiYgY3VycmVudC5yZWRyYXcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUT0RPOiBzZWUgaWYgdGhpcyBjYW4gYmUgcmVtb3ZlZCcpO1xuICAgICAgY3VycmVudC5yZWRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBpZihzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHNjaGVtYS5pdGVtcyAmJiBzY2hlbWEuaXRlbXMucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnW10uJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb3RLZXkoa2V5KSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGtleSkgPyBPYmplY3RQYXRoLnBhcnNlKGtleSkgOiBrZXkpLmpvaW4oJy4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoZmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBnZXREb3RLZXkoZmllbGQua2V5KSxcbiAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEVycm9ycygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoXy5nZXQoc2VydmljZSwgJ2Vycm9ycycpKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQXJyYXlJbmRleChyZXNvbHZlLCBrZXkpIHtcbiAgICB3aGlsZShyZXNvbHZlLmluY2x1ZGVzKCdhcnJheUluZGV4JykpIHtcbiAgICAgIGlmKF8uaXNOdW1iZXIoa2V5KSkgcmV0dXJuIHJlc29sdmUucmVwbGFjZSgvYXJyYXlJbmRleC9nLCBrZXkpO1xuICAgICAgY29uc3QgYXJyYXlJbmRleEtleSA9IC8oW14uW10qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVsxXSArICdcXFxcWygtP1xcXFxkKylcXFxcXScpO1xuICAgICAgY29uc3QgaW5kZXggPSByZS5leGVjKGtleSk7XG4gICAgICBpZighaW5kZXgpIHJldHVybiByZXNvbHZlO1xuICAgICAgcmVzb2x2ZSA9IHJlc29sdmUucmVwbGFjZShuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMF0ucmVwbGFjZSgvKFxcW3xcXF0pL2csICdcXFxcJDEnKSwgJ2cnKSwgaW5kZXhbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5kZXgoa2V5KSB7XG4gICAgaWYoXy5pc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gXy5maW5kKGtleS5rZXksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gXy5pc051bWJlcihrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAvXFxbKFxcZCopXFxdLy5leGVjKGtleSlbMV07XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQga2V5Q29weTtcbiAgICBpZiAoIV8uaXNBcnJheShpbmRleCkpIHtcbiAgICAgIGluZGV4ID0gW2luZGV4XTtcbiAgICB9XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB3aGlsZSAoaW5kZXgubGVuZ3RoICYmIGtleUNvcHkuaW5kZXhPZignJykgPiAtMSkge1xuICAgICAgbGV0IGluZGV4T2ZJbmRleCA9IGtleUNvcHkuaW5kZXhPZignJyk7XG4gICAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleC5zaGlmdCgpO1xuICAgIH1cbiAgICBpZihhc0FycmF5KSB7XG4gICAgICByZXR1cm4ga2V5Q29weTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ2V0S2V5KGtleUNvcHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0cGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1vZGFsTWFwID0ge307XG5jb25zdCBwcm9taXNlTWFwID0ge307XG5cbmZ1bmN0aW9uIGdldFByb21pc2VzKHN0YXRlKSB7XG4gIGlmKHByb21pc2VNYXBbc3RhdGVdKSByZXR1cm4gcHJvbWlzZU1hcFtzdGF0ZV07XG5cbiAgY29uc3QgcHJvbWlzZSA9IHt9O1xuICBwcm9taXNlTWFwW3N0YXRlXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBnZXRQcm9taXNlcyhzdGF0ZSk7XG4gIGlmKHByb21pc2VzW2lkXSkgcmV0dXJuIHByb21pc2VzW2lkXTtcblxuICBjb25zdCBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgcHJvbWlzZXNbaWRdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcigpIHtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hcHBpbmcsXG4gICAgJGdldDogY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZE1hcHBpbmcoc3RhdGUsIGRlZikge1xuICAgIGRlZi5yZXNvbHZlID0geyBwYXJlbnQgfTtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBkZWY7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnQoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nLFxuICAgIHJlbW92ZU1hcHBpbmdcbiAgfTtcblxuICAvLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU1hcHBpbmcoc3RhdGUsIGlkLCBwYXJlbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgc2NvcGUgfSA9IG9wdGlvbnM7XG4gICAgaWYoc2NvcGUpIHtcbiAgICAgIHNjb3BlLm9wdGlvbnMgPSBzY29wZS5vcHRpb25zIHx8IHt9O1xuICAgICAgc2NvcGUub3B0aW9ucy5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIG1vZGFsTWFwW3N0YXRlXS5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBjb25zdCBkID0gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKTtcbiAgICBkLnJlc29sdmUoeyBwYXJlbnQsIG9wdGlvbnMgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcHBpbmcoc3RhdGUpIHtcbiAgICBjb25zdCBkID0gJHEuZGVmZXIoKTtcbiAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGQucmVzb2x2ZSh7IHN0YXRlOiBtb2RhbE1hcFtzdGF0ZV0sIG9wdGlvbnMgfSk7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgLy8gSG9sZGluZyBvbiB0byBzY29wZSByZWZlcmVuY2VzIGNyZWF0ZXMgbWVtb3J5IGxlYWtzXG4gIGZ1bmN0aW9uIHJlbW92ZU1hcHBpbmcoc3RhdGUpIHtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBudWxsO1xuICAgIHByb21pc2VNYXBbc3RhdGVdID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gRmxleEZvcm1Nb2RhbExvYWRlcihGbGV4Rm9ybU1vZGFsLCAkc3RhdGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gRkZNb2RhbExvYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IEZGTW9kYWxMb2FkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgLy8gdW5iaW5kIGV2ZW50XG4gICAgdm0uZGlzbWlzc0V2ZW50KCk7XG4gICAgdm0ubW9kYWwub3BlbmVkLnRoZW4oKCkgPT5cbiAgICAgICAgdm0ubW9kYWwuZGlzbWlzcygpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgICAgICAgLmdldE1hcHBpbmcoJHN0YXRlUGFyYW1zLm1vZGFsKVxuICAgICAgICAudGhlbigoeyBzdGF0ZSwgb3B0aW9ucyB9KSA9PiAoe1xuICAgICAgICAgIG1vZGFsOiAkdWliTW9kYWwub3BlbihzdGF0ZSksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDwhLS0gd2UgcHJvY2VzcyBkZWZhdWx0cyBvdXJzZWx2ZXMsIGhlbmNlIHNldFNjaGVtYURlZmF1bHRzOiBmYWxzZSAtLT5cbiAgICAgICAgPG5nLWZvcm1cbiAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCJcbiAgICAgICAgICBuYW1lPVwie3t2bS5mb3JtTmFtZX19XCJcbiAgICAgICAgICBzZi1vcHRpb25zPVwieyBzZXRTY2hlbWFEZWZhdWx0czogZmFsc2UgfVwiXG4gICAgICAgICAgc2Ytc2NoZW1hPVwidm0uY29uZmlnLnNjaGVtYS5zY2hlbWFcIlxuICAgICAgICAgIHNmLWZvcm09XCJ2bS5mb3JtXCJcbiAgICAgICAgICBzZi1tb2RlbD1cInZtLm1vZGVsXCI+XG4gICAgICAgIDwvbmctZm9ybT5cbiAgICAgICAgPCEtLSBkZWJ1ZyBwYW5lbCB0byBkaXNwbGF5IG1vZGVsIC0tPlxuICAgICAgICA8c2VjdGlvbiBuZy1pZj1cInZtLmRlYnVnXCI+XG4gICAgICAgICAgPGpzb24tZXhwbG9yZXIganNvbi1kYXRhPVwidm0ubW9kZWwgfHwgJy4uLm1vZGVsIG5vdCBsb2FkZWQgeWV0J1wiLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmQ29uZmlnJyxcbiAgICAgIG1vZGVsOiAnPWZmTW9kZWwnLFxuICAgICAgZm9ybUluZGV4OiAnPWZmRm9ybUluZGV4JyxcbiAgICAgIGZvcm1OYW1lOiAnPWZmRm9ybU5hbWUnLFxuICAgICAgZGVsYXlGb3JtOiAnPWZmRGVsYXlGb3JtJyxcbiAgICAgIGNsZWFudXBFdmVudDogJz1mZkNsZWFudXBFdmVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtKGNuRmxleEZvcm1TZXJ2aWNlLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgY25GbGV4Rm9ybVRhZygpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKCgpID0+IHZtLmNvbmZpZy5zY2hlbWEsIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBnZXRTY29wZTogdm0uY29uZmlnLmdldFNjb3BlIHx8ICgoKSA9PiAkc2NvcGUpLFxuICAgICAgICAgIGZvcm1DdHJsOiB2bS5jb25maWcuZm9ybUN0cmwsXG4gICAgICAgICAgZ2V0U2NoZW1hOiB2bS5jb25maWcuZ2V0U2NoZW1hLFxuICAgICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZtLnNlcnZpY2UuY29tcGlsZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuXG4gICAgY25GbGV4Rm9ybVNlcnZpY2UuZGVzdHJveVNlcnZpY2Uodm0uc2VydmljZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUhlYWRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZIZWFkZXJDb25maWcnLFxuICAgICAgc3VibWl0OiAnJmZmU3VibWl0JyxcbiAgICAgIGxvYWRPZmZzY3JlZW46ICcmZmZMb2FkT2Zmc2NyZWVuJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm1IZWFkZXIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUubGVhZFwiPnt7Ojp2bS50aXRsZS5sZWFkfX08L2g1PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxpIG5nLXNob3c9XCJ2bS50aXRsZS5pY29uXCIgY2xhc3M9XCJ7e3ZtLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0udGl0bGUubWFpbn19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5zdWJcIj57ezo6dm0udGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uYnV0dG9uQ29udGFpbmVyQ2xhc3MgfHwgJ3BhZ2UtYWN0aW9uLWJ0bnMnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctbW91c2VvdmVyPVwidm0ubG9hZE9mZnNjcmVlbigpXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5yZXR1cm5TdHlsZSA/IHZtLnJldHVyblN0eWxlIDogJ2RlZmF1bHQtZGFyaydcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5yZXR1cm5TdGF0ZVwiXG4gICAgICAgICAgICAgICB1aS1zcmVmPVwie3t2bS5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0ucmV0dXJuVGV4dCB8fCAnQ2FuY2VsJ319XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5jbG9zZUJ1dHRvbi5zdHlsZSA/IHZtLmNsb3NlQnV0dG9uLnN0eWxlIDogJ2RlZmF1bHQtZGFyayd9fVwiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY2xvc2VCdXR0b24uaGFuZGxlcigpXCI+XG4gICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cImJ1dHRvbiBpbiB2bS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVwieydidG4tZ3JvdXAnOiBidXR0b24ub3B0aW9uc31cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctc2hvdz1cImJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1pZj1cImJ1dHRvbi5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwib3B0aW9uIGluIGJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogb3B0aW9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cIm9wdGlvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS11cGRhdGVkLWF0IHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgIGlkPVwiZGF0YS11cGRhdGVkLWF0XCJcbiAgICAgICAgICAgICBuZy1oaWRlPVwidm0uY29uZmlnLm5vRGF0YVwiPlxuICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS51cGRhdGVEYXRhKClcIj5VcGRhdGUgRGF0YTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm1IZWFkZXIoJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gZmZIZWFkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZIZWFkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIC8vYWN0aXZhdGUoKTtcbiAgLy8kc2NvcGUuJG9uKCckZGVzdHJveScsIGNsZWFudXApO1xuICAkc2NvcGUuJHdhdGNoKCd2bS5jb25maWcudGl0bGUnLCBpbml0VGl0bGUsIHRydWUpO1xuICAkc2NvcGUuJHdhdGNoKCd2bS5jb25maWcuYWN0aW9uQ29uZmlnJywgaW5pdEFjdGlvbkNvbmZpZywgdHJ1ZSk7XG5cbiAgLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBpbml0VGl0bGUoKSB7XG4gICAgKHsgdGl0bGU6IHZtLnRpdGxlIH0gPSB2bS5jb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFjdGlvbkNvbmZpZygpIHtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIC8vICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICAgIC8vIHRoaXMgY29tcG9uZW50IHdpbGwgb2Z0ZW4gYmUgc2libGluZ3MgdG8gdGhlIGZsZXggZm9ybXMgb25lLFxuICAgIC8vIHNvIG5lZWQgdG8gYnJvYWRjYXN0IGZyb20gc2hhcmVkIHBhcmVudC4uLnllcyBpdCdzIHVnbHlcbiAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRicm9hZGNhc3QoJ2ZmUmVmcmVzaERhdGEnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRGlzYWJsZWQoYnRuQ29uZmlnKSB7XG4gICAgaWYodm0uY29uZmlnLmlzRGlzYWJsZWQpIHJldHVybiB2bS5jb25maWcuaXNEaXNhYmxlZChidG5Db25maWcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgZnVuY3Rpb24gZmZWYWxpZGF0ZVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZlZhbGlkYXRlVGFnKCk7XG5cbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmZWYWxpZGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==