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
	  prop: 'selectDisplay',
	  handler: function handler(field, service) {
	    return service.processSelectDisplay(field);
	  }
	}, {
	  prop: 'resolve',
	  handler: function handler(field, service) {
	    return service.processResolve(field);
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
	      if ((_.isTrulyEmpty(modelValue) || _.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key])) && !angular.equals(modelValue, curDefault)) {
	        model.set(curDefault);
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
	
	  function processField(field, pos) {
	    var service = this;
	
	    if (angular.isDefined(pos)) {
	      field.pos = pos;
	    }
	
	    if (!field._ogKeys) {
	      field._ogKeys = _.without(_.keys(field), 'key', 'htmlClass');
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
	      if (_.find(service.errors, { key: key })) {
	        service.errors = _.reject(service.errors, { key: key });
	        $rootScope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
	        $rootScope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
	      }
	
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
	
	      service.handleResolve(field, fieldProp, dataProp);
	
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
	
	  function handleResolve(field, fieldProp, exp) {
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
	
	    var newVal = data && data.data ? data.data : data;
	    if (!angular.equals(newVal, field[fieldProp])) {
	      field[fieldProp] = data && data.data ? data.data : data;
	
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
	
	    //if(service.listeners[key]) service.listeners[key].handlers = [];
	    if (service.listeners[key]) delete service.listeners[key];
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
	
	        if (!form.condition) form.condition = 'true';
	
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
	      var copies = service.getArrayCopiesFor(unindexedKey);
	
	      copies.forEach(function (list) {
	        return list.splice(index, 1);
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
	        var resolved = service.resolveNestedExpressions(exp, depth);
	        var path = ObjectPath.parse(resolved);
	        var progress = [];
	        var start = depth || service;
	
	        while (start && path.length > 1) {
	          var key = path.shift();
	          progress.push(key);
	          if (!start[key]) {
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
	        var assignable = this.getAssignable();
	        if (val === 'remove') {
	          delete assignable.obj[assignable.key];
	        } else {
	          assignable.obj[assignable.key] = val;
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
	        _.each(schema.diff.form, function (form) {
	
	          if (keys.indexOf(form.key) === -1) {
	            keys.push(form.key);
	          }
	
	          // don't want to override key when extending cached objects
	          //var key = form.key;
	          //delete form.key;
	
	          var cached = service.getFromFormCache(form.key);
	          if (cached) {
	            service.reprocessField(cached, form);
	          }
	          var copies = service.getArrayCopies(form.key);
	          if (copies) {
	            copies.forEach(function (copy) {
	              return copy && service.reprocessField(copy, form);
	            });
	          }
	        });
	      }
	
	      if (keys.length) {
	        _.each(keys, function (key) {
	          var form = service.getFromFormCache(key);
	          if (form) service.processField(form);
	          if (key.includes('[]')) {
	            var copies = service.getArrayCopies(key);
	            _.each(copies, function (copy) {
	              if (copy) service.processField(copy);
	            });
	          }
	        });
	      }
	
	      service.broadcastErrors();
	    } else {
	      service.updateSchema(schema);
	    }
	  }
	
	  function reprocessField(current, update, isChild) {
	    var service = this;
	
	    // other logic in the service will add conition = 'true' to force
	    // condition to eval true, so we set the update condition to 'true'
	    // before comparing
	    if (!update.condition && current.condition) update.condition = 'true';
	    var redraw = !isChild && current.condition !== update.condition;
	
	    _.extend(current, _.omit(update, 'items', 'key'));
	
	    current._ogKeys.forEach(function (key) {
	      if (!update[key]) delete current[key];
	    });
	    current._ogKeys = _.keys(update);
	
	    service.deregisterHandlers(update.key);
	
	    $rootScope.$broadcast('cnFlexFormReprocessField', update.key);
	
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
	
	  function buildError(field) {
	    var service = this;
	    var key = service.getKey(field.key);
	    return {
	      key: key,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYjc2YjRkNzY0YWY1YjgwNjQxNCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NTZWxlY3REaXNwbGF5IiwicHJvY2Vzc1Jlc29sdmUiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwic2Vjb25kUGFzcyIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRGVmYXVsdCIsImRlZmF1bHQiLCJyZWdpc3RlckhhbmRsZXIiLCJ1cGRhdGVTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEtleSIsImdldFNjaGVtYSIsImdldFdhdGNoYWJsZXMiLCJoYW5kbGVSZXNvbHZlIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0Rpc3BsYXkiLCJwcm9jZXNzRmllbGQiLCJwcm9jZXNzRmllbGRzZXQiLCJwcm9jZXNzRmllbGRQcm9wcyIsInByb2Nlc3NDb21wb25lbnQiLCJwcm9jZXNzQ3VycmVuY3kiLCJwcm9jZXNzUGVyY2VudGFnZSIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsInNraXBEZWZhdWx0cyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwic2tpcERlZmF1bHQiLCJwYXJhbXMiLCJleHRlbmQiLCJmb3JtcyIsImZvcm0iLCJiaW5kIiwic2V0VmFsdWUiLCJjb21waWxlZCIsImZvcm1DdHJsIiwiZ2V0U2NoZW1hRm9ybSIsImdldFNjaGVtYVR5cGUiLCJpc0FycmF5IiwiZmlyc3QiLCJjdXJEZWZhdWx0Iiwia2V5IiwiaXNEZWZpbmVkIiwibW9kZWxWYWx1ZSIsImdldCIsImlzVHJ1bHlFbXB0eSIsImhhcyIsImVxdWFscyIsInNldCIsImNvcHkiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImZpZWxkc2V0IiwiaXRlbXMiLCJmb3JFYWNoIiwicG9zIiwiaHRtbENsYXNzIiwiY29sbGFwc2libGUiLCJ0b2dnbGVDb2xsYXBzZSIsImNvbGxhcHNlZCIsInJlbmRlciIsImlzRnVuY3Rpb24iLCJjYWxsIiwiX29nS2V5cyIsIndpdGhvdXQiLCJrZXlzIiwiZGVzY3JpcHRpb24iLCJyZWFkb25seSIsInNob3dDbGVhckFsbCIsInJlamVjdCIsIiRicm9hZGNhc3QiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsInJlZHVjZSIsInRvdGFsIiwibmV4dCIsImRlcHRoIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwic2hpZnQiLCJleHAiLCJ3YXRjaGFibGVzIiwibmVzdGVkIiwibWF0Y2hOZXN0ZWRFeHByZXNzaW9uIiwicmVwbGFjZVN0ciIsInJlcGxhY2UiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJhcnJheUluZGV4Iiwid2F0Y2hhYmxlIiwibWF0Y2giLCJiYXNlIiwiZWl0aGVycyIsInNwbGl0IiwieCIsImFsbCIsInVuZGVmaW5lZCIsImluZGV4T2YiLCJnZW5lcmljS2V5Iiwic3RyaXBJbmRleGVzIiwiY2FjaGVkRmllbGQiLCJjdXJzb3IiLCJsb2FkTW9yZSIsInJlZnJlc2hTY2hlbWEiLCJuZXdWYWwiLCJmaWVsZEtleSIsInJlZ2lzdGVyIiwiY29uZGl0aW9uYWxzIiwidmFsIiwicHJldiIsInNjb3BlIiwibWFwIiwicGF0aCIsInJlc29sdXRpb24iLCJhZGp1c3RtZW50IiwiY3VyIiwiZGF0ZSIsInRyaW0iLCJtYXRoIiwib3BlcmF0b3IiLCJhZGp1c3RlciIsInRyaWdnZXIiLCJjdXJDb25kaXRpb24iLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicmVzdWx0IiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImFjYyIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJsaXN0ZW5lcktleSIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJpbmRleCIsIiRlbWl0IiwidW5pbmRleGVkS2V5IiwiY29waWVzIiwic3BsaWNlIiwibGluayIsInBsdWNrIiwia2V5U3RhcnQiLCJmaWx0ZXIiLCJ3YXJuIiwibWF0Y2hJbnRTdHJJbmRleCIsInRvUmVwbGFjZSIsInJlcGxhY2VkIiwicGFyc2VkIiwia2V5VmFsIiwiaXNTdHIiLCJwYXJzZUZsb2F0IiwicmVzb2x2ZWQiLCJzdGFydCIsImdldEFzc2lnbmFibGUiLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJvcHRpb25zIiwiYXNzaWduYWJsZSIsInNpbGVudCIsImdldEFycmF5SW5kZXgiLCJrcyIsImluZGV4ZWRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwibWFwVmFsIiwib25Jbml0Iiwic2V0dGVyIiwicSIsInRpdGxlUXVlcnkiLCJtaW5Mb29rdXAiLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsInNlbGVjdEtleSIsInNwbGl0S2V5IiwiaW5kZXhlZFNlbGVjdEtleSIsInNlbGVjdFZhbHVlIiwiZm9ybUNvcGllcyIsImVsZW0iLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwiZGVzdHJveVN0cmF0ZWd5IiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsIm9uQWZ0ZXJEaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkc2NvcGUiLCIkbG9jYXRpb24iLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJ0aXRsZSIsImFjdGlvbkNvbmZpZyIsInJldHVyblN0YXRlIiwicmV0dXJuU3R5bGUiLCJyZXR1cm5UZXh0IiwiY2xvc2VCdXR0b24iLCJhY3Rpb25zIiwiYnRuQ29uZmlnIiwiZmZWYWxpZGF0ZSIsImF0dHJzIiwibmdNb2RlbCIsInJlcXVpcmVkIiwiJHZpZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSJdLCJtYXBwaW5ncyI6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USxVQStDT2IsaUI7Ozs7Ozs7Ozs7O0FDMUdmLFVBQVNjLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMNUIsZUFBVSxHQURMO0FBRUw1TixZQUFPLEVBQUVqRixNQUFNLGFBQVIsRUFGRjtBQUdMdkgsY0FBUyxTQUhKO0FBSUx3USxXQUFNQTtBQUpELElBQVA7QUFNRDs7QUFFRCxVQUFTQSxJQUFULENBQWNxSyxNQUFkLEVBQXNCM0UsSUFBdEIsRUFBNEIrRixLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUM7QUFDQSxPQUFHckIsT0FBT3RULElBQVAsSUFBZXNULE9BQU90VCxJQUFQLENBQVk0VSxRQUE5QixFQUF3QztBQUN0Q3RCLFlBQU90TCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU8yTSxRQUFRRSxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVNsZixLQUFULEVBQWdCO0FBQ3ZFO0FBQ0FnZixlQUFRRyxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FILGVBQVFHLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0NuZixLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOztBQUVEO0FBQ0k7QUFDQTs7bUJBRVc4ZSxVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjc2YjRkNzY0YWY1YjgwNjQxNCIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zb2xlLmxvZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgLy8nbmdKc29uRXhwbG9yZXInLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgICAuY2hhaW4oJHN0YXRlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgICAub21pdChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2KSB8fCBfLmlzTnVsbCh2KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Db25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcigpIHtcblxuICB2YXIgZmllbGRUeXBlUmVnaXN0ZXIgPSBbe1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hpZGRlbicsXG4gICAgdHlwZTogJ2hpZGRlbidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvcydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9idXR0b25zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvYnV0dG9ucydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnYXV0b2NvbXBsZXRlJykgfHwgZmllbGQudGl0bGVNYXAgfHwgZmllbGQudGl0bGVNYXBSZXNvbHZlIHx8IGZpZWxkLnRpdGxlTWFwUXVlcnksXG4gICAgdHlwZTogJ2NuLWF1dG9jb21wbGV0ZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NuLWRhdGV0aW1lcGlja2VyJyB8fCBmaWVsZC50eXBlID09PSAnZGF0ZXRpbWUtbG9jYWwnIHx8IGZpZWxkLnR5cGUgPT09ICd0aW1lLW1pbnV0ZXMnLFxuICAgIHR5cGU6ICdjbi1kYXRldGltZXBpY2tlcidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hlbHAnLFxuICAgIHR5cGU6ICdoZWxwJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdkaXNwbGF5JyksXG4gICAgdHlwZTogJ2NuLWRpc3BsYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQuaW5jbHVkZXMoJ2N1cnJlbmN5JyksXG4gICAgdHlwZTogJ2NuLWN1cnJlbmN5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCA9PT0gJ3BlcmNlbnRhZ2UnLFxuICAgIHR5cGU6ICdjbi1wZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbmZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIHJlYWQtb25seT1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgdW5kZWZpbmVkLWNsYXNzPVwiZm9ybS51bmRlZmluZWRDbGFzc1wiLz5cbiAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5vblRleHQgJiYgZm9ybS5vZmZUZXh0XCI+XG4gICAgICAgICAgICB7eyQkdmFsdWUkJCA9PT0gZm9ybS5vblZhbHVlID8gZm9ybS5vblRleHQgOiBmb3JtLm9mZlRleHR9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGF0ZXRpbWVwaWNrZXIuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZGF0ZXRpbWVwaWNrZXJcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgaXMtZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBtaW4tZGF0ZT1cImZvcm0ubWluRGF0ZVwiXG4gICAgICAgICAgbWF4LWRhdGU9XCJmb3JtLm1heERhdGVcIlxuICAgICAgICAgIG1heC12aWV3PVwie3tmb3JtLm1heFZpZXd9fVwiXG4gICAgICAgICAgY24tZGF0ZS1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLnR5cGV9fVwiXG4gICAgICAgICAgbW9kZWwtZm9ybWF0dGVyPVwiZm9ybS5tb2RlbEZvcm1hdHRlclwiXG4gICAgICAgICAgbW9kZWwtcGFyc2VyPVwiZm9ybS5tb2RlbFBhcnNlclwiXG4gICAgICAgICAgdmlldy1mb3JtYXR0ZXI9XCJmb3JtLnZpZXdGb3JtYXR0ZXJcIlxuICAgICAgICAgIHZpZXctcGFyc2VyPVwiZm9ybS52aWV3UGFyc2VyXCJcbiAgICAgICAgICBmb3JtYXQtc3RyaW5nPXt7Zm9ybS5kYXRlRm9ybWF0fX1cbiAgICAgICAgICBpY29uLWNsYXNzPXt7Zm9ybS5pY29uQ2xhc3N9fT5cbiAgICAgICAgPC9jbi1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgdmFyIHNoYXJlZEF1dG9jb21wbGV0ZVRwbCA9IGBcbiAgICAgICAgPHRhZ3MtaW5wdXRcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5PVwie3tmb3JtLmRpc3BsYXlQcm9wZXJ0eSB8fCAnbmFtZSd9fVwiXG4gICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJ7e2Zvcm0udmFsdWVQcm9wZXJ0eX19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlciB8fCAnICd9fVwiXG4gICAgICAgICAgY2xlYXItb24tYmx1cj1cInRydWVcIlxuICAgICAgICAgIGFkZC1vbi1jb21tYT1cImZhbHNlXCJcbiAgICAgICAgICBhZGQtZnJvbS1hdXRvY29tcGxldGUtb25seT1cInt7IWZvcm0uYWxsb3dOZXd9fVwiXG4gICAgICAgICAgb24tYmVmb3JlLXRhZy1hZGRlZD1cImZvcm0ub25BZGQoe3ZhbHVlOiAkdGFnfSwgZm9ybSwgJGV2ZW50LCAkcHJldilcIlxuICAgICAgICAgIG9uLWluaXQ9XCJmb3JtLm9uSW5pdCgkdGFnLCBmb3JtLCAkZXZlbnQsICRzZXR0ZXIpXCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLmdldFNjaGVtYVR5cGUoKX19XCJcbiAgICAgICAgICBhcnJheS12YWx1ZS10eXBlPVwie3tmb3JtLnNjaGVtYS5pdGVtcy50eXBlfX1cIlxuICAgICAgICAgIGhpZGUtdGFncz1cInt7Zm9ybS5kZXRhaWxlZExpc3R9fVwiXG4gICAgICAgICAgdGFncy1zdHlsZT1cInt7Zm9ybS5zZWxlY3Rpb25TdHlsZX19XCJcbiAgICAgICAgICByZXF1aXJlZD1cInt7Zm9ybS5yZXF1aXJlZH19XCJcbiAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxlbmd0aH19XCJcbiAgICAgICAgICBhbGxvd2VkLXRhZ3MtcGF0dGVybj1cIi4qXCJcbiAgICAgICAgICBkcm9wZG93bi1pY29uPVwidHJ1ZVwiXG4gICAgICAgICAgaXRlbS1mb3JtYXR0ZXI9XCJmb3JtLml0ZW1Gb3JtYXR0ZXJcIlxuICAgICAgICAgIG1pbi10YWdzPVwie3tmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMH19XCJcbiAgICAgICAgICBhbGxvdy1idWxrPVwie3tmb3JtLmJ1bGtBZGR9fVwiXG4gICAgICAgICAgYnVsay1kZWxpbWl0ZXI9XCJ7e2Zvcm0uYnVsa0RlbGltaXRlcn19XCJcbiAgICAgICAgICBidWxrLXBsYWNlaG9sZGVyPVwie3tmb3JtLmJ1bGtQbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1idXR0b249XCJ0cnVlXCI+XG4gICAgICAgICAgPGF1dG8tY29tcGxldGVcbiAgICAgICAgICAgIHNvdXJjZT1cImZvcm0uZ2V0VGl0bGVNYXAgJiYgZm9ybS5nZXRUaXRsZU1hcCgpIHx8IGZvcm0udGl0bGVRdWVyeSgkcXVlcnkpXCJcbiAgICAgICAgICAgIHNraXAtZmlsdGVyaW5nPVwie3tmb3JtLnRpdGxlUXVlcnkgPyB0cnVlIDogZmFsc2V9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cCB8fCAoZm9ybS50aXRsZVF1ZXJ5ICYmIDMgfHwgMCl9fVwiPlxuICAgICAgICAgIDwvYXV0by1jb21wbGV0ZT5cbiAgICAgICAgPC90YWdzLWlucHV0PmA7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUtZGV0YWlsZWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8b2wgc2YtYXJyYXk9XCJmb3JtXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDB9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBkaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheSdcbn07XG5cbmNvbnN0IGZpZWxkUHJvcEhhbmRsZXJzID0gW3tcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IGZpZWxkLndhdGNoICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gXG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSlcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICRyb290U2NvcGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtc1xuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnMsXG4gICAgc2tpcERlZmF1bHRzXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U2VydmljZShmbikge1xuICAgIHJldHVybiBfLmZpbmQoc2VydmljZXMsIGZuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgaWYoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgWyBzY2hlbWEsIG1vZGVsLCBjb25maWcgXSA9IGFyZ3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHsgc2NoZW1hLCBtb2RlbCwgY29uZmlnIH0gPSBhcmdzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGN1clNlcnZpY2UgPSBnZXRTZXJ2aWNlKChzZXJ2aWNlKSA9PiBzZXJ2aWNlLm1vZGVsID09PSBtb2RlbCk7XG4gICAgaWYoY3VyU2VydmljZSkge1xuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGN1clNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1clNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgc2VydmljZXMucHVzaChuZXdTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV3U2VydmljZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5zY29wZUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuICAgIHRoaXMuc2tpcERlZmF1bHQgPSB7fTtcblxuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlLCB7IGdldFNlcnZpY2UgfSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgXG4gICAgaWYgKHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XSkge1xuICAgICAgZGVsZXRlIHNlcnZpY2Uuc2tpcERlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgZGVmYXVsdCBpcyByZXR1cm5lZCBmb3IgbmV3IGZvcm0sIHRyZWF0IGl0IGFzIGEgcHJldmlvdXMgcGFyYW0gaW4gb3JkZXIgdG8gbm90IHRyaWdnZXIgdW5uZWNlc3NhcnkgdXBkYXRlU2NoZW1hXG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgYW5ndWxhci5pc0RlZmluZWQoY3VyRGVmYXVsdCkgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1ckRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLy8gaWYgc2NoZW1hVXBkYXRlIGhhc24ndCBiZWVuIHRyaWdnZXJlZCwgbGV0IHNjaGVtYUZvcm0gZGlyZWN0aXZlIGhhbmRsZSBkZWZhdWx0c1xuICAgIC8vaWYoc2VydmljZS51cGRhdGVzIHx8IGZpZWxkLmRlZmF1bHQpIHtcbiAgICBpZighXy5pc1VuZGVmaW5lZChjdXJEZWZhdWx0KSkge1xuICAgICAgaWYoa2V5LmluY2x1ZGVzICYmIGtleS5pbmNsdWRlcygnW10nKSkgcmV0dXJuO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IG1vZGVsLmdldCgpO1xuICAgICAgLy8gaWYgdGhlcmUncyBhbiBleGlzdGluZyBkZWZhdWx0IGFuZCBpdCdzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIG5ldyBkZWZhdWx0XG4gICAgICBpZigoXG4gICAgICAgIF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpIHx8XG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpXG4gICAgICApICYmICFhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBjdXJEZWZhdWx0KSkge1xuICAgICAgICBtb2RlbC5zZXQoY3VyRGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZChmaWVsZCwgcG9zKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWVsZC5wb3MgPSBwb3M7XG4gICAgfVxuXG4gICAgaWYoIWZpZWxkLl9vZ0tleXMpIHtcbiAgICAgIGZpZWxkLl9vZ0tleXMgPSBfLndpdGhvdXQoXy5rZXlzKGZpZWxkKSwgJ2tleScsICdodG1sQ2xhc3MnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoZmllbGQucmVhZG9ubHkgJiYgIXNjaGVtYS5yZWFkb25seSkgZmllbGQucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMgPSBfLnJlamVjdChzZXJ2aWNlLmVycm9ycywge2tleToga2V5fSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoZmllbGQuZXJyb3IpIHtcbiAgICAgICAgc2VydmljZS5lcnJvcnMucHVzaChzZXJ2aWNlLmJ1aWxkRXJyb3IoZmllbGQpKTtcbiAgICAgICAgaWYoXy5pc0VtcHR5KGZpZWxkLm5nTW9kZWxPcHRpb25zKSkge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zID0ge1xuICAgICAgICAgICAgYWxsb3dJbnZhbGlkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucy5hbGxvd0ludmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQsIHNlY29uZFBhc3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleShrZXkpIHtcbiAgICBpZihfLmlzQXJyYXkoa2V5KSkge1xuICAgICAga2V5ID0gXy5yZWR1Y2Uoa2V5LCAodG90YWwsIG5leHQpID0+IFxuICAgICAgICAgIC9eKC0/XFxkKikkLy50ZXN0KG5leHQpID8gdG90YWwgKyAnWycgKyBuZXh0ICsgJ10nIDogdG90YWwgKyAnLicgKyBuZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjaGVtYShrZXksIGRlcHRoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFrZXkpIHJldHVybjtcblxuICAgIGtleSA9IE9iamVjdFBhdGgucGFyc2Uoc2VydmljZS5nZXRLZXkoa2V5KSk7XG4gICAgZGVwdGggPSBkZXB0aCB8fCBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllcztcblxuICAgIGxldCBmaXJzdCwgbmV4dDtcblxuICAgIHdoaWxlKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICBmaXJzdCA9IGtleVswXTtcbiAgICAgIG5leHQgPSBrZXlbMV07XG4gICAgICBpZigvXi0/XFxkKiQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgaWYoa2V5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0uaXRlbXMucHJvcGVydGllcztcbiAgICAgICAgICBrZXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLnByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYXJyYXkgaXRlbVxuICAgIGZpcnN0ID0ga2V5WzBdIHx8ICdpdGVtcyc7XG5cbiAgICByZXR1cm4gZGVwdGhbZmlyc3RdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkID0gZmllbGQua2V5ID8gZmllbGQgOiBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZmllbGQpO1xuICAgIHJldHVybiBmaWVsZCAmJiAoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkgPyBmaWVsZC5kZWZhdWx0IDogZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5kZWZhdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdhdGNoYWJsZXMoZXhwKSB7XG4gICAgY29uc3Qgd2F0Y2hhYmxlcyA9IFtdO1xuICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICBsZXQgcmVwbGFjZVN0ciA9ICcnO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBpZigvXi0/XFxkKyQvLnRlc3QobmVzdGVkWzFdKSB8fCAvXihcInwnKS4qKFwifCcpJC8udGVzdChuZXN0ZWRbMV0pKSB7XG4gICAgICAgIHJlcGxhY2VTdHIgPSBuZXN0ZWRbMF07XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJ2ZmX3JlcGxhY2VfZmYnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3YXRjaGFibGVzLnB1c2gobmVzdGVkWzFdLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cikpO1xuICAgICAgICByZXBsYWNlU3RyID0gJyc7XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJycpO1xuICAgICAgfVxuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi53YXRjaGFibGVzLCBleHAucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goZmllbGQucmVzb2x2ZSwgZnVuY3Rpb24oZGF0YVByb3AsIGZpZWxkUHJvcCkge1xuICAgICAgZGF0YVByb3AgPSByZXBsYWNlQXJyYXlJbmRleChkYXRhUHJvcCwga2V5IHx8IGZpZWxkLmFycmF5SW5kZXgpO1xuICAgICAgaWYoZGF0YVByb3AuaW5jbHVkZXMoJ1thcnJheUluZGV4XScpKSByZXR1cm47XG5cbiAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG5cbiAgICAgIGdldFdhdGNoYWJsZXMoZGF0YVByb3ApLmZvckVhY2goKHdhdGNoYWJsZSkgPT4ge1xuICAgICAgICBjb25zdCBbLCBiYXNlLCBleHBdID0gd2F0Y2hhYmxlLm1hdGNoKC8oc2NoZW1hXFwuZGF0YVxcLnxtb2RlbFxcLikoXFxTKykvKSB8fCBbXTtcblxuICAgICAgICBpZihiYXNlKSB7XG4gICAgICAgICAgaWYoYmFzZSA9PT0gJ3NjaGVtYS5kYXRhLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCwgZGF0YVByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKGJhc2UgPT09ICdtb2RlbC4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihleHAsICgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBkYXRhO1xuICAgIC8vIGRvZXMgZGVjbGFyYXRpdmUvZnVuY3Rpb25hbCBvdXR3ZWlnaCBwZXJmb3JtYW5jZT9cbiAgICBpZihleHAuaW5jbHVkZXMoJyB8fCAnKSkge1xuICAgICAgbGV0IGVpdGhlcnMgPSBleHAuc3BsaXQoJyB8fCAnKTtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlaXRoZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZWl0aGVyc1tpXSkuZ2V0KCk7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHgpKSB7XG4gICAgICAgICAgZGF0YSA9IHg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihleHAuaW5jbHVkZXMoJyAmJiAnKSkge1xuICAgICAgbGV0IGFsbCA9IGV4cC5zcGxpdCgnICYmICcpO1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGFsbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFsbFtpXSkuZ2V0KCk7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHgpKSBkYXRhID0geDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRhdGEgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihleHApLmdldCgpO1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIHJlc29sdmluZyBmcm9tIG1vZGVsIGJ1dCBkZWZhdWx0cyBoYXZlbid0IGJlZW4gYXBwbGllZCB5ZXQsIHJlc29sdmUgZnJvbSBkZWZhdWx0IGl0c2VsZlxuICAgIGlmKCFkYXRhICYmIGV4cC5pbmRleE9mKCdtb2RlbC4nKSA9PT0gMCkge1xuICAgICAgY29uc3Qga2V5ID0gZXhwLnJlcGxhY2UoJ21vZGVsLicsICcnKTtcbiAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgIGNvbnN0IGNhY2hlZEZpZWxkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSkgfHwgc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGdlbmVyaWNLZXkpO1xuXG4gICAgICBkYXRhID0gKCgpID0+IHtcbiAgICAgICAgaWYoY2FjaGVkRmllbGQgJiYgY2FjaGVkRmllbGQuZGVmYXVsdClcbiAgICAgICAgICByZXR1cm4gY2FjaGVkRmllbGQuZGVmYXVsdDtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoZmllbGQuZGVmYXVsdCkpXG4gICAgICAgICAgcmV0dXJuIGZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGdlbmVyaWNLZXkpO1xuICAgICAgICBpZihzY2hlbWEpIHJldHVybiBzY2hlbWEuZGVmYXVsdDtcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cbiBcbiAgICBjb25zdCBuZXdWYWwgPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcbiAgICBpZighYW5ndWxhci5lcXVhbHMobmV3VmFsLCBmaWVsZFtmaWVsZFByb3BdKSkge1xuICAgICAgZmllbGRbZmllbGRQcm9wXSA9IChkYXRhICYmIGRhdGEuZGF0YSkgPyBkYXRhLmRhdGEgOiBkYXRhO1xuXG4gICAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT4gXG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSBkYXlzLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IGFkanVzdG1lbnQuZGF0ZVsxXTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKS5hZGQoYWRqdXN0bWVudC5kYXRlLCAnZGF5cycpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgbGV0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gXy5pc1VuZGVmaW5lZChjdXIpID8gYW5ndWxhci5jb3B5KGRlZmF1bHRWYWx1ZSkgOiBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICAgZnVuY3Rpb24oKSB7IHJldHVybiBzZXJ2aWNlLm1vZGVsOyB9LFxuICAgICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiBcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTY2hlbWFQYXJhbXMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIsIGtleSkge1xuICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgY29uc3QgdW5pbmRleGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICAgICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0Zvcih1bmluZGV4ZWRLZXkpO1xuXG4gICAgICBjb3BpZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5zcGxpY2UoaW5kZXgsIDEpKTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIHZhciBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIFxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IGFzc2lnbmFibGUgPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGRlbGV0ZSBhc3NpZ25hYmxlLm9ialthc3NpZ25hYmxlLmtleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXNzaWduYWJsZS5vYmpbYXNzaWduYWJsZS5rZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPIC0tIGV4dGVuZCB0aGlzIHRvIHN1cHBvcnQgbmVzdGVkIGFycmF5IGtleXNcbiAgLy8gZS5nLiBcImNyZWF0aXZlWzFdLmNoaWxkQXR0YWNobWVudHNbMF0uY2FsbFRvQWN0aW9uXCJcbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBfLmVhY2goc2VydmljZS5mb3JtQ2FjaGUsIChmb3JtLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChrcykpIHtcbiAgICAgICAgY29uc3QgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGluZGV4KTsgXG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLCBcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjsgXG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgXy5lYWNoKGZpZWxkLmRhdGEsIGZ1bmN0aW9uKGRhdGFQcm9wLCBrZXkpIHtcbiAgICAgIGZpZWxkLmRhdGFba2V5XSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGRhdGFQcm9wKS5nZXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDc3ZVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jc3Z1cGxvYWQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvcyhmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmFkaW9zJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb2J1dHRvbnMocmFkaW9zKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJhZGlvcy50eXBlID0gJ2NuLXJhZGlvYnV0dG9ucyc7XG4gICAgaWYocmFkaW9zLmZ1bGxXaWR0aCkge1xuICAgICAgcmFkaW9zLmJ0bkNsYXNzID0gJ2NvbC1zbS0nICsgXy5kaXZpZGUoMTIsIHJhZGlvcy50aXRsZU1hcC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEYXRlKGRhdGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGF0ZS50eXBlID0gJ2NuLWRhdGV0aW1lcGlja2VyJztcblxuICAgIGlmKGRhdGUuc2NoZW1hLmZvcm1hdCA9PT0gJ3RpbWUtbWludXRlcycpIHtcbiAgICAgIGRhdGUubWF4VmlldyA9ICdob3VyJztcbiAgICAgIGRhdGUuaWNvbkNsYXNzID0gJ2ZhIGZhLWNsb2NrLW8nO1xuXG4gICAgICBkYXRlLm1vZGVsRm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtID0gbW9tZW50KHZhbCk7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkobS5ob3VycygpLCA2MCksIG0ubWludXRlcygpKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUubW9kZWxQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGQgPSBwYXJzZUludCh2YWwpO1xuICAgICAgICBsZXQgaG91cnMgPSBfLmZsb29yKGQgLyA2MCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZCAlIDYwO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoKS5zdGFydE9mKCdkYXknKS5hZGQoJ2hvdXJzJywgaG91cnMpLmFkZCgnbWludXRlcycsIG1pbnV0ZXMpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3Rm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBkYXRlLm1vZGVsUGFyc2VyKHZhbCkuZm9ybWF0KGRhdGUuZGF0ZUZvcm1hdCk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1hdGNoID0gdmFsLm1hdGNoKC9eKFxcZHsxLDJ9KTo/KFxcZHsxLDJ9KT8gKGF8cCkvKTtcbiAgICAgICAgaWYoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhvdXJzID0gXy5hZGQobWF0Y2hbMV0gPT09ICcxMicgPyAwIDogbWF0Y2hbMV0sIG1hdGNoWzNdID09PSAnYScgPyAwIDogMTIpO1xuICAgICAgICBsZXQgbWludXRlcyA9IG1hdGNoWzJdIHx8ICcwMCc7XG5cbiAgICAgICAgaWYobWludXRlcy5sZW5ndGggPT09IDEpIG1pbnV0ZXMgKz0gJzAnO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KGhvdXJzLCA2MCksIG1pbnV0ZXMpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCkge1xuICAgIGxldCBpc0FycmF5ID0gc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JztcbiAgICByZXR1cm4gc2VsZWN0LnZhbHVlUHJvcGVydHkgfHxcbiAgICAgIChpc0FycmF5ID8gc2VsZWN0LnNjaGVtYS5pdGVtcy50eXBlIDogc2VsZWN0LnNjaGVtYS50eXBlKSAhPT0gJ29iamVjdCcgJiYgJ3ZhbHVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgdGl0bGVNYXApIHtcbiAgICB0aXRsZU1hcCA9IHRpdGxlTWFwIHx8IHNlbGVjdC5nZXRUaXRsZU1hcCgpO1xuICAgIGxldCB2YWxQcm9wID0gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpO1xuICAgIGlmKCF2YWxQcm9wKSByZXR1cm47XG5cbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgbWFwVmFsID0gdmFsLm1hcCh4ID0+IF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogeH0pKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICByZXR1cm4gbWFwVmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHZhbH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZvcm0ua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgaWYobmV3VmFsICE9PSB1bmRlZmluZWQpIHNldHRlcihuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFF1ZXJ5KSB7XG4gICAgICB2YXIga2V5ID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnE7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IGZ1bmN0aW9uKHEpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZihrZXkpIHtcbiAgICAgICAgICBwYXJhbXNba2V5XSA9IHE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgLy8gd3JhcCBpbiBzdHJpbmcgc28gcmV0dXJucyB0cnV0aHkgd2hlbiBjb21waWxlZCwgYnV0IGNvbnZlcnRlZCB0byBudW1iZXIgd2l0aGluIGRpcmVjdGl2ZVxuICAgICAgaWYoIWtleSkgc2VsZWN0Lm1pbkxvb2t1cCA9ICcwJztcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3QuaXRlbXMgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBpdGVtczogc2VsZWN0Lml0ZW1zXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZHNldChzZWxlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTsgXG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLFxuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmKHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH1cblxuICAgIHNlbGVjdERpc3BsYXkuc2VsZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdEZpZWxkLmtleSwgaGFuZGxlciwgc2VsZWN0RmllbGQudXBkYXRlU2NoZW1hLCB0cnVlKTtcbiAgICAvL3NlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UoZnVuY3Rpb24odXBkYXRlU2NoZW1hKSB7XG4gICAgICB2YXIgcGFyYW1zID0gXy5leHRlbmQoY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpLCBzZXJ2aWNlLnBhcmFtcyk7XG4gICAgICB2YXIgZGlmZiA9IGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKTtcbiAgICAgIHZhciBrZXlzO1xuXG4gICAgICBpZihkaWZmIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgJ3VwZGF0ZVNjaGVtYScpKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLnNjaGVtYSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOnNjaGVtYScsIHNjaGVtYS5kaWZmLnNjaGVtYSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5zY2hlbWEsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXNba2V5XSA9IHNjaGVtYTtcbiAgICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZm9ybSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmZvcm0nLCBzY2hlbWEuZGlmZi5mb3JtKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmZvcm0sIGZ1bmN0aW9uKGZvcm0pIHtcblxuICAgICAgICAgIGlmKGtleXMuaW5kZXhPZihmb3JtLmtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goZm9ybS5rZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUga2V5IHdoZW4gZXh0ZW5kaW5nIGNhY2hlZCBvYmplY3RzXG4gICAgICAgICAgLy92YXIga2V5ID0gZm9ybS5rZXk7XG4gICAgICAgICAgLy9kZWxldGUgZm9ybS5rZXk7XG5cbiAgICAgICAgICB2YXIgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZvcm0ua2V5KTtcbiAgICAgICAgICBpZihjYWNoZWQpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY2FjaGVkLCBmb3JtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoZm9ybS5rZXkpO1xuICAgICAgICAgIGlmKGNvcGllcykge1xuICAgICAgICAgICAgY29waWVzLmZvckVhY2goY29weSA9PiBjb3B5ICYmIHNlcnZpY2UucmVwcm9jZXNzRmllbGQoY29weSwgZm9ybSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpO1xuICAgICAgICAgIGlmKGZvcm0pIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZvcm0pO1xuICAgICAgICAgIGlmKGtleS5pbmNsdWRlcygnW10nKSkge1xuICAgICAgICAgICAgdmFyIGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KTtcbiAgICAgICAgICAgIF8uZWFjaChjb3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgICAgaWYoY29weSkgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzRmllbGQoY3VycmVudCwgdXBkYXRlLCBpc0NoaWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gb3RoZXIgbG9naWMgaW4gdGhlIHNlcnZpY2Ugd2lsbCBhZGQgY29uaXRpb24gPSAndHJ1ZScgdG8gZm9yY2VcbiAgICAvLyBjb25kaXRpb24gdG8gZXZhbCB0cnVlLCBzbyB3ZSBzZXQgdGhlIHVwZGF0ZSBjb25kaXRpb24gdG8gJ3RydWUnXG4gICAgLy8gYmVmb3JlIGNvbXBhcmluZ1xuICAgIGlmKCF1cGRhdGUuY29uZGl0aW9uICYmIGN1cnJlbnQuY29uZGl0aW9uKSB1cGRhdGUuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgIGxldCByZWRyYXcgPSAhaXNDaGlsZCAmJiBjdXJyZW50LmNvbmRpdGlvbiAhPT0gdXBkYXRlLmNvbmRpdGlvbjtcblxuICAgIF8uZXh0ZW5kKGN1cnJlbnQsIF8ub21pdCh1cGRhdGUsICdpdGVtcycsICdrZXknKSk7XG5cbiAgICBjdXJyZW50Ll9vZ0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYoIXVwZGF0ZVtrZXldKSBkZWxldGUgY3VycmVudFtrZXldO1xuICAgIH0pO1xuICAgIGN1cnJlbnQuX29nS2V5cyA9IF8ua2V5cyh1cGRhdGUpO1xuXG4gICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnModXBkYXRlLmtleSk7XG5cbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1SZXByb2Nlc3NGaWVsZCcsIHVwZGF0ZS5rZXkpO1xuXG4gICAgLy8gd2h5IGRvIHdlIHJlZHJhdz8gSWYgd2UncmUgZG9pbmcgaXQgdG8gc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgLy8gdGhhdCBoYXMgYmVlbiBhZGRyZXNzZWQgZnJvbSB0aGUgYW5ndWxhci1zY2hlbWEtZm9ybSBsaWJyYXJ5XG4gICAgLy8gaWYgdGhlcmUncyBhbm90aGVyIGlzc3VlLCB0cnkgdHJpZ2dlcmluZyB0aGUgc3BlY2lmaWMgYWN0aW9uIHJlcXVpcmVkXG4gICAgLy8gaW5zdGVhZCBvZiByZWRyYXdpbmcgdGhlIHdob2xlIGZvcm1cbiAgICBpZihyZWRyYXcgJiYgY3VycmVudC5yZWRyYXcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUT0RPOiBzZWUgaWYgdGhpcyBjYW4gYmUgcmVtb3ZlZCcpOyBcbiAgICAgIGN1cnJlbnQucmVkcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgd2hpbGUocmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSB7XG4gICAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICAgIGNvbnN0IGFycmF5SW5kZXhLZXkgPSAvKFteLltdKilcXFthcnJheUluZGV4XFxdLy5leGVjKHJlc29sdmUpO1xuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgICAgaWYoIWluZGV4KSByZXR1cm4gcmVzb2x2ZTtcbiAgICAgIHJlc29sdmUgPSByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gL1xcWyhcXGQrKVxcXS8uZXhlYyhrZXkpWzFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5Q29weTtcbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHZhciBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4O1xuXG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0cGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1vZGFsTWFwID0ge307XG5jb25zdCBwcm9taXNlTWFwID0ge307XG5cbmZ1bmN0aW9uIGdldFByb21pc2VzKHN0YXRlKSB7XG4gIGlmKHByb21pc2VNYXBbc3RhdGVdKSByZXR1cm4gcHJvbWlzZU1hcFtzdGF0ZV07XG5cbiAgY29uc3QgcHJvbWlzZSA9IHt9O1xuICBwcm9taXNlTWFwW3N0YXRlXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBnZXRQcm9taXNlcyhzdGF0ZSk7XG4gIGlmKHByb21pc2VzW2lkXSkgcmV0dXJuIHByb21pc2VzW2lkXTtcblxuICBjb25zdCBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgcHJvbWlzZXNbaWRdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcigpIHtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hcHBpbmcsXG4gICAgJGdldDogY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZE1hcHBpbmcoc3RhdGUsIGRlZikge1xuICAgIGRlZi5yZXNvbHZlID0geyBwYXJlbnQgfTtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBkZWY7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnQoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gRmxleEZvcm1Nb2RhbExvYWRlcihGbGV4Rm9ybU1vZGFsLCAkc3RhdGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICBhY3RpdmF0ZSgpO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBGbGV4Rm9ybU1vZGFsXG4gICAgICAub3Blbih2bSlcbiAgICAgIC50aGVuKCh7IG1vZGFsLCBvcHRpb25zOiB7IG9uRGlzbWlzcywgb25BZnRlckRpc21pc3MgfSB9KSA9PiB7XG4gICAgICAgIHZtLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHZtLm1vZGFsLnJlc3VsdC5maW5hbGx5KGdvQmFjayk7XG5cbiAgICAgICAgaWYob25EaXNtaXNzKSB2bS5tb2RhbC5yZXN1bHQuY2F0Y2goKCkgPT4gb25EaXNtaXNzKCRzdGF0ZVBhcmFtcy5yZXN0UGFyYW1zKSk7XG4gICAgICAgIHZtLmRpc21pc3NFdmVudCA9ICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGRpc21pc3NNb2RhbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZighJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICRzdGF0ZS5nbygnXicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc21pc3NNb2RhbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGlzbWlzc01vZGFsJyk7XG4gICAgLy8gdW5iaW5kIGV2ZW50XG4gICAgdm0uZGlzbWlzc0V2ZW50KCk7XG4gICAgdm0ubW9kYWwuZGlzbWlzcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG4gIFxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnMgXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gICAgLy8uZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpO1xuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPG5nLWZvcm0gXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytc2NoZW1hPVwidm0uY29uZmlnLnNjaGVtYS5zY2hlbWFcIlxuICAgICAgICAgIHNmLWZvcm09XCJ2bS5mb3JtXCJcbiAgICAgICAgICBzZi1tb2RlbD1cInZtLm1vZGVsXCI+XG4gICAgICAgIDwvbmctZm9ybT5cbiAgICAgICAgPCEtLSBkZWJ1ZyBwYW5lbCB0byBkaXNwbGF5IG1vZGVsIC0tPlxuICAgICAgICA8c2VjdGlvbiBuZy1pZj1cInZtLmRlYnVnXCI+XG4gICAgICAgICAgPGpzb24tZXhwbG9yZXIganNvbi1kYXRhPVwidm0ubW9kZWwgfHwgJy4uLm1vZGVsIG5vdCBsb2FkZWQgeWV0J1wiLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmQ29uZmlnJyxcbiAgICAgIG1vZGVsOiAnPWZmTW9kZWwnLFxuICAgICAgZm9ybUluZGV4OiAnPWZmRm9ybUluZGV4JyxcbiAgICAgIGZvcm1OYW1lOiAnPWZmRm9ybU5hbWUnLFxuICAgICAgZGVsYXlGb3JtOiAnPWZmRGVsYXlGb3JtJyxcbiAgICAgIGNsZWFudXBFdmVudDogJz1mZkNsZWFudXBFdmVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtKGNuRmxleEZvcm1TZXJ2aWNlLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gdm0uY29uZmlnLnNjaGVtYTsgfSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGZvcm1DdHJsOiB2bS5jb25maWcuZm9ybUN0cmwsXG4gICAgICAgICAgZ2V0U2NoZW1hOiB2bS5jb25maWcuZ2V0U2NoZW1hLFxuICAgICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTonLCB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKSk7XG4gICAgICAgIHZtLnNlcnZpY2UuY29tcGlsZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCk7XG4gICAgICB9XG4gICAgICAvLyRzY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtUmVkcmF3Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICAgIHZtLnNlcnZpY2UuY2xlYW51cCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNuRmxleEZvcm1IZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmSGVhZGVyQ29uZmlnJyxcbiAgICAgIHN1Ym1pdDogJyZmZlN1Ym1pdCcsXG4gICAgICBsb2FkT2Zmc2NyZWVuOiAnJmZmTG9hZE9mZnNjcmVlbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtSGVhZGVyLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLmxlYWRcIj57ezo6dm0udGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0udGl0bGUuaWNvblwiIGNsYXNzPVwie3t2bS50aXRsZS5pY29ufX1cIi8+XG4gICAgICAgICAgICB7e3ZtLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUuc3ViXCI+e3s6OnZtLnRpdGxlLnN1Yn19PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ZtLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0ucmV0dXJuU3R5bGUgPyB2bS5yZXR1cm5TdHlsZSA6ICdkZWZhdWx0LWRhcmsnXCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0ucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0ucmV0dXJuU3RhdGV9fVwiPlxuICAgICAgICAgICAgICB7e3ZtLnJldHVyblRleHQgfHwgJ0NhbmNlbCd9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0uY2xvc2VCdXR0b24uc3R5bGUgPyB2bS5jbG9zZUJ1dHRvbi5zdHlsZSA6ICdkZWZhdWx0LWRhcmsnfX1cIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmNsb3NlQnV0dG9uLmhhbmRsZXIoKVwiPlxuICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XCJidXR0b24gaW4gdm0uYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IG9wdGlvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJvcHRpb24udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtdXBkYXRlZC1hdCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICBpZD1cImRhdGEtdXBkYXRlZC1hdFwiXG4gICAgICAgICAgICAgbmctaGlkZT1cInZtLmNvbmZpZy5ub0RhdGFcIj5cbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0udXBkYXRlRGF0YSgpXCI+VXBkYXRlIERhdGE8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5gXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgKHsgdGl0bGU6IHZtLnRpdGxlIH0gPSB2bS5jb25maWcpO1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZURhdGE6JywgdXBkYXRlRGF0YSk7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICAvL2NvbnNvbGUubG9nKCckc2NvcGUsIG5nTW9kZWw6JywgJHNjb3BlLmZvcm0sIG5nTW9kZWwpO1xuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=