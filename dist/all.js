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
	  prop: 'updateSchema',
	  handler: function handler(field, service) {
	    return service.processFieldUpdatedSchema(field);
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
	
	    // if schemaUpdate hasn't been triggered, let schemaForm directive handle defaults
	    //if(service.updates || field.default) {
	    if (!_.isUndefined(curDefault)) {
	      if (key.includes && key.includes('[]')) return;
	      var model = service.parseExpression(field.key, service.model);
	      var modelValue = model.get();
	      // if there's an existing default and it's the same as the current value
	      // update the current value to the new default
	      if (_.isUndefined(modelValue) || (_.has(service.defaults, key) ? angular.equals(modelValue, service.defaults[key]) : _.isTrulyEmpty(modelValue)) && !angular.equals(modelValue, curDefault)) {
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
	      var queryParams = select.titleMapQuery.params;
	      var paramsKeys = _.keys(queryParams);
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
	
	  //activate();
	  $scope.$watch('vm.config', activate, true);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYzk1NTAwOTVmODQ4ODc3YTM3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwicHJvdmlkZXIiLCJjb25maWciLCJydW4iLCJmYWN0b3J5IiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsIm5hbWUiLCJjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJjbkZsZXhGb3JtQ29uZmlnIiwicGFyYW0iLCJwdXNoIiwiJHN0YXRlUGFyYW1zIiwiZ2V0U3RhdGVQYXJhbXMiLCJfIiwiY2hhaW4iLCJvbWl0IiwidiIsImlzVW5kZWZpbmVkIiwiaXNOdWxsIiwidmFsdWUiLCJjbkZsZXhGb3JtVHlwZXNQcm92aWRlciIsImZpZWxkVHlwZVJlZ2lzdGVyIiwiY29uZGl0aW9uIiwiZmllbGQiLCJ0eXBlIiwiaW5jbHVkZXMiLCJ0aXRsZU1hcCIsInRpdGxlTWFwUmVzb2x2ZSIsInRpdGxlTWFwUXVlcnkiLCJzY2hlbWEiLCJmb3JtYXQiLCJyZWdpc3RlckZpZWxkVHlwZSIsImNuRmxleEZvcm1UeXBlcyIsImZpZWxkVHlwZSIsInVuc2hpZnQiLCJnZXRGaWVsZFR5cGUiLCJpIiwibCIsImxlbmd0aCIsImNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciIsIiRzdGF0ZVByb3ZpZGVyIiwiYWRkU3RhdGVzIiwicGVybWlzc2lvbnMiLCJzaGFyZWQiLCJjb250cm9sbGVyQXMiLCJzdGF0ZSIsInVybCIsImNuRmxleEZvcm1Sb3V0ZXMiLCJ0ZW1wbGF0ZVVybCIsInNjaGVtYUZvcm1Db25maWciLCJjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIiwidHY0IiwiYWRkRm9ybWF0IiwiaXNTdHJpbmciLCJkYXRhIiwidGVzdCIsImV4dGVuc2lvbnMiLCJlYWNoIiwiZXh0ZW5zaW9uIiwicmVnaXN0ZXJGaWVsZCIsImFkZFRlbXBsYXRlcyIsIiR0ZW1wbGF0ZUNhY2hlIiwicHV0Iiwic2hhcmVkQXV0b2NvbXBsZXRlVHBsIiwid2luZG93IiwicmVxdWlyZSIsIk9iamVjdFBhdGgiLCJmaWVsZFR5cGVIYW5kbGVycyIsImZpZWxkUHJvcEhhbmRsZXJzIiwicHJvcCIsImhhbmRsZXIiLCJzZXJ2aWNlIiwicHJvY2Vzc1Jlc29sdmUiLCJwcm9jZXNzU2VsZWN0RGlzcGxheSIsInByb2Nlc3NEZWZhdWx0IiwiZGVmYXVsdCIsIndhdGNoIiwicHJvY2Vzc0ZpZWxkV2F0Y2giLCJzZWNvbmRQYXNzIiwicHJvY2Vzc0ZpZWxkVHlwZSIsInByb2Nlc3NDb25kaXRpb25hbCIsInByb2Nlc3NGaWVsZFVwZGF0ZWRTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbmNyZW1lbnRVcGRhdGVzIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0Rpc3BsYXkiLCJwcm9jZXNzRmllbGQiLCJwcm9jZXNzRmllbGRzZXQiLCJwcm9jZXNzRmllbGRQcm9wcyIsInByb2Nlc3NDb21wb25lbnQiLCJwcm9jZXNzQ3VycmVuY3kiLCJwcm9jZXNzUGVyY2VudGFnZSIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJIYW5kbGVyIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJkZXN0cm95U2VydmljZSIsImVtcHR5IiwicmVtb3ZlIiwicyIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsInBhcmFtcyIsImV4dGVuZCIsImZvcm1zIiwiZm9ybSIsImJpbmQiLCJzZXRWYWx1ZSIsImNvbXBpbGVkIiwiZm9ybUN0cmwiLCJ1cGRhdGVTY2hlbWEiLCJnZXRTY2hlbWFGb3JtIiwiZ2V0U2NoZW1hVHlwZSIsImlzQXJyYXkiLCJmaXJzdCIsImN1ckRlZmF1bHQiLCJrZXkiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaGFzIiwiZXF1YWxzIiwiaXNUcnVseUVtcHR5Iiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJwb3MiLCJodG1sQ2xhc3MiLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJnZXRPZ0tleXMiLCJyZWplY3QiLCJrZXlzIiwiaXNEZWZpbmVkIiwiX29nS2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwiYXJyYXlJbmRleCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsInNraXBQcm9wSGFuZGxlcnMiLCJlaXRoZXJzIiwic3BsaXQiLCJ4IiwiYWxsIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdlbmVyaWNLZXkiLCJzdHJpcEluZGV4ZXMiLCJjYWNoZWRGaWVsZCIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsInZhbCIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJwcmV2Iiwic2NvcGUiLCJtYXAiLCJwYXRoIiwicmVzb2x1dGlvbiIsImN1ciIsImFkanVzdG1lbnQiLCJkYXRlIiwidW5pdHMiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInJlc3VsdCIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJhY2MiLCJjdXJWYWwiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiaW5kZXgiLCIkZW1pdCIsInVuaW5kZXhlZEtleSIsImNvcGllcyIsInNwbGljZSIsImxpbmsiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwiY29uc29sZSIsIndhcm4iLCJtYXRjaEludFN0ckluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZWQiLCJwYXJzZWQiLCJrZXlWYWwiLCJpc1N0ciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsIm5vQ29uc3RydWN0aW9uIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsInNpbGVudCIsImdldEFycmF5SW5kZXgiLCJrcyIsImsiLCJza2lwS2V5cyIsImluZGV4ZWRLZXkiLCJjaGlsZEtleXMiLCJpbmRleGVkQ2hpbGRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwibWFwVmFsIiwib25Jbml0Iiwic2V0dGVyIiwibmV3VmFsIiwicXVlcnlQYXJhbXMiLCJwYXJhbXNLZXlzIiwidGl0bGVRdWVyeSIsInEiLCJtaW5Mb29rdXAiLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0IiwiZGVzdHJveVN0cmF0ZWd5Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsInNlbGVjdEtleSIsInNwbGl0S2V5IiwiaW5kZXhlZFNlbGVjdEtleSIsInNlbGVjdFZhbHVlIiwiZm9ybUNvcGllcyIsImVsZW0iLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsImxvZyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsInJlbW92ZU1hcHBpbmciLCJpbmZvIiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCIkc2NvcGUiLCJGRk1vZGFsTG9hZGVyVGFnIiwiX190YWciLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkbG9jYXRpb24iLCJjbkZsZXhGb3JtVGFnIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsImZmSGVhZGVyVGFnIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJ0aXRsZSIsImFjdGlvbkNvbmZpZyIsInJldHVyblN0YXRlIiwicmV0dXJuU3R5bGUiLCJyZXR1cm5UZXh0IiwiY2xvc2VCdXR0b24iLCJhY3Rpb25zIiwiYnRuQ29uZmlnIiwiZmZWYWxpZGF0ZSIsImF0dHJzIiwibmdNb2RlbCIsImZmVmFsaWRhdGVUYWciLCJyZXF1aXJlZCIsIiR2aWV3VmFsdWUiLCIkc2V0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O21CQUVlQSxRQUNaQyxNQURZLENBQ0wsY0FESyxFQUNXLENBQ3RCLFdBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLDZCQUhzQixFQUl0QixhQUpzQixFQUt0QixTQUxzQixDQURYLEVBUVpDLFFBUlksQ0FRSCxrQkFSRyw4QkFTWkEsUUFUWSxDQVNILGlCQVRHLDZCQVVaQSxRQVZZLENBVUgsa0JBVkcsd0NBV1pDLE1BWFksK0JBWVpBLE1BWlkseUNBYVpDLEdBYlkscUNBY1pGLFFBZFksQ0FjSCxtQkFkRyx3QkFlWkEsUUFmWSxDQWVILDhCQWZHLG1DQWdCWkcs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ZixPQUFPb2hCLFdBQVdRO0tBQ3JELE9BQU87Ozs7QUEzQ1gsU0FBUSxVQStDT2QsaUI7Ozs7Ozs7Ozs7O0FDekdmLFVBQVNlLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMN0IsZUFBVSxHQURMO0FBRUw3TyxZQUFPLEVBQUVuRixNQUFNLGFBQVIsRUFGRjtBQUdMN0gsY0FBUyxTQUhKO0FBSUxrUixXQUFNQTtBQUpELElBQVA7QUFNRDs7QUFFRCxVQUFTQSxJQUFULENBQWN3SixNQUFkLEVBQXNCckQsSUFBdEIsRUFBNEJzRyxLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUMsWUFBU0MsYUFBVCxHQUF5QixDQUFFO0FBQzNCbkQsVUFBT0UsS0FBUCxHQUFlLElBQUlpRCxhQUFKLEVBQWY7O0FBRUEsT0FBR25ELE9BQU83UyxJQUFQLElBQWU2UyxPQUFPN1MsSUFBUCxDQUFZaVcsUUFBOUIsRUFBd0M7QUFDdENwRCxZQUFPekssTUFBUCxDQUFjLFlBQVc7QUFBRSxjQUFPMk4sUUFBUUcsVUFBZjtBQUE0QixNQUF2RCxFQUF5RCxVQUFTN2dCLEtBQVQsRUFBZ0I7QUFDdkU7QUFDQTBnQixlQUFRSSxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FKLGVBQVFJLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0M5Z0IsS0FBaEM7QUFDRCxNQUpEO0FBS0Q7QUFDRjs7bUJBRWN3Z0IsVSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY24tZmxleC1mb3JtXCIsIFtcImxvZGFzaFwiLCBcIm9iamVjdHBhdGhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyb290W1wibG9kYXNoXCJdLCByb290W1wib2JqZWN0cGF0aFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGM5NTUwMDk1Zjg0ODg3N2EzN2UiLCJpbXBvcnQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciwgY25GbGV4Rm9ybVJvdXRlcyB9IGZyb20gJy4vY24tZmxleC1mb3JtLnJvdXRlcyc7XG5pbXBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfSBmcm9tICcuL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMnO1xuaW1wb3J0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0uc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXInO1xuaW1wb3J0IGNuRmxleEZvcm0gZnJvbSAnLi9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlJztcbmltcG9ydCBjbkZsZXhGb3JtSGVhZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IGZmVmFsaWRhdGUgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjb25zdCBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtQ29uZmlnXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRJZ25vcmVQYXJhbShwYXJhbSkge1xuICAgIGlnbm9yZVBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWcoJHN0YXRlUGFyYW1zKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMoKSB7XG4gICAgICByZXR1cm4gX1xuICAgICAgICAgIC5jaGFpbigkc3RhdGVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHYpIHx8IF8uaXNOdWxsKHYpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnZhbHVlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiLy9hbmd1bGFyLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgICAvLy5ydW4oYWRkVGVtcGxhdGVzKTtcblxuZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnXG4gIF07XG5cbiAgXy5lYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIucmVnaXN0ZXJGaWVsZCh7XG4gICAgICB0eXBlOiBleHRlbnNpb24sXG4gICAgICB0ZW1wbGF0ZVVybDogYGFwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy8ke2V4dGVuc2lvbn0uaHRtbGBcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAnbmdJbmplY3QnO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdG9nZ2xlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgICAgPGNuLXRvZ2dsZS1zd2l0Y2hcbiAgICAgICAgICAgIGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uLXZhbHVlPVwiZm9ybS5vblZhbHVlXCJcbiAgICAgICAgICAgIG9mZi12YWx1ZT1cImZvcm0ub2ZmVmFsdWVcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSlcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0udGl0bGVRdWVyeSA/IHRydWUgOiBmYWxzZX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwIHx8IChmb3JtLnRpdGxlUXVlcnkgJiYgMyB8fCAwKX19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxvbCBzZi1hcnJheT1cImZvcm1cIlxuICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0ge3tmb3JtLmZpZWxkSHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDB9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZXhpc3RpbmctcHJldmlldz1cImZvcm0uZXhpc3RpbmdQcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvbWVkaWEtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3N2dXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y3N2LXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jc3YtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmV1c2FibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1yZXVzYWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tc2VsZWN0LW9yXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBzZWxlY3QtZnJvbT1cImZvcm0ubGlicmFyeVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgIGRpcmVjdGl2ZUlkPVwiZm9ybS5kaXJlY3RpdmVJZFwiXG4gICAgICAgICAgaXRlbS10ZW1wbGF0ZT1cImZvcm0uaXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICB0b2dnbGUtdGV4dD1cImZvcm0udG9nZ2xlVGV4dFwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICB2aWV3PVwiZm9ybS52aWV3XCI+XG4gICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgPC9jbi1zZWxlY3Qtb3I+XG4gICAgICAgIDxwIG5nLWlmPVwiZm9ybS5sb2FkTW9yZSAmJiBmb3JtLnZpZXcgPT09ICdsaXN0J1wiPlxuICAgICAgICAgIDxhIG5nLWNsaWNrPVwiZm9ybS5sb2FkTW9yZSgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj5Mb2FkIE1vcmU8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10YWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWZmLXRhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxoNj57e2Zvcm0udGl0bGV9fTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiBmb3JtLmNvbHVtbnNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPnt7Y29sLmNvbHVtbkhlYWRlcn19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLXJlcGVhdD1cInJvdyBpbiBmb3JtLml0ZW1zXCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gcm93Lml0ZW1zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb2xcIj48L3NmLWRlY29yYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xufVxuXG5leHBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2hlbWEtZm9ybS1leHRlbnNpb25zLmpzIiwiLy8gTmVlZCB0aGVzZSBtb2R1bGVzIGZvciB0ZXN0IGJ1bmRsZVxudmFyIF8gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuXyB8fCByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBPYmplY3RQYXRoID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk9iamVjdFBhdGggfHwgcmVxdWlyZSgnb2JqZWN0cGF0aCcpO1xuXG5jb25zdCBmaWVsZFR5cGVIYW5kbGVycyA9IHtcbiAgJ2ZpZWxkc2V0JzogJ3Byb2Nlc3NGaWVsZHNldCcsXG4gICdjbi1yYWRpb3MnOiAncHJvY2Vzc1JhZGlvcycsXG4gICdjbi1yYWRpb2J1dHRvbnMnOiAncHJvY2Vzc1JhZGlvYnV0dG9ucycsXG4gICdjbi1hdXRvY29tcGxldGUnOiAncHJvY2Vzc1NlbGVjdCcsXG4gICdjbi1kYXRldGltZXBpY2tlcic6ICdwcm9jZXNzRGF0ZScsXG4gICdoZWxwJzogJ3Byb2Nlc3NIZWxwJyxcbiAgJ2NuLWRpc3BsYXknOiAncHJvY2Vzc0Rpc3BsYXknLFxuICAnY24tY3VycmVuY3knOiAncHJvY2Vzc0N1cnJlbmN5JyxcbiAgJ2NuLXBlcmNlbnRhZ2UnOiAncHJvY2Vzc1BlcmNlbnRhZ2UnLFxuICAnY24tbWVkaWF1cGxvYWQnOiAncHJvY2Vzc01lZGlhVXBsb2FkJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknXG59O1xuXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzU2VsZWN0RGlzcGxheShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ2RlZmF1bHQnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IFxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZClcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICRyb290U2NvcGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtc1xuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0Rm9ybXNUb1Byb2Nlc3MsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5jcmVtZW50VXBkYXRlcyxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NGaWVsZFdhdGNoLFxuICAgIHByb2Nlc3NDb21wb25lbnQsXG4gICAgcHJvY2Vzc0NvbmRpdGlvbmFsLFxuICAgIHByb2Nlc3NDdXJyZW5jeSxcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzRGF0ZSxcbiAgICBwcm9jZXNzSGVscCxcbiAgICBwcm9jZXNzUmFkaW9zLFxuICAgIHByb2Nlc3NSYWRpb2J1dHRvbnMsXG4gICAgcHJvY2Vzc1JldXNhYmxlLFxuICAgIHByb2Nlc3NTY2hlbWEsXG4gICAgcHJvY2Vzc1NlbGVjdERpc3BsYXksXG4gICAgcHJvY2Vzc1Jlc29sdmUsXG4gICAgcHJvY2Vzc1NlY3Rpb24sXG4gICAgcHJvY2Vzc1NlbGVjdCxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBBcnJheVNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2NoZW1hUmVmcmVzaCxcbiAgICBzaWxlbmNlTGlzdGVuZXJzLFxuICAgIHNraXBEZWZhdWx0c1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlcnZpY2UoZm4pIHtcbiAgICByZXR1cm4gXy5maW5kKHNlcnZpY2VzLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95U2VydmljZShmbikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBnZXRTZXJ2aWNlKGZuKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZS5jbGVhbnVwKCk7XG4gICAgICBfLmVtcHR5KHNlcnZpY2UpO1xuICAgICAgXy5yZW1vdmUoc2VydmljZXMsIChzKSA9PiBzID09PSBzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgaWYoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgWyBzY2hlbWEsIG1vZGVsLCBjb25maWcgXSA9IGFyZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIH0gPSBhcmdzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGN1clNlcnZpY2UgPSBnZXRTZXJ2aWNlKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLm1vZGVsID09PSBtb2RlbCk7XG4gICAgaWYoY3VyU2VydmljZSkge1xuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGN1clNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgc2VydmljZXMucHVzaChuZXdTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV3U2VydmljZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5zY29wZUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuICAgIHRoaXMuc2tpcERlZmF1bHQgPSB7fTtcblxuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UsIGRlc3Ryb3lTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNVbmRlZmluZWQobW9kZWxWYWx1ZSkgfHwgKFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpXG4gICAgICApKSB7XG4gICAgICAvL2lmICgoXG4gICAgICAgIC8vKCFfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSB8fFxuICAgICAgICAvLyhfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpXG4gICAgICAvLykgJiYgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKGZpZWxkLnJlYWRvbmx5ICYmICFzY2hlbWEucmVhZG9ubHkpIGZpZWxkLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcblxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+XG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGRhdGE7XG4gICAgLy8gZG9lcyBkZWNsYXJhdGl2ZS9mdW5jdGlvbmFsIG91dHdlaWdoIHBlcmZvcm1hbmNlP1xuICAgIGlmKGV4cC5pbmNsdWRlcygnIHx8ICcpKSB7XG4gICAgICBsZXQgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVpdGhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihlaXRoZXJzW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIHtcbiAgICAgICAgICBkYXRhID0geDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGV4cC5pbmNsdWRlcygnICYmICcpKSB7XG4gICAgICBsZXQgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gYWxsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWxsW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIGRhdGEgPSB4O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGF0YSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UncmUgcmVzb2x2aW5nIGZyb20gbW9kZWwgYnV0IGRlZmF1bHRzIGhhdmVuJ3QgYmVlbiBhcHBsaWVkIHlldCwgcmVzb2x2ZSBmcm9tIGRlZmF1bHQgaXRzZWxmXG4gICAgaWYoIWRhdGEgJiYgZXhwLmluZGV4T2YoJ21vZGVsLicpID09PSAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBleHAucmVwbGFjZSgnbW9kZWwuJywgJycpO1xuICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgY29uc3QgY2FjaGVkRmllbGQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSB8fCBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZ2VuZXJpY0tleSk7XG5cbiAgICAgIGRhdGEgPSAoKCkgPT4ge1xuICAgICAgICBpZihjYWNoZWRGaWVsZCAmJiBjYWNoZWRGaWVsZC5kZWZhdWx0KVxuICAgICAgICAgIHJldHVybiBjYWNoZWRGaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSlcbiAgICAgICAgICByZXR1cm4gZmllbGQuZGVmYXVsdDtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoZ2VuZXJpY0tleSk7XG4gICAgICAgIGlmKHNjaGVtYSkgcmV0dXJuIHNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhUHJvcCA9IGV4cC5tYXRjaCgvc2NoZW1hXFwuZGF0YVxcLiguKykvKVsxXTtcbiAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKGBkYXRhOiR7ZGF0YVByb3B9OiR7ZGF0YS5jdXJzb3J9YCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBmaWVsZC5sb2FkTW9yZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWwgPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZFByb3AsIGZpZWxkKS5zZXQodmFsKTtcblxuICAgIGlmKCFza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgICBwcm9wID09PSBmaWVsZFByb3AgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCBleHApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goeyBmaWVsZCwgcHJvcDogZmllbGRQcm9wLCBleHAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5jb25kaXRpb25hbHMsIChjb25kaXRpb24sIGtleSkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzZXJ2aWNlLmdldEZyb21TY29wZUNhY2hlKHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkpO1xuICAgICAgICBpZihrZXkgPT09ICdyZXF1aXJlZCcgJiYgc2NvcGUpIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1WYWxpZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmllbGRcbiAgICAgICAgICAuY29uZGl0aW9uYWxzW2tleV1cbiAgICAgICAgICAubWF0Y2goL21vZGVsXFwuKFteXFxzXSspL2cpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGgubWF0Y2goL21vZGVsXFwuKFteXFxzXSspLylbMV0pXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRXYXRjaChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFmaWVsZC53YXRjaCkgcmV0dXJuO1xuXG4gICAgbGV0IHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcbiAgICBmaWVsZC53YXRjaCA9IF8uaXNBcnJheShmaWVsZC53YXRjaCkgPyBmaWVsZC53YXRjaCA6IFtmaWVsZC53YXRjaF07XG5cbiAgICBfLmVhY2goZmllbGQud2F0Y2gsIGZ1bmN0aW9uKHdhdGNoKSB7XG4gICAgICBpZih3YXRjaC5yZXNvbHV0aW9uKSB7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSB3YXRjaC5jb25kaXRpb247XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVXBkYXRlZFNjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICAvLyBieSB0aGlzIHBvaW50IGRlZmF1bHRzIHNob3VsZCBiZSBwcm9jZXNzZWQgc28gd2UgY2FuIGdldCB2YWx1ZSBkaXJlY3RseSBmcm9tIG1vZGVsXG4gICAgICBjb25zdCBjdXJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyVmFsKSkgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJWYWw7XG4gICAgfVxuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgb25BcnJheSA9IChjdXIsIHByZXYsIHJlb3JkZXIpID0+IHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dYDtcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIChmaWVsZCwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IGAke2FycktleX0ubGVuZ3RoYDtcbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSkge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtvbkFycmF5XSxcbiAgICAgICAgcHJldjogYXJyVmFsID8gYXJyVmFsLmxlbmd0aCA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckhhbmRsZXJzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgZGVsZXRlIHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9ICRyb290U2NvcGUuJHdhdGNoKFxuICAgICAgKCkgPT4gc2VydmljZS5tb2RlbCxcbiAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJlxuICAgICAgICAgICAgIWlzSW5pdEFycmF5ICYmXG4gICAgICAgICAgICB2YWwgIT09IG51bGwvKiAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKHZhbCwgc2VydmljZS5nZXREZWZhdWx0KGtleSkpKi8pIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgIHNlcnZpY2UuaW5jcmVtZW50VXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgY29uc3QgdW5pbmRleGVkS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG5cbiAgICAgIC8vIFRPRE8gLS0gbm90IHN1cmUgaWYgZ2V0QXJyYXlDb3BpZXNGb3IgaXMgYWN0dWFsbHkgbmVjZXNzYXJ5XG4gICAgICAvLyB3ZSBzaG91bGQgbG9vayBpbnRvIHdoZXJlIHRoaXMgZnVuY3Rpb24gbWlnaHQgYmUgbmVlZGVkIGFuZFxuICAgICAgLy8gcG90ZW50aWFsbHkgcmVtb3ZlIGl0XG4gICAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKHVuaW5kZXhlZEtleSk7XG4gICAgICBpZighY29waWVzLmxlbmd0aCkgY29waWVzLnB1c2goc2VydmljZS5nZXRBcnJheVNjb3Blcyh1bmluZGV4ZWRLZXkpIHx8IFtdKTtcblxuICAgICAgY29waWVzLmZvckVhY2goKGxpc3QpID0+IGxpc3QgJiYgbGlzdC5zcGxpY2Uoc2NvcGUuYXJyYXlJbmRleCwgMSkpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgdmFyIGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZighXy5pc1N0cmluZyhleHApICYmICFfLmlzQXJyYXkoZXhwKSkge1xuICAgICAgcmV0dXJuIHsgZ2V0OiAoKSA9PiBleHAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnW15cXCddKid8XCJbXlxcXCJdKlwifC0/WzAtOS5dK3xcXFtdfFxce30pJC8udGVzdChleHApKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighZXhwKSByZXR1cm4gZXhwO1xuICAgICAgICAgIGNvbnN0IGlzU3RyID0gZXhwLm1hdGNoKC9cIihbXlxcXCJdKilcIi8pIHx8IGV4cC5tYXRjaCgvJyhbXlxcJ10qKScvKTtcbiAgICAgICAgICBpZihpc1N0cikgcmV0dXJuIGlzU3RyWzFdO1xuICAgICAgICAgIHN3aXRjaChleHApIHtcbiAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzogcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnW10nOiByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlICd7fSc6IHJldHVybiB7fTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBwYXJzZUZsb2F0KGV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4cCA9IHNlcnZpY2UuZ2V0S2V5KGV4cCk7XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXihtb2RlbFxcLik/KFxcUyspJC8pO1xuXG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtwYXRoLnNoaWZ0KCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICYmIHN0YXJ0W3BhdGhbMF1dO1xuICAgICAgfSxcblxuICAgICAgZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKG5vQ29uc3RydWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoL15cXGQ/JC8udGVzdChwYXRoWzBdKSkge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9iajogc3RhcnQsXG4gICAgICAgICAga2V5OiBwYXRoWzBdLFxuICAgICAgICAgIHBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzKSxcbiAgICAgICAgICBmdWxsUGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MuY29uY2F0KHBhdGguc2xpY2UoMCwgMSkpKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgc2V0KHZhbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBpZih2YWwgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSh7IG5vQ29uc3RydWN0aW9uOiB0cnVlIH0pIHx8IHt9O1xuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLmRlZmF1bHRzW3Jlc29sdmVkLnJlcGxhY2UoJ21vZGVsLicsICcnKV07XG4gICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIHNlcnZpY2Uuc2lsZW5jZUxpc3RlbmVycyhyZXNvbHZlZCwgZGVwdGgpO1xuICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRzKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpbGVuY2VMaXN0ZW5lcnMoa2V5U3RhcnQsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgaWYoa2V5LmluZGV4T2Yoa2V5U3RhcnQpID09PSAwKSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBkZXB0aCkuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBjb25zdCBrZXlzID0gXy5maWx0ZXIoXy5rZXlzKHNlcnZpY2UuZm9ybUNhY2hlKSwgKGspID0+IGsuc3RhcnRzV2l0aChrcykpO1xuICAgIGxldCBza2lwS2V5cyA9IFtdO1xuICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaW5kZXgpOyBcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZiAoXy5pc0FycmF5KG1vZGVsKSkge1xuICAgICAgICBjb25zdCBjaGlsZEtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtleSkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgXy5lYWNoKGNoaWxkS2V5cywgKGspID0+IHtcbiAgICAgICAgICAgIHNraXBLZXlzLnB1c2goayk7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVkQ2hpbGRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoaywgW2luZGV4LCBpXSk7XG4gICAgICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRDaGlsZEtleV0gPSB0cnVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFza2lwS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLFxuICAgIC8vIHNjb3BlIGZvciB0aGlzIHNlY3Rpb24gd2lsbCBzb29uIGJlIGVtaXR0ZWQsIHNvIGNhbiBza2lwXG4gICAgaWYoc2Vjb25kUGFzcykgcmV0dXJuO1xuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIGlmKCFmaWVsZC5yZXNvbHZlKSB7XG4gICAgICBmaWVsZC5yZXNvbHZlID0geyB9O1xuICAgICAgXy5lYWNoKGZpZWxkLmRhdGEsIChleHAsIHByb3ApID0+XG4gICAgICAgICAgZmllbGQucmVzb2x2ZVtgZGF0YS4ke3Byb3B9YF0gPSBleHBcbiAgICAgICk7XG4gICAgfVxuICAgIHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgaWYoIXZhbFByb3ApIHJldHVybjtcblxuICAgIGlmKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScpIHtcbiAgICAgIGlmKCF2YWwgfHwgIV8uaXNBcnJheSh2YWwpKSByZXR1cm47XG5cbiAgICAgIGxldCBtYXBWYWwgPSB2YWwubWFwKHggPT4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB4fSkpLmZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgIHJldHVybiBtYXBWYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogdmFsfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlbGVjdC5zY2hlbWE7XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlIHx8IHNlbGVjdC50aXRsZU1hcCkge1xuICAgICAgc2VsZWN0LmdldFRpdGxlTWFwID0gKCkgPT5cbiAgICAgICAgc2VsZWN0LnRpdGxlTWFwIHx8IHNlcnZpY2Uuc2NoZW1hLmRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV07XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zO1xuICAgICAgY29uc3QgcGFyYW1zS2V5cyA9IF8ua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IGZ1bmN0aW9uKHEpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gXyhwYXJhbXNLZXlzKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncScpIHtcbiAgICAgICAgICAgICAgYWNjW3F1ZXJ5UGFyYW1zW2tleV1dID0gcTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHF1ZXJ5UGFyYW1zW2tleV0pLmdldCgpO1xuICAgICAgICAgICAgICBhY2Nba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgLy8gd3JhcCBpbiBzdHJpbmcgc28gcmV0dXJucyB0cnV0aHkgd2hlbiBjb21waWxlZCwgYnV0IGNvbnZlcnRlZCB0byBudW1iZXIgd2l0aGluIGRpcmVjdGl2ZVxuICAgICAgaWYoIXBhcmFtc0tleXMubGVuZ3RoKSBzZWxlY3QubWluTG9va3VwID0gJzAnO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTtcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSksXG4gICAgICAgIHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpLFxuICAgICAgICBoYW5kbGVyO1xuXG4gICAgaWYoc2NoZW1hICYmIHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RGlzcGxheS5zZWxlY3REaXNwbGF5ID0gZmFsc2U7XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0RmllbGQua2V5LCBoYW5kbGVyLCBzZWxlY3RGaWVsZC51cGRhdGVTY2hlbWEsIHRydWUpO1xuICAgIC8vc2VydmljZS5wcm9jZXNzRmllbGQoc2VsZWN0RGlzcGxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYoaXRlbS5jb25kaXRpb24gIT09ICdmYWxzZScpIHtcbiAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbih2YWwsIHByZXYsIGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gZ2V0QXJyYXlJbmRleChrZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpbmRleCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICB2YXIgZm9ybUNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShjb3B5LmtleSksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBpZihrZXkgPT09IHNlbGVjdEtleSkgcmV0dXJuO1xuICAgICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICAgIHZhciBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaSk7XG4gICAgICAgIHZhciBzcGxpdEluZGV4ZWRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGluZGV4ZWRLZXkpO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgXy5lYWNoKGVsZW0sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcnVuIGhhbmRsZXIgb25jZSBhbGwgYXJyYXlDb3BpZXMgaGF2ZSBiZWVuIGluc3RhbnRpYXRlZFxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGtleU1hcCA9IF8ucGx1Y2soXy5yZWplY3Qoc2VsZWN0RGlzcGxheS5pdGVtcywge1wiY29uZGl0aW9uXCI6XCJmYWxzZVwifSksICdrZXknKTtcbiAgICB2YXIgb25jZSA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZnVuY3Rpb24oZXZlbnQsIGtleSkge1xuICAgICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKG1vZGVsKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IG1vZGVsLmxlbmd0aCAqIChrZXlNYXAubGVuZ3RoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhrZXlNYXAsIGtleSkpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvdW50ID09PSB0b3RhbCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIobnVsbCwgbnVsbCwgJ1snICsgaSArICddJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXNldENvdW50ID0gJHJvb3RTY29wZS4kb24oJ2ZsZXhGb3JtLnVwZGF0ZVBhZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9KTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKG9uY2UpO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gocmVzZXRDb3VudCk7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiB0aGUgZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgaWYoZGVmYXVsdHMgJiYgIW1vZGVsLmdldCgpKSB7XG4gICAgICBtb2RlbC5zZXQoZGVmYXVsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgc2VydmljZS5yZWZyZXNoU2NoZW1hID0gXy5kZWJvdW5jZShmdW5jdGlvbih1cGRhdGVTY2hlbWEpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBfLmV4dGVuZChjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKCksIHNlcnZpY2UucGFyYW1zKTtcbiAgICAgIHZhciBkaWZmID0gXy5vbWl0KGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKSwgJ3VwZGF0ZXMnKTtcbiAgICAgIHZhciBrZXlzO1xuXG4gICAgICBpZighXy5pc0VtcHR5KGRpZmYpIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgWyd1cGRhdGVTY2hlbWEnLCAndXBkYXRlcyddKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5pbmNyZW1lbnRVcGRhdGVzKCk7XG4gICAgICAgICAgLy9zZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgcmVnaXN0ZXIuZXhwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLnNjaGVtYSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOnNjaGVtYScsIHNjaGVtYS5kaWZmLnNjaGVtYSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5zY2hlbWEsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuXG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCBrZXkpO1xuXG4gICAgLy8gd2h5IGRvIHdlIHJlZHJhdz8gSWYgd2UncmUgZG9pbmcgaXQgdG8gc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgLy8gdGhhdCBoYXMgYmVlbiBhZGRyZXNzZWQgZnJvbSB0aGUgYW5ndWxhci1zY2hlbWEtZm9ybSBsaWJyYXJ5XG4gICAgLy8gaWYgdGhlcmUncyBhbm90aGVyIGlzc3VlLCB0cnkgdHJpZ2dlcmluZyB0aGUgc3BlY2lmaWMgYWN0aW9uIHJlcXVpcmVkXG4gICAgLy8gaW5zdGVhZCBvZiByZWRyYXdpbmcgdGhlIHdob2xlIGZvcm1cbiAgICBpZihyZWRyYXcgJiYgY3VycmVudC5yZWRyYXcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUT0RPOiBzZWUgaWYgdGhpcyBjYW4gYmUgcmVtb3ZlZCcpO1xuICAgICAgY3VycmVudC5yZWRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBpZihzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHNjaGVtYS5pdGVtcyAmJiBzY2hlbWEuaXRlbXMucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnW10uJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb3RLZXkoa2V5KSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGtleSkgPyBPYmplY3RQYXRoLnBhcnNlKGtleSkgOiBrZXkpLmpvaW4oJy4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoZmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBnZXREb3RLZXkoZmllbGQua2V5KSxcbiAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEVycm9ycygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQXJyYXlJbmRleChyZXNvbHZlLCBrZXkpIHtcbiAgICB3aGlsZShyZXNvbHZlLmluY2x1ZGVzKCdhcnJheUluZGV4JykpIHtcbiAgICAgIGlmKF8uaXNOdW1iZXIoa2V5KSkgcmV0dXJuIHJlc29sdmUucmVwbGFjZSgvYXJyYXlJbmRleC9nLCBrZXkpO1xuICAgICAgY29uc3QgYXJyYXlJbmRleEtleSA9IC8oW14uW10qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVsxXSArICdcXFxcWygtP1xcXFxkKylcXFxcXScpO1xuICAgICAgY29uc3QgaW5kZXggPSByZS5leGVjKGtleSk7XG4gICAgICBpZighaW5kZXgpIHJldHVybiByZXNvbHZlO1xuICAgICAgcmVzb2x2ZSA9IHJlc29sdmUucmVwbGFjZShuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMF0ucmVwbGFjZSgvKFxcW3xcXF0pL2csICdcXFxcJDEnKSwgJ2cnKSwgaW5kZXhbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5kZXgoa2V5KSB7XG4gICAgaWYoXy5pc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gXy5maW5kKGtleS5rZXksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gXy5pc051bWJlcihrZXkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvXFxbKFxcZCspXFxdLy5leGVjKGtleSlbMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGtleUNvcHk7XG4gICAgaWYgKCFfLmlzQXJyYXkoaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IFtpbmRleF07XG4gICAgfVxuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4Lmxlbmd0aCAmJiBrZXlDb3B5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgIGxldCBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXguc2hpZnQoKTtcbiAgICB9XG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZyxcbiAgICByZW1vdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zb2xlLmluZm8oJzo6IFJFU09MVkUgTUFQUElORyBDQUxMRUQgOjonKTtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxuXG4gIC8vIEhvbGRpbmcgb24gdG8gc2NvcGUgcmVmZXJlbmNlcyBjcmVhdGVzIG1lbW9yeSBsZWFrc1xuICBmdW5jdGlvbiByZW1vdmVNYXBwaW5nKHN0YXRlKSB7XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gbnVsbDtcbiAgICBwcm9taXNlTWFwW3N0YXRlXSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIEZGTW9kYWxMb2FkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBGRk1vZGFsTG9hZGVyVGFnKCk7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzLCBvbkFmdGVyRGlzbWlzcyB9IH0pID0+IHtcbiAgICAgICAgdm0ubW9kYWwgPSBtb2RhbDtcbiAgICAgICAgdm0ubW9kYWwucmVzdWx0LmZpbmFsbHkoZ29CYWNrKTtcblxuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgICAgICAgLmdldE1hcHBpbmcoJHN0YXRlUGFyYW1zLm1vZGFsKVxuICAgICAgICAudGhlbigoeyBzdGF0ZSwgb3B0aW9ucyB9KSA9PiAoe1xuICAgICAgICAgIG1vZGFsOiAkdWliTW9kYWwub3BlbihzdGF0ZSksXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDxuZy1mb3JtXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytc2NoZW1hPVwidm0uY29uZmlnLnNjaGVtYS5zY2hlbWFcIlxuICAgICAgICAgIHNmLWZvcm09XCJ2bS5mb3JtXCJcbiAgICAgICAgICBzZi1tb2RlbD1cInZtLm1vZGVsXCI+XG4gICAgICAgIDwvbmctZm9ybT5cbiAgICAgICAgPCEtLSBkZWJ1ZyBwYW5lbCB0byBkaXNwbGF5IG1vZGVsIC0tPlxuICAgICAgICA8c2VjdGlvbiBuZy1pZj1cInZtLmRlYnVnXCI+XG4gICAgICAgICAgPGpzb24tZXhwbG9yZXIganNvbi1kYXRhPVwidm0ubW9kZWwgfHwgJy4uLm1vZGVsIG5vdCBsb2FkZWQgeWV0J1wiLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmQ29uZmlnJyxcbiAgICAgIG1vZGVsOiAnPWZmTW9kZWwnLFxuICAgICAgZm9ybUluZGV4OiAnPWZmRm9ybUluZGV4JyxcbiAgICAgIGZvcm1OYW1lOiAnPWZmRm9ybU5hbWUnLFxuICAgICAgZGVsYXlGb3JtOiAnPWZmRGVsYXlGb3JtJyxcbiAgICAgIGNsZWFudXBFdmVudDogJz1mZkNsZWFudXBFdmVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtKGNuRmxleEZvcm1TZXJ2aWNlLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgY25GbGV4Rm9ybVRhZygpO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gdm0uY29uZmlnLnNjaGVtYTsgfSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGZvcm1DdHJsOiB2bS5jb25maWcuZm9ybUN0cmwsXG4gICAgICAgICAgZ2V0U2NoZW1hOiB2bS5jb25maWcuZ2V0U2NoZW1hLFxuICAgICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZtLnNlcnZpY2UuY29tcGlsZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuXG4gICAgY25GbGV4Rm9ybVNlcnZpY2UuZGVzdHJveVNlcnZpY2Uodm0uc2VydmljZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUhlYWRlcigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZIZWFkZXJDb25maWcnLFxuICAgICAgc3VibWl0OiAnJmZmU3VibWl0JyxcbiAgICAgIGxvYWRPZmZzY3JlZW46ICcmZmZMb2FkT2Zmc2NyZWVuJ1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm1IZWFkZXIsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUubGVhZFwiPnt7Ojp2bS50aXRsZS5sZWFkfX08L2g1PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxpIG5nLXNob3c9XCJ2bS50aXRsZS5pY29uXCIgY2xhc3M9XCJ7e3ZtLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0udGl0bGUubWFpbn19XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5zdWJcIj57ezo6dm0udGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uYnV0dG9uQ29udGFpbmVyQ2xhc3MgfHwgJ3BhZ2UtYWN0aW9uLWJ0bnMnfX1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgbmctbW91c2VvdmVyPVwidm0ubG9hZE9mZnNjcmVlbigpXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5yZXR1cm5TdHlsZSA/IHZtLnJldHVyblN0eWxlIDogJ2RlZmF1bHQtZGFyaydcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5yZXR1cm5TdGF0ZVwiXG4gICAgICAgICAgICAgICB1aS1zcmVmPVwie3t2bS5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0ucmV0dXJuVGV4dCB8fCAnQ2FuY2VsJ319XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4te3t2bS5jbG9zZUJ1dHRvbi5zdHlsZSA/IHZtLmNsb3NlQnV0dG9uLnN0eWxlIDogJ2RlZmF1bHQtZGFyayd9fVwiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY2xvc2VCdXR0b24uaGFuZGxlcigpXCI+XG4gICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cImJ1dHRvbiBpbiB2bS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIG5nLWNsYXNzPVwieydidG4tZ3JvdXAnOiBidXR0b24ub3B0aW9uc31cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmctc2hvdz1cImJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1pZj1cImJ1dHRvbi5vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8bGkgbmctcmVwZWF0PVwib3B0aW9uIGluIGJ1dHRvbi5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogb3B0aW9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cIm9wdGlvbi50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGF0YS11cGRhdGVkLWF0IHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgIGlkPVwiZGF0YS11cGRhdGVkLWF0XCJcbiAgICAgICAgICAgICBuZy1oaWRlPVwidm0uY29uZmlnLm5vRGF0YVwiPlxuICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS51cGRhdGVEYXRhKClcIj5VcGRhdGUgRGF0YTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgfTtcbn1cblxuZnVuY3Rpb24gRmxleEZvcm1IZWFkZXIoJHNjb3BlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgZnVuY3Rpb24gZmZIZWFkZXJUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZIZWFkZXJUYWcoKTtcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIC8vYWN0aXZhdGUoKTtcbiAgJHNjb3BlLiR3YXRjaCgndm0uY29uZmlnJywgYWN0aXZhdGUsIHRydWUpO1xuXG4gIC8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgKHsgdGl0bGU6IHZtLnRpdGxlIH0gPSB2bS5jb25maWcpO1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImZ1bmN0aW9uIGZmVmFsaWRhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBzY29wZTogeyBmb3JtOiAnPWZmVmFsaWRhdGUnIH0sXG4gICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgIGxpbms6IGxpbmtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW0sIGF0dHJzLCBuZ01vZGVsKSB7XG4gIGZ1bmN0aW9uIGZmVmFsaWRhdGVUYWcoKSB7fVxuICAkc2NvcGUuX190YWcgPSBuZXcgZmZWYWxpZGF0ZVRhZygpO1xuXG4gIGlmKCRzY29wZS5mb3JtICYmICRzY29wZS5mb3JtLnJlcXVpcmVkKSB7XG4gICAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIG5nTW9kZWwuJHZpZXdWYWx1ZTsgfSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHNjaGVtYUZvcm0gdmFsaWRhdGlvblxuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCd0djQtMzAyJywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=