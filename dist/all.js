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
	    silenceListeners: silenceListeners
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
	
	    fieldPropHandlers.forEach(function (_ref4) {
	      var prop = _ref4.prop,
	          handler = _ref4.handler;
	      return prop === fieldProp && handler(field, service);
	    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NGI5ODhhZThiYTc3MTU3ODIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NTZWxlY3REaXNwbGF5IiwicHJvY2Vzc1Jlc29sdmUiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwic2Vjb25kUGFzcyIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRGVmYXVsdCIsImRlZmF1bHQiLCJyZWdpc3RlckhhbmRsZXIiLCJ1cGRhdGVTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEtleSIsImdldFNjaGVtYSIsImdldFdhdGNoYWJsZXMiLCJoYW5kbGVSZXNvbHZlIiwiaW5pdEFycmF5Q29weVdhdGNoIiwiaW5pdE1vZGVsV2F0Y2giLCJpbml0U2NoZW1hUGFyYW1zIiwiaXNDb21waWxlZCIsIm9uTW9kZWxXYXRjaCIsInBhcnNlQ29uZGl0aW9uIiwicGFyc2VFeHByZXNzaW9uIiwicHJvY2Vzc0FycmF5IiwicHJvY2Vzc0Rpc3BsYXkiLCJwcm9jZXNzRmllbGQiLCJwcm9jZXNzRmllbGRzZXQiLCJwcm9jZXNzRmllbGRQcm9wcyIsInByb2Nlc3NDb21wb25lbnQiLCJwcm9jZXNzQ3VycmVuY3kiLCJwcm9jZXNzUGVyY2VudGFnZSIsInByb2Nlc3NEYXRlIiwicHJvY2Vzc0hlbHAiLCJwcm9jZXNzUmFkaW9zIiwicHJvY2Vzc1JhZGlvYnV0dG9ucyIsInByb2Nlc3NSZXVzYWJsZSIsInByb2Nlc3NTY2hlbWEiLCJwcm9jZXNzU2VjdGlvbiIsInByb2Nlc3NTZWxlY3QiLCJwcm9jZXNzVGFibGUiLCJwcm9jZXNzVGVtcGxhdGUiLCJwcm9jZXNzVG9nZ2xlIiwicHJvY2Vzc1VwZGF0ZWRTY2hlbWEiLCJwcm9jZXNzTWVkaWFVcGxvYWQiLCJwcm9jZXNzQ3N2VXBsb2FkIiwicmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwicmVnaXN0ZXJSZXNvbHZlIiwicmVwbGFjZUFycmF5SW5kZXgiLCJyZXByb2Nlc3NGaWVsZCIsInJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwic2lsZW5jZUxpc3RlbmVycyIsImdldFNlcnZpY2UiLCJmbiIsImZpbmQiLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJhcmdzIiwibW9kZWwiLCJjdXJTZXJ2aWNlIiwibmV3U2VydmljZSIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwicGFyYW1zIiwiZXh0ZW5kIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsImdldFNjaGVtYUZvcm0iLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsImlzRGVmaW5lZCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJpc1RydWx5RW1wdHkiLCJoYXMiLCJlcXVhbHMiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsIl9vZ0tleXMiLCJ3aXRob3V0Iiwia2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCJyZWplY3QiLCIkYnJvYWRjYXN0IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwiYXJyYXlJbmRleCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsImVpdGhlcnMiLCJzcGxpdCIsIngiLCJhbGwiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwiZ2VuZXJpY0tleSIsInN0cmlwSW5kZXhlcyIsImNhY2hlZEZpZWxkIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwiZmllbGRLZXkiLCJyZWdpc3RlciIsImNvbmRpdGlvbmFscyIsInZhbCIsInByZXYiLCJzY29wZSIsIm1hcCIsInBhdGgiLCJyZXNvbHV0aW9uIiwiY3VyIiwiYWRqdXN0bWVudCIsImRhdGUiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInJlc3VsdCIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJhY2MiLCJydW5IYW5kbGVyIiwiaXNPYmplY3QiLCJhcnJNYXRjaCIsImRlZmF1bHRWYWx1ZSIsImhhbmRsZXJzIiwiYXJyS2V5Iiwib25BcnJheSIsInJlb3JkZXIiLCJsYXN0S2V5IiwiYXJyVmFsIiwibGlzdGVuZXJLZXkiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsIiRvbiIsImV2ZW50IiwiY2FjaGVLZXkiLCJ1bmlxdWVJZCIsImlzTnVtYmVyIiwiaW5kZXgiLCIkZW1pdCIsInVuaW5kZXhlZEtleSIsImNvcGllcyIsInNwbGljZSIsImxpbmsiLCJwbHVjayIsImtleVN0YXJ0IiwiZmlsdGVyIiwid2FybiIsIm1hdGNoSW50U3RySW5kZXgiLCJ0b1JlcGxhY2UiLCJyZXBsYWNlZCIsInBhcnNlZCIsImtleVZhbCIsImlzU3RyIiwicGFyc2VGbG9hdCIsInJlc29sdmVkIiwic3RhcnQiLCJnZXRBc3NpZ25hYmxlIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsImFzc2lnbmFibGUiLCJzaWxlbnQiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwibWFwVmFsIiwib25Jbml0Iiwic2V0dGVyIiwibmV3VmFsIiwicSIsInRpdGxlUXVlcnkiLCJtaW5Mb29rdXAiLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsImdldEFycmF5SW5kZXgiLCJzZWxlY3RLZXkiLCJzcGxpdEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RWYWx1ZSIsImZvcm1Db3BpZXMiLCJlbGVtIiwiaW5kZXhlZEtleSIsInNwbGl0SW5kZXhlZEtleSIsInNlbGVjdE1vZGVsIiwiaXRlbVZhbHVlIiwiY291bnQiLCJrZXlNYXAiLCJvbmNlIiwicmVzZXRDb3VudCIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJ0aGVuIiwicmVmcmVzaERhdGEiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImNhY2hlZCIsImN1cnJlbnQiLCJpc0NoaWxkIiwicmVkcmF3Iiwic3ViS2V5IiwibWVzc2FnZSIsImFycmF5SW5kZXhLZXkiLCJleGVjIiwicmUiLCJSZWdFeHAiLCJhc0FycmF5Iiwia2V5Q29weSIsImNsb25lIiwiaW5kZXhPZkluZGV4IiwibW9kYWxNYXAiLCJwcm9taXNlTWFwIiwiZ2V0UHJvbWlzZXMiLCJwcm9taXNlIiwiZ2V0UHJvbWlzZSIsIiRxIiwicHJvbWlzZXMiLCJkZWZlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UiLCJkZWYiLCJwYXJlbnQiLCJtb2RhbCIsIm1vZGFsSWQiLCJnZXRNYXBwaW5nIiwicmVzb2x2ZU1hcHBpbmciLCJkZXN0cm95U3RyYXRlZ3kiLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwib25BZnRlckRpc21pc3MiLCJmaW5hbGx5IiwiZ29CYWNrIiwiY2F0Y2giLCJyZXN0UGFyYW1zIiwiZGlzbWlzc0V2ZW50IiwiZGlzbWlzc01vZGFsIiwidHJhbnNpdGlvbiIsImdvIiwiZGlzbWlzcyIsIiR1aWJNb2RhbCIsImNuRmxleEZvcm0iLCJyZXN0cmljdCIsInRlbXBsYXRlIiwiZm9ybUluZGV4IiwiZm9ybU5hbWUiLCJkZWxheUZvcm0iLCJjbGVhbnVwRXZlbnQiLCJGbGV4Rm9ybSIsImJpbmRUb0NvbnRyb2xsZXIiLCJjbkZsZXhGb3JtU2VydmljZSIsIiRzY29wZSIsIiRsb2NhdGlvbiIsInByb2Nlc3MiLCJzaG93Rm9ybSIsInNlYXJjaCIsImNuRmxleEZvcm1IZWFkZXIiLCJzdWJtaXQiLCJsb2FkT2Zmc2NyZWVuIiwiRmxleEZvcm1IZWFkZXIiLCJ1cGRhdGVEYXRhIiwiaXNEaXNhYmxlZCIsInRpdGxlIiwiYWN0aW9uQ29uZmlnIiwicmV0dXJuU3RhdGUiLCJyZXR1cm5TdHlsZSIsInJldHVyblRleHQiLCJjbG9zZUJ1dHRvbiIsImFjdGlvbnMiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwicmVxdWlyZWQiLCIkdmlld1ZhbHVlIiwiJHNldFZhbGlkaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NGI5ODhhZThiYTc3MTU3ODIyZiIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zb2xlLmxvZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgLy8nbmdKc29uRXhwbG9yZXInLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgICAuY2hhaW4oJHN0YXRlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgICAub21pdChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2KSB8fCBfLmlzTnVsbCh2KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Db25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcigpIHtcblxuICB2YXIgZmllbGRUeXBlUmVnaXN0ZXIgPSBbe1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hpZGRlbicsXG4gICAgdHlwZTogJ2hpZGRlbidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvcydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9idXR0b25zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvYnV0dG9ucydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnYXV0b2NvbXBsZXRlJykgfHwgZmllbGQudGl0bGVNYXAgfHwgZmllbGQudGl0bGVNYXBSZXNvbHZlIHx8IGZpZWxkLnRpdGxlTWFwUXVlcnksXG4gICAgdHlwZTogJ2NuLWF1dG9jb21wbGV0ZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NuLWRhdGV0aW1lcGlja2VyJyB8fCBmaWVsZC50eXBlID09PSAnZGF0ZXRpbWUtbG9jYWwnIHx8IGZpZWxkLnR5cGUgPT09ICd0aW1lLW1pbnV0ZXMnLFxuICAgIHR5cGU6ICdjbi1kYXRldGltZXBpY2tlcidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hlbHAnLFxuICAgIHR5cGU6ICdoZWxwJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdkaXNwbGF5JyksXG4gICAgdHlwZTogJ2NuLWRpc3BsYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQuaW5jbHVkZXMoJ2N1cnJlbmN5JyksXG4gICAgdHlwZTogJ2NuLWN1cnJlbmN5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCA9PT0gJ3BlcmNlbnRhZ2UnLFxuICAgIHR5cGU6ICdjbi1wZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbmZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIHJlYWQtb25seT1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgdW5kZWZpbmVkLWNsYXNzPVwiZm9ybS51bmRlZmluZWRDbGFzc1wiLz5cbiAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5vblRleHQgJiYgZm9ybS5vZmZUZXh0XCI+XG4gICAgICAgICAgICB7eyQkdmFsdWUkJCA9PT0gZm9ybS5vblZhbHVlID8gZm9ybS5vblRleHQgOiBmb3JtLm9mZlRleHR9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGF0ZXRpbWVwaWNrZXIuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZGF0ZXRpbWVwaWNrZXJcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgaXMtZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBtaW4tZGF0ZT1cImZvcm0ubWluRGF0ZVwiXG4gICAgICAgICAgbWF4LWRhdGU9XCJmb3JtLm1heERhdGVcIlxuICAgICAgICAgIG1heC12aWV3PVwie3tmb3JtLm1heFZpZXd9fVwiXG4gICAgICAgICAgY24tZGF0ZS1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLnR5cGV9fVwiXG4gICAgICAgICAgbW9kZWwtZm9ybWF0dGVyPVwiZm9ybS5tb2RlbEZvcm1hdHRlclwiXG4gICAgICAgICAgbW9kZWwtcGFyc2VyPVwiZm9ybS5tb2RlbFBhcnNlclwiXG4gICAgICAgICAgdmlldy1mb3JtYXR0ZXI9XCJmb3JtLnZpZXdGb3JtYXR0ZXJcIlxuICAgICAgICAgIHZpZXctcGFyc2VyPVwiZm9ybS52aWV3UGFyc2VyXCJcbiAgICAgICAgICBmb3JtYXQtc3RyaW5nPXt7Zm9ybS5kYXRlRm9ybWF0fX1cbiAgICAgICAgICBpY29uLWNsYXNzPXt7Zm9ybS5pY29uQ2xhc3N9fT5cbiAgICAgICAgPC9jbi1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgdmFyIHNoYXJlZEF1dG9jb21wbGV0ZVRwbCA9IGBcbiAgICAgICAgPHRhZ3MtaW5wdXRcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5PVwie3tmb3JtLmRpc3BsYXlQcm9wZXJ0eSB8fCAnbmFtZSd9fVwiXG4gICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJ7e2Zvcm0udmFsdWVQcm9wZXJ0eX19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlciB8fCAnICd9fVwiXG4gICAgICAgICAgY2xlYXItb24tYmx1cj1cInRydWVcIlxuICAgICAgICAgIGFkZC1vbi1jb21tYT1cImZhbHNlXCJcbiAgICAgICAgICBhZGQtZnJvbS1hdXRvY29tcGxldGUtb25seT1cInt7IWZvcm0uYWxsb3dOZXd9fVwiXG4gICAgICAgICAgb24tYmVmb3JlLXRhZy1hZGRlZD1cImZvcm0ub25BZGQoe3ZhbHVlOiAkdGFnfSwgZm9ybSwgJGV2ZW50LCAkcHJldilcIlxuICAgICAgICAgIG9uLWluaXQ9XCJmb3JtLm9uSW5pdCgkdGFnLCBmb3JtLCAkZXZlbnQsICRzZXR0ZXIpXCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLmdldFNjaGVtYVR5cGUoKX19XCJcbiAgICAgICAgICBhcnJheS12YWx1ZS10eXBlPVwie3tmb3JtLnNjaGVtYS5pdGVtcy50eXBlfX1cIlxuICAgICAgICAgIGhpZGUtdGFncz1cInt7Zm9ybS5kZXRhaWxlZExpc3R9fVwiXG4gICAgICAgICAgdGFncy1zdHlsZT1cInt7Zm9ybS5zZWxlY3Rpb25TdHlsZX19XCJcbiAgICAgICAgICByZXF1aXJlZD1cInt7Zm9ybS5yZXF1aXJlZH19XCJcbiAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxlbmd0aH19XCJcbiAgICAgICAgICBhbGxvd2VkLXRhZ3MtcGF0dGVybj1cIi4qXCJcbiAgICAgICAgICBkcm9wZG93bi1pY29uPVwidHJ1ZVwiXG4gICAgICAgICAgaXRlbS1mb3JtYXR0ZXI9XCJmb3JtLml0ZW1Gb3JtYXR0ZXJcIlxuICAgICAgICAgIG1pbi10YWdzPVwie3tmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMH19XCJcbiAgICAgICAgICBhbGxvdy1idWxrPVwie3tmb3JtLmJ1bGtBZGR9fVwiXG4gICAgICAgICAgYnVsay1kZWxpbWl0ZXI9XCJ7e2Zvcm0uYnVsa0RlbGltaXRlcn19XCJcbiAgICAgICAgICBidWxrLXBsYWNlaG9sZGVyPVwie3tmb3JtLmJ1bGtQbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1idXR0b249XCJ0cnVlXCI+XG4gICAgICAgICAgPGF1dG8tY29tcGxldGVcbiAgICAgICAgICAgIHNvdXJjZT1cImZvcm0uZ2V0VGl0bGVNYXAgJiYgZm9ybS5nZXRUaXRsZU1hcCgpIHx8IGZvcm0udGl0bGVRdWVyeSgkcXVlcnkpXCJcbiAgICAgICAgICAgIHNraXAtZmlsdGVyaW5nPVwie3tmb3JtLnRpdGxlUXVlcnkgPyB0cnVlIDogZmFsc2V9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cCB8fCAoZm9ybS50aXRsZVF1ZXJ5ICYmIDMgfHwgMCl9fVwiPlxuICAgICAgICAgIDwvYXV0by1jb21wbGV0ZT5cbiAgICAgICAgPC90YWdzLWlucHV0PmA7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUtZGV0YWlsZWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8b2wgc2YtYXJyYXk9XCJmb3JtXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IFxuICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICBjbGFzcz1cInNjaGVtYS1mb3JtLWZpZWxkc2V0IHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgIG5nLWNsYXNzPVwieydib3JkZXJsZXNzJzogZm9ybS5wb3MgPT09IDB9XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBkaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheSdcbn07XG5cbmNvbnN0IGZpZWxkUHJvcEhhbmRsZXJzID0gW3tcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IGZpZWxkLndhdGNoICYmIHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKSA9PiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQsIHNlY29uZFBhc3MpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gXG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSlcbn1dO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkLFxuICAgICRnZXQ6IENORmxleEZvcm1TZXJ2aWNlXG4gIH07XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGQoZmllbGRUeXBlKSB7XG4gICAgaWYoZmllbGRUeXBlLmNvbmRpdGlvbikge1xuICAgICAgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIucmVnaXN0ZXJGaWVsZFR5cGUoe1xuICAgICAgICBjb25kaXRpb246IGZpZWxkVHlwZS5jb25kaXRpb24sXG4gICAgICAgIHR5cGU6IGZpZWxkVHlwZS50eXBlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUuaGFuZGxlcikge1xuICAgICAgZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlLnR5cGVdID0gZmllbGRUeXBlLmhhbmRsZXI7XG4gICAgfVxuXG4gICAgaWYoZmllbGRUeXBlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmFkZE1hcHBpbmcoXG4gICAgICAgICAgJ2Jvb3RzdHJhcERlY29yYXRvcicsXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgICAgc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlci5jcmVhdGVEaXJlY3RpdmUoXG4gICAgICAgICAgZmllbGRUeXBlLnR5cGUsXG4gICAgICAgICAgZmllbGRUeXBlLnRlbXBsYXRlVXJsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDTkZsZXhGb3JtU2VydmljZShcbiAgQXBpLFxuICAkcGFyc2UsXG4gIGNuRmxleEZvcm1Db25maWcsXG4gIGNuRmxleEZvcm1UeXBlcyxcbiAgc2ZQYXRoLFxuICAkaW50ZXJwb2xhdGUsXG4gICRyb290U2NvcGUsXG4gICR0aW1lb3V0LFxuICBjblV0aWwsXG4gICRzdGF0ZVBhcmFtc1xuKSB7XG4gICduZ0luamVjdCc7XG5cbiAgY29uc3Qgc2VydmljZXMgPSBbXTtcbiAgY29uc3QgcHJvdG90eXBlID0ge1xuICAgIGNvbXBpbGUsXG4gICAgYWRkQXJyYXlDb3B5LFxuICAgIGFkZFRvRGF0YUNhY2hlLFxuICAgIGFkZFRvRm9ybUNhY2hlLFxuICAgIGFkZFRvU2NvcGVDYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcHksXG4gICAgZ2V0QXJyYXlDb3BpZXMsXG4gICAgZ2V0QXJyYXlDb3BpZXNGb3IsXG4gICAgZ2V0QXJyYXlTY29wZXMsXG4gICAgZ2V0RGVmYXVsdCxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0RnJvbVNjb3BlQ2FjaGUsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoLFxuICAgIHNpbGVuY2VMaXN0ZW5lcnNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG5cbiAgICB0aGlzLnBhcmFtcyA9IGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKTtcblxuICAgIHRoaXMuXyA9IF87XG5cbiAgICB0aGlzLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENORmxleEZvcm0ucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICBfLmV4dGVuZChDTkZsZXhGb3JtQ29uc3RydWN0b3IsIHByb3RvdHlwZSwgeyBnZXRTZXJ2aWNlIH0pO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIFxuICAgIC8vIGlmIGRlZmF1bHQgaXMgcmV0dXJuZWQgZm9yIG5ldyBmb3JtLCB0cmVhdCBpdCBhcyBhIHByZXZpb3VzIHBhcmFtIGluIG9yZGVyIHRvIG5vdCB0cmlnZ2VyIHVubmVjZXNzYXJ5IHVwZGF0ZVNjaGVtYVxuICAgIGlmKCFzZXJ2aWNlLnVwZGF0ZXMgJiYgZmllbGQudXBkYXRlU2NoZW1hICYmIGFuZ3VsYXIuaXNEZWZpbmVkKGN1ckRlZmF1bHQpICYmICFzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSkge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0gPSBjdXJEZWZhdWx0O1xuICAgIH1cblxuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICAvL2lmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgaWYoIV8uaXNVbmRlZmluZWQoY3VyRGVmYXVsdCkpIHtcbiAgICAgIGlmKGtleS5pbmNsdWRlcyAmJiBrZXkuaW5jbHVkZXMoJ1tdJykpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZmllbGQua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSBtb2RlbC5nZXQoKTtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgZGVmYXVsdCBhbmQgaXQncyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIHRvIHRoZSBuZXcgZGVmYXVsdFxuICAgICAgaWYoKFxuICAgICAgICBfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSB8fFxuICAgICAgICAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSAmJiBhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBzZXJ2aWNlLmRlZmF1bHRzW2tleV0pKVxuICAgICAgKSAmJiAhYW5ndWxhci5lcXVhbHMobW9kZWxWYWx1ZSwgY3VyRGVmYXVsdCkpIHtcbiAgICAgICAgbW9kZWwuc2V0KGN1ckRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXJ2aWNlLmRlZmF1bHRzW2tleV0gPSBhbmd1bGFyLmNvcHkoY3VyRGVmYXVsdCk7XG5cbiAgICBpZihzY2hlbWEuZm9ybWF0ID09PSAndXJsJyAmJiAhZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gJ3VybCc7XG4gICAgICBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSA9ICdNdXN0IGJlIGEgdmFsaWQgdXJsIChodHRwczovLy4uLiknO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZHNldChmaWVsZHNldCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGZpZWxkc2V0LnR5cGUgPSAnY24tZmllbGRzZXQnO1xuICAgIGZpZWxkc2V0Lml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG5cbiAgICBpZihfLmhhcyhmaWVsZHNldCwgJ3BvcycpICYmIGZpZWxkc2V0LnBvcyA9PT0gMCkge1xuICAgICAgZmllbGRzZXQuaHRtbENsYXNzID0gKGZpZWxkc2V0Lmh0bWxDbGFzcyB8fCAnJykgKyAnIGJvcmRlcmxlc3MnO1xuICAgIH1cbiAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgZmllbGRzZXQudG9nZ2xlQ29sbGFwc2UgPSAoZmllbGRzZXQpID0+IHtcbiAgICAgICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgICAgICBmaWVsZHNldC5jb2xsYXBzZWQgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSAhZmllbGRzZXQuY29sbGFwc2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGNuRmxleEZvcm1UeXBlcy5nZXRGaWVsZFR5cGUoZmllbGQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGVdO1xuICAgIGlmKF8uaXNTdHJpbmcoaGFuZGxlcikpIHtcbiAgICAgIHNlcnZpY2VbaGFuZGxlcl0oZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgICBlbHNlIGlmKF8uaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgaGFuZGxlci5jYWxsKHNlcnZpY2UsIGZpZWxkLCBzZWNvbmRQYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gXy53aXRob3V0KF8ua2V5cyhmaWVsZCksICdrZXknLCAnaHRtbENsYXNzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5hZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KTtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSk7XG5cbiAgICAgIGlmKHNjaGVtYSkge1xuICAgICAgICBmaWVsZC5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICAgIGlmKHNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBzY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKGZpZWxkLnJlYWRvbmx5ICYmICFzY2hlbWEucmVhZG9ubHkpIGZpZWxkLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIGlmKHNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZmllbGQpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBpZihfLmZpbmQoc2VydmljZS5lcnJvcnMsIHsga2V5IH0pKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzID0gXy5yZWplY3Qoc2VydmljZS5lcnJvcnMsIHtrZXk6IGtleX0pO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGZpZWxkLmVycm9yKSB7XG4gICAgICAgIHNlcnZpY2UuZXJyb3JzLnB1c2goc2VydmljZS5idWlsZEVycm9yKGZpZWxkKSk7XG4gICAgICAgIGlmKF8uaXNFbXB0eShmaWVsZC5uZ01vZGVsT3B0aW9ucykpIHtcbiAgICAgICAgICBmaWVsZC5uZ01vZGVsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFsbG93SW52YWxpZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMuYWxsb3dJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFByb3BzKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+XG4gICAgICAgIF8uaGFzKGZpZWxkLCBwcm9wKSAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlLCBzZWNvbmRQYXNzKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRLZXkoa2V5KSB7XG4gICAgaWYoXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGtleSA9IF8ucmVkdWNlKGtleSwgKHRvdGFsLCBuZXh0KSA9PiBcbiAgICAgICAgICAvXigtP1xcZCopJC8udGVzdChuZXh0KSA/IHRvdGFsICsgJ1snICsgbmV4dCArICddJyA6IHRvdGFsICsgJy4nICsgbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBPYmplY3RQYXRoLnBhcnNlKHNlcnZpY2UuZ2V0S2V5KGtleSkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgZmlyc3QgPSBrZXlbMF07XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL14tP1xcZCokLy50ZXN0KG5leHQpKSB7XG4gICAgICAgIGlmKGtleS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlcHRoID0gZGVwdGhba2V5LnNoaWZ0KCldLml0ZW1zLnByb3BlcnRpZXM7XG4gICAgICAgICAga2V5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5wcm9wZXJ0aWVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGFycmF5IGl0ZW1cbiAgICBmaXJzdCA9IGtleVswXSB8fCAnaXRlbXMnO1xuXG4gICAgcmV0dXJuIGRlcHRoW2ZpcnN0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZCA9IGZpZWxkLmtleSA/IGZpZWxkIDogc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGZpZWxkKTtcbiAgICByZXR1cm4gZmllbGQgJiYgKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpID8gZmllbGQuZGVmYXVsdCA6IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZGVmYXVsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL14tP1xcZCskLy50ZXN0KG5lc3RlZFsxXSkgfHwgL14oXCJ8JykuKihcInwnKSQvLnRlc3QobmVzdGVkWzFdKSkge1xuICAgICAgICByZXBsYWNlU3RyID0gbmVzdGVkWzBdO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICdmZl9yZXBsYWNlX2ZmJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hhYmxlcy5wdXNoKG5lc3RlZFsxXS5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpKTtcbiAgICAgICAgcmVwbGFjZVN0ciA9ICcnO1xuICAgICAgICBleHAgPSBleHAucmVwbGFjZShuZXN0ZWRbMF0sICcnKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIH1cblxuICAgIHJldHVybiBbLi4ud2F0Y2hhYmxlcywgZXhwLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cildO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc29sdmUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgXy5lYWNoKGZpZWxkLnJlc29sdmUsIGZ1bmN0aW9uKGRhdGFQcm9wLCBmaWVsZFByb3ApIHtcbiAgICAgIGRhdGFQcm9wID0gcmVwbGFjZUFycmF5SW5kZXgoZGF0YVByb3AsIGtleSB8fCBmaWVsZC5hcnJheUluZGV4KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgWywgYmFzZSwgZXhwXSA9IHdhdGNoYWJsZS5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcUyspLykgfHwgW107XG5cbiAgICAgICAgaWYoYmFzZSkge1xuICAgICAgICAgIGlmKGJhc2UgPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHAsIGRhdGFQcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihiYXNlID09PSAnbW9kZWwuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBleHApIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgZGF0YTtcbiAgICAvLyBkb2VzIGRlY2xhcmF0aXZlL2Z1bmN0aW9uYWwgb3V0d2VpZ2ggcGVyZm9ybWFuY2U/XG4gICAgaWYoZXhwLmluY2x1ZGVzKCcgfHwgJykpIHtcbiAgICAgIGxldCBlaXRoZXJzID0gZXhwLnNwbGl0KCcgfHwgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gZWl0aGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGVpdGhlcnNbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkge1xuICAgICAgICAgIGRhdGEgPSB4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoZXhwLmluY2x1ZGVzKCcgJiYgJykpIHtcbiAgICAgIGxldCBhbGwgPSBleHAuc3BsaXQoJyAmJiAnKTtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhbGwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhbGxbaV0pLmdldCgpO1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZCh4KSkgZGF0YSA9IHg7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkYXRhID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSByZXNvbHZpbmcgZnJvbSBtb2RlbCBidXQgZGVmYXVsdHMgaGF2ZW4ndCBiZWVuIGFwcGxpZWQgeWV0LCByZXNvbHZlIGZyb20gZGVmYXVsdCBpdHNlbGZcbiAgICBpZighZGF0YSAmJiBleHAuaW5kZXhPZignbW9kZWwuJykgPT09IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGV4cC5yZXBsYWNlKCdtb2RlbC4nLCAnJyk7XG4gICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICBjb25zdCBjYWNoZWRGaWVsZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHx8IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShnZW5lcmljS2V5KTtcblxuICAgICAgZGF0YSA9ICgoKSA9PiB7XG4gICAgICAgIGlmKGNhY2hlZEZpZWxkICYmIGNhY2hlZEZpZWxkLmRlZmF1bHQpXG4gICAgICAgICAgcmV0dXJuIGNhY2hlZEZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGZpZWxkLmRlZmF1bHQpKVxuICAgICAgICAgIHJldHVybiBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShnZW5lcmljS2V5KTtcbiAgICAgICAgaWYoc2NoZW1hKSByZXR1cm4gc2NoZW1hLmRlZmF1bHQ7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhUHJvcCA9IGV4cC5tYXRjaCgvc2NoZW1hXFwuZGF0YVxcLiguKykvKVsxXTtcbiAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKGBkYXRhOiR7ZGF0YVByb3B9OiR7ZGF0YS5jdXJzb3J9YCk7XG4gICAgICB9O1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuICAgIGZpZWxkW2ZpZWxkUHJvcF0gPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcblxuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PiBcbiAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSBkYXlzLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IGFkanVzdG1lbnQuZGF0ZVsxXTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKS5hZGQoYWRqdXN0bWVudC5kYXRlLCAnZGF5cycpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgbGV0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gXy5pc1VuZGVmaW5lZChjdXIpID8gYW5ndWxhci5jb3B5KGRlZmF1bHRWYWx1ZSkgOiBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vaWYoc2VydmljZS5saXN0ZW5lcnNba2V5XSkgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycyA9IFtdO1xuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICAgZnVuY3Rpb24oKSB7IHJldHVybiBzZXJ2aWNlLm1vZGVsOyB9LFxuICAgICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgICB0cnVlXG4gICAgKTtcblxuICAgIHNlcnZpY2UuaW5pdFNjaGVtYVBhcmFtcygpO1xuICAgIHNlcnZpY2Uud2F0Y2hpbmcgPSB0cnVlO1xuICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2RlbFdhdGNoKGN1ciwgcHJldikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyB3ZSBhbHdheXMgcnVuIHRocm91Z2ggdGhlIGxpc3RlbmVycyBvbiB0aGUgZmlyc3QgdXBkYXRlIGJlY2F1c2UgYW5ndWxhciBzZWVtcyB0byBtZXNzIHVwXG4gICAgLy8gd2hlbiB0aGUgZGVmYXVsdHMgYXJlIGFwcGxpZWQgYW5kIHVzZXMgdGhlIHNhbWUgb2JqZWN0IGZvciBib3RoIGN1ciBhbmQgcHJldlxuICAgIGlmKHNlcnZpY2UuZmlyc3RVcGRhdGUgfHwgIWFuZ3VsYXIuZXF1YWxzKGN1ciwgcHJldikpIHtcbiAgICAgIHNlcnZpY2UuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgIGNuVXRpbC5jbGVhbk1vZGVsKHNlcnZpY2UubW9kZWwpO1xuXG4gICAgICBzZXJ2aWNlLnByZXZQYXJhbXMgPSBhbmd1bGFyLmNvcHkoc2VydmljZS5wYXJhbXMpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiBcbiAgICAgICAgICAgICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiZcbiAgICAgICAgICAgICFpc0luaXRBcnJheSAmJlxuICAgICAgICAgICAgdmFsICE9PSBudWxsLyogJiZcbiAgICAgICAgICAgICFhbmd1bGFyLmVxdWFscyh2YWwsIHNlcnZpY2UuZ2V0RGVmYXVsdChrZXkpKSovKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyhzZXJ2aWNlLnBhcmFtcywgc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICBpZihzZXJ2aWNlLm1vZGVsLmlkICYmICFzZXJ2aWNlLnVwZGF0ZXMgJiYgXy5pc0VtcHR5KHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTY2hlbWFQYXJhbXMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIsIGtleSkge1xuICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwSW5kZXhlcyhrZXkpIHtcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybVByb3BhZ2F0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSkgPT4ge1xuICAgICAgY29uc3QgeyBmb3JtIH0gPSBzY29wZTtcbiAgICAgIGlmKCFmb3JtLmtleSkge1xuICAgICAgICBmb3JtLmNhY2hlS2V5ID0gYCR7Zm9ybS50eXBlfS0ke18udW5pcXVlSWQoKX1gO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gZm9ybS5jYWNoZUtleSB8fCBzZXJ2aWNlLmdldEtleShmb3JtLmtleSk7XG5cbiAgICAgIGlmKF8uaXNOdW1iZXIoc2NvcGUuYXJyYXlJbmRleCkpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNjb3BlLmFycmF5SW5kZXg7XG4gICAgICAgIGZvcm0uYXJyYXlJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmKCFzZXJ2aWNlLmdldEFycmF5Q29weShnZW5lcmljS2V5LCBpbmRleCkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZvcm0sIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWZvcm0uY29uZGl0aW9uKSBmb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcblxuICAgICAgICBzZXJ2aWNlLmFkZEFycmF5Q29weShzY29wZSwgZ2VuZXJpY0tleSwgaW5kZXgpO1xuICAgICAgICBzY29wZS4kZW1pdCgnZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGdlbmVyaWNLZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlcnZpY2UuYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSk7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHNlcnZpY2UubGlzdGVuZXJzW2tleV07XG4gICAgICBpZihsaXN0ZW5lcikgbGlzdGVuZXIuaGFuZGxlcnMgPSBbXTtcblxuICAgICAgY29uc3QgdW5pbmRleGVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICAgICAgY29uc3QgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0Zvcih1bmluZGV4ZWRLZXkpO1xuXG4gICAgICBjb3BpZXMuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5zcGxpY2UoaW5kZXgsIDEpKTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIHZhciBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcHkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGNvcGllcyA9IHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgICByZXR1cm4gY29waWVzICYmIGNvcGllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvU2NvcGVDYWNoZShzY29wZSwga2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS5zY29wZUNhY2hlW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignY2FjaGluZyBkdXBsaWNhdGUgc2NvcGUgZm9yJywga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NvcGVDYWNoZVtrZXldID0gc2NvcGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tU2NvcGVDYWNoZShrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEludFN0ckluZGV4KGV4cCkge1xuICAgIHJldHVybiBleHAubWF0Y2goL1xcWygtP1xcZCt8XCIuKlwifCcuKicpXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkge1xuICAgIGxldCBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICBjb25zdCByZXBsYWNlZCA9IFtdO1xuXG4gICAgd2hpbGUodG9SZXBsYWNlKSB7XG4gICAgICByZXBsYWNlZC5wdXNoKHRvUmVwbGFjZSk7XG4gICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIGBmZl9yJHtyZXBsYWNlZC5sZW5ndGggLSAxfV9mZmApO1xuICAgICAgW3RvUmVwbGFjZV0gPSBtYXRjaEludFN0ckluZGV4KGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL1xcWyhbXltcXF1dKyldKFteW1xcXV0qKS8pO1xuXG4gICAgcmV0dXJuIG1hdGNoICYmXG4gICAgICByZXBsYWNlZC5sZW5ndGggP1xuICAgICAgbWF0Y2gubWFwKChleHApID0+IHtcbiAgICAgICAgbGV0IFt0b1JlcGxhY2UsIGluZGV4XSA9IGV4cC5tYXRjaCgvZmZfcihcXGQrKV9mZi8pIHx8IFtdO1xuICAgICAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgICAgICBleHAgPSBleHAucmVwbGFjZSh0b1JlcGxhY2UsIHJlcGxhY2VkW2luZGV4XSk7XG4gICAgICAgICAgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICAgIH0pIDpcbiAgICAgIG1hdGNoO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBsZXQgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuXG4gICAgd2hpbGUobmVzdGVkKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWQsIGRlcHRoKS5nZXQoKTtcbiAgICAgIGNvbnN0IGtleVZhbCA9IF8uaXNVbmRlZmluZWQocGFyc2VkKSA/XG4gICAgICAgICcnIDpcbiAgICAgICAgXy5pc1N0cmluZyhwYXJzZWQpID9cbiAgICAgICAgICBgXCIke3BhcnNlZH1cImAgOlxuICAgICAgICAgIHBhcnNlZDtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKGBbJHtuZXN0ZWR9XWAsIGBbJHtrZXlWYWx9XWApO1xuICAgICAgWywgbmVzdGVkXSA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBleHA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIFxuICAgIGlmKCFfLmlzU3RyaW5nKGV4cCkgJiYgIV8uaXNBcnJheShleHApKSB7XG4gICAgICByZXR1cm4geyBnZXQ6ICgpID0+IGV4cCB9O1xuICAgIH1cblxuICAgIC8vIGlmIGV4cHJlc3Npb24gaXMgc3BlY2lmaWMgdmFsdWVcbiAgICBpZigvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCdbXlxcJ10qJ3xcIlteXFxcIl0qXCJ8LT9bMC05Ll0rfFxcW118XFx7fSkkLy50ZXN0KGV4cCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCFleHApIHJldHVybiBleHA7XG4gICAgICAgICAgY29uc3QgaXNTdHIgPSBleHAubWF0Y2goL1wiKFteXFxcIl0qKVwiLykgfHwgZXhwLm1hdGNoKC8nKFteXFwnXSopJy8pO1xuICAgICAgICAgIGlmKGlzU3RyKSByZXR1cm4gaXNTdHJbMV07XG4gICAgICAgICAgc3dpdGNoKGV4cCkge1xuICAgICAgICAgICAgY2FzZSAnbnVsbCc6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnZmFsc2UnOiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlICd0cnVlJzogcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOiByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdbXSc6IHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgJ3t9JzogcmV0dXJuIHt9O1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBhcnNlRmxvYXQoZXhwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZXhwID0gc2VydmljZS5nZXRLZXkoZXhwKTtcblxuICAgIGNvbnN0IG1hdGNoID0gZXhwLm1hdGNoKC9eKG1vZGVsXFwuKT8oXFxTKykkLyk7XG5cbiAgICBjb25zdCBtb2RlbFZhbHVlID0ge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W3BhdGguc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnQgJiYgc3RhcnRbcGF0aFswXV07XG4gICAgICB9LFxuXG4gICAgICBnZXRBc3NpZ25hYmxlKCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IHByb2dyZXNzID0gW107XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBwcm9ncmVzcy5wdXNoKGtleSk7XG4gICAgICAgICAgaWYoIXN0YXJ0W2tleV0pIHtcbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IGFzc2lnbmFibGUgPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGRlbGV0ZSBhc3NpZ25hYmxlLm9ialthc3NpZ25hYmxlLmtleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXNzaWduYWJsZS5vYmpbYXNzaWduYWJsZS5rZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG5cbiAgICAgIHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiBleHAsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGtleTogbWF0Y2hbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBzaWxlbmNlTGlzdGVuZXJzKGtleVN0YXJ0LCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgIGlmKGtleS5pbmRleE9mKGtleVN0YXJ0KSA9PT0gMCkge1xuICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgZGVwdGgpLmdldCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbiwgc2Vjb25kUGFzcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiB3ZSdyZSBoZXJlIGJlY2F1c2UgYSBwYXJlbnQncyBzY29wZSB3YXMgZW1pdHRlZCwgXG4gICAgLy8gc2NvcGUgZm9yIHRoaXMgc2VjdGlvbiB3aWxsIHNvb24gYmUgZW1pdHRlZCwgc28gY2FuIHNraXBcbiAgICBpZihzZWNvbmRQYXNzKSByZXR1cm47IFxuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIF8uZWFjaChmaWVsZC5kYXRhLCBmdW5jdGlvbihkYXRhUHJvcCwga2V5KSB7XG4gICAgICBmaWVsZC5kYXRhW2tleV0gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihkYXRhUHJvcCkuZ2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSAoKSA9PlxuICAgICAgICBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgdmFyIGtleSA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5xO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSBmdW5jdGlvbihxKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgcGFyYW1zW2tleV0gPSBxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHdyYXAgaW4gc3RyaW5nIHNvIHJldHVybnMgdHJ1dGh5IHdoZW4gY29tcGlsZWQsIGJ1dCBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdpdGhpbiBkaXJlY3RpdmVcbiAgICAgIGlmKCFrZXkpIHNlbGVjdC5taW5Mb29rdXAgPSAnMCc7XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzY2hlbWEuaXRlbXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgXy5lYWNoKHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChzY2hlbWEuZGVmYXVsdCkpIHtcbiAgICAgICAgICBkZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIFwia2V5XCI6IGtleSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHNjaGVtYS5kZWZhdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYoZGVmYXVsdHMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdC5vbkFkZCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQpIHtcbiAgICAgICAgICBpZih2YWwudmFsdWUgJiYgZXZlbnQgPT09ICd0YWctYWRkZWQnKSB7XG4gICAgICAgICAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgICAgaWYoIXZhbC52YWx1ZVtwcm9wLmtleV0pIHZhbC52YWx1ZVtwcm9wLmtleV0gPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHNlbGVjdC5pdGVtRm9ybWF0dGVyID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoc2VsZWN0LmRpc3BsYXlGb3JtYXQpO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3QudHlwZS5pbmNsdWRlcygnY24tYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGlmKHNlbGVjdC5pdGVtcykge1xuICAgICAgICBzZWxlY3QuZGV0YWlsZWRMaXN0ID0gdHJ1ZTtcblxuICAgICAgICBpZihzZWxlY3QuaXRlbXNbMF0udHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICBpZihzZWxlY3QuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7IFxuICAgICAgICAgICAgICBpZih2YWxpZCA9PT0gdW5kZWZpbmVkKSBtb2RlbFZhbHVlLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdC5rZXksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZm9ybUN0cmwgJiYgc2VydmljZS5mb3JtQ3RybFtzZXJ2aWNlLmdldEtleShzZWxlY3Qua2V5KV07XG4gICAgICAgIGlmKGZvcm0gJiYgZm9ybS4kc2V0RGlydHkpIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICB9LCBzZWxlY3QudXBkYXRlU2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVG9nZ2xlKHRvZ2dsZSkge1xuICAgIHRvZ2dsZS50eXBlID0gJ2NuLXRvZ2dsZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzSGVscChoZWxwKSB7XG4gICAgaGVscC5odG1sQ2xhc3MgPSAnaGVscC1ibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGlzcGxheShkaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRpc3BsYXkudHlwZSA9ICdjbi1kaXNwbGF5JztcbiAgICBkaXNwbGF5LmdldERpc3BsYXkgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShkaXNwbGF5LmRpc3BsYXlGb3JtYXQsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RlbXBsYXRlKHRwbCwgcGFyc2VTY29wZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAvL3ZhciBwcm9jZXNzb3IgPSAvPChcXFMrKVtePl0qPi4qPFxcL1xcMT4vLnRlc3QodHBsKSA/ICRjb21waWxlIDogJGludGVycG9sYXRlO1xuICAgIHZhciBwcm9jZXNzb3IgPSAkaW50ZXJwb2xhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBhcnJheUluZGV4KSB7XG4gICAgICBpZihwYXJzZVNjb3BlKSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKGFycmF5SW5kZXgpKSB7XG4gICAgICAgICAgc2NvcGUgPSBfLm1hcChzY29wZSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSAnYXJyYXlJbmRleCcgPyBhcnJheUluZGV4IDoga2V5O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNjb3BlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUsIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3Nvcih0cGwpKHNjb3BlKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RhYmxlKHRhYmxlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHRhYmxlLnR5cGUgPSAnY24tdGFibGUnO1xuICAgIHRhYmxlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXy5leHRlbmQocm93Lml0ZW1zW2ldLCB0YWJsZS5jb2x1bW5zW2ldKTtcbiAgICAgICAgLy9pZihyb3cuY29sdW1uc1tpXS5rZXkpIHJvdy5jb2x1bW5zW2ldLmtleSA9IE9iamVjdFBhdGgucGFyc2Uocm93LmNvbHVtbnNbaV0ua2V5KTtcbiAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQocm93Lml0ZW1zW2ldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KSxcbiAgICAgICAgc2VsZWN0RmllbGQgPSBfLmZpbmQoc2VsZWN0RGlzcGxheS5pdGVtcywgJ3NlbGVjdEZpZWxkJyksXG4gICAgICAgIGhhbmRsZXI7XG5cbiAgICBpZihzY2hlbWEgJiYgc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKTtcbiAgICB9XG5cbiAgICBzZWxlY3REaXNwbGF5LnNlbGVjdERpc3BsYXkgPSBmYWxzZTtcbiAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3RGaWVsZC5rZXksIGhhbmRsZXIsIHNlbGVjdEZpZWxkLnVwZGF0ZVNjaGVtYSwgdHJ1ZSk7XG4gICAgLy9zZXJ2aWNlLnByb2Nlc3NGaWVsZChzZWxlY3REaXNwbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZihpdGVtLmNvbmRpdGlvbiAhPT0gJ2ZhbHNlJykge1xuICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKHZhbCwgcHJldiwga2V5KSB7XG4gICAgICB2YXIgaW5kZXggPSBnZXRBcnJheUluZGV4KGtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGluZGV4KTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIHZhciBmb3JtQ29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfLmVhY2goZm9ybUNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgaWYoZ2V0QXJyYXlJbmRleChjb3B5KSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICBjb3B5LmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KGNvcHkua2V5KSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIGlmKGtleSA9PT0gc2VsZWN0S2V5KSByZXR1cm47XG4gICAgICBfLmVhY2gobW9kZWwsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgICAgdmFyIGluZGV4ZWRLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoa2V5LCBpKTtcbiAgICAgICAgdmFyIHNwbGl0SW5kZXhlZEtleSA9IE9iamVjdFBhdGgucGFyc2UoaW5kZXhlZEtleSk7XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0SW5kZXhlZEtleVtzcGxpdEluZGV4ZWRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKGVsZW0sIGkpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICBfLmVhY2goZWxlbSwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBydW4gaGFuZGxlciBvbmNlIGFsbCBhcnJheUNvcGllcyBoYXZlIGJlZW4gaW5zdGFudGlhdGVkXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIga2V5TWFwID0gXy5wbHVjayhfLnJlamVjdChzZWxlY3REaXNwbGF5Lml0ZW1zLCB7XCJjb25kaXRpb25cIjpcImZhbHNlXCJ9KSwgJ2tleScpO1xuICAgIHZhciBvbmNlID0gJHJvb3RTY29wZS4kb24oJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBmdW5jdGlvbihldmVudCwga2V5KSB7XG4gICAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYobW9kZWwpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gbW9kZWwubGVuZ3RoICogKGtleU1hcC5sZW5ndGgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKGtleU1hcCwga2V5KSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY291bnQgPT09IHRvdGFsKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFuZGxlcihudWxsLCBudWxsLCAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHJlc2V0Q291bnQgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm0udXBkYXRlUGFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgY291bnQgPSAwO1xuICAgIH0pO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gob25jZSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChyZXNldENvdW50KTtcbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RWYWx1ZS5wdXNoKHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIHRoZSBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICB9KTtcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgaGVyZVxuICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdERpc3BsYXkua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICBpZihkZWZhdWx0cyAmJiAhbW9kZWwuZ2V0KCkpIHtcbiAgICAgIG1vZGVsLnNldChkZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNjaGVtYVJlZnJlc2gocmVmcmVzaCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBzZXJ2aWNlLnJlZnJlc2hTY2hlbWEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKHVwZGF0ZVNjaGVtYSkge1xuICAgICAgdmFyIHBhcmFtcyA9IF8uZXh0ZW5kKGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKSwgc2VydmljZS5wYXJhbXMpO1xuICAgICAgdmFyIGRpZmYgPSBjblV0aWwuZGlmZihzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHBhcmFtcywgdHJ1ZSk7XG4gICAgICB2YXIga2V5cztcblxuICAgICAgaWYoZGlmZiB8fCB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgaWYodXBkYXRlU2NoZW1hKSBwYXJhbXMudXBkYXRlU2NoZW1hID0gdXBkYXRlU2NoZW1hO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgaWYoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBkaWZmID0gXy5vbWl0KGRpZmYsIF8uaXNOdWxsKTtcbiAgICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighcGFyYW1zLnVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAgIGRpZmYgPSBjblV0aWwuZGlmZihwYXJhbXMsIF8ub21pdChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsICd1cGRhdGVTY2hlbWEnKSk7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaChwYXJhbXMpLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgICAgICAgLy9zZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UucmVmcmVzaERhdGEgPSBfLmRlYm91bmNlKGZ1bmN0aW9uKCkge1xuICAgICAgcmVmcmVzaChfLmV4dGVuZChzZXJ2aWNlLnNjaGVtYS5wYXJhbXMsIHt1cGRhdGVTY2hlbWE6ICdyZWZyZXNoRGF0YSd9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2NoZW1hKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgcmVnaXN0ZXIuZXhwKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5zY2hlbWEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCBmdW5jdGlvbihmb3JtKSB7XG5cbiAgICAgICAgICBpZihrZXlzLmluZGV4T2YoZm9ybS5rZXkpID09PSAtMSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGZvcm0ua2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgdmFyIGNhY2hlZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmb3JtLmtleSk7XG4gICAgICAgICAgaWYoY2FjaGVkKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNhY2hlZCwgZm9ybSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGZvcm0ua2V5KTtcbiAgICAgICAgICBpZihjb3BpZXMpIHtcbiAgICAgICAgICAgIGNvcGllcy5mb3JFYWNoKGNvcHkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgICAgICBpZihmb3JtKSBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmb3JtKTtcbiAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ1tdJykpIHtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgICAgICBfLmVhY2goY29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICAgIGlmKGNvcHkpIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmKCF1cGRhdGVba2V5XSkgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBfLmtleXModXBkYXRlKTtcblxuICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKHVwZGF0ZS5rZXkpO1xuXG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCB1cGRhdGUua2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSB7XG4gICAgICBjb25zb2xlLmxvZygnVE9ETzogc2VlIGlmIHRoaXMgY2FuIGJlIHJlbW92ZWQnKTsgXG4gICAgICBjdXJyZW50LnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cykge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIGlmKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICcuJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoc2NoZW1hLml0ZW1zICYmIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzKSB7XG4gICAgICBfLmVhY2goc2NoZW1hLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwgc3ViS2V5KSB7XG4gICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSArICdbXS4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRXJyb3IoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgbWVzc2FnZTogZmllbGQuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0RXJyb3JzKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlcnZpY2UuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBlcnJvci5rZXksICdzZXJ2ZXJWYWxpZGF0aW9uJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VBcnJheUluZGV4KHJlc29sdmUsIGtleSkge1xuICAgIHdoaWxlKHJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkge1xuICAgICAgaWYoXy5pc051bWJlcihrZXkpKSByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKC9hcnJheUluZGV4L2csIGtleSk7XG4gICAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKC0/XFxcXGQrKVxcXFxdJyk7XG4gICAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgICByZXNvbHZlID0gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC9cXFsoXFxkKylcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleUNvcHk7XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB2YXIgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleDtcblxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rpc21pc3NNb2RhbCcpO1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zIFxuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAgIC8vLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKTtcblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDxuZy1mb3JtIFxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIHZtLmNvbmZpZy5zY2hlbWE7IH0sIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndm0uc2VydmljZS5pc0NvbXBpbGVkKCk6Jywgdm0uc2VydmljZS5pc0NvbXBpbGVkKCkpO1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgICAgLy8kc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVJlZHJhdycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICB2bS5zZXJ2aWNlLmNsZWFudXAoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vLy9cbiAgXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVEYXRhOicsIHVwZGF0ZURhdGEpO1xuICAgICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gIC8vLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgLy9jb25zb2xlLmxvZygnJHNjb3BlLCBuZ01vZGVsOicsICRzY29wZS5mb3JtLCBuZ01vZGVsKTtcbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9