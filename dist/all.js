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
	
	  var sharedAutocompleteTpl = '\n        <tags-input\n          ng-show="form.key"\n          ng-model="$$value$$"\n          ng-model-options="form.ngModelOptions"\n          ng-disabled="form.readonly"\n          sf-changed="form"\n          schema-validate="form"\n          input-id="{{form.key.join(\'.\')}}"\n          display-property="{{form.displayProperty || \'name\'}}"\n          value-property="{{form.valueProperty}}"\n          placeholder="{{form.placeholder || \' \'}}"\n          clear-on-blur="true"\n          add-on-comma="false"\n          add-from-autocomplete-only="{{!form.allowNew}}"\n          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\n          on-init="form.onInit($tag, form, $event, $setter)"\n          model-type="{{form.getSchemaType()}}"\n          array-value-type="{{form.schema.items.type}}"\n          hide-tags="{{form.detailedList}}"\n          tags-style="{{form.selectionStyle}}"\n          required="{{form.required}}"\n          min-length="{{form.minLength}}"\n          allowed-tags-pattern=".*"\n          dropdown-icon="true"\n          item-formatter="form.itemFormatter"\n          min-tags="{{form.schema.minItems}}"\n          max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\n          allow-bulk="{{form.bulkAdd}}"\n          bulk-delimiter="{{form.bulkDelimiter}}"\n          bulk-placeholder="{{form.bulkPlaceholder}}"\n          show-clear-all="{{form.showClearAll}}"\n          show-button="true">\n          <auto-complete\n            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query)"\n            skip-filtering="{{form.titleQuery ? true : false}}"\n            min-length="{{form.minLookup || (form.titleQuery && 3 || 0)}}">\n          </auto-complete>\n        </tags-input>';
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <div sf-array="form">\n          <ol class="list-group cn-autocomplete-list"\n              ng-if="modelArray.length"\n              ng-model="modelArray">\n            <li class="list-group-item {{form.fieldHtmlClass}}"\n                ng-repeat="item in modelArray">\n              <button ng-hide="form.readonly || form.remove === null"\n                      ng-click="deleteFromArray($index)"\n                      type="button" class="close pull-right">\n                <span aria-hidden="true">&times;</span>\n              </button>\n              <sf-decorator form="copyWithIndex($index)"/>\n            </li>\n          </ol>\n        </div>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-creativeimage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <cn-creative-image ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-file-type="form.fileType"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      cn-existing-preview="form.existingPreview"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </cn-creative-image>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
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
	
	        if (!form.condition) form.condition = 'true';else if (form.condition.includes("arrayIndex")) {
	          form.condition = service.replaceArrayIndex(form.condition, key);
	        }
	
	        service.addArrayCopy(scope, genericKey, index);
	        scope.$emit('flexFormArrayCopyAdded', genericKey);
	      } else {
	        service.addToScopeCache(scope, key);
	      }
	    }));
	
	    service.events.push(service.scope.$on('schemaFormDeleteFormController', function (event, scope, index) {
	      var key = service.getKey(scope.form.key);
	      var listener = service.listeners[key];
	      if (listener) listener.handlers = [];
	
	      var unindexedKey = stripIndexes(key);
	
	      // TODO -- not sure if getArrayCopiesFor is actually necessary
	      // we should look into where this function might be needed and
	      // potentially remove it
	      var copies = service.getArrayCopiesFor(unindexedKey);
	      if (!copies.length) copies.push(service.getArrayScopes(unindexedKey) || []);
	
	      copies.forEach(function (list) {
	        return list && list.splice(scope.arrayIndex, 1);
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
	    var service = this,
	        schema = select.schema;
	
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
	      select.titleQuery = function (q) {
	        var params = _(paramsKeys).reduce(function (acc, key) {
	          if (key === 'q') {
	            acc[queryParams[key]] = q;
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
	
	      // wrap in string so returns truthy when compiled, but converted to number within directive
	      if (!paramsKeys.length) select.minLookup = '0';
	
	      select.onInit = function (val, form, event, setter) {
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
	    var service = this,
	        schema = service.getSchema(selectDisplay.key),
	        selectField = _.find(selectDisplay.items, 'selectField'),
	        handler;
	
	    if (schema && schema.type === 'array') {
	      handler = service.setupArraySelectDisplay(selectDisplay, selectField);
	    } else {
	      handler = service.setupSelectDisplay(selectDisplay, selectField);
	    }
	
	    selectDisplay.selectDisplay = false;
	    service.registerHandler(selectField.key, handler, selectField.updateSchema, true);
	    //service.processField(selectDisplay);
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
	    var once = service.scope.$on('flexFormArrayCopyAdded', function (event, key) {
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
	    var resetCount = service.scope.$on('flexForm.updatePage', function () {
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
	
	    var _ref19 = key.match(/\[(\d)+]/) || [],
	        _ref20 = _slicedToArray(_ref19, 2),
	        arrayIndex = _ref20[1];
	
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
	    $scope.$emit('ffRefreshData');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYjQwMzhiZmNlMjljYjI3ZTUyNSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbmNyZW1lbnRVcGRhdGVzIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQWxsIiwicGFyc2VBbnkiLCJwYXJzZUNvbmRpdGlvbiIsInBhcnNlRXhwcmVzc2lvbiIsInByb2Nlc3NBcnJheSIsInByb2Nlc3NDcmVhdGl2ZUltYWdlIiwicHJvY2Vzc0Rpc3BsYXkiLCJwcm9jZXNzRmllbGQiLCJwcm9jZXNzRmllbGRzZXQiLCJwcm9jZXNzRmllbGRQcm9wcyIsInByb2Nlc3NDb21wb25lbnQiLCJwcm9jZXNzQ3VycmVuY3kiLCJwcm9jZXNzUGVyY2VudGFnZSIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsImdldFBhcmFtcyIsInBhcmFtcyIsImV4dGVuZCIsInNjb3BlIiwiZ2V0U2NvcGUiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwidXBkYXRlU2NoZW1hIiwiZ2V0U2NoZW1hRm9ybSIsImdldFBhcmFtT3ZlcnJpZGVzIiwiZ2V0UGFybXMiLCJub29wIiwiZ2V0U2NoZW1hVHlwZSIsImlzQXJyYXkiLCJmaXJzdCIsImN1ckRlZmF1bHQiLCJrZXkiLCJhcnJheUluZGV4IiwibW9kZWxWYWx1ZSIsImdldCIsImhhcyIsImVxdWFscyIsImlzVHJ1bHlFbXB0eSIsInNldCIsImNvcHkiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiZ2V0T2dLZXlzIiwicmVqZWN0Iiwia2V5cyIsImlzRGVmaW5lZCIsIl9vZ0tleXMiLCJkZXNjcmlwdGlvbiIsInNob3dDbGVhckFsbCIsIiRicm9hZGNhc3QiLCJnZXREb3RLZXkiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsInJlZHVjZSIsInRvdGFsIiwibmV4dCIsImRlcHRoIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwic2hpZnQiLCJleHAiLCJ3YXRjaGFibGVzIiwibmVzdGVkIiwibWF0Y2hOZXN0ZWRFeHByZXNzaW9uIiwicmVwbGFjZVN0ciIsInJlcGxhY2UiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJ3YXRjaGFibGUiLCJtYXRjaCIsImJhc2UiLCJyZXN1bHQiLCJlaXRoZXJzIiwic3BsaXQiLCJ4IiwiYWxsIiwiYWNjIiwibGFzdCIsInVuZGVmaW5lZCIsInNraXBQcm9wSGFuZGxlcnMiLCJjdXJzb3IiLCJsb2FkTW9yZSIsInJlZnJlc2hTY2hlbWEiLCJ2YWwiLCJ2YWwxIiwiZmllbGRLZXkiLCJyZWdpc3RlciIsImNvbmRpdGlvbmFscyIsInByZXYiLCJtYXAiLCJwYXRoIiwicmVzb2x1dGlvbiIsImN1ciIsImFkanVzdG1lbnQiLCJkYXRlIiwidW5pdHMiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwiY29uc29sZSIsInVwZGF0ZVBhdGgiLCJmcm9tUGF0aCIsInVwZGF0ZSIsImZyb20iLCJtb21lbnQiLCJhZGQiLCJ0b0RhdGUiLCJwIiwiZmxvb3IiLCJjZWlsIiwicm91bmQiLCJpbml0aWFsaXplIiwic3RhcnRzV2l0aCIsImxpc3QiLCJwcmVkaWNhdGVQYXJhbXMiLCJwcmVkaWNhdGVCb2R5IiwiZ2VuZXJhdGVQcmVkaWNhdGUiLCJib2R5IiwiY3VyVmFsIiwicnVuSGFuZGxlciIsImlzT2JqZWN0IiwiYXJyTWF0Y2giLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVycyIsImFycktleSIsIm9uQXJyYXkiLCJyZW9yZGVyIiwibGFzdEtleSIsImFyclZhbCIsImxpc3RlbmVyS2V5IiwiaXRlbSIsIndhdGNoaW5nIiwibW9kZWxXYXRjaCIsIiR3YXRjaCIsImZpcnN0VXBkYXRlIiwiY2xlYW5Nb2RlbCIsInByZXZQYXJhbXMiLCJsaXN0ZW5lciIsImlzSW5pdEFycmF5IiwiaWQiLCJzdHJpcEluZGV4ZXMiLCIkb24iLCJldmVudCIsImNhY2hlS2V5IiwidW5pcXVlSWQiLCJpc051bWJlciIsImdlbmVyaWNLZXkiLCJpbmRleCIsIiRlbWl0IiwidW5pbmRleGVkS2V5IiwiY29waWVzIiwic3BsaWNlIiwibGluayIsInBsdWNrIiwia2V5U3RhcnQiLCJmaWx0ZXIiLCJ3YXJuIiwibWF0Y2hJbnRTdHJJbmRleCIsInRvUmVwbGFjZSIsInJlcGxhY2VkIiwicGFyc2VkIiwia2V5VmFsIiwiaXNTdHIiLCJwYXJzZUZsb2F0IiwicmVzb2x2ZWQiLCJzdGFydCIsImdldEFzc2lnbmFibGUiLCJub0NvbnN0cnVjdGlvbiIsInByb2dyZXNzIiwib2JqIiwiZnVsbFBhdGgiLCJjb25jYXQiLCJzbGljZSIsIm9wdGlvbnMiLCJzaWxlbnQiLCJpbmRleE9mIiwiZ2V0QXJyYXlJbmRleCIsImtzIiwiayIsInNraXBLZXlzIiwiaW5kZXhlZEtleSIsImNoaWxkS2V5cyIsImluZGV4ZWRDaGlsZEtleSIsImFycmF5Iiwic29ydE9wdGlvbnMiLCJlIiwidWkiLCJzZWN0aW9uIiwiY29tcG9uZW50IiwiY29scyIsImN1cnJlbmN5Rm9ybWF0IiwidmlldyIsInJhZGlvcyIsImZ1bGxXaWR0aCIsImJ0bkNsYXNzIiwiZGl2aWRlIiwibWF4VmlldyIsImljb25DbGFzcyIsIm1vZGVsRm9ybWF0dGVyIiwibSIsIm11bHRpcGx5IiwiaG91cnMiLCJtaW51dGVzIiwibW9kZWxQYXJzZXIiLCJkIiwicGFyc2VJbnQiLCJzdGFydE9mIiwidmlld0Zvcm1hdHRlciIsImRhdGVGb3JtYXQiLCJ2aWV3UGFyc2VyIiwiZ2V0U2VsZWN0VmFsUHJvcCIsInNlbGVjdCIsInZhbHVlUHJvcGVydHkiLCJnZXRBbGxvd2VkU2VsZWN0VmFsdWUiLCJnZXRUaXRsZU1hcCIsInZhbFByb3AiLCJtYXBWYWwiLCJvbkluaXQiLCJzZXR0ZXIiLCJuZXdWYWwiLCJxdWVyeVBhcmFtcyIsInBhcmFtc0tleXMiLCJ0aXRsZVF1ZXJ5IiwicSIsIm1pbkxvb2t1cCIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwic2VsZWN0S2V5Iiwic3BsaXRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0VmFsdWUiLCJmb3JtQ29waWVzIiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsInNlbGVjdE1vZGVsIiwiaXRlbVZhbHVlIiwiY291bnQiLCJrZXlNYXAiLCJvbmNlIiwicmVzZXRDb3VudCIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJpc051bGwiLCJ0aGVuIiwicmVmcmVzaERhdGEiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImN1cktleXMiLCJjb21wYWN0IiwicHJldlNjaGVtYSIsIm5ld1NjaGVtYSIsInJlYWRvbmx5IiwiY2FjaGVkIiwiY3VycmVudCIsImlzQ2hpbGQiLCJyZWRyYXciLCJsb2ciLCJzdWJLZXkiLCJqb2luIiwibWVzc2FnZSIsImFycmF5SW5kZXhLZXkiLCJleGVjIiwicmUiLCJSZWdFeHAiLCJhc0FycmF5Iiwia2V5Q29weSIsImNsb25lIiwiaW5kZXhPZkluZGV4IiwibW9kYWxNYXAiLCJwcm9taXNlTWFwIiwiZ2V0UHJvbWlzZXMiLCJwcm9taXNlIiwiZ2V0UHJvbWlzZSIsIiRxIiwicHJvbWlzZXMiLCJkZWZlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UiLCJkZWYiLCJwYXJlbnQiLCJtb2RhbCIsIm1vZGFsSWQiLCJnZXRNYXBwaW5nIiwicmVzb2x2ZU1hcHBpbmciLCJyZW1vdmVNYXBwaW5nIiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCIkcm9vdFNjb3BlIiwiJHNjb3BlIiwiRkZNb2RhbExvYWRlclRhZyIsIl9fdGFnIiwidm0iLCJhY3RpdmF0ZSIsIm9wZW4iLCJvbkRpc21pc3MiLCJvbkFmdGVyRGlzbWlzcyIsImZpbmFsbHkiLCJnb0JhY2siLCJjYXRjaCIsInJlc3RQYXJhbXMiLCJkaXNtaXNzRXZlbnQiLCJkaXNtaXNzTW9kYWwiLCJ0cmFuc2l0aW9uIiwiZ28iLCJvcGVuZWQiLCJkaXNtaXNzIiwiJHVpYk1vZGFsIiwiY25GbGV4Rm9ybSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJmb3JtSW5kZXgiLCJmb3JtTmFtZSIsImRlbGF5Rm9ybSIsImNsZWFudXBFdmVudCIsIkZsZXhGb3JtIiwiYmluZFRvQ29udHJvbGxlciIsImNuRmxleEZvcm1TZXJ2aWNlIiwiJGxvY2F0aW9uIiwiY25GbGV4Rm9ybVRhZyIsInByb2Nlc3MiLCJzaG93Rm9ybSIsInNlYXJjaCIsImNuRmxleEZvcm1IZWFkZXIiLCJzdWJtaXQiLCJsb2FkT2Zmc2NyZWVuIiwiRmxleEZvcm1IZWFkZXIiLCJmZkhlYWRlclRhZyIsInVwZGF0ZURhdGEiLCJpc0Rpc2FibGVkIiwiaW5pdFRpdGxlIiwiaW5pdEFjdGlvbkNvbmZpZyIsInRpdGxlIiwiYWN0aW9uQ29uZmlnIiwicmV0dXJuU3RhdGUiLCJyZXR1cm5TdHlsZSIsInJldHVyblRleHQiLCJjbG9zZUJ1dHRvbiIsImFjdGlvbnMiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBRWVBLFFBQ1pDLE1BRFksQ0FDTCxjQURLLEVBQ1csQ0FDdEIsV0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsNkJBSHNC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Y0FIUSxLQUd4QkE7S0FDWTNDLEdBQUc0QyxhQUpTLEtBSXhCQTtLQUNhNUMsR0FBRzZDLGNBTFEsS0FLeEJBO0tBQ1M3QyxHQUFHOEMsVUFOWSxLQU14QkE7OztHQUlKLFNBQVNWLGFBQWE7S0FDcEJ2QyxPQUFPbEssTUFBTTs7O0dBR2YsU0FBUzBNLFdBQVdVLFdBQVc7S0FDN0IsSUFBRy9DLEdBQUc1ZixPQUFPaWlCLFlBQVksT0FBT3JDLEdBQUc1ZixPQUFPaWlCLFdBQVdVO0tBQ3JELE9BQU87Ozs7QUE1Q1gsU0FBUSxVQWdET2hCLGlCOzs7Ozs7Ozs7OztBQzlHZixVQUFTaUIsVUFBVCxHQUFzQjtBQUNwQixVQUFPO0FBQ0wvQixlQUFVLEdBREw7QUFFTDVVLFlBQU8sRUFBRUcsTUFBTSxhQUFSLEVBRkY7QUFHTGxJLGNBQVMsU0FISjtBQUlMeVIsV0FBTUE7QUFKRCxJQUFQO0FBTUQ7O0FBRUQsVUFBU0EsSUFBVCxDQUFjOEosTUFBZCxFQUFzQjNELElBQXRCLEVBQTRCK0csS0FBNUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDLFlBQVNDLGFBQVQsR0FBeUIsQ0FBRTtBQUMzQnRELFVBQU9FLEtBQVAsR0FBZSxJQUFJb0QsYUFBSixFQUFmOztBQUVBLE9BQUd0RCxPQUFPclQsSUFBUCxJQUFlcVQsT0FBT3JULElBQVAsQ0FBWTRXLFFBQTlCLEVBQXdDO0FBQ3RDdkQsWUFBT2pMLE1BQVAsQ0FBYyxZQUFXO0FBQUUsY0FBT3NPLFFBQVFHLFVBQWY7QUFBNEIsTUFBdkQsRUFBeUQsVUFBUzdoQixLQUFULEVBQWdCO0FBQ3ZFO0FBQ0EwaEIsZUFBUUksWUFBUixDQUFxQixZQUFyQixFQUFtQyxJQUFuQztBQUNBSixlQUFRSSxZQUFSLENBQXFCLFNBQXJCLEVBQWdDOWhCLEtBQWhDO0FBQ0QsTUFKRDtBQUtEO0FBQ0Y7O21CQUVjd2hCLFUiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiNDAzOGJmY2UyOWNiMjdlNTI1IiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcbiAgLm1vZHVsZSgnY24uZmxleC1mb3JtJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdzY2hlbWFGb3JtJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnY25UYWdzSW5wdXQnLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBfKHsgLi4uJHN0YXRlUGFyYW1zLCAuLi5vdmVycmlkZXMgfSlcbiAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAub21pdCh2ID0+IChfLmlzVW5kZWZpbmVkKHYpIHx8IHYgPT09IG51bGwpKVxuICAgICAgICAudmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIoKSB7XG5cbiAgdmFyIGZpZWxkVHlwZVJlZ2lzdGVyID0gW3tcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoaWRkZW4nLFxuICAgIHR5cGU6ICdoaWRkZW4nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvcycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb3MnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvYnV0dG9ucycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb2J1dHRvbnMnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2F1dG9jb21wbGV0ZScpIHx8IGZpZWxkLnRpdGxlTWFwIHx8IGZpZWxkLnRpdGxlTWFwUmVzb2x2ZSB8fCBmaWVsZC50aXRsZU1hcFF1ZXJ5LFxuICAgIHR5cGU6ICdjbi1hdXRvY29tcGxldGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjbi1kYXRldGltZXBpY2tlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJyB8fCBmaWVsZC50eXBlID09PSAndGltZS1taW51dGVzJyxcbiAgICB0eXBlOiAnY24tZGF0ZXRpbWVwaWNrZXInXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoZWxwJyxcbiAgICB0eXBlOiAnaGVscCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnZGlzcGxheScpLFxuICAgIHR5cGU6ICdjbi1kaXNwbGF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0LmluY2x1ZGVzKCdjdXJyZW5jeScpLFxuICAgIHR5cGU6ICdjbi1jdXJyZW5jeSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgPT09ICdwZXJjZW50YWdlJyxcbiAgICB0eXBlOiAnY24tcGVyY2VudGFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nLFxuICAgIHR5cGU6ICdjbi10b2dnbGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjcmVhdGl2ZWltYWdlJyxcbiAgICB0eXBlOiAnY24tY3JlYXRpdmVpbWFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbmZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJyxcbiAgICAnY24tY3JlYXRpdmVpbWFnZSdcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5KVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS50aXRsZVF1ZXJ5ID8gdHJ1ZSA6IGZhbHNlfX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXAgfHwgKGZvcm0udGl0bGVRdWVyeSAmJiAzIHx8IDApfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb3B5V2l0aEluZGV4KCRpbmRleClcIi8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jdXJyZW5jeS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+JDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktZm9ybWF0PVwie3tmb3JtLmN1cnJlbmN5Rm9ybWF0fX1cIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1wbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldCBcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNyZWF0aXZlaW1hZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1jcmVhdGl2ZS1pbWFnZSBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1leGlzdGluZy1wcmV2aWV3PVwiZm9ybS5leGlzdGluZ1ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jbi1jcmVhdGl2ZS1pbWFnZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jcmVhdGl2ZWltYWdlJzogJ3Byb2Nlc3NDcmVhdGl2ZUltYWdlJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknXG59O1xuXG4vLyBoYW5kbGVycyB0aGF0IGRvbid0IHJ1biBvbiBzZWNvbmRQYXNzIGFyZSBvbmVzIHRoYXQgc2hvdWxkbid0IGV2ZXIgY2hhbmdlXG4vLyBhbmQgd2Ugd2FudCB0byBhdm9pZCBjb21wb3VuZGluZyB0aGVpciBlZmZlY3RzXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzZWxlY3REaXNwbGF5JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IFxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJmZpZWxkLndhdGNoICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiYgc2VydmljZS5wcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hKGZpZWxkKVxufV07XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIoc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENORmxleEZvcm1TZXJ2aWNlKFxuICBBcGksXG4gICRwYXJzZSxcbiAgY25GbGV4Rm9ybUNvbmZpZyxcbiAgY25GbGV4Rm9ybVR5cGVzLFxuICBzZlBhdGgsXG4gICRpbnRlcnBvbGF0ZSxcbiAgJHRpbWVvdXQsXG4gIGNuVXRpbCxcbiAgJHN0YXRlUGFyYW1zXG4pIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtdO1xuICBjb25zdCBwcm90b3R5cGUgPSB7XG4gICAgY29tcGlsZSxcbiAgICBhZGRBcnJheUNvcHksXG4gICAgYWRkVG9EYXRhQ2FjaGUsXG4gICAgYWRkVG9Gb3JtQ2FjaGUsXG4gICAgYWRkVG9TY29wZUNhY2hlLFxuICAgIGJyb2FkY2FzdEVycm9ycyxcbiAgICBidWlsZEVycm9yLFxuICAgIGNsZWFudXAsXG4gICAgZGVyZWdpc3RlckhhbmRsZXJzLFxuICAgIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIGdldEFycmF5Q29weSxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXREZWZhdWx0LFxuICAgIGdldEZyb21EYXRhQ2FjaGUsXG4gICAgZ2V0RnJvbUZvcm1DYWNoZSxcbiAgICBnZXRGcm9tU2NvcGVDYWNoZSxcbiAgICBnZXRGb3Jtc1RvUHJvY2VzcyxcbiAgICBnZXRLZXksXG4gICAgZ2V0U2NoZW1hLFxuICAgIGdldFdhdGNoYWJsZXMsXG4gICAgaGFuZGxlUmVzb2x2ZSxcbiAgICBpbmNyZW1lbnRVcGRhdGVzLFxuICAgIGluaXRBcnJheUNvcHlXYXRjaCxcbiAgICBpbml0TW9kZWxXYXRjaCxcbiAgICBpbml0U2NoZW1hUGFyYW1zLFxuICAgIGlzQ29tcGlsZWQsXG4gICAgb25Nb2RlbFdhdGNoLFxuICAgIHBhcnNlQWxsLFxuICAgIHBhcnNlQW55LFxuICAgIHBhcnNlQ29uZGl0aW9uLFxuICAgIHBhcnNlRXhwcmVzc2lvbixcbiAgICBwcm9jZXNzQXJyYXksXG4gICAgcHJvY2Vzc0NyZWF0aXZlSW1hZ2UsXG4gICAgcHJvY2Vzc0RlZmF1bHQsXG4gICAgcHJvY2Vzc0Rpc3BsYXksXG4gICAgcHJvY2Vzc0ZpZWxkLFxuICAgIHByb2Nlc3NGaWVsZHNldCxcbiAgICBwcm9jZXNzRmllbGRQcm9wcyxcbiAgICBwcm9jZXNzRmllbGRUeXBlLFxuICAgIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTZXJ2aWNlKGZuKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoZm4pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgIF8uZW1wdHkoc2VydmljZSk7XG4gICAgICBfLnJlbW92ZShzZXJ2aWNlcywgKHMpID0+IHMgPT09IHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcmFtcyA/IGNvbmZpZy5nZXRQYXJhbXMoKSA6IHt9O1xuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcyhvdmVycmlkZXMpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UsIGRlc3Ryb3lTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NvcGUgPSBjb25maWcuZ2V0U2NvcGUoKTtcbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICAgIHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMgPSBjb25maWcuZ2V0UGFybXMgfHwgXy5ub29wO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZmllbGQuY29uZGl0aW9uKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSByZXBsYWNlQXJyYXlJbmRleChmaWVsZC5jb25kaXRpb24sIGZpZWxkLmFycmF5SW5kZXggfHwga2V5KTtcbiAgICAgIGlmKCFzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcblxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQW55KGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCByZXN1bHQ7XG4gICAgY29uc3QgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5maW5kKGVpdGhlcnMsIHggPT4ge1xuICAgICAgY29uc3QgdiA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHgsIGJhc2UpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgcmVzdWx0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQWxsKGV4cCwgYmFzZSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgIGNvbnN0IG1hdGNoID0gXy5yZWR1Y2UoYWxsLCAoYWNjLCB4KSA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBhY2MucHVzaCh2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBhbGwubGVuZ3RoID09PSBtYXRjaC5sZW5ndGggPyBfLmxhc3QobWF0Y2gpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBkYXRhID0gZXhwLmluY2x1ZGVzKCcgfHwgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFueShleHApIDogZXhwLmluY2x1ZGVzKCcgJiYgJykgP1xuICAgICAgc2VydmljZS5wYXJzZUFsbChleHApIDogc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuICAgIGNvbnN0IHZhbDEgPSBmaWVsZFByb3AgPT09ICdjb25kaXRpb24nID8gdmFsICsgJycgOiB2YWw7XG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGRQcm9wLCBmaWVsZCkuc2V0KHZhbDEpO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbjtcbiAgICAgICAgaWYoXy5pc1N0cmluZyhmaWVsZC5jb25kaXRpb24pKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbmRpdGlvbiBpc24ndCBhbHJlYWR5IHdyYXBwZWQgaW4gcGFyZW5zLCB3cmFwIGl0XG4gICAgICAgICAgY29uZGl0aW9uID0gL15cXCguKlxcKSQvLnRlc3QoZmllbGQuY29uZGl0aW9uKSA/XG4gICAgICAgICAgICBmaWVsZC5jb25kaXRpb24gOlxuICAgICAgICAgICAgYCgke2ZpZWxkLmNvbmRpdGlvbn0pYDtcbiAgICAgICAgfVxuICAgICAgICBpZihfLmlzU3RyaW5nKHdhdGNoLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb24gP1xuICAgICAgICAgICAgYCR7Y29uZGl0aW9ufSAmJiAke3dhdGNoLmNvbmRpdGlvbn1gIDpcbiAgICAgICAgICAgIHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSAoZGF5c3xob3VycykvKTtcblxuICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0ge1xuICAgICAgICAgICAgICB2YWw6IGFkanVzdG1lbnQuZGF0ZVsxXSxcbiAgICAgICAgICAgICAgdW5pdHM6IGFkanVzdG1lbnQuZGF0ZVsyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLnZhbCwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgaWYoXy5pc1N0cmluZyhjdXJDb25kaXRpb24pICYmIGN1ckNvbmRpdGlvbi5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYGFycmF5SW5kZXggY291bGQgbm90IGJlIHJlcGFsY2VkIGZyb20gZXhwcmVzc2lvbiAnJHtjdXJDb25kaXRpb259J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKGFkanVzdG1lbnQuZGF0ZS52YWwsIGFkanVzdG1lbnQuZGF0ZS51bml0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gX1thZGp1c3RtZW50Lm9wZXJhdG9yXShmcm9tLmdldCgpLCBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBldmFsKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJHBhcnNlKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKSgpO1xuICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYSB8fCBmaWVsZC5pdGVtcyAmJiAoZmllbGQuaXRlbXNbMF0uc2NoZW1hIHx8IChmaWVsZC5pdGVtc1swXS5pdGVtcyAmJiBmaWVsZC5pdGVtc1swXS5pdGVtc1swXS5zY2hlbWEpKTtcbiAgICAgICAgICAgICAgICBpZihmaWVsZC50eXBlID09PSAnY24tY3VycmVuY3knKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcCA9IHNjaGVtYSAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY3VycmVuY3ktZG9sbGFycycgPyAyIDogMDtcblxuICAgICAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5mbG9vcihyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmNlaWwocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLnJvdW5kKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5saXN0ZW5lcnNbdXBkYXRlLnBhdGgoKS5rZXldLnByZXYgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdLnRyaWdnZXIgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQocmVzdWx0IHx8IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQoZnJvbS5nZXQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSwgd2F0Y2guaW5pdGlhbGl6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBsZXQgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgLy8gYnkgdGhpcyBwb2ludCBkZWZhdWx0cyBzaG91bGQgYmUgcHJvY2Vzc2VkIHNvIHdlIGNhbiBnZXQgdmFsdWUgZGlyZWN0bHkgZnJvbSBtb2RlbFxuICAgICAgY29uc3QgY3VyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1clZhbCkpIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyVmFsO1xuICAgIH1cbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIGlmIGZpZWxkIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGtleVxuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSAmJiAhXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGlmKCFrZXkua2V5ICYmIGtleS5pdGVtcykge1xuICAgICAgICBfLmVhY2goa2V5Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGtleSA9IGtleS5rZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyguKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0sIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1ciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IF8uZ2V0KHNlcnZpY2UuZ2V0U2NoZW1hKGtleSksICdkZWZhdWx0Jyk7XG5cbiAgICBpZighc2VydmljZS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdmFyIHByZXYgPSBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgICAvL2lmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSBzZXJ2aWNlLnNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHNlcnZpY2UubW9kZWwsXG4gICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZihfLmlzRnVuY3Rpb24oc2VydmljZS5yZWZyZXNoU2NoZW1hKSkge1xuICAgICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgY29uc3QgdW5pbmRleGVkS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG5cbiAgICAgIC8vIFRPRE8gLS0gbm90IHN1cmUgaWYgZ2V0QXJyYXlDb3BpZXNGb3IgaXMgYWN0dWFsbHkgbmVjZXNzYXJ5XG4gICAgICAvLyB3ZSBzaG91bGQgbG9vayBpbnRvIHdoZXJlIHRoaXMgZnVuY3Rpb24gbWlnaHQgYmUgbmVlZGVkIGFuZFxuICAgICAgLy8gcG90ZW50aWFsbHkgcmVtb3ZlIGl0XG4gICAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKHVuaW5kZXhlZEtleSk7XG4gICAgICBpZighY29waWVzLmxlbmd0aCkgY29waWVzLnB1c2goc2VydmljZS5nZXRBcnJheVNjb3Blcyh1bmluZGV4ZWRLZXkpIHx8IFtdKTtcblxuICAgICAgY29waWVzLmZvckVhY2goKGxpc3QpID0+IGxpc3QgJiYgbGlzdC5zcGxpY2Uoc2NvcGUuYXJyYXlJbmRleCwgMSkpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgdmFyIGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZighXy5pc1N0cmluZyhleHApICYmICFfLmlzQXJyYXkoZXhwKSkge1xuICAgICAgcmV0dXJuIHsgZ2V0OiAoKSA9PiBleHAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnW15cXCddKid8XCJbXlxcXCJdKlwifC0/WzAtOS5dK3xcXFtdfFxce30pJC8udGVzdChleHApKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighZXhwKSByZXR1cm4gZXhwO1xuICAgICAgICAgIGNvbnN0IGlzU3RyID0gZXhwLm1hdGNoKC9cIihbXlxcXCJdKilcIi8pIHx8IGV4cC5tYXRjaCgvJyhbXlxcJ10qKScvKTtcbiAgICAgICAgICBpZihpc1N0cikgcmV0dXJuIGlzU3RyWzFdO1xuICAgICAgICAgIHN3aXRjaChleHApIHtcbiAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzogcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnW10nOiByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlICd7fSc6IHJldHVybiB7fTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBwYXJzZUZsb2F0KGV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4cCA9IHNlcnZpY2UuZ2V0S2V5KGV4cCk7XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXihtb2RlbFxcLik/KFxcUyspJC8pO1xuXG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtwYXRoLnNoaWZ0KCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICYmIHN0YXJ0W3BhdGhbMF1dO1xuICAgICAgfSxcblxuICAgICAgZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKG5vQ29uc3RydWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoL15cXGQ/JC8udGVzdChwYXRoWzBdKSkge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9iajogc3RhcnQsXG4gICAgICAgICAga2V5OiBwYXRoWzBdLFxuICAgICAgICAgIHBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzKSxcbiAgICAgICAgICBmdWxsUGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MuY29uY2F0KHBhdGguc2xpY2UoMCwgMSkpKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgc2V0KHZhbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBpZih2YWwgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uOiB0cnVlIH0pIHx8IHt9O1xuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLmRlZmF1bHRzW3Jlc29sdmVkLnJlcGxhY2UoJ21vZGVsLicsICcnKV07XG4gICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIHNlcnZpY2Uuc2lsZW5jZUxpc3RlbmVycyhyZXNvbHZlZCwgZGVwdGgpO1xuICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRzKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpbGVuY2VMaXN0ZW5lcnMoa2V5U3RhcnQsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgaWYoa2V5LmluZGV4T2Yoa2V5U3RhcnQpID09PSAwKSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBkZXB0aCkuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBjb25zdCBrZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrcykpO1xuICAgIGxldCBza2lwS2V5cyA9IFtdO1xuICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaW5kZXgpOyBcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZiAoXy5pc0FycmF5KG1vZGVsKSkge1xuICAgICAgICBjb25zdCBjaGlsZEtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtleSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgXy5lYWNoKGNoaWxkS2V5cywgKGspID0+IHtcbiAgICAgICAgICAgIHNraXBLZXlzLnB1c2goayk7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVkQ2hpbGRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoaywgW2luZGV4LCBpXSk7XG4gICAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRDaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFza2lwS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLFxuICAgIC8vIHNjb3BlIGZvciB0aGlzIHNlY3Rpb24gd2lsbCBzb29uIGJlIGVtaXR0ZWQsIHNvIGNhbiBza2lwXG4gICAgaWYoc2Vjb25kUGFzcykgcmV0dXJuO1xuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NyZWF0aXZlSW1hZ2UoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jcmVhdGl2ZWltYWdlJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZWRpYVVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLW1lZGlhdXBsb2FkJztcbiAgICBpZighZmllbGQucmVzb2x2ZSkge1xuICAgICAgZmllbGQucmVzb2x2ZSA9IHsgfTtcbiAgICAgIF8uZWFjaChmaWVsZC5kYXRhLCAoZXhwLCBwcm9wKSA9PlxuICAgICAgICAgIGZpZWxkLnJlc29sdmVbYGRhdGEuJHtwcm9wfWBdID0gZXhwXG4gICAgICApO1xuICAgIH1cbiAgICBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDc3ZVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jc3Z1cGxvYWQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvcyhmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmFkaW9zJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb2J1dHRvbnMocmFkaW9zKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJhZGlvcy50eXBlID0gJ2NuLXJhZGlvYnV0dG9ucyc7XG4gICAgaWYocmFkaW9zLmZ1bGxXaWR0aCkge1xuICAgICAgcmFkaW9zLmJ0bkNsYXNzID0gJ2NvbC1zbS0nICsgXy5kaXZpZGUoMTIsIHJhZGlvcy50aXRsZU1hcC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEYXRlKGRhdGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGF0ZS50eXBlID0gJ2NuLWRhdGV0aW1lcGlja2VyJztcblxuICAgIGlmKGRhdGUuc2NoZW1hLmZvcm1hdCA9PT0gJ3RpbWUtbWludXRlcycpIHtcbiAgICAgIGRhdGUubWF4VmlldyA9ICdob3VyJztcbiAgICAgIGRhdGUuaWNvbkNsYXNzID0gJ2ZhIGZhLWNsb2NrLW8nO1xuXG4gICAgICBkYXRlLm1vZGVsRm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtID0gbW9tZW50KHZhbCk7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkobS5ob3VycygpLCA2MCksIG0ubWludXRlcygpKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUubW9kZWxQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGQgPSBwYXJzZUludCh2YWwpO1xuICAgICAgICBsZXQgaG91cnMgPSBfLmZsb29yKGQgLyA2MCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZCAlIDYwO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoKS5zdGFydE9mKCdkYXknKS5hZGQoJ2hvdXJzJywgaG91cnMpLmFkZCgnbWludXRlcycsIG1pbnV0ZXMpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3Rm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBkYXRlLm1vZGVsUGFyc2VyKHZhbCkuZm9ybWF0KGRhdGUuZGF0ZUZvcm1hdCk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1hdGNoID0gdmFsLm1hdGNoKC9eKFxcZHsxLDJ9KTo/KFxcZHsxLDJ9KT8gKGF8cCkvKTtcbiAgICAgICAgaWYoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhvdXJzID0gXy5hZGQobWF0Y2hbMV0gPT09ICcxMicgPyAwIDogbWF0Y2hbMV0sIG1hdGNoWzNdID09PSAnYScgPyAwIDogMTIpO1xuICAgICAgICBsZXQgbWludXRlcyA9IG1hdGNoWzJdIHx8ICcwMCc7XG5cbiAgICAgICAgaWYobWludXRlcy5sZW5ndGggPT09IDEpIG1pbnV0ZXMgKz0gJzAnO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KGhvdXJzLCA2MCksIG1pbnV0ZXMpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCkge1xuICAgIGxldCBpc0FycmF5ID0gc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JztcbiAgICByZXR1cm4gc2VsZWN0LnZhbHVlUHJvcGVydHkgfHxcbiAgICAgIChpc0FycmF5ID8gc2VsZWN0LnNjaGVtYS5pdGVtcy50eXBlIDogc2VsZWN0LnNjaGVtYS50eXBlKSAhPT0gJ29iamVjdCcgJiYgJ3ZhbHVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgdGl0bGVNYXApIHtcbiAgICB0aXRsZU1hcCA9IHRpdGxlTWFwIHx8IHNlbGVjdC5nZXRUaXRsZU1hcCgpO1xuICAgIGxldCB2YWxQcm9wID0gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpO1xuICAgIGlmKCF2YWxQcm9wKSByZXR1cm47XG5cbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgbWFwVmFsID0gdmFsLm1hcCh4ID0+IF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogeH0pKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICByZXR1cm4gbWFwVmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHZhbH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZvcm0ua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgaWYobmV3VmFsICE9PSB1bmRlZmluZWQpIHNldHRlcihuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFF1ZXJ5KSB7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcztcbiAgICAgIGNvbnN0IHBhcmFtc0tleXMgPSBfLmtleXMocXVlcnlQYXJhbXMpO1xuICAgICAgc2VsZWN0LnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IGZ1bmN0aW9uKHEpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gXyhwYXJhbXNLZXlzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncScpIHtcbiAgICAgICAgICAgICAgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gcTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHF1ZXJ5UGFyYW1zW2tleV0pLmdldCgpO1xuICAgICAgICAgICAgICBhY2Nba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgLy8gd3JhcCBpbiBzdHJpbmcgc28gcmV0dXJucyB0cnV0aHkgd2hlbiBjb21waWxlZCwgYnV0IGNvbnZlcnRlZCB0byBudW1iZXIgd2l0aGluIGRpcmVjdGl2ZVxuICAgICAgaWYoIXBhcmFtc0tleXMubGVuZ3RoKSBzZWxlY3QubWluTG9va3VwID0gJzAnO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTtcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSksXG4gICAgICAgIHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpLFxuICAgICAgICBoYW5kbGVyO1xuXG4gICAgaWYoc2NoZW1hICYmIHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RGlzcGxheS5zZWxlY3REaXNwbGF5ID0gZmFsc2U7XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0RmllbGQua2V5LCBoYW5kbGVyLCBzZWxlY3RGaWVsZC51cGRhdGVTY2hlbWEsIHRydWUpO1xuICAgIC8vc2VydmljZS5wcm9jZXNzRmllbGQoc2VsZWN0RGlzcGxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYoaXRlbS5jb25kaXRpb24gIT09ICdmYWxzZScpIHtcbiAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbih2YWwsIHByZXYsIGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gZ2V0QXJyYXlJbmRleChrZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpbmRleCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICB2YXIgZm9ybUNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShjb3B5LmtleSksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBpZihrZXkgPT09IHNlbGVjdEtleSkgcmV0dXJuO1xuICAgICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICAgIHZhciBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaSk7XG4gICAgICAgIHZhciBzcGxpdEluZGV4ZWRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGluZGV4ZWRLZXkpO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgXy5lYWNoKGVsZW0sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcnVuIGhhbmRsZXIgb25jZSBhbGwgYXJyYXlDb3BpZXMgaGF2ZSBiZWVuIGluc3RhbnRpYXRlZFxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGtleU1hcCA9IF8ucGx1Y2soXy5yZWplY3Qoc2VsZWN0RGlzcGxheS5pdGVtcywge1wiY29uZGl0aW9uXCI6XCJmYWxzZVwifSksICdrZXknKTtcbiAgICB2YXIgb25jZSA9IHNlcnZpY2Uuc2NvcGUuJG9uKCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZnVuY3Rpb24oZXZlbnQsIGtleSkge1xuICAgICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKG1vZGVsKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IG1vZGVsLmxlbmd0aCAqIChrZXlNYXAubGVuZ3RoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhrZXlNYXAsIGtleSkpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvdW50ID09PSB0b3RhbCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIobnVsbCwgbnVsbCwgJ1snICsgaSArICddJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXNldENvdW50ID0gc2VydmljZS5zY29wZS4kb24oJ2ZsZXhGb3JtLnVwZGF0ZVBhZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9KTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKG9uY2UpO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gocmVzZXRDb3VudCk7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiB0aGUgZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgaWYoZGVmYXVsdHMgJiYgIW1vZGVsLmdldCgpKSB7XG4gICAgICBtb2RlbC5zZXQoZGVmYXVsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKHVwZGF0ZVNjaGVtYSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIC4uLmNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoc2VydmljZS5nZXRQYXJhbU92ZXJyaWRlcygpKSxcbiAgICAgICAgLi4uc2VydmljZS5wYXJhbXNcbiAgICAgIH07XG4gICAgICBsZXQgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSwgJ2RlbGV0ZScpLCAndXBkYXRlcycpO1xuICAgICAgbGV0IGtleXM7XG5cbiAgICAgIGlmKCFfLmlzRW1wdHkoZGlmZikgfHwgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIGlmKHVwZGF0ZVNjaGVtYSkgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IHVwZGF0ZVNjaGVtYTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIGlmKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGlmZiA9IF8ub21pdChkaWZmLCBfLmlzTnVsbCk7XG4gICAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXBhcmFtcy51cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgICBkaWZmID0gY25VdGlsLmRpZmYocGFyYW1zLCBfLm9taXQoc2VydmljZS5zY2hlbWEucGFyYW1zLCBbJ3VwZGF0ZVNjaGVtYScsICd1cGRhdGVzJ10pKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHNlcnZpY2Uuc2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICAgIGNvbnN0IGN1cktleXMgPSBfLmZpbHRlcihrZXlzLCBrID0+IGsuaW5jbHVkZXMoa2V5KSk7XG4gICAgICAgICAgXy5lYWNoKGN1cktleXMsIGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtcyA9IF8uY29tcGFjdChbXG4gICAgICAgICAgICAgIHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpLFxuICAgICAgICAgICAgICAuLi4oc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkpIHx8IFtdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF8uZWFjaChmb3JtcywgZm9ybSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZTY2hlbWEgPSBmb3JtLnNjaGVtYTtcbiAgICAgICAgICAgICAgY29uc3QgbmV3U2NoZW1hICA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSwgeyBbc2NoZW1hLmtleV06IHNjaGVtYSB9KTtcbiAgICAgICAgICAgICAgaWYocHJldlNjaGVtYS5yZWFkb25seSAmJiAhbmV3U2NoZW1hLnJlYWRvbmx5KSBmb3JtLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllc1trZXldID0gc2NoZW1hO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfLmdldChzZXJ2aWNlLCAnZXJyb3JzJykpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXFsoXFxkKilcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBrZXlDb3B5O1xuICAgIGlmICghXy5pc0FycmF5KGluZGV4KSkge1xuICAgICAgaW5kZXggPSBbaW5kZXhdO1xuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleC5sZW5ndGggJiYga2V5Q29weS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICBsZXQgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4LnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudFVwZGF0ZXMoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9ICB0aGlzO1xuICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgIHNlcnZpY2UucGFyYW1zLnVwZGF0ZXMgPSBzZXJ2aWNlLnVwZGF0ZXM7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3RwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxNYXAgPSB7fTtcbmNvbnN0IHByb21pc2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0UHJvbWlzZXMoc3RhdGUpIHtcbiAgaWYocHJvbWlzZU1hcFtzdGF0ZV0pIHJldHVybiBwcm9taXNlTWFwW3N0YXRlXTtcblxuICBjb25zdCBwcm9taXNlID0ge307XG4gIHByb21pc2VNYXBbc3RhdGVdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSkge1xuICBjb25zdCBwcm9taXNlcyA9IGdldFByb21pc2VzKHN0YXRlKTtcbiAgaWYocHJvbWlzZXNbaWRdKSByZXR1cm4gcHJvbWlzZXNbaWRdO1xuXG4gIGNvbnN0IHByb21pc2UgPSAkcS5kZWZlcigpO1xuICBwcm9taXNlc1tpZF0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKCkge1xuXG4gIHJldHVybiB7XG4gICAgYWRkTWFwcGluZyxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkTWFwcGluZyhzdGF0ZSwgZGVmKSB7XG4gICAgZGVmLnJlc29sdmUgPSB7IHBhcmVudCB9O1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IGRlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmVudCgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiAoXG4gICAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCB9KSA9PiBwYXJlbnQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlKCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGdldE1hcHBpbmcsXG4gICAgcmVzb2x2ZU1hcHBpbmcsXG4gICAgcmVtb3ZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICAvLyBIb2xkaW5nIG9uIHRvIHNjb3BlIHJlZmVyZW5jZXMgY3JlYXRlcyBtZW1vcnkgbGVha3NcbiAgZnVuY3Rpb24gcmVtb3ZlTWFwcGluZyhzdGF0ZSkge1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IG51bGw7XG4gICAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBGbGV4Rm9ybU1vZGFsTG9hZGVyKEZsZXhGb3JtTW9kYWwsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBGRk1vZGFsTG9hZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gRkZNb2RhbExvYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICBhY3RpdmF0ZSgpO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBGbGV4Rm9ybU1vZGFsXG4gICAgICAub3Blbih2bSlcbiAgICAgIC50aGVuKCh7IG1vZGFsLCBvcHRpb25zOiB7IG9uRGlzbWlzcywgb25BZnRlckRpc21pc3MgfSB9KSA9PiB7XG4gICAgICAgIHZtLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHZtLm1vZGFsLnJlc3VsdC5maW5hbGx5KGdvQmFjayk7XG5cbiAgICAgICAgaWYob25EaXNtaXNzKSB2bS5tb2RhbC5yZXN1bHQuY2F0Y2goKCkgPT4gb25EaXNtaXNzKCRzdGF0ZVBhcmFtcy5yZXN0UGFyYW1zKSk7XG4gICAgICAgIHZtLmRpc21pc3NFdmVudCA9ICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGRpc21pc3NNb2RhbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZighJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICRzdGF0ZS5nbygnXicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc21pc3NNb2RhbCgpIHtcbiAgICAvLyB1bmJpbmQgZXZlbnRcbiAgICB2bS5kaXNtaXNzRXZlbnQoKTtcbiAgICB2bS5tb2RhbC5vcGVuZWQudGhlbigoKSA9PlxuICAgICAgICB2bS5tb2RhbC5kaXNtaXNzKClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPCEtLSB3ZSBwcm9jZXNzIGRlZmF1bHRzIG91cnNlbHZlcywgaGVuY2Ugc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIC0tPlxuICAgICAgICA8bmctZm9ybVxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLW9wdGlvbnM9XCJ7IHNldFNjaGVtYURlZmF1bHRzOiBmYWxzZSB9XCJcbiAgICAgICAgICBzZi1zY2hlbWE9XCJ2bS5jb25maWcuc2NoZW1hLnNjaGVtYVwiXG4gICAgICAgICAgc2YtZm9ybT1cInZtLmZvcm1cIlxuICAgICAgICAgIHNmLW1vZGVsPVwidm0ubW9kZWxcIj5cbiAgICAgICAgPC9uZy1mb3JtPlxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XG4gICAgICAgIDxzZWN0aW9uIG5nLWlmPVwidm0uZGVidWdcIj5cbiAgICAgICAgICA8anNvbi1leHBsb3JlciBqc29uLWRhdGE9XCJ2bS5tb2RlbCB8fCAnLi4ubW9kZWwgbm90IGxvYWRlZCB5ZXQnXCIvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBjbkZsZXhGb3JtVGFnKCk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgdm0uc2VydmljZSA9IHVuZGVmaW5lZDtcbiAgdm0uZXZlbnRzID0gW107XG5cbiAgdm0uYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbiAgdm0uY2xlYW51cCA9IGNsZWFudXA7XG4gIHZtLnByb2Nlc3MgPSBwcm9jZXNzO1xuICB2bS5zaG93Rm9ybSA9IHNob3dGb3JtO1xuXG4gIHZtLmV2ZW50cy5wdXNoKCRzY29wZS4kd2F0Y2goKCkgPT4gdm0uY29uZmlnLnNjaGVtYSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGdldFNjb3BlOiB2bS5jb25maWcuZ2V0U2NvcGUgfHwgKCgpID0+ICRzY29wZSksXG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG5cbiAgICBjbkZsZXhGb3JtU2VydmljZS5kZXN0cm95U2VydmljZSh2bS5zZXJ2aWNlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgLy9hY3RpdmF0ZSgpO1xuICAvLyRzY29wZS4kb24oJyRkZXN0cm95JywgY2xlYW51cCk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy50aXRsZScsIGluaXRUaXRsZSwgdHJ1ZSk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy5hY3Rpb25Db25maWcnLCBpbml0QWN0aW9uQ29uZmlnLCB0cnVlKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGluaXRUaXRsZSgpIHtcbiAgICAoeyB0aXRsZTogdm0udGl0bGUgfSA9IHZtLmNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWN0aW9uQ29uZmlnKCkge1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=