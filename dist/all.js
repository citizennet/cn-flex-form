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
	
	  var extensions = ['cn-fieldset', 'cn-toggle', 'cn-datetimepicker', 'cn-autocomplete', 'cn-autocomplete-detailed', 'cn-currency', 'cn-radios', 'cn-radiobuttons', 'cn-percentage', 'cn-display', 'cn-mediaupload', 'cn-csvupload', 'cn-reusable', 'cn-table'];
	
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
	      var condition = replaceArrayIndex(field.condition, key);
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
	            var forms = _.compact([service.arrayCopies[key], service.formCache[key]]);
	            _.each(forms, function (form) {
	              var prevSchema = form.schema;
	              var newSchema = service.getSchema(key, _defineProperty({}, key, schema));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiODg5OTg2YWY3MmQzMGE3ZDc0OCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJvdmVycmlkZXMiLCJfIiwib21pdCIsImlzVW5kZWZpbmVkIiwidiIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NEZWZhdWx0Iiwic2Vjb25kUGFzcyIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJkZWZhdWx0Iiwid2F0Y2giLCJwcm9jZXNzRmllbGRXYXRjaCIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbmNyZW1lbnRVcGRhdGVzIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQWxsIiwicGFyc2VBbnkiLCJwYXJzZUNvbmRpdGlvbiIsInBhcnNlRXhwcmVzc2lvbiIsInByb2Nlc3NBcnJheSIsInByb2Nlc3NEaXNwbGF5IiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc1BlcmNlbnRhZ2UiLCJwcm9jZXNzRGF0ZSIsInByb2Nlc3NIZWxwIiwicHJvY2Vzc1JhZGlvcyIsInByb2Nlc3NSYWRpb2J1dHRvbnMiLCJwcm9jZXNzUmV1c2FibGUiLCJwcm9jZXNzU2NoZW1hIiwicHJvY2Vzc1NlY3Rpb24iLCJwcm9jZXNzU2VsZWN0IiwicHJvY2Vzc1RhYmxlIiwicHJvY2Vzc1RlbXBsYXRlIiwicHJvY2Vzc1RvZ2dsZSIsInByb2Nlc3NVcGRhdGVkU2NoZW1hIiwicHJvY2Vzc01lZGlhVXBsb2FkIiwicHJvY2Vzc0NzdlVwbG9hZCIsInJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsInJlZ2lzdGVySGFuZGxlciIsInJlZ2lzdGVyUmVzb2x2ZSIsInJlcGxhY2VBcnJheUluZGV4IiwicmVwcm9jZXNzRmllbGQiLCJyZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMiLCJzZXRBcnJheUluZGV4Iiwic2V0dXBDb25maWciLCJzZXR1cEFycmF5U2VsZWN0RGlzcGxheSIsInNldHVwU2VsZWN0RGlzcGxheSIsInNldHVwU2NoZW1hUmVmcmVzaCIsInNpbGVuY2VMaXN0ZW5lcnMiLCJza2lwRGVmYXVsdHMiLCJnZXRTZXJ2aWNlIiwiZm4iLCJmaW5kIiwiZGVzdHJveVNlcnZpY2UiLCJlbXB0eSIsInJlbW92ZSIsInMiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJnZXRQYXJhbXMiLCJwYXJhbXMiLCJleHRlbmQiLCJzY29wZSIsImdldFNjb3BlIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsInVwZGF0ZVNjaGVtYSIsImdldFNjaGVtYUZvcm0iLCJnZXRQYXJhbU92ZXJyaWRlcyIsImdldFBhcm1zIiwibm9vcCIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwibW9kZWxWYWx1ZSIsImdldCIsImhhcyIsImVxdWFscyIsImlzVHJ1bHlFbXB0eSIsInNldCIsImNvcHkiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiZ2V0T2dLZXlzIiwicmVqZWN0Iiwia2V5cyIsImlzRGVmaW5lZCIsIl9vZ0tleXMiLCJkZXNjcmlwdGlvbiIsInNob3dDbGVhckFsbCIsIiRicm9hZGNhc3QiLCJnZXREb3RLZXkiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsInJlZHVjZSIsInRvdGFsIiwibmV4dCIsImRlcHRoIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwic2hpZnQiLCJleHAiLCJ3YXRjaGFibGVzIiwibmVzdGVkIiwibWF0Y2hOZXN0ZWRFeHByZXNzaW9uIiwicmVwbGFjZVN0ciIsInJlcGxhY2UiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJhcnJheUluZGV4Iiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwicmVzdWx0IiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsImFjYyIsImxhc3QiLCJ1bmRlZmluZWQiLCJza2lwUHJvcEhhbmRsZXJzIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwidmFsMSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2IiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJjdXIiLCJhZGp1c3RtZW50IiwiZGF0ZSIsInVuaXRzIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsImNvbnNvbGUiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImN1clZhbCIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwic3RyaXBJbmRleGVzIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJnZW5lcmljS2V5IiwiaW5kZXgiLCIkZW1pdCIsInVuaW5kZXhlZEtleSIsImNvcGllcyIsInNwbGljZSIsImxpbmsiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiaW5kZXhPZiIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwibWFwVmFsIiwib25Jbml0Iiwic2V0dGVyIiwibmV3VmFsIiwicXVlcnlQYXJhbXMiLCJwYXJhbXNLZXlzIiwidGl0bGVRdWVyeSIsInEiLCJtaW5Mb29rdXAiLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0IiwiZGVzdHJveVN0cmF0ZWd5Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsInNlbGVjdEtleSIsInNwbGl0S2V5IiwiaW5kZXhlZFNlbGVjdEtleSIsInNlbGVjdFZhbHVlIiwiZm9ybUNvcGllcyIsImVsZW0iLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwiaXNOdWxsIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjdXJLZXlzIiwiY29tcGFjdCIsInByZXZTY2hlbWEiLCJuZXdTY2hlbWEiLCJyZWFkb25seSIsImNhY2hlZCIsImN1cnJlbnQiLCJpc0NoaWxkIiwicmVkcmF3IiwibG9nIiwic3ViS2V5Iiwiam9pbiIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwicmVtb3ZlTWFwcGluZyIsIkZsZXhGb3JtTW9kYWxMb2FkZXIiLCJGbGV4Rm9ybU1vZGFsIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiRzY29wZSIsIkZGTW9kYWxMb2FkZXJUYWciLCJfX3RhZyIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwib25BZnRlckRpc21pc3MiLCJmaW5hbGx5IiwiZ29CYWNrIiwiY2F0Y2giLCJyZXN0UGFyYW1zIiwiZGlzbWlzc0V2ZW50IiwiZGlzbWlzc01vZGFsIiwidHJhbnNpdGlvbiIsImdvIiwib3BlbmVkIiwiZGlzbWlzcyIsIiR1aWJNb2RhbCIsImNuRmxleEZvcm0iLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZm9ybUluZGV4IiwiZm9ybU5hbWUiLCJkZWxheUZvcm0iLCJjbGVhbnVwRXZlbnQiLCJGbGV4Rm9ybSIsImJpbmRUb0NvbnRyb2xsZXIiLCJjbkZsZXhGb3JtU2VydmljZSIsIiRsb2NhdGlvbiIsImNuRmxleEZvcm1UYWciLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwiZmZIZWFkZXJUYWciLCJ1cGRhdGVEYXRhIiwiaXNEaXNhYmxlZCIsImluaXRUaXRsZSIsImluaXRBY3Rpb25Db25maWciLCJ0aXRsZSIsImFjdGlvbkNvbmZpZyIsInJldHVyblN0YXRlIiwicmV0dXJuU3R5bGUiLCJyZXR1cm5UZXh0IiwiY2xvc2VCdXR0b24iLCJhY3Rpb25zIiwiYnRuQ29uZmlnIiwiZmZWYWxpZGF0ZSIsImF0dHJzIiwibmdNb2RlbCIsImZmVmFsaWRhdGVUYWciLCJyZXF1aXJlZCIsIiR2aWV3VmFsdWUiLCIkc2V0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O21CQUVlQSxRQUNaQyxNQURZLENBQ0wsY0FESyxFQUNXLENBQ3RCLFdBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLDZCQUhzQixFQUl0QixhQUpzQixFQUt0QixTQUxz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TUFBZCxFQUFzQjNELElBQXRCLEVBQTRCK0csS0FBNUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDLFlBQVNDLGFBQVQsR0FBeUIsQ0FBRTtBQUMzQnRELFVBQU9FLEtBQVAsR0FBZSxJQUFJb0QsYUFBSixFQUFmOztBQUVBLE9BQUd0RCxPQUFPclQsSUFBUCxJQUFlcVQsT0FBT3JULElBQVAsQ0FBWTRXLFFBQTlCLEVBQXdDO0FBQ3RDdkQsWUFBT2pMLE1BQVAsQ0FBYyxZQUFXO0FBQUUsY0FBT3NPLFFBQVFHLFVBQWY7QUFBNEIsTUFBdkQsRUFBeUQsVUFBUzVoQixLQUFULEVBQWdCO0FBQ3ZFO0FBQ0F5aEIsZUFBUUksWUFBUixDQUFxQixZQUFyQixFQUFtQyxJQUFuQztBQUNBSixlQUFRSSxZQUFSLENBQXFCLFNBQXJCLEVBQWdDN2hCLEtBQWhDO0FBQ0QsTUFKRDtBQUtEO0FBQ0Y7O21CQUVjdWhCLFUiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI4ODk5ODZhZjcyZDMwYTdkNzQ4IiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcbiAgLm1vZHVsZSgnY24uZmxleC1mb3JtJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdzY2hlbWFGb3JtJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnY25UYWdzSW5wdXQnLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBfKHsgLi4uJHN0YXRlUGFyYW1zLCAuLi5vdmVycmlkZXMgfSlcbiAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAub21pdCh2ID0+IChfLmlzVW5kZWZpbmVkKHYpIHx8IHYgPT09IG51bGwpKVxuICAgICAgICAudmFsdWUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIoKSB7XG5cbiAgdmFyIGZpZWxkVHlwZVJlZ2lzdGVyID0gW3tcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoaWRkZW4nLFxuICAgIHR5cGU6ICdoaWRkZW4nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvcycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb3MnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvYnV0dG9ucycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb2J1dHRvbnMnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2F1dG9jb21wbGV0ZScpIHx8IGZpZWxkLnRpdGxlTWFwIHx8IGZpZWxkLnRpdGxlTWFwUmVzb2x2ZSB8fCBmaWVsZC50aXRsZU1hcFF1ZXJ5LFxuICAgIHR5cGU6ICdjbi1hdXRvY29tcGxldGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjbi1kYXRldGltZXBpY2tlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJyB8fCBmaWVsZC50eXBlID09PSAndGltZS1taW51dGVzJyxcbiAgICB0eXBlOiAnY24tZGF0ZXRpbWVwaWNrZXInXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoZWxwJyxcbiAgICB0eXBlOiAnaGVscCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnZGlzcGxheScpLFxuICAgIHR5cGU6ICdjbi1kaXNwbGF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0LmluY2x1ZGVzKCdjdXJyZW5jeScpLFxuICAgIHR5cGU6ICdjbi1jdXJyZW5jeSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgPT09ICdwZXJjZW50YWdlJyxcbiAgICB0eXBlOiAnY24tcGVyY2VudGFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nLFxuICAgIHR5cGU6ICdjbi10b2dnbGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRTdGF0ZXMsXG4gICAgJGdldFxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uICRnZXQoKSB7XG4gICAgLy8gbm90aGluZyB0byBkbyBoZXJlLCBidXQgcmVxdWlyZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0YXRlcyh7IHBlcm1pc3Npb25zLCBuYW1lIH0pIHtcbiAgICBjb25zdCBzaGFyZWQgPSB7XG4gICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1Nb2RhbExvYWRlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBwZXJtaXNzaW9uc1xuICAgIH07XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbFBhcmFtc2AsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZC86cmVzdFBhcmFtcycsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXMoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdmbGV4LWZvcm0tc2FuZGJveCcsIHtcbiAgICAgICAgdXJsOiAnL2ZsZXgtZm9ybS9zYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtU2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vc2FuZGJveC5odG1sJ1xuICAgICAgfSk7XG59XG5cbmV4cG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXMsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCIvL2FuZ3VsYXIubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAgIC8vLnJ1bihhZGRUZW1wbGF0ZXMpO1xuXG5mdW5jdGlvbiBzY2hlbWFGb3JtQ29uZmlnKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICB0djQuYWRkRm9ybWF0KHtcbiAgICAndXJsJzogZGF0YSA9PiBfLmlzU3RyaW5nKGRhdGEpICYmICEvXihodHRwcz86XFwvXFwvLnsyfXwkKS8udGVzdChkYXRhKSAmJiAnaW52YWxpZCB1cmwnXG4gIH0pO1xuXG4gIHZhciBleHRlbnNpb25zID0gW1xuICAgICdjbi1maWVsZHNldCcsXG4gICAgJ2NuLXRvZ2dsZScsXG4gICAgJ2NuLWRhdGV0aW1lcGlja2VyJyxcbiAgICAnY24tYXV0b2NvbXBsZXRlJyxcbiAgICAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJyxcbiAgICAnY24tY3VycmVuY3knLFxuICAgICdjbi1yYWRpb3MnLFxuICAgICdjbi1yYWRpb2J1dHRvbnMnLFxuICAgICdjbi1wZXJjZW50YWdlJyxcbiAgICAnY24tZGlzcGxheScsXG4gICAgJ2NuLW1lZGlhdXBsb2FkJyxcbiAgICAnY24tY3N2dXBsb2FkJyxcbiAgICAnY24tcmV1c2FibGUnLFxuICAgICdjbi10YWJsZSdcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5KVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS50aXRsZVF1ZXJ5ID8gdHJ1ZSA6IGZhbHNlfX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXAgfHwgKGZvcm0udGl0bGVRdWVyeSAmJiAzIHx8IDApfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIj5cbiAgICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgICAgbmctaWY9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb3B5V2l0aEluZGV4KCRpbmRleClcIi8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jdXJyZW5jeS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+JDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktZm9ybWF0PVwie3tmb3JtLmN1cnJlbmN5Rm9ybWF0fX1cIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1wbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldCBcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWV4aXN0aW5nLXByZXZpZXc9XCJmb3JtLmV4aXN0aW5nUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jc3Z1cGxvYWQnOiAncHJvY2Vzc0NzdlVwbG9hZCcsXG4gICdjbi1yZXVzYWJsZSc6ICdwcm9jZXNzUmV1c2FibGUnLFxuICAnY24tdG9nZ2xlJzogJ3Byb2Nlc3NUb2dnbGUnLFxuICAnY24tdGFibGUnOiAncHJvY2Vzc1RhYmxlJyxcbiAgJ2NvbXBvbmVudCc6ICdwcm9jZXNzQ29tcG9uZW50JyxcbiAgJ3NlY3Rpb24nOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAndGFiYXJyYXknOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAnYXJyYXknOiAncHJvY2Vzc0FycmF5J1xufTtcblxuLy8gaGFuZGxlcnMgdGhhdCBkb24ndCBydW4gb24gc2Vjb25kUGFzcyBhcmUgb25lcyB0aGF0IHNob3VsZG4ndCBldmVyIGNoYW5nZVxuLy8gYW5kIHdlIHdhbnQgdG8gYXZvaWQgY29tcG91bmRpbmcgdGhlaXIgZWZmZWN0c1xuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICAhc2Vjb25kUGFzcyAmJiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWxlY3REaXNwbGF5KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBcbiAgICBfLmlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHQpICYmICFfLmlzVW5kZWZpbmVkKGZpZWxkLnNjaGVtYS5kZWZhdWx0KSAmJiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+XG4gICAgIXNlY29uZFBhc3MgJiZmaWVsZC53YXRjaCAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKVxufSwge1xuICBwcm9wOiAndHlwZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAndXBkYXRlU2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PlxuICAgICFzZWNvbmRQYXNzICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZClcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtc1xuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0Rm9ybXNUb1Byb2Nlc3MsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5jcmVtZW50VXBkYXRlcyxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUFsbCxcbiAgICBwYXJzZUFueSxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NGaWVsZFdhdGNoLFxuICAgIHByb2Nlc3NDb21wb25lbnQsXG4gICAgcHJvY2Vzc0NvbmRpdGlvbmFsLFxuICAgIHByb2Nlc3NDdXJyZW5jeSxcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzRGF0ZSxcbiAgICBwcm9jZXNzSGVscCxcbiAgICBwcm9jZXNzUmFkaW9zLFxuICAgIHByb2Nlc3NSYWRpb2J1dHRvbnMsXG4gICAgcHJvY2Vzc1JldXNhYmxlLFxuICAgIHByb2Nlc3NTY2hlbWEsXG4gICAgcHJvY2Vzc1NlbGVjdERpc3BsYXksXG4gICAgcHJvY2Vzc1Jlc29sdmUsXG4gICAgcHJvY2Vzc1NlY3Rpb24sXG4gICAgcHJvY2Vzc1NlbGVjdCxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBBcnJheVNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2NoZW1hUmVmcmVzaCxcbiAgICBzaWxlbmNlTGlzdGVuZXJzLFxuICAgIHNraXBEZWZhdWx0c1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlcnZpY2UoZm4pIHtcbiAgICByZXR1cm4gXy5maW5kKHNlcnZpY2VzLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95U2VydmljZShmbikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKGZuKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZS5jbGVhbnVwKCk7XG4gICAgICBfLmVtcHR5KHNlcnZpY2UpO1xuICAgICAgXy5yZW1vdmUoc2VydmljZXMsIChzKSA9PiBzID09PSBzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgaWYoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgWyBzY2hlbWEsIG1vZGVsLCBjb25maWcgXSA9IGFyZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIH0gPSBhcmdzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGN1clNlcnZpY2UgPSBnZXRTZXJ2aWNlKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLm1vZGVsID09PSBtb2RlbCk7XG4gICAgaWYoY3VyU2VydmljZSkge1xuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGN1clNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgc2VydmljZXMucHVzaChuZXdTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV3U2VydmljZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5zY29wZUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuICAgIHRoaXMuc2tpcERlZmF1bHQgPSB7fTtcblxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IGNvbmZpZy5nZXRQYXJhbXMgPyBjb25maWcuZ2V0UGFyYW1zKCkgOiB7fTtcbiAgICB0aGlzLnBhcmFtcyA9IGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMob3ZlcnJpZGVzKTtcblxuICAgIHRoaXMuXyA9IF87XG5cbiAgICB0aGlzLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENORmxleEZvcm0ucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICBfLmV4dGVuZChDTkZsZXhGb3JtQ29uc3RydWN0b3IsIHByb3RvdHlwZSwgeyBnZXRTZXJ2aWNlLCBkZXN0cm95U2VydmljZSB9KTtcblxuICByZXR1cm4gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yO1xuXG4gIC8vLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnNjb3BlID0gY29uZmlnLmdldFNjb3BlKCk7XG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgICBzZXJ2aWNlLmdldFBhcmFtT3ZlcnJpZGVzID0gY29uZmlnLmdldFBhcm1zIHx8IF8ubm9vcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZiAoc2VydmljZS5za2lwRGVmYXVsdFtrZXldKSB7XG4gICAgICBkZWxldGUgc2VydmljZS5za2lwRGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGZpZWxkLmNvbmRpdGlvbikge1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gcmVwbGFjZUFycmF5SW5kZXgoZmllbGQuY29uZGl0aW9uLCBrZXkpO1xuICAgICAgaWYoIXNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoXy5pc1VuZGVmaW5lZChtb2RlbFZhbHVlKSB8fCAoXG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpID8gYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSA6IF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSAmJlxuICAgICAgICAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdClcbiAgICAgICkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgZmlyc3QgPSBrZXlbMF07XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbnkoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjb25zdCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLmZpbmQoZWl0aGVycywgeCA9PiB7XG4gICAgICBjb25zdCB2ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oeCwgYmFzZSkuZ2V0KCk7XG4gICAgICBpZighXy5pc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICByZXN1bHQgPSB2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBbGwoZXhwLCBiYXNlKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgY29uc3QgbWF0Y2ggPSBfLnJlZHVjZShhbGwsIChhY2MsIHgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih4LCBiYXNlKS5nZXQoKTtcbiAgICAgIGlmKCFfLmlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGFjYy5wdXNoKHYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGFsbC5sZW5ndGggPT09IG1hdGNoLmxlbmd0aCA/IF8ubGFzdChtYXRjaCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgc2tpcFByb3BIYW5kbGVycykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGRhdGEgPSBleHAuaW5jbHVkZXMoJyB8fCAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQW55KGV4cCkgOiBleHAuaW5jbHVkZXMoJyAmJiAnKSA/XG4gICAgICBzZXJ2aWNlLnBhcnNlQWxsKGV4cCkgOiBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgY29uc3QgdmFsMSA9IGZpZWxkUHJvcCA9PT0gJ2NvbmRpdGlvbicgPyB2YWwgKyAnJyA6IHZhbDtcbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZFByb3AsIGZpZWxkKS5zZXQodmFsMSk7XG5cbiAgICBpZighc2tpcFByb3BIYW5kbGVycykge1xuICAgICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgc2VydmljZS5zY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uO1xuICAgICAgICBpZihfLmlzU3RyaW5nKGZpZWxkLmNvbmRpdGlvbikpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgY29uZGl0aW9uIGlzbid0IGFscmVhZHkgd3JhcHBlZCBpbiBwYXJlbnMsIHdyYXAgaXRcbiAgICAgICAgICBjb25kaXRpb24gPSAvXlxcKC4qXFwpJC8udGVzdChmaWVsZC5jb25kaXRpb24pID9cbiAgICAgICAgICAgIGZpZWxkLmNvbmRpdGlvbiA6XG4gICAgICAgICAgICBgKCR7ZmllbGQuY29uZGl0aW9ufSlgO1xuICAgICAgICB9XG4gICAgICAgIGlmKF8uaXNTdHJpbmcod2F0Y2guY29uZGl0aW9uKSkge1xuICAgICAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbiA/XG4gICAgICAgICAgICBgJHtjb25kaXRpb259ICYmICR7d2F0Y2guY29uZGl0aW9ufWAgOlxuICAgICAgICAgICAgd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBpZihfLmlzU3RyaW5nKGN1ckNvbmRpdGlvbikgJiYgY3VyQ29uZGl0aW9uLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgYXJyYXlJbmRleCBjb3VsZCBub3QgYmUgcmVwYWxjZWQgZnJvbSBleHByZXNzaW9uICcke2N1ckNvbmRpdGlvbn0nYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICAvLyBieSB0aGlzIHBvaW50IGRlZmF1bHRzIHNob3VsZCBiZSBwcm9jZXNzZWQgc28gd2UgY2FuIGdldCB2YWx1ZSBkaXJlY3RseSBmcm9tIG1vZGVsXG4gICAgICBjb25zdCBjdXJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyVmFsKSkgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJWYWw7XG4gICAgfVxuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgb25BcnJheSA9IChjdXIsIHByZXYsIHJlb3JkZXIpID0+IHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dYDtcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIChmaWVsZCwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IGAke2FycktleX0ubGVuZ3RoYDtcbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSkge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtvbkFycmF5XSxcbiAgICAgICAgcHJldjogYXJyVmFsID8gYXJyVmFsLmxlbmd0aCA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckhhbmRsZXJzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgZGVsZXRlIHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9IHNlcnZpY2Uuc2NvcGUuJHdhdGNoKFxuICAgICAgKCkgPT4gc2VydmljZS5tb2RlbCxcbiAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJlxuICAgICAgICAgICAgIWlzSW5pdEFycmF5ICYmXG4gICAgICAgICAgICB2YWwgIT09IG51bGwvKiAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKHZhbCwgc2VydmljZS5nZXREZWZhdWx0KGtleSkpKi8pIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgIHNlcnZpY2UuaW5jcmVtZW50VXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmKF8uaXNGdW5jdGlvbihzZXJ2aWNlLnJlZnJlc2hTY2hlbWEpKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2NoZW1hUGFyYW1zKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyLCBrZXkpIHtcbiAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcEluZGV4ZXMoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBcnJheUNvcHlXYXRjaCgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goc2VydmljZS5zY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZm9ybSB9ID0gc2NvcGU7XG4gICAgICBpZighZm9ybS5rZXkpIHtcbiAgICAgICAgZm9ybS5jYWNoZUtleSA9IGAke2Zvcm0udHlwZX0tJHtfLnVuaXF1ZUlkKCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IGZvcm0uY2FjaGVLZXkgfHwgc2VydmljZS5nZXRLZXkoZm9ybS5rZXkpO1xuXG4gICAgICBpZihfLmlzTnVtYmVyKHNjb3BlLmFycmF5SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzY29wZS5hcnJheUluZGV4O1xuICAgICAgICBmb3JtLmFycmF5SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZighc2VydmljZS5nZXRBcnJheUNvcHkoZ2VuZXJpY0tleSwgaW5kZXgpKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmb3JtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmb3JtLmNvbmRpdGlvbikgZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY29uZGl0aW9uLmluY2x1ZGVzKFwiYXJyYXlJbmRleFwiKSkge1xuICAgICAgICAgIGZvcm0uY29uZGl0aW9uID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChmb3JtLmNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBjb25zdCB1bmluZGV4ZWRLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcblxuICAgICAgLy8gVE9ETyAtLSBub3Qgc3VyZSBpZiBnZXRBcnJheUNvcGllc0ZvciBpcyBhY3R1YWxseSBuZWNlc3NhcnlcbiAgICAgIC8vIHdlIHNob3VsZCBsb29rIGludG8gd2hlcmUgdGhpcyBmdW5jdGlvbiBtaWdodCBiZSBuZWVkZWQgYW5kXG4gICAgICAvLyBwb3RlbnRpYWxseSByZW1vdmUgaXRcbiAgICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXNGb3IodW5pbmRleGVkS2V5KTtcbiAgICAgIGlmKCFjb3BpZXMubGVuZ3RoKSBjb3BpZXMucHVzaChzZXJ2aWNlLmdldEFycmF5U2NvcGVzKHVuaW5kZXhlZEtleSkgfHwgW10pO1xuXG4gICAgICBjb3BpZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdCAmJiBsaXN0LnNwbGljZShzY29wZS5hcnJheUluZGV4LCAxKSk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICB2YXIgbGlzdCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLmZvcm0ubGluaywgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBcnJheUNvcHkoZm9ybSwga2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFpbmRleCB8fCBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICBpZighc2VydmljZS5hcnJheUNvcGllc1trZXldKSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0gPSBbXTtcbiAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV1baW5kZXhdID0gZm9ybTtcbiAgICAvL3NlcnZpY2UuYXJyYXlDb3BpZXNba2V5XS5wdXNoKGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3B5KGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gICAgcmV0dXJuIGNvcGllcyAmJiBjb3BpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXMoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ucGx1Y2soc2VydmljZS5nZXRBcnJheVNjb3BlcyhrZXkpLCAnZm9ybScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXlTdGFydCArPSAnW10nO1xuXG4gICAgcmV0dXJuIF8uZmlsdGVyKHNlcnZpY2UuYXJyYXlDb3BpZXMsIChjb3B5LCBrZXkpID0+IGtleS5pbmNsdWRlcyhrZXlTdGFydCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhY2hpbmcgZHVwbGljYXRlIHNjb3BlIGZvcicsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSA9IHNjb3BlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbVNjb3BlQ2FjaGUoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXkgPSBrZXkgfHwgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkpIHNlcnZpY2UuZm9ybUNhY2hlW2tleV0gPSBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Gb3JtQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9EYXRhQ2FjaGUoa2V5LCBtb2RlbFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldID0gbW9kZWxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRGF0YUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHJldHVybiBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hJbnRTdHJJbmRleChleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoLT9cXGQrfFwiLipcInwnLionKV0vKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICBsZXQgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgY29uc3QgcmVwbGFjZWQgPSBbXTtcblxuICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZWQucHVzaCh0b1JlcGxhY2UpO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCBgZmZfciR7cmVwbGFjZWQubGVuZ3RoIC0gMX1fZmZgKTtcbiAgICAgIFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXShbXltcXF1dKikvKTtcblxuICAgIHJldHVybiBtYXRjaCAmJlxuICAgICAgcmVwbGFjZWQubGVuZ3RoID9cbiAgICAgIG1hdGNoLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGxldCBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlZFtpbmRleF0pO1xuICAgICAgICAgIFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgICB9KSA6XG4gICAgICBtYXRjaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24obmVzdGVkLCBkZXB0aCkuZ2V0KCk7XG4gICAgICBjb25zdCBrZXlWYWwgPSBfLmlzVW5kZWZpbmVkKHBhcnNlZCkgP1xuICAgICAgICAnJyA6XG4gICAgICAgIF8uaXNTdHJpbmcocGFyc2VkKSA/XG4gICAgICAgICAgYFwiJHtwYXJzZWR9XCJgIDpcbiAgICAgICAgICBwYXJzZWQ7XG4gICAgICBleHAgPSBleHAucmVwbGFjZShgWyR7bmVzdGVkfV1gLCBgWyR7a2V5VmFsfV1gKTtcbiAgICAgIFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7IFxuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa2V5KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfLmVhY2goY2hpbGRLZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgc2tpcEtleXMucHVzaChrKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZWRDaGlsZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrLCBbaW5kZXgsIGldKTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZENoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXNraXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24sIHNlY29uZFBhc3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgd2UncmUgaGVyZSBiZWNhdXNlIGEgcGFyZW50J3Mgc2NvcGUgd2FzIGVtaXR0ZWQsXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47XG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXM7XG4gICAgICBjb25zdCBwYXJhbXNLZXlzID0gXy5rZXlzKHF1ZXJ5UGFyYW1zKTtcbiAgICAgIHNlbGVjdC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSBmdW5jdGlvbihxKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IF8ocGFyYW1zS2V5cylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgIGFjY1txdWVyeVBhcmFtc1trZXldXSA9IHE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihxdWVyeVBhcmFtc1trZXldKS5nZXQoKTtcbiAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHdyYXAgaW4gc3RyaW5nIHNvIHJldHVybnMgdHJ1dGh5IHdoZW4gY29tcGlsZWQsIGJ1dCBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdpdGhpbiBkaXJlY3RpdmVcbiAgICAgIGlmKCFwYXJhbXNLZXlzLmxlbmd0aCkgc2VsZWN0Lm1pbkxvb2t1cCA9ICcwJztcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VsZWN0Lml0ZW1zLCAoaSkgPT4gaS5kZXN0cm95U3RyYXRlZ3kgPSBcInJldGFpblwiKTtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgICBzZWxlY3QuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgc2VydmljZS5zY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7XG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLFxuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmKHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH1cblxuICAgIHNlbGVjdERpc3BsYXkuc2VsZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdEZpZWxkLmtleSwgaGFuZGxlciwgc2VsZWN0RmllbGQudXBkYXRlU2NoZW1hLCB0cnVlKTtcbiAgICAvL3NlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSBzZXJ2aWNlLnNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9IHNlcnZpY2Uuc2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgc2VydmljZS5yZWZyZXNoU2NoZW1hID0gXy5kZWJvdW5jZSh1cGRhdGVTY2hlbWEgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAuLi5jbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKHNlcnZpY2UuZ2V0UGFyYW1PdmVycmlkZXMoKSksXG4gICAgICAgIC4uLnNlcnZpY2UucGFyYW1zXG4gICAgICB9O1xuICAgICAgbGV0IGRpZmYgPSBfLm9taXQoY25VdGlsLmRpZmYoc2VydmljZS5zY2hlbWEucGFyYW1zLCBwYXJhbXMsIHRydWUsICdkZWxldGUnKSwgJ3VwZGF0ZXMnKTtcbiAgICAgIGxldCBrZXlzO1xuXG4gICAgICBpZighXy5pc0VtcHR5KGRpZmYpIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgWyd1cGRhdGVTY2hlbWEnLCAndXBkYXRlcyddKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgICAgLy9zZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaChzZXJ2aWNlLnNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgcmVnaXN0ZXIuZXhwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLnNjaGVtYSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOnNjaGVtYScsIHNjaGVtYS5kaWZmLnNjaGVtYSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5zY2hlbWEsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgICBjb25zdCBjdXJLZXlzID0gXy5maWx0ZXIoa2V5cywgayA9PiBrLmluY2x1ZGVzKGtleSkpO1xuICAgICAgICAgIF8uZWFjaChjdXJLZXlzLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybXMgPSBfLmNvbXBhY3QoW1xuICAgICAgICAgICAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0sXG4gICAgICAgICAgICAgIHNlcnZpY2UuZm9ybUNhY2hlW2tleV1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBfLmVhY2goZm9ybXMsIGZvcm0gPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmV2U2NoZW1hID0gZm9ybS5zY2hlbWE7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYSAgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXksIHsgW2tleV06IHNjaGVtYSB9KTtcbiAgICAgICAgICAgICAgaWYocHJldlNjaGVtYS5yZWFkb25seSAmJiAhbmV3U2NoZW1hLnJlYWRvbmx5KSBmb3JtLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllc1trZXldID0gc2NoZW1hO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICAvL3NlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICBzZXJ2aWNlLnNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChfLmdldChzZXJ2aWNlLCAnZXJyb3JzJykpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHNlcnZpY2Uuc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIC9cXFsoXFxkKilcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBrZXlDb3B5O1xuICAgIGlmICghXy5pc0FycmF5KGluZGV4KSkge1xuICAgICAgaW5kZXggPSBbaW5kZXhdO1xuICAgIH1cbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHdoaWxlIChpbmRleC5sZW5ndGggJiYga2V5Q29weS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICBsZXQgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4LnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudFVwZGF0ZXMoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9ICB0aGlzO1xuICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgIHNlcnZpY2UucGFyYW1zLnVwZGF0ZXMgPSBzZXJ2aWNlLnVwZGF0ZXM7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3RwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxNYXAgPSB7fTtcbmNvbnN0IHByb21pc2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0UHJvbWlzZXMoc3RhdGUpIHtcbiAgaWYocHJvbWlzZU1hcFtzdGF0ZV0pIHJldHVybiBwcm9taXNlTWFwW3N0YXRlXTtcblxuICBjb25zdCBwcm9taXNlID0ge307XG4gIHByb21pc2VNYXBbc3RhdGVdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSkge1xuICBjb25zdCBwcm9taXNlcyA9IGdldFByb21pc2VzKHN0YXRlKTtcbiAgaWYocHJvbWlzZXNbaWRdKSByZXR1cm4gcHJvbWlzZXNbaWRdO1xuXG4gIGNvbnN0IHByb21pc2UgPSAkcS5kZWZlcigpO1xuICBwcm9taXNlc1tpZF0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKCkge1xuXG4gIHJldHVybiB7XG4gICAgYWRkTWFwcGluZyxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkTWFwcGluZyhzdGF0ZSwgZGVmKSB7XG4gICAgZGVmLnJlc29sdmUgPSB7IHBhcmVudCB9O1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IGRlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmVudCgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiAoXG4gICAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCB9KSA9PiBwYXJlbnQpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlKCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGdldE1hcHBpbmcsXG4gICAgcmVzb2x2ZU1hcHBpbmcsXG4gICAgcmVtb3ZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICAvLyBIb2xkaW5nIG9uIHRvIHNjb3BlIHJlZmVyZW5jZXMgY3JlYXRlcyBtZW1vcnkgbGVha3NcbiAgZnVuY3Rpb24gcmVtb3ZlTWFwcGluZyhzdGF0ZSkge1xuICAgIG1vZGFsTWFwW3N0YXRlXSA9IG51bGw7XG4gICAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBGbGV4Rm9ybU1vZGFsTG9hZGVyKEZsZXhGb3JtTW9kYWwsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBGRk1vZGFsTG9hZGVyVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gRkZNb2RhbExvYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICBhY3RpdmF0ZSgpO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBGbGV4Rm9ybU1vZGFsXG4gICAgICAub3Blbih2bSlcbiAgICAgIC50aGVuKCh7IG1vZGFsLCBvcHRpb25zOiB7IG9uRGlzbWlzcywgb25BZnRlckRpc21pc3MgfSB9KSA9PiB7XG4gICAgICAgIHZtLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHZtLm1vZGFsLnJlc3VsdC5maW5hbGx5KGdvQmFjayk7XG5cbiAgICAgICAgaWYob25EaXNtaXNzKSB2bS5tb2RhbC5yZXN1bHQuY2F0Y2goKCkgPT4gb25EaXNtaXNzKCRzdGF0ZVBhcmFtcy5yZXN0UGFyYW1zKSk7XG4gICAgICAgIHZtLmRpc21pc3NFdmVudCA9ICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGRpc21pc3NNb2RhbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZighJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICRzdGF0ZS5nbygnXicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc21pc3NNb2RhbCgpIHtcbiAgICAvLyB1bmJpbmQgZXZlbnRcbiAgICB2bS5kaXNtaXNzRXZlbnQoKTtcbiAgICB2bS5tb2RhbC5vcGVuZWQudGhlbigoKSA9PlxuICAgICAgICB2bS5tb2RhbC5kaXNtaXNzKClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPCEtLSB3ZSBwcm9jZXNzIGRlZmF1bHRzIG91cnNlbHZlcywgaGVuY2Ugc2V0U2NoZW1hRGVmYXVsdHM6IGZhbHNlIC0tPlxuICAgICAgICA8bmctZm9ybVxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLW9wdGlvbnM9XCJ7IHNldFNjaGVtYURlZmF1bHRzOiBmYWxzZSB9XCJcbiAgICAgICAgICBzZi1zY2hlbWE9XCJ2bS5jb25maWcuc2NoZW1hLnNjaGVtYVwiXG4gICAgICAgICAgc2YtZm9ybT1cInZtLmZvcm1cIlxuICAgICAgICAgIHNmLW1vZGVsPVwidm0ubW9kZWxcIj5cbiAgICAgICAgPC9uZy1mb3JtPlxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XG4gICAgICAgIDxzZWN0aW9uIG5nLWlmPVwidm0uZGVidWdcIj5cbiAgICAgICAgICA8anNvbi1leHBsb3JlciBqc29uLWRhdGE9XCJ2bS5tb2RlbCB8fCAnLi4ubW9kZWwgbm90IGxvYWRlZCB5ZXQnXCIvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBjbkZsZXhGb3JtVGFnKCk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgdm0uc2VydmljZSA9IHVuZGVmaW5lZDtcbiAgdm0uZXZlbnRzID0gW107XG5cbiAgdm0uYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbiAgdm0uY2xlYW51cCA9IGNsZWFudXA7XG4gIHZtLnByb2Nlc3MgPSBwcm9jZXNzO1xuICB2bS5zaG93Rm9ybSA9IHNob3dGb3JtO1xuXG4gIHZtLmV2ZW50cy5wdXNoKCRzY29wZS4kd2F0Y2goKCkgPT4gdm0uY29uZmlnLnNjaGVtYSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGdldFNjb3BlOiB2bS5jb25maWcuZ2V0U2NvcGUgfHwgKCgpID0+ICRzY29wZSksXG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG5cbiAgICBjbkZsZXhGb3JtU2VydmljZS5kZXN0cm95U2VydmljZSh2bS5zZXJ2aWNlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgLy9hY3RpdmF0ZSgpO1xuICAvLyRzY29wZS4kb24oJyRkZXN0cm95JywgY2xlYW51cCk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy50aXRsZScsIGluaXRUaXRsZSwgdHJ1ZSk7XG4gICRzY29wZS4kd2F0Y2goJ3ZtLmNvbmZpZy5hY3Rpb25Db25maWcnLCBpbml0QWN0aW9uQ29uZmlnLCB0cnVlKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGluaXRUaXRsZSgpIHtcbiAgICAoeyB0aXRsZTogdm0udGl0bGUgfSA9IHZtLmNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWN0aW9uQ29uZmlnKCkge1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=