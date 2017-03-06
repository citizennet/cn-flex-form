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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZWJmNWY2MjgyYjM5ZmJjNGI0OSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwic2Vjb25kUGFzcyIsInByb2Nlc3NGaWVsZFR5cGUiLCJwcm9jZXNzQ29uZGl0aW9uYWwiLCJwcm9jZXNzRGVmYXVsdCIsImRlZmF1bHQiLCJyZWdpc3RlckhhbmRsZXIiLCJ1cGRhdGVTY2hlbWEiLCJzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyIiwiQ05GbGV4Rm9ybVNlcnZpY2UiLCJhZGRNYXBwaW5nIiwiY3JlYXRlRGlyZWN0aXZlIiwiQXBpIiwiJHBhcnNlIiwic2ZQYXRoIiwiJGludGVycG9sYXRlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY25VdGlsIiwic2VydmljZXMiLCJwcm90b3R5cGUiLCJjb21waWxlIiwiYWRkQXJyYXlDb3B5IiwiYWRkVG9EYXRhQ2FjaGUiLCJhZGRUb0Zvcm1DYWNoZSIsImFkZFRvU2NvcGVDYWNoZSIsImJyb2FkY2FzdEVycm9ycyIsImJ1aWxkRXJyb3IiLCJjbGVhbnVwIiwiZGVyZWdpc3RlckhhbmRsZXJzIiwiZGVyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJnZXRBcnJheUNvcHkiLCJnZXRBcnJheUNvcGllcyIsImdldEFycmF5Q29waWVzRm9yIiwiZ2V0QXJyYXlTY29wZXMiLCJnZXREZWZhdWx0IiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRGcm9tU2NvcGVDYWNoZSIsImdldEZvcm1zVG9Qcm9jZXNzIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VDb25kaXRpb24iLCJwYXJzZUV4cHJlc3Npb24iLCJwcm9jZXNzQXJyYXkiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGaWVsZCIsInByb2Nlc3NGaWVsZHNldCIsInByb2Nlc3NGaWVsZFByb3BzIiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlclJlc29sdmUiLCJyZXBsYWNlQXJyYXlJbmRleCIsInJlcHJvY2Vzc0ZpZWxkIiwicmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zIiwic2V0QXJyYXlJbmRleCIsInNldHVwQ29uZmlnIiwic2V0dXBBcnJheVNlbGVjdERpc3BsYXkiLCJzZXR1cFNlbGVjdERpc3BsYXkiLCJzZXR1cFNjaGVtYVJlZnJlc2giLCJzaWxlbmNlTGlzdGVuZXJzIiwic2tpcERlZmF1bHRzIiwiZ2V0U2VydmljZSIsImZuIiwiZmluZCIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsImFyZ3MiLCJtb2RlbCIsImN1clNlcnZpY2UiLCJuZXdTZXJ2aWNlIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwic2NvcGVDYWNoZSIsImxpc3RlbmVycyIsInJlc29sdmVSZWdpc3RlciIsInVwZGF0ZXMiLCJza2lwRGVmYXVsdCIsInBhcmFtcyIsImV4dGVuZCIsImZvcm1zIiwiZm9ybSIsImJpbmQiLCJzZXRWYWx1ZSIsImNvbXBpbGVkIiwiZm9ybUN0cmwiLCJnZXRTY2hlbWFGb3JtIiwiZ2V0U2NoZW1hVHlwZSIsImlzQXJyYXkiLCJmaXJzdCIsImN1ckRlZmF1bHQiLCJrZXkiLCJpc0RlZmluZWQiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaXNUcnVseUVtcHR5IiwiaGFzIiwiZXF1YWxzIiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJwb3MiLCJodG1sQ2xhc3MiLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJnZXRPZ0tleXMiLCJyZWplY3QiLCJrZXlzIiwiX29nS2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCIkYnJvYWRjYXN0IiwiZ2V0RG90S2V5IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwiZXhwIiwid2F0Y2hhYmxlcyIsIm5lc3RlZCIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInJlcGxhY2VTdHIiLCJyZXBsYWNlIiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwiYXJyYXlJbmRleCIsIndhdGNoYWJsZSIsIm1hdGNoIiwiYmFzZSIsInNraXBQcm9wSGFuZGxlcnMiLCJlaXRoZXJzIiwic3BsaXQiLCJ4IiwiYWxsIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdlbmVyaWNLZXkiLCJzdHJpcEluZGV4ZXMiLCJjYWNoZWRGaWVsZCIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJ2YWwiLCJwcmV2Iiwic2NvcGUiLCJtYXAiLCJwYXRoIiwicmVzb2x1dGlvbiIsImN1ciIsImFkanVzdG1lbnQiLCJkYXRlIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsInVwZGF0ZVBhdGgiLCJmcm9tUGF0aCIsInVwZGF0ZSIsImZyb20iLCJtb21lbnQiLCJhZGQiLCJ0b0RhdGUiLCJyZXN1bHQiLCJwIiwiZmxvb3IiLCJjZWlsIiwicm91bmQiLCJpbml0aWFsaXplIiwic3RhcnRzV2l0aCIsImxpc3QiLCJwcmVkaWNhdGVQYXJhbXMiLCJwcmVkaWNhdGVCb2R5IiwiZ2VuZXJhdGVQcmVkaWNhdGUiLCJib2R5IiwiYWNjIiwicnVuSGFuZGxlciIsImlzT2JqZWN0IiwiYXJyTWF0Y2giLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVycyIsImFycktleSIsIm9uQXJyYXkiLCJyZW9yZGVyIiwibGFzdEtleSIsImFyclZhbCIsImxpc3RlbmVyS2V5IiwiaXRlbSIsIndhdGNoaW5nIiwibW9kZWxXYXRjaCIsIiR3YXRjaCIsImZpcnN0VXBkYXRlIiwiY2xlYW5Nb2RlbCIsInByZXZQYXJhbXMiLCJsaXN0ZW5lciIsImlzSW5pdEFycmF5IiwiaWQiLCIkb24iLCJldmVudCIsImNhY2hlS2V5IiwidW5pcXVlSWQiLCJpc051bWJlciIsImluZGV4IiwiJGVtaXQiLCJ1bmluZGV4ZWRLZXkiLCJjb3BpZXMiLCJzcGxpY2UiLCJsaW5rIiwicGx1Y2siLCJrZXlTdGFydCIsImZpbHRlciIsIndhcm4iLCJtYXRjaEludFN0ckluZGV4IiwidG9SZXBsYWNlIiwicmVwbGFjZWQiLCJwYXJzZWQiLCJrZXlWYWwiLCJpc1N0ciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsIm5vQ29uc3RydWN0aW9uIiwicHJvZ3Jlc3MiLCJvYmoiLCJmdWxsUGF0aCIsImNvbmNhdCIsInNsaWNlIiwib3B0aW9ucyIsInNpbGVudCIsImdldEFycmF5SW5kZXgiLCJrcyIsImluZGV4ZWRLZXkiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInBhcnNlSW50Iiwic3RhcnRPZiIsInZpZXdGb3JtYXR0ZXIiLCJkYXRlRm9ybWF0Iiwidmlld1BhcnNlciIsImdldFNlbGVjdFZhbFByb3AiLCJzZWxlY3QiLCJ2YWx1ZVByb3BlcnR5IiwiZ2V0QWxsb3dlZFNlbGVjdFZhbHVlIiwiZ2V0VGl0bGVNYXAiLCJ2YWxQcm9wIiwibWFwVmFsIiwib25Jbml0Iiwic2V0dGVyIiwibmV3VmFsIiwicSIsInRpdGxlUXVlcnkiLCJtaW5Mb29rdXAiLCJvbkFkZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiZGV0YWlsZWRMaXN0Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsInNlbGVjdEtleSIsInNwbGl0S2V5IiwiaW5kZXhlZFNlbGVjdEtleSIsInNlbGVjdFZhbHVlIiwiZm9ybUNvcGllcyIsImVsZW0iLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsImpvaW4iLCJtZXNzYWdlIiwiYXJyYXlJbmRleEtleSIsImV4ZWMiLCJyZSIsIlJlZ0V4cCIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsInBhcmVudCIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsImRlc3Ryb3lTdHJhdGVneSIsIkZsZXhGb3JtTW9kYWxMb2FkZXIiLCJGbGV4Rm9ybU1vZGFsIiwiJHN0YXRlIiwidm0iLCJhY3RpdmF0ZSIsIm9wZW4iLCJvbkRpc21pc3MiLCJvbkFmdGVyRGlzbWlzcyIsImZpbmFsbHkiLCJnb0JhY2siLCJjYXRjaCIsInJlc3RQYXJhbXMiLCJkaXNtaXNzRXZlbnQiLCJkaXNtaXNzTW9kYWwiLCJ0cmFuc2l0aW9uIiwiZ28iLCJkaXNtaXNzIiwiJHVpYk1vZGFsIiwiY25GbGV4Rm9ybSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJmb3JtSW5kZXgiLCJmb3JtTmFtZSIsImRlbGF5Rm9ybSIsImNsZWFudXBFdmVudCIsIkZsZXhGb3JtIiwiYmluZFRvQ29udHJvbGxlciIsImNuRmxleEZvcm1TZXJ2aWNlIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsInVwZGF0ZURhdGEiLCJpc0Rpc2FibGVkIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsImJ0bkNvbmZpZyIsImZmVmFsaWRhdGUiLCJhdHRy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QUFHbFosUUFBUWdDOzs7O0FBTGYsU0FBUSxVQVVPaVksVzs7Ozs7OztBQ3JHZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDbkx0Qzs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUhULFVBQVNlLG1CQUFtQjtHQUMxQixPQUFPO0tBQ0xkLFVBQVU7S0FDVjlOLE9BQU87T0FDTDdRLFFBQVE7T0FDUjBmLFFBQVE7T0FDUkMsZUFBZTs7S0FFakJ4ZixZQUFZeWY7S0FDWlYsa0JBQWtCO0tBQ2xCcGMsY0FBYztLQUNkOGI7Ozs7QUF5REosVUFBU2dCLGVBQWVSLFFBQVE7R0FDOUI7O0dBRUEsSUFBTXpCLEtBQUs7O0dBRVhBLEdBQUdrQyxhQUFhQTtHQUNoQmxDLEdBQUdtQyxhQUFhQTs7R0FFaEJsQzs7OztHQUlBLFNBQVNBLFdBQVc7S0FDUkQsR0FBR29DLFFBQVVwQyxHQUFHM2QsT0FBdkIrZjs7S0FEZSxXQVFkcEMsR0FBRzNkLE9BQU9nZ0IsZ0JBQWdCOztLQUxmckMsR0FBR3NDLGNBSEEsS0FHaEJBO0tBQ2F0QyxHQUFHdUMsY0FKQSxLQUloQkE7S0FDWXZDLEdBQUd3QyxhQUxDLEtBS2hCQTtLQUNheEMsR0FBR3lDLGNBTkEsS0FNaEJBO0tBQ1N6QyxHQUFHMEMsVUFQSSxLQU9oQkE7OztHQUlKLFNBQVNSLGFBQWE7S0FDcEJsZ0IsUUFBUUMsSUFBSSxlQUFlaWdCO0tBQzNCVCxPQUFPM0ssTUFBTTs7O0dBR2YsU0FBU3FMLFdBQVdRLFdBQVc7S0FDN0IsSUFBRzNDLEdBQUczZCxPQUFPOGYsWUFBWSxPQUFPbkMsR0FBRzNkLE9BQU84ZixXQUFXUTtLQUNyRCxPQUFPOzs7Ozs7OztBQXZDWCxTQUFRLFVBK0NPYixpQjs7Ozs7Ozs7Ozs7QUMxR2YsVUFBU2MsVUFBVCxHQUFzQjtBQUNwQixVQUFPO0FBQ0w1QixlQUFVLEdBREw7QUFFTDlOLFlBQU8sRUFBRWxGLE1BQU0sYUFBUixFQUZGO0FBR0x4SCxjQUFTLFNBSEo7QUFJTDBRLFdBQU1BO0FBSkQsSUFBUDtBQU1EOztBQUVELFVBQVNBLElBQVQsQ0FBY3VLLE1BQWQsRUFBc0I1RSxJQUF0QixFQUE0QmdHLEtBQTVCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQztBQUNBLE9BQUdyQixPQUFPelQsSUFBUCxJQUFleVQsT0FBT3pULElBQVAsQ0FBWStVLFFBQTlCLEVBQXdDO0FBQ3RDdEIsWUFBT3hMLE1BQVAsQ0FBYyxZQUFXO0FBQUUsY0FBTzZNLFFBQVFFLFVBQWY7QUFBNEIsTUFBdkQsRUFBeUQsVUFBU3RmLEtBQVQsRUFBZ0I7QUFDdkU7QUFDQW9mLGVBQVFHLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUgsZUFBUUcsWUFBUixDQUFxQixTQUFyQixFQUFnQ3ZmLEtBQWhDO0FBQ0QsTUFKRDtBQUtEO0FBQ0Y7O0FBRUQ7QUFDSTtBQUNBOzttQkFFV2tmLFUiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNlYmY1ZjYyODJiMzlmYmM0YjQ5IiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmNvbnNvbGUubG9nKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAvLyduZ0pzb25FeHBsb3JlcicsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjb25zdCBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbSxcbiAgICAkZ2V0OiBjbkZsZXhGb3JtQ29uZmlnXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRJZ25vcmVQYXJhbShwYXJhbSkge1xuICAgIGlnbm9yZVBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWcoJHN0YXRlUGFyYW1zKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMoKSB7XG4gICAgICByZXR1cm4gX1xuICAgICAgICAgIC5jaGFpbigkc3RhdGVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHYpIHx8IF8uaXNOdWxsKHYpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnZhbHVlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcigkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiAkZ2V0KCkge1xuICAgIC8vIG5vdGhpbmcgdG8gZG8gaGVyZSwgYnV0IHJlcXVpcmVkXG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdGF0ZXMoeyBwZXJtaXNzaW9ucywgbmFtZSB9KSB7XG4gICAgY29uc3Qgc2hhcmVkID0ge1xuICAgICAgY29udHJvbGxlcjogJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgcGVybWlzc2lvbnNcbiAgICB9O1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKGAke25hbWV9LnBhZ2UubW9kYWxQYXJhbXNgLCB7XG4gICAgICAgICAgdXJsOiAnL346bW9kYWwvOm1vZGFsSWQvOnJlc3RQYXJhbXMnLFxuICAgICAgICAgIC4uLnNoYXJlZFxuICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnZmxleC1mb3JtLXNhbmRib3gnLCB7XG4gICAgICAgIHVybDogJy9mbGV4LWZvcm0vc2FuZGJveCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybVNhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL3NhbmRib3guaHRtbCdcbiAgICAgIH0pO1xufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Sb3V0ZXMnLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIpXG4gICAgLy8uY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpO1xuXG5leHBvcnQgeyBjbkZsZXhGb3JtUm91dGVzLCBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0ucm91dGVzLmpzIiwiLy9hbmd1bGFyLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgICAvLy5ydW4oYWRkVGVtcGxhdGVzKTtcblxuZnVuY3Rpb24gc2NoZW1hRm9ybUNvbmZpZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnXG4gIF07XG5cbiAgXy5lYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIucmVnaXN0ZXJGaWVsZCh7XG4gICAgICB0eXBlOiBleHRlbnNpb24sXG4gICAgICB0ZW1wbGF0ZVVybDogYGFwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy8ke2V4dGVuc2lvbn0uaHRtbGBcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAnbmdJbmplY3QnO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdG9nZ2xlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgICAgPGNuLXRvZ2dsZS1zd2l0Y2hcbiAgICAgICAgICAgIGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgIG9uLXZhbHVlPVwiZm9ybS5vblZhbHVlXCJcbiAgICAgICAgICAgIG9mZi12YWx1ZT1cImZvcm0ub2ZmVmFsdWVcIlxuICAgICAgICAgICAgcmVhZC1vbmx5PVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICB1bmRlZmluZWQtY2xhc3M9XCJmb3JtLnVuZGVmaW5lZENsYXNzXCIvPlxuICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLm9uVGV4dCAmJiBmb3JtLm9mZlRleHRcIj5cbiAgICAgICAgICAgIHt7JCR2YWx1ZSQkID09PSBmb3JtLm9uVmFsdWUgPyBmb3JtLm9uVGV4dCA6IGZvcm0ub2ZmVGV4dH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1kYXRldGltZXBpY2tlci5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1kYXRldGltZXBpY2tlclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBpcy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIG1pbi1kYXRlPVwiZm9ybS5taW5EYXRlXCJcbiAgICAgICAgICBtYXgtZGF0ZT1cImZvcm0ubWF4RGF0ZVwiXG4gICAgICAgICAgbWF4LXZpZXc9XCJ7e2Zvcm0ubWF4Vmlld319XCJcbiAgICAgICAgICBjbi1kYXRlLXJlcXVpcmVkPVwiZm9ybS5yZXF1aXJlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5zY2hlbWEudHlwZX19XCJcbiAgICAgICAgICBtb2RlbC1mb3JtYXR0ZXI9XCJmb3JtLm1vZGVsRm9ybWF0dGVyXCJcbiAgICAgICAgICBtb2RlbC1wYXJzZXI9XCJmb3JtLm1vZGVsUGFyc2VyXCJcbiAgICAgICAgICB2aWV3LWZvcm1hdHRlcj1cImZvcm0udmlld0Zvcm1hdHRlclwiXG4gICAgICAgICAgdmlldy1wYXJzZXI9XCJmb3JtLnZpZXdQYXJzZXJcIlxuICAgICAgICAgIGZvcm1hdC1zdHJpbmc9e3tmb3JtLmRhdGVGb3JtYXR9fVxuICAgICAgICAgIGljb24tY2xhc3M9e3tmb3JtLmljb25DbGFzc319PlxuICAgICAgICA8L2NuLWRhdGV0aW1lcGlja2VyPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICB2YXIgc2hhcmVkQXV0b2NvbXBsZXRlVHBsID0gYFxuICAgICAgICA8dGFncy1pbnB1dFxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBpbnB1dC1pZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgIGRpc3BsYXktcHJvcGVydHk9XCJ7e2Zvcm0uZGlzcGxheVByb3BlcnR5IHx8ICduYW1lJ319XCJcbiAgICAgICAgICB2YWx1ZS1wcm9wZXJ0eT1cInt7Zm9ybS52YWx1ZVByb3BlcnR5fX1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyIHx8ICcgJ319XCJcbiAgICAgICAgICBjbGVhci1vbi1ibHVyPVwidHJ1ZVwiXG4gICAgICAgICAgYWRkLW9uLWNvbW1hPVwiZmFsc2VcIlxuICAgICAgICAgIGFkZC1mcm9tLWF1dG9jb21wbGV0ZS1vbmx5PVwie3shZm9ybS5hbGxvd05ld319XCJcbiAgICAgICAgICBvbi1iZWZvcmUtdGFnLWFkZGVkPVwiZm9ybS5vbkFkZCh7dmFsdWU6ICR0YWd9LCBmb3JtLCAkZXZlbnQsICRwcmV2KVwiXG4gICAgICAgICAgb24taW5pdD1cImZvcm0ub25Jbml0KCR0YWcsIGZvcm0sICRldmVudCwgJHNldHRlcilcIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uZ2V0U2NoZW1hVHlwZSgpfX1cIlxuICAgICAgICAgIGFycmF5LXZhbHVlLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLml0ZW1zLnR5cGV9fVwiXG4gICAgICAgICAgaGlkZS10YWdzPVwie3tmb3JtLmRldGFpbGVkTGlzdH19XCJcbiAgICAgICAgICB0YWdzLXN0eWxlPVwie3tmb3JtLnNlbGVjdGlvblN0eWxlfX1cIlxuICAgICAgICAgIHJlcXVpcmVkPVwie3tmb3JtLnJlcXVpcmVkfX1cIlxuICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTGVuZ3RofX1cIlxuICAgICAgICAgIGFsbG93ZWQtdGFncy1wYXR0ZXJuPVwiLipcIlxuICAgICAgICAgIGRyb3Bkb3duLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBpdGVtLWZvcm1hdHRlcj1cImZvcm0uaXRlbUZvcm1hdHRlclwiXG4gICAgICAgICAgbWluLXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1pbkl0ZW1zfX1cIlxuICAgICAgICAgIG1heC10YWdzPVwie3tmb3JtLnNjaGVtYS5tYXhJdGVtcyB8fCBmb3JtLmdldFNjaGVtYVR5cGUoKSAhPT0gJ2FycmF5JyA/IDEgOiAwfX1cIlxuICAgICAgICAgIGFsbG93LWJ1bGs9XCJ7e2Zvcm0uYnVsa0FkZH19XCJcbiAgICAgICAgICBidWxrLWRlbGltaXRlcj1cInt7Zm9ybS5idWxrRGVsaW1pdGVyfX1cIlxuICAgICAgICAgIGJ1bGstcGxhY2Vob2xkZXI9XCJ7e2Zvcm0uYnVsa1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIHNob3ctY2xlYXItYWxsPVwie3tmb3JtLnNob3dDbGVhckFsbH19XCJcbiAgICAgICAgICBzaG93LWJ1dHRvbj1cInRydWVcIj5cbiAgICAgICAgICA8YXV0by1jb21wbGV0ZVxuICAgICAgICAgICAgc291cmNlPVwiZm9ybS5nZXRUaXRsZU1hcCAmJiBmb3JtLmdldFRpdGxlTWFwKCkgfHwgZm9ybS50aXRsZVF1ZXJ5KCRxdWVyeSlcIlxuICAgICAgICAgICAgc2tpcC1maWx0ZXJpbmc9XCJ7e2Zvcm0udGl0bGVRdWVyeSA/IHRydWUgOiBmYWxzZX19XCJcbiAgICAgICAgICAgIG1pbi1sZW5ndGg9XCJ7e2Zvcm0ubWluTG9va3VwIHx8IChmb3JtLnRpdGxlUXVlcnkgJiYgMyB8fCAwKX19XCI+XG4gICAgICAgICAgPC9hdXRvLWNvbXBsZXRlPlxuICAgICAgICA8L3RhZ3MtaW5wdXQ+YDtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fS1pbnB1dFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxvbCBzZi1hcnJheT1cImZvcm1cIlxuICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0ge3tmb3JtLmZpZWxkSHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXlcIj5cbiAgICAgICAgICAgIDxidXR0b24gbmctaGlkZT1cImZvcm0ucmVhZG9ubHkgfHwgZm9ybS5yZW1vdmUgPT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cImRlbGV0ZUZyb21BcnJheSgkaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIGZvcm09XCJjb3B5V2l0aEluZGV4KCRpbmRleClcIi8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb3MuaHRtbCcsXG4gICAgICBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpbyByYWRpby1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpby1ibG9jay1pY29uXCIgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0uaWNvbkNsYXNzfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9idXR0b25zLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NoZW1hLWZvcm0tcmFkaW9idXR0b25zIGNuLXJhZGlvYnV0dG9ucyB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi17e2l0ZW0udmFsdWV9fSB7e2Zvcm0uYnRuQ2xhc3N9fSB7e2l0ZW0udmFsdWUgPT09ICQkdmFsdWUkJCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fSBoaWRlXCJcbiAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0udmFsdWV9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1wZXJjZW50YWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLXBlcmNlbnRhZ2UtZm9ybWF0XG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPiU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGlzcGxheS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWRpc3BsYXl7e2Zvcm0uaHRtbENsYXNzfX1cIj5cbiAgICAgICAgPGlucHV0IG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgIHZhbHVlPVwie3tmb3JtLmdldERpc3BsYXkoZm9ybS5rZXksIGZvcm0uYXJyYXlJbmRleCl9fVwiPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmllbGRzZXQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZmllbGRzZXQgXG4gICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J2JvcmRlcmxlc3MnOiBmb3JtLnBvcyA9PT0gMH1cIj5cbiAgICAgICAgPGxlZ2VuZCBuZy1jbGljaz1cImZvcm0udG9nZ2xlQ29sbGFwc2UoZm9ybSlcIlxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwieydzci1vbmx5JzogIXNob3dUaXRsZSgpLCBjb2xsYXBzaWJsZTogZm9ybS5jb2xsYXBzaWJsZX1cIlxuICAgICAgICAgICAgICAgIG5nLW1vdXNlZW50ZXI9XCJmb3JtLnJlbmRlciA9IHRydWVcIj5cbiAgICAgICAgICA8aSBuZy1zaG93PVwiZm9ybS5jb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYXJldC17e2Zvcm0uY29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdkb3duJ319XCI+PC9pPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgbmctc2hvdz1cImZvcm0uZGVzY3JpcHRpb25cIiBuZy1iaW5kLWh0bWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgdWliLWNvbGxhcHNlPVwiZm9ybS5jb2xsYXBzZWRcIj5cbiAgICAgICAgICA8ZGl2IG5nLWlmPVwiZm9ybS5yZW5kZXJcIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1tZWRpYXVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG1lZGlhLXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jc3Z1cGxvYWQnOiAncHJvY2Vzc0NzdlVwbG9hZCcsXG4gICdjbi1yZXVzYWJsZSc6ICdwcm9jZXNzUmV1c2FibGUnLFxuICAnY24tdG9nZ2xlJzogJ3Byb2Nlc3NUb2dnbGUnLFxuICAnY24tdGFibGUnOiAncHJvY2Vzc1RhYmxlJyxcbiAgJ2NvbXBvbmVudCc6ICdwcm9jZXNzQ29tcG9uZW50JyxcbiAgJ3NlY3Rpb24nOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAndGFiYXJyYXknOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAnYXJyYXknOiAncHJvY2Vzc0FycmF5J1xufTtcblxuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAncmVzb2x2ZScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzUmVzb2x2ZShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UsIHNlY29uZFBhc3MpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZCwgc2Vjb25kUGFzcylcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBcbiAgICBfLmlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHQpICYmICFfLmlzVW5kZWZpbmVkKGZpZWxkLnNjaGVtYS5kZWZhdWx0KSAmJiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAndXBkYXRlU2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKVxufV07XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIoc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENORmxleEZvcm1TZXJ2aWNlKFxuICBBcGksXG4gICRwYXJzZSxcbiAgY25GbGV4Rm9ybUNvbmZpZyxcbiAgY25GbGV4Rm9ybVR5cGVzLFxuICBzZlBhdGgsXG4gICRpbnRlcnBvbGF0ZSxcbiAgJHJvb3RTY29wZSxcbiAgJHRpbWVvdXQsXG4gIGNuVXRpbCxcbiAgJHN0YXRlUGFyYW1zXG4pIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtdO1xuICBjb25zdCBwcm90b3R5cGUgPSB7XG4gICAgY29tcGlsZSxcbiAgICBhZGRBcnJheUNvcHksXG4gICAgYWRkVG9EYXRhQ2FjaGUsXG4gICAgYWRkVG9Gb3JtQ2FjaGUsXG4gICAgYWRkVG9TY29wZUNhY2hlLFxuICAgIGJyb2FkY2FzdEVycm9ycyxcbiAgICBidWlsZEVycm9yLFxuICAgIGNsZWFudXAsXG4gICAgZGVyZWdpc3RlckhhbmRsZXJzLFxuICAgIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIGdldEFycmF5Q29weSxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXREZWZhdWx0LFxuICAgIGdldEZyb21EYXRhQ2FjaGUsXG4gICAgZ2V0RnJvbUZvcm1DYWNoZSxcbiAgICBnZXRGcm9tU2NvcGVDYWNoZSxcbiAgICBnZXRGb3Jtc1RvUHJvY2VzcyxcbiAgICBnZXRLZXksXG4gICAgZ2V0U2NoZW1hLFxuICAgIGdldFdhdGNoYWJsZXMsXG4gICAgaGFuZGxlUmVzb2x2ZSxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc1BlcmNlbnRhZ2UsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1RhYmxlLFxuICAgIHByb2Nlc3NUZW1wbGF0ZSxcbiAgICBwcm9jZXNzVG9nZ2xlLFxuICAgIHByb2Nlc3NVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NNZWRpYVVwbG9hZCxcbiAgICBwcm9jZXNzQ3N2VXBsb2FkLFxuICAgIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICByZWdpc3RlckhhbmRsZXIsXG4gICAgcmVnaXN0ZXJSZXNvbHZlLFxuICAgIHJlcGxhY2VBcnJheUluZGV4LFxuICAgIHJlcHJvY2Vzc0ZpZWxkLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNjaGVtYVJlZnJlc2gsXG4gICAgc2lsZW5jZUxpc3RlbmVycyxcbiAgICBza2lwRGVmYXVsdHNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRTZXJ2aWNlKGZuKSB7XG4gICAgcmV0dXJuIF8uZmluZChzZXJ2aWNlcywgZm4pO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBpZihhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBbIHNjaGVtYSwgbW9kZWwsIGNvbmZpZyBdID0gYXJncztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgeyBzY2hlbWEsIG1vZGVsLCBjb25maWcgfSA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgY29uc3QgY3VyU2VydmljZSA9IGdldFNlcnZpY2UoKHNlcnZpY2UpID0+IHNlcnZpY2UubW9kZWwgPT09IG1vZGVsKTtcbiAgICBpZihjdXJTZXJ2aWNlKSB7XG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgY3VyU2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VyU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICBzZXJ2aWNlcy5wdXNoKG5ld1NlcnZpY2UpO1xuICAgIHJldHVybiBuZXdTZXJ2aWNlO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG4gICAgdGhpcy5za2lwRGVmYXVsdCA9IHt9O1xuXG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKCk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUsIHsgZ2V0U2VydmljZSB9KTtcblxuICByZXR1cm4gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yO1xuXG4gIC8vLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBcbiAgICBpZiAoc2VydmljZS5za2lwRGVmYXVsdFtrZXldKSB7XG4gICAgICBkZWxldGUgc2VydmljZS5za2lwRGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBkZWZhdWx0IGlzIHJldHVybmVkIGZvciBuZXcgZm9ybSwgdHJlYXQgaXQgYXMgYSBwcmV2aW91cyBwYXJhbSBpbiBvcmRlciB0byBub3QgdHJpZ2dlciB1bm5lY2Vzc2FyeSB1cGRhdGVTY2hlbWFcbiAgICBpZighc2VydmljZS51cGRhdGVzICYmIGZpZWxkLnVwZGF0ZVNjaGVtYSAmJiBhbmd1bGFyLmlzRGVmaW5lZChjdXJEZWZhdWx0KSAmJiAhc2VydmljZS5zY2hlbWEucGFyYW1zW2tleV0pIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldID0gY3VyRGVmYXVsdDtcbiAgICB9XG5cbiAgICAvLyBpZiBzY2hlbWFVcGRhdGUgaGFzbid0IGJlZW4gdHJpZ2dlcmVkLCBsZXQgc2NoZW1hRm9ybSBkaXJlY3RpdmUgaGFuZGxlIGRlZmF1bHRzXG4gICAgLy9pZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgIGlmKCFfLmlzVW5kZWZpbmVkKGN1ckRlZmF1bHQpKSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKChcbiAgICAgICAgKF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpICYmICFzZXJ2aWNlLnVwZGF0ZXMpIHx8XG4gICAgICAgIChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpXG4gICAgICApICYmICFhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBjdXJEZWZhdWx0KSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCc6OiBwcm9jZXNzRGVmYXVsdCA6OicsIGtleSwgYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpLCBhbmd1bGFyLmNvcHkobW9kZWxWYWx1ZSksIGFuZ3VsYXIuY29weShzZXJ2aWNlLmRlZmF1bHRzW2tleV0pKTtcbiAgICAgICAgbW9kZWwuc2V0KGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKF8uaGFzKGZpZWxkc2V0LCAncG9zJykgJiYgZmllbGRzZXQucG9zID09PSAwKSB7XG4gICAgICBmaWVsZHNldC5odG1sQ2xhc3MgPSAoZmllbGRzZXQuaHRtbENsYXNzIHx8ICcnKSArICcgYm9yZGVybGVzcyc7XG4gICAgfVxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkLCBzZWNvbmRQYXNzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCwgc2Vjb25kUGFzcyk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQsIHNlY29uZFBhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9nS2V5cyhmaWVsZCkge1xuICAgIHJldHVybiBfLnJlamVjdChcbiAgICAgIF8ua2V5cyhmaWVsZCksXG4gICAgICAoa2V5KSA9PiAvXmtleSR8Xmh0bWxDbGFzcyR8Xl8vLnRlc3Qoa2V5KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGQoZmllbGQsIHBvcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoYW5ndWxhci5pc0RlZmluZWQocG9zKSkge1xuICAgICAgZmllbGQucG9zID0gcG9zO1xuICAgIH1cblxuICAgIGlmKCFmaWVsZC5fb2dLZXlzKSB7XG4gICAgICBmaWVsZC5fb2dLZXlzID0gZ2V0T2dLZXlzKGZpZWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgaWYoc2NoZW1hLmRlc2NyaXB0aW9uKSBmaWVsZC5kZXNjcmlwdGlvbiA9IHNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYoZmllbGQucmVhZG9ubHkgJiYgIXNjaGVtYS5yZWFkb25seSkgZmllbGQucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2NoZW1hLnR5cGUgPT09ICdhcnJheScgJiYgISgnc2hvd0NsZWFyQWxsJyBpbiBmaWVsZCkpIGZpZWxkLnNob3dDbGVhckFsbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UucHJvY2Vzc1NjaGVtYShmaWVsZCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmaWVsZCk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgICgoa2V5KSA9PiB7XG4gICAgICAgIGlmKF8uZmluZChzZXJ2aWNlLmVycm9ycywgeyBrZXkgfSkpIHtcbiAgICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NjaGVtYUZvcm0nLCB0cnVlKTtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSkoZ2V0RG90S2V5KGtleSkpO1xuICAgICAgXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCwgc2Vjb25kUGFzcykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSwgc2Vjb25kUGFzcylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT4gXG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCB0cnVlKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGRhdGE7XG4gICAgLy8gZG9lcyBkZWNsYXJhdGl2ZS9mdW5jdGlvbmFsIG91dHdlaWdoIHBlcmZvcm1hbmNlP1xuICAgIGlmKGV4cC5pbmNsdWRlcygnIHx8ICcpKSB7XG4gICAgICBsZXQgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVpdGhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihlaXRoZXJzW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIHtcbiAgICAgICAgICBkYXRhID0geDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGV4cC5pbmNsdWRlcygnICYmICcpKSB7XG4gICAgICBsZXQgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gYWxsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWxsW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIGRhdGEgPSB4O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGF0YSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UncmUgcmVzb2x2aW5nIGZyb20gbW9kZWwgYnV0IGRlZmF1bHRzIGhhdmVuJ3QgYmVlbiBhcHBsaWVkIHlldCwgcmVzb2x2ZSBmcm9tIGRlZmF1bHQgaXRzZWxmXG4gICAgaWYoIWRhdGEgJiYgZXhwLmluZGV4T2YoJ21vZGVsLicpID09PSAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBleHAucmVwbGFjZSgnbW9kZWwuJywgJycpO1xuICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgY29uc3QgY2FjaGVkRmllbGQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSB8fCBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZ2VuZXJpY0tleSk7XG5cbiAgICAgIGRhdGEgPSAoKCkgPT4ge1xuICAgICAgICBpZihjYWNoZWRGaWVsZCAmJiBjYWNoZWRGaWVsZC5kZWZhdWx0KVxuICAgICAgICAgIHJldHVybiBjYWNoZWRGaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSlcbiAgICAgICAgICByZXR1cm4gZmllbGQuZGVmYXVsdDtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoZ2VuZXJpY0tleSk7XG4gICAgICAgIGlmKHNjaGVtYSkgcmV0dXJuIHNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhUHJvcCA9IGV4cC5tYXRjaCgvc2NoZW1hXFwuZGF0YVxcLiguKykvKVsxXTtcbiAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKGBkYXRhOiR7ZGF0YVByb3B9OiR7ZGF0YS5jdXJzb3J9YCk7XG4gICAgICB9O1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgZmllbGQubG9hZE1vcmU7XG4gICAgfVxuIFxuICAgIGZpZWxkW2ZpZWxkUHJvcF0gPSAoZGF0YSAmJiBkYXRhLmRhdGEpID8gZGF0YS5kYXRhIDogZGF0YTtcblxuICAgIGlmKCFza2lwUHJvcEhhbmRsZXJzKSB7XG4gICAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT4gXG4gICAgICAgICAgcHJvcCA9PT0gZmllbGRQcm9wICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgbGV0IGZpZWxkS2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF0gfHwge307XG5cbiAgICBsZXQgcmVnaXN0ZXIgPSBzZXJ2aWNlLnJlc29sdmVSZWdpc3RlcltkYXRhUHJvcF07XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldID0gcmVnaXN0ZXJbZmllbGRLZXldIHx8IFtdO1xuICAgIHJlZ2lzdGVyW2ZpZWxkS2V5XS5wdXNoKHsgZmllbGQsIHByb3A6IGZpZWxkUHJvcCwgZXhwIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBfLmVhY2goZmllbGQuY29uZGl0aW9uYWxzLCAoY29uZGl0aW9uLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAodmFsLCBwcmV2KSA9PiB7XG4gICAgICAgIGZpZWxkW2tleV0gPSBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2VydmljZS5nZXRGcm9tU2NvcGVDYWNoZShzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnICYmIHNjb3BlKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighZmllbGQud2F0Y2gpIHJldHVybjtcblxuICAgIGxldCBzY2hlbWEgPSBmaWVsZC5zY2hlbWE7XG4gICAgZmllbGQud2F0Y2ggPSBfLmlzQXJyYXkoZmllbGQud2F0Y2gpID8gZmllbGQud2F0Y2ggOiBbZmllbGQud2F0Y2hdO1xuXG4gICAgXy5lYWNoKGZpZWxkLndhdGNoLCBmdW5jdGlvbih3YXRjaCkge1xuICAgICAgaWYod2F0Y2gucmVzb2x1dGlvbikge1xuICAgICAgICBsZXQgY29uZGl0aW9uID0gd2F0Y2guY29uZGl0aW9uO1xuICAgICAgICBsZXQgcmVzb2x1dGlvbiA9IHdhdGNoLnJlc29sdXRpb247XG4gICAgICAgIGxldCBoYW5kbGVyO1xuXG4gICAgICAgIGlmKF8uaXNGdW5jdGlvbihyZXNvbHV0aW9uKSkge1xuICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihjdXIsIHByZXYpIHtcbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIHJlc29sdXRpb24oY3VyLCBwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0ge307XG5cbiAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSByZXNvbHV0aW9uLm1hdGNoKC9cXCsgPyhcXGQrKSBkYXlzLyk7XG5cbiAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IGFkanVzdG1lbnQuZGF0ZVsxXTtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLnJlcGxhY2UoYWRqdXN0bWVudC5kYXRlLCAnJykudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkanVzdG1lbnQubWF0aCA9IHJlc29sdXRpb24ubWF0Y2goLyhcXCt8XFwtfFxcL3xcXCopID8oXFxTKykvKTtcblxuICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgIGFkanVzdG1lbnQub3BlcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgJysnOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAnLSc6ICdzdWJ0cmFjdCcsXG4gICAgICAgICAgICAgICAgJyonOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgICcvJzogJ2RpdmlkZSdcbiAgICAgICAgICAgICAgfVthZGp1c3RtZW50Lm1hdGhbMV1dO1xuXG4gICAgICAgICAgICAgIGFkanVzdG1lbnQuYWRqdXN0ZXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhZGp1c3RtZW50Lm1hdGhbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdXRpb24gPSByZXNvbHV0aW9uLm1hdGNoKC8oXFxTKykgPz0gPyhcXFMrKS8pO1xuXG4gICAgICAgICAgaGFuZGxlciA9ICh2YWwsIHByZXYsIGtleSwgdHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgbGV0IGN1ckNvbmRpdGlvbiA9IGNvbmRpdGlvbiAmJiByZXBsYWNlQXJyYXlJbmRleChjb25kaXRpb24sIGtleSk7XG4gICAgICAgICAgICBsZXQgdXBkYXRlUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMV0sIGtleSk7XG4gICAgICAgICAgICBsZXQgZnJvbVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzJdLCBrZXkpO1xuXG4gICAgICAgICAgICBsZXQgdXBkYXRlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24odXBkYXRlUGF0aCk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIGxvb3Agd2hlcmUgdHdvIHdhdGNoZXMga2VlcCB0cmlnZ2VyaW5nIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGlmKHRyaWdnZXIgPT09IHVwZGF0ZS5wYXRoKCkua2V5KSByZXR1cm47XG4gICAgICAgICAgICB0cmlnZ2VyID0gdXBkYXRlLnBhdGgoKS5rZXk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZnJvbVBhdGgpO1xuXG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY3VyQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICBpZihhZGp1c3RtZW50LmRhdGUpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KG1vbWVudChmcm9tLmdldCgpKS5hZGQoYWRqdXN0bWVudC5kYXRlLCAnZGF5cycpLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICAgIC8vdmFyIHJlc3VsdCA9IF9bYWRqdXN0bWVudC5vcGVyYXRvcl0oZnJvbS5nZXQoKSwgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgcmVzdWx0ID0gZXZhbChmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICRwYXJzZShmcm9tLmdldCgpICsgYWRqdXN0bWVudC5tYXRoWzFdICsgYWRqdXN0bWVudC5hZGp1c3Rlci5nZXQoKSkoKTtcbiAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEgfHwgZmllbGQuaXRlbXMgJiYgKGZpZWxkLml0ZW1zWzBdLnNjaGVtYSB8fCAoZmllbGQuaXRlbXNbMF0uaXRlbXMgJiYgZmllbGQuaXRlbXNbMF0uaXRlbXNbMF0uc2NoZW1hKSk7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQudHlwZSA9PT0gJ2NuLWN1cnJlbmN5Jykge1xuICAgICAgICAgICAgICAgICAgbGV0IHAgPSBzY2hlbWEgJiYgc2NoZW1hLmZvcm1hdCA9PT0gJ2N1cnJlbmN5LWRvbGxhcnMnID8gMiA6IDA7XG5cbiAgICAgICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uZmxvb3IocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5jZWlsKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5yb3VuZChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3NlcnZpY2UubGlzdGVuZXJzW3VwZGF0ZS5wYXRoKCkua2V5XS5wcmV2ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdKSB7XG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXS50cmlnZ2VyID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KHJlc3VsdCB8fCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUuc2V0KGZyb20uZ2V0KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEsIHdhdGNoLmluaXRpYWxpemUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgbGV0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmRpdGlvbi5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgbGV0IGV4cCA9IC9eX1xcLiguKj8pXFwoKC4qPyksW1xccyhdKiguKj8pXFwpP1xccyo9Plt7XFxzXSooPzpyZXR1cm4pPyguKj8pXFx9P1xcKSQvO1xuICAgICAgbGV0IFssIGZuLCBsaXN0LCBwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHldID0gY29uZGl0aW9uLm1hdGNoKGV4cCk7XG4gICAgICByZXR1cm4gX1tmbl0oJHBhcnNlKGxpc3QpKHNlcnZpY2UpLCBnZW5lcmF0ZVByZWRpY2F0ZShwcmVkaWNhdGVQYXJhbXMsIHByZWRpY2F0ZUJvZHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRwYXJzZShjb25kaXRpb24pKHNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZGljYXRlKHBhcmFtcywgYm9keSkge1xuICAgIHJldHVybiAoLi4uYXJncykgPT5cbiAgICAgICRwYXJzZShib2R5KShwYXJhbXNcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIsIGkpID0+IHsgYWNjW2N1cl0gPSBhcmdzW2ldOyByZXR1cm4gYWNjOyB9LCB7fSlcbiAgICAgICAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBpZiBmaWVsZCBpcyBwYXNzZWQgaW5zdGVhZCBvZiBrZXlcbiAgICBpZihfLmlzT2JqZWN0KGtleSkgJiYgIV8uaXNBcnJheShrZXkpKSB7XG4gICAgICBpZigha2V5LmtleSAmJiBrZXkuaXRlbXMpIHtcbiAgICAgICAgXy5lYWNoKGtleS5pdGVtcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBrZXkua2V5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oLiopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5yZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdLCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXIgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBfLmdldChzZXJ2aWNlLmdldFNjaGVtYShrZXkpLCAnZGVmYXVsdCcpO1xuXG4gICAgaWYoIXNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgIHZhciBwcmV2ID0gXy5pc1VuZGVmaW5lZChjdXIpID8gYW5ndWxhci5jb3B5KGRlZmF1bHRWYWx1ZSkgOiBhbmd1bGFyLmNvcHkoY3VyKTtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbXSxcbiAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWEsXG4gICAgICAgIHByZXY6IHByZXZcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoaGFuZGxlcikge1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XS5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihjdXIsIG51bGwsIGtleSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IG9uQXJyYXkgPSAoY3VyLCBwcmV2LCByZW9yZGVyKSA9PiB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYCR7YXJyS2V5fVske3ByZXYgLSAxfV0uJHtmaWVsZEtleX1gIDpcbiAgICAgICAgICBgJHthcnJLZXl9WyR7cHJldiAtIDF9XWA7XG5cbiAgICAgICAgLy8gb25seSBkZXJlZ2lzdGVyIGhhbmRsZXJzIG9uY2UgZWFjaCB0aW1lIGFuIGVsZW1lbnQgaXMgcmVtb3ZlZFxuICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1tsYXN0S2V5XSkge1xuICAgICAgICAgIGZvcihpID0gMCwgbCA9IHByZXY7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICAgICAgLy9ubyBuZWVkIHRvIGNhbGwgaWYganVzdCByZXJlZ2lzZXJpbmcgaGFuZGxlcnNcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjdXIgPiAocHJldiB8fCAwKSkge1xuICAgICAgICBmb3IoaSA9IHByZXYgfCAwLCBsID0gY3VyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICAgICAgYCR7YXJyS2V5fVske2l9XWA7XG5cbiAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCAoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWAgOlxuICAgICAgICBgJHthcnJLZXl9WyR7aX1dYDtcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGlzdGVuZXJLZXkgPSBgJHthcnJLZXl9Lmxlbmd0aGA7XG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbbGlzdGVuZXJLZXldLmhhbmRsZXJzLnB1c2gob25BcnJheSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1tsaXN0ZW5lcktleV0gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgICAvL2lmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIGRlbGV0ZSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFycktleSwgc2VydmljZS5tb2RlbCkuZ2V0KCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgZmllbGRLZXkgP1xuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dLiR7ZmllbGRLZXl9YCkgOlxuICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhgJHthcnJLZXl9WyR7aX1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kZWxXYXRjaCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2VydmljZS53YXRjaGluZykgcmV0dXJuO1xuICAgIGlmKHNlcnZpY2UubW9kZWxXYXRjaCkgc2VydmljZS5tb2RlbFdhdGNoKCk7XG5cbiAgICBzZXJ2aWNlLm1vZGVsV2F0Y2ggPSAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICgpID0+IHNlcnZpY2UubW9kZWwsXG4gICAgICBzZXJ2aWNlLm9uTW9kZWxXYXRjaC5iaW5kKHNlcnZpY2UpLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSkge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldikpO1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgaWYobGlzdGVuZXIpIHtcbiAgICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgICBjb25zdCBpc0luaXRBcnJheSA9IGFuZ3VsYXIuZXF1YWxzKHZhbCwgW10pICYmICFsaXN0ZW5lci5wcmV2O1xuICAgICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpICYmICFpc0luaXRBcnJheSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYsIGtleSwgbGlzdGVuZXIudHJpZ2dlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRyaWdnZXIgPSBudWxsO1xuICAgICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgXG4gICAgICAgICAgICAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmXG4gICAgICAgICAgICAhaXNJbml0QXJyYXkgJiZcbiAgICAgICAgICAgIHZhbCAhPT0gbnVsbC8qICYmXG4gICAgICAgICAgICAhYW5ndWxhci5lcXVhbHModmFsLCBzZXJ2aWNlLmdldERlZmF1bHQoa2V5KSkqLykge1xuICAgICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZighYW5ndWxhci5lcXVhbHMoc2VydmljZS5wYXJhbXMsIHNlcnZpY2UucHJldlBhcmFtcykpIHtcbiAgICAgICAgaWYoc2VydmljZS5tb2RlbC5pZCAmJiAhc2VydmljZS51cGRhdGVzICYmIF8uaXNFbXB0eShzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgICAgKytzZXJ2aWNlLnVwZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2VydmljZS5yZWZyZXNoU2NoZW1hKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2NoZW1hUGFyYW1zKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIGZ1bmN0aW9uKGxpc3RlbmVyLCBrZXkpIHtcbiAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihsaXN0ZW5lci51cGRhdGVTY2hlbWEgJiYgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICBzZXJ2aWNlLnBhcmFtc1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcEluZGV4ZXMoa2V5KSB7XG4gICAgcmV0dXJuIGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBcnJheUNvcHlXYXRjaCgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVGb3JtQ29udHJvbGxlcicsIChldmVudCwgc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IHsgZm9ybSB9ID0gc2NvcGU7XG4gICAgICBpZighZm9ybS5rZXkpIHtcbiAgICAgICAgZm9ybS5jYWNoZUtleSA9IGAke2Zvcm0udHlwZX0tJHtfLnVuaXF1ZUlkKCl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IGZvcm0uY2FjaGVLZXkgfHwgc2VydmljZS5nZXRLZXkoZm9ybS5rZXkpO1xuXG4gICAgICBpZihfLmlzTnVtYmVyKHNjb3BlLmFycmF5SW5kZXgpKSB7XG4gICAgICAgIGNvbnN0IGdlbmVyaWNLZXkgPSBzdHJpcEluZGV4ZXMoa2V5KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzY29wZS5hcnJheUluZGV4O1xuICAgICAgICBmb3JtLmFycmF5SW5kZXggPSBpbmRleDtcblxuICAgICAgICBpZighc2VydmljZS5nZXRBcnJheUNvcHkoZ2VuZXJpY0tleSwgaW5kZXgpKSB7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhmb3JtLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFmb3JtLmNvbmRpdGlvbikgZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uY29uZGl0aW9uLmluY2x1ZGVzKFwiYXJyYXlJbmRleFwiKSkge1xuICAgICAgICAgIGZvcm0uY29uZGl0aW9uID0gc2VydmljZS5yZXBsYWNlQXJyYXlJbmRleChmb3JtLmNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBjb25zdCB1bmluZGV4ZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG5cbiAgICAgIC8vIFRPRE8gLS0gbm90IHN1cmUgaWYgZ2V0QXJyYXlDb3BpZXNGb3IgaXMgYWN0dWFsbHkgbmVjZXNzYXJ5XG4gICAgICAvLyB3ZSBzaG91bGQgbG9vayBpbnRvIHdoZXJlIHRoaXMgZnVuY3Rpb24gbWlnaHQgYmUgbmVlZGVkIGFuZFxuICAgICAgLy8gcG90ZW50aWFsbHkgcmVtb3ZlIGl0XG4gICAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKHVuaW5kZXhlZEtleSk7XG4gICAgICBpZighY29waWVzLmxlbmd0aCkgY29waWVzLnB1c2goc2VydmljZS5nZXRBcnJheVNjb3Blcyh1bmluZGV4ZWRLZXkpIHx8IFtdKTtcblxuICAgICAgY29waWVzLmZvckVhY2goKGxpc3QpID0+IGxpc3QgJiYgbGlzdC5zcGxpY2Uoc2NvcGUuYXJyYXlJbmRleCwgMSkpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgdmFyIGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXG4gICAgaWYoIV8uaXNTdHJpbmcoZXhwKSAmJiAhXy5pc0FycmF5KGV4cCkpIHtcbiAgICAgIHJldHVybiB7IGdldDogKCkgPT4gZXhwIH07XG4gICAgfVxuXG4gICAgLy8gaWYgZXhwcmVzc2lvbiBpcyBzcGVjaWZpYyB2YWx1ZVxuICAgIGlmKC9eKG51bGx8ZmFsc2V8dHJ1ZXx1bmRlZmluZWR8J1teXFwnXSonfFwiW15cXFwiXSpcInwtP1swLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBjb25zdCBpc1N0ciA9IGV4cC5tYXRjaCgvXCIoW15cXFwiXSopXCIvKSB8fCBleHAubWF0Y2goLycoW15cXCddKiknLyk7XG4gICAgICAgICAgaWYoaXNTdHIpIHJldHVybiBpc1N0clsxXTtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbiB9ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZihub0NvbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKC9eXFxkPyQvLnRlc3QocGF0aFswXSkpIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvYmo6IHN0YXJ0LFxuICAgICAgICAgIGtleTogcGF0aFswXSxcbiAgICAgICAgICBwYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcyksXG4gICAgICAgICAgZnVsbFBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzLmNvbmNhdChwYXRoLnNsaWNlKDAsIDEpKSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIHNldCh2YWwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgaWYodmFsID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGxldCB7IG9iaiwga2V5IH0gPSB0aGlzLmdldEFzc2lnbmFibGUoeyBub0NvbnN0cnVjdGlvbjogdHJ1ZSB9KSB8fCB7fTtcbiAgICAgICAgICBpZihvYmopIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHsgb2JqLCBrZXkgfSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgc2VydmljZS5zaWxlbmNlTGlzdGVuZXJzKHJlc29sdmVkLCBkZXB0aCk7XG4gICAgICAgICAgc2VydmljZS5za2lwRGVmYXVsdHMocmVzb2x2ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lsZW5jZUxpc3RlbmVycyhrZXlTdGFydCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICBpZihrZXkuaW5kZXhPZihrZXlTdGFydCkgPT09IDApIHtcbiAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIGRlcHRoKS5nZXQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPIC0tIGV4dGVuZCB0aGlzIHRvIHN1cHBvcnQgbmVzdGVkIGFycmF5IGtleXNcbiAgLy8gZS5nLiBcImNyZWF0aXZlWzFdLmNoaWxkQXR0YWNobWVudHNbMF0uY2FsbFRvQWN0aW9uXCJcbiAgZnVuY3Rpb24gc2tpcERlZmF1bHRzKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgaW5kZXggPSBrZXlTdGFydC5tYXRjaCgvXFxbXFxkKlxcXS8pID8gZ2V0QXJyYXlJbmRleChrZXlTdGFydCkgOiBudWxsO1xuICAgIGNvbnN0IGtzID0gc3RyaXBJbmRleGVzKGtleVN0YXJ0KTtcbiAgICBfLmVhY2goc2VydmljZS5mb3JtQ2FjaGUsIChmb3JtLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChrcykpIHtcbiAgICAgICAgY29uc3QgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGluZGV4KTsgXG4gICAgICAgIHNlcnZpY2Uuc2tpcERlZmF1bHRbaW5kZXhlZEtleV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uLCBzZWNvbmRQYXNzKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIGlmIHdlJ3JlIGhlcmUgYmVjYXVzZSBhIHBhcmVudCdzIHNjb3BlIHdhcyBlbWl0dGVkLCBcbiAgICAvLyBzY29wZSBmb3IgdGhpcyBzZWN0aW9uIHdpbGwgc29vbiBiZSBlbWl0dGVkLCBzbyBjYW4gc2tpcFxuICAgIGlmKHNlY29uZFBhc3MpIHJldHVybjsgXG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgXy5lYWNoKGZpZWxkLmRhdGEsIGZ1bmN0aW9uKGRhdGFQcm9wLCBrZXkpIHtcbiAgICAgIGZpZWxkLmRhdGFba2V5XSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGRhdGFQcm9wKS5nZXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDc3ZVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jc3Z1cGxvYWQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvcyhmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmFkaW9zJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb2J1dHRvbnMocmFkaW9zKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJhZGlvcy50eXBlID0gJ2NuLXJhZGlvYnV0dG9ucyc7XG4gICAgaWYocmFkaW9zLmZ1bGxXaWR0aCkge1xuICAgICAgcmFkaW9zLmJ0bkNsYXNzID0gJ2NvbC1zbS0nICsgXy5kaXZpZGUoMTIsIHJhZGlvcy50aXRsZU1hcC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEYXRlKGRhdGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGF0ZS50eXBlID0gJ2NuLWRhdGV0aW1lcGlja2VyJztcblxuICAgIGlmKGRhdGUuc2NoZW1hLmZvcm1hdCA9PT0gJ3RpbWUtbWludXRlcycpIHtcbiAgICAgIGRhdGUubWF4VmlldyA9ICdob3VyJztcbiAgICAgIGRhdGUuaWNvbkNsYXNzID0gJ2ZhIGZhLWNsb2NrLW8nO1xuXG4gICAgICBkYXRlLm1vZGVsRm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtID0gbW9tZW50KHZhbCk7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkobS5ob3VycygpLCA2MCksIG0ubWludXRlcygpKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUubW9kZWxQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGQgPSBwYXJzZUludCh2YWwpO1xuICAgICAgICBsZXQgaG91cnMgPSBfLmZsb29yKGQgLyA2MCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZCAlIDYwO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoKS5zdGFydE9mKCdkYXknKS5hZGQoJ2hvdXJzJywgaG91cnMpLmFkZCgnbWludXRlcycsIG1pbnV0ZXMpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3Rm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBkYXRlLm1vZGVsUGFyc2VyKHZhbCkuZm9ybWF0KGRhdGUuZGF0ZUZvcm1hdCk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1hdGNoID0gdmFsLm1hdGNoKC9eKFxcZHsxLDJ9KTo/KFxcZHsxLDJ9KT8gKGF8cCkvKTtcbiAgICAgICAgaWYoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhvdXJzID0gXy5hZGQobWF0Y2hbMV0gPT09ICcxMicgPyAwIDogbWF0Y2hbMV0sIG1hdGNoWzNdID09PSAnYScgPyAwIDogMTIpO1xuICAgICAgICBsZXQgbWludXRlcyA9IG1hdGNoWzJdIHx8ICcwMCc7XG5cbiAgICAgICAgaWYobWludXRlcy5sZW5ndGggPT09IDEpIG1pbnV0ZXMgKz0gJzAnO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KGhvdXJzLCA2MCksIG1pbnV0ZXMpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCkge1xuICAgIGxldCBpc0FycmF5ID0gc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JztcbiAgICByZXR1cm4gc2VsZWN0LnZhbHVlUHJvcGVydHkgfHxcbiAgICAgIChpc0FycmF5ID8gc2VsZWN0LnNjaGVtYS5pdGVtcy50eXBlIDogc2VsZWN0LnNjaGVtYS50eXBlKSAhPT0gJ29iamVjdCcgJiYgJ3ZhbHVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgdGl0bGVNYXApIHtcbiAgICB0aXRsZU1hcCA9IHRpdGxlTWFwIHx8IHNlbGVjdC5nZXRUaXRsZU1hcCgpO1xuICAgIGxldCB2YWxQcm9wID0gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpO1xuICAgIGlmKCF2YWxQcm9wKSByZXR1cm47XG5cbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgbWFwVmFsID0gdmFsLm1hcCh4ID0+IF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogeH0pKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICByZXR1cm4gbWFwVmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHZhbH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSB1c2UgY29ycmVjdCB2YWx1ZVxuICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZvcm0ua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgbW9kZWxWYWx1ZS5nZXQoKSk7XG4gICAgICAgICAgaWYobmV3VmFsICE9PSB1bmRlZmluZWQpIHNldHRlcihuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFF1ZXJ5KSB7XG4gICAgICB2YXIga2V5ID0gc2VsZWN0LnRpdGxlTWFwUXVlcnkucGFyYW1zLnE7XG4gICAgICBzZWxlY3QudGl0bGVRdWVyeSA9IGZ1bmN0aW9uKHEpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgICBpZihrZXkpIHtcbiAgICAgICAgICBwYXJhbXNba2V5XSA9IHE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFwaS5nZXQoe1xuICAgICAgICAgIHVybDogc2VsZWN0LnRpdGxlTWFwUXVlcnkudXJsLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgLy8gd3JhcCBpbiBzdHJpbmcgc28gcmV0dXJucyB0cnV0aHkgd2hlbiBjb21waWxlZCwgYnV0IGNvbnZlcnRlZCB0byBudW1iZXIgd2l0aGluIGRpcmVjdGl2ZVxuICAgICAgaWYoIWtleSkgc2VsZWN0Lm1pbkxvb2t1cCA9ICcwJztcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIHNldHRlcih2YWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKHNjaGVtYS5pdGVtcykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW107XG4gICAgICBfLmVhY2goc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMsIGZ1bmN0aW9uKHNjaGVtYSwga2V5KSB7XG4gICAgICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHNjaGVtYS5kZWZhdWx0KSkge1xuICAgICAgICAgIGRlZmF1bHRzLnB1c2goe1xuICAgICAgICAgICAgXCJrZXlcIjoga2V5LFxuICAgICAgICAgICAgZGVmYXVsdDogc2NoZW1hLmRlZmF1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihkZWZhdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Lm9uQWRkID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCkge1xuICAgICAgICAgIGlmKHZhbC52YWx1ZSAmJiBldmVudCA9PT0gJ3RhZy1hZGRlZCcpIHtcbiAgICAgICAgICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgICBpZighdmFsLnZhbHVlW3Byb3Aua2V5XSkgdmFsLnZhbHVlW3Byb3Aua2V5XSA9IHByb3AuZGVmYXVsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3QuaXRlbXMgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBpdGVtczogc2VsZWN0Lml0ZW1zXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZHNldChzZWxlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTsgXG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHZhciBmb3JtID0gc2VydmljZS5mb3JtQ3RybCAmJiBzZXJ2aWNlLmZvcm1DdHJsW3NlcnZpY2UuZ2V0S2V5KHNlbGVjdC5rZXkpXTtcbiAgICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLFxuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmKHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH1cblxuICAgIHNlbGVjdERpc3BsYXkuc2VsZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdEZpZWxkLmtleSwgaGFuZGxlciwgc2VsZWN0RmllbGQudXBkYXRlU2NoZW1hLCB0cnVlKTtcbiAgICAvL3NlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UoZnVuY3Rpb24odXBkYXRlU2NoZW1hKSB7XG4gICAgICB2YXIgcGFyYW1zID0gXy5leHRlbmQoY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpLCBzZXJ2aWNlLnBhcmFtcyk7XG4gICAgICB2YXIgZGlmZiA9IGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKTtcbiAgICAgIHZhciBrZXlzO1xuXG4gICAgICBpZihkaWZmIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgJ3VwZGF0ZVNjaGVtYScpKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKVxuICAgICAgICAudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdmZlJlZnJlc2hEYXRhJywgc2VydmljZS5yZWZyZXNoRGF0YSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNjaGVtYS5kaWZmKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXMgPSBzY2hlbWEucGFyYW1zO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5kYXRhKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6ZGF0YScsIHNjaGVtYS5kaWZmLmRhdGEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZGF0YSwgKGRhdGEsIHByb3ApID0+IHtcbiAgICAgICAgICBpZihkYXRhICYmIGRhdGEuZGF0YSAmJiAhXy5pc0VtcHR5KHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YSkgJiYgIWRhdGEucmVzZXQpIHtcbiAgICAgICAgICAgIGRhdGEuZGF0YSA9IHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0uZGF0YS5jb25jYXQoZGF0YS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXSA9IGRhdGE7XG4gICAgICAgICAgaWYoc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIF8uZWFjaChzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSwgKHJlZ2lzdGVycykgPT4ge1xuICAgICAgICAgICAgICByZWdpc3RlcnMuZm9yRWFjaChyZWdpc3RlciA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKHJlZ2lzdGVyLmZpZWxkLCByZWdpc3Rlci5wcm9wLCByZWdpc3Rlci5leHApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllc1trZXldID0gc2NoZW1hO1xuICAgICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgKGZvcm0sIGtleSkgPT4ge1xuXG4gICAgICAgICAgaWYoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcbiAgICAgICAgICBcbiAgICAgICAgICBfLmVhY2goXG4gICAgICAgICAgICBzZXJ2aWNlLmdldEZvcm1zVG9Qcm9jZXNzKGtleSksXG4gICAgICAgICAgICAoY29weSkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIF8uZWFjaChrZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgXy5lYWNoKFxuICAgICAgICAgICAgc2VydmljZS5nZXRGb3Jtc1RvUHJvY2VzcyhrZXkpLFxuICAgICAgICAgICAgKGNvcHkpID0+IGNvcHkgJiYgc2VydmljZS5wcm9jZXNzRmllbGQoY29weSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZvcm1zVG9Qcm9jZXNzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IFsgLCBhcnJheUluZGV4IF0gPSBrZXkubWF0Y2goL1xcWyhcXGQpK10vKSB8fCBbXTtcbiAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleS5yZXBsYWNlKC9cXFtcXGQrXS9nLCAnW10nKSk7XG4gICAgaWYoXy5pc1VuZGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICByZXR1cm4gWyBjYWNoZWQsIC4uLmNvcGllcyBdO1xuICAgIH1cbiAgICByZXR1cm4gWyBjb3BpZXNbYXJyYXlJbmRleF0gXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGN1cnJlbnQua2V5KTtcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmKCF1cGRhdGVbcHJvcF0pIHtcbiAgICAgICAgZGVsZXRlIGN1cnJlbnRbcHJvcF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gZ2V0T2dLZXlzKHVwZGF0ZSk7XG5cbiAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuXG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCBrZXkpO1xuXG4gICAgLy8gd2h5IGRvIHdlIHJlZHJhdz8gSWYgd2UncmUgZG9pbmcgaXQgdG8gc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgLy8gdGhhdCBoYXMgYmVlbiBhZGRyZXNzZWQgZnJvbSB0aGUgYW5ndWxhci1zY2hlbWEtZm9ybSBsaWJyYXJ5XG4gICAgLy8gaWYgdGhlcmUncyBhbm90aGVyIGlzc3VlLCB0cnkgdHJpZ2dlcmluZyB0aGUgc3BlY2lmaWMgYWN0aW9uIHJlcXVpcmVkXG4gICAgLy8gaW5zdGVhZCBvZiByZWRyYXdpbmcgdGhlIHdob2xlIGZvcm1cbiAgICBpZihyZWRyYXcgJiYgY3VycmVudC5yZWRyYXcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUT0RPOiBzZWUgaWYgdGhpcyBjYW4gYmUgcmVtb3ZlZCcpOyBcbiAgICAgIGN1cnJlbnQucmVkcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG90S2V5KGtleSkge1xuICAgIHJldHVybiAoXy5pc1N0cmluZyhrZXkpID8gT2JqZWN0UGF0aC5wYXJzZShrZXkpIDoga2V5KS5qb2luKCcuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEVycm9yKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZ2V0RG90S2V5KGZpZWxkLmtleSksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgd2hpbGUocmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSB7XG4gICAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICAgIGNvbnN0IGFycmF5SW5kZXhLZXkgPSAvKFteLltdKilcXFthcnJheUluZGV4XFxdLy5leGVjKHJlc29sdmUpO1xuICAgICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgICAgaWYoIWluZGV4KSByZXR1cm4gcmVzb2x2ZTtcbiAgICAgIHJlc29sdmUgPSByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gL1xcWyhcXGQrKVxcXS8uZXhlYyhrZXkpWzFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5Q29weTtcbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHZhciBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4O1xuXG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2JqZWN0cGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1vZGFsTWFwID0ge307XG5jb25zdCBwcm9taXNlTWFwID0ge307XG5cbmZ1bmN0aW9uIGdldFByb21pc2VzKHN0YXRlKSB7XG4gIGlmKHByb21pc2VNYXBbc3RhdGVdKSByZXR1cm4gcHJvbWlzZU1hcFtzdGF0ZV07XG5cbiAgY29uc3QgcHJvbWlzZSA9IHt9O1xuICBwcm9taXNlTWFwW3N0YXRlXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBnZXRQcm9taXNlcyhzdGF0ZSk7XG4gIGlmKHByb21pc2VzW2lkXSkgcmV0dXJuIHByb21pc2VzW2lkXTtcblxuICBjb25zdCBwcm9taXNlID0gJHEuZGVmZXIoKTtcbiAgcHJvbWlzZXNbaWRdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlcigpIHtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hcHBpbmcsXG4gICAgJGdldDogY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFkZE1hcHBpbmcoc3RhdGUsIGRlZikge1xuICAgIGRlZi5yZXNvbHZlID0geyBwYXJlbnQgfTtcbiAgICBtb2RhbE1hcFtzdGF0ZV0gPSBkZWY7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJlbnQoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiZnVuY3Rpb24gRmxleEZvcm1Nb2RhbExvYWRlcihGbGV4Rm9ybU1vZGFsLCAkc3RhdGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcykge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICBhY3RpdmF0ZSgpO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBGbGV4Rm9ybU1vZGFsXG4gICAgICAub3Blbih2bSlcbiAgICAgIC50aGVuKCh7IG1vZGFsLCBvcHRpb25zOiB7IG9uRGlzbWlzcywgb25BZnRlckRpc21pc3MgfSB9KSA9PiB7XG4gICAgICAgIHZtLm1vZGFsID0gbW9kYWw7XG4gICAgICAgIHZtLm1vZGFsLnJlc3VsdC5maW5hbGx5KGdvQmFjayk7XG5cbiAgICAgICAgaWYob25EaXNtaXNzKSB2bS5tb2RhbC5yZXN1bHQuY2F0Y2goKCkgPT4gb25EaXNtaXNzKCRzdGF0ZVBhcmFtcy5yZXN0UGFyYW1zKSk7XG4gICAgICAgIHZtLmRpc21pc3NFdmVudCA9ICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGRpc21pc3NNb2RhbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBpZighJHN0YXRlLnRyYW5zaXRpb24pIHtcbiAgICAgICRzdGF0ZS5nbygnXicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc21pc3NNb2RhbCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGlzbWlzc01vZGFsJyk7XG4gICAgLy8gdW5iaW5kIGV2ZW50XG4gICAgdm0uZGlzbWlzc0V2ZW50KCk7XG4gICAgdm0ubW9kYWwuZGlzbWlzcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG4gIFxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnMgXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gICAgLy8uZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpO1xuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBuZy1pZj1cInZtLnNob3dGb3JtKClcIj5cbiAgICAgICAgPG5nLWZvcm0gXG4gICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiXG4gICAgICAgICAgbmFtZT1cInt7dm0uZm9ybU5hbWV9fVwiXG4gICAgICAgICAgc2Ytc2NoZW1hPVwidm0uY29uZmlnLnNjaGVtYS5zY2hlbWFcIlxuICAgICAgICAgIHNmLWZvcm09XCJ2bS5mb3JtXCJcbiAgICAgICAgICBzZi1tb2RlbD1cInZtLm1vZGVsXCI+XG4gICAgICAgIDwvbmctZm9ybT5cbiAgICAgICAgPCEtLSBkZWJ1ZyBwYW5lbCB0byBkaXNwbGF5IG1vZGVsIC0tPlxuICAgICAgICA8c2VjdGlvbiBuZy1pZj1cInZtLmRlYnVnXCI+XG4gICAgICAgICAgPGpzb24tZXhwbG9yZXIganNvbi1kYXRhPVwidm0ubW9kZWwgfHwgJy4uLm1vZGVsIG5vdCBsb2FkZWQgeWV0J1wiLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmQ29uZmlnJyxcbiAgICAgIG1vZGVsOiAnPWZmTW9kZWwnLFxuICAgICAgZm9ybUluZGV4OiAnPWZmRm9ybUluZGV4JyxcbiAgICAgIGZvcm1OYW1lOiAnPWZmRm9ybU5hbWUnLFxuICAgICAgZGVsYXlGb3JtOiAnPWZmRGVsYXlGb3JtJyxcbiAgICAgIGNsZWFudXBFdmVudDogJz1mZkNsZWFudXBFdmVudCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtKGNuRmxleEZvcm1TZXJ2aWNlLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gdm0uY29uZmlnLnNjaGVtYTsgfSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIGlmKGFuZ3VsYXIuaXNOdW1iZXIodm0uZm9ybUluZGV4KSkge1xuICAgICAgdm0uZm9ybSA9IHZtLmNvbmZpZy5zY2hlbWEuZm9ybXNbdm0uZm9ybUluZGV4XS5mb3JtO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm07XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBpZigkbG9jYXRpb24uc2VhcmNoKCkuZGVidWcpIHtcbiAgICAgIHZtLmRlYnVnID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKGN1ciwgcHJldikge1xuICAgIGlmKHZtLmZvcm0pIHtcbiAgICAgIGlmKCF2bS5zZXJ2aWNlKSB7XG4gICAgICAgIHZtLnNlcnZpY2UgPSBjbkZsZXhGb3JtU2VydmljZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCwge1xuICAgICAgICAgIGZvcm1DdHJsOiB2bS5jb25maWcuZm9ybUN0cmwsXG4gICAgICAgICAgZ2V0U2NoZW1hOiB2bS5jb25maWcuZ2V0U2NoZW1hLFxuICAgICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTonLCB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKSk7XG4gICAgICAgIHZtLnNlcnZpY2UuY29tcGlsZSh2bS5jb25maWcuc2NoZW1hLCB2bS5tb2RlbCk7XG4gICAgICB9XG4gICAgICAvLyRzY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtUmVkcmF3Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgcmV0dXJuICF2bS5kZWxheUZvcm0gJiYgdm0uc2VydmljZSAmJiB2bS5zZXJ2aWNlLmlzQ29tcGlsZWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShzY2hlbWEpIHtcbiAgICB2bS5jb25maWcuc2NoZW1hID0gc2NoZW1hO1xuICAgIHZtLmFjdGl2YXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIF8uZWFjaCh2bS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICAgIHZtLnNlcnZpY2UuY2xlYW51cCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNuRmxleEZvcm1IZWFkZXIoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY29uZmlnOiAnPWZmSGVhZGVyQ29uZmlnJyxcbiAgICAgIHN1Ym1pdDogJyZmZlN1Ym1pdCcsXG4gICAgICBsb2FkT2Zmc2NyZWVuOiAnJmZmTG9hZE9mZnNjcmVlbidcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IEZsZXhGb3JtSGVhZGVyLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLmxlYWRcIj57ezo6dm0udGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0udGl0bGUuaWNvblwiIGNsYXNzPVwie3t2bS50aXRsZS5pY29ufX1cIi8+XG4gICAgICAgICAgICB7e3ZtLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0udGl0bGUuc3ViXCI+e3s6OnZtLnRpdGxlLnN1Yn19PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7e3ZtLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0ucmV0dXJuU3R5bGUgPyB2bS5yZXR1cm5TdHlsZSA6ICdkZWZhdWx0LWRhcmsnXCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0ucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0ucmV0dXJuU3RhdGV9fVwiPlxuICAgICAgICAgICAgICB7e3ZtLnJldHVyblRleHQgfHwgJ0NhbmNlbCd9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXt7dm0uY2xvc2VCdXR0b24uc3R5bGUgPyB2bS5jbG9zZUJ1dHRvbi5zdHlsZSA6ICdkZWZhdWx0LWRhcmsnfX1cIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLmNsb3NlQnV0dG9uLmhhbmRsZXIoKVwiPlxuICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XCJidXR0b24gaW4gdm0uYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uYWN0aW9ucy5sZW5ndGggLSAxID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tZGVmYXVsdC1kYXJrJyl9fVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKGJ1dHRvbilcIlxuICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBidXR0b24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcD1cInt7YnV0dG9uLmhlbHB0ZXh0fX1cIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwiYnV0dG9uLnRleHQgfHwgJ1NhdmUnXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX0gZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nLXNob3c9XCJidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctaWY9XCJidXR0b24ub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIG5nLXJlcGVhdD1cIm9wdGlvbiBpbiBidXR0b24ub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ2bS5pc0Rpc2FibGVkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IG9wdGlvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJvcHRpb24udGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRhdGEtdXBkYXRlZC1hdCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICBpZD1cImRhdGEtdXBkYXRlZC1hdFwiXG4gICAgICAgICAgICAgbmctaGlkZT1cInZtLmNvbmZpZy5ub0RhdGFcIj5cbiAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0udXBkYXRlRGF0YSgpXCI+VXBkYXRlIERhdGE8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5gXG4gIH07XG59XG5cbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGNvbnN0IHZtID0gdGhpcztcblxuICB2bS51cGRhdGVEYXRhID0gdXBkYXRlRGF0YTtcbiAgdm0uaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgKHsgdGl0bGU6IHZtLnRpdGxlIH0gPSB2bS5jb25maWcpO1xuICAgICh7XG4gICAgICByZXR1cm5TdGF0ZTogdm0ucmV0dXJuU3RhdGUsXG4gICAgICByZXR1cm5TdHlsZTogdm0ucmV0dXJuU3R5bGUsXG4gICAgICByZXR1cm5UZXh0OiB2bS5yZXR1cm5UZXh0LFxuICAgICAgY2xvc2VCdXR0b246IHZtLmNsb3NlQnV0dG9uLFxuICAgICAgYWN0aW9uczogdm0uYWN0aW9uc1xuICAgIH0gPSB2bS5jb25maWcuYWN0aW9uQ29uZmlnIHx8IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZURhdGE6JywgdXBkYXRlRGF0YSk7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICAvL2NvbnNvbGUubG9nKCckc2NvcGUsIG5nTW9kZWw6JywgJHNjb3BlLmZvcm0sIG5nTW9kZWwpO1xuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=