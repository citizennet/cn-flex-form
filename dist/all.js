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
	      return _.chain($stateParams).omit(ignoreParams).omit(function (v) {
	        return _.isUndefined(v) || _.isNull(v);
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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <ol sf-array="form"\n            class="list-group cn-autocomplete-list"\n            ng-show="modelArray.length"\n            ng-model="modelArray">\n          <li class="list-group-item {{form.fieldHtmlClass}}"\n              ng-repeat="item in modelArray track by $index">\n            <button ng-hide="form.readonly || form.remove === null"\n                    ng-click="deleteFromArray($index)"\n                    type="button" class="close pull-right">\n              <span aria-hidden="true">&times;</span>\n            </button>\n            <sf-decorator form="copyWithIndex($index)"/>\n          </li>\n        </ol>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-currency.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key.join(\'.\')}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <label class="input-group-addon"\n                 ng-disabled="form.readonly"\n                 for="{{form.key.join(\'.\')}}">$</label>\n          <input class="form-control"\n                 cn-currency-format="{{form.currencyFormat}}"\n                 cn-currency-placeholder="{{form.placeholder}}"\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="text"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key.join(\'.\')}}"\n                 name="{{form.key.join(\'.\')}}"\n                 ng-model="$$value$$">\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radios.html', '<div class="form-group {{form.htmlClass}}"\n            ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n         <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n         <div class="btn-group clearfix">\n           <label class="radio radio-block"\n                  ng-repeat="item in form.titleMap">\n             <input type="radio"\n                    sf-changed="form"\n                    ng-disabled="form.readonly"\n                    ng-model="$$value$$"\n                    ng-model-options="form.ngModelOptions"\n                    schema-validate="form"\n                    ff-validate="form"\n                    ng-value="item.value"\n                    name="{{form.key.join(\'.\')}}">\n             <span class="radio-block-icon" ng-if="item.iconClass">\n               <i class="fa fa-{{item.iconClass}} fa-lg"></i>\n             </span>\n             <span ng-bind-html="item.name"></span>\n           </label>\n         </div>\n         <span class="help-block" sf-message="form.description"></span>\n       </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-radiobuttons.html', '\n      <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n        <div class="btn-group clearfix">\n          <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\n                 ng-repeat="item in form.titleMap">\n            <input type="radio"\n                   class="{{form.fieldHtmlClass}} hide"\n                   sf-changed="form"\n                   ng-disabled="form.readonly"\n                   ng-model="$$value$$"\n                   ng-model-options="form.ngModelOptions"\n                   schema-validate="form"\n                   ff-validate="form"\n                   ng-value="item.value"\n                   name="{{form.key.join(\'.\')}}">\n            <i class="fa fa-{{item.value}} fa-lg"></i>\n            <span ng-bind-html="item.name"></span>\n          </label>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-percentage.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <div class="{{form.fieldClass}} input-group">\n          <input class="form-control"\n                 cn-percentage-format\n                 ng-show="form.key"\n                 ng-model-options="form.ngModelOptions"\n                 ng-disabled="form.readonly"\n                 sf-changed="form"\n                 schema-validate="form"\n                 type="number"\n                 step="any"\n                 min="{{form.min}}"\n                 max="{{form.max}}"\n                 id="{{form.key && form.key[0]}}"\n                 name="{{form.key && form.key[0]}}"\n                 ng-model="$$value$$">\n           <div class="input-group-addon"\n                  ng-disabled="form.readonly"\n                  for="{{form.key && form.key[0]}}">%</div>\n        </div>\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-display.html', '\n      <div class="form-group cn-display{{form.htmlClass}}">\n        <input ng-show="form.key"\n               class="form-control"\n               id="{{form.key.join(\'.\')}}"\n               name="{{form.key.join(\'.\')}}"\n               ng-disabled="true"\n               value="{{form.getDisplay(form.key, form.arrayIndex)}}">\n      </div>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n      <fieldset \n        ng-disabled="form.readonly"\n        class="schema-form-fieldset {{form.htmlClass}}"\n        ng-class="{\'borderless\': form.pos === 0}">\n        <legend ng-click="form.toggleCollapse(form)"\n                ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                ng-mouseenter="form.render = true">\n          <i ng-show="form.collapsible"\n             class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n          {{ form.title }}\n        </legend>\n        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n        <div uib-collapse="form.collapsed">\n          <div ng-if="form.render">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </div>\n        </div>\n      </fieldset>');
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <media-upload ng-model="$$value$$"\n                      cn-disabled="form.readonly"\n                      cn-file-type="form.fileType"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </media-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
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
	CNFlexFormService.$inject = ["Api", "$parse", "cnFlexFormConfig", "cnFlexFormTypes", "sfPath", "$interpolate", "$rootScope", "$timeout", "cnUtil", "$stateParams"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var fieldPropHandlers = [{
	  prop: 'resolve',
	  handler: function handler(field, service) {
	    return service.processResolve(field);
	  }
	}, {
	  prop: 'selectDisplay',
	  handler: function handler(field, service) {
	    return service.processSelectDisplay(field);
	  }
	}, {
	  prop: 'watch',
	  handler: function handler(field, service) {
	    return field.watch && service.processFieldWatch(field);
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
	  prop: 'default',
	  handler: function handler(field, service) {
	    return service.processDefault(field);
	  }
	}, {
	  prop: 'schema',
	  handler: function handler(field, service) {
	    return _.isUndefined(field.default) && !_.isUndefined(field.schema.default) && service.processDefault(field);
	  }
	}, {
	  prop: 'updateSchema',
	  handler: function handler(field, service) {
	    return service.registerHandler(field, null, field.updateSchema);
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
	
	function CNFlexFormService(Api, $parse, cnFlexFormConfig, cnFlexFormTypes, sfPath, $interpolate, $rootScope, $timeout, cnUtil, $stateParams) {
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
	    parseCondition: parseCondition,
	    parseExpression: parseExpression,
	    processArray: processArray,
	    processDefault: processDefault,
	    processDisplay: processDisplay,
	    processField: processField,
	    processFieldset: processFieldset,
	    processFieldProps: processFieldProps,
	    processFieldType: processFieldType,
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
	
	    this.params = cnFlexFormConfig.getStateParams();
	
	    this._ = _;
	
	    this.compile(schema, model, config);
	  }
	
	  _.extend(CNFlexForm.prototype, prototype);
	  _.extend(CNFlexFormConstructor, prototype, { getService: getService, destroyService: destroyService });
	
	  return CNFlexFormConstructor;
	
	  //////////////
	
	  function compile(schema, model, config) {
	    var service = this;
	
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
	    // if default is returned for new form, treat it as a previous param in order to not trigger unnecessary updateSchema
	    if (!service.updates && field.updateSchema && angular.isDefined(curDefault) && !service.schema.params[key]) {
	      service.schema.params[key] = curDefault;
	    }
	
	    // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
	    //if(service.updates || field.default) {
	    if (!_.isUndefined(curDefault)) {
	      if (key.includes && key.includes('[]')) return;
	      var model = service.parseExpression(field.key, service.model);
	      var modelValue = model.get();
	      // if there's an existing default and it's the same as the current value
	      // update the current value to the new default
	      if ((_.has(service.defaults, key) ? angular.equals(modelValue, service.defaults[key]) : _.isTrulyEmpty(modelValue)) && !angular.equals(modelValue, curDefault)) {
	        //if ((
	        //(!_.has(service.defaults, key) && _.isTrulyEmpty(modelValue)) ||
	        //(_.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key]))
	        //) && !angular.equals(modelValue, curDefault)) {
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
	        if (field.readonly && !schema.readonly) field.readonly = false;
	        if (schema.type === 'array' && !('showClearAll' in field)) field.showClearAll = true;
	      }
	
	      service.processSchema(field);
	    }
	
	    service.processFieldProps(field);
	
	    if (key) {
	      (function (key) {
	        if (_.find(service.errors, { key: key })) {
	          service.errors = _.reject(service.errors, { key: key });
	          $rootScope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
	          $rootScope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
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
	
	  function handleResolve(field, fieldProp, exp, skipPropHandlers) {
	    var service = this;
	    var data = void 0;
	    // does declarative/functional outweigh performance?
	    if (exp.includes(' || ')) {
	      var eithers = exp.split(' || ');
	      for (var i = 0, l = eithers.length; i < l; i++) {
	        var x = service.parseExpression(eithers[i]).get();
	        if (angular.isDefined(x)) {
	          data = x;
	          break;
	        }
	      }
	    } else if (exp.includes(' && ')) {
	      var all = exp.split(' && ');
	      for (var _i = 0, _l = all.length; _i < _l; _i++) {
	        var _x = service.parseExpression(all[_i]).get();
	        if (angular.isDefined(_x)) data = _x;else {
	          data = undefined;
	          break;
	        }
	      }
	    } else {
	      data = service.parseExpression(exp).get();
	    }
	
	    // if we're resolving from model but defaults haven't been applied yet, resolve from default itself
	    if (!data && exp.indexOf('model.') === 0) {
	      var key = exp.replace('model.', '');
	      var genericKey = stripIndexes(key);
	      var cachedField = service.getFromFormCache(key) || service.getFromFormCache(genericKey);
	
	      data = function () {
	        if (cachedField && cachedField.default) return cachedField.default;
	        if (angular.isDefined(field.default)) return field.default;
	        var schema = service.getSchema(genericKey);
	        if (schema) return schema.default;
	      }();
	    }
	
	    if (data && data.cursor) {
	      field.loadMore = function () {
	        var dataProp = exp.match(/schema\.data\.(.+)/)[1];
	        service.refreshSchema('data:' + dataProp + ':' + data.cursor);
	      };
	    } else {
	      delete field.loadMore;
	    }
	
	    var val = data && data.data ? data.data : data;
	    service.parseExpression(fieldProp, field).set(val);
	
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
	          $rootScope.$broadcast('schemaFormValidate');
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
	        var condition = watch.condition;
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
	
	    service.modelWatch = $rootScope.$watch(function () {
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
	          service.refreshSchema();
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
	
	    service.events.push($rootScope.$on('schemaFormPropagateFormController', function (event, scope) {
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
	
	    service.events.push($rootScope.$on('schemaFormDeleteFormController', function (event, scope, index) {
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
	      var key = select.titleMapQuery.params.q;
	      select.titleQuery = function (q) {
	        var params = {};
	        if (key) {
	          params[key] = q;
	        }
	        return Api.get({
	          url: select.titleMapQuery.url,
	          params: params
	        });
	      };
	
	      // wrap in string so returns truthy when compiled, but converted to number within directive
	      if (!key) select.minLookup = '0';
	
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
	        $rootScope.$on('cnFlexFormDiff:data', function (e, data) {
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
	    var once = $rootScope.$on('flexFormArrayCopyAdded', function (event, key) {
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
	    var resetCount = $rootScope.$on('flexForm.updatePage', function () {
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
	      var params = _.extend(cnFlexFormConfig.getStateParams(), service.params);
	      var diff = _.omit(cnUtil.diff(service.schema.params, params, true), 'updates');
	      var keys;
	
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
	
	    service.events.push($rootScope.$on('ffRefreshData', service.refreshData));
	  }
	
	  function processUpdatedSchema(schema) {
	    var service = this;
	    if (schema.diff) {
	      service.schema.params = schema.params;
	
	      if (schema.diff.data) {
	        $rootScope.$broadcast('cnFlexFormDiff:data', schema.diff.data);
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
	        $rootScope.$broadcast('cnFlexFormDiff:schema', schema.diff.schema);
	        _.each(schema.diff.schema, function (schema, key) {
	          service.schema.schema.properties[key] = schema;
	          reprocessSchema(schema, key, keys);
	        });
	      }
	
	      if (schema.diff.form) {
	        $rootScope.$broadcast('cnFlexFormDiff:form', schema.diff.form);
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
	
	    service.deregisterHandlers(key);
	
	    $rootScope.$broadcast('cnFlexFormReprocessField', key);
	
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
	      service.errors.forEach(function (error) {
	        $rootScope.$broadcast('schemaForm.error.' + error.key, 'serverValidation', error.message);
	      });
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
	    } else {
	      return (/\[(\d+)\]/.exec(key)[1]
	      );
	    }
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
	
	    console.info(':: RESOLVE MAPPING CALLED ::');
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
	    vm.modal.dismiss();
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
	    template: '\n      <div ng-if="vm.showForm()">\n        <ng-form\n          class="clearfix"\n          name="{{vm.formName}}"\n          sf-schema="vm.config.schema.schema"\n          sf-form="vm.form"\n          sf-model="vm.model">\n        </ng-form>\n        <!-- debug panel to display model -->\n        <section ng-if="vm.debug">\n          <json-explorer json-data="vm.model || \'...model not loaded yet\'"/>\n        </section>\n      </div>\n    ',
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
	
	  activate();
	
	  ///////////
	
	  function activate() {
	    vm.title = vm.config.title;
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNmM0ZWVkZmJiMWNlYWFkYTIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJfIiwiY2hhaW4iLCJvbWl0IiwidiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwidmFsdWUiLCJjbkZsZXhGb3JtVHlwZXNQcm92aWRlciIsImZpZWxkVHlwZVJlZ2lzdGVyIiwiY29uZGl0aW9uIiwiZmllbGQiLCJ0eXBlIiwiaW5jbHVkZXMiLCJ0aXRsZU1hcCIsInRpdGxlTWFwUmVzb2x2ZSIsInRpdGxlTWFwUXVlcnkiLCJzY2hlbWEiLCJmb3JtYXQiLCJyZWdpc3RlckZpZWxkVHlwZSIsImNuRmxleEZvcm1UeXBlcyIsImZpZWxkVHlwZSIsInVuc2hpZnQiLCJnZXRGaWVsZFR5cGUiLCJpIiwibCIsImxlbmd0aCIsImNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciIsIiRzdGF0ZVByb3ZpZGVyIiwiYWRkU3RhdGVzIiwicGVybWlzc2lvbnMiLCJzaGFyZWQiLCJjb250cm9sbGVyQXMiLCJzdGF0ZSIsInVybCIsImNuRmxleEZvcm1Sb3V0ZXMiLCJ0ZW1wbGF0ZVVybCIsInNjaGVtYUZvcm1Db25maWciLCJjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIiwidHY0IiwiYWRkRm9ybWF0IiwiaXNTdHJpbmciLCJkYXRhIiwidGVzdCIsImV4dGVuc2lvbnMiLCJlYWNoIiwiZXh0ZW5zaW9uIiwicmVnaXN0ZXJGaWVsZCIsImFkZFRlbXBsYXRlcyIsIiR0ZW1wbGF0ZUNhY2hlIiwicHV0Iiwic2hhcmVkQXV0b2NvbXBsZXRlVHBsIiwid2luZG93IiwicmVxdWlyZSIsIk9iamVjdFBhdGgiLCJmaWVsZFR5cGVIYW5kbGVycyIsImZpZWxkUHJvcEhhbmRsZXJzIiwicHJvcCIsImhhbmRsZXIiLCJzZXJ2aWNlIiwicHJvY2Vzc1Jlc29sdmUiLCJwcm9jZXNzU2VsZWN0RGlzcGxheSIsIndhdGNoIiwicHJvY2Vzc0ZpZWxkV2F0Y2giLCJzZWNvbmRQYXNzIiwicHJvY2Vzc0ZpZWxkVHlwZSIsInByb2Nlc3NDb25kaXRpb25hbCIsInByb2Nlc3NEZWZhdWx0IiwiZGVmYXVsdCIsInJlZ2lzdGVySGFuZGxlciIsInVwZGF0ZVNjaGVtYSIsInNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIiLCJDTkZsZXhGb3JtU2VydmljZSIsImFkZE1hcHBpbmciLCJjcmVhdGVEaXJlY3RpdmUiLCJBcGkiLCIkcGFyc2UiLCJzZlBhdGgiLCIkaW50ZXJwb2xhdGUiLCIkcm9vdFNjb3BlIiwiJHRpbWVvdXQiLCJjblV0aWwiLCJzZXJ2aWNlcyIsInByb3RvdHlwZSIsImNvbXBpbGUiLCJhZGRBcnJheUNvcHkiLCJhZGRUb0RhdGFDYWNoZSIsImFkZFRvRm9ybUNhY2hlIiwiYWRkVG9TY29wZUNhY2hlIiwiYnJvYWRjYXN0RXJyb3JzIiwiYnVpbGRFcnJvciIsImNsZWFudXAiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0Rm9ybXNUb1Byb2Nlc3MiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluY3JlbWVudFVwZGF0ZXMiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VDb25kaXRpb24iLCJwYXJzZUV4cHJlc3Npb24iLCJwcm9jZXNzQXJyYXkiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGaWVsZCIsInByb2Nlc3NGaWVsZHNldCIsInByb2Nlc3NGaWVsZFByb3BzIiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlclJlc29sdmUiLCJyZXBsYWNlQXJyYXlJbmRleCIsInJlcHJvY2Vzc0ZpZWxkIiwicmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zIiwic2V0QXJyYXlJbmRleCIsInNldHVwQ29uZmlnIiwic2V0dXBBcnJheVNlbGVjdERpc3BsYXkiLCJzZXR1cFNlbGVjdERpc3BsYXkiLCJzZXR1cFNjaGVtYVJlZnJlc2giLCJzaWxlbmNlTGlzdGVuZXJzIiwic2tpcERlZmF1bHRzIiwiZ2V0U2VydmljZSIsImZuIiwiZmluZCIsImRlc3Ryb3lTZXJ2aWNlIiwiZW1wdHkiLCJyZW1vdmUiLCJzIiwiQ05GbGV4Rm9ybUNvbnN0cnVjdG9yIiwiYXJncyIsIm1vZGVsIiwiY3VyU2VydmljZSIsIm5ld1NlcnZpY2UiLCJDTkZsZXhGb3JtIiwiZGVidWciLCJhcnJheUNvcGllcyIsImFycmF5TGlzdGVuZXJzIiwiZGF0YUNhY2hlIiwiZGVmYXVsdHMiLCJlcnJvcnMiLCJldmVudHMiLCJmb3JtQ2FjaGUiLCJzY29wZUNhY2hlIiwibGlzdGVuZXJzIiwicmVzb2x2ZVJlZ2lzdGVyIiwidXBkYXRlcyIsInNraXBEZWZhdWx0IiwicGFyYW1zIiwiZXh0ZW5kIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsImdldFNjaGVtYUZvcm0iLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsImlzRGVmaW5lZCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJoYXMiLCJlcXVhbHMiLCJpc1RydWx5RW1wdHkiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsImdldE9nS2V5cyIsInJlamVjdCIsImtleXMiLCJfb2dLZXlzIiwiZGVzY3JpcHRpb24iLCJyZWFkb25seSIsInNob3dDbGVhckFsbCIsIiRicm9hZGNhc3QiLCJnZXREb3RLZXkiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsInJlZHVjZSIsInRvdGFsIiwibmV4dCIsImRlcHRoIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwic2hpZnQiLCJleHAiLCJ3YXRjaGFibGVzIiwibmVzdGVkIiwibWF0Y2hOZXN0ZWRFeHByZXNzaW9uIiwicmVwbGFjZVN0ciIsInJlcGxhY2UiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJhcnJheUluZGV4Iiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwic2tpcFByb3BIYW5kbGVycyIsImVpdGhlcnMiLCJzcGxpdCIsIngiLCJhbGwiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwiZ2VuZXJpY0tleSIsInN0cmlwSW5kZXhlcyIsImNhY2hlZEZpZWxkIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwidmFsIiwiZmllbGRLZXkiLCJyZWdpc3RlciIsImNvbmRpdGlvbmFscyIsInByZXYiLCJzY29wZSIsIm1hcCIsInBhdGgiLCJyZXNvbHV0aW9uIiwiY3VyIiwiYWRqdXN0bWVudCIsImRhdGUiLCJ1bml0cyIsInRyaW0iLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicmVzdWx0IiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImFjYyIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJpbmRleCIsIiRlbWl0IiwidW5pbmRleGVkS2V5IiwiY29waWVzIiwic3BsaWNlIiwibGluayIsInBsdWNrIiwia2V5U3RhcnQiLCJmaWx0ZXIiLCJjb25zb2xlIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiZ2V0QXJyYXlJbmRleCIsImtzIiwiayIsInNraXBLZXlzIiwiaW5kZXhlZEtleSIsImNoaWxkS2V5cyIsImluZGV4ZWRDaGlsZEtleSIsImFycmF5Iiwic29ydE9wdGlvbnMiLCJlIiwidWkiLCJzZWN0aW9uIiwiY29tcG9uZW50IiwiY29scyIsImN1cnJlbmN5Rm9ybWF0IiwidmlldyIsInJhZGlvcyIsImZ1bGxXaWR0aCIsImJ0bkNsYXNzIiwiZGl2aWRlIiwibWF4VmlldyIsImljb25DbGFzcyIsIm1vZGVsRm9ybWF0dGVyIiwibSIsIm11bHRpcGx5IiwiaG91cnMiLCJtaW51dGVzIiwibW9kZWxQYXJzZXIiLCJkIiwicGFyc2VJbnQiLCJzdGFydE9mIiwidmlld0Zvcm1hdHRlciIsImRhdGVGb3JtYXQiLCJ2aWV3UGFyc2VyIiwiZ2V0U2VsZWN0VmFsUHJvcCIsInNlbGVjdCIsInZhbHVlUHJvcGVydHkiLCJnZXRBbGxvd2VkU2VsZWN0VmFsdWUiLCJnZXRUaXRsZU1hcCIsInZhbFByb3AiLCJtYXBWYWwiLCJvbkluaXQiLCJzZXR0ZXIiLCJuZXdWYWwiLCJxIiwidGl0bGVRdWVyeSIsIm1pbkxvb2t1cCIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJkZXN0cm95U3RyYXRlZ3kiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwic2VsZWN0S2V5Iiwic3BsaXRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0VmFsdWUiLCJmb3JtQ29waWVzIiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsInNlbGVjdE1vZGVsIiwiaXRlbVZhbHVlIiwiY291bnQiLCJrZXlNYXAiLCJvbmNlIiwicmVzZXRDb3VudCIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJ0aGVuIiwicmVmcmVzaERhdGEiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImNhY2hlZCIsImN1cnJlbnQiLCJpc0NoaWxkIiwicmVkcmF3IiwibG9nIiwic3ViS2V5Iiwiam9pbiIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwicmVtb3ZlTWFwcGluZyIsImluZm8iLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsIiRzY29wZSIsIkZGTW9kYWxMb2FkZXJUYWciLCJfX3RhZyIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwib25BZnRlckRpc21pc3MiLCJmaW5hbGx5IiwiZ29CYWNrIiwiY2F0Y2giLCJyZXN0UGFyYW1zIiwiZGlzbWlzc0V2ZW50IiwiZGlzbWlzc01vZGFsIiwidHJhbnNpdGlvbiIsImdvIiwiZGlzbWlzcyIsIiR1aWJNb2RhbCIsImNuRmxleEZvcm0iLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZm9ybUluZGV4IiwiZm9ybU5hbWUiLCJkZWxheUZvcm0iLCJjbGVhbnVwRXZlbnQiLCJGbGV4Rm9ybSIsImJpbmRUb0NvbnRyb2xsZXIiLCJjbkZsZXhGb3JtU2VydmljZSIsIiRsb2NhdGlvbiIsImNuRmxleEZvcm1UYWciLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwiZmZIZWFkZXJUYWciLCJ1cGRhdGVEYXRhIiwiaXNEaXNhYmxlZCIsInRpdGxlIiwiYWN0aW9uQ29uZmlnIiwicmV0dXJuU3RhdGUiLCJyZXR1cm5TdHlsZSIsInJldHVyblRleHQiLCJjbG9zZUJ1dHRvbiIsImFjdGlvbnMiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwiZmZWYWxpZGF0ZVRhZyIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBRWVBLFFBQ1pDLE1BRFksQ0FDTCxjQURLLEVBQ1csQ0FDdEIsV0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsNkJBSHNCLEVBSXRCLGFBSnNCLEVBS3RCLFNBTHNCLENBRFgsRUFRWkMsUUFSWSxDQVFILGtCQVJHLDhCQVNaQSxRQVRZLENBU0gsaUJBVEcsNkJBVVpBLFFBVlksQ0FVSCxrQkFWRyx3Q0FXWkMsTUFYWSwrQkFZWkEsTUFaWSx5Q0FhWkMsR0FiWSxxQ0FjWkYsUUFkWSxDQWNILG1CQWRHLHdCQWVaQSxRQWZZLENBZUgsOEJBZkcsbUNBZ0JaRyxPQWhCWSxDQWdCSixlQWhCSSx5Q0FpQlpDLFVBakJZLENBaUJELHFCQWpCQywrQ0FrQlpDLFNBbEJZLENBa0JG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Z0I7QUFDdkU7QUFDQXNnQixlQUFRSSxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FKLGVBQVFJLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0MxZ0IsS0FBaEM7QUFDRCxNQUpEO0FBS0Q7QUFDRjs7bUJBRWNvZ0IsVSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY24tZmxleC1mb3JtXCIsIFtcImxvZGFzaFwiLCBcIm9iamVjdHBhdGhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyb290W1wibG9kYXNoXCJdLCByb290W1wib2JqZWN0cGF0aFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjZjNGVlZGZiYjFjZWFhZGEyMmYiLCJpbXBvcnQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciwgY25GbGV4Rm9ybVJvdXRlcyB9IGZyb20gJy4vY24tZmxleC1mb3JtLnJvdXRlcyc7XG5pbXBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfSBmcm9tICcuL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMnO1xuaW1wb3J0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0uc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXInO1xuaW1wb3J0IGNuRmxleEZvcm0gZnJvbSAnLi9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlJztcbmltcG9ydCBjbkZsZXhGb3JtSGVhZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IGZmVmFsaWRhdGUgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjb25zdCBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtQ29uZmlnXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRJZ25vcmVQYXJhbShwYXJhbSkge1xuICAgIGlnbm9yZVBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWcoJHN0YXRlUGFyYW1zKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMoKSB7XG4gICAgICByZXR1cm4gX1xuICAgICAgICAgIC5jaGFpbigkc3RhdGVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHYpIHx8IF8uaXNOdWxsKHYpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnZhbHVlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiLy9hbmd1bGFyLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgICAvLy5ydW4oYWRkVGVtcGxhdGVzKTtcblxuZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnXG4gIF07XG5cbiAgXy5lYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIucmVnaXN0ZXJGaWVsZCh7XG4gICAgICB0eXBlOiBleHRlbnNpb24sXG4gICAgICB0ZW1wbGF0ZVVybDogYGFwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy8ke2V4dGVuc2lvbn0uaHRtbGBcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAnbmdJbmplY3QnO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdG9nZ2xlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgICAgPGNuLXRvZ2dsZS1zd2l0Y2hcbiAgICAgICAgICAgIGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uLXZhbHVlPVwiZm9ybS5vblZhbHVlXCJcbiAgICAgICAgICAgIG9mZi12YWx1ZT1cImZvcm0ub2ZmVmFsdWVcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSlcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0udGl0bGVRdWVyeSA/IHRydWUgOiBmYWxzZX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwIHx8IChmb3JtLnRpdGxlUXVlcnkgJiYgMyB8fCAwKX19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxvbCBzZi1hcnJheT1cImZvcm1cIlxuICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0ge3tmb3JtLmZpZWxkSHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDB9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jc3Z1cGxvYWQnOiAncHJvY2Vzc0NzdlVwbG9hZCcsXG4gICdjbi1yZXVzYWJsZSc6ICdwcm9jZXNzUmV1c2FibGUnLFxuICAnY24tdG9nZ2xlJzogJ3Byb2Nlc3NUb2dnbGUnLFxuICAnY24tdGFibGUnOiAncHJvY2Vzc1RhYmxlJyxcbiAgJ2NvbXBvbmVudCc6ICdwcm9jZXNzQ29tcG9uZW50JyxcbiAgJ3NlY3Rpb24nOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAndGFiYXJyYXknOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAnYXJyYXknOiAncHJvY2Vzc0FycmF5J1xufTtcblxuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PlxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkcm9vdFNjb3BlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTZXJ2aWNlKGZuKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGdldFNlcnZpY2UoZm4pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgIF8uZW1wdHkoc2VydmljZSk7XG4gICAgICBfLnJlbW92ZShzZXJ2aWNlcywgKHMpID0+IHMgPT09IHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKCk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSwgZGVzdHJveVNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZiAoc2VydmljZS5za2lwRGVmYXVsdFtrZXldKSB7XG4gICAgICBkZWxldGUgc2VydmljZS5za2lwRGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBkZWZhdWx0IGlzIHJldHVybmVkIGZvciBuZXcgZm9ybSwgdHJlYXQgaXQgYXMgYSBwcmV2aW91cyBwYXJhbSBpbiBvcmRlciB0byBub3QgdHJpZ2dlciB1bm5lY2Vzc2FyeSB1cGRhdGVTY2hlbWFcbiAgICBpZighc2VydmljZS51cGRhdGVzICYmIGZpZWxkLnVwZGF0ZVNjaGVtYSAmJiBhbmd1bGFyLmlzRGVmaW5lZChjdXJEZWZhdWx0KSAmJiAhc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0pIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyRGVmYXVsdDtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpID8gYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSA6IF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSAmJlxuICAgICAgICAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdCkpIHtcbiAgICAgIC8vaWYgKChcbiAgICAgICAgLy8oIV8uaGFzKHNlcnZpY2UuZGVmYXVsdHMsIGtleSkgJiYgXy5pc1RydWx5RW1wdHkobW9kZWxWYWx1ZSkpIHx8XG4gICAgICAgIC8vKF8uaGFzKHNlcnZpY2UuZGVmYXVsdHMsIGtleSkgJiYgYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSlcbiAgICAgIC8vKSAmJiAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdCkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoZmllbGQucmVhZG9ubHkgJiYgIXNjaGVtYS5yZWFkb25seSkgZmllbGQucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT5cbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgZmlyc3QgPSBrZXlbMF07XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgZGF0YTtcbiAgICAvLyBkb2VzIGRlY2xhcmF0aXZlL2Z1bmN0aW9uYWwgb3V0d2VpZ2ggcGVyZm9ybWFuY2U/XG4gICAgaWYoZXhwLmluY2x1ZGVzKCcgfHwgJykpIHtcbiAgICAgIGxldCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZWl0aGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGVpdGhlcnNbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkge1xuICAgICAgICAgIGRhdGEgPSB4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoZXhwLmluY2x1ZGVzKCcgJiYgJykpIHtcbiAgICAgIGxldCBhbGwgPSBleHAuc3BsaXQoJyAmJiAnKTtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhbGwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhbGxbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkgZGF0YSA9IHg7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkYXRhID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSByZXNvbHZpbmcgZnJvbSBtb2RlbCBidXQgZGVmYXVsdHMgaGF2ZW4ndCBiZWVuIGFwcGxpZWQgeWV0LCByZXNvbHZlIGZyb20gZGVmYXVsdCBpdHNlbGZcbiAgICBpZighZGF0YSAmJiBleHAuaW5kZXhPZignbW9kZWwuJykgPT09IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGV4cC5yZXBsYWNlKCdtb2RlbC4nLCAnJyk7XG4gICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICBjb25zdCBjYWNoZWRGaWVsZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHx8IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShnZW5lcmljS2V5KTtcblxuICAgICAgZGF0YSA9ICgoKSA9PiB7XG4gICAgICAgIGlmKGNhY2hlZEZpZWxkICYmIGNhY2hlZEZpZWxkLmRlZmF1bHQpXG4gICAgICAgICAgcmV0dXJuIGNhY2hlZEZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpKVxuICAgICAgICAgIHJldHVybiBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShnZW5lcmljS2V5KTtcbiAgICAgICAgaWYoc2NoZW1hKSByZXR1cm4gc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9KSgpO1xuICAgIH1cblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbCA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkUHJvcCwgZmllbGQpLnNldCh2YWwpO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgKGRheXN8aG91cnMpLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHtcbiAgICAgICAgICAgICAgdmFsOiBhZGp1c3RtZW50LmRhdGVbMV0sXG4gICAgICAgICAgICAgIHVuaXRzOiBhZGp1c3RtZW50LmRhdGVbMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZS52YWwsICcnKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5tYXRoID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcK3xcXC18XFwvfFxcKikgPyhcXFMrKS8pO1xuXG4gICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5vcGVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICAnKyc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICctJzogJ3N1YnRyYWN0JyxcbiAgICAgICAgICAgICAgICAnKic6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgJy8nOiAnZGl2aWRlJ1xuICAgICAgICAgICAgICB9W2FkanVzdG1lbnQubWF0aFsxXV07XG5cbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5hZGp1c3RlciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFkanVzdG1lbnQubWF0aFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ubWF0Y2goLyhcXFMrKSA/PSA/KFxcUyspLyk7XG5cbiAgICAgICAgICBoYW5kbGVyID0gKHZhbCwgcHJldiwga2V5LCB0cmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gY29uZGl0aW9uICYmIHJlcGxhY2VBcnJheUluZGV4KGNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVQYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsxXSwga2V5KTtcbiAgICAgICAgICAgIGxldCBmcm9tUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMl0sIGtleSk7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih1cGRhdGVQYXRoKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgbG9vcCB3aGVyZSB0d28gd2F0Y2hlcyBrZWVwIHRyaWdnZXJpbmcgZWFjaCBvdGhlclxuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gdXBkYXRlLnBhdGgoKS5rZXkpIHJldHVybjtcbiAgICAgICAgICAgIHRyaWdnZXIgPSB1cGRhdGUucGF0aCgpLmtleTtcblxuICAgICAgICAgICAgbGV0IGZyb20gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmcm9tUGF0aCk7XG5cbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjdXJDb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQobW9tZW50KGZyb20uZ2V0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZChhZGp1c3RtZW50LmRhdGUudmFsLCBhZGp1c3RtZW50LmRhdGUudW5pdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgbGV0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBvbkFycmF5ID0gKGN1ciwgcHJldiwgcmVvcmRlcikgPT4ge1xuXG4gICAgICBpZighcHJldiAmJiBwcmV2ICE9PSAwICYmIChjdXIgfCAwKSA8IDEpIHJldHVybjtcbiAgICAgIHZhciBpLCBsLCBrZXk7XG5cbiAgICAgIGlmKHByZXYgPiBjdXIgfHwgcmVvcmRlcikge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV1gO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFyclZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKGFyclZhbCwgKGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7YXJyS2V5fS5sZW5ndGhgO1xuICAgIGlmKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gICAgLy9pZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBkZWxldGUgc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gJHJvb3RTY29wZS4kd2F0Y2goXG4gICAgICAoKSA9PiBzZXJ2aWNlLm1vZGVsLFxuICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmXG4gICAgICAgICAgICAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgICAgICAgICAhaXNJbml0QXJyYXkgJiZcbiAgICAgICAgICAgIHZhbCAhPT0gbnVsbC8qICYmXG4gICAgICAgICAgICAhYW5ndWxhci5lcXVhbHModmFsLCBzZXJ2aWNlLmdldERlZmF1bHQoa2V5KSkqLykge1xuICAgICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZighYW5ndWxhci5lcXVhbHMoc2VydmljZS5wYXJhbXMsIHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgaWYoc2VydmljZS5tb2RlbC5pZCAmJiAhc2VydmljZS51cGRhdGVzICYmIF8uaXNFbXB0eShzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2NoZW1hUGFyYW1zKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyLCBrZXkpIHtcbiAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcEluZGV4ZXMoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBcnJheUNvcHlXYXRjaCgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZm9ybSB9ID0gc2NvcGU7XG4gICAgICBpZighZm9ybS5rZXkpIHtcbiAgICAgICAgZm9ybS5jYWNoZUtleSA9IGAke2Zvcm0udHlwZX0tJHtfLnVuaXF1ZUlkKCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IGZvcm0uY2FjaGVLZXkgfHwgc2VydmljZS5nZXRLZXkoZm9ybS5rZXkpO1xuXG4gICAgICBpZihfLmlzTnVtYmVyKHNjb3BlLmFycmF5SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzY29wZS5hcnJheUluZGV4O1xuICAgICAgICBmb3JtLmFycmF5SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZighc2VydmljZS5nZXRBcnJheUNvcHkoZ2VuZXJpY0tleSwgaW5kZXgpKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmb3JtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmb3JtLmNvbmRpdGlvbikgZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY29uZGl0aW9uLmluY2x1ZGVzKFwiYXJyYXlJbmRleFwiKSkge1xuICAgICAgICAgIGZvcm0uY29uZGl0aW9uID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChmb3JtLmNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBjb25zdCB1bmluZGV4ZWRLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcblxuICAgICAgLy8gVE9ETyAtLSBub3Qgc3VyZSBpZiBnZXRBcnJheUNvcGllc0ZvciBpcyBhY3R1YWxseSBuZWNlc3NhcnlcbiAgICAgIC8vIHdlIHNob3VsZCBsb29rIGludG8gd2hlcmUgdGhpcyBmdW5jdGlvbiBtaWdodCBiZSBuZWVkZWQgYW5kXG4gICAgICAvLyBwb3RlbnRpYWxseSByZW1vdmUgaXRcbiAgICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXNGb3IodW5pbmRleGVkS2V5KTtcbiAgICAgIGlmKCFjb3BpZXMubGVuZ3RoKSBjb3BpZXMucHVzaChzZXJ2aWNlLmdldEFycmF5U2NvcGVzKHVuaW5kZXhlZEtleSkgfHwgW10pO1xuXG4gICAgICBjb3BpZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdCAmJiBsaXN0LnNwbGljZShzY29wZS5hcnJheUluZGV4LCAxKSk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICB2YXIgbGlzdCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLmZvcm0ubGluaywgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBcnJheUNvcHkoZm9ybSwga2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFpbmRleCB8fCBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICBpZighc2VydmljZS5hcnJheUNvcGllc1trZXldKSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0gPSBbXTtcbiAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV1baW5kZXhdID0gZm9ybTtcbiAgICAvL3NlcnZpY2UuYXJyYXlDb3BpZXNba2V5XS5wdXNoKGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3B5KGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gICAgcmV0dXJuIGNvcGllcyAmJiBjb3BpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXMoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ucGx1Y2soc2VydmljZS5nZXRBcnJheVNjb3BlcyhrZXkpLCAnZm9ybScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXlTdGFydCArPSAnW10nO1xuXG4gICAgcmV0dXJuIF8uZmlsdGVyKHNlcnZpY2UuYXJyYXlDb3BpZXMsIChjb3B5LCBrZXkpID0+IGtleS5pbmNsdWRlcyhrZXlTdGFydCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2NhY2hpbmcgZHVwbGljYXRlIHNjb3BlIGZvcicsIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSA9IHNjb3BlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbVNjb3BlQ2FjaGUoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXkgPSBrZXkgfHwgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBpZighc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkpIHNlcnZpY2UuZm9ybUNhY2hlW2tleV0gPSBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Gb3JtQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9EYXRhQ2FjaGUoa2V5LCBtb2RlbFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldID0gbW9kZWxWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRGF0YUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHJldHVybiBzZXJ2aWNlLmRhdGFDYWNoZVtrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hJbnRTdHJJbmRleChleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoLT9cXGQrfFwiLipcInwnLionKV0vKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICBsZXQgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgY29uc3QgcmVwbGFjZWQgPSBbXTtcblxuICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgcmVwbGFjZWQucHVzaCh0b1JlcGxhY2UpO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCBgZmZfciR7cmVwbGFjZWQubGVuZ3RoIC0gMX1fZmZgKTtcbiAgICAgIFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXShbXltcXF1dKikvKTtcblxuICAgIHJldHVybiBtYXRjaCAmJlxuICAgICAgcmVwbGFjZWQubGVuZ3RoID9cbiAgICAgIG1hdGNoLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGxldCBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlZFtpbmRleF0pO1xuICAgICAgICAgIFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgICB9KSA6XG4gICAgICBtYXRjaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24obmVzdGVkLCBkZXB0aCkuZ2V0KCk7XG4gICAgICBjb25zdCBrZXlWYWwgPSBfLmlzVW5kZWZpbmVkKHBhcnNlZCkgP1xuICAgICAgICAnJyA6XG4gICAgICAgIF8uaXNTdHJpbmcocGFyc2VkKSA/XG4gICAgICAgICAgYFwiJHtwYXJzZWR9XCJgIDpcbiAgICAgICAgICBwYXJzZWQ7XG4gICAgICBleHAgPSBleHAucmVwbGFjZShgWyR7bmVzdGVkfV1gLCBgWyR7a2V5VmFsfV1gKTtcbiAgICAgIFssIG5lc3RlZF0gPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7IFxuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa2V5KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfLmVhY2goY2hpbGRLZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgc2tpcEtleXMucHVzaChrKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZWRDaGlsZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrLCBbaW5kZXgsIGldKTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZENoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXNraXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24sIHNlY29uZFBhc3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgd2UncmUgaGVyZSBiZWNhdXNlIGEgcGFyZW50J3Mgc2NvcGUgd2FzIGVtaXR0ZWQsXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47XG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgaWYoIWZpZWxkLnJlc29sdmUpIHtcbiAgICAgIGZpZWxkLnJlc29sdmUgPSB7IH07XG4gICAgICBfLmVhY2goZmllbGQuZGF0YSwgKGV4cCwgcHJvcCkgPT5cbiAgICAgICAgICBmaWVsZC5yZXNvbHZlW2BkYXRhLiR7cHJvcH1gXSA9IGV4cFxuICAgICAgKTtcbiAgICB9XG4gICAgc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgdmFyIGtleSA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5xO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSBmdW5jdGlvbihxKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgcGFyYW1zW2tleV0gPSBxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHdyYXAgaW4gc3RyaW5nIHNvIHJldHVybnMgdHJ1dGh5IHdoZW4gY29tcGlsZWQsIGJ1dCBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdpdGhpbiBkaXJlY3RpdmVcbiAgICAgIGlmKCFrZXkpIHNlbGVjdC5taW5Mb29rdXAgPSAnMCc7XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzY2hlbWEuaXRlbXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgXy5lYWNoKHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChzY2hlbWEuZGVmYXVsdCkpIHtcbiAgICAgICAgICBkZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIFwia2V5XCI6IGtleSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHNjaGVtYS5kZWZhdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYoZGVmYXVsdHMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdC5vbkFkZCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQpIHtcbiAgICAgICAgICBpZih2YWwudmFsdWUgJiYgZXZlbnQgPT09ICd0YWctYWRkZWQnKSB7XG4gICAgICAgICAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgICAgaWYoIXZhbC52YWx1ZVtwcm9wLmtleV0pIHZhbC52YWx1ZVtwcm9wLmtleV0gPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHNlbGVjdC5pdGVtRm9ybWF0dGVyID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoc2VsZWN0LmRpc3BsYXlGb3JtYXQpO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3QudHlwZS5pbmNsdWRlcygnY24tYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGlmKHNlbGVjdC5pdGVtcykge1xuICAgICAgICBzZWxlY3QuZGV0YWlsZWRMaXN0ID0gdHJ1ZTtcblxuICAgICAgICBpZihzZWxlY3QuaXRlbXNbMF0udHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICBpZihzZWxlY3QuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlbGVjdC5pdGVtcywgKGkpID0+IGkuZGVzdHJveVN0cmF0ZWd5ID0gXCJyZXRhaW5cIik7XG4gICAgICAgICAgICBzZWxlY3QuaXRlbXMgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBpdGVtczogc2VsZWN0Lml0ZW1zXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZHNldChzZWxlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJztcbiAgICAgICAgc2VsZWN0LmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFzZWxlY3Quc2VsZWN0aW9uU3R5bGUpIHtcbiAgICAgICAgICBzZWxlY3Quc2VsZWN0aW9uU3R5bGUgPSBzZWxlY3Qua2V5ID09PSAndGFncycgP1xuICAgICAgICAgICAgJ3RhZ3MnIDogKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScgJiYgc2VsZWN0LnNjaGVtYS5tYXhJdGVtcyAhPT0gMSkgP1xuICAgICAgICAgICAgICAnbGlzdCcgOiAnc2VsZWN0JztcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUnO1xuICAgICAgfVxuXG4gICAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlKSB7XG4gICAgICAgICRyb290U2NvcGUuJG9uKCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgKGUsIGRhdGEpID0+IHtcbiAgICAgICAgICBpZihkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG1vZGVsVmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICBpZih2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pO1xuICAgICAgICAgICAgICBpZih2YWxpZCA9PT0gdW5kZWZpbmVkKSBtb2RlbFZhbHVlLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdC5rZXksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZm9ybUN0cmwgJiYgc2VydmljZS5mb3JtQ3RybFtzZXJ2aWNlLmdldEtleShzZWxlY3Qua2V5KV07XG4gICAgICAgIGlmKGZvcm0gJiYgZm9ybS4kc2V0RGlydHkpIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICB9LCBzZWxlY3QudXBkYXRlU2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVG9nZ2xlKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS50eXBlID0gJ2NuLXRvZ2dsZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSGVscChoZWxwKSB7XG4gICAgaGVscC5odG1sQ2xhc3MgPSAnaGVscC1ibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGlzcGxheShkaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRpc3BsYXkudHlwZSA9ICdjbi1kaXNwbGF5JztcbiAgICBkaXNwbGF5LmdldERpc3BsYXkgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShkaXNwbGF5LmRpc3BsYXlGb3JtYXQsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RlbXBsYXRlKHRwbCwgcGFyc2VTY29wZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvL3ZhciBwcm9jZXNzb3IgPSAvPChcXFMrKVtePl0qPi4qPFxcL1xcMT4vLnRlc3QodHBsKSA/ICRjb21waWxlIDogJGludGVycG9sYXRlO1xuICAgIHZhciBwcm9jZXNzb3IgPSAkaW50ZXJwb2xhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBhcnJheUluZGV4KSB7XG4gICAgICBpZihwYXJzZVNjb3BlKSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICAgICAgc2NvcGUgPSBfLm1hcChzY29wZSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSAnYXJyYXlJbmRleCcgPyBhcnJheUluZGV4IDoga2V5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjb3BlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUsIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3Nvcih0cGwpKHNjb3BlKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RhYmxlKHRhYmxlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHRhYmxlLnR5cGUgPSAnY24tdGFibGUnO1xuICAgIHRhYmxlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXy5leHRlbmQocm93Lml0ZW1zW2ldLCB0YWJsZS5jb2x1bW5zW2ldKTtcbiAgICAgICAgLy9pZihyb3cuY29sdW1uc1tpXS5rZXkpIHJvdy5jb2x1bW5zW2ldLmtleSA9IE9iamVjdFBhdGgucGFyc2Uocm93LmNvbHVtbnNbaV0ua2V5KTtcbiAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQocm93Lml0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KSxcbiAgICAgICAgc2VsZWN0RmllbGQgPSBfLmZpbmQoc2VsZWN0RGlzcGxheS5pdGVtcywgJ3NlbGVjdEZpZWxkJyksXG4gICAgICAgIGhhbmRsZXI7XG5cbiAgICBpZihzY2hlbWEgJiYgc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9XG5cbiAgICBzZWxlY3REaXNwbGF5LnNlbGVjdERpc3BsYXkgPSBmYWxzZTtcbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3RGaWVsZC5rZXksIGhhbmRsZXIsIHNlbGVjdEZpZWxkLnVwZGF0ZVNjaGVtYSwgdHJ1ZSk7XG4gICAgLy9zZXJ2aWNlLnByb2Nlc3NGaWVsZChzZWxlY3REaXNwbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZihpdGVtLmNvbmRpdGlvbiAhPT0gJ2ZhbHNlJykge1xuICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKHZhbCwgcHJldiwga2V5KSB7XG4gICAgICB2YXIgaW5kZXggPSBnZXRBcnJheUluZGV4KGtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGluZGV4KTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIHZhciBmb3JtQ29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KGNvcHkua2V5KSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBydW4gaGFuZGxlciBvbmNlIGFsbCBhcnJheUNvcGllcyBoYXZlIGJlZW4gaW5zdGFudGlhdGVkXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIga2V5TWFwID0gXy5wbHVjayhfLnJlamVjdChzZWxlY3REaXNwbGF5Lml0ZW1zLCB7XCJjb25kaXRpb25cIjpcImZhbHNlXCJ9KSwgJ2tleScpO1xuICAgIHZhciBvbmNlID0gJHJvb3RTY29wZS4kb24oJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBmdW5jdGlvbihldmVudCwga2V5KSB7XG4gICAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYobW9kZWwpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gbW9kZWwubGVuZ3RoICogKGtleU1hcC5sZW5ndGgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKGtleU1hcCwga2V5KSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY291bnQgPT09IHRvdGFsKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlcihudWxsLCBudWxsLCAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHJlc2V0Q291bnQgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm0udXBkYXRlUGFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY291bnQgPSAwO1xuICAgIH0pO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gob25jZSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChyZXNldENvdW50KTtcbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIHRoZSBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdERpc3BsYXkua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZihkZWZhdWx0cyAmJiAhbW9kZWwuZ2V0KCkpIHtcbiAgICAgIG1vZGVsLnNldChkZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNjaGVtYVJlZnJlc2gocmVmcmVzaCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKHVwZGF0ZVNjaGVtYSkge1xuICAgICAgdmFyIHBhcmFtcyA9IF8uZXh0ZW5kKGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKSwgc2VydmljZS5wYXJhbXMpO1xuICAgICAgdmFyIGRpZmYgPSBfLm9taXQoY25VdGlsLmRpZmYoc2VydmljZS5zY2hlbWEucGFyYW1zLCBwYXJhbXMsIHRydWUpLCAndXBkYXRlcycpO1xuICAgICAgdmFyIGtleXM7XG5cbiAgICAgIGlmKCFfLmlzRW1wdHkoZGlmZikgfHwgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIGlmKHVwZGF0ZVNjaGVtYSkgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IHVwZGF0ZVNjaGVtYTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIGlmKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGlmZiA9IF8ub21pdChkaWZmLCBfLmlzTnVsbCk7XG4gICAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXBhcmFtcy51cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgICBkaWZmID0gY25VdGlsLmRpZmYocGFyYW1zLCBfLm9taXQoc2VydmljZS5zY2hlbWEucGFyYW1zLCBbJ3VwZGF0ZVNjaGVtYScsICd1cGRhdGVzJ10pKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllc1trZXldID0gc2NoZW1hO1xuICAgICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgKGZvcm0sIGtleSkgPT4ge1xuXG4gICAgICAgICAgaWYoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcblxuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uaXRpb24gPSAndHJ1ZScgdG8gZm9yY2VcbiAgICAvLyBjb25kaXRpb24gdG8gZXZhbCB0cnVlLCBzbyB3ZSBzZXQgdGhlIHVwZGF0ZSBjb25kaXRpb24gdG8gJ3RydWUnXG4gICAgLy8gYmVmb3JlIGNvbXBhcmluZ1xuICAgIGlmKCF1cGRhdGUuY29uZGl0aW9uICYmIGN1cnJlbnQuY29uZGl0aW9uKSB1cGRhdGUuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgIGxldCByZWRyYXcgPSAhaXNDaGlsZCAmJiBjdXJyZW50LmNvbmRpdGlvbiAhPT0gdXBkYXRlLmNvbmRpdGlvbjtcblxuICAgIF8uZXh0ZW5kKGN1cnJlbnQsIF8ub21pdCh1cGRhdGUsICdpdGVtcycsICdrZXknKSk7XG5cbiAgICBjdXJyZW50Ll9vZ0tleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYoIXVwZGF0ZVtwcm9wXSkge1xuICAgICAgICBkZWxldGUgY3VycmVudFtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBnZXRPZ0tleXModXBkYXRlKTtcblxuICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7XG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlcnZpY2UuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC9cXFsoXFxkKylcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQga2V5Q29weTtcbiAgICBpZiAoIV8uaXNBcnJheShpbmRleCkpIHtcbiAgICAgIGluZGV4ID0gW2luZGV4XTtcbiAgICB9XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB3aGlsZSAoaW5kZXgubGVuZ3RoICYmIGtleUNvcHkuaW5kZXhPZignJykgPiAtMSkge1xuICAgICAgbGV0IGluZGV4T2ZJbmRleCA9IGtleUNvcHkuaW5kZXhPZignJyk7XG4gICAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleC5zaGlmdCgpO1xuICAgIH1cbiAgICBpZihhc0FycmF5KSB7XG4gICAgICByZXR1cm4ga2V5Q29weTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ2V0S2V5KGtleUNvcHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmNyZW1lbnRVcGRhdGVzKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSAgdGhpcztcbiAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICBzZXJ2aWNlLnBhcmFtcy51cGRhdGVzID0gc2VydmljZS51cGRhdGVzO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0cGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1vZGFsTWFwID0ge307XG5jb25zdCBwcm9taXNlTWFwID0ge307XG5cbmZ1bmN0aW9uIGdldFByb21pc2VzKHN0YXRlKSB7XG4gIGlmKHByb21pc2VNYXBbc3RhdGVdKSByZXR1cm4gcHJvbWlzZU1hcFtzdGF0ZV07XG5cbiAgY29uc3QgcHJvbWlzZSA9IHt9O1xuICBwcm9taXNlTWFwW3N0YXRlXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBnZXRQcm9taXNlcyhzdGF0ZSk7XG4gIGlmKHByb21pc2VzW2lkXSkgcmV0dXJuIHByb21pc2VzW2lkXTtcblxuICBjb25zdCBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgcHJvbWlzZXNbaWRdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcigpIHtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hcHBpbmcsXG4gICAgJGdldDogY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZE1hcHBpbmcoc3RhdGUsIGRlZikge1xuICAgIGRlZi5yZXNvbHZlID0geyBwYXJlbnQgfTtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBkZWY7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnQoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nLFxuICAgIHJlbW92ZU1hcHBpbmdcbiAgfTtcblxuICAvLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU1hcHBpbmcoc3RhdGUsIGlkLCBwYXJlbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnNvbGUuaW5mbygnOjogUkVTT0xWRSBNQVBQSU5HIENBTExFRCA6OicpO1xuICAgIGNvbnN0IHsgc2NvcGUgfSA9IG9wdGlvbnM7XG4gICAgaWYoc2NvcGUpIHtcbiAgICAgIHNjb3BlLm9wdGlvbnMgPSBzY29wZS5vcHRpb25zIHx8IHt9O1xuICAgICAgc2NvcGUub3B0aW9ucy5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIG1vZGFsTWFwW3N0YXRlXS5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBjb25zdCBkID0gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKTtcbiAgICBkLnJlc29sdmUoeyBwYXJlbnQsIG9wdGlvbnMgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcHBpbmcoc3RhdGUpIHtcbiAgICBjb25zdCBkID0gJHEuZGVmZXIoKTtcbiAgICBnZXRQcm9taXNlKCRzdGF0ZVBhcmFtcy5tb2RhbCwgJHN0YXRlUGFyYW1zLm1vZGFsSWQsICRxKVxuICAgICAgLnByb21pc2VcbiAgICAgIC50aGVuKCh7IHBhcmVudCwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGQucmVzb2x2ZSh7IHN0YXRlOiBtb2RhbE1hcFtzdGF0ZV0sIG9wdGlvbnMgfSk7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgLy8gSG9sZGluZyBvbiB0byBzY29wZSByZWZlcmVuY2VzIGNyZWF0ZXMgbWVtb3J5IGxlYWtzXG4gIGZ1bmN0aW9uIHJlbW92ZU1hcHBpbmcoc3RhdGUpIHtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBudWxsO1xuICAgIHByb21pc2VNYXBbc3RhdGVdID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gRmxleEZvcm1Nb2RhbExvYWRlcihGbGV4Rm9ybU1vZGFsLCAkc3RhdGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gRkZNb2RhbExvYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IEZGTW9kYWxMb2FkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgLy8gdW5iaW5kIGV2ZW50XG4gICAgdm0uZGlzbWlzc0V2ZW50KCk7XG4gICAgdm0ubW9kYWwuZGlzbWlzcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPG5nLWZvcm1cbiAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCJcbiAgICAgICAgICBuYW1lPVwie3t2bS5mb3JtTmFtZX19XCJcbiAgICAgICAgICBzZi1zY2hlbWE9XCJ2bS5jb25maWcuc2NoZW1hLnNjaGVtYVwiXG4gICAgICAgICAgc2YtZm9ybT1cInZtLmZvcm1cIlxuICAgICAgICAgIHNmLW1vZGVsPVwidm0ubW9kZWxcIj5cbiAgICAgICAgPC9uZy1mb3JtPlxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XG4gICAgICAgIDxzZWN0aW9uIG5nLWlmPVwidm0uZGVidWdcIj5cbiAgICAgICAgICA8anNvbi1leHBsb3JlciBqc29uLWRhdGE9XCJ2bS5tb2RlbCB8fCAnLi4ubW9kZWwgbm90IGxvYWRlZCB5ZXQnXCIvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBjbkZsZXhGb3JtVGFnKCk7XG5cbiAgdmFyIHZtID0gdGhpcztcbiAgdm0uc2VydmljZSA9IHVuZGVmaW5lZDtcbiAgdm0uZXZlbnRzID0gW107XG5cbiAgdm0uYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbiAgdm0uY2xlYW51cCA9IGNsZWFudXA7XG4gIHZtLnByb2Nlc3MgPSBwcm9jZXNzO1xuICB2bS5zaG93Rm9ybSA9IHNob3dGb3JtO1xuXG4gIHZtLmV2ZW50cy5wdXNoKCRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiB2bS5jb25maWcuc2NoZW1hOyB9LCB2bS5wcm9jZXNzKSk7XG5cbiAgdm0uYWN0aXZhdGUoKTtcblxuICAkc2NvcGUuJG9uKHZtLmNsZWFudXBFdmVudCB8fCAnJGRlc3Ryb3knLCB2bS5jbGVhbnVwKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaWYoYW5ndWxhci5pc051bWJlcih2bS5mb3JtSW5kZXgpKSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3Jtc1t2bS5mb3JtSW5kZXhdLmZvcm07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGlmKCRsb2NhdGlvbi5zZWFyY2goKS5kZWJ1Zykge1xuICAgICAgdm0uZGVidWcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoY3VyLCBwcmV2KSB7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG5cbiAgICBjbkZsZXhGb3JtU2VydmljZS5kZXN0cm95U2VydmljZSh2bS5zZXJ2aWNlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBmdW5jdGlvbiBmZkhlYWRlclRhZygpIHt9XG4gICRzY29wZS5fX3RhZyA9IG5ldyBmZkhlYWRlclRhZygpO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICBmdW5jdGlvbiBmZlZhbGlkYXRlVGFnKCkge31cbiAgJHNjb3BlLl9fdGFnID0gbmV3IGZmVmFsaWRhdGVUYWcoKTtcblxuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9