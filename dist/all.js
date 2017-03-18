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
	
	console.log(_cnFlexForm3.default);
	
	exports.default = angular.module('cn.flex-form', ['ui.router', 'schemaForm', 'ui.bootstrap.datetimepicker', 'cnTagsInput',
	//'ngJsonExplorer',
	'cn.util']).provider('cnFlexFormConfig', _cnFlexFormConfig2.default).provider('cnFlexFormTypes', _cnFlexFormTypes2.default).provider('cnFlexFormRoutes', _cnFlexForm.cnFlexFormRoutesProvider).config(_cnFlexForm.cnFlexFormRoutes).config(_schemaFormExtensions.schemaFormConfig).run(_schemaFormExtensions.addTemplates).provider('cnFlexFormService', _cnFlexForm3.default).provider('cnFlexFormModalLoaderService', _cnFlexFormModalLoader2.default).factory('FlexFormModal', _cnFlexFormModalLoader3.FlexFormModal).controller('FlexFormModalLoader', _cnFlexFormModalLoader3.FlexFormModalLoader).directive('cnFlexForm', _cnFlexForm5.default).directive('cnFlexFormHeader', _cnFlexFormHeader2.default).directive('ffValidate', _cnFlexFormValidate2.default).name;

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
	
	//angular
	//.module('cn.flex-form')
	//.provider('cnFlexFormRoutes', cnFlexFormRoutesProvider)
	//.config(cnFlexFormRoutes);
	
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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-mediaupload.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               ng-show="showTitle()"\n               for="{{form.key && form.key[0]}}">{{form.title}}</label>\n        <media-upload ng-model="$$value$$"\n                      cn-file-type="form.fileType"\n                      cn-upload-path="form.uploadPath"\n                      cn-data="form.data"\n                      cn-preview-path="form.previewPath"\n                      cn-model-value-key="form.modelValueKey"\n                      ng-model-options="form.ngModelOptions"\n                      sf-changed="form"\n                      schema-validate="form"\n                      ff-form="form"\n                      class="clearfix">\n        </media-upload>\n        <span class="help-block" sf-message="form.description"></span>\n     </div>');
	
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
	  _.extend(CNFlexFormConstructor, prototype, { getService: getService });
	
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
	      (function () {
	        var key = exp.replace('model.', '');
	        var genericKey = stripIndexes(key);
	        var cachedField = service.getFromFormCache(key) || service.getFromFormCache(genericKey);
	
	        data = function () {
	          if (cachedField && cachedField.default) return cachedField.default;
	          if (angular.isDefined(field.default)) return field.default;
	          var schema = service.getSchema(genericKey);
	          if (schema) return schema.default;
	        }();
	      })();
	    }
	
	    if (data && data.cursor) {
	      field.loadMore = function () {
	        var dataProp = exp.match(/schema\.data\.(.+)/)[1];
	        service.refreshSchema('data:' + dataProp + ':' + data.cursor);
	      };
	    } else {
	      delete field.loadMore;
	    }
	
	    field[fieldProp] = data && data.data ? data.data : data;
	
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
	        var adjustment;
	
	        (function () {
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
	            adjustment = {};
	
	
	            adjustment.date = resolution.match(/\+ ?(\d+) days/);
	
	            if (adjustment.date) {
	              adjustment.date = adjustment.date[1];
	              resolution = resolution.replace(adjustment.date, '').trim();
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
	                  update.set(moment(from.get()).add(adjustment.date, 'days').toDate());
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
	        })();
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
	          (function () {
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
	          })();
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
	    _.each(field.data, function (dataProp, key) {
	      field.data[key] = service.parseExpression(dataProp).get();
	    });
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
	      (function () {
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
	      })();
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
	    resolveMapping: resolveMapping
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
	}
	
	//angular
	//.module('cn.flex-form')
	//.provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);
	
	exports.default = cnFlexFormModalLoaderServiceProvider;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	FlexFormModalLoader.$inject = ["FlexFormModal", "$state", "$rootScope", "$stateParams"];
	FlexFormModal.$inject = ["cnFlexFormModalLoaderService", "$uibModal", "$stateParams"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams) {
	  'ngInject';
	
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
	    console.log('dismissModal');
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
	
	//angular
	//.module('cn.flex-form')
	//.controller('FlexFormModalLoader', FlexFormModalLoader)
	//.factory('FlexFormModal', FlexFormModal);
	
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
	    template: '\n      <div ng-if="vm.showForm()">\n        <ng-form \n          class="clearfix"\n          name="{{vm.formName}}"\n          sf-schema="vm.config.schema.schema"\n          sf-form="vm.form"\n          sf-model="vm.model">\n        </ng-form>\n        <!-- debug panel to display model -->\n        <section ng-if="vm.debug">\n          <json-explorer json-data="vm.model || \'...model not loaded yet\'"/>\n        </section>\n      </div>\n    ',
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
	        console.log('vm.service.isCompiled():', vm.service.isCompiled());
	        vm.service.compile(vm.config.schema, vm.model);
	      }
	      //$scope.$broadcast('schemaFormRedraw');
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
	    vm.service.cleanup();
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
	    console.log('updateData:', updateData);
	    $scope.$emit('ffRefreshData');
	  }
	
	  function isDisabled(btnConfig) {
	    if (vm.config.isDisabled) return vm.config.isDisabled(btnConfig);
	    return false;
	  }
	}
	
	//angular
	//.module('cn.flex-form')
	//.directive('cnFlexFormHeader', cnFlexFormHeader);
	
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
	  //console.log('$scope, ngModel:', $scope.form, ngModel);
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
	
	//angular
	//.module('cn.flex-form')
	//.directive('ffValidate', ffValidate);
	
	exports.default = ffValidate;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNjg2OTlhMjE1MTUyOWE0MmI5OCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwic2Vjb25kUGFzcyIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRGVmYXVsdCIsImRlZmF1bHQiLCJyZWdpc3RlckhhbmRsZXIiLCJ1cGRhdGVTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbmNyZW1lbnRVcGRhdGVzIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0Rpc3BsYXkiLCJwcm9jZXNzRmllbGQiLCJwcm9jZXNzRmllbGRzZXQiLCJwcm9jZXNzRmllbGRQcm9wcyIsInByb2Nlc3NDb21wb25lbnQiLCJwcm9jZXNzQ3VycmVuY3kiLCJwcm9jZXNzUGVyY2VudGFnZSIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJwYXJhbXMiLCJleHRlbmQiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwiZ2V0U2NoZW1hRm9ybSIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiaXNEZWZpbmVkIiwibW9kZWxWYWx1ZSIsImdldCIsImhhcyIsImVxdWFscyIsImlzVHJ1bHlFbXB0eSIsInNldCIsImNvcHkiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiZ2V0T2dLZXlzIiwicmVqZWN0Iiwia2V5cyIsIl9vZ0tleXMiLCJkZXNjcmlwdGlvbiIsInJlYWRvbmx5Iiwic2hvd0NsZWFyQWxsIiwiJGJyb2FkY2FzdCIsImdldERvdEtleSIsImVycm9yIiwiaXNFbXB0eSIsIm5nTW9kZWxPcHRpb25zIiwiYWxsb3dJbnZhbGlkIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZGVwdGgiLCJwYXJzZSIsInByb3BlcnRpZXMiLCJzaGlmdCIsImV4cCIsIndhdGNoYWJsZXMiLCJuZXN0ZWQiLCJtYXRjaE5lc3RlZEV4cHJlc3Npb24iLCJyZXBsYWNlU3RyIiwicmVwbGFjZSIsInJlc29sdmUiLCJkYXRhUHJvcCIsImZpZWxkUHJvcCIsImFycmF5SW5kZXgiLCJ3YXRjaGFibGUiLCJtYXRjaCIsImJhc2UiLCJza2lwUHJvcEhhbmRsZXJzIiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJnZW5lcmljS2V5Iiwic3RyaXBJbmRleGVzIiwiY2FjaGVkRmllbGQiLCJjdXJzb3IiLCJsb2FkTW9yZSIsInJlZnJlc2hTY2hlbWEiLCJmaWVsZEtleSIsInJlZ2lzdGVyIiwiY29uZGl0aW9uYWxzIiwidmFsIiwicHJldiIsInNjb3BlIiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJhZGp1c3RtZW50IiwiY3VyIiwiZGF0ZSIsInRyaW0iLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicmVzdWx0IiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImFjYyIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJpbmRleCIsIiRlbWl0IiwidW5pbmRleGVkS2V5IiwiY29waWVzIiwic3BsaWNlIiwibGluayIsInBsdWNrIiwia2V5U3RhcnQiLCJmaWx0ZXIiLCJ3YXJuIiwibWF0Y2hJbnRTdHJJbmRleCIsInRvUmVwbGFjZSIsInJlcGxhY2VkIiwicGFyc2VkIiwia2V5VmFsIiwiaXNTdHIiLCJwYXJzZUZsb2F0IiwicmVzb2x2ZWQiLCJzdGFydCIsImdldEFzc2lnbmFibGUiLCJub0NvbnN0cnVjdGlvbiIsInByb2dyZXNzIiwib2JqIiwiZnVsbFBhdGgiLCJjb25jYXQiLCJzbGljZSIsIm9wdGlvbnMiLCJzaWxlbnQiLCJnZXRBcnJheUluZGV4Iiwia3MiLCJrIiwic2tpcEtleXMiLCJpbmRleGVkS2V5IiwiY2hpbGRLZXlzIiwiaW5kZXhlZENoaWxkS2V5IiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsImQiLCJwYXJzZUludCIsInN0YXJ0T2YiLCJ2aWV3Rm9ybWF0dGVyIiwiZGF0ZUZvcm1hdCIsInZpZXdQYXJzZXIiLCJnZXRTZWxlY3RWYWxQcm9wIiwic2VsZWN0IiwidmFsdWVQcm9wZXJ0eSIsImdldEFsbG93ZWRTZWxlY3RWYWx1ZSIsImdldFRpdGxlTWFwIiwidmFsUHJvcCIsIm1hcFZhbCIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInEiLCJ0aXRsZVF1ZXJ5IiwibWluTG9va3VwIiwib25BZGQiLCJkaXNwbGF5Rm9ybWF0IiwiaXRlbUZvcm1hdHRlciIsImRldGFpbGVkTGlzdCIsImRlc3Ryb3lTdHJhdGVneSIsInNlbGVjdGlvblN0eWxlIiwibWF4SXRlbXMiLCJ2YWxpZCIsIiRzZXREaXJ0eSIsInRvZ2dsZSIsImhlbHAiLCJkaXNwbGF5IiwiZ2V0RGlzcGxheSIsInRwbCIsInBhcnNlU2NvcGUiLCJwcm9jZXNzb3IiLCJ0YWJsZSIsInJvdyIsImNvbHVtbnMiLCJzZWxlY3REaXNwbGF5Iiwic2VsZWN0RmllbGQiLCJzZWxlY3RLZXkiLCJzcGxpdEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RWYWx1ZSIsImZvcm1Db3BpZXMiLCJlbGVtIiwic3BsaXRJbmRleGVkS2V5Iiwic2VsZWN0TW9kZWwiLCJpdGVtVmFsdWUiLCJjb3VudCIsImtleU1hcCIsIm9uY2UiLCJyZXNldENvdW50IiwicmVmcmVzaCIsImRlYm91bmNlIiwiZGlmZiIsInRoZW4iLCJyZWZyZXNoRGF0YSIsInJlc2V0IiwicmVnaXN0ZXJzIiwicmVwcm9jZXNzU2NoZW1hIiwiY2FjaGVkIiwiY3VycmVudCIsImlzQ2hpbGQiLCJyZWRyYXciLCJzdWJLZXkiLCJqb2luIiwibWVzc2FnZSIsImFycmF5SW5kZXhLZXkiLCJleGVjIiwicmUiLCJSZWdFeHAiLCJhc0FycmF5Iiwia2V5Q29weSIsImNsb25lIiwiaW5kZXhPZkluZGV4IiwibW9kYWxNYXAiLCJwcm9taXNlTWFwIiwiZ2V0UHJvbWlzZXMiLCJwcm9taXNlIiwiZ2V0UHJvbWlzZSIsIiRxIiwicHJvbWlzZXMiLCJkZWZlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UiLCJkZWYiLCJwYXJlbnQiLCJtb2RhbCIsIm1vZGFsSWQiLCJnZXRNYXBwaW5nIiwicmVzb2x2ZU1hcHBpbmciLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwib25BZnRlckRpc21pc3MiLCJmaW5hbGx5IiwiZ29CYWNrIiwiY2F0Y2giLCJyZXN0UGFyYW1zIiwiZGlzbWlzc0V2ZW50IiwiZGlzbWlzc01vZGFsIiwidHJhbnNpdGlvbiIsImdvIiwiZGlzbWlzcyIsIiR1aWJNb2RhbCIsImNuRmxleEZvcm0iLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZm9ybUluZGV4IiwiZm9ybU5hbWUiLCJkZWxheUZvcm0iLCJjbGVhbnVwRXZlbnQiLCJGbGV4Rm9ybSIsImJpbmRUb0NvbnRyb2xsZXIiLCJjbkZsZXhGb3JtU2VydmljZSIsIiRzY29wZSIsIiRsb2NhdGlvbiIsInByb2Nlc3MiLCJzaG93Rm9ybSIsInNlYXJjaCIsImNuRmxleEZvcm1IZWFkZXIiLCJzdWJtaXQiLCJsb2FkT2Zmc2NyZWVuIiwiRmxleEZvcm1IZWFkZXIiLCJ1cGRhdGVEYXRhIiwiaXNEaXNhYmxlZCIsInRpdGxlIiwiYWN0aW9uQ29uZmlnIiwicmV0dXJuU3RhdGUiLCJyZXR1cm5TdHlsZSIsInJldHVyblRleHQiLCJjbG9zZUJ1dHRvbiIsImFjdGlvbnMiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwicmVxdWlyZWQiLCIkdmlld1ZhbHVlIiwiJHNldFZhbGlkaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFRQyxHQUFSOzttQkFFZUMsUUFDWkMsTUFEWSxDQUNMLGNBREssRUFDVyxDQUN0QixXQURzQixFQUV0QixZQUZzQixFQUd0Qiw2QkFIc0IsRUFJdEIsYUFKc0I7QUFLdEI7QUFDQSxVQU5zQixDQURYLEVBU1pDLFFBVFksQ0FTSCxrQkFURyw4QkFVWkEsUUFWWSxDQVVILGlCQVZHLDZCQVdaQSxRQVhZLENBV0gsa0JBWEcsd0NBWVpDLE1BWlksK0JBYVpBLE1BYlkseUNBY1pDLEdBZFkscUNBZVpGLFFBZlksQ0FlSCxtQkFmRyx3QkFnQlpBLFFBaEJZLENBZ0JILDhCQWhCRyxtQ0FpQlpHLE9BakJZLENBaUJKLGVBakJJLHlDQWtCWkMsVUFsQlksQ0FrQkQscUJBbEJDLCtDQW1CWkMsU0FuQlksQ0FtQkYsWUFuQkUsd0JBb0JaQSxTQXBCWSxDQW9CRixrQkFwQkUsOEJBcUJaQSxTQXJCWSxDQXFCRixZQXJCRSxnQ0FzQlpDLEk7Ozs7OztBQ25DSDs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9B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QUFNLGFBQVIsRUFGRjtBQUdMekgsY0FBUyxTQUhKO0FBSUwyUSxXQUFNQTtBQUpELElBQVA7QUFNRDs7QUFFRCxVQUFTQSxJQUFULENBQWMySyxNQUFkLEVBQXNCM0UsSUFBdEIsRUFBNEIrRixLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUM7QUFDQSxPQUFHckIsT0FBTzdULElBQVAsSUFBZTZULE9BQU83VCxJQUFQLENBQVltVixRQUE5QixFQUF3QztBQUN0Q3RCLFlBQU81TCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU9pTixRQUFRRSxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVMzZixLQUFULEVBQWdCO0FBQ3ZFO0FBQ0F5ZixlQUFRRyxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FILGVBQVFHLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0M1ZixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOztBQUVEO0FBQ0k7QUFDQTs7bUJBRVd1ZixVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNjg2OTlhMjE1MTUyOWE0MmI5OCIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zb2xlLmxvZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgLy8nbmdKc29uRXhwbG9yZXInLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgICAuY2hhaW4oJHN0YXRlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgICAub21pdChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2KSB8fCBfLmlzTnVsbCh2KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Db25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcigpIHtcblxuICB2YXIgZmllbGRUeXBlUmVnaXN0ZXIgPSBbe1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hpZGRlbicsXG4gICAgdHlwZTogJ2hpZGRlbidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvcydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9idXR0b25zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvYnV0dG9ucydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnYXV0b2NvbXBsZXRlJykgfHwgZmllbGQudGl0bGVNYXAgfHwgZmllbGQudGl0bGVNYXBSZXNvbHZlIHx8IGZpZWxkLnRpdGxlTWFwUXVlcnksXG4gICAgdHlwZTogJ2NuLWF1dG9jb21wbGV0ZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NuLWRhdGV0aW1lcGlja2VyJyB8fCBmaWVsZC50eXBlID09PSAnZGF0ZXRpbWUtbG9jYWwnIHx8IGZpZWxkLnR5cGUgPT09ICd0aW1lLW1pbnV0ZXMnLFxuICAgIHR5cGU6ICdjbi1kYXRldGltZXBpY2tlcidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hlbHAnLFxuICAgIHR5cGU6ICdoZWxwJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdkaXNwbGF5JyksXG4gICAgdHlwZTogJ2NuLWRpc3BsYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQuaW5jbHVkZXMoJ2N1cnJlbmN5JyksXG4gICAgdHlwZTogJ2NuLWN1cnJlbmN5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCA9PT0gJ3BlcmNlbnRhZ2UnLFxuICAgIHR5cGU6ICdjbi1wZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbmZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIHJlYWQtb25seT1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgdW5kZWZpbmVkLWNsYXNzPVwiZm9ybS51bmRlZmluZWRDbGFzc1wiLz5cbiAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5vblRleHQgJiYgZm9ybS5vZmZUZXh0XCI+XG4gICAgICAgICAgICB7eyQkdmFsdWUkJCA9PT0gZm9ybS5vblZhbHVlID8gZm9ybS5vblRleHQgOiBmb3JtLm9mZlRleHR9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGF0ZXRpbWVwaWNrZXIuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZGF0ZXRpbWVwaWNrZXJcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgaXMtZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBtaW4tZGF0ZT1cImZvcm0ubWluRGF0ZVwiXG4gICAgICAgICAgbWF4LWRhdGU9XCJmb3JtLm1heERhdGVcIlxuICAgICAgICAgIG1heC12aWV3PVwie3tmb3JtLm1heFZpZXd9fVwiXG4gICAgICAgICAgY24tZGF0ZS1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLnR5cGV9fVwiXG4gICAgICAgICAgbW9kZWwtZm9ybWF0dGVyPVwiZm9ybS5tb2RlbEZvcm1hdHRlclwiXG4gICAgICAgICAgbW9kZWwtcGFyc2VyPVwiZm9ybS5tb2RlbFBhcnNlclwiXG4gICAgICAgICAgdmlldy1mb3JtYXR0ZXI9XCJmb3JtLnZpZXdGb3JtYXR0ZXJcIlxuICAgICAgICAgIHZpZXctcGFyc2VyPVwiZm9ybS52aWV3UGFyc2VyXCJcbiAgICAgICAgICBmb3JtYXQtc3RyaW5nPXt7Zm9ybS5kYXRlRm9ybWF0fX1cbiAgICAgICAgICBpY29uLWNsYXNzPXt7Zm9ybS5pY29uQ2xhc3N9fT5cbiAgICAgICAgPC9jbi1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgdmFyIHNoYXJlZEF1dG9jb21wbGV0ZVRwbCA9IGBcbiAgICAgICAgPHRhZ3MtaW5wdXRcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5PVwie3tmb3JtLmRpc3BsYXlQcm9wZXJ0eSB8fCAnbmFtZSd9fVwiXG4gICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJ7e2Zvcm0udmFsdWVQcm9wZXJ0eX19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlciB8fCAnICd9fVwiXG4gICAgICAgICAgY2xlYXItb24tYmx1cj1cInRydWVcIlxuICAgICAgICAgIGFkZC1vbi1jb21tYT1cImZhbHNlXCJcbiAgICAgICAgICBhZGQtZnJvbS1hdXRvY29tcGxldGUtb25seT1cInt7IWZvcm0uYWxsb3dOZXd9fVwiXG4gICAgICAgICAgb24tYmVmb3JlLXRhZy1hZGRlZD1cImZvcm0ub25BZGQoe3ZhbHVlOiAkdGFnfSwgZm9ybSwgJGV2ZW50LCAkcHJldilcIlxuICAgICAgICAgIG9uLWluaXQ9XCJmb3JtLm9uSW5pdCgkdGFnLCBmb3JtLCAkZXZlbnQsICRzZXR0ZXIpXCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLmdldFNjaGVtYVR5cGUoKX19XCJcbiAgICAgICAgICBhcnJheS12YWx1ZS10eXBlPVwie3tmb3JtLnNjaGVtYS5pdGVtcy50eXBlfX1cIlxuICAgICAgICAgIGhpZGUtdGFncz1cInt7Zm9ybS5kZXRhaWxlZExpc3R9fVwiXG4gICAgICAgICAgdGFncy1zdHlsZT1cInt7Zm9ybS5zZWxlY3Rpb25TdHlsZX19XCJcbiAgICAgICAgICByZXF1aXJlZD1cInt7Zm9ybS5yZXF1aXJlZH19XCJcbiAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxlbmd0aH19XCJcbiAgICAgICAgICBhbGxvd2VkLXRhZ3MtcGF0dGVybj1cIi4qXCJcbiAgICAgICAgICBkcm9wZG93bi1pY29uPVwidHJ1ZVwiXG4gICAgICAgICAgaXRlbS1mb3JtYXR0ZXI9XCJmb3JtLml0ZW1Gb3JtYXR0ZXJcIlxuICAgICAgICAgIG1pbi10YWdzPVwie3tmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMH19XCJcbiAgICAgICAgICBhbGxvdy1idWxrPVwie3tmb3JtLmJ1bGtBZGR9fVwiXG4gICAgICAgICAgYnVsay1kZWxpbWl0ZXI9XCJ7e2Zvcm0uYnVsa0RlbGltaXRlcn19XCJcbiAgICAgICAgICBidWxrLXBsYWNlaG9sZGVyPVwie3tmb3JtLmJ1bGtQbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1idXR0b249XCJ0cnVlXCI+XG4gICAgICAgICAgPGF1dG8tY29tcGxldGVcbiAgICAgICAgICAgIHNvdXJjZT1cImZvcm0uZ2V0VGl0bGVNYXAgJiYgZm9ybS5nZXRUaXRsZU1hcCgpIHx8IGZvcm0udGl0bGVRdWVyeSgkcXVlcnkpXCJcbiAgICAgICAgICAgIHNraXAtZmlsdGVyaW5nPVwie3tmb3JtLnRpdGxlUXVlcnkgPyB0cnVlIDogZmFsc2V9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cCB8fCAoZm9ybS50aXRsZVF1ZXJ5ICYmIDMgfHwgMCl9fVwiPlxuICAgICAgICAgIDwvYXV0by1jb21wbGV0ZT5cbiAgICAgICAgPC90YWdzLWlucHV0PmA7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUtZGV0YWlsZWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8b2wgc2YtYXJyYXk9XCJmb3JtXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvcHlXaXRoSW5kZXgoJGluZGV4KVwiLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jdXJyZW5jeS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+JDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktZm9ybWF0PVwie3tmb3JtLmN1cnJlbmN5Rm9ybWF0fX1cIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1wbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldCBcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvbWVkaWEtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3N2dXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y3N2LXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jc3YtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmV1c2FibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1yZXVzYWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tc2VsZWN0LW9yXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBzZWxlY3QtZnJvbT1cImZvcm0ubGlicmFyeVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgIGRpcmVjdGl2ZUlkPVwiZm9ybS5kaXJlY3RpdmVJZFwiXG4gICAgICAgICAgaXRlbS10ZW1wbGF0ZT1cImZvcm0uaXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICB0b2dnbGUtdGV4dD1cImZvcm0udG9nZ2xlVGV4dFwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICB2aWV3PVwiZm9ybS52aWV3XCI+XG4gICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgPC9jbi1zZWxlY3Qtb3I+XG4gICAgICAgIDxwIG5nLWlmPVwiZm9ybS5sb2FkTW9yZSAmJiBmb3JtLnZpZXcgPT09ICdsaXN0J1wiPlxuICAgICAgICAgIDxhIG5nLWNsaWNrPVwiZm9ybS5sb2FkTW9yZSgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj5Mb2FkIE1vcmU8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10YWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWZmLXRhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxoNj57e2Zvcm0udGl0bGV9fTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiBmb3JtLmNvbHVtbnNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPnt7Y29sLmNvbHVtbkhlYWRlcn19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLXJlcGVhdD1cInJvdyBpbiBmb3JtLml0ZW1zXCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gcm93Lml0ZW1zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb2xcIj48L3NmLWRlY29yYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xufVxuXG5leHBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2hlbWEtZm9ybS1leHRlbnNpb25zLmpzIiwiLy8gTmVlZCB0aGVzZSBtb2R1bGVzIGZvciB0ZXN0IGJ1bmRsZVxudmFyIF8gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuXyB8fCByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBPYmplY3RQYXRoID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk9iamVjdFBhdGggfHwgcmVxdWlyZSgnb2JqZWN0cGF0aCcpO1xuXG5jb25zdCBmaWVsZFR5cGVIYW5kbGVycyA9IHtcbiAgJ2ZpZWxkc2V0JzogJ3Byb2Nlc3NGaWVsZHNldCcsXG4gICdjbi1yYWRpb3MnOiAncHJvY2Vzc1JhZGlvcycsXG4gICdjbi1yYWRpb2J1dHRvbnMnOiAncHJvY2Vzc1JhZGlvYnV0dG9ucycsXG4gICdjbi1hdXRvY29tcGxldGUnOiAncHJvY2Vzc1NlbGVjdCcsXG4gICdjbi1kYXRldGltZXBpY2tlcic6ICdwcm9jZXNzRGF0ZScsXG4gICdoZWxwJzogJ3Byb2Nlc3NIZWxwJyxcbiAgJ2NuLWRpc3BsYXknOiAncHJvY2Vzc0Rpc3BsYXknLFxuICAnY24tY3VycmVuY3knOiAncHJvY2Vzc0N1cnJlbmN5JyxcbiAgJ2NuLXBlcmNlbnRhZ2UnOiAncHJvY2Vzc1BlcmNlbnRhZ2UnLFxuICAnY24tbWVkaWF1cGxvYWQnOiAncHJvY2Vzc01lZGlhVXBsb2FkJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknXG59O1xuXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzU2VsZWN0RGlzcGxheShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3dhdGNoJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBmaWVsZC53YXRjaCAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKVxufSwge1xuICBwcm9wOiAndHlwZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT4gc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ2RlZmF1bHQnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IFxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkcm9vdFNjb3BlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluY3JlbWVudFVwZGF0ZXMsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgaWYoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgWyBzY2hlbWEsIG1vZGVsLCBjb25maWcgXSA9IGFyZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIH0gPSBhcmdzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGN1clNlcnZpY2UgPSBnZXRTZXJ2aWNlKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLm1vZGVsID09PSBtb2RlbCk7XG4gICAgaWYoY3VyU2VydmljZSkge1xuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGN1clNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgc2VydmljZXMucHVzaChuZXdTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV3U2VydmljZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5zY29wZUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuICAgIHRoaXMuc2tpcERlZmF1bHQgPSB7fTtcblxuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgZGVmYXVsdCBpcyByZXR1cm5lZCBmb3IgbmV3IGZvcm0sIHRyZWF0IGl0IGFzIGEgcHJldmlvdXMgcGFyYW0gaW4gb3JkZXIgdG8gbm90IHRyaWdnZXIgdW5uZWNlc3NhcnkgdXBkYXRlU2NoZW1hXG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgYW5ndWxhci5pc0RlZmluZWQoY3VyRGVmYXVsdCkgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1ckRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLy8gaWYgc2NoZW1hVXBkYXRlIGhhc24ndCBiZWVuIHRyaWdnZXJlZCwgbGV0IHNjaGVtYUZvcm0gZGlyZWN0aXZlIGhhbmRsZSBkZWZhdWx0c1xuICAgIC8vaWYoc2VydmljZS51cGRhdGVzIHx8IGZpZWxkLmRlZmF1bHQpIHtcbiAgICBpZighXy5pc1VuZGVmaW5lZChjdXJEZWZhdWx0KSkge1xuICAgICAgaWYoa2V5LmluY2x1ZGVzICYmIGtleS5pbmNsdWRlcygnW10nKSkgcmV0dXJuO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IG1vZGVsLmdldCgpO1xuICAgICAgLy8gaWYgdGhlcmUncyBhbiBleGlzdGluZyBkZWZhdWx0IGFuZCBpdCdzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIG5ldyBkZWZhdWx0XG4gICAgICBpZigoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSA/IGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkgOiBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSkgJiZcbiAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpKSB7XG4gICAgICAvL2lmICgoXG4gICAgICAgIC8vKCFfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpKSB8fFxuICAgICAgICAvLyhfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpXG4gICAgICAvLykgJiYgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpKSB7XG4gICAgICAgIG1vZGVsLnNldChhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPZ0tleXMoZmllbGQpIHtcbiAgICByZXR1cm4gXy5yZWplY3QoXG4gICAgICBfLmtleXMoZmllbGQpLFxuICAgICAgKGtleSkgPT4gL15rZXkkfF5odG1sQ2xhc3MkfF5fLy50ZXN0KGtleSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IGdldE9nS2V5cyhmaWVsZCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKGZpZWxkLnJlYWRvbmx5ICYmICFzY2hlbWEucmVhZG9ubHkpIGZpZWxkLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICAoKGtleSkgPT4ge1xuICAgICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSk7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKGdldERvdEtleShrZXkpKTtcbiAgICAgIFxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+IFxuICAgICAgICAgIC9eKC0/XFxkKikkLy50ZXN0KG5leHQpID8gdG90YWwgKyAnWycgKyBuZXh0ICsgJ10nIDogdG90YWwgKyAnLicgKyBuZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjaGVtYShrZXksIGRlcHRoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFrZXkpIHJldHVybjtcblxuICAgIGtleSA9IE9iamVjdFBhdGgucGFyc2Uoc2VydmljZS5nZXRLZXkoa2V5KSk7XG4gICAgZGVwdGggPSBkZXB0aCB8fCBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllcztcblxuICAgIGxldCBmaXJzdCwgbmV4dDtcblxuICAgIHdoaWxlKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICBmaXJzdCA9IGtleVswXTtcbiAgICAgIG5leHQgPSBrZXlbMV07XG4gICAgICBpZigvXi0/XFxkKiQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgaWYoa2V5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0uaXRlbXMucHJvcGVydGllcztcbiAgICAgICAgICBrZXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLnByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYXJyYXkgaXRlbVxuICAgIGZpcnN0ID0ga2V5WzBdIHx8ICdpdGVtcyc7XG5cbiAgICByZXR1cm4gZGVwdGhbZmlyc3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkID0gZmllbGQua2V5ID8gZmllbGQgOiBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZmllbGQpO1xuICAgIHJldHVybiBmaWVsZCAmJiAoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkgPyBmaWVsZC5kZWZhdWx0IDogZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5kZWZhdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdhdGNoYWJsZXMoZXhwKSB7XG4gICAgY29uc3Qgd2F0Y2hhYmxlcyA9IFtdO1xuICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICBsZXQgcmVwbGFjZVN0ciA9ICcnO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBpZigvXi0/XFxkKyQvLnRlc3QobmVzdGVkWzFdKSB8fCAvXihcInwnKS4qKFwifCcpJC8udGVzdChuZXN0ZWRbMV0pKSB7XG4gICAgICAgIHJlcGxhY2VTdHIgPSBuZXN0ZWRbMF07XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJ2ZmX3JlcGxhY2VfZmYnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3YXRjaGFibGVzLnB1c2gobmVzdGVkWzFdLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cikpO1xuICAgICAgICByZXBsYWNlU3RyID0gJyc7XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJycpO1xuICAgICAgfVxuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi53YXRjaGFibGVzLCBleHAucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goZmllbGQucmVzb2x2ZSwgZnVuY3Rpb24oZGF0YVByb3AsIGZpZWxkUHJvcCkge1xuICAgICAgZGF0YVByb3AgPSByZXBsYWNlQXJyYXlJbmRleChkYXRhUHJvcCwga2V5IHx8IGZpZWxkLmFycmF5SW5kZXgpO1xuICAgICAgaWYoZGF0YVByb3AuaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSByZXR1cm47XG5cbiAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgdHJ1ZSk7XG5cbiAgICAgIGdldFdhdGNoYWJsZXMoZGF0YVByb3ApLmZvckVhY2goKHdhdGNoYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBbLCBiYXNlLCBleHBdID0gd2F0Y2hhYmxlLm1hdGNoKC8oc2NoZW1hXFwuZGF0YVxcLnxtb2RlbFxcLikoXFxTKykvKSB8fCBbXTtcblxuICAgICAgICBpZihiYXNlKSB7XG4gICAgICAgICAgaWYoYmFzZSA9PT0gJ3NjaGVtYS5kYXRhLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgZGF0YVByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGJhc2UgPT09ICdtb2RlbC4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihleHAsICgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgc2tpcFByb3BIYW5kbGVycykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBkYXRhO1xuICAgIC8vIGRvZXMgZGVjbGFyYXRpdmUvZnVuY3Rpb25hbCBvdXR3ZWlnaCBwZXJmb3JtYW5jZT9cbiAgICBpZihleHAuaW5jbHVkZXMoJyB8fCAnKSkge1xuICAgICAgbGV0IGVpdGhlcnMgPSBleHAuc3BsaXQoJyB8fCAnKTtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlaXRoZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZWl0aGVyc1tpXSkuZ2V0KCk7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHgpKSB7XG4gICAgICAgICAgZGF0YSA9IHg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihleHAuaW5jbHVkZXMoJyAmJiAnKSkge1xuICAgICAgbGV0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGFsbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFsbFtpXSkuZ2V0KCk7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHgpKSBkYXRhID0geDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRhdGEgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIHJlc29sdmluZyBmcm9tIG1vZGVsIGJ1dCBkZWZhdWx0cyBoYXZlbid0IGJlZW4gYXBwbGllZCB5ZXQsIHJlc29sdmUgZnJvbSBkZWZhdWx0IGl0c2VsZlxuICAgIGlmKCFkYXRhICYmIGV4cC5pbmRleE9mKCdtb2RlbC4nKSA9PT0gMCkge1xuICAgICAgY29uc3Qga2V5ID0gZXhwLnJlcGxhY2UoJ21vZGVsLicsICcnKTtcbiAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgIGNvbnN0IGNhY2hlZEZpZWxkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkgfHwgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGdlbmVyaWNLZXkpO1xuXG4gICAgICBkYXRhID0gKCgpID0+IHtcbiAgICAgICAgaWYoY2FjaGVkRmllbGQgJiYgY2FjaGVkRmllbGQuZGVmYXVsdClcbiAgICAgICAgICByZXR1cm4gY2FjaGVkRmllbGQuZGVmYXVsdDtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkpXG4gICAgICAgICAgcmV0dXJuIGZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGdlbmVyaWNLZXkpO1xuICAgICAgICBpZihzY2hlbWEpIHJldHVybiBzY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cbiBcbiAgICBmaWVsZFtmaWVsZFByb3BdID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG5cbiAgICBpZighc2tpcFByb3BIYW5kbGVycykge1xuICAgICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+IFxuICAgICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIGV4cCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGxldCBmaWVsZEtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdIHx8IHt9O1xuXG4gICAgbGV0IHJlZ2lzdGVyID0gc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbZGF0YVByb3BdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XSA9IHJlZ2lzdGVyW2ZpZWxkS2V5XSB8fCBbXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0ucHVzaCh7IGZpZWxkLCBwcm9wOiBmaWVsZFByb3AsIGV4cCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb25kaXRpb25hbChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gKHZhbCwgcHJldikgPT4ge1xuICAgICAgICBmaWVsZFtrZXldID0gc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICBjb25zdCBzY29wZSA9IHNlcnZpY2UuZ2V0RnJvbVNjb3BlQ2FjaGUoc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSk7XG4gICAgICAgIGlmKGtleSA9PT0gJ3JlcXVpcmVkJyAmJiBzY29wZSkge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVZhbGlkYXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBmaWVsZFxuICAgICAgICAgIC5jb25kaXRpb25hbHNba2V5XVxuICAgICAgICAgIC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvZylcbiAgICAgICAgICAubWFwKHBhdGggPT4gcGF0aC5tYXRjaCgvbW9kZWxcXC4oW15cXHNdKykvKVsxXSlcbiAgICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWZpZWxkLndhdGNoKSByZXR1cm47XG5cbiAgICBsZXQgc2NoZW1hID0gZmllbGQuc2NoZW1hO1xuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgZGF5cy8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSBhZGp1c3RtZW50LmRhdGVbMV07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZSwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSkuYWRkKGFkanVzdG1lbnQuZGF0ZSwgJ2RheXMnKS50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qgb25BcnJheSA9IChjdXIsIHByZXYsIHJlb3JkZXIpID0+IHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dYDtcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIChmaWVsZCwgaSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaXN0ZW5lcktleSA9IGAke2FycktleX0ubGVuZ3RoYDtcbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSkge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtvbkFycmF5XSxcbiAgICAgICAgcHJldjogYXJyVmFsID8gYXJyVmFsLmxlbmd0aCA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckhhbmRsZXJzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgZGVsZXRlIHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9ICRyb290U2NvcGUuJHdhdGNoKFxuICAgICAgKCkgPT4gc2VydmljZS5tb2RlbCxcbiAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiBcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICBzZXJ2aWNlLmluY3JlbWVudFVwZGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTY2hlbWFQYXJhbXMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIsIGtleSkge1xuICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgZWxzZSBpZiAoZm9ybS5jb25kaXRpb24uaW5jbHVkZXMoXCJhcnJheUluZGV4XCIpKSB7XG4gICAgICAgICAgZm9ybS5jb25kaXRpb24gPSBzZXJ2aWNlLnJlcGxhY2VBcnJheUluZGV4KGZvcm0uY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5hZGRBcnJheUNvcHkoc2NvcGUsIGdlbmVyaWNLZXksIGluZGV4KTtcbiAgICAgICAgc2NvcGUuJGVtaXQoJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBnZW5lcmljS2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXJ2aWNlLmFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdzY2hlbWFGb3JtRGVsZXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoc2NvcGUuZm9ybS5rZXkpO1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICAgICAgaWYobGlzdGVuZXIpIGxpc3RlbmVyLmhhbmRsZXJzID0gW107XG5cbiAgICAgIGNvbnN0IHVuaW5kZXhlZEtleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuXG4gICAgICAvLyBUT0RPIC0tIG5vdCBzdXJlIGlmIGdldEFycmF5Q29waWVzRm9yIGlzIGFjdHVhbGx5IG5lY2Vzc2FyeVxuICAgICAgLy8gd2Ugc2hvdWxkIGxvb2sgaW50byB3aGVyZSB0aGlzIGZ1bmN0aW9uIG1pZ2h0IGJlIG5lZWRlZCBhbmRcbiAgICAgIC8vIHBvdGVudGlhbGx5IHJlbW92ZSBpdFxuICAgICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0Zvcih1bmluZGV4ZWRLZXkpO1xuICAgICAgaWYoIWNvcGllcy5sZW5ndGgpIGNvcGllcy5wdXNoKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXModW5pbmRleGVkS2V5KSB8fCBbXSk7XG5cbiAgICAgIGNvcGllcy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0ICYmIGxpc3Quc3BsaWNlKHNjb3BlLmFycmF5SW5kZXgsIDEpKTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIHZhciBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIFxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuZGVmYXVsdHNbcmVzb2x2ZWQucmVwbGFjZSgnbW9kZWwuJywgJycpXTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwRGVmYXVsdHMoa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IGtleVN0YXJ0Lm1hdGNoKC9cXFtcXGQqXFxdLykgPyBnZXRBcnJheUluZGV4KGtleVN0YXJ0KSA6IG51bGw7XG4gICAgY29uc3Qga3MgPSBzdHJpcEluZGV4ZXMoa2V5U3RhcnQpO1xuICAgIGNvbnN0IGtleXMgPSBfLmZpbHRlcihfLmtleXMoc2VydmljZS5mb3JtQ2FjaGUpLCAoaykgPT4gay5zdGFydHNXaXRoKGtzKSk7XG4gICAgbGV0IHNraXBLZXlzID0gW107XG4gICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7IFxuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkS2V5cyA9IF8uZmlsdGVyKF8ua2V5cyhzZXJ2aWNlLmZvcm1DYWNoZSksIChrKSA9PiBrLnN0YXJ0c1dpdGgoa2V5KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBfLmVhY2goY2hpbGRLZXlzLCAoaykgPT4ge1xuICAgICAgICAgICAgc2tpcEtleXMucHVzaChrKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ZWRDaGlsZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrLCBbaW5kZXgsIGldKTtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZENoaWxkS2V5XSA9IHRydWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXNraXBLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdFtpbmRleGVkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24sIHNlY29uZFBhc3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgd2UncmUgaGVyZSBiZWNhdXNlIGEgcGFyZW50J3Mgc2NvcGUgd2FzIGVtaXR0ZWQsIFxuICAgIC8vIHNjb3BlIGZvciB0aGlzIHNlY3Rpb24gd2lsbCBzb29uIGJlIGVtaXR0ZWQsIHNvIGNhbiBza2lwXG4gICAgaWYoc2Vjb25kUGFzcykgcmV0dXJuOyBcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlcmNlbnRhZ2UoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXBlcmNlbnRhZ2UnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZWRpYVVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLW1lZGlhdXBsb2FkJztcbiAgICBfLmVhY2goZmllbGQuZGF0YSwgZnVuY3Rpb24oZGF0YVByb3AsIGtleSkge1xuICAgICAgZmllbGQuZGF0YVtrZXldID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZGF0YVByb3ApLmdldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgaWYoIXZhbFByb3ApIHJldHVybjtcblxuICAgIGlmKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScpIHtcbiAgICAgIGlmKCF2YWwgfHwgIV8uaXNBcnJheSh2YWwpKSByZXR1cm47XG5cbiAgICAgIGxldCBtYXBWYWwgPSB2YWwubWFwKHggPT4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB4fSkpLmZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgIHJldHVybiBtYXBWYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogdmFsfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlbGVjdC5zY2hlbWE7XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlIHx8IHNlbGVjdC50aXRsZU1hcCkge1xuICAgICAgc2VsZWN0LmdldFRpdGxlTWFwID0gKCkgPT5cbiAgICAgICAgc2VsZWN0LnRpdGxlTWFwIHx8IHNlcnZpY2Uuc2NoZW1hLmRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV07XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIHZhciBrZXkgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXMucTtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gZnVuY3Rpb24ocSkge1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIGlmKGtleSkge1xuICAgICAgICAgIHBhcmFtc1trZXldID0gcTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyB3cmFwIGluIHN0cmluZyBzbyByZXR1cm5zIHRydXRoeSB3aGVuIGNvbXBpbGVkLCBidXQgY29udmVydGVkIHRvIG51bWJlciB3aXRoaW4gZGlyZWN0aXZlXG4gICAgICBpZigha2V5KSBzZWxlY3QubWluTG9va3VwID0gJzAnO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIF8uZWFjaChzZWxlY3QuaXRlbXMsIChpKSA9PiBpLmRlc3Ryb3lTdHJhdGVneSA9IFwicmV0YWluXCIpO1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICAgIHNlbGVjdC5kZXN0cm95U3RyYXRlZ3kgPSAncmV0YWluJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTsgXG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLFxuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmKHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH1cblxuICAgIHNlbGVjdERpc3BsYXkuc2VsZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdEZpZWxkLmtleSwgaGFuZGxlciwgc2VsZWN0RmllbGQudXBkYXRlU2NoZW1hLCB0cnVlKTtcbiAgICAvL3NlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UoZnVuY3Rpb24odXBkYXRlU2NoZW1hKSB7XG4gICAgICB2YXIgcGFyYW1zID0gXy5leHRlbmQoY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpLCBzZXJ2aWNlLnBhcmFtcyk7XG4gICAgICB2YXIgZGlmZiA9IF8ub21pdChjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSksICd1cGRhdGVzJyk7XG4gICAgICB2YXIga2V5cztcblxuICAgICAgaWYoIV8uaXNFbXB0eShkaWZmKSB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIFsndXBkYXRlU2NoZW1hJywgJ3VwZGF0ZXMnXSkpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UuaW5jcmVtZW50VXBkYXRlcygpO1xuICAgICAgICAgIC8vc2VydmljZS51cGRhdGVTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLnJlZnJlc2hEYXRhID0gXy5kZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgIHJlZnJlc2goXy5leHRlbmQoc2VydmljZS5zY2hlbWEucGFyYW1zLCB7dXBkYXRlU2NoZW1hOiAncmVmcmVzaERhdGEnfSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ2ZmUmVmcmVzaERhdGEnLCBzZXJ2aWNlLnJlZnJlc2hEYXRhKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2NoZW1hLmRpZmYpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtcyA9IHNjaGVtYS5wYXJhbXM7XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmRhdGEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgc2NoZW1hLmRpZmYuZGF0YSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5kYXRhLCAoZGF0YSwgcHJvcCkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5kYXRhICYmICFfLmlzRW1wdHkoc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhKSAmJiAhZGF0YS5yZXNldCkge1xuICAgICAgICAgICAgZGF0YS5kYXRhID0gc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhLmNvbmNhdChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdID0gZGF0YTtcbiAgICAgICAgICBpZihzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdLCAocmVnaXN0ZXJzKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVycy5mb3JFYWNoKHJlZ2lzdGVyID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUocmVnaXN0ZXIuZmllbGQsIHJlZ2lzdGVyLnByb3AsIHJlZ2lzdGVyLmV4cCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5cyA9IFtdO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5zY2hlbWEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCAoZm9ybSwga2V5KSA9PiB7XG5cbiAgICAgICAgICBpZigha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuICAgICAgICAgIFxuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIChrZXkpID0+IHtcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgWyAsIGFycmF5SW5kZXggXSA9IGtleS5tYXRjaCgvXFxbKFxcZCkrXS8pIHx8IFtdO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpKTtcbiAgICBpZihfLmlzVW5kZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICBjb25zdCBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgIHJldHVybiBbIGNhY2hlZCwgLi4uY29waWVzIF07XG4gICAgfVxuICAgIHJldHVybiBbIGNvcGllc1thcnJheUluZGV4XSBdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoY3VycmVudC5rZXkpO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uaXRpb24gPSAndHJ1ZScgdG8gZm9yY2VcbiAgICAvLyBjb25kaXRpb24gdG8gZXZhbCB0cnVlLCBzbyB3ZSBzZXQgdGhlIHVwZGF0ZSBjb25kaXRpb24gdG8gJ3RydWUnXG4gICAgLy8gYmVmb3JlIGNvbXBhcmluZ1xuICAgIGlmKCF1cGRhdGUuY29uZGl0aW9uICYmIGN1cnJlbnQuY29uZGl0aW9uKSB1cGRhdGUuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgIGxldCByZWRyYXcgPSAhaXNDaGlsZCAmJiBjdXJyZW50LmNvbmRpdGlvbiAhPT0gdXBkYXRlLmNvbmRpdGlvbjtcblxuICAgIF8uZXh0ZW5kKGN1cnJlbnQsIF8ub21pdCh1cGRhdGUsICdpdGVtcycsICdrZXknKSk7XG5cbiAgICBjdXJyZW50Ll9vZ0tleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYoIXVwZGF0ZVtwcm9wXSkge1xuICAgICAgICBkZWxldGUgY3VycmVudFtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBnZXRPZ0tleXModXBkYXRlKTtcblxuICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG5cbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIGtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7IFxuICAgICAgY3VycmVudC5yZWRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBpZihzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHNjaGVtYS5pdGVtcyAmJiBzY2hlbWEuaXRlbXMucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnW10uJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb3RLZXkoa2V5KSB7XG4gICAgcmV0dXJuIChfLmlzU3RyaW5nKGtleSkgPyBPYmplY3RQYXRoLnBhcnNlKGtleSkgOiBrZXkpLmpvaW4oJy4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoZmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBnZXREb3RLZXkoZmllbGQua2V5KSxcbiAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEVycm9ycygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQXJyYXlJbmRleChyZXNvbHZlLCBrZXkpIHtcbiAgICB3aGlsZShyZXNvbHZlLmluY2x1ZGVzKCdhcnJheUluZGV4JykpIHtcbiAgICAgIGlmKF8uaXNOdW1iZXIoa2V5KSkgcmV0dXJuIHJlc29sdmUucmVwbGFjZSgvYXJyYXlJbmRleC9nLCBrZXkpO1xuICAgICAgY29uc3QgYXJyYXlJbmRleEtleSA9IC8oW14uW10qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVsxXSArICdcXFxcWygtP1xcXFxkKylcXFxcXScpO1xuICAgICAgY29uc3QgaW5kZXggPSByZS5leGVjKGtleSk7XG4gICAgICBpZighaW5kZXgpIHJldHVybiByZXNvbHZlO1xuICAgICAgcmVzb2x2ZSA9IHJlc29sdmUucmVwbGFjZShuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMF0ucmVwbGFjZSgvKFxcW3xcXF0pL2csICdcXFxcJDEnKSwgJ2cnKSwgaW5kZXhbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5kZXgoa2V5KSB7XG4gICAgaWYoXy5pc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gXy5maW5kKGtleS5rZXksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gXy5pc051bWJlcihrZXkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvXFxbKFxcZCspXFxdLy5leGVjKGtleSlbMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGtleUNvcHk7XG4gICAgaWYgKCFfLmlzQXJyYXkoaW5kZXgpKSB7XG4gICAgICBpbmRleCA9IFtpbmRleF07XG4gICAgfVxuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4Lmxlbmd0aCAmJiBrZXlDb3B5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgIGxldCBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXguc2hpZnQoKTtcbiAgICB9XG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5jcmVtZW50VXBkYXRlcygpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gIHRoaXM7XG4gICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgc2VydmljZS5wYXJhbXMudXBkYXRlcyA9IHNlcnZpY2UudXBkYXRlcztcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rpc21pc3NNb2RhbCcpO1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zIFxuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAgIC8vLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKTtcblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDxuZy1mb3JtIFxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIHZtLmNvbmZpZy5zY2hlbWE7IH0sIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndm0uc2VydmljZS5pc0NvbXBpbGVkKCk6Jywgdm0uc2VydmljZS5pc0NvbXBpbGVkKCkpO1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgICAgLy8kc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVJlZHJhdycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICB2bS5zZXJ2aWNlLmNsZWFudXAoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vLy9cbiAgXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVEYXRhOicsIHVwZGF0ZURhdGEpO1xuICAgICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gIC8vLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgLy9jb25zb2xlLmxvZygnJHNjb3BlLCBuZ01vZGVsOicsICRzY29wZS5mb3JtLCBuZ01vZGVsKTtcbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9