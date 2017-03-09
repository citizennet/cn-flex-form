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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <ol sf-array="form"\n            class="list-group cn-autocomplete-list"\n            ng-show="modelArray.length"\n            ng-model="modelArray">\n          <li class="list-group-item {{form.fieldHtmlClass}}"\n              ng-repeat="item in modelArray">\n            <button ng-hide="form.readonly || form.remove === null"\n                    ng-click="deleteFromArray($index)"\n                    type="button" class="close pull-right">\n              <span aria-hidden="true">&times;</span>\n            </button>\n            <sf-decorator form="copyWithIndex($index)"/>\n          </li>\n        </ol>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
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
	      if ((_.isTrulyEmpty(modelValue) && !service.updates || _.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key])) && !angular.equals(modelValue, curDefault)) {
	        //console.log(':: processDefault ::', key, angular.copy(curDefault), angular.copy(modelValue), angular.copy(service.defaults[key]));
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
	      var prev = _.isUndefined(cur) ? angular.copy(defaultValue) : angular.copy(cur);
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
	          ++service.updates;
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
	
	      var unindexedKey = key.replace(/\[\d+]/g, '[]');
	
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
	
	  // TODO -- extend this to support nested array keys
	  // e.g. "creative[1].childAttachments[0].callToAction"
	  function skipDefaults(keyStart) {
	    var service = this;
	    var index = keyStart.match(/\[\d*\]/) ? getArrayIndex(keyStart) : null;
	    var ks = stripIndexes(keyStart);
	    _.each(service.formCache, function (form, key) {
	      if (key.startsWith(ks)) {
	        var indexedKey = service.setArrayIndex(key, index);
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
	            select.items = [{
	              type: "component",
	              items: select.items
	            }];
	          }
	
	          service.processFieldset(select);
	        }
	
	        select.type = 'cn-autocomplete-detailed';
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
	      var diff = cnUtil.diff(service.schema.params, params, true);
	      var keys;
	
	      if (diff || updateSchema) {
	        if (updateSchema) params.updateSchema = updateSchema;else {
	          keys = _.keys(diff);
	
	          if (keys.length > 1) {
	            diff = _.omit(diff, _.isNull);
	            keys = _.keys(diff);
	          }
	
	          params.updateSchema = _.first(keys);
	        }
	
	        if (!params.updateSchema) {
	          diff = cnUtil.diff(params, _.omit(service.schema.params, 'updateSchema'));
	          keys = _.keys(diff);
	
	          params.updateSchema = _.first(keys);
	        }
	
	        refresh(params).then(function (schema) {
	          ++service.updates;
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
	    var keyCopy;
	    if (_.isString(key)) {
	      keyCopy = ObjectPath.parse(key);
	    } else {
	      keyCopy = _.clone(key);
	    }
	    var indexOfIndex = keyCopy.indexOf('');
	    keyCopy[indexOfIndex] = index;
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMjg2ZGFiMTA5ZjMwOGExY2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwic2Vjb25kUGFzcyIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRGVmYXVsdCIsImRlZmF1bHQiLCJyZWdpc3RlckhhbmRsZXIiLCJ1cGRhdGVTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VDb25kaXRpb24iLCJwYXJzZUV4cHJlc3Npb24iLCJwcm9jZXNzQXJyYXkiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGaWVsZCIsInByb2Nlc3NGaWVsZHNldCIsInByb2Nlc3NGaWVsZFByb3BzIiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlclJlc29sdmUiLCJyZXBsYWNlQXJyYXlJbmRleCIsInJlcHJvY2Vzc0ZpZWxkIiwicmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zIiwic2V0QXJyYXlJbmRleCIsInNldHVwQ29uZmlnIiwic2V0dXBBcnJheVNlbGVjdERpc3BsYXkiLCJzZXR1cFNlbGVjdERpc3BsYXkiLCJzZXR1cFNjaGVtYVJlZnJlc2giLCJzaWxlbmNlTGlzdGVuZXJzIiwic2tpcERlZmF1bHRzIiwiZ2V0U2VydmljZSIsImZuIiwiZmluZCIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsInBhcmFtcyIsImV4dGVuZCIsImZvcm1zIiwiZm9ybSIsImJpbmQiLCJzZXRWYWx1ZSIsImNvbXBpbGVkIiwiZm9ybUN0cmwiLCJnZXRTY2hlbWFGb3JtIiwiZ2V0U2NoZW1hVHlwZSIsImlzQXJyYXkiLCJmaXJzdCIsImN1ckRlZmF1bHQiLCJrZXkiLCJpc0RlZmluZWQiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaXNUcnVseUVtcHR5IiwiaGFzIiwiZXF1YWxzIiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJwb3MiLCJodG1sQ2xhc3MiLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJnZXRPZ0tleXMiLCJyZWplY3QiLCJrZXlzIiwiX29nS2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwiYXJyYXlJbmRleCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsInNraXBQcm9wSGFuZGxlcnMiLCJlaXRoZXJzIiwic3BsaXQiLCJ4IiwiYWxsIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdlbmVyaWNLZXkiLCJzdHJpcEluZGV4ZXMiLCJjYWNoZWRGaWVsZCIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJ2YWwiLCJwcmV2Iiwic2NvcGUiLCJtYXAiLCJwYXRoIiwicmVzb2x1dGlvbiIsImN1ciIsImFkanVzdG1lbnQiLCJkYXRlIiwidW5pdHMiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInJlc3VsdCIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJhY2MiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiaW5kZXgiLCIkZW1pdCIsInVuaW5kZXhlZEtleSIsImNvcGllcyIsInNwbGljZSIsImxpbmsiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwibm9Db25zdHJ1Y3Rpb24iLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwic2lsZW50IiwiZ2V0QXJyYXlJbmRleCIsImtzIiwiaW5kZXhlZEtleSIsImFycmF5Iiwic29ydE9wdGlvbnMiLCJlIiwidWkiLCJzZWN0aW9uIiwiY29tcG9uZW50IiwiY29scyIsImN1cnJlbmN5Rm9ybWF0IiwidmlldyIsInJhZGlvcyIsImZ1bGxXaWR0aCIsImJ0bkNsYXNzIiwiZGl2aWRlIiwibWF4VmlldyIsImljb25DbGFzcyIsIm1vZGVsRm9ybWF0dGVyIiwibSIsIm11bHRpcGx5IiwiaG91cnMiLCJtaW51dGVzIiwibW9kZWxQYXJzZXIiLCJkIiwicGFyc2VJbnQiLCJzdGFydE9mIiwidmlld0Zvcm1hdHRlciIsImRhdGVGb3JtYXQiLCJ2aWV3UGFyc2VyIiwiZ2V0U2VsZWN0VmFsUHJvcCIsInNlbGVjdCIsInZhbHVlUHJvcGVydHkiLCJnZXRBbGxvd2VkU2VsZWN0VmFsdWUiLCJnZXRUaXRsZU1hcCIsInZhbFByb3AiLCJtYXBWYWwiLCJvbkluaXQiLCJzZXR0ZXIiLCJuZXdWYWwiLCJxIiwidGl0bGVRdWVyeSIsIm1pbkxvb2t1cCIsIm9uQWRkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCJkZXRhaWxlZExpc3QiLCJzZWxlY3Rpb25TdHlsZSIsIm1heEl0ZW1zIiwidmFsaWQiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwidGFibGUiLCJyb3ciLCJjb2x1bW5zIiwic2VsZWN0RGlzcGxheSIsInNlbGVjdEZpZWxkIiwic2VsZWN0S2V5Iiwic3BsaXRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0VmFsdWUiLCJmb3JtQ29waWVzIiwiZWxlbSIsInNwbGl0SW5kZXhlZEtleSIsInNlbGVjdE1vZGVsIiwiaXRlbVZhbHVlIiwiY291bnQiLCJrZXlNYXAiLCJvbmNlIiwicmVzZXRDb3VudCIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJ0aGVuIiwicmVmcmVzaERhdGEiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImNhY2hlZCIsImN1cnJlbnQiLCJpc0NoaWxkIiwicmVkcmF3Iiwic3ViS2V5Iiwiam9pbiIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwiZGVzdHJveVN0cmF0ZWd5IiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkc2NvcGUiLCIkbG9jYXRpb24iLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJ0aXRsZSIsImFjdGlvbkNvbmZpZyIsInJldHVyblN0YXRlIiwicmV0dXJuU3R5bGUiLCJyZXR1cm5UZXh0IiwiY2xvc2VCdXR0b24iLCJhY3Rpb25zIiwiYnRuQ29uZmlnIiwiZmZWYWxpZGF0ZSIsImF0dHJzIiwibmdNb2RlbCIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBUUMsR0FBUjs7bUJBRWVDLFFBQ1pDLE1BRFksQ0FDTCxjQURLLEVBQ1csQ0FDdEIsV0FEc0IsRUFFdEIsWUFGc0IsRUFHdEIsNkJBSHNCLEVBSXRCLGFBSnNCO0FBS3RCO0FBQ0EsVUFOc0IsQ0FEWCxFQVNaQyxRQVRZLENBU0gsa0JBVEcsOEJBVVpBLFFBVlksQ0FVSCxpQkFWRyw2QkFXWkEsUUFYWSxDQVdILGtCQVhHLHdDQVlaQyxNQVpZLCtCQWFaQSxNQWJZLHlDQWNaQyxHQWRZLHFDQWVaRixRQWZZLENBZUgsbUJBZkcsd0JBZ0JaQSxRQWhCWSxDQWdCSCw4QkFoQkcsbUNBaUJaRyxPQWpCWSxDQWlCSixlQWpCSSx5Q0FrQlpDLFVBbEJZLENBa0JELHFCQWxCQywrQ0FtQlpDLFNBbkJZLENBbUJGLFlBbkJFLHdCQW9CWkEsU0FwQlksQ0FvQkYsa0JBcEJFLDhCQXFCWkEsU0FyQlksQ0FxQkYsWUFyQkUsZ0NBc0JaQyxJOzs7Ozs7QUNuQ0g7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUhULFVBQVNDLDJCQUEyQjs7O0dBRWxDLElBQU1DLGVBQWUsQ0FBQyxRQUFRLFNBQVMs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L04sWUFBTyxFQUFFbEYsTUFBTSxhQUFSLEVBRkY7QUFHTHhILGNBQVMsU0FISjtBQUlMMlEsV0FBTUE7QUFKRCxJQUFQO0FBTUQ7O0FBRUQsVUFBU0EsSUFBVCxDQUFjdUssTUFBZCxFQUFzQjVFLElBQXRCLEVBQTRCZ0csS0FBNUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDO0FBQ0EsT0FBR3JCLE9BQU8xVCxJQUFQLElBQWUwVCxPQUFPMVQsSUFBUCxDQUFZZ1YsUUFBOUIsRUFBd0M7QUFDdEN0QixZQUFPeEwsTUFBUCxDQUFjLFlBQVc7QUFBRSxjQUFPNk0sUUFBUUUsVUFBZjtBQUE0QixNQUF2RCxFQUF5RCxVQUFTdmYsS0FBVCxFQUFnQjtBQUN2RTtBQUNBcWYsZUFBUUcsWUFBUixDQUFxQixZQUFyQixFQUFtQyxJQUFuQztBQUNBSCxlQUFRRyxZQUFSLENBQXFCLFNBQXJCLEVBQWdDeGYsS0FBaEM7QUFDRCxNQUpEO0FBS0Q7QUFDRjs7QUFFRDtBQUNJO0FBQ0E7O21CQUVXbWYsVSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY24tZmxleC1mb3JtXCIsIFtcImxvZGFzaFwiLCBcIm9iamVjdHBhdGhcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY24tZmxleC1mb3JtXCJdID0gZmFjdG9yeShyb290W1wibG9kYXNoXCJdLCByb290W1wib2JqZWN0cGF0aFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTI4NmRhYjEwOWYzMDhhMWNhYjEiLCJpbXBvcnQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlJztcbmltcG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciwgY25GbGV4Rm9ybVJvdXRlcyB9IGZyb20gJy4vY24tZmxleC1mb3JtLnJvdXRlcyc7XG5pbXBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfSBmcm9tICcuL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMnO1xuaW1wb3J0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0uc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZsZXhGb3JtTW9kYWxMb2FkZXIsIEZsZXhGb3JtTW9kYWwgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXInO1xuaW1wb3J0IGNuRmxleEZvcm0gZnJvbSAnLi9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlJztcbmltcG9ydCBjbkZsZXhGb3JtSGVhZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IGZmVmFsaWRhdGUgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdmFsaWRhdGUuZGlyZWN0aXZlJztcblxuY29uc29sZS5sb2coY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXJcbiAgLm1vZHVsZSgnY24uZmxleC1mb3JtJywgW1xuICAgICd1aS5yb3V0ZXInLFxuICAgICdzY2hlbWFGb3JtJyxcbiAgICAndWkuYm9vdHN0cmFwLmRhdGV0aW1lcGlja2VyJyxcbiAgICAnY25UYWdzSW5wdXQnLFxuICAgIC8vJ25nSnNvbkV4cGxvcmVyJyxcbiAgICAnY24udXRpbCdcbiAgXSlcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gIC5jb25maWcoY25GbGV4Rm9ybVJvdXRlcylcbiAgLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAucnVuKGFkZFRlbXBsYXRlcylcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZScsIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcilcbiAgLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKVxuICAuY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm0nLCBjbkZsZXhGb3JtKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcilcbiAgLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpXG4gIC5uYW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19jbi1mbGV4LWZvcm0ubW9kdWxlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKCkge1xuXG4gIGNvbnN0IGlnbm9yZVBhcmFtcyA9IFsncGFnZScsICdkZWJ1ZycsICdzYW5kYm94JywgJ21vZGFsJywgJ21vZGFsSWQnXTtcblxuICByZXR1cm4ge1xuICAgIGFkZElnbm9yZVBhcmFtLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Db25maWdcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZElnbm9yZVBhcmFtKHBhcmFtKSB7XG4gICAgaWdub3JlUGFyYW1zLnB1c2gocGFyYW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybUNvbmZpZygkc3RhdGVQYXJhbXMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFN0YXRlUGFyYW1zLFxuICAgICAgaWdub3JlUGFyYW1zXG4gICAgfTtcblxuICAgIC8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhcmFtcygpIHtcbiAgICAgIHJldHVybiBfXG4gICAgICAgICAgLmNoYWluKCRzdGF0ZVBhcmFtcylcbiAgICAgICAgICAub21pdChpZ25vcmVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIF8uaXNVbmRlZmluZWQodikgfHwgXy5pc051bGwodik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudmFsdWUoKTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWNvbmZpZy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIoKSB7XG5cbiAgdmFyIGZpZWxkVHlwZVJlZ2lzdGVyID0gW3tcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoaWRkZW4nLFxuICAgIHR5cGU6ICdoaWRkZW4nXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvcycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb3MnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ3JhZGlvYnV0dG9ucycpLFxuICAgIHR5cGU6ICdjbi1yYWRpb2J1dHRvbnMnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2F1dG9jb21wbGV0ZScpIHx8IGZpZWxkLnRpdGxlTWFwIHx8IGZpZWxkLnRpdGxlTWFwUmVzb2x2ZSB8fCBmaWVsZC50aXRsZU1hcFF1ZXJ5LFxuICAgIHR5cGU6ICdjbi1hdXRvY29tcGxldGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjbi1kYXRldGltZXBpY2tlcicgfHwgZmllbGQudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJyB8fCBmaWVsZC50eXBlID09PSAndGltZS1taW51dGVzJyxcbiAgICB0eXBlOiAnY24tZGF0ZXRpbWVwaWNrZXInXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdoZWxwJyxcbiAgICB0eXBlOiAnaGVscCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnZGlzcGxheScpLFxuICAgIHR5cGU6ICdjbi1kaXNwbGF5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0LmluY2x1ZGVzKCdjdXJyZW5jeScpLFxuICAgIHR5cGU6ICdjbi1jdXJyZW5jeSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgPT09ICdwZXJjZW50YWdlJyxcbiAgICB0eXBlOiAnY24tcGVyY2VudGFnZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RvZ2dsZScgfHwgZmllbGQudHlwZSA9PT0gJ2Jvb2xlYW4nLFxuICAgIHR5cGU6ICdjbi10b2dnbGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdtZWRpYXVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLW1lZGlhdXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY3N2dXBsb2FkJyxcbiAgICB0eXBlOiAnY24tY3N2dXBsb2FkJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAncmV1c2FibGUnLFxuICAgIHR5cGU6ICdjbi1yZXVzYWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3RhYmxlJyxcbiAgICB0eXBlOiAnY24tdGFibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdhcnJheScsXG4gICAgdHlwZTogJ2FycmF5J1xuICB9XTtcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGRUeXBlOiByZWdpc3RlckZpZWxkVHlwZSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtVHlwZXNcbiAgfTtcblxuICAvLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRUeXBlKGZpZWxkVHlwZSkge1xuICAgIGZpZWxkVHlwZVJlZ2lzdGVyLnVuc2hpZnQoZmllbGRUeXBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRUeXBlUmVnaXN0ZXI6IGZpZWxkVHlwZVJlZ2lzdGVyLFxuICAgICAgZ2V0RmllbGRUeXBlOiBnZXRGaWVsZFR5cGVcbiAgICB9O1xuXG4gICAgLy8vLy8vLy8vXG5cbiAgICBmdW5jdGlvbiBnZXRGaWVsZFR5cGUoZmllbGQpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBmaWVsZFR5cGVSZWdpc3Rlci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoZmllbGRUeXBlUmVnaXN0ZXJbaV0uY29uZGl0aW9uKGZpZWxkKSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZFR5cGVSZWdpc3RlcltpXS50eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQudHlwZSB8fCBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLnR5cGU7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS10eXBlcy5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRTdGF0ZXMsXG4gICAgJGdldFxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uICRnZXQoKSB7XG4gICAgLy8gbm90aGluZyB0byBkbyBoZXJlLCBidXQgcmVxdWlyZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0YXRlcyh7IHBlcm1pc3Npb25zLCBuYW1lIH0pIHtcbiAgICBjb25zdCBzaGFyZWQgPSB7XG4gICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1Nb2RhbExvYWRlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBwZXJtaXNzaW9uc1xuICAgIH07XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbFBhcmFtc2AsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZC86cmVzdFBhcmFtcycsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXMoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdmbGV4LWZvcm0tc2FuZGJveCcsIHtcbiAgICAgICAgdXJsOiAnL2ZsZXgtZm9ybS9zYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtU2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vc2FuZGJveC5odG1sJ1xuICAgICAgfSk7XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgICAvLy5jb25maWcoY25GbGV4Rm9ybVJvdXRlcyk7XG5cbmV4cG9ydCB7IGNuRmxleEZvcm1Sb3V0ZXMsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCIvL2FuZ3VsYXIubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbmZpZyhzY2hlbWFGb3JtQ29uZmlnKVxuICAgIC8vLnJ1bihhZGRUZW1wbGF0ZXMpO1xuXG5mdW5jdGlvbiBzY2hlbWFGb3JtQ29uZmlnKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICB0djQuYWRkRm9ybWF0KHtcbiAgICAndXJsJzogZGF0YSA9PiBfLmlzU3RyaW5nKGRhdGEpICYmICEvXihodHRwcz86XFwvXFwvLnsyfXwkKS8udGVzdChkYXRhKSAmJiAnaW52YWxpZCB1cmwnXG4gIH0pO1xuXG4gIHZhciBleHRlbnNpb25zID0gW1xuICAgICdjbi1maWVsZHNldCcsXG4gICAgJ2NuLXRvZ2dsZScsXG4gICAgJ2NuLWRhdGV0aW1lcGlja2VyJyxcbiAgICAnY24tYXV0b2NvbXBsZXRlJyxcbiAgICAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJyxcbiAgICAnY24tY3VycmVuY3knLFxuICAgICdjbi1yYWRpb3MnLFxuICAgICdjbi1yYWRpb2J1dHRvbnMnLFxuICAgICdjbi1wZXJjZW50YWdlJyxcbiAgICAnY24tZGlzcGxheScsXG4gICAgJ2NuLW1lZGlhdXBsb2FkJyxcbiAgICAnY24tY3N2dXBsb2FkJyxcbiAgICAnY24tcmV1c2FibGUnLFxuICAgICdjbi10YWJsZSdcbiAgXTtcblxuICBfLmVhY2goZXh0ZW5zaW9ucywgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlci5yZWdpc3RlckZpZWxkKHtcbiAgICAgIHR5cGU6IGV4dGVuc2lvbixcbiAgICAgIHRlbXBsYXRlVXJsOiBgYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zLyR7ZXh0ZW5zaW9ufS5odG1sYFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5KVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS50aXRsZVF1ZXJ5ID8gdHJ1ZSA6IGZhbHNlfX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXAgfHwgKGZvcm0udGl0bGVRdWVyeSAmJiAzIHx8IDApfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG9sIHNmLWFycmF5PVwiZm9ybVwiXG4gICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAgY24tYXV0b2NvbXBsZXRlLWxpc3RcIlxuICAgICAgICAgICAgbmctc2hvdz1cIm1vZGVsQXJyYXkubGVuZ3RoXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwibW9kZWxBcnJheVwiPlxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gbW9kZWxBcnJheVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvcHlXaXRoSW5kZXgoJGluZGV4KVwiLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jdXJyZW5jeS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+JDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktZm9ybWF0PVwie3tmb3JtLmN1cnJlbmN5Rm9ybWF0fX1cIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1wbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvcy5odG1sJyxcbiAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvIHJhZGlvLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvLWJsb2NrLWljb25cIiBuZy1pZj1cIml0ZW0uaWNvbkNsYXNzXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS5pY29uQ2xhc3N9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb2J1dHRvbnMuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzY2hlbWEtZm9ybS1yYWRpb2J1dHRvbnMgY24tcmFkaW9idXR0b25zIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLXt7aXRlbS52YWx1ZX19IHt7Zm9ybS5idG5DbGFzc319IHt7aXRlbS52YWx1ZSA9PT0gJCR2YWx1ZSQkID8gJ2FjdGl2ZScgOiAnJ319XCJcbiAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7Zm9ybS5maWVsZEh0bWxDbGFzc319IGhpZGVcIlxuICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgZmYtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXt7aXRlbS52YWx1ZX19IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4gbmctYmluZC1odG1sPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXBlcmNlbnRhZ2UuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e2Zvcm0uZmllbGRDbGFzc319IGlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgY24tcGVyY2VudGFnZS1mb3JtYXRcbiAgICAgICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+JTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kaXNwbGF5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZGlzcGxheXt7Zm9ybS5odG1sQ2xhc3N9fVwiPlxuICAgICAgICA8aW5wdXQgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2Zvcm0uZ2V0RGlzcGxheShmb3JtLmtleSwgZm9ybS5hcnJheUluZGV4KX19XCI+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1maWVsZHNldC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxmaWVsZHNldCBcbiAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgY2xhc3M9XCJzY2hlbWEtZm9ybS1maWVsZHNldCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICBuZy1jbGFzcz1cInsnYm9yZGVybGVzcyc6IGZvcm0ucG9zID09PSAwfVwiPlxuICAgICAgICA8bGVnZW5kIG5nLWNsaWNrPVwiZm9ybS50b2dnbGVDb2xsYXBzZShmb3JtKVwiXG4gICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3NyLW9ubHknOiAhc2hvd1RpdGxlKCksIGNvbGxhcHNpYmxlOiBmb3JtLmNvbGxhcHNpYmxlfVwiXG4gICAgICAgICAgICAgICAgbmctbW91c2VlbnRlcj1cImZvcm0ucmVuZGVyID0gdHJ1ZVwiPlxuICAgICAgICAgIDxpIG5nLXNob3c9XCJmb3JtLmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhcmV0LXt7Zm9ybS5jb2xsYXBzZWQgPyAncmlnaHQnIDogJ2Rvd24nfX1cIj48L2k+XG4gICAgICAgICAge3sgZm9ybS50aXRsZSB9fVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtYmxvY2tcIiBuZy1zaG93PVwiZm9ybS5kZXNjcmlwdGlvblwiIG5nLWJpbmQtaHRtbD1cImZvcm0uZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiB1aWItY29sbGFwc2U9XCJmb3JtLmNvbGxhcHNlZFwiPlxuICAgICAgICAgIDxkaXYgbmctaWY9XCJmb3JtLnJlbmRlclwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLW1lZGlhdXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8bWVkaWEtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1maWxlLXR5cGU9XCJmb3JtLmZpbGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZGF0YT1cImZvcm0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tcHJldmlldy1wYXRoPVwiZm9ybS5wcmV2aWV3UGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tbW9kZWwtdmFsdWUta2V5PVwiZm9ybS5tb2RlbFZhbHVlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvbWVkaWEtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3N2dXBsb2FkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y3N2LXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9jc3YtdXBsb2FkPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmV1c2FibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1yZXVzYWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tc2VsZWN0LW9yXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBzZWxlY3QtZnJvbT1cImZvcm0ubGlicmFyeVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgIGRpcmVjdGl2ZUlkPVwiZm9ybS5kaXJlY3RpdmVJZFwiXG4gICAgICAgICAgaXRlbS10ZW1wbGF0ZT1cImZvcm0uaXRlbVRlbXBsYXRlXCJcbiAgICAgICAgICB0b2dnbGUtdGV4dD1cImZvcm0udG9nZ2xlVGV4dFwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICB2aWV3PVwiZm9ybS52aWV3XCI+XG4gICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0uaXRlbXNcIiBmb3JtPVwiaXRlbVwiLz5cbiAgICAgICAgPC9jbi1zZWxlY3Qtb3I+XG4gICAgICAgIDxwIG5nLWlmPVwiZm9ybS5sb2FkTW9yZSAmJiBmb3JtLnZpZXcgPT09ICdsaXN0J1wiPlxuICAgICAgICAgIDxhIG5nLWNsaWNrPVwiZm9ybS5sb2FkTW9yZSgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2tcIj5Mb2FkIE1vcmU8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10YWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWZmLXRhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxoNj57e2Zvcm0udGl0bGV9fTwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiBmb3JtLmNvbHVtbnNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29sdW1uLWhlYWRlclwiPnt7Y29sLmNvbHVtbkhlYWRlcn19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIG5nLXJlcGVhdD1cInJvdyBpbiBmb3JtLml0ZW1zXCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gcm93Lml0ZW1zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb2xcIj48L3NmLWRlY29yYXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xufVxuXG5leHBvcnQgeyBzY2hlbWFGb3JtQ29uZmlnLCBhZGRUZW1wbGF0ZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY2hlbWEtZm9ybS1leHRlbnNpb25zLmpzIiwiLy8gTmVlZCB0aGVzZSBtb2R1bGVzIGZvciB0ZXN0IGJ1bmRsZVxudmFyIF8gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuXyB8fCByZXF1aXJlKCdsb2Rhc2gnKTtcbnZhciBPYmplY3RQYXRoID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk9iamVjdFBhdGggfHwgcmVxdWlyZSgnb2JqZWN0cGF0aCcpO1xuXG5jb25zdCBmaWVsZFR5cGVIYW5kbGVycyA9IHtcbiAgJ2ZpZWxkc2V0JzogJ3Byb2Nlc3NGaWVsZHNldCcsXG4gICdjbi1yYWRpb3MnOiAncHJvY2Vzc1JhZGlvcycsXG4gICdjbi1yYWRpb2J1dHRvbnMnOiAncHJvY2Vzc1JhZGlvYnV0dG9ucycsXG4gICdjbi1hdXRvY29tcGxldGUnOiAncHJvY2Vzc1NlbGVjdCcsXG4gICdjbi1kYXRldGltZXBpY2tlcic6ICdwcm9jZXNzRGF0ZScsXG4gICdoZWxwJzogJ3Byb2Nlc3NIZWxwJyxcbiAgJ2NuLWRpc3BsYXknOiAncHJvY2Vzc0Rpc3BsYXknLFxuICAnY24tY3VycmVuY3knOiAncHJvY2Vzc0N1cnJlbmN5JyxcbiAgJ2NuLXBlcmNlbnRhZ2UnOiAncHJvY2Vzc1BlcmNlbnRhZ2UnLFxuICAnY24tbWVkaWF1cGxvYWQnOiAncHJvY2Vzc01lZGlhVXBsb2FkJyxcbiAgJ2NuLWNzdnVwbG9hZCc6ICdwcm9jZXNzQ3N2VXBsb2FkJyxcbiAgJ2NuLXJldXNhYmxlJzogJ3Byb2Nlc3NSZXVzYWJsZScsXG4gICdjbi10b2dnbGUnOiAncHJvY2Vzc1RvZ2dsZScsXG4gICdjbi10YWJsZSc6ICdwcm9jZXNzVGFibGUnLFxuICAnY29tcG9uZW50JzogJ3Byb2Nlc3NDb21wb25lbnQnLFxuICAnc2VjdGlvbic6ICdwcm9jZXNzU2VjdGlvbicsXG4gICd0YWJhcnJheSc6ICdwcm9jZXNzU2VjdGlvbicsXG4gICdhcnJheSc6ICdwcm9jZXNzQXJyYXknXG59O1xuXG5jb25zdCBmaWVsZFByb3BIYW5kbGVycyA9IFt7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzU2VsZWN0RGlzcGxheShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3dhdGNoJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBmaWVsZC53YXRjaCAmJiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFdhdGNoKGZpZWxkKVxufSwge1xuICBwcm9wOiAndHlwZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcykgPT4gc2VydmljZS5wcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKVxufSwge1xuICBwcm9wOiAnY29uZGl0aW9uYWxzJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NDb25kaXRpb25hbChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ2RlZmF1bHQnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICdzY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IFxuICAgIF8uaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdCkgJiYgIV8uaXNVbmRlZmluZWQoZmllbGQuc2NoZW1hLmRlZmF1bHQpICYmIHNlcnZpY2UucHJvY2Vzc0RlZmF1bHQoZmllbGQpXG59LCB7XG4gIHByb3A6ICd1cGRhdGVTY2hlbWEnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBudWxsLCBmaWVsZC51cGRhdGVTY2hlbWEpXG59XTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZCxcbiAgICAkZ2V0OiBDTkZsZXhGb3JtU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZpZWxkVHlwZSkge1xuICAgIGlmKGZpZWxkVHlwZS5jb25kaXRpb24pIHtcbiAgICAgIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyLnJlZ2lzdGVyRmllbGRUeXBlKHtcbiAgICAgICAgY29uZGl0aW9uOiBmaWVsZFR5cGUuY29uZGl0aW9uLFxuICAgICAgICB0eXBlOiBmaWVsZFR5cGUudHlwZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLmhhbmRsZXIpIHtcbiAgICAgIGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZS50eXBlXSA9IGZpZWxkVHlwZS5oYW5kbGVyO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS50ZW1wbGF0ZVVybCkge1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5hZGRNYXBwaW5nKFxuICAgICAgICAgICdib290c3RyYXBEZWNvcmF0b3InLFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuY3JlYXRlRGlyZWN0aXZlKFxuICAgICAgICAgIGZpZWxkVHlwZS50eXBlLFxuICAgICAgICAgIGZpZWxkVHlwZS50ZW1wbGF0ZVVybFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoXG4gIEFwaSxcbiAgJHBhcnNlLFxuICBjbkZsZXhGb3JtQ29uZmlnLFxuICBjbkZsZXhGb3JtVHlwZXMsXG4gIHNmUGF0aCxcbiAgJGludGVycG9sYXRlLFxuICAkcm9vdFNjb3BlLFxuICAkdGltZW91dCxcbiAgY25VdGlsLFxuICAkc3RhdGVQYXJhbXNcbikge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHNlcnZpY2VzID0gW107XG4gIGNvbnN0IHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBhZGRUb1Njb3BlQ2FjaGUsXG4gICAgYnJvYWRjYXN0RXJyb3JzLFxuICAgIGJ1aWxkRXJyb3IsXG4gICAgY2xlYW51cCxcbiAgICBkZXJlZ2lzdGVySGFuZGxlcnMsXG4gICAgZGVyZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgZ2V0QXJyYXlDb3B5LFxuICAgIGdldEFycmF5Q29waWVzLFxuICAgIGdldEFycmF5Q29waWVzRm9yLFxuICAgIGdldEFycmF5U2NvcGVzLFxuICAgIGdldERlZmF1bHQsXG4gICAgZ2V0RnJvbURhdGFDYWNoZSxcbiAgICBnZXRGcm9tRm9ybUNhY2hlLFxuICAgIGdldEZyb21TY29wZUNhY2hlLFxuICAgIGdldEZvcm1zVG9Qcm9jZXNzLFxuICAgIGdldEtleSxcbiAgICBnZXRTY2hlbWEsXG4gICAgZ2V0V2F0Y2hhYmxlcyxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluaXRBcnJheUNvcHlXYXRjaCxcbiAgICBpbml0TW9kZWxXYXRjaCxcbiAgICBpbml0U2NoZW1hUGFyYW1zLFxuICAgIGlzQ29tcGlsZWQsXG4gICAgb25Nb2RlbFdhdGNoLFxuICAgIHBhcnNlQ29uZGl0aW9uLFxuICAgIHBhcnNlRXhwcmVzc2lvbixcbiAgICBwcm9jZXNzQXJyYXksXG4gICAgcHJvY2Vzc0RlZmF1bHQsXG4gICAgcHJvY2Vzc0Rpc3BsYXksXG4gICAgcHJvY2Vzc0ZpZWxkLFxuICAgIHByb2Nlc3NGaWVsZHNldCxcbiAgICBwcm9jZXNzRmllbGRQcm9wcyxcbiAgICBwcm9jZXNzRmllbGRUeXBlLFxuICAgIHByb2Nlc3NGaWVsZFdhdGNoLFxuICAgIHByb2Nlc3NDb21wb25lbnQsXG4gICAgcHJvY2Vzc0NvbmRpdGlvbmFsLFxuICAgIHByb2Nlc3NDdXJyZW5jeSxcbiAgICBwcm9jZXNzUGVyY2VudGFnZSxcbiAgICBwcm9jZXNzRGF0ZSxcbiAgICBwcm9jZXNzSGVscCxcbiAgICBwcm9jZXNzUmFkaW9zLFxuICAgIHByb2Nlc3NSYWRpb2J1dHRvbnMsXG4gICAgcHJvY2Vzc1JldXNhYmxlLFxuICAgIHByb2Nlc3NTY2hlbWEsXG4gICAgcHJvY2Vzc1NlbGVjdERpc3BsYXksXG4gICAgcHJvY2Vzc1Jlc29sdmUsXG4gICAgcHJvY2Vzc1NlY3Rpb24sXG4gICAgcHJvY2Vzc1NlbGVjdCxcbiAgICBwcm9jZXNzVGFibGUsXG4gICAgcHJvY2Vzc1RlbXBsYXRlLFxuICAgIHByb2Nlc3NUb2dnbGUsXG4gICAgcHJvY2Vzc1VwZGF0ZWRTY2hlbWEsXG4gICAgcHJvY2Vzc01lZGlhVXBsb2FkLFxuICAgIHByb2Nlc3NDc3ZVcGxvYWQsXG4gICAgcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIHJlZ2lzdGVySGFuZGxlcixcbiAgICByZWdpc3RlclJlc29sdmUsXG4gICAgcmVwbGFjZUFycmF5SW5kZXgsXG4gICAgcmVwcm9jZXNzRmllbGQsXG4gICAgcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBBcnJheVNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2NoZW1hUmVmcmVzaCxcbiAgICBzaWxlbmNlTGlzdGVuZXJzLFxuICAgIHNraXBEZWZhdWx0c1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlcnZpY2UoZm4pIHtcbiAgICByZXR1cm4gXy5maW5kKHNlcnZpY2VzLCBmbik7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIGlmKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIFsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIF0gPSBhcmdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciB7IHNjaGVtYSwgbW9kZWwsIGNvbmZpZyB9ID0gYXJnc1swXTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJTZXJ2aWNlID0gZ2V0U2VydmljZSgoc2VydmljZSkgPT4gc2VydmljZS5tb2RlbCA9PT0gbW9kZWwpO1xuICAgIGlmKGN1clNlcnZpY2UpIHtcbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBjdXJTZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgIHNlcnZpY2VzLnB1c2gobmV3U2VydmljZSk7XG4gICAgcmV0dXJuIG5ld1NlcnZpY2U7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMuc2NvcGVDYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcbiAgICB0aGlzLnNraXBEZWZhdWx0ID0ge307XG5cbiAgICB0aGlzLnBhcmFtcyA9IGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKTtcblxuICAgIHRoaXMuXyA9IF87XG5cbiAgICB0aGlzLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENORmxleEZvcm0ucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICBfLmV4dGVuZChDTkZsZXhGb3JtQ29uc3RydWN0b3IsIHByb3RvdHlwZSwgeyBnZXRTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIFxuICAgIGlmIChzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV0pIHtcbiAgICAgIGRlbGV0ZSBzZXJ2aWNlLnNraXBEZWZhdWx0W2tleV07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIGRlZmF1bHQgaXMgcmV0dXJuZWQgZm9yIG5ldyBmb3JtLCB0cmVhdCBpdCBhcyBhIHByZXZpb3VzIHBhcmFtIGluIG9yZGVyIHRvIG5vdCB0cmlnZ2VyIHVubmVjZXNzYXJ5IHVwZGF0ZVNjaGVtYVxuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmIGFuZ3VsYXIuaXNEZWZpbmVkKGN1ckRlZmF1bHQpICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJEZWZhdWx0O1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoKFxuICAgICAgICAoXy5pc1RydWx5RW1wdHkobW9kZWxWYWx1ZSkgJiYgIXNlcnZpY2UudXBkYXRlcykgfHxcbiAgICAgICAgKF8uaGFzKHNlcnZpY2UuZGVmYXVsdHMsIGtleSkgJiYgYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgc2VydmljZS5kZWZhdWx0c1trZXldKSlcbiAgICAgICkgJiYgIWFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIGN1ckRlZmF1bHQpKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJzo6IHByb2Nlc3NEZWZhdWx0IDo6Jywga2V5LCBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCksIGFuZ3VsYXIuY29weShtb2RlbFZhbHVlKSwgYW5ndWxhci5jb3B5KHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpO1xuICAgICAgICBtb2RlbC5zZXQoYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VydmljZS5kZWZhdWx0c1trZXldID0gYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpO1xuXG4gICAgaWYoc2NoZW1hLmZvcm1hdCA9PT0gJ3VybCcgJiYgIWZpZWxkLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9ICd1cmwnO1xuICAgICAgZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIHVybCAoaHR0cHM6Ly8uLi4pJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRzZXQoZmllbGRzZXQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBmaWVsZHNldC50eXBlID0gJ2NuLWZpZWxkc2V0JztcbiAgICBmaWVsZHNldC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuXG4gICAgaWYoXy5oYXMoZmllbGRzZXQsICdwb3MnKSAmJiBmaWVsZHNldC5wb3MgPT09IDApIHtcbiAgICAgIGZpZWxkc2V0Lmh0bWxDbGFzcyA9IChmaWVsZHNldC5odG1sQ2xhc3MgfHwgJycpICsgJyBib3JkZXJsZXNzJztcbiAgICB9XG4gICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgIGZpZWxkc2V0LnRvZ2dsZUNvbGxhcHNlID0gKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgZmllbGRzZXQuY29sbGFwc2VkID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmllbGRzZXQucmVuZGVyID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBmaWVsZFR5cGUgPSBjbkZsZXhGb3JtVHlwZXMuZ2V0RmllbGRUeXBlKGZpZWxkKTtcbiAgICBjb25zdCBoYW5kbGVyID0gZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlXTtcbiAgICBpZihfLmlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICBzZXJ2aWNlW2hhbmRsZXJdKGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gICAgZWxzZSBpZihfLmlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChzZXJ2aWNlLCBmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T2dLZXlzKGZpZWxkKSB7XG4gICAgcmV0dXJuIF8ucmVqZWN0KFxuICAgICAgXy5rZXlzKGZpZWxkKSxcbiAgICAgIChrZXkpID0+IC9ea2V5JHxeaHRtbENsYXNzJHxeXy8udGVzdChrZXkpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZChmaWVsZCwgcG9zKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWVsZC5wb3MgPSBwb3M7XG4gICAgfVxuXG4gICAgaWYoIWZpZWxkLl9vZ0tleXMpIHtcbiAgICAgIGZpZWxkLl9vZ0tleXMgPSBnZXRPZ0tleXMoZmllbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSk7XG4gICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXkpO1xuXG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgZmllbGQuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICBpZihzY2hlbWEuZGVzY3JpcHRpb24pIGZpZWxkLmRlc2NyaXB0aW9uID0gc2NoZW1hLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZihmaWVsZC5yZWFkb25seSAmJiAhc2NoZW1hLnJlYWRvbmx5KSBmaWVsZC5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICBpZihzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiAhKCdzaG93Q2xlYXJBbGwnIGluIGZpZWxkKSkgZmllbGQuc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5wcm9jZXNzU2NoZW1hKGZpZWxkKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZpZWxkKTtcblxuICAgIGlmKGtleSkge1xuICAgICAgKChrZXkpID0+IHtcbiAgICAgICAgaWYoXy5maW5kKHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KSkge1xuICAgICAgICAgIHNlcnZpY2UuZXJyb3JzID0gXy5yZWplY3Qoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pO1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KShnZXREb3RLZXkoa2V5KSk7XG4gICAgICBcbiAgICAgIGlmKGZpZWxkLmVycm9yKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzLnB1c2goc2VydmljZS5idWlsZEVycm9yKGZpZWxkKSk7XG4gICAgICAgIGlmKF8uaXNFbXB0eShmaWVsZC5uZ01vZGVsT3B0aW9ucykpIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFsbG93SW52YWxpZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMuYWxsb3dJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFByb3BzKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgIF8uaGFzKGZpZWxkLCBwcm9wKSAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRLZXkoa2V5KSB7XG4gICAgaWYoXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGtleSA9IF8ucmVkdWNlKGtleSwgKHRvdGFsLCBuZXh0KSA9PiBcbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgZmlyc3QgPSBrZXlbMF07XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3AsIHRydWUpO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIHNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgZGF0YTtcbiAgICAvLyBkb2VzIGRlY2xhcmF0aXZlL2Z1bmN0aW9uYWwgb3V0d2VpZ2ggcGVyZm9ybWFuY2U/XG4gICAgaWYoZXhwLmluY2x1ZGVzKCcgfHwgJykpIHtcbiAgICAgIGxldCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZWl0aGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGVpdGhlcnNbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkge1xuICAgICAgICAgIGRhdGEgPSB4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoZXhwLmluY2x1ZGVzKCcgJiYgJykpIHtcbiAgICAgIGxldCBhbGwgPSBleHAuc3BsaXQoJyAmJiAnKTtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhbGwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhbGxbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkgZGF0YSA9IHg7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkYXRhID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSByZXNvbHZpbmcgZnJvbSBtb2RlbCBidXQgZGVmYXVsdHMgaGF2ZW4ndCBiZWVuIGFwcGxpZWQgeWV0LCByZXNvbHZlIGZyb20gZGVmYXVsdCBpdHNlbGZcbiAgICBpZighZGF0YSAmJiBleHAuaW5kZXhPZignbW9kZWwuJykgPT09IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGV4cC5yZXBsYWNlKCdtb2RlbC4nLCAnJyk7XG4gICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICBjb25zdCBjYWNoZWRGaWVsZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHx8IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShnZW5lcmljS2V5KTtcblxuICAgICAgZGF0YSA9ICgoKSA9PiB7XG4gICAgICAgIGlmKGNhY2hlZEZpZWxkICYmIGNhY2hlZEZpZWxkLmRlZmF1bHQpXG4gICAgICAgICAgcmV0dXJuIGNhY2hlZEZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpKVxuICAgICAgICAgIHJldHVybiBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShnZW5lcmljS2V5KTtcbiAgICAgICAgaWYoc2NoZW1hKSByZXR1cm4gc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9KSgpO1xuICAgIH1cblxuICAgIGlmKGRhdGEgJiYgZGF0YS5jdXJzb3IpIHtcbiAgICAgIGZpZWxkLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGFQcm9wID0gZXhwLm1hdGNoKC9zY2hlbWFcXC5kYXRhXFwuKC4rKS8pWzFdO1xuICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoYGRhdGE6JHtkYXRhUHJvcH06JHtkYXRhLmN1cnNvcn1gKTtcbiAgICAgIH07XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBmaWVsZC5sb2FkTW9yZTtcbiAgICB9XG4gXG4gICAgZmllbGRbZmllbGRQcm9wXSA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuXG4gICAgaWYoIXNraXBQcm9wSGFuZGxlcnMpIHtcbiAgICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PiBcbiAgICAgICAgICBwcm9wID09PSBmaWVsZFByb3AgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCBleHApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goeyBmaWVsZCwgcHJvcDogZmllbGRQcm9wLCBleHAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5jb25kaXRpb25hbHMsIChjb25kaXRpb24sIGtleSkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzZXJ2aWNlLmdldEZyb21TY29wZUNhY2hlKHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkpO1xuICAgICAgICBpZihrZXkgPT09ICdyZXF1aXJlZCcgJiYgc2NvcGUpIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1WYWxpZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmllbGRcbiAgICAgICAgICAuY29uZGl0aW9uYWxzW2tleV1cbiAgICAgICAgICAubWF0Y2goL21vZGVsXFwuKFteXFxzXSspL2cpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGgubWF0Y2goL21vZGVsXFwuKFteXFxzXSspLylbMV0pXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRXYXRjaChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFmaWVsZC53YXRjaCkgcmV0dXJuO1xuXG4gICAgbGV0IHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcbiAgICBmaWVsZC53YXRjaCA9IF8uaXNBcnJheShmaWVsZC53YXRjaCkgPyBmaWVsZC53YXRjaCA6IFtmaWVsZC53YXRjaF07XG5cbiAgICBfLmVhY2goZmllbGQud2F0Y2gsIGZ1bmN0aW9uKHdhdGNoKSB7XG4gICAgICBpZih3YXRjaC5yZXNvbHV0aW9uKSB7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSB3YXRjaC5jb25kaXRpb247XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIChkYXlzfGhvdXJzKS8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSB7XG4gICAgICAgICAgICAgIHZhbDogYWRqdXN0bWVudC5kYXRlWzFdLFxuICAgICAgICAgICAgICB1bml0czogYWRqdXN0bWVudC5kYXRlWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUudmFsLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQoYWRqdXN0bWVudC5kYXRlLnZhbCwgYWRqdXN0bWVudC5kYXRlLnVuaXRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKC4qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IF8uaXNVbmRlZmluZWQoY3VyKSA/IGFuZ3VsYXIuY29weShkZWZhdWx0VmFsdWUpIDogYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBvbkFycmF5ID0gKGN1ciwgcHJldiwgcmVvcmRlcikgPT4ge1xuXG4gICAgICBpZighcHJldiAmJiBwcmV2ICE9PSAwICYmIChjdXIgfCAwKSA8IDEpIHJldHVybjtcbiAgICAgIHZhciBpLCBsLCBrZXk7XG5cbiAgICAgIGlmKHByZXYgPiBjdXIgfHwgcmVvcmRlcikge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGAke2FycktleX1bJHtwcmV2IC0gMX1dLiR7ZmllbGRLZXl9YCA6XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV1gO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICAgIGAke2FycktleX1bJHtpfV1gO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFyclZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKGFyclZhbCwgKGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgIGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3RlbmVyS2V5ID0gYCR7YXJyS2V5fS5sZW5ndGhgO1xuICAgIGlmKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2xpc3RlbmVyS2V5XS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gICAgLy9pZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBkZWxldGUgc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gJHJvb3RTY29wZS4kd2F0Y2goXG4gICAgICAoKSA9PiBzZXJ2aWNlLm1vZGVsLFxuICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmIFxuICAgICAgICAgICAgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJlxuICAgICAgICAgICAgIWlzSW5pdEFycmF5ICYmXG4gICAgICAgICAgICB2YWwgIT09IG51bGwvKiAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKHZhbCwgc2VydmljZS5nZXREZWZhdWx0KGtleSkpKi8pIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICBlbHNlIGlmIChmb3JtLmNvbmRpdGlvbi5pbmNsdWRlcyhcImFycmF5SW5kZXhcIikpIHtcbiAgICAgICAgICBmb3JtLmNvbmRpdGlvbiA9IHNlcnZpY2UucmVwbGFjZUFycmF5SW5kZXgoZm9ybS5jb25kaXRpb24sIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgY29uc3QgdW5pbmRleGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuXG4gICAgICAvLyBUT0RPIC0tIG5vdCBzdXJlIGlmIGdldEFycmF5Q29waWVzRm9yIGlzIGFjdHVhbGx5IG5lY2Vzc2FyeVxuICAgICAgLy8gd2Ugc2hvdWxkIGxvb2sgaW50byB3aGVyZSB0aGlzIGZ1bmN0aW9uIG1pZ2h0IGJlIG5lZWRlZCBhbmRcbiAgICAgIC8vIHBvdGVudGlhbGx5IHJlbW92ZSBpdFxuICAgICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0Zvcih1bmluZGV4ZWRLZXkpO1xuICAgICAgaWYoIWNvcGllcy5sZW5ndGgpIGNvcGllcy5wdXNoKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXModW5pbmRleGVkS2V5KSB8fCBbXSk7XG5cbiAgICAgIGNvcGllcy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0ICYmIGxpc3Quc3BsaWNlKHNjb3BlLmFycmF5SW5kZXgsIDEpKTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIHZhciBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIFxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb24gfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYobm9Db25zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGlmKHZhbCA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgICBsZXQgeyBvYmosIGtleSB9ID0gdGhpcy5nZXRBc3NpZ25hYmxlKHsgbm9Db25zdHJ1Y3Rpb246IHRydWUgfSkgfHwge307XG4gICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgIHNlcnZpY2Uuc2lsZW5jZUxpc3RlbmVycyhyZXNvbHZlZCwgZGVwdGgpO1xuICAgICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRzKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpbGVuY2VMaXN0ZW5lcnMoa2V5U3RhcnQsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgaWYoa2V5LmluZGV4T2Yoa2V5U3RhcnQpID09PSAwKSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBkZXB0aCkuZ2V0KCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETyAtLSBleHRlbmQgdGhpcyB0byBzdXBwb3J0IG5lc3RlZCBhcnJheSBrZXlzXG4gIC8vIGUuZy4gXCJjcmVhdGl2ZVsxXS5jaGlsZEF0dGFjaG1lbnRzWzBdLmNhbGxUb0FjdGlvblwiXG4gIGZ1bmN0aW9uIHNraXBEZWZhdWx0cyhrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGluZGV4ID0ga2V5U3RhcnQubWF0Y2goL1xcW1xcZCpcXF0vKSA/IGdldEFycmF5SW5kZXgoa2V5U3RhcnQpIDogbnVsbDtcbiAgICBjb25zdCBrcyA9IHN0cmlwSW5kZXhlcyhrZXlTdGFydCk7XG4gICAgXy5lYWNoKHNlcnZpY2UuZm9ybUNhY2hlLCAoZm9ybSwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoa3MpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpbmRleCk7IFxuICAgICAgICBzZXJ2aWNlLnNraXBEZWZhdWx0W2luZGV4ZWRLZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCwgXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47IFxuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIF8uZWFjaChmaWVsZC5kYXRhLCBmdW5jdGlvbihkYXRhUHJvcCwga2V5KSB7XG4gICAgICBmaWVsZC5kYXRhW2tleV0gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihkYXRhUHJvcCkuZ2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgdmFyIGtleSA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5xO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSBmdW5jdGlvbihxKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgcGFyYW1zW2tleV0gPSBxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHdyYXAgaW4gc3RyaW5nIHNvIHJldHVybnMgdHJ1dGh5IHdoZW4gY29tcGlsZWQsIGJ1dCBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdpdGhpbiBkaXJlY3RpdmVcbiAgICAgIGlmKCFrZXkpIHNlbGVjdC5taW5Mb29rdXAgPSAnMCc7XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzY2hlbWEuaXRlbXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgXy5lYWNoKHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChzY2hlbWEuZGVmYXVsdCkpIHtcbiAgICAgICAgICBkZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIFwia2V5XCI6IGtleSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHNjaGVtYS5kZWZhdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYoZGVmYXVsdHMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdC5vbkFkZCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQpIHtcbiAgICAgICAgICBpZih2YWwudmFsdWUgJiYgZXZlbnQgPT09ICd0YWctYWRkZWQnKSB7XG4gICAgICAgICAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgICAgaWYoIXZhbC52YWx1ZVtwcm9wLmtleV0pIHZhbC52YWx1ZVtwcm9wLmtleV0gPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHNlbGVjdC5pdGVtRm9ybWF0dGVyID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoc2VsZWN0LmRpc3BsYXlGb3JtYXQpO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3QudHlwZS5pbmNsdWRlcygnY24tYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGlmKHNlbGVjdC5pdGVtcykge1xuICAgICAgICBzZWxlY3QuZGV0YWlsZWRMaXN0ID0gdHJ1ZTtcblxuICAgICAgICBpZihzZWxlY3QuaXRlbXNbMF0udHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICBpZihzZWxlY3QuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7IFxuICAgICAgICAgICAgICBpZih2YWxpZCA9PT0gdW5kZWZpbmVkKSBtb2RlbFZhbHVlLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdC5rZXksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZm9ybUN0cmwgJiYgc2VydmljZS5mb3JtQ3RybFtzZXJ2aWNlLmdldEtleShzZWxlY3Qua2V5KV07XG4gICAgICAgIGlmKGZvcm0gJiYgZm9ybS4kc2V0RGlydHkpIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICB9LCBzZWxlY3QudXBkYXRlU2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVG9nZ2xlKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS50eXBlID0gJ2NuLXRvZ2dsZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSGVscChoZWxwKSB7XG4gICAgaGVscC5odG1sQ2xhc3MgPSAnaGVscC1ibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGlzcGxheShkaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRpc3BsYXkudHlwZSA9ICdjbi1kaXNwbGF5JztcbiAgICBkaXNwbGF5LmdldERpc3BsYXkgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShkaXNwbGF5LmRpc3BsYXlGb3JtYXQsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RlbXBsYXRlKHRwbCwgcGFyc2VTY29wZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvL3ZhciBwcm9jZXNzb3IgPSAvPChcXFMrKVtePl0qPi4qPFxcL1xcMT4vLnRlc3QodHBsKSA/ICRjb21waWxlIDogJGludGVycG9sYXRlO1xuICAgIHZhciBwcm9jZXNzb3IgPSAkaW50ZXJwb2xhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBhcnJheUluZGV4KSB7XG4gICAgICBpZihwYXJzZVNjb3BlKSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICAgICAgc2NvcGUgPSBfLm1hcChzY29wZSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSAnYXJyYXlJbmRleCcgPyBhcnJheUluZGV4IDoga2V5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjb3BlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUsIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3Nvcih0cGwpKHNjb3BlKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RhYmxlKHRhYmxlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHRhYmxlLnR5cGUgPSAnY24tdGFibGUnO1xuICAgIHRhYmxlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXy5leHRlbmQocm93Lml0ZW1zW2ldLCB0YWJsZS5jb2x1bW5zW2ldKTtcbiAgICAgICAgLy9pZihyb3cuY29sdW1uc1tpXS5rZXkpIHJvdy5jb2x1bW5zW2ldLmtleSA9IE9iamVjdFBhdGgucGFyc2Uocm93LmNvbHVtbnNbaV0ua2V5KTtcbiAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQocm93Lml0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KSxcbiAgICAgICAgc2VsZWN0RmllbGQgPSBfLmZpbmQoc2VsZWN0RGlzcGxheS5pdGVtcywgJ3NlbGVjdEZpZWxkJyksXG4gICAgICAgIGhhbmRsZXI7XG5cbiAgICBpZihzY2hlbWEgJiYgc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9XG5cbiAgICBzZWxlY3REaXNwbGF5LnNlbGVjdERpc3BsYXkgPSBmYWxzZTtcbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3RGaWVsZC5rZXksIGhhbmRsZXIsIHNlbGVjdEZpZWxkLnVwZGF0ZVNjaGVtYSwgdHJ1ZSk7XG4gICAgLy9zZXJ2aWNlLnByb2Nlc3NGaWVsZChzZWxlY3REaXNwbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZihpdGVtLmNvbmRpdGlvbiAhPT0gJ2ZhbHNlJykge1xuICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKHZhbCwgcHJldiwga2V5KSB7XG4gICAgICB2YXIgaW5kZXggPSBnZXRBcnJheUluZGV4KGtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGluZGV4KTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIHZhciBmb3JtQ29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KGNvcHkua2V5KSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBydW4gaGFuZGxlciBvbmNlIGFsbCBhcnJheUNvcGllcyBoYXZlIGJlZW4gaW5zdGFudGlhdGVkXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIga2V5TWFwID0gXy5wbHVjayhfLnJlamVjdChzZWxlY3REaXNwbGF5Lml0ZW1zLCB7XCJjb25kaXRpb25cIjpcImZhbHNlXCJ9KSwgJ2tleScpO1xuICAgIHZhciBvbmNlID0gJHJvb3RTY29wZS4kb24oJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBmdW5jdGlvbihldmVudCwga2V5KSB7XG4gICAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYobW9kZWwpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gbW9kZWwubGVuZ3RoICogKGtleU1hcC5sZW5ndGgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKGtleU1hcCwga2V5KSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY291bnQgPT09IHRvdGFsKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlcihudWxsLCBudWxsLCAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHJlc2V0Q291bnQgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm0udXBkYXRlUGFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY291bnQgPSAwO1xuICAgIH0pO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gob25jZSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChyZXNldENvdW50KTtcbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIHRoZSBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdERpc3BsYXkua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZihkZWZhdWx0cyAmJiAhbW9kZWwuZ2V0KCkpIHtcbiAgICAgIG1vZGVsLnNldChkZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNjaGVtYVJlZnJlc2gocmVmcmVzaCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKHVwZGF0ZVNjaGVtYSkge1xuICAgICAgdmFyIHBhcmFtcyA9IF8uZXh0ZW5kKGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKSwgc2VydmljZS5wYXJhbXMpO1xuICAgICAgdmFyIGRpZmYgPSBjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSk7XG4gICAgICB2YXIga2V5cztcblxuICAgICAgaWYoZGlmZiB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsICd1cGRhdGVTY2hlbWEnKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgICAgICAgLy9zZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgcmVnaXN0ZXIuZXhwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLnNjaGVtYSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOnNjaGVtYScsIHNjaGVtYS5kaWZmLnNjaGVtYSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5zY2hlbWEsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIChmb3JtLCBrZXkpID0+IHtcblxuICAgICAgICAgIGlmKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG4gICAgICAgICAgXG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjb3B5LCBmb3JtKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgKGtleSkgPT4ge1xuICAgICAgICAgIF8uZWFjaChcbiAgICAgICAgICAgIHNlcnZpY2UuZ2V0Rm9ybXNUb1Byb2Nlc3Moa2V5KSxcbiAgICAgICAgICAgIChjb3B5KSA9PiBjb3B5ICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS51cGRhdGVTY2hlbWEoc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGb3Jtc1RvUHJvY2VzcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBbICwgYXJyYXlJbmRleCBdID0ga2V5Lm1hdGNoKC9cXFsoXFxkKStdLykgfHwgW107XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJykpO1xuICAgIGlmKF8uaXNVbmRlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgIGNvbnN0IGNhY2hlZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpO1xuICAgICAgcmV0dXJuIFsgY2FjaGVkLCAuLi5jb3BpZXMgXTtcbiAgICB9XG4gICAgcmV0dXJuIFsgY29waWVzW2FycmF5SW5kZXhdIF07XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NGaWVsZChjdXJyZW50LCB1cGRhdGUsIGlzQ2hpbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShjdXJyZW50LmtleSk7XG5cbiAgICAvLyBvdGhlciBsb2dpYyBpbiB0aGUgc2VydmljZSB3aWxsIGFkZCBjb25pdGlvbiA9ICd0cnVlJyB0byBmb3JjZVxuICAgIC8vIGNvbmRpdGlvbiB0byBldmFsIHRydWUsIHNvIHdlIHNldCB0aGUgdXBkYXRlIGNvbmRpdGlvbiB0byAndHJ1ZSdcbiAgICAvLyBiZWZvcmUgY29tcGFyaW5nXG4gICAgaWYoIXVwZGF0ZS5jb25kaXRpb24gJiYgY3VycmVudC5jb25kaXRpb24pIHVwZGF0ZS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgbGV0IHJlZHJhdyA9ICFpc0NoaWxkICYmIGN1cnJlbnQuY29uZGl0aW9uICE9PSB1cGRhdGUuY29uZGl0aW9uO1xuXG4gICAgXy5leHRlbmQoY3VycmVudCwgXy5vbWl0KHVwZGF0ZSwgJ2l0ZW1zJywgJ2tleScpKTtcblxuICAgIGN1cnJlbnQuX29nS2V5cy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZighdXBkYXRlW3Byb3BdKSB7XG4gICAgICAgIGRlbGV0ZSBjdXJyZW50W3Byb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGN1cnJlbnQuX29nS2V5cyA9IGdldE9nS2V5cyh1cGRhdGUpO1xuXG4gICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcblxuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybVJlcHJvY2Vzc0ZpZWxkJywga2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSB7XG4gICAgICBjb25zb2xlLmxvZygnVE9ETzogc2VlIGlmIHRoaXMgY2FuIGJlIHJlbW92ZWQnKTsgXG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvdEtleShrZXkpIHtcbiAgICByZXR1cm4gKF8uaXNTdHJpbmcoa2V5KSA/IE9iamVjdFBhdGgucGFyc2Uoa2V5KSA6IGtleSkuam9pbignLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGdldERvdEtleShmaWVsZC5rZXkpLFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlcnZpY2UuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC9cXFsoXFxkKylcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleUNvcHk7XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB2YXIgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleDtcblxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rpc21pc3NNb2RhbCcpO1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zIFxuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAgIC8vLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKTtcblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDxuZy1mb3JtIFxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIHZtLmNvbmZpZy5zY2hlbWE7IH0sIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndm0uc2VydmljZS5pc0NvbXBpbGVkKCk6Jywgdm0uc2VydmljZS5pc0NvbXBpbGVkKCkpO1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgICAgLy8kc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVJlZHJhdycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICB2bS5zZXJ2aWNlLmNsZWFudXAoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vLy9cbiAgXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVEYXRhOicsIHVwZGF0ZURhdGEpO1xuICAgICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gIC8vLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgLy9jb25zb2xlLmxvZygnJHNjb3BlLCBuZ01vZGVsOicsICRzY29wZS5mb3JtLCBuZ01vZGVsKTtcbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9