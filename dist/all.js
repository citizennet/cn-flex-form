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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-autocomplete-detailed.html', '\n      <div sf-array="form"\n           class="form-group {{form.htmlClass}}"\n           ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\n        <label class="control-label"\n               for="{{form.key.join(\'.\')}}-input"\n               ng-show="showTitle()">{{form.title}}</label>\n        <ol class="list-group cn-autocomplete-list"\n            ng-show="modelArray.length"\n            ng-model="modelArray">\n          <li class="list-group-item {{form.fieldHtmlClass}}"\n              ng-repeat="item in modelArray track by $index">\n            <button ng-hide="form.readonly || form.remove === null"\n                    ng-click="deleteFromArray($index)"\n                    type="button" class="close pull-right">\n              <span aria-hidden="true">&times;</span>\n            </button>\n            <sf-decorator ng-init="arrayIndex = $index" form="copyWithIndex($index)"/>\n          </li>\n        </ol>\n        ' + sharedAutocompleteTpl + '\n        <span class="help-block" sf-message="form.description"></span>\n      </div>');
	
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
	  handler: function handler(field, service) {
	    return service.processFieldType(field);
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
	    setupSchemaRefresh: setupSchemaRefresh
	  };
	
	  function CNFlexFormConstructor(schema, model, config) {
	    var service;
	    if (services.length) {
	      for (var i = 0, l = services.length; i < l; i++) {
	        if (services[i].model === model) {
	          service = services[i];
	          service.compile(schema, model, config);
	          break;
	        }
	      }
	    }
	    if (!service) {
	      service = new CNFlexForm(schema, model, config);
	      services.push(service);
	    }
	    return service || new CNFlexForm(schema, model, config);
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
	  _.extend(CNFlexFormConstructor, prototype);
	
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
	    if (service.updates || field.default) {
	      if (key.includes && key.includes('[]')) return;
	      var model = service.parseExpression(field.key, service.model);
	      var modelValue = model.get();
	      // if there's an existing default and it's the same as the current value
	      // update the current value to the new default
	      if (_.isTrulyEmpty(modelValue) || _.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key])) {
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
	      fieldset.htmlClass = 'borderless';
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
	
	  function processFieldType(field) {
	    var service = this;
	    var fieldType = cnFlexFormTypes.getFieldType(field);
	    var handler = fieldTypeHandlers[fieldType];
	    if (_.isString(handler)) {
	      service[handler](field);
	    } else if (_.isFunction(handler)) {
	      handler.call(service, field);
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
	
	  function processFieldProps(field) {
	    var service = this;
	    fieldPropHandlers.forEach(function (_ref) {
	      var prop = _ref.prop,
	          handler = _ref.handler;
	      return _.has(field, prop) && handler(field, service);
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
	    field[fieldProp] = data && data.data ? data.data : data;
	    console.log(':: resolve ::', fieldProp, data);
	
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
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
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
	    var arrMatch = key.match(/([^[\]]*)\[]\.?(.*)/);
	
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
	        var lastKey = fieldKey ? arrKey + '[' + (prev - 1) + ']' + '.' + fieldKey : arrKey + '[' + (prev - 1) + ']';
	
	        // only deregister handlers once each time an element is removed
	        if (service.listeners[lastKey]) {
	          for (i = 0, l = prev; i < l; i++) {
	            key = fieldKey ? arrKey + '[' + i + ']' + '.' + fieldKey : arrKey + '[' + i + ']';
	
	            service.deregisterHandlers(key);
	          }
	        }
	        for (i = 0, l = cur; i < l; i++) {
	          key = fieldKey ? arrKey + '[' + i + ']' + '.' + fieldKey : arrKey + '[' + i + ']';
	
	          service.registerHandler(key, handler, updateSchema);
	          //no need to call if just reregisering handlers
	          //if(runHandler) handler(null, null, key);
	        }
	      } else if (cur > (prev || 0)) {
	        for (i = prev | 0, l = cur; i < l; i++) {
	          key = fieldKey ? arrKey + '[' + i + ']' + '.' + fieldKey : arrKey + '[' + i + ']';
	
	          service.registerHandler(key, handler, updateSchema, runHandler);
	          //if(runHandler) handler(null, null, key);
	        }
	      }
	    };
	
	    var arrVal = service.parseExpression(arrKey, service.model).get();
	    _.each(arrVal, function (field, i) {
	      var key = fieldKey ? arrKey + '[' + i + ']' + '.' + fieldKey : arrKey + '[' + i + ']';
	
	      service.registerHandler(key, handler, updateSchema);
	      if (runHandler) handler(null, null, key);
	    });
	
	    if (service.arrayListeners[arrKey + '.length']) {
	      service.arrayListeners[arrKey + '.length'].handlers.push(onArray);
	    } else {
	      service.arrayListeners[arrKey + '.length'] = {
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
	          service.processFieldProps(form);
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
	
	    if (!_.isString(exp)) {
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
	        var resolved = service.resolveNestedExpressions(exp, depth);
	        var path = ObjectPath.parse(resolved);
	        var assignable = this.getAssignable();
	        if (val === 'remove') {
	          delete assignable.obj[assignable.key];
	        } else {
	          assignable.obj[assignable.key] = val;
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
	
	  function processSection(section) {
	    var service = this;
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
	
	      if (!select.onInit) {
	        select.onInit = function (val, form, event, setter) {
	          // make sure we use correct value
	          var modelValue = service.parseExpression(form.key, service.model);
	          if (event === 'tag-init') {
	            var newVal = getAllowedSelectValue(select, modelValue.get());
	            if (newVal !== undefined) setter(newVal);
	          }
	        };
	      }
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
	    if (!resolve.includes('arrayIndex')) return resolve;
	    if (_.isNumber(key)) return resolve.replace(/arrayIndex/g, key);
	    var arrayIndexKey = /([^.[]*)\[arrayIndex\]/.exec(resolve);
	    var re = new RegExp(arrayIndexKey[1] + '\\[(-?\\d+)\\]');
	    var index = re.exec(key);
	    if (!index) return resolve;
	    return resolve.replace(new RegExp(arrayIndexKey[0].replace(/(\[|\])/g, '\\$1'), 'g'), index[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZTExMTdhOWE4MjIwY2I4NGVkMCIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiaWdub3JlUGFyYW1zIiwiYWRkSWdub3JlUGFyYW0iLCIkZ2V0IiwiY25GbGV4Rm9ybUNvbmZpZyIsInBhcmFtIiwicHVzaCIsIiRzdGF0ZVBhcmFtcyIsImdldFN0YXRlUGFyYW1zIiwiXyIsImNoYWluIiwib21pdCIsInYiLCJpc1VuZGVmaW5lZCIsImlzTnVsbCIsInZhbHVlIiwiY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIiLCJmaWVsZFR5cGVSZWdpc3RlciIsImNvbmRpdGlvbiIsImZpZWxkIiwidHlwZSIsImluY2x1ZGVzIiwidGl0bGVNYXAiLCJ0aXRsZU1hcFJlc29sdmUiLCJ0aXRsZU1hcFF1ZXJ5Iiwic2NoZW1hIiwiZm9ybWF0IiwicmVnaXN0ZXJGaWVsZFR5cGUiLCJjbkZsZXhGb3JtVHlwZXMiLCJmaWVsZFR5cGUiLCJ1bnNoaWZ0IiwiZ2V0RmllbGRUeXBlIiwiaSIsImwiLCJsZW5ndGgiLCJjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImFkZFN0YXRlcyIsInBlcm1pc3Npb25zIiwic2hhcmVkIiwiY29udHJvbGxlckFzIiwic3RhdGUiLCJ1cmwiLCJjbkZsZXhGb3JtUm91dGVzIiwidGVtcGxhdGVVcmwiLCJzY2hlbWFGb3JtQ29uZmlnIiwiY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciIsInR2NCIsImFkZEZvcm1hdCIsImlzU3RyaW5nIiwiZGF0YSIsInRlc3QiLCJleHRlbnNpb25zIiwiZWFjaCIsImV4dGVuc2lvbiIsInJlZ2lzdGVyRmllbGQiLCJhZGRUZW1wbGF0ZXMiLCIkdGVtcGxhdGVDYWNoZSIsInB1dCIsInNoYXJlZEF1dG9jb21wbGV0ZVRwbCIsIndpbmRvdyIsInJlcXVpcmUiLCJPYmplY3RQYXRoIiwiZmllbGRUeXBlSGFuZGxlcnMiLCJmaWVsZFByb3BIYW5kbGVycyIsInByb3AiLCJoYW5kbGVyIiwic2VydmljZSIsInByb2Nlc3NTZWxlY3REaXNwbGF5IiwicHJvY2Vzc1Jlc29sdmUiLCJ3YXRjaCIsInByb2Nlc3NGaWVsZFdhdGNoIiwicHJvY2Vzc0ZpZWxkVHlwZSIsInByb2Nlc3NDb25kaXRpb25hbCIsInByb2Nlc3NEZWZhdWx0IiwiZGVmYXVsdCIsInJlZ2lzdGVySGFuZGxlciIsInVwZGF0ZVNjaGVtYSIsInNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIiLCJDTkZsZXhGb3JtU2VydmljZSIsImFkZE1hcHBpbmciLCJjcmVhdGVEaXJlY3RpdmUiLCJBcGkiLCIkcGFyc2UiLCJzZlBhdGgiLCIkaW50ZXJwb2xhdGUiLCIkcm9vdFNjb3BlIiwiJHRpbWVvdXQiLCJjblV0aWwiLCJzZXJ2aWNlcyIsInByb3RvdHlwZSIsImNvbXBpbGUiLCJhZGRBcnJheUNvcHkiLCJhZGRUb0RhdGFDYWNoZSIsImFkZFRvRm9ybUNhY2hlIiwiYWRkVG9TY29wZUNhY2hlIiwiYnJvYWRjYXN0RXJyb3JzIiwiYnVpbGRFcnJvciIsImNsZWFudXAiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29weSIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldERlZmF1bHQiLCJnZXRGcm9tRGF0YUNhY2hlIiwiZ2V0RnJvbUZvcm1DYWNoZSIsImdldEZyb21TY29wZUNhY2hlIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiZ2V0V2F0Y2hhYmxlcyIsImhhbmRsZVJlc29sdmUiLCJpbml0QXJyYXlDb3B5V2F0Y2giLCJpbml0TW9kZWxXYXRjaCIsImluaXRTY2hlbWFQYXJhbXMiLCJpc0NvbXBpbGVkIiwib25Nb2RlbFdhdGNoIiwicGFyc2VDb25kaXRpb24iLCJwYXJzZUV4cHJlc3Npb24iLCJwcm9jZXNzQXJyYXkiLCJwcm9jZXNzRGlzcGxheSIsInByb2Nlc3NGaWVsZCIsInByb2Nlc3NGaWVsZHNldCIsInByb2Nlc3NGaWVsZFByb3BzIiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlclJlc29sdmUiLCJyZXBsYWNlQXJyYXlJbmRleCIsInJlcHJvY2Vzc0ZpZWxkIiwicmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zIiwic2V0QXJyYXlJbmRleCIsInNldHVwQ29uZmlnIiwic2V0dXBBcnJheVNlbGVjdERpc3BsYXkiLCJzZXR1cFNlbGVjdERpc3BsYXkiLCJzZXR1cFNjaGVtYVJlZnJlc2giLCJDTkZsZXhGb3JtQ29uc3RydWN0b3IiLCJtb2RlbCIsIkNORmxleEZvcm0iLCJkZWJ1ZyIsImFycmF5Q29waWVzIiwiYXJyYXlMaXN0ZW5lcnMiLCJkYXRhQ2FjaGUiLCJkZWZhdWx0cyIsImVycm9ycyIsImV2ZW50cyIsImZvcm1DYWNoZSIsInNjb3BlQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwicGFyYW1zIiwiZXh0ZW5kIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsImdldFNjaGVtYUZvcm0iLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsImlzRGVmaW5lZCIsIm1vZGVsVmFsdWUiLCJnZXQiLCJpc1RydWx5RW1wdHkiLCJoYXMiLCJlcXVhbHMiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsInBvcyIsImh0bWxDbGFzcyIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsIl9vZ0tleXMiLCJ3aXRob3V0Iiwia2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCJmaW5kIiwicmVqZWN0IiwiJGJyb2FkY2FzdCIsImVycm9yIiwiaXNFbXB0eSIsIm5nTW9kZWxPcHRpb25zIiwiYWxsb3dJbnZhbGlkIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZGVwdGgiLCJwYXJzZSIsInByb3BlcnRpZXMiLCJzaGlmdCIsImV4cCIsIndhdGNoYWJsZXMiLCJuZXN0ZWQiLCJtYXRjaE5lc3RlZEV4cHJlc3Npb24iLCJyZXBsYWNlU3RyIiwicmVwbGFjZSIsInJlc29sdmUiLCJkYXRhUHJvcCIsImZpZWxkUHJvcCIsImFycmF5SW5kZXgiLCJ3YXRjaGFibGUiLCJtYXRjaCIsImJhc2UiLCJlaXRoZXJzIiwic3BsaXQiLCJ4IiwiYWxsIiwidW5kZWZpbmVkIiwiaW5kZXhPZiIsImdlbmVyaWNLZXkiLCJzdHJpcEluZGV4ZXMiLCJjYWNoZWRGaWVsZCIsImN1cnNvciIsImxvYWRNb3JlIiwicmVmcmVzaFNjaGVtYSIsImZpZWxkS2V5IiwicmVnaXN0ZXIiLCJjb25kaXRpb25hbHMiLCJ2YWwiLCJwcmV2Iiwic2NvcGUiLCJtYXAiLCJwYXRoIiwicmVzb2x1dGlvbiIsImFkanVzdG1lbnQiLCJjdXIiLCJkYXRlIiwidHJpbSIsIm1hdGgiLCJvcGVyYXRvciIsImFkanVzdGVyIiwidHJpZ2dlciIsImN1ckNvbmRpdGlvbiIsInVwZGF0ZVBhdGgiLCJmcm9tUGF0aCIsInVwZGF0ZSIsImZyb20iLCJtb21lbnQiLCJhZGQiLCJ0b0RhdGUiLCJyZXN1bHQiLCJwIiwiZmxvb3IiLCJjZWlsIiwicm91bmQiLCJpbml0aWFsaXplIiwic3RhcnRzV2l0aCIsImZuIiwibGlzdCIsInByZWRpY2F0ZVBhcmFtcyIsInByZWRpY2F0ZUJvZHkiLCJnZW5lcmF0ZVByZWRpY2F0ZSIsImJvZHkiLCJhcmdzIiwiYWNjIiwicnVuSGFuZGxlciIsImlzT2JqZWN0IiwiYXJyTWF0Y2giLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVycyIsImFycktleSIsIm9uQXJyYXkiLCJyZW9yZGVyIiwibGFzdEtleSIsImFyclZhbCIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwiJG9uIiwiZXZlbnQiLCJjYWNoZUtleSIsInVuaXF1ZUlkIiwiaXNOdW1iZXIiLCJpbmRleCIsIiRlbWl0IiwidW5pbmRleGVkS2V5IiwiY29waWVzIiwic3BsaWNlIiwibGluayIsInBsdWNrIiwia2V5U3RhcnQiLCJmaWx0ZXIiLCJ3YXJuIiwibWF0Y2hJbnRTdHJJbmRleCIsInRvUmVwbGFjZSIsInJlcGxhY2VkIiwicGFyc2VkIiwia2V5VmFsIiwiaXNTdHIiLCJwYXJzZUZsb2F0IiwicmVzb2x2ZWQiLCJzdGFydCIsImdldEFzc2lnbmFibGUiLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJhc3NpZ25hYmxlIiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsImQiLCJwYXJzZUludCIsInN0YXJ0T2YiLCJ2aWV3Rm9ybWF0dGVyIiwiZGF0ZUZvcm1hdCIsInZpZXdQYXJzZXIiLCJnZXRTZWxlY3RWYWxQcm9wIiwic2VsZWN0IiwidmFsdWVQcm9wZXJ0eSIsImdldEFsbG93ZWRTZWxlY3RWYWx1ZSIsImdldFRpdGxlTWFwIiwidmFsUHJvcCIsIm1hcFZhbCIsIm9uSW5pdCIsInNldHRlciIsIm5ld1ZhbCIsInEiLCJ0aXRsZVF1ZXJ5IiwibWluTG9va3VwIiwib25BZGQiLCJkaXNwbGF5Rm9ybWF0IiwiaXRlbUZvcm1hdHRlciIsImRldGFpbGVkTGlzdCIsInNlbGVjdGlvblN0eWxlIiwibWF4SXRlbXMiLCJ2YWxpZCIsIiRzZXREaXJ0eSIsInRvZ2dsZSIsImhlbHAiLCJkaXNwbGF5IiwiZ2V0RGlzcGxheSIsInRwbCIsInBhcnNlU2NvcGUiLCJwcm9jZXNzb3IiLCJ0YWJsZSIsInJvdyIsImNvbHVtbnMiLCJzZWxlY3REaXNwbGF5Iiwic2VsZWN0RmllbGQiLCJnZXRBcnJheUluZGV4Iiwic2VsZWN0S2V5Iiwic3BsaXRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0VmFsdWUiLCJmb3JtQ29waWVzIiwiZWxlbSIsImluZGV4ZWRLZXkiLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiYXNBcnJheSIsImtleUNvcHkiLCJjbG9uZSIsImluZGV4T2ZJbmRleCIsIm1vZGFsTWFwIiwicHJvbWlzZU1hcCIsImdldFByb21pc2VzIiwicHJvbWlzZSIsImdldFByb21pc2UiLCIkcSIsInByb21pc2VzIiwiZGVmZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIiLCJjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlIiwiZGVmIiwicGFyZW50IiwibW9kYWwiLCJtb2RhbElkIiwiZ2V0TWFwcGluZyIsInJlc29sdmVNYXBwaW5nIiwib3B0aW9ucyIsImRlc3Ryb3lTdHJhdGVneSIsIkZsZXhGb3JtTW9kYWxMb2FkZXIiLCJGbGV4Rm9ybU1vZGFsIiwiJHN0YXRlIiwidm0iLCJhY3RpdmF0ZSIsIm9wZW4iLCJvbkRpc21pc3MiLCJvbkFmdGVyRGlzbWlzcyIsImZpbmFsbHkiLCJnb0JhY2siLCJjYXRjaCIsInJlc3RQYXJhbXMiLCJkaXNtaXNzRXZlbnQiLCJkaXNtaXNzTW9kYWwiLCJ0cmFuc2l0aW9uIiwiZ28iLCJkaXNtaXNzIiwiJHVpYk1vZGFsIiwiY25GbGV4Rm9ybSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJmb3JtSW5kZXgiLCJmb3JtTmFtZSIsImRlbGF5Rm9ybSIsImNsZWFudXBFdmVudCIsIkZsZXhGb3JtIiwiYmluZFRvQ29udHJvbGxlciIsImNuRmxleEZvcm1TZXJ2aWNlIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsInVwZGF0ZURhdGEiLCJpc0Rpc2FibGVkIiwidGl0bGUiLCJhY3Rpb25Db25maWciLCJyZXR1cm5TdGF0ZSIsInJldHVyblN0eWxlIiwicmV0dXJuVGV4dCIsImNsb3NlQnV0dG9uIiwiYWN0aW9ucyIsImJ0bkNvbmZpZyIsImZmVmFsaWRhdGUiLCJhdHRycyIsIm5nTW9kZWwiLCJyZXF1aXJlZCIsIiR2aWV3VmFsdWUiLCIkc2V0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ25MdEM7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFIVCxVQUFTZSxtQkFBbUI7R0FDMUIsT0FBTztLQUNMZCxVQUFVO0tBQ1Y1TixPQUFPO09BQ0xqUSxRQUFRO09BQ1I0ZSxRQUFRO09BQ1JDLGVBQWU7O0tBRWpCMWUsWUFBWTJlO0tBQ1pWLGtCQUFrQjtLQUNsQnRiLGNBQWM7S0FDZGdiOzs7O0FBeURKLFVBQVNnQixlQUFlUixRQUFRO0dBQzlCOztHQUVBLElBQU16QixLQUFLOztHQUVYQSxHQUFHa0MsYUFBYUE7R0FDaEJsQyxHQUFHbUMsYUFBYUE7O0dBRWhCbEM7Ozs7R0FJQSxTQUFTQSxXQUFXO0tBQ1JELEdBQUdvQyxRQUFVcEMsR0FBRzdjLE9BQXZCaWY7O0tBRGUsV0FRZHBDLEdBQUc3YyxPQUFPa2YsZ0JBQWdCOztLQUxmckMsR0FBR3NDLGNBSEEsS0FHaEJBO0tBQ2F0QyxHQUFHdUMsY0FKQSxLQUloQkE7S0FDWXZDLEdBQUd3QyxhQUxDLEtBS2hCQTtLQUNheEMsR0FBR3lDLGNBTkEsS0FNaEJBO0tBQ1N6QyxHQUFHMEMsVUFQSSxLQU9oQkE7OztHQUlKLFNBQVNSLGFBQWE7S0FDcEJwZixRQUFRQyxJQUFJLGVBQWVtZjtLQUMzQlQsT0FBT3hLLE1BQU07OztHQUdmLFNBQVNrTCxXQUFXUSxXQUFXO0tBQzdCLElBQUczQyxHQUFHN2MsT0FBT2dmLFlBQVksT0FBT25DLEdBQUc3YyxPQUFPZ2YsV0FBV1E7S0FDckQsT0FBTzs7Ozs7Ozs7QUF2Q1gsU0FBUSxVQStDT2IsaUI7Ozs7Ozs7Ozs7O0FDMUdmLFVBQVNjLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMNUIsZUFBVSxHQURMO0FBRUw1TixZQUFPLEVBQUVqRixNQUFNLGFBQVIsRUFGRjtBQUdMN0csY0FBUyxTQUhKO0FBSUwrUCxXQUFNQTtBQUpELElBQVA7QUFNRDs7QUFFRCxVQUFTQSxJQUFULENBQWNvSyxNQUFkLEVBQXNCN0UsSUFBdEIsRUFBNEJpRyxLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUM7QUFDQSxPQUFHckIsT0FBT3RULElBQVAsSUFBZXNULE9BQU90VCxJQUFQLENBQVk0VSxRQUE5QixFQUF3QztBQUN0Q3RCLFlBQU9yTCxNQUFQLENBQWMsWUFBVztBQUFFLGNBQU8wTSxRQUFRRSxVQUFmO0FBQTRCLE1BQXZELEVBQXlELFVBQVN4ZSxLQUFULEVBQWdCO0FBQ3ZFO0FBQ0FzZSxlQUFRRyxZQUFSLENBQXFCLFlBQXJCLEVBQW1DLElBQW5DO0FBQ0FILGVBQVFHLFlBQVIsQ0FBcUIsU0FBckIsRUFBZ0N6ZSxLQUFoQztBQUNELE1BSkQ7QUFLRDtBQUNGOztBQUVEO0FBQ0k7QUFDQTs7bUJBRVdvZSxVIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbi1mbGV4LWZvcm1cIiwgW1wibG9kYXNoXCIsIFwib2JqZWN0cGF0aFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJvYmplY3RwYXRoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbi1mbGV4LWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJvYmplY3RwYXRoXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZTExMTdhOWE4MjIwY2I4NGVkMCIsImltcG9ydCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyLCBjbkZsZXhGb3JtUm91dGVzIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0ucm91dGVzJztcbmltcG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9IGZyb20gJy4vc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucyc7XG5pbXBvcnQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS5zZXJ2aWNlJztcbmltcG9ydCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9IGZyb20gJy4vY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlcic7XG5pbXBvcnQgY25GbGV4Rm9ybSBmcm9tICcuL2NuLWZsZXgtZm9ybS5kaXJlY3RpdmUnO1xuaW1wb3J0IGNuRmxleEZvcm1IZWFkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgZmZWYWxpZGF0ZSBmcm9tICcuL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zb2xlLmxvZyhjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxuICAubW9kdWxlKCdjbi5mbGV4LWZvcm0nLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3NjaGVtYUZvcm0nLFxuICAgICd1aS5ib290c3RyYXAuZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjblRhZ3NJbnB1dCcsXG4gICAgLy8nbmdKc29uRXhwbG9yZXInLFxuICAgICdjbi51dGlsJ1xuICBdKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Db25maWcnLCBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVJvdXRlcycsIGNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlcilcbiAgLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKVxuICAuY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gIC5ydW4oYWRkVGVtcGxhdGVzKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKVxuICAuZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpXG4gIC5jb250cm9sbGVyKCdGbGV4Rm9ybU1vZGFsTG9hZGVyJywgRmxleEZvcm1Nb2RhbExvYWRlcilcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybScsIGNuRmxleEZvcm0pXG4gIC5kaXJlY3RpdmUoJ2NuRmxleEZvcm1IZWFkZXInLCBjbkZsZXhGb3JtSGVhZGVyKVxuICAuZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSlcbiAgLm5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnUHJvdmlkZXIoKSB7XG5cbiAgY29uc3QgaWdub3JlUGFyYW1zID0gWydwYWdlJywgJ2RlYnVnJywgJ3NhbmRib3gnLCAnbW9kYWwnLCAnbW9kYWxJZCddO1xuXG4gIHJldHVybiB7XG4gICAgYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0U3RhdGVQYXJhbXMsXG4gICAgICBpZ25vcmVQYXJhbXNcbiAgICB9O1xuXG4gICAgLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldFN0YXRlUGFyYW1zKCkge1xuICAgICAgcmV0dXJuIF9cbiAgICAgICAgICAuY2hhaW4oJHN0YXRlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGlnbm9yZVBhcmFtcylcbiAgICAgICAgICAub21pdChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2KSB8fCBfLmlzTnVsbCh2KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC52YWx1ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1Db25maWdQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tY29uZmlnLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcigpIHtcblxuICB2YXIgZmllbGRUeXBlUmVnaXN0ZXIgPSBbe1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hpZGRlbicsXG4gICAgdHlwZTogJ2hpZGRlbidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvcydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygncmFkaW9idXR0b25zJyksXG4gICAgdHlwZTogJ2NuLXJhZGlvYnV0dG9ucydcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZS5pbmNsdWRlcygnYXV0b2NvbXBsZXRlJykgfHwgZmllbGQudGl0bGVNYXAgfHwgZmllbGQudGl0bGVNYXBSZXNvbHZlIHx8IGZpZWxkLnRpdGxlTWFwUXVlcnksXG4gICAgdHlwZTogJ2NuLWF1dG9jb21wbGV0ZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NuLWRhdGV0aW1lcGlja2VyJyB8fCBmaWVsZC50eXBlID09PSAnZGF0ZXRpbWUtbG9jYWwnIHx8IGZpZWxkLnR5cGUgPT09ICd0aW1lLW1pbnV0ZXMnLFxuICAgIHR5cGU6ICdjbi1kYXRldGltZXBpY2tlcidcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2hlbHAnLFxuICAgIHR5cGU6ICdoZWxwJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdkaXNwbGF5JyksXG4gICAgdHlwZTogJ2NuLWRpc3BsYXknXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQuaW5jbHVkZXMoJ2N1cnJlbmN5JyksXG4gICAgdHlwZTogJ2NuLWN1cnJlbmN5J1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmZvcm1hdCA9PT0gJ3BlcmNlbnRhZ2UnLFxuICAgIHR5cGU6ICdjbi1wZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndG9nZ2xlJyB8fCBmaWVsZC50eXBlID09PSAnYm9vbGVhbicsXG4gICAgdHlwZTogJ2NuLXRvZ2dsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ21lZGlhdXBsb2FkJyxcbiAgICB0eXBlOiAnY24tbWVkaWF1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdjc3Z1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1jc3Z1cGxvYWQnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICdyZXVzYWJsZScsXG4gICAgdHlwZTogJ2NuLXJldXNhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAndGFibGUnLFxuICAgIHR5cGU6ICdjbi10YWJsZSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2FycmF5JyxcbiAgICB0eXBlOiAnYXJyYXknXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJGaWVsZFR5cGU6IHJlZ2lzdGVyRmllbGRUeXBlLFxuICAgICRnZXQ6IGNuRmxleEZvcm1UeXBlc1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFR5cGUoZmllbGRUeXBlKSB7XG4gICAgZmllbGRUeXBlUmVnaXN0ZXIudW5zaGlmdChmaWVsZFR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY25GbGV4Rm9ybVR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZFR5cGVSZWdpc3RlcjogZmllbGRUeXBlUmVnaXN0ZXIsXG4gICAgICBnZXRGaWVsZFR5cGU6IGdldEZpZWxkVHlwZVxuICAgIH07XG5cbiAgICAvLy8vLy8vLy9cblxuICAgIGZ1bmN0aW9uIGdldEZpZWxkVHlwZShmaWVsZCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZpZWxkVHlwZVJlZ2lzdGVyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihmaWVsZFR5cGVSZWdpc3RlcltpXS5jb25kaXRpb24oZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkVHlwZVJlZ2lzdGVyW2ldLnR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZC50eXBlIHx8IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEudHlwZTtcbiAgICB9XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1UeXBlcycsIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIGFkZFN0YXRlcyxcbiAgICAkZ2V0XG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbmZ1bmN0aW9uIHNjaGVtYUZvcm1Db25maWcoY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuXG4gIHR2NC5hZGRGb3JtYXQoe1xuICAgICd1cmwnOiBkYXRhID0+IF8uaXNTdHJpbmcoZGF0YSkgJiYgIS9eKGh0dHBzPzpcXC9cXC8uezJ9fCQpLy50ZXN0KGRhdGEpICYmICdpbnZhbGlkIHVybCdcbiAgfSk7XG5cbiAgdmFyIGV4dGVuc2lvbnMgPSBbXG4gICAgJ2NuLWZpZWxkc2V0JyxcbiAgICAnY24tdG9nZ2xlJyxcbiAgICAnY24tZGF0ZXRpbWVwaWNrZXInLFxuICAgICdjbi1hdXRvY29tcGxldGUnLFxuICAgICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnLFxuICAgICdjbi1jdXJyZW5jeScsXG4gICAgJ2NuLXJhZGlvcycsXG4gICAgJ2NuLXJhZGlvYnV0dG9ucycsXG4gICAgJ2NuLXBlcmNlbnRhZ2UnLFxuICAgICdjbi1kaXNwbGF5JyxcbiAgICAnY24tbWVkaWF1cGxvYWQnLFxuICAgICdjbi1jc3Z1cGxvYWQnLFxuICAgICdjbi1yZXVzYWJsZScsXG4gICAgJ2NuLXRhYmxlJ1xuICBdO1xuXG4gIF8uZWFjaChleHRlbnNpb25zLCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLnJlZ2lzdGVyRmllbGQoe1xuICAgICAgdHlwZTogZXh0ZW5zaW9uLFxuICAgICAgdGVtcGxhdGVVcmw6IGBhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvJHtleHRlbnNpb259Lmh0bWxgXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRvZ2dsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIiBuZy1zaG93PVwic2hvd1RpdGxlKClcIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxjbi10b2dnbGUtc3dpdGNoXG4gICAgICAgICAgICBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICBvbi12YWx1ZT1cImZvcm0ub25WYWx1ZVwiXG4gICAgICAgICAgICBvZmYtdmFsdWU9XCJmb3JtLm9mZlZhbHVlXCJcbiAgICAgICAgICAgIHJlYWQtb25seT1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgdW5kZWZpbmVkLWNsYXNzPVwiZm9ybS51bmRlZmluZWRDbGFzc1wiLz5cbiAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5vblRleHQgJiYgZm9ybS5vZmZUZXh0XCI+XG4gICAgICAgICAgICB7eyQkdmFsdWUkJCA9PT0gZm9ybS5vblZhbHVlID8gZm9ybS5vblRleHQgOiBmb3JtLm9mZlRleHR9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGF0ZXRpbWVwaWNrZXIuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8Y24tZGF0ZXRpbWVwaWNrZXJcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgaXMtZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBtaW4tZGF0ZT1cImZvcm0ubWluRGF0ZVwiXG4gICAgICAgICAgbWF4LWRhdGU9XCJmb3JtLm1heERhdGVcIlxuICAgICAgICAgIG1heC12aWV3PVwie3tmb3JtLm1heFZpZXd9fVwiXG4gICAgICAgICAgY24tZGF0ZS1yZXF1aXJlZD1cImZvcm0ucmVxdWlyZWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgIG1vZGVsLXR5cGU9XCJ7e2Zvcm0uc2NoZW1hLnR5cGV9fVwiXG4gICAgICAgICAgbW9kZWwtZm9ybWF0dGVyPVwiZm9ybS5tb2RlbEZvcm1hdHRlclwiXG4gICAgICAgICAgbW9kZWwtcGFyc2VyPVwiZm9ybS5tb2RlbFBhcnNlclwiXG4gICAgICAgICAgdmlldy1mb3JtYXR0ZXI9XCJmb3JtLnZpZXdGb3JtYXR0ZXJcIlxuICAgICAgICAgIHZpZXctcGFyc2VyPVwiZm9ybS52aWV3UGFyc2VyXCJcbiAgICAgICAgICBmb3JtYXQtc3RyaW5nPXt7Zm9ybS5kYXRlRm9ybWF0fX1cbiAgICAgICAgICBpY29uLWNsYXNzPXt7Zm9ybS5pY29uQ2xhc3N9fT5cbiAgICAgICAgPC9jbi1kYXRldGltZXBpY2tlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgdmFyIHNoYXJlZEF1dG9jb21wbGV0ZVRwbCA9IGBcbiAgICAgICAgPHRhZ3MtaW5wdXRcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgaW5wdXQtaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICBkaXNwbGF5LXByb3BlcnR5PVwie3tmb3JtLmRpc3BsYXlQcm9wZXJ0eSB8fCAnbmFtZSd9fVwiXG4gICAgICAgICAgdmFsdWUtcHJvcGVydHk9XCJ7e2Zvcm0udmFsdWVQcm9wZXJ0eX19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlciB8fCAnICd9fVwiXG4gICAgICAgICAgY2xlYXItb24tYmx1cj1cInRydWVcIlxuICAgICAgICAgIGFkZC1vbi1jb21tYT1cImZhbHNlXCJcbiAgICAgICAgICBhZGQtZnJvbS1hdXRvY29tcGxldGUtb25seT1cInt7IWZvcm0uYWxsb3dOZXd9fVwiXG4gICAgICAgICAgb24tYmVmb3JlLXRhZy1hZGRlZD1cImZvcm0ub25BZGQoe3ZhbHVlOiAkdGFnfSwgZm9ybSwgJGV2ZW50LCAkcHJldilcIlxuICAgICAgICAgIG9uLWluaXQ9XCJmb3JtLm9uSW5pdCgkdGFnLCBmb3JtLCAkZXZlbnQsICRzZXR0ZXIpXCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLmdldFNjaGVtYVR5cGUoKX19XCJcbiAgICAgICAgICBhcnJheS12YWx1ZS10eXBlPVwie3tmb3JtLnNjaGVtYS5pdGVtcy50eXBlfX1cIlxuICAgICAgICAgIGhpZGUtdGFncz1cInt7Zm9ybS5kZXRhaWxlZExpc3R9fVwiXG4gICAgICAgICAgdGFncy1zdHlsZT1cInt7Zm9ybS5zZWxlY3Rpb25TdHlsZX19XCJcbiAgICAgICAgICByZXF1aXJlZD1cInt7Zm9ybS5yZXF1aXJlZH19XCJcbiAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxlbmd0aH19XCJcbiAgICAgICAgICBhbGxvd2VkLXRhZ3MtcGF0dGVybj1cIi4qXCJcbiAgICAgICAgICBkcm9wZG93bi1pY29uPVwidHJ1ZVwiXG4gICAgICAgICAgaXRlbS1mb3JtYXR0ZXI9XCJmb3JtLml0ZW1Gb3JtYXR0ZXJcIlxuICAgICAgICAgIG1pbi10YWdzPVwie3tmb3JtLnNjaGVtYS5taW5JdGVtc319XCJcbiAgICAgICAgICBtYXgtdGFncz1cInt7Zm9ybS5zY2hlbWEubWF4SXRlbXMgfHwgZm9ybS5nZXRTY2hlbWFUeXBlKCkgIT09ICdhcnJheScgPyAxIDogMH19XCJcbiAgICAgICAgICBhbGxvdy1idWxrPVwie3tmb3JtLmJ1bGtBZGR9fVwiXG4gICAgICAgICAgYnVsay1kZWxpbWl0ZXI9XCJ7e2Zvcm0uYnVsa0RlbGltaXRlcn19XCJcbiAgICAgICAgICBidWxrLXBsYWNlaG9sZGVyPVwie3tmb3JtLmJ1bGtQbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBzaG93LWNsZWFyLWFsbD1cInt7Zm9ybS5zaG93Q2xlYXJBbGx9fVwiXG4gICAgICAgICAgc2hvdy1idXR0b249XCJ0cnVlXCI+XG4gICAgICAgICAgPGF1dG8tY29tcGxldGVcbiAgICAgICAgICAgIHNvdXJjZT1cImZvcm0uZ2V0VGl0bGVNYXAgJiYgZm9ybS5nZXRUaXRsZU1hcCgpIHx8IGZvcm0udGl0bGVRdWVyeSgkcXVlcnkpXCJcbiAgICAgICAgICAgIHNraXAtZmlsdGVyaW5nPVwie3tmb3JtLnRpdGxlUXVlcnkgPyB0cnVlIDogZmFsc2V9fVwiXG4gICAgICAgICAgICBtaW4tbGVuZ3RoPVwie3tmb3JtLm1pbkxvb2t1cCB8fCAoZm9ybS50aXRsZVF1ZXJ5ICYmIDMgfHwgMCl9fVwiPlxuICAgICAgICAgIDwvYXV0by1jb21wbGV0ZT5cbiAgICAgICAgPC90YWdzLWlucHV0PmA7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAke3NoYXJlZEF1dG9jb21wbGV0ZVRwbH1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1hdXRvY29tcGxldGUtZGV0YWlsZWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IHNmLWFycmF5PVwiZm9ybVwiXG4gICAgICAgICAgIGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX0taW5wdXRcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8b2wgY2xhc3M9XCJsaXN0LWdyb3VwIGNuLWF1dG9jb21wbGV0ZS1saXN0XCJcbiAgICAgICAgICAgIG5nLXNob3c9XCJtb2RlbEFycmF5Lmxlbmd0aFwiXG4gICAgICAgICAgICBuZy1tb2RlbD1cIm1vZGVsQXJyYXlcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0ge3tmb3JtLmZpZWxkSHRtbENsYXNzfX1cIlxuICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIG1vZGVsQXJyYXkgdHJhY2sgYnkgJGluZGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5nLWhpZGU9XCJmb3JtLnJlYWRvbmx5IHx8IGZvcm0ucmVtb3ZlID09PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJkZWxldGVGcm9tQXJyYXkoJGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBuZy1pbml0PVwiYXJyYXlJbmRleCA9ICRpbmRleFwiIGZvcm09XCJjb3B5V2l0aEluZGV4KCRpbmRleClcIi8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tY3VycmVuY3kuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPiQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LWZvcm1hdD1cInt7Zm9ybS5jdXJyZW5jeUZvcm1hdH19XCJcbiAgICAgICAgICAgICAgICAgY24tY3VycmVuY3ktcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yYWRpb3MuaHRtbCcsXG4gICAgICBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpbyByYWRpby1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCI+XG4gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpby1ibG9jay1pY29uXCIgbmctaWY9XCJpdGVtLmljb25DbGFzc1wiPlxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0uaWNvbkNsYXNzfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9idXR0b25zLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2NoZW1hLWZvcm0tcmFkaW9idXR0b25zIGNuLXJhZGlvYnV0dG9ucyB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGNsZWFyZml4XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi17e2l0ZW0udmFsdWV9fSB7e2Zvcm0uYnRuQ2xhc3N9fSB7e2l0ZW0udmFsdWUgPT09ICQkdmFsdWUkJCA/ICdhY3RpdmUnIDogJyd9fVwiXG4gICAgICAgICAgICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS50aXRsZU1hcFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e2Zvcm0uZmllbGRIdG1sQ2xhc3N9fSBoaWRlXCJcbiAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIGZmLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgbmctdmFsdWU9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS17e2l0ZW0udmFsdWV9fSBmYS1sZ1wiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuIG5nLWJpbmQtaHRtbD1cIml0ZW0ubmFtZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1wZXJjZW50YWdlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3tmb3JtLmZpZWxkQ2xhc3N9fSBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgIGNuLXBlcmNlbnRhZ2UtZm9ybWF0XG4gICAgICAgICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICAgICBtaW49XCJ7e2Zvcm0ubWlufX1cIlxuICAgICAgICAgICAgICAgICBtYXg9XCJ7e2Zvcm0ubWF4fX1cIlxuICAgICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPiU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZGlzcGxheS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLWRpc3BsYXl7e2Zvcm0uaHRtbENsYXNzfX1cIj5cbiAgICAgICAgPGlucHV0IG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBpZD1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIlxuICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgIHZhbHVlPVwie3tmb3JtLmdldERpc3BsYXkoZm9ybS5rZXksIGZvcm0uYXJyYXlJbmRleCl9fVwiPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tZmllbGRzZXQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZmllbGRzZXQgXG4gICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J2JvcmRlcmxlc3MnOiBmb3JtLnBvcyA9PT0gMH1cIj5cbiAgICAgICAgPGxlZ2VuZCBuZy1jbGljaz1cImZvcm0udG9nZ2xlQ29sbGFwc2UoZm9ybSlcIlxuICAgICAgICAgICAgICAgIG5nLWNsYXNzPVwieydzci1vbmx5JzogIXNob3dUaXRsZSgpLCBjb2xsYXBzaWJsZTogZm9ybS5jb2xsYXBzaWJsZX1cIlxuICAgICAgICAgICAgICAgIG5nLW1vdXNlZW50ZXI9XCJmb3JtLnJlbmRlciA9IHRydWVcIj5cbiAgICAgICAgICA8aSBuZy1zaG93PVwiZm9ybS5jb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYXJldC17e2Zvcm0uY29sbGFwc2VkID8gJ3JpZ2h0JyA6ICdkb3duJ319XCI+PC9pPlxuICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCIgbmctc2hvdz1cImZvcm0uZGVzY3JpcHRpb25cIiBuZy1iaW5kLWh0bWw9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgdWliLWNvbGxhcHNlPVwiZm9ybS5jb2xsYXBzZWRcIj5cbiAgICAgICAgICA8ZGl2IG5nLWlmPVwiZm9ybS5yZW5kZXJcIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1tZWRpYXVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG1lZGlhLXVwbG9hZCBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tZmlsZS10eXBlPVwiZm9ybS5maWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY24tdXBsb2FkLXBhdGg9XCJmb3JtLnVwbG9hZFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWRhdGE9XCJmb3JtLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXByZXZpZXctcGF0aD1cImZvcm0ucHJldmlld1BhdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLW1vZGVsLXZhbHVlLWtleT1cImZvcm0ubW9kZWxWYWx1ZUtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L21lZGlhLXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWNzdnVwbG9hZC5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNzdi11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyZml4XCI+XG4gICAgICAgIDwvY3N2LXVwbG9hZD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJldXNhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tcmV1c2FibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLXNlbGVjdC1vclxuICAgICAgICAgIG5nLXNob3c9XCJmb3JtLmtleVwiXG4gICAgICAgICAgc2VsZWN0LWZyb209XCJmb3JtLmxpYnJhcnlcIlxuICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGZmLWZvcm09XCJmb3JtXCJcbiAgICAgICAgICBkaXJlY3RpdmVJZD1cImZvcm0uZGlyZWN0aXZlSWRcIlxuICAgICAgICAgIGl0ZW0tdGVtcGxhdGU9XCJmb3JtLml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgICAgdG9nZ2xlLXRleHQ9XCJmb3JtLnRvZ2dsZVRleHRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgdmlldz1cImZvcm0udmlld1wiPlxuICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLml0ZW1zXCIgZm9ybT1cIml0ZW1cIi8+XG4gICAgICAgIDwvY24tc2VsZWN0LW9yPlxuICAgICAgICA8cCBuZy1pZj1cImZvcm0ubG9hZE1vcmUgJiYgZm9ybS52aWV3ID09PSAnbGlzdCdcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cImZvcm0ubG9hZE1vcmUoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrXCI+TG9hZCBNb3JlPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tdGFibGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1mZi10YWJsZSB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8aDY+e3tmb3JtLnRpdGxlfX08L2g2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBuZy1yZXBlYXQ9XCJjb2wgaW4gZm9ybS5jb2x1bW5zXCIgY2xhc3M9XCJ7e2NvbC5jb2x1bW5XaWR0aH19XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj57e2NvbC5jb2x1bW5IZWFkZXJ9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBuZy1yZXBlYXQ9XCJyb3cgaW4gZm9ybS5pdGVtc1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIHJvdy5pdGVtc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHNmLWRlY29yYXRvciBmb3JtPVwiY29sXCI+PC9zZi1kZWNvcmF0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcbn1cblxuZXhwb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NoZW1hLWZvcm0tZXh0ZW5zaW9ucy5qcyIsIi8vIE5lZWQgdGhlc2UgbW9kdWxlcyBmb3IgdGVzdCBidW5kbGVcbnZhciBfID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll8gfHwgcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgT2JqZWN0UGF0aCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PYmplY3RQYXRoIHx8IHJlcXVpcmUoJ29iamVjdHBhdGgnKTtcblxuY29uc3QgZmllbGRUeXBlSGFuZGxlcnMgPSB7XG4gICdmaWVsZHNldCc6ICdwcm9jZXNzRmllbGRzZXQnLFxuICAnY24tcmFkaW9zJzogJ3Byb2Nlc3NSYWRpb3MnLFxuICAnY24tcmFkaW9idXR0b25zJzogJ3Byb2Nlc3NSYWRpb2J1dHRvbnMnLFxuICAnY24tYXV0b2NvbXBsZXRlJzogJ3Byb2Nlc3NTZWxlY3QnLFxuICAnY24tZGF0ZXRpbWVwaWNrZXInOiAncHJvY2Vzc0RhdGUnLFxuICAnaGVscCc6ICdwcm9jZXNzSGVscCcsXG4gICdjbi1kaXNwbGF5JzogJ3Byb2Nlc3NEaXNwbGF5JyxcbiAgJ2NuLWN1cnJlbmN5JzogJ3Byb2Nlc3NDdXJyZW5jeScsXG4gICdjbi1wZXJjZW50YWdlJzogJ3Byb2Nlc3NQZXJjZW50YWdlJyxcbiAgJ2NuLW1lZGlhdXBsb2FkJzogJ3Byb2Nlc3NNZWRpYVVwbG9hZCcsXG4gICdjbi1jc3Z1cGxvYWQnOiAncHJvY2Vzc0NzdlVwbG9hZCcsXG4gICdjbi1yZXVzYWJsZSc6ICdwcm9jZXNzUmV1c2FibGUnLFxuICAnY24tdG9nZ2xlJzogJ3Byb2Nlc3NUb2dnbGUnLFxuICAnY24tdGFibGUnOiAncHJvY2Vzc1RhYmxlJyxcbiAgJ2NvbXBvbmVudCc6ICdwcm9jZXNzQ29tcG9uZW50JyxcbiAgJ3NlY3Rpb24nOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAndGFiYXJyYXknOiAncHJvY2Vzc1NlY3Rpb24nLFxuICAnYXJyYXknOiAncHJvY2Vzc0FycmF5J1xufTtcblxuY29uc3QgZmllbGRQcm9wSGFuZGxlcnMgPSBbe1xuICBwcm9wOiAnc2VsZWN0RGlzcGxheScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzU2VsZWN0RGlzcGxheShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3Jlc29sdmUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1Jlc29sdmUoZmllbGQpXG59LCB7XG4gIHByb3A6ICd3YXRjaCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gZmllbGQud2F0Y2ggJiYgc2VydmljZS5wcm9jZXNzRmllbGRXYXRjaChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3R5cGUnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkVHlwZShmaWVsZClcbn0sIHtcbiAgcHJvcDogJ2NvbmRpdGlvbmFscycsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpXG59LCB7XG4gIHByb3A6ICdkZWZhdWx0JyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAnc2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBcbiAgICBfLmlzVW5kZWZpbmVkKGZpZWxkLmRlZmF1bHQpICYmICFfLmlzVW5kZWZpbmVkKGZpZWxkLnNjaGVtYS5kZWZhdWx0KSAmJiBzZXJ2aWNlLnByb2Nlc3NEZWZhdWx0KGZpZWxkKVxufSwge1xuICBwcm9wOiAndXBkYXRlU2NoZW1hJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgbnVsbCwgZmllbGQudXBkYXRlU2NoZW1hKVxufV07XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIoc2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciwgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENORmxleEZvcm1TZXJ2aWNlKFxuICBBcGksXG4gICRwYXJzZSxcbiAgY25GbGV4Rm9ybUNvbmZpZyxcbiAgY25GbGV4Rm9ybVR5cGVzLFxuICBzZlBhdGgsXG4gICRpbnRlcnBvbGF0ZSxcbiAgJHJvb3RTY29wZSxcbiAgJHRpbWVvdXQsXG4gIGNuVXRpbCxcbiAgJHN0YXRlUGFyYW1zXG4pIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCBzZXJ2aWNlcyA9IFtdO1xuICBjb25zdCBwcm90b3R5cGUgPSB7XG4gICAgY29tcGlsZSxcbiAgICBhZGRBcnJheUNvcHksXG4gICAgYWRkVG9EYXRhQ2FjaGUsXG4gICAgYWRkVG9Gb3JtQ2FjaGUsXG4gICAgYWRkVG9TY29wZUNhY2hlLFxuICAgIGJyb2FkY2FzdEVycm9ycyxcbiAgICBidWlsZEVycm9yLFxuICAgIGNsZWFudXAsXG4gICAgZGVyZWdpc3RlckhhbmRsZXJzLFxuICAgIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzLFxuICAgIGdldEFycmF5Q29weSxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXREZWZhdWx0LFxuICAgIGdldEZyb21EYXRhQ2FjaGUsXG4gICAgZ2V0RnJvbUZvcm1DYWNoZSxcbiAgICBnZXRGcm9tU2NvcGVDYWNoZSxcbiAgICBnZXRLZXksXG4gICAgZ2V0U2NoZW1hLFxuICAgIGdldFdhdGNoYWJsZXMsXG4gICAgaGFuZGxlUmVzb2x2ZSxcbiAgICBpbml0QXJyYXlDb3B5V2F0Y2gsXG4gICAgaW5pdE1vZGVsV2F0Y2gsXG4gICAgaW5pdFNjaGVtYVBhcmFtcyxcbiAgICBpc0NvbXBpbGVkLFxuICAgIG9uTW9kZWxXYXRjaCxcbiAgICBwYXJzZUNvbmRpdGlvbixcbiAgICBwYXJzZUV4cHJlc3Npb24sXG4gICAgcHJvY2Vzc0FycmF5LFxuICAgIHByb2Nlc3NEZWZhdWx0LFxuICAgIHByb2Nlc3NEaXNwbGF5LFxuICAgIHByb2Nlc3NGaWVsZCxcbiAgICBwcm9jZXNzRmllbGRzZXQsXG4gICAgcHJvY2Vzc0ZpZWxkUHJvcHMsXG4gICAgcHJvY2Vzc0ZpZWxkVHlwZSxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc1BlcmNlbnRhZ2UsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1RhYmxlLFxuICAgIHByb2Nlc3NUZW1wbGF0ZSxcbiAgICBwcm9jZXNzVG9nZ2xlLFxuICAgIHByb2Nlc3NVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NNZWRpYVVwbG9hZCxcbiAgICBwcm9jZXNzQ3N2VXBsb2FkLFxuICAgIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICByZWdpc3RlckhhbmRsZXIsXG4gICAgcmVnaXN0ZXJSZXNvbHZlLFxuICAgIHJlcGxhY2VBcnJheUluZGV4LFxuICAgIHJlcHJvY2Vzc0ZpZWxkLFxuICAgIHJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyxcbiAgICBzZXRBcnJheUluZGV4LFxuICAgIHNldHVwQ29uZmlnLFxuICAgIHNldHVwQXJyYXlTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNjaGVtYVJlZnJlc2hcbiAgfTtcblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtQ29uc3RydWN0b3Ioc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2U7XG4gICAgaWYoc2VydmljZXMubGVuZ3RoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gc2VydmljZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKHNlcnZpY2VzW2ldLm1vZGVsID09PSBtb2RlbCkge1xuICAgICAgICAgIHNlcnZpY2UgPSBzZXJ2aWNlc1tpXTtcbiAgICAgICAgICBzZXJ2aWNlLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZighc2VydmljZSkge1xuICAgICAgc2VydmljZSA9IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICBzZXJ2aWNlcy5wdXNoKHNlcnZpY2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZSB8fCBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5kZWJ1Zykge1xuICAgICAgd2luZG93LnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUNvcGllcyA9IHt9O1xuICAgIHRoaXMuYXJyYXlMaXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLmRhdGFDYWNoZSA9IHt9O1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5mb3JtQ2FjaGUgPSB7fTtcbiAgICB0aGlzLnNjb3BlQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMucmVzb2x2ZVJlZ2lzdGVyID0ge307XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMudXBkYXRlcyA9IDA7XG5cbiAgICB0aGlzLnBhcmFtcyA9IGNuRmxleEZvcm1Db25maWcuZ2V0U3RhdGVQYXJhbXMoKTtcblxuICAgIHRoaXMuXyA9IF87XG5cbiAgICB0aGlzLmNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIF8uZXh0ZW5kKENORmxleEZvcm0ucHJvdG90eXBlLCBwcm90b3R5cGUpO1xuICBfLmV4dGVuZChDTkZsZXhGb3JtQ29uc3RydWN0b3IsIHByb3RvdHlwZSk7XG5cbiAgcmV0dXJuIENORmxleEZvcm1Db25zdHJ1Y3RvcjtcblxuICAvLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGNvbXBpbGUoc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgc2VydmljZS5tb2RlbCA9IG1vZGVsO1xuXG4gICAgaWYoIXNlcnZpY2UuaXNDb21waWxlZCgpKSB7XG4gICAgICBzZXJ2aWNlLnNldHVwQ29uZmlnKGNvbmZpZyk7XG5cbiAgICAgIGlmKHNjaGVtYS5mb3Jtcykge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm0uZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybSwgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuaW5pdE1vZGVsV2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaW5pdEFycmF5Q29weVdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmlzQ29tcGlsZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29tcGlsZWQoc2V0VmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2V0VmFsdWUpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkID0gc2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlLnNjaGVtYSAmJiBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwQ29uZmlnKGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25maWcpIHtcbiAgICAgIGlmKGNvbmZpZy5mb3JtQ3RybCkgc2VydmljZS5mb3JtQ3RybCA9IGNvbmZpZy5mb3JtQ3RybDtcbiAgICAgIGlmKGNvbmZpZy51cGRhdGVTY2hlbWEpIHNlcnZpY2UudXBkYXRlU2NoZW1hID0gY29uZmlnLnVwZGF0ZVNjaGVtYTtcbiAgICAgIGlmKGNvbmZpZy5nZXRTY2hlbWEpIHNlcnZpY2UuZ2V0U2NoZW1hRm9ybSA9IHNlcnZpY2Uuc2V0dXBTY2hlbWFSZWZyZXNoKGNvbmZpZy5nZXRTY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTY2hlbWEoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG5cbiAgICBmaWVsZC5nZXRTY2hlbWFUeXBlID0gKCkgPT4gXy5pc0FycmF5KHNjaGVtYS50eXBlKSA/IF8uZmlyc3Qoc2NoZW1hLnR5cGUpIDogc2NoZW1hLnR5cGU7XG4gICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSBmaWVsZC5nZXRTY2hlbWFUeXBlICYmIGZpZWxkLmdldFNjaGVtYVR5cGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuICAgIGNvbnN0IGN1ckRlZmF1bHQgPSBmaWVsZC5kZWZhdWx0IHx8IHNjaGVtYS5kZWZhdWx0O1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgXG4gICAgLy8gaWYgZGVmYXVsdCBpcyByZXR1cm5lZCBmb3IgbmV3IGZvcm0sIHRyZWF0IGl0IGFzIGEgcHJldmlvdXMgcGFyYW0gaW4gb3JkZXIgdG8gbm90IHRyaWdnZXIgdW5uZWNlc3NhcnkgdXBkYXRlU2NoZW1hXG4gICAgaWYoIXNlcnZpY2UudXBkYXRlcyAmJiBmaWVsZC51cGRhdGVTY2hlbWEgJiYgYW5ndWxhci5pc0RlZmluZWQoY3VyRGVmYXVsdCkgJiYgIXNlcnZpY2Uuc2NoZW1hLnBhcmFtc1trZXldKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5wYXJhbXNba2V5XSA9IGN1ckRlZmF1bHQ7XG4gICAgfVxuXG4gICAgLy8gaWYgc2NoZW1hVXBkYXRlIGhhc24ndCBiZWVuIHRyaWdnZXJlZCwgbGV0IHNjaGVtYUZvcm0gZGlyZWN0aXZlIGhhbmRsZSBkZWZhdWx0c1xuICAgIGlmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpIHx8IChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpKSB7XG4gICAgICAgIG1vZGVsLnNldChjdXJEZWZhdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VydmljZS5kZWZhdWx0c1trZXldID0gYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpO1xuXG4gICAgaWYoc2NoZW1hLmZvcm1hdCA9PT0gJ3VybCcgJiYgIWZpZWxkLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9ICd1cmwnO1xuICAgICAgZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIHVybCAoaHR0cHM6Ly8uLi4pJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRzZXQoZmllbGRzZXQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBmaWVsZHNldC50eXBlID0gJ2NuLWZpZWxkc2V0JztcbiAgICBmaWVsZHNldC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuXG4gICAgaWYoXy5oYXMoZmllbGRzZXQsICdwb3MnKSAmJiBmaWVsZHNldC5wb3MgPT09IDApIHtcbiAgICAgIGZpZWxkc2V0Lmh0bWxDbGFzcyA9ICdib3JkZXJsZXNzJztcbiAgICB9XG4gICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgIGZpZWxkc2V0LnRvZ2dsZUNvbGxhcHNlID0gKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgZmllbGRzZXQuY29sbGFwc2VkID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmllbGRzZXQucmVuZGVyID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFR5cGUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBmaWVsZFR5cGUgPSBjbkZsZXhGb3JtVHlwZXMuZ2V0RmllbGRUeXBlKGZpZWxkKTtcbiAgICBjb25zdCBoYW5kbGVyID0gZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlXTtcbiAgICBpZihfLmlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICBzZXJ2aWNlW2hhbmRsZXJdKGZpZWxkKTtcbiAgICB9XG4gICAgZWxzZSBpZihfLmlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChzZXJ2aWNlLCBmaWVsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkLCBwb3MpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGFuZ3VsYXIuaXNEZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpZWxkLnBvcyA9IHBvcztcbiAgICB9XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IF8ud2l0aG91dChfLmtleXMoZmllbGQpLCAna2V5JywgJ2h0bWxDbGFzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSk7XG4gICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXkpO1xuXG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgZmllbGQuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICBpZihzY2hlbWEuZGVzY3JpcHRpb24pIGZpZWxkLmRlc2NyaXB0aW9uID0gc2NoZW1hLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZihmaWVsZC5yZWFkb25seSAmJiAhc2NoZW1hLnJlYWRvbmx5KSBmaWVsZC5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICBpZihzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiAhKCdzaG93Q2xlYXJBbGwnIGluIGZpZWxkKSkgZmllbGQuc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5wcm9jZXNzU2NoZW1hKGZpZWxkKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZpZWxkKTtcblxuICAgIGlmKGtleSkge1xuICAgICAgaWYoXy5maW5kKHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7a2V5OiBrZXl9KTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT4gXG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NoZW1hKGtleSwgZGVwdGgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWtleSkgcmV0dXJuO1xuXG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShzZXJ2aWNlLmdldEtleShrZXkpKTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0KGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQgPSBmaWVsZC5rZXkgPyBmaWVsZCA6IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmaWVsZCk7XG4gICAgcmV0dXJuIGZpZWxkICYmIChhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSA/IGZpZWxkLmRlZmF1bHQgOiBmaWVsZC5zY2hlbWEgJiYgZmllbGQuc2NoZW1hLmRlZmF1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2F0Y2hhYmxlcyhleHApIHtcbiAgICBjb25zdCB3YXRjaGFibGVzID0gW107XG4gICAgbGV0IG5lc3RlZCA9IG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApO1xuICAgIGxldCByZXBsYWNlU3RyID0gJyc7XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGlmKC9eLT9cXGQrJC8udGVzdChuZXN0ZWRbMV0pIHx8IC9eKFwifCcpLiooXCJ8JykkLy50ZXN0KG5lc3RlZFsxXSkpIHtcbiAgICAgICAgcmVwbGFjZVN0ciA9IG5lc3RlZFswXTtcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnZmZfcmVwbGFjZV9mZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoYWJsZXMucHVzaChuZXN0ZWRbMV0ucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKSk7XG4gICAgICAgIHJlcGxhY2VTdHIgPSAnJztcbiAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UobmVzdGVkWzBdLCAnJyk7XG4gICAgICB9XG4gICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLndhdGNoYWJsZXMsIGV4cC5yZXBsYWNlKC9mZl9yZXBsYWNlX2ZmL2csIHJlcGxhY2VTdHIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNvbHZlKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3Qga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBkYXRhUHJvcCA9IHJlcGxhY2VBcnJheUluZGV4KGRhdGFQcm9wLCBrZXkgfHwgZmllbGQuYXJyYXlJbmRleCk7XG4gICAgICBpZihkYXRhUHJvcC5pbmNsdWRlcygnW2FycmF5SW5kZXhdJykpIHJldHVybjtcblxuICAgICAgc2VydmljZS5oYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wKTtcblxuICAgICAgZ2V0V2F0Y2hhYmxlcyhkYXRhUHJvcCkuZm9yRWFjaCgod2F0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFssIGJhc2UsIGV4cF0gPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXFMrKS8pIHx8IFtdO1xuXG4gICAgICAgIGlmKGJhc2UpIHtcbiAgICAgICAgICBpZihiYXNlID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgICAgc2VydmljZS5yZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoYmFzZSA9PT0gJ21vZGVsLicpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgbGV0IGRhdGE7XG4gICAgLy8gZG9lcyBkZWNsYXJhdGl2ZS9mdW5jdGlvbmFsIG91dHdlaWdoIHBlcmZvcm1hbmNlP1xuICAgIGlmKGV4cC5pbmNsdWRlcygnIHx8ICcpKSB7XG4gICAgICBsZXQgZWl0aGVycyA9IGV4cC5zcGxpdCgnIHx8ICcpO1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVpdGhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihlaXRoZXJzW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIHtcbiAgICAgICAgICBkYXRhID0geDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGV4cC5pbmNsdWRlcygnICYmICcpKSB7XG4gICAgICBsZXQgYWxsID0gZXhwLnNwbGl0KCcgJiYgJyk7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gYWxsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWxsW2ldKS5nZXQoKTtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoeCkpIGRhdGEgPSB4O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZGF0YSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGV4cCkuZ2V0KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UncmUgcmVzb2x2aW5nIGZyb20gbW9kZWwgYnV0IGRlZmF1bHRzIGhhdmVuJ3QgYmVlbiBhcHBsaWVkIHlldCwgcmVzb2x2ZSBmcm9tIGRlZmF1bHQgaXRzZWxmXG4gICAgaWYoIWRhdGEgJiYgZXhwLmluZGV4T2YoJ21vZGVsLicpID09PSAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBleHAucmVwbGFjZSgnbW9kZWwuJywgJycpO1xuICAgICAgY29uc3QgZ2VuZXJpY0tleSA9IHN0cmlwSW5kZXhlcyhrZXkpO1xuICAgICAgY29uc3QgY2FjaGVkRmllbGQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSB8fCBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZ2VuZXJpY0tleSk7XG5cbiAgICAgIGRhdGEgPSAoKCkgPT4ge1xuICAgICAgICBpZihjYWNoZWRGaWVsZCAmJiBjYWNoZWRGaWVsZC5kZWZhdWx0KVxuICAgICAgICAgIHJldHVybiBjYWNoZWRGaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChmaWVsZC5kZWZhdWx0KSlcbiAgICAgICAgICByZXR1cm4gZmllbGQuZGVmYXVsdDtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoZ2VuZXJpY0tleSk7XG4gICAgICAgIGlmKHNjaGVtYSkgcmV0dXJuIHNjaGVtYS5kZWZhdWx0O1xuICAgICAgfSkoKTtcbiAgICB9XG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cbiAgICBmaWVsZFtmaWVsZFByb3BdID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgY29uc29sZS5sb2coJzo6IHJlc29sdmUgOjonLCBmaWVsZFByb3AsIGRhdGEpO1xuXG4gICAgZmllbGRQcm9wSGFuZGxlcnMuZm9yRWFjaCgoeyBwcm9wLCBoYW5kbGVyIH0pID0+IFxuICAgICAgICBwcm9wID09PSBmaWVsZFByb3AgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGRhdGFQcm9wLCBleHApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goeyBmaWVsZCwgcHJvcDogZmllbGRQcm9wLCBleHAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5jb25kaXRpb25hbHMsIChjb25kaXRpb24sIGtleSkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzZXJ2aWNlLmdldEZyb21TY29wZUNhY2hlKHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkpO1xuICAgICAgICBpZihrZXkgPT09ICdyZXF1aXJlZCcgJiYgc2NvcGUpIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1WYWxpZGF0ZScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZmllbGRcbiAgICAgICAgICAuY29uZGl0aW9uYWxzW2tleV1cbiAgICAgICAgICAubWF0Y2goL21vZGVsXFwuKFteXFxzXSspL2cpXG4gICAgICAgICAgLm1hcChwYXRoID0+IHBhdGgubWF0Y2goL21vZGVsXFwuKFteXFxzXSspLylbMV0pXG4gICAgICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRXYXRjaChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFmaWVsZC53YXRjaCkgcmV0dXJuO1xuXG4gICAgbGV0IHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcbiAgICBmaWVsZC53YXRjaCA9IF8uaXNBcnJheShmaWVsZC53YXRjaCkgPyBmaWVsZC53YXRjaCA6IFtmaWVsZC53YXRjaF07XG5cbiAgICBfLmVhY2goZmllbGQud2F0Y2gsIGZ1bmN0aW9uKHdhdGNoKSB7XG4gICAgICBpZih3YXRjaC5yZXNvbHV0aW9uKSB7XG4gICAgICAgIGxldCBjb25kaXRpb24gPSB3YXRjaC5jb25kaXRpb247XG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gd2F0Y2gucmVzb2x1dGlvbjtcbiAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgaWYoXy5pc0Z1bmN0aW9uKHJlc29sdXRpb24pKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uKGN1ciwgcHJldikge1xuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgcmVzb2x1dGlvbihjdXIsIHByZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB7fTtcblxuICAgICAgICAgIGFkanVzdG1lbnQuZGF0ZSA9IHJlc29sdXRpb24ubWF0Y2goL1xcKyA/KFxcZCspIGRheXMvKTtcblxuICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gYWRqdXN0bWVudC5kYXRlWzFdO1xuICAgICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ucmVwbGFjZShhZGp1c3RtZW50LmRhdGUsICcnKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRqdXN0bWVudC5tYXRoID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcK3xcXC18XFwvfFxcKikgPyhcXFMrKS8pO1xuXG4gICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5vcGVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICAnKyc6ICdhZGQnLFxuICAgICAgICAgICAgICAgICctJzogJ3N1YnRyYWN0JyxcbiAgICAgICAgICAgICAgICAnKic6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgJy8nOiAnZGl2aWRlJ1xuICAgICAgICAgICAgICB9W2FkanVzdG1lbnQubWF0aFsxXV07XG5cbiAgICAgICAgICAgICAgYWRqdXN0bWVudC5hZGp1c3RlciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGFkanVzdG1lbnQubWF0aFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x1dGlvbiA9IHJlc29sdXRpb24ubWF0Y2goLyhcXFMrKSA/PSA/KFxcUyspLyk7XG5cbiAgICAgICAgICBoYW5kbGVyID0gKHZhbCwgcHJldiwga2V5LCB0cmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VyQ29uZGl0aW9uID0gY29uZGl0aW9uICYmIHJlcGxhY2VBcnJheUluZGV4KGNvbmRpdGlvbiwga2V5KTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVQYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsxXSwga2V5KTtcbiAgICAgICAgICAgIGxldCBmcm9tUGF0aCA9IHJlcGxhY2VBcnJheUluZGV4KHJlc29sdXRpb25bMl0sIGtleSk7XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbih1cGRhdGVQYXRoKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgbG9vcCB3aGVyZSB0d28gd2F0Y2hlcyBrZWVwIHRyaWdnZXJpbmcgZWFjaCBvdGhlclxuICAgICAgICAgICAgaWYodHJpZ2dlciA9PT0gdXBkYXRlLnBhdGgoKS5rZXkpIHJldHVybjtcbiAgICAgICAgICAgIHRyaWdnZXIgPSB1cGRhdGUucGF0aCgpLmtleTtcblxuICAgICAgICAgICAgbGV0IGZyb20gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmcm9tUGF0aCk7XG5cbiAgICAgICAgICAgIGlmKCFjb25kaXRpb24gfHwgc2VydmljZS5wYXJzZUNvbmRpdGlvbihjdXJDb25kaXRpb24pKSB7XG4gICAgICAgICAgICAgIGlmKGFkanVzdG1lbnQuZGF0ZSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQobW9tZW50KGZyb20uZ2V0KCkpLmFkZChhZGp1c3RtZW50LmRhdGUsICdkYXlzJykudG9EYXRlKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoYWRqdXN0bWVudC5tYXRoKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgcmVzdWx0ID0gX1thZGp1c3RtZW50Lm9wZXJhdG9yXShmcm9tLmdldCgpLCBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICAvL2xldCByZXN1bHQgPSBldmFsKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJHBhcnNlKGZyb20uZ2V0KCkgKyBhZGp1c3RtZW50Lm1hdGhbMV0gKyBhZGp1c3RtZW50LmFkanVzdGVyLmdldCgpKSgpO1xuICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYSB8fCBmaWVsZC5pdGVtcyAmJiAoZmllbGQuaXRlbXNbMF0uc2NoZW1hIHx8IChmaWVsZC5pdGVtc1swXS5pdGVtcyAmJiBmaWVsZC5pdGVtc1swXS5pdGVtc1swXS5zY2hlbWEpKTtcbiAgICAgICAgICAgICAgICBpZihmaWVsZC50eXBlID09PSAnY24tY3VycmVuY3knKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcCA9IHNjaGVtYSAmJiBzY2hlbWEuZm9ybWF0ID09PSAnY3VycmVuY3ktZG9sbGFycycgPyAyIDogMDtcblxuICAgICAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5tYXRoWzFdID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXy5mbG9vcihyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmNlaWwocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLnJvdW5kKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2VydmljZS5saXN0ZW5lcnNbdXBkYXRlLnBhdGgoKS5rZXldLnByZXYgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0pIHtcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UubGlzdGVuZXJzW3RyaWdnZXJdLnRyaWdnZXIgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQocmVzdWx0IHx8IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5zZXQoZnJvbS5nZXQoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSwgd2F0Y2guaW5pdGlhbGl6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICBsZXQgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZGl0aW9uLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBsZXQgZXhwID0gL15fXFwuKC4qPylcXCgoLio/KSxbXFxzKF0qKC4qPylcXCk/XFxzKj0+W3tcXHNdKig/OnJldHVybik/KC4qPylcXH0/XFwpJC87XG4gICAgICBsZXQgWywgZm4sIGxpc3QsIHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keV0gPSBjb25kaXRpb24ubWF0Y2goZXhwKTtcbiAgICAgIHJldHVybiBfW2ZuXSgkcGFyc2UobGlzdCkoc2VydmljZSksIGdlbmVyYXRlUHJlZGljYXRlKHByZWRpY2F0ZVBhcmFtcywgcHJlZGljYXRlQm9keSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHBhcnNlKGNvbmRpdGlvbikoc2VydmljZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQcmVkaWNhdGUocGFyYW1zLCBib2R5KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PlxuICAgICAgJHBhcnNlKGJvZHkpKHBhcmFtc1xuICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1ciwgaSkgPT4geyBhY2NbY3VyXSA9IGFyZ3NbaV07IHJldHVybiBhY2M7IH0sIHt9KVxuICAgICAgICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIGlmIGZpZWxkIGlzIHBhc3NlZCBpbnN0ZWFkIG9mIGtleVxuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSAmJiAhXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGlmKCFrZXkua2V5ICYmIGtleS5pdGVtcykge1xuICAgICAgICBfLmVhY2goa2V5Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGZpZWxkLCBoYW5kbGVyLCBmaWVsZC51cGRhdGVTY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGtleSA9IGtleS5rZXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcbiAgICB2YXIgYXJyTWF0Y2ggPSBrZXkubWF0Y2goLyhbXltcXF1dKilcXFtdXFwuPyguKikvKTtcblxuICAgIGlmKGFyck1hdGNoKSB7XG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0sIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSwgcnVuSGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1ciA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IF8uZ2V0KHNlcnZpY2UuZ2V0U2NoZW1hKGtleSksICdkZWZhdWx0Jyk7XG5cbiAgICBpZighc2VydmljZS5saXN0ZW5lcnNba2V5XSkge1xuICAgICAgdmFyIHByZXYgPSBfLmlzVW5kZWZpbmVkKGN1cikgPyBhbmd1bGFyLmNvcHkoZGVmYXVsdFZhbHVlKSA6IGFuZ3VsYXIuY29weShjdXIpO1xuICAgICAgc2VydmljZS5saXN0ZW5lcnNba2V5XSA9IHtcbiAgICAgICAgaGFuZGxlcnM6IFtdLFxuICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYSxcbiAgICAgICAgcHJldjogcHJldlxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihoYW5kbGVyKSB7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKGN1ciwgbnVsbCwga2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyS2V5LCBmaWVsZEtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBvbkFycmF5ID0gZnVuY3Rpb24oY3VyLCBwcmV2LCByZW9yZGVyKSB7XG5cbiAgICAgIGlmKCFwcmV2ICYmIHByZXYgIT09IDAgJiYgKGN1ciB8IDApIDwgMSkgcmV0dXJuO1xuICAgICAgdmFyIGksIGwsIGtleTtcblxuICAgICAgaWYocHJldiA+IGN1ciB8fCByZW9yZGVyKSB7XG4gICAgICAgIHZhciBsYXN0S2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgIGFycktleSArICdbJyArIChwcmV2IC0gMSkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgYXJyS2V5ICsgJ1snICsgKHByZXYgLSAxKSArICddJztcblxuICAgICAgICAvLyBvbmx5IGRlcmVnaXN0ZXIgaGFuZGxlcnMgb25jZSBlYWNoIHRpbWUgYW4gZWxlbWVudCBpcyByZW1vdmVkXG4gICAgICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2xhc3RLZXldKSB7XG4gICAgICAgICAgZm9yKGkgPSAwLCBsID0gcHJldjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nICsgJy4nICsgZmllbGRLZXkgOlxuICAgICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IoaSA9IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nICsgJy4nICsgZmllbGRLZXkgOlxuICAgICAgICAgICAgYXJyS2V5ICsgJ1snICsgaSArICddJztcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hKTtcbiAgICAgICAgICAvL25vIG5lZWQgdG8gY2FsbCBpZiBqdXN0IHJlcmVnaXNlcmluZyBoYW5kbGVyc1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGN1ciA+IChwcmV2IHx8IDApKSB7XG4gICAgICAgIGZvcihpID0gcHJldiB8IDAsIGwgPSBjdXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nICsgJy4nICsgZmllbGRLZXkgOlxuICAgICAgICAgICAgYXJyS2V5ICsgJ1snICsgaSArICddJztcblxuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgICAgICAvL2lmKHJ1bkhhbmRsZXIpIGhhbmRsZXIobnVsbCwgbnVsbCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYXJyVmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goYXJyVmFsLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgdmFyIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgYXJyS2V5ICsgJ1snICsgaSArICddJyArICcuJyArIGZpZWxkS2V5IDpcbiAgICAgICAgYXJyS2V5ICsgJ1snICsgaSArICddJztcblxuICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgaWYoc2VydmljZS5hcnJheUxpc3RlbmVyc1thcnJLZXkgKyAnLmxlbmd0aCddKSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2FycktleSArICcubGVuZ3RoJ10uaGFuZGxlcnMucHVzaChvbkFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VydmljZS5hcnJheUxpc3RlbmVyc1thcnJLZXkgKyAnLmxlbmd0aCddID0ge1xuICAgICAgICBoYW5kbGVyczogW29uQXJyYXldLFxuICAgICAgICBwcmV2OiBhcnJWYWwgPyBhcnJWYWwubGVuZ3RoIDogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVySGFuZGxlcnMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAga2V5ID0gc2VydmljZS5nZXRLZXkoa2V5KTtcblxuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckFycmF5SGFuZGxlcnMoYXJyTWF0Y2hbMV0sIGFyck1hdGNoWzJdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSBzZXJ2aWNlLmxpc3RlbmVyc1trZXldLmhhbmRsZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYXJyS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBmaWVsZEtleSA/XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV0uJHtmaWVsZEtleX1gKSA6XG4gICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGAke2FycktleX1bJHtpfV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2RlbFdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLndhdGNoaW5nKSByZXR1cm47XG4gICAgaWYoc2VydmljZS5tb2RlbFdhdGNoKSBzZXJ2aWNlLm1vZGVsV2F0Y2goKTtcblxuICAgIHNlcnZpY2UubW9kZWxXYXRjaCA9ICRyb290U2NvcGUuJHdhdGNoKFxuICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHNlcnZpY2UubW9kZWw7IH0sXG4gICAgICAgIHNlcnZpY2Uub25Nb2RlbFdhdGNoLmJpbmQoc2VydmljZSksXG4gICAgICAgIHRydWVcbiAgICApO1xuXG4gICAgc2VydmljZS5pbml0U2NoZW1hUGFyYW1zKCk7XG4gICAgc2VydmljZS53YXRjaGluZyA9IHRydWU7XG4gICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vZGVsV2F0Y2goY3VyLCBwcmV2KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vIHdlIGFsd2F5cyBydW4gdGhyb3VnaCB0aGUgbGlzdGVuZXJzIG9uIHRoZSBmaXJzdCB1cGRhdGUgYmVjYXVzZSBhbmd1bGFyIHNlZW1zIHRvIG1lc3MgdXBcbiAgICAvLyB3aGVuIHRoZSBkZWZhdWx0cyBhcmUgYXBwbGllZCBhbmQgdXNlcyB0aGUgc2FtZSBvYmplY3QgZm9yIGJvdGggY3VyIGFuZCBwcmV2XG4gICAgaWYoc2VydmljZS5maXJzdFVwZGF0ZSB8fCAhYW5ndWxhci5lcXVhbHMoY3VyLCBwcmV2KSkge1xuICAgICAgc2VydmljZS5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgY25VdGlsLmNsZWFuTW9kZWwoc2VydmljZS5tb2RlbCk7XG5cbiAgICAgIHNlcnZpY2UucHJldlBhcmFtcyA9IGFuZ3VsYXIuY29weShzZXJ2aWNlLnBhcmFtcyk7XG5cbiAgICAgIF8uZWFjaChzZXJ2aWNlLmFycmF5TGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcih2YWwsIGxpc3RlbmVyLnByZXYpKTtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5saXN0ZW5lcnMsIChsaXN0ZW5lciwga2V5KSA9PiB7XG4gICAgICAgIGlmKGxpc3RlbmVyKSB7XG4gICAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgICAgY29uc3QgaXNJbml0QXJyYXkgPSBhbmd1bGFyLmVxdWFscyh2YWwsIFtdKSAmJiAhbGlzdGVuZXIucHJldjtcbiAgICAgICAgICBpZighYW5ndWxhci5lcXVhbHModmFsLCBsaXN0ZW5lci5wcmV2KSAmJiAhaXNJbml0QXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2LCBrZXksIGxpc3RlbmVyLnRyaWdnZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0ZW5lci50cmlnZ2VyID0gbnVsbDtcbiAgICAgICAgICAgIGxpc3RlbmVyLnByZXYgPSBhbmd1bGFyLmNvcHkodmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmIFxuICAgICAgICAgICAgIWFuZ3VsYXIuaXNVbmRlZmluZWQodmFsKSAmJlxuICAgICAgICAgICAgIWlzSW5pdEFycmF5ICYmXG4gICAgICAgICAgICB2YWwgIT09IG51bGwvKiAmJlxuICAgICAgICAgICAgIWFuZ3VsYXIuZXF1YWxzKHZhbCwgc2VydmljZS5nZXREZWZhdWx0KGtleSkpKi8pIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaXBJbmRleGVzKGtleSkge1xuICAgIHJldHVybiBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QXJyYXlDb3B5V2F0Y2goKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdzY2hlbWFGb3JtUHJvcGFnYXRlRm9ybUNvbnRyb2xsZXInLCAoZXZlbnQsIHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm0gfSA9IHNjb3BlO1xuICAgICAgaWYoIWZvcm0ua2V5KSB7XG4gICAgICAgIGZvcm0uY2FjaGVLZXkgPSBgJHtmb3JtLnR5cGV9LSR7Xy51bmlxdWVJZCgpfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBrZXkgPSBmb3JtLmNhY2hlS2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZvcm0ua2V5KTtcblxuICAgICAgaWYoXy5pc051bWJlcihzY29wZS5hcnJheUluZGV4KSkge1xuICAgICAgICBjb25zdCBnZW5lcmljS2V5ID0gc3RyaXBJbmRleGVzKGtleSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2NvcGUuYXJyYXlJbmRleDtcbiAgICAgICAgZm9ybS5hcnJheUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgaWYoIXNlcnZpY2UuZ2V0QXJyYXlDb3B5KGdlbmVyaWNLZXksIGluZGV4KSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkUHJvcHMoZm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZm9ybS5jb25kaXRpb24pIGZvcm0uY29uZGl0aW9uID0gJ3RydWUnO1xuXG4gICAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBnZW5lcmljS2V5LCBpbmRleCk7XG4gICAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZ2VuZXJpY0tleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VydmljZS5hZGRUb1Njb3BlQ2FjaGUoc2NvcGUsIGtleSk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignc2NoZW1hRm9ybURlbGV0ZUZvcm1Db250cm9sbGVyJywgKGV2ZW50LCBzY29wZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gc2VydmljZS5saXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmKGxpc3RlbmVyKSBsaXN0ZW5lci5oYW5kbGVycyA9IFtdO1xuXG4gICAgICBjb25zdCB1bmluZGV4ZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gICAgICBjb25zdCBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzRm9yKHVuaW5kZXhlZEtleSk7XG5cbiAgICAgIGNvcGllcy5mb3JFYWNoKChsaXN0KSA9PiBsaXN0LnNwbGljZShpbmRleCwgMSkpO1xuXG4gICAgICBpZihzY29wZS5mb3JtLmxpbmspIHtcbiAgICAgICAgdmFyIGxpc3QgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZS5mb3JtLmxpbmssIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXJyYXlDb3B5KGZvcm0sIGtleSwgaW5kZXgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZighaW5kZXggfHwgaW5kZXggPCAwKSBpbmRleCA9IDA7XG4gICAgaWYoIXNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSkgc2VydmljZS5hcnJheUNvcGllc1trZXldID0gW107XG4gICAgc2VydmljZS5hcnJheUNvcGllc1trZXldW2luZGV4XSA9IGZvcm07XG4gICAgLy9zZXJ2aWNlLmFycmF5Q29waWVzW2tleV0ucHVzaChmb3JtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29weShrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgY29waWVzID0gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICAgIHJldHVybiBjb3BpZXMgJiYgY29waWVzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBfLnBsdWNrKHNlcnZpY2UuZ2V0QXJyYXlTY29wZXMoa2V5KSwgJ2Zvcm0nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5Q29waWVzRm9yKGtleVN0YXJ0KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAga2V5U3RhcnQgKz0gJ1tdJztcblxuICAgIHJldHVybiBfLmZpbHRlcihzZXJ2aWNlLmFycmF5Q29waWVzLCAoY29weSwga2V5KSA9PiBrZXkuaW5jbHVkZXMoa2V5U3RhcnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5U2NvcGVzKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5hcnJheUNvcGllc1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9TY29wZUNhY2hlKHNjb3BlLCBrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdjYWNoaW5nIGR1cGxpY2F0ZSBzY29wZSBmb3InLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY29wZUNhY2hlW2tleV0gPSBzY29wZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21TY29wZUNhY2hlKGtleSkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLnNjb3BlQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoSW50U3RySW5kZXgoZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKC0/XFxkK3xcIi4qXCJ8Jy4qJyldLyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgbGV0IFt0b1JlcGxhY2VdID0gbWF0Y2hJbnRTdHJJbmRleChleHApIHx8IFtdO1xuICAgIGNvbnN0IHJlcGxhY2VkID0gW107XG5cbiAgICB3aGlsZSh0b1JlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2VkLnB1c2godG9SZXBsYWNlKTtcbiAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgYGZmX3Ike3JlcGxhY2VkLmxlbmd0aCAtIDF9X2ZmYCk7XG4gICAgICBbdG9SZXBsYWNlXSA9IG1hdGNoSW50U3RySW5kZXgoZXhwKSB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG5cbiAgICByZXR1cm4gbWF0Y2ggJiZcbiAgICAgIHJlcGxhY2VkLmxlbmd0aCA/XG4gICAgICBtYXRjaC5tYXAoKGV4cCkgPT4ge1xuICAgICAgICBsZXQgW3RvUmVwbGFjZSwgaW5kZXhdID0gZXhwLm1hdGNoKC9mZl9yKFxcZCspX2ZmLykgfHwgW107XG4gICAgICAgIHdoaWxlKHRvUmVwbGFjZSkge1xuICAgICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZWRbaW5kZXhdKTtcbiAgICAgICAgICBbdG9SZXBsYWNlLCBpbmRleF0gPSBleHAubWF0Y2goL2ZmX3IoXFxkKylfZmYvKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwO1xuICAgICAgfSkgOlxuICAgICAgbWF0Y2g7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG5cbiAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZCwgZGVwdGgpLmdldCgpO1xuICAgICAgY29uc3Qga2V5VmFsID0gXy5pc1VuZGVmaW5lZChwYXJzZWQpID9cbiAgICAgICAgJycgOlxuICAgICAgICBfLmlzU3RyaW5nKHBhcnNlZCkgP1xuICAgICAgICAgIGBcIiR7cGFyc2VkfVwiYCA6XG4gICAgICAgICAgcGFyc2VkO1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZH1dYCwgYFske2tleVZhbH1dYCk7XG4gICAgICBbLCBuZXN0ZWRdID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgXG4gICAgaWYoIV8uaXNTdHJpbmcoZXhwKSkge1xuICAgICAgcmV0dXJuIHsgZ2V0OiAoKSA9PiBleHAgfTtcbiAgICB9XG5cbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnW15cXCddKid8XCJbXlxcXCJdKlwifC0/WzAtOS5dK3xcXFtdfFxce30pJC8udGVzdChleHApKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZighZXhwKSByZXR1cm4gZXhwO1xuICAgICAgICAgIGNvbnN0IGlzU3RyID0gZXhwLm1hdGNoKC9cIihbXlxcXCJdKilcIi8pIHx8IGV4cC5tYXRjaCgvJyhbXlxcJ10qKScvKTtcbiAgICAgICAgICBpZihpc1N0cikgcmV0dXJuIGlzU3RyWzFdO1xuICAgICAgICAgIHN3aXRjaChleHApIHtcbiAgICAgICAgICAgIGNhc2UgJ251bGwnOiByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ2ZhbHNlJzogcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzogcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAnW10nOiByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlICd7fSc6IHJldHVybiB7fTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBwYXJzZUZsb2F0KGV4cCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGV4cCA9IHNlcnZpY2UuZ2V0S2V5KGV4cCk7XG5cbiAgICBjb25zdCBtYXRjaCA9IGV4cC5tYXRjaCgvXihtb2RlbFxcLik/KFxcUyspJC8pO1xuXG4gICAgY29uc3QgbW9kZWxWYWx1ZSA9IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBzdGFydCA9IGRlcHRoIHx8IHNlcnZpY2U7XG5cbiAgICAgICAgd2hpbGUoc3RhcnQgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc3RhcnQgPSBzdGFydFtwYXRoLnNoaWZ0KCldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICYmIHN0YXJ0W3BhdGhbMF1dO1xuICAgICAgfSxcblxuICAgICAgZ2V0QXNzaWduYWJsZSgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVkID0gc2VydmljZS5yZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCk7XG4gICAgICAgIGxldCBwYXRoID0gT2JqZWN0UGF0aC5wYXJzZShyZXNvbHZlZCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgYXNzaWduYWJsZSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICBpZih2YWwgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgZGVsZXRlIGFzc2lnbmFibGUub2JqW2Fzc2lnbmFibGUua2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhc3NpZ25hYmxlLm9ialthc3NpZ25hYmxlLmtleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH0sXG5cbiAgICAgIHBhdGgoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXhwOiBleHAsXG4gICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgIGtleTogbWF0Y2hbMl1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQXJyYXkoYXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGFycmF5LmtleSk7XG5cbiAgICBhcnJheS5zb3J0T3B0aW9ucyA9IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZSwgdWkpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gc2VydmljZS5hcnJheUxpc3RlbmVyc1tgJHtrZXl9Lmxlbmd0aGBdO1xuICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGhhbmRsZXIobGlzdGVuZXIucHJldiwgbGlzdGVuZXIucHJldiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NTZWN0aW9uKGFycmF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlY3Rpb24uaXRlbXMsIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBjb21wb25lbnQudHlwZSA9ICdzZWN0aW9uJztcbiAgICBjb21wb25lbnQuaHRtbENsYXNzID0gJ3Jvdyc7XG5cbiAgICB2YXIgY29scyA9IDEyIC8gXy5yZWplY3QoY29tcG9uZW50Lml0ZW1zLCAnaGlkZGVuJykubGVuZ3RoO1xuXG4gICAgXy5lYWNoKGNvbXBvbmVudC5pdGVtcywgZnVuY3Rpb24oZmllbGQsIGkpIHtcbiAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGZpZWxkKTtcbiAgICAgIGNvbXBvbmVudC5pdGVtc1tpXSA9IHtcbiAgICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgICBodG1sQ2xhc3M6ICdjb2wtc20tJyArIGNvbHMsXG4gICAgICAgIGl0ZW1zOiBbZmllbGRdXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbmN5KGZpZWxkKSB7XG4gICAgZmllbGQuY3VycmVuY3lGb3JtYXQgPSB7XG4gICAgICAnY3VycmVuY3ktZG9sbGFycyc6ICdkb2xsYXJzJyxcbiAgICAgICdjdXJyZW5jeS1taWNyb2NlbnRzJzogJ21pY3JvY2VudHMnLFxuICAgICAgJ2N1cnJlbmN5JzogJ2NlbnRzJ1xuICAgIH1bZmllbGQuc2NoZW1hLmZvcm1hdF07XG5cbiAgICBmaWVsZC50eXBlID0gJ2NuLWN1cnJlbmN5JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZXJjZW50YWdlKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1wZXJjZW50YWdlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXVzYWJsZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJldXNhYmxlJztcbiAgICBmaWVsZC52aWV3ID0gZmllbGQudmlldyB8fCAnbmV3JztcbiAgICBmaWVsZC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgIGZpZWxkLml0ZW1zID0gW3tcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBmaWVsZC5pdGVtcyxcbiAgICAgIGNvbmRpdGlvbjogJyFtb2RlbC4nICsgc2VydmljZS5nZXRLZXkoZmllbGQua2V5KSArICcuaWQnXG4gICAgfV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTWVkaWFVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1tZWRpYXVwbG9hZCc7XG4gICAgXy5lYWNoKGZpZWxkLmRhdGEsIGZ1bmN0aW9uKGRhdGFQcm9wLCBrZXkpIHtcbiAgICAgIGZpZWxkLmRhdGFba2V5XSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGRhdGFQcm9wKS5nZXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDc3ZVcGxvYWQoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1jc3Z1cGxvYWQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvcyhmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmFkaW9zJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb2J1dHRvbnMocmFkaW9zKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJhZGlvcy50eXBlID0gJ2NuLXJhZGlvYnV0dG9ucyc7XG4gICAgaWYocmFkaW9zLmZ1bGxXaWR0aCkge1xuICAgICAgcmFkaW9zLmJ0bkNsYXNzID0gJ2NvbC1zbS0nICsgXy5kaXZpZGUoMTIsIHJhZGlvcy50aXRsZU1hcC5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEYXRlKGRhdGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGF0ZS50eXBlID0gJ2NuLWRhdGV0aW1lcGlja2VyJztcblxuICAgIGlmKGRhdGUuc2NoZW1hLmZvcm1hdCA9PT0gJ3RpbWUtbWludXRlcycpIHtcbiAgICAgIGRhdGUubWF4VmlldyA9ICdob3VyJztcbiAgICAgIGRhdGUuaWNvbkNsYXNzID0gJ2ZhIGZhLWNsb2NrLW8nO1xuXG4gICAgICBkYXRlLm1vZGVsRm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtID0gbW9tZW50KHZhbCk7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkobS5ob3VycygpLCA2MCksIG0ubWludXRlcygpKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUubW9kZWxQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGQgPSBwYXJzZUludCh2YWwpO1xuICAgICAgICBsZXQgaG91cnMgPSBfLmZsb29yKGQgLyA2MCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZCAlIDYwO1xuXG4gICAgICAgIHJldHVybiBtb21lbnQoKS5zdGFydE9mKCdkYXknKS5hZGQoJ2hvdXJzJywgaG91cnMpLmFkZCgnbWludXRlcycsIG1pbnV0ZXMpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3Rm9ybWF0dGVyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBkYXRlLm1vZGVsUGFyc2VyKHZhbCkuZm9ybWF0KGRhdGUuZGF0ZUZvcm1hdCk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdQYXJzZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1hdGNoID0gdmFsLm1hdGNoKC9eKFxcZHsxLDJ9KTo/KFxcZHsxLDJ9KT8gKGF8cCkvKTtcbiAgICAgICAgaWYoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGhvdXJzID0gXy5hZGQobWF0Y2hbMV0gPT09ICcxMicgPyAwIDogbWF0Y2hbMV0sIG1hdGNoWzNdID09PSAnYScgPyAwIDogMTIpO1xuICAgICAgICBsZXQgbWludXRlcyA9IG1hdGNoWzJdIHx8ICcwMCc7XG5cbiAgICAgICAgaWYobWludXRlcy5sZW5ndGggPT09IDEpIG1pbnV0ZXMgKz0gJzAnO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KGhvdXJzLCA2MCksIG1pbnV0ZXMpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCkge1xuICAgIGxldCBpc0FycmF5ID0gc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JztcbiAgICByZXR1cm4gc2VsZWN0LnZhbHVlUHJvcGVydHkgfHxcbiAgICAgIChpc0FycmF5ID8gc2VsZWN0LnNjaGVtYS5pdGVtcy50eXBlIDogc2VsZWN0LnNjaGVtYS50eXBlKSAhPT0gJ29iamVjdCcgJiYgJ3ZhbHVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgdGl0bGVNYXApIHtcbiAgICB0aXRsZU1hcCA9IHRpdGxlTWFwIHx8IHNlbGVjdC5nZXRUaXRsZU1hcCgpO1xuICAgIGxldCB2YWxQcm9wID0gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpO1xuICAgIGlmKCF2YWxQcm9wKSByZXR1cm47XG5cbiAgICBpZihzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknKSB7XG4gICAgICBpZighdmFsIHx8ICFfLmlzQXJyYXkodmFsKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgbWFwVmFsID0gdmFsLm1hcCh4ID0+IF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogeH0pKS5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICByZXR1cm4gbWFwVmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHZhbH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qoc2VsZWN0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZWxlY3Quc2NoZW1hO1xuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSB8fCBzZWxlY3QudGl0bGVNYXApIHtcbiAgICAgIHNlbGVjdC5nZXRUaXRsZU1hcCA9ICgpID0+XG4gICAgICAgIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuXG4gICAgICBpZighc2VsZWN0Lm9uSW5pdCkge1xuICAgICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIHZhciBrZXkgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXMucTtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gZnVuY3Rpb24ocSkge1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIGlmKGtleSkge1xuICAgICAgICAgIHBhcmFtc1trZXldID0gcTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyB3cmFwIGluIHN0cmluZyBzbyByZXR1cm5zIHRydXRoeSB3aGVuIGNvbXBpbGVkLCBidXQgY29udmVydGVkIHRvIG51bWJlciB3aXRoaW4gZGlyZWN0aXZlXG4gICAgICBpZigha2V5KSBzZWxlY3QubWluTG9va3VwID0gJzAnO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICBzZWxlY3QuaXRlbUZvcm1hdHRlciA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKHNlbGVjdC5kaXNwbGF5Rm9ybWF0KTtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0LnR5cGUuaW5jbHVkZXMoJ2NuLWF1dG9jb21wbGV0ZScpKSB7XG4gICAgICBpZihzZWxlY3QuaXRlbXMpIHtcbiAgICAgICAgc2VsZWN0LmRldGFpbGVkTGlzdCA9IHRydWU7XG5cbiAgICAgICAgaWYoc2VsZWN0Lml0ZW1zWzBdLnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgaWYoc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdC5pdGVtcyA9IFt7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3QuaXRlbXNcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkc2V0KHNlbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUtZGV0YWlsZWQnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFzZWxlY3Quc2VsZWN0aW9uU3R5bGUpIHtcbiAgICAgICAgICBzZWxlY3Quc2VsZWN0aW9uU3R5bGUgPSBzZWxlY3Qua2V5ID09PSAndGFncycgP1xuICAgICAgICAgICAgJ3RhZ3MnIDogKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScgJiYgc2VsZWN0LnNjaGVtYS5tYXhJdGVtcyAhPT0gMSkgP1xuICAgICAgICAgICAgICAnbGlzdCcgOiAnc2VsZWN0JztcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3QudHlwZSA9ICdjbi1hdXRvY29tcGxldGUnO1xuICAgICAgfVxuXG4gICAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlKSB7XG4gICAgICAgICRyb290U2NvcGUuJG9uKCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgKGUsIGRhdGEpID0+IHtcbiAgICAgICAgICBpZihkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICAgICAgbGV0IHZhbCA9IG1vZGVsVmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICBpZih2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pOyBcbiAgICAgICAgICAgICAgaWYodmFsaWQgPT09IHVuZGVmaW5lZCkgbW9kZWxWYWx1ZS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihzZWxlY3Qua2V5LCBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgfSwgc2VsZWN0LnVwZGF0ZVNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSksXG4gICAgICAgIHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpLFxuICAgICAgICBoYW5kbGVyO1xuXG4gICAgaWYoc2NoZW1hICYmIHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RGlzcGxheS5zZWxlY3REaXNwbGF5ID0gZmFsc2U7XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0RmllbGQua2V5LCBoYW5kbGVyLCBzZWxlY3RGaWVsZC51cGRhdGVTY2hlbWEsIHRydWUpO1xuICAgIC8vc2VydmljZS5wcm9jZXNzRmllbGQoc2VsZWN0RGlzcGxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYoaXRlbS5jb25kaXRpb24gIT09ICdmYWxzZScpIHtcbiAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbih2YWwsIHByZXYsIGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gZ2V0QXJyYXlJbmRleChrZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpbmRleCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGluZGV4ZWRTZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICB2YXIgZm9ybUNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXMoa2V5KTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXy5lYWNoKGZvcm1Db3BpZXMsIGZ1bmN0aW9uKGNvcHkpIHtcbiAgICAgICAgICAgIGlmKGdldEFycmF5SW5kZXgoY29weSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgY29weS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgICAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShjb3B5LmtleSksIHNlcnZpY2UubW9kZWwpLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgb2JqZWN0cyB0aGF0IGRvbid0IGhhdmUgdmFsdWVzIHNldCBpbiB0aGUgc2VsZWN0RmllbGRcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZXJ2aWNlLmdldEtleShzZWxlY3REaXNwbGF5LmtleSksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICBpZihrZXkgPT09IHNlbGVjdEtleSkgcmV0dXJuO1xuICAgICAgXy5lYWNoKG1vZGVsLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICAgIHZhciBpbmRleGVkS2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KGtleSwgaSk7XG4gICAgICAgIHZhciBzcGxpdEluZGV4ZWRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGluZGV4ZWRLZXkpO1xuICAgICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkS2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoaXRlbVZhbHVlICYmICFfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEluZGV4ZWRLZXlbc3BsaXRJbmRleGVkS2V5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBoYW5kbGUgbmV3IG9iamVjdHMgd2l0aCB2YWx1ZXMgc2V0IGluIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihlbGVtLCBpKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaSk7XG4gICAgICB2YXIgc2VsZWN0TW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgXy5lYWNoKGVsZW0sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChrZXkpO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcnVuIGhhbmRsZXIgb25jZSBhbGwgYXJyYXlDb3BpZXMgaGF2ZSBiZWVuIGluc3RhbnRpYXRlZFxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGtleU1hcCA9IF8ucGx1Y2soXy5yZWplY3Qoc2VsZWN0RGlzcGxheS5pdGVtcywge1wiY29uZGl0aW9uXCI6XCJmYWxzZVwifSksICdrZXknKTtcbiAgICB2YXIgb25jZSA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywgZnVuY3Rpb24oZXZlbnQsIGtleSkge1xuICAgICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKG1vZGVsKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IG1vZGVsLmxlbmd0aCAqIChrZXlNYXAubGVuZ3RoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhrZXlNYXAsIGtleSkpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvdW50ID09PSB0b3RhbCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhbmRsZXIobnVsbCwgbnVsbCwgJ1snICsgaSArICddJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXNldENvdW50ID0gJHJvb3RTY29wZS4kb24oJ2ZsZXhGb3JtLnVwZGF0ZVBhZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9KTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKG9uY2UpO1xuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2gocmVzZXRDb3VudCk7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3RLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICBpZihfLmluY2x1ZGVzKHNlbGVjdFZhbHVlLCBzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNvbmRpdGlvbiA9ICdmYWxzZSc7XG4gICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIGlmKCFzZWxlY3RWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0VmFsdWUucHVzaChzcGxpdEtleVtzcGxpdEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiB0aGUgZGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdHMgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSkuZGVmYXVsdDtcbiAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgIHNlbGVjdE1vZGVsLnNldChzZWxlY3RWYWx1ZSk7XG4gICAgfSk7XG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICB2YXIgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3REaXNwbGF5LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgaWYoZGVmYXVsdHMgJiYgIW1vZGVsLmdldCgpKSB7XG4gICAgICBtb2RlbC5zZXQoZGVmYXVsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTY2hlbWFSZWZyZXNoKHJlZnJlc2gpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgc2VydmljZS5yZWZyZXNoU2NoZW1hID0gXy5kZWJvdW5jZShmdW5jdGlvbih1cGRhdGVTY2hlbWEpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBfLmV4dGVuZChjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKCksIHNlcnZpY2UucGFyYW1zKTtcbiAgICAgIHZhciBkaWZmID0gY25VdGlsLmRpZmYoc2VydmljZS5zY2hlbWEucGFyYW1zLCBwYXJhbXMsIHRydWUpO1xuICAgICAgdmFyIGtleXM7XG5cbiAgICAgIGlmKGRpZmYgfHwgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIGlmKHVwZGF0ZVNjaGVtYSkgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IHVwZGF0ZVNjaGVtYTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcblxuICAgICAgICAgIGlmKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGlmZiA9IF8ub21pdChkaWZmLCBfLmlzTnVsbCk7XG4gICAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcmFtcy51cGRhdGVTY2hlbWEgPSBfLmZpcnN0KGtleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXBhcmFtcy51cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgICBkaWZmID0gY25VdGlsLmRpZmYocGFyYW1zLCBfLm9taXQoc2VydmljZS5zY2hlbWEucGFyYW1zLCAndXBkYXRlU2NoZW1hJykpO1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZnJlc2gocGFyYW1zKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgICAgICAgIC8vc2VydmljZS51cGRhdGVTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICBzZXJ2aWNlLnJlZnJlc2hEYXRhID0gXy5kZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgIHJlZnJlc2goXy5leHRlbmQoc2VydmljZS5zY2hlbWEucGFyYW1zLCB7dXBkYXRlU2NoZW1hOiAncmVmcmVzaERhdGEnfSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICAgIHNlcnZpY2UucHJvY2Vzc1VwZGF0ZWRTY2hlbWEoc2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTAwKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ2ZmUmVmcmVzaERhdGEnLCBzZXJ2aWNlLnJlZnJlc2hEYXRhKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoc2NoZW1hLmRpZmYpIHtcbiAgICAgIHNlcnZpY2Uuc2NoZW1hLnBhcmFtcyA9IHNjaGVtYS5wYXJhbXM7XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmRhdGEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpkYXRhJywgc2NoZW1hLmRpZmYuZGF0YSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5kYXRhLCAoZGF0YSwgcHJvcCkgPT4ge1xuICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5kYXRhICYmICFfLmlzRW1wdHkoc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhKSAmJiAhZGF0YS5yZXNldCkge1xuICAgICAgICAgICAgZGF0YS5kYXRhID0gc2VydmljZS5zY2hlbWEuZGF0YVtwcm9wXS5kYXRhLmNvbmNhdChkYXRhLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdID0gZGF0YTtcbiAgICAgICAgICBpZihzZXJ2aWNlLnJlc29sdmVSZWdpc3Rlcltwcm9wXSkge1xuICAgICAgICAgICAgXy5lYWNoKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdLCAocmVnaXN0ZXJzKSA9PiB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVycy5mb3JFYWNoKHJlZ2lzdGVyID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUocmVnaXN0ZXIuZmllbGQsIHJlZ2lzdGVyLnByb3AsIHJlZ2lzdGVyLmV4cCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuc2NoZW1hKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6c2NoZW1hJywgc2NoZW1hLmRpZmYuc2NoZW1hKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLnNjaGVtYSwgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgICBzZXJ2aWNlLnNjaGVtYS5zY2hlbWEucHJvcGVydGllc1trZXldID0gc2NoZW1hO1xuICAgICAgICAgIHJlcHJvY2Vzc1NjaGVtYShzY2hlbWEsIGtleSwga2V5cyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihzY2hlbWEuZGlmZi5mb3JtKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybURpZmY6Zm9ybScsIHNjaGVtYS5kaWZmLmZvcm0pO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuZm9ybSwgZnVuY3Rpb24oZm9ybSkge1xuXG4gICAgICAgICAgaWYoa2V5cy5pbmRleE9mKGZvcm0ua2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChmb3JtLmtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZG9uJ3Qgd2FudCB0byBvdmVycmlkZSBrZXkgd2hlbiBleHRlbmRpbmcgY2FjaGVkIG9iamVjdHNcbiAgICAgICAgICAvL3ZhciBrZXkgPSBmb3JtLmtleTtcbiAgICAgICAgICAvL2RlbGV0ZSBmb3JtLmtleTtcblxuICAgICAgICAgIHZhciBjYWNoZWQgPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoZm9ybS5rZXkpO1xuICAgICAgICAgIGlmKGNhY2hlZCkge1xuICAgICAgICAgICAgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjYWNoZWQsIGZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhmb3JtLmtleSk7XG4gICAgICAgICAgaWYoY29waWVzKSB7XG4gICAgICAgICAgICBjb3BpZXMuZm9yRWFjaChjb3B5ID0+IGNvcHkgJiYgc2VydmljZS5yZXByb2Nlc3NGaWVsZChjb3B5LCBmb3JtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgXy5lYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHZhciBmb3JtID0gc2VydmljZS5nZXRGcm9tRm9ybUNhY2hlKGtleSk7XG4gICAgICAgICAgaWYoZm9ybSkgc2VydmljZS5wcm9jZXNzRmllbGQoZm9ybSk7XG4gICAgICAgICAgaWYoa2V5LmluY2x1ZGVzKCdbXScpKSB7XG4gICAgICAgICAgICB2YXIgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllcyhrZXkpO1xuICAgICAgICAgICAgXy5lYWNoKGNvcGllcywgZnVuY3Rpb24oY29weSkge1xuICAgICAgICAgICAgICBpZihjb3B5KSBzZXJ2aWNlLnByb2Nlc3NGaWVsZChjb3B5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2VydmljZS51cGRhdGVTY2hlbWEoc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NGaWVsZChjdXJyZW50LCB1cGRhdGUsIGlzQ2hpbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICAvLyBvdGhlciBsb2dpYyBpbiB0aGUgc2VydmljZSB3aWxsIGFkZCBjb25pdGlvbiA9ICd0cnVlJyB0byBmb3JjZVxuICAgIC8vIGNvbmRpdGlvbiB0byBldmFsIHRydWUsIHNvIHdlIHNldCB0aGUgdXBkYXRlIGNvbmRpdGlvbiB0byAndHJ1ZSdcbiAgICAvLyBiZWZvcmUgY29tcGFyaW5nXG4gICAgaWYoIXVwZGF0ZS5jb25kaXRpb24gJiYgY3VycmVudC5jb25kaXRpb24pIHVwZGF0ZS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgbGV0IHJlZHJhdyA9ICFpc0NoaWxkICYmIGN1cnJlbnQuY29uZGl0aW9uICE9PSB1cGRhdGUuY29uZGl0aW9uO1xuXG4gICAgXy5leHRlbmQoY3VycmVudCwgXy5vbWl0KHVwZGF0ZSwgJ2l0ZW1zJywgJ2tleScpKTtcblxuICAgIGN1cnJlbnQuX29nS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZighdXBkYXRlW2tleV0pIGRlbGV0ZSBjdXJyZW50W2tleV07XG4gICAgfSk7XG4gICAgY3VycmVudC5fb2dLZXlzID0gXy5rZXlzKHVwZGF0ZSk7XG5cbiAgICBzZXJ2aWNlLmRlcmVnaXN0ZXJIYW5kbGVycyh1cGRhdGUua2V5KTtcblxuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY25GbGV4Rm9ybVJlcHJvY2Vzc0ZpZWxkJywgdXBkYXRlLmtleSk7XG5cbiAgICAvLyB3aHkgZG8gd2UgcmVkcmF3PyBJZiB3ZSdyZSBkb2luZyBpdCB0byBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAvLyB0aGF0IGhhcyBiZWVuIGFkZHJlc3NlZCBmcm9tIHRoZSBhbmd1bGFyLXNjaGVtYS1mb3JtIGxpYnJhcnlcbiAgICAvLyBpZiB0aGVyZSdzIGFub3RoZXIgaXNzdWUsIHRyeSB0cmlnZ2VyaW5nIHRoZSBzcGVjaWZpYyBhY3Rpb24gcmVxdWlyZWRcbiAgICAvLyBpbnN0ZWFkIG9mIHJlZHJhd2luZyB0aGUgd2hvbGUgZm9ybVxuICAgIGlmKHJlZHJhdyAmJiBjdXJyZW50LnJlZHJhdykge1xuICAgICAgY29uc29sZS5sb2coJ1RPRE86IHNlZSBpZiB0aGlzIGNhbiBiZSByZW1vdmVkJyk7IFxuICAgICAgY3VycmVudC5yZWRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXksIGtleXMpIHtcbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBpZihzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmKHNjaGVtYS5pdGVtcyAmJiBzY2hlbWEuaXRlbXMucHJvcGVydGllcykge1xuICAgICAgXy5lYWNoKHNjaGVtYS5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIHN1YktleSkge1xuICAgICAgICByZXByb2Nlc3NTY2hlbWEoc2NoZW1hLCBrZXkgKyAnW10uJyArIHN1YktleSwga2V5cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEVycm9yKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG1lc3NhZ2U6IGZpZWxkLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEVycm9ycygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZXJ2aWNlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsgZXJyb3Iua2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlQXJyYXlJbmRleChyZXNvbHZlLCBrZXkpIHtcbiAgICBpZighcmVzb2x2ZS5pbmNsdWRlcygnYXJyYXlJbmRleCcpKSByZXR1cm4gcmVzb2x2ZTtcbiAgICBpZihfLmlzTnVtYmVyKGtleSkpIHJldHVybiByZXNvbHZlLnJlcGxhY2UoL2FycmF5SW5kZXgvZywga2V5KTtcbiAgICBjb25zdCBhcnJheUluZGV4S2V5ID0gLyhbXi5bXSopXFxbYXJyYXlJbmRleFxcXS8uZXhlYyhyZXNvbHZlKTtcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVsxXSArICdcXFxcWygtP1xcXFxkKylcXFxcXScpO1xuICAgIGNvbnN0IGluZGV4ID0gcmUuZXhlYyhrZXkpO1xuICAgIGlmKCFpbmRleCkgcmV0dXJuIHJlc29sdmU7XG4gICAgcmV0dXJuIHJlc29sdmUucmVwbGFjZShuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMF0ucmVwbGFjZSgvKFxcW3xcXF0pL2csICdcXFxcJDEnKSwgJ2cnKSwgaW5kZXhbMF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChrZXkpIHtcbiAgICBpZihfLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHJldHVybiBfLmZpbmQoa2V5LmtleSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfLmlzTnVtYmVyKGtleSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC9cXFsoXFxkKylcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBcnJheUluZGV4KGtleSwgaW5kZXgsIGFzQXJyYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIGtleUNvcHk7XG4gICAgaWYoXy5pc1N0cmluZyhrZXkpKSB7XG4gICAgICBrZXlDb3B5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlDb3B5ID0gXy5jbG9uZShrZXkpO1xuICAgIH1cbiAgICB2YXIgaW5kZXhPZkluZGV4ID0ga2V5Q29weS5pbmRleE9mKCcnKTtcbiAgICBrZXlDb3B5W2luZGV4T2ZJbmRleF0gPSBpbmRleDtcblxuICAgIGlmKGFzQXJyYXkpIHtcbiAgICAgIHJldHVybiBrZXlDb3B5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VydmljZS5nZXRLZXkoa2V5Q29weSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UuZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1TZXJ2aWNlJywgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnNlcnZpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9iamVjdHBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtb2RhbE1hcCA9IHt9O1xuY29uc3QgcHJvbWlzZU1hcCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRQcm9taXNlcyhzdGF0ZSkge1xuICBpZihwcm9taXNlTWFwW3N0YXRlXSkgcmV0dXJuIHByb21pc2VNYXBbc3RhdGVdO1xuXG4gIGNvbnN0IHByb21pc2UgPSB7fTtcbiAgcHJvbWlzZU1hcFtzdGF0ZV0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvbWlzZShzdGF0ZSwgaWQsICRxKSB7XG4gIGNvbnN0IHByb21pc2VzID0gZ2V0UHJvbWlzZXMoc3RhdGUpO1xuICBpZihwcm9taXNlc1tpZF0pIHJldHVybiBwcm9taXNlc1tpZF07XG5cbiAgY29uc3QgcHJvbWlzZSA9ICRxLmRlZmVyKCk7XG4gIHByb21pc2VzW2lkXSA9IHByb21pc2U7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50IH0pID0+IHBhcmVudClcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UoJHN0YXRlUGFyYW1zLCAkcSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TWFwcGluZyxcbiAgICByZXNvbHZlTWFwcGluZ1xuICB9O1xuXG4gIC8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZXNvbHZlTWFwcGluZyhzdGF0ZSwgaWQsIHBhcmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzY29wZSB9ID0gb3B0aW9ucztcbiAgICBpZihzY29wZSkge1xuICAgICAgc2NvcGUub3B0aW9ucyA9IHNjb3BlLm9wdGlvbnMgfHwge307XG4gICAgICBzY29wZS5vcHRpb25zLmRlc3Ryb3lTdHJhdGVneSA9ICdyZXRhaW4nO1xuICAgICAgbW9kYWxNYXBbc3RhdGVdLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIGNvbnN0IGQgPSBnZXRQcm9taXNlKHN0YXRlLCBpZCwgJHEpO1xuICAgIGQucmVzb2x2ZSh7IHBhcmVudCwgb3B0aW9ucyB9KTtcbiAgICByZXR1cm4gZC5wcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFwcGluZyhzdGF0ZSkge1xuICAgIGNvbnN0IGQgPSAkcS5kZWZlcigpO1xuICAgIGdldFByb21pc2UoJHN0YXRlUGFyYW1zLm1vZGFsLCAkc3RhdGVQYXJhbXMubW9kYWxJZCwgJHEpXG4gICAgICAucHJvbWlzZVxuICAgICAgLnRoZW4oKHsgcGFyZW50LCBvcHRpb25zIH0pID0+IHtcbiAgICAgICAgZC5yZXNvbHZlKHsgc3RhdGU6IG1vZGFsTWFwW3N0YXRlXSwgb3B0aW9ucyB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZS5qcyIsImZ1bmN0aW9uIEZsZXhGb3JtTW9kYWxMb2FkZXIoRmxleEZvcm1Nb2RhbCwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgYWN0aXZhdGUoKTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgRmxleEZvcm1Nb2RhbFxuICAgICAgLm9wZW4odm0pXG4gICAgICAudGhlbigoeyBtb2RhbCwgb3B0aW9uczogeyBvbkRpc21pc3MsIG9uQWZ0ZXJEaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuXG4gICAgICAgIGlmKG9uRGlzbWlzcykgdm0ubW9kYWwucmVzdWx0LmNhdGNoKCgpID0+IG9uRGlzbWlzcygkc3RhdGVQYXJhbXMucmVzdFBhcmFtcykpO1xuICAgICAgICB2bS5kaXNtaXNzRXZlbnQgPSAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBkaXNtaXNzTW9kYWwpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoISRzdGF0ZS50cmFuc2l0aW9uKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rpc21pc3NNb2RhbCcpO1xuICAgIC8vIHVuYmluZCBldmVudFxuICAgIHZtLmRpc21pc3NFdmVudCgpO1xuICAgIHZtLm1vZGFsLmRpc21pc3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsKGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UsICR1aWJNb2RhbCwgJHN0YXRlUGFyYW1zKSB7XG4gICduZ0luamVjdCc7XG5cbiAgcmV0dXJuIHsgb3BlbiB9O1xuXG4gIC8vLy8vLy8vLy8vL1xuICBcbiAgZnVuY3Rpb24gb3BlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVxuICAgICAgICAuZ2V0TWFwcGluZygkc3RhdGVQYXJhbXMubW9kYWwpXG4gICAgICAgIC50aGVuKCh7IHN0YXRlLCBvcHRpb25zIH0pID0+ICh7XG4gICAgICAgICAgbW9kYWw6ICR1aWJNb2RhbC5vcGVuKHN0YXRlKSxcbiAgICAgICAgICBvcHRpb25zIFxuICAgICAgICB9KSlcbiAgICApO1xuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAgIC8vLmZhY3RvcnkoJ0ZsZXhGb3JtTW9kYWwnLCBGbGV4Rm9ybU1vZGFsKTtcblxuZXhwb3J0IHsgRmxleEZvcm1Nb2RhbExvYWRlciwgRmxleEZvcm1Nb2RhbCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuanMiLCJmdW5jdGlvbiBjbkZsZXhGb3JtKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgbmctaWY9XCJ2bS5zaG93Rm9ybSgpXCI+XG4gICAgICAgIDxuZy1mb3JtIFxuICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIlxuICAgICAgICAgIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxuICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcbiAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXG4gICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPlxuICAgICAgICA8L25nLWZvcm0+XG4gICAgICAgIDwhLS0gZGVidWcgcGFuZWwgdG8gZGlzcGxheSBtb2RlbCAtLT5cbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPlxuICAgICAgICAgIDxqc29uLWV4cGxvcmVyIGpzb24tZGF0YT1cInZtLm1vZGVsIHx8ICcuLi5tb2RlbCBub3QgbG9hZGVkIHlldCdcIi8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkNvbmZpZycsXG4gICAgICBtb2RlbDogJz1mZk1vZGVsJyxcbiAgICAgIGZvcm1JbmRleDogJz1mZkZvcm1JbmRleCcsXG4gICAgICBmb3JtTmFtZTogJz1mZkZvcm1OYW1lJyxcbiAgICAgIGRlbGF5Rm9ybTogJz1mZkRlbGF5Rm9ybScsXG4gICAgICBjbGVhbnVwRXZlbnQ6ICc9ZmZDbGVhbnVwRXZlbnQnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybShjbkZsZXhGb3JtU2VydmljZSwgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgdm0gPSB0aGlzO1xuICB2bS5zZXJ2aWNlID0gdW5kZWZpbmVkO1xuICB2bS5ldmVudHMgPSBbXTtcblxuICB2bS5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuICB2bS5jbGVhbnVwID0gY2xlYW51cDtcbiAgdm0ucHJvY2VzcyA9IHByb2Nlc3M7XG4gIHZtLnNob3dGb3JtID0gc2hvd0Zvcm07XG5cbiAgdm0uZXZlbnRzLnB1c2goJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHsgcmV0dXJuIHZtLmNvbmZpZy5zY2hlbWE7IH0sIHZtLnByb2Nlc3MpKTtcblxuICB2bS5hY3RpdmF0ZSgpO1xuXG4gICRzY29wZS4kb24odm0uY2xlYW51cEV2ZW50IHx8ICckZGVzdHJveScsIHZtLmNsZWFudXApO1xuXG4gIC8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICBpZih2bS5mb3JtKSB7XG4gICAgICBpZighdm0uc2VydmljZSkge1xuICAgICAgICB2bS5zZXJ2aWNlID0gY25GbGV4Rm9ybVNlcnZpY2Uodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwsIHtcbiAgICAgICAgICBmb3JtQ3RybDogdm0uY29uZmlnLmZvcm1DdHJsLFxuICAgICAgICAgIGdldFNjaGVtYTogdm0uY29uZmlnLmdldFNjaGVtYSxcbiAgICAgICAgICB1cGRhdGVTY2hlbWE6IHVwZGF0ZVNjaGVtYVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndm0uc2VydmljZS5pc0NvbXBpbGVkKCk6Jywgdm0uc2VydmljZS5pc0NvbXBpbGVkKCkpO1xuICAgICAgICB2bS5zZXJ2aWNlLmNvbXBpbGUodm0uY29uZmlnLnNjaGVtYSwgdm0ubW9kZWwpO1xuICAgICAgfVxuICAgICAgLy8kc2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybVJlZHJhdycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIHJldHVybiAhdm0uZGVsYXlGb3JtICYmIHZtLnNlcnZpY2UgJiYgdm0uc2VydmljZS5pc0NvbXBpbGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoc2NoZW1hKSB7XG4gICAgdm0uY29uZmlnLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB2bS5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBfLmVhY2godm0uZXZlbnRzLCBmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICB2bS5zZXJ2aWNlLmNsZWFudXAoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS50aXRsZS5sZWFkXCI+e3s6OnZtLnRpdGxlLmxlYWR9fTwvaDU+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPGkgbmctc2hvdz1cInZtLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0udGl0bGUuaWNvbn19XCIvPlxuICAgICAgICAgICAge3t2bS50aXRsZS5tYWlufX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoNSBuZy1pZj1cInZtLnRpdGxlLnN1YlwiPnt7Ojp2bS50aXRsZS5zdWJ9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3t2bS5idXR0b25Db250YWluZXJDbGFzcyB8fCAncGFnZS1hY3Rpb24tYnRucyd9fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tb3B0aW9uc1wiXG4gICAgICAgICAgICAgICBuZy1tb3VzZW92ZXI9XCJ2bS5sb2FkT2Zmc2NyZWVuKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLnJldHVyblN0eWxlID8gdm0ucmV0dXJuU3R5bGUgOiAnZGVmYXVsdC1kYXJrJ1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLnJldHVyblN0YXRlXCJcbiAgICAgICAgICAgICAgIHVpLXNyZWY9XCJ7e3ZtLnJldHVyblN0YXRlfX1cIj5cbiAgICAgICAgICAgICAge3t2bS5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi17e3ZtLmNsb3NlQnV0dG9uLnN0eWxlID8gdm0uY2xvc2VCdXR0b24uc3R5bGUgOiAnZGVmYXVsdC1kYXJrJ319XCJcbiAgICAgICAgICAgICAgIG5nLWlmPVwidm0uY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gbmctY2xhc3M9XCJ7J2J0bi1ncm91cCc6IGJ1dHRvbi5vcHRpb25zfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHt7YnV0dG9uLnN0eWxlID8gJ2J0bi0nK2J1dHRvbi5zdHlsZSA6ICgkaW5kZXggPT09IHZtLmFjdGlvbnMubGVuZ3RoIC0gMSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLWRlZmF1bHQtZGFyaycpfX1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChidXR0b24pXCJcbiAgICAgICAgICAgICAgICAgICBuZy1jbGljaz1cInZtLnN1Ym1pdCh7aGFuZGxlcjogYnV0dG9uLmhhbmRsZXJ9KVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXA9XCJ7e2J1dHRvbi5oZWxwdGV4dH19XCJcbiAgICAgICAgICAgICAgICAgICB1aWItdG9vbHRpcC1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgIG5nLWJpbmQtaHRtbD1cImJ1dHRvbi50ZXh0IHx8ICdTYXZlJ1wiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB7e2J1dHRvbi5zdHlsZSA/ICdidG4tJytidXR0b24uc3R5bGUgOiAoJGluZGV4ID09PSB2bS5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5mdW5jdGlvbiBGbGV4Rm9ybUhlYWRlcigkc2NvcGUpIHtcbiAgJ25nSW5qZWN0JztcblxuICBjb25zdCB2bSA9IHRoaXM7XG5cbiAgdm0udXBkYXRlRGF0YSA9IHVwZGF0ZURhdGE7XG4gIHZtLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vLy9cbiAgXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgICh7IHRpdGxlOiB2bS50aXRsZSB9ID0gdm0uY29uZmlnKTtcbiAgICAoe1xuICAgICAgcmV0dXJuU3RhdGU6IHZtLnJldHVyblN0YXRlLFxuICAgICAgcmV0dXJuU3R5bGU6IHZtLnJldHVyblN0eWxlLFxuICAgICAgcmV0dXJuVGV4dDogdm0ucmV0dXJuVGV4dCxcbiAgICAgIGNsb3NlQnV0dG9uOiB2bS5jbG9zZUJ1dHRvbixcbiAgICAgIGFjdGlvbnM6IHZtLmFjdGlvbnNcbiAgICB9ID0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVEYXRhOicsIHVwZGF0ZURhdGEpO1xuICAgICRzY29wZS4kZW1pdCgnZmZSZWZyZXNoRGF0YScpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEaXNhYmxlZChidG5Db25maWcpIHtcbiAgICBpZih2bS5jb25maWcuaXNEaXNhYmxlZCkgcmV0dXJuIHZtLmNvbmZpZy5pc0Rpc2FibGVkKGJ0bkNvbmZpZyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gIC8vLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlLmpzIiwiZnVuY3Rpb24gZmZWYWxpZGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB7IGZvcm06ICc9ZmZWYWxpZGF0ZScgfSxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluazogbGlua1xuICB9O1xufVxuXG5mdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgLy9jb25zb2xlLmxvZygnJHNjb3BlLCBuZ01vZGVsOicsICRzY29wZS5mb3JtLCBuZ01vZGVsKTtcbiAgaWYoJHNjb3BlLmZvcm0gJiYgJHNjb3BlLmZvcm0ucmVxdWlyZWQpIHtcbiAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gbmdNb2RlbC4kdmlld1ZhbHVlOyB9LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb3ZlcnJpZGUgc2NoZW1hRm9ybSB2YWxpZGF0aW9uXG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnc2NoZW1hRm9ybScsIHRydWUpO1xuICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ3R2NC0zMDInLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLmRpcmVjdGl2ZSgnZmZWYWxpZGF0ZScsIGZmVmFsaWRhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBmZlZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS12YWxpZGF0ZS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9