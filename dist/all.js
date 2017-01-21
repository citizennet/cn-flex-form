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
	
	  cnFlexFormConfig.$inject = ['$stateParams'];
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	cnFlexFormRoutesProvider.$inject = ['$stateProvider'];
	
	function cnFlexFormRoutesProvider($stateProvider) {
	  var provider = {
	    addStates: addStates,
	    $get: $get
	  };
	
	  return provider;
	
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
	
	cnFlexFormRoutes.$inject = ['$stateProvider'];
	function cnFlexFormRoutes($stateProvider) {
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//angular.module('cn.flex-form')
	//.config(schemaFormConfig)
	//.run(addTemplates);
	
	schemaFormConfig.$inject = ['cnFlexFormServiceProvider'];
	
	function schemaFormConfig(cnFlexFormServiceProvider) {
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
	
	addTemplates.$inject = ['$templateCache'];
	
	function addTemplates($templateCache) {
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
	
	  $templateCache.put('app/components/cn-flex-form/forms/cn-fieldset.html', '\n      <fieldset ng-disabled="form.readonly" class="schema-form-fieldset {{form.htmlClass}}">\n        <legend ng-click="form.toggleCollapse(form)"\n                ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\n                ng-mouseenter="form.render = true">\n          <i ng-show="form.collapsible"\n             class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\n          {{ form.title }}\n        </legend>\n        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\n        <div uib-collapse="form.collapsed">\n          <div ng-if="form.render">\n            <sf-decorator ng-repeat="item in form.items" form="item"/>\n          </div>\n        </div>\n      </fieldset>');
	
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
	    return service.processFieldWatch(field);
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
	
	cnFlexFormServiceProvider.$inject = ['schemaFormDecoratorsProvider', 'cnFlexFormTypesProvider'];
	
	function cnFlexFormServiceProvider(schemaFormDecoratorsProvider, cnFlexFormTypesProvider) {
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
	
	CNFlexFormService.$inject = ['Api', '$parse', 'cnFlexFormConfig', 'cnFlexFormTypes', 'sfPath', '$interpolate', '$rootScope', '$timeout', 'cnUtil', '$stateParams'];
	
	function CNFlexFormService(Api, $parse, cnFlexFormConfig, cnFlexFormTypes, sfPath, $interpolate, $rootScope, $timeout, cnUtil, $stateParams) {
	
	  var services = [];
	  var prototype = {
	    compile: compile,
	    addArrayCopy: addArrayCopy,
	    addToDataCache: addToDataCache,
	    addToFormCache: addToFormCache,
	    broadcastErrors: broadcastErrors,
	    buildError: buildError,
	    cleanup: cleanup,
	    deregisterHandlers: deregisterHandlers,
	    deregisterArrayHandlers: deregisterArrayHandlers,
	    getArrayCopies: getArrayCopies,
	    getArrayCopiesFor: getArrayCopiesFor,
	    getArrayScopes: getArrayScopes,
	    getFromDataCache: getFromDataCache,
	    getFromFormCache: getFromFormCache,
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
	
	  function processField(field) {
	    var service = this;
	
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
	
	    key = service.getKey(key);
	
	    //key = key.split('.');
	    //key = key
	    //    .replace(/arrayIndex/g, '')
	    //    .replace(/(\[')([^.]+)\.([^.]+)('])/g, '.$2%ff_dt%$3')
	    //    .replace(/\./g, '%ff_sp%')
	    //    .replace(/%ff_dt%/g, '.')
	    //    .split('%ff_sp%');
	    key = ObjectPath.parse(key);
	    depth = depth || service.schema.schema.properties;
	
	    // why do we do this? it's breaking stuff
	    //if(_.last(key) === '') key.pop();
	
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
	
	  function getWatchables(exp) {
	    var watchables = [];
	    var nested = matchNestedExpression(exp);
	    var replaceStr = '';
	
	    while (nested) {
	      if (/^\d+$/.test(nested[1])) {
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
	      dataProp = replaceArrayIndex(dataProp, key);
	      console.log(':::: dataProp ::::', dataProp, key);
	      if (dataProp.includes('[arrayIndex]')) return;
	
	      service.handleResolve(field, fieldProp, dataProp);
	
	      getWatchables(dataProp).forEach(function (watchable) {
	        var resolveType = watchable.match(/(schema\.data\.|model\.)(\w+)/);
	
	        if (resolveType) {
	          if (resolveType[1] === 'schema.data.') {
	            service.registerResolve(field, fieldProp, resolveType[2]);
	          } else if (resolveType[1] === 'model.') {
	            service.registerHandler(resolveType[2], function () {
	              service.handleResolve(field, fieldProp, watchable);
	            });
	          }
	        }
	      });
	    });
	
	    return field;
	  }
	
	  function handleResolve(field, fieldProp, exp) {
	    var service = this;
	    var data = service.parseExpression(exp).get();
	    // if we're resolving from model but defaults haven't been applied yet, resolve from default itself
	    if (!data && exp.indexOf('model.') === 0) {
	      var key = exp.replace('model.', '');
	      var cachedField = service.getFromFormCache(key);
	
	      if (cachedField && cachedField.default) data = cachedField.default;else data = service.getSchema(key).default;
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
	
	    fieldPropHandlers.forEach(function (_ref2) {
	      var prop = _ref2.prop,
	          handler = _ref2.handler;
	      return prop === fieldProp && handler(field, service);
	    });
	  }
	
	  function registerResolve(field, fieldProp, dataProp) {
	    var service = this;
	
	    var fieldKey = service.getKey(field.key);
	    service.resolveRegister[dataProp] = service.resolveRegister[dataProp] || {};
	
	    var register = service.resolveRegister[dataProp];
	    register[fieldKey] = register[fieldKey] || [];
	    register[fieldKey].push({
	      field: field,
	      prop: fieldProp
	    });
	  }
	
	  function processConditional(field) {
	    var service = this;
	    _.each(field.conditionals, function (condition, key) {
	      var handler = function handler(val, prev) {
	        field[key] = service.parseCondition(condition);
	        if (key === 'required') {
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
	    var service = this,
	        schema = field.schema;
	
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
	      service.params = cnFlexFormConfig.getStateParams();
	
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
	            if (listener.updateSchema && !angular.isUndefined(val) && !isInitArray && val !== null) {
	              service.params[key] = val;
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
	
	  function initArrayCopyWatch() {
	    var service = this;
	
	    service.events.push($rootScope.$on('schemaFormPropagateScope', function (event, scope) {
	      var key = service.getKey(scope.form.key);
	      var index = key.match(/^.*\[(\d+)].*$/);
	
	      key = key.replace(/\[\d+]/g, '[]');
	      index = index && parseInt(index[1]);
	
	      service.processFieldProps(scope.form);
	      if (!scope.form.condition) scope.form.condition = 'true';
	
	      service.addArrayCopy(scope, key, index);
	      scope.$emit('flexFormArrayCopyAdded', key);
	    }));
	
	    service.events.push($rootScope.$on('schemaFormDeleteScope', function (event, scope, index) {
	      var key = service.getKey(scope.form.key).replace(/\[\d+]/g, '[]');
	      var copies = service.getArrayCopiesFor(key);
	
	      copies.forEach(function (list) {
	        list.splice(index, 1);
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
	
	  function matchNestedExpression(exp) {
	    return exp.match(/\[([^[\]]+)]([^[\]]*)/);
	  }
	
	  function resolveNestedExpressions(exp, depth) {
	    var service = this;
	    var nested = matchNestedExpression(exp);
	
	    while (nested) {
	      exp = exp.replace('[' + nested[1] + ']', '.' + service.parseExpression(nested[1], depth).get());
	      nested = matchNestedExpression(exp);
	    }
	
	    return exp;
	  }
	
	  function parseExpression(exp, depth) {
	    var service = this;
	    // if expression is specific value
	    if (!exp || /^(null|false|true|undefined|''|-?[0-9.]+|\[]|\{})$/.test(exp)) {
	      return {
	        "get": function get() {
	          if (!exp) return exp;
	          switch (exp) {
	            case 'null':
	              return null;
	            case 'false':
	              return false;
	            case 'true':
	              return true;
	            case 'undefined':
	              return;
	            case '\'\'':
	              return '';
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
	        assignable.obj[assignable.key] = val;
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
	    }
	
	    if (select.displayFormat) {
	      select.itemFormatter = service.processTemplate(select.displayFormat);
	    }
	
	    service.registerHandler(select.key, function (val) {
	      var form = service.formCtrl && service.formCtrl[service.getKey(select.key)];
	      if (form && form.$setDirty) form.$setDirty();
	    }, select.updateSchema);
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
	                service.handleResolve(register.field, register.prop, 'schema.data.' + prop);
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
	    if (redraw && current.redraw) current.redraw();
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
	    var arrayIndexKey = /([^.[]*)\[arrayIndex\]/.exec(resolve);
	    var re = new RegExp(arrayIndexKey[1] + '\\[(-?\\d+)\\]');
	    var index = re.exec(key);
	    console.log('re, index:', re, index, key);
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
	  parent.$inject = ['$stateParams', '$q'];
	
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
	    return getPromise($stateParams.modal, $stateParams.modalId, $q).promise.then(function (_ref) {
	      var parent = _ref.parent;
	      return parent;
	    });
	  }
	}
	
	cnFlexFormModalLoaderService.$inject = ['$stateParams', '$q'];
	
	function cnFlexFormModalLoaderService($stateParams, $q) {
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	FlexFormModalLoader.$inject = ['FlexFormModal', '$state', '$rootScope', '$stateParams'];
	
	function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams) {
	
	  var vm = this;
	
	  activate();
	
	  //////////
	
	  function activate() {
	    FlexFormModal.open(vm).then(function (_ref) {
	      var modal = _ref.modal,
	          onDismiss = _ref.options.onDismiss;
	
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
	    vm.dismissEvent();
	    vm.modal.dismiss();
	  }
	}
	
	FlexFormModal.$inject = ['cnFlexFormModalLoaderService', '$uibModal', '$stateParams'];
	function FlexFormModal(cnFlexFormModalLoaderService, $uibModal, $stateParams) {
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function cnFlexForm() {
	  return {
	    restrict: 'E',
	    template: '\
	      <div ng-if="vm.showForm()">\
	        <ng-form name="{{vm.formName}}"\
	              sf-schema="vm.config.schema.schema"\
	              sf-form="vm.form"\
	              sf-model="vm.model"></ng-form>\
	        <!-- debug panel to display model -->\
	        <section ng-if="vm.debug"><pre pretty-json="vm.model"></pre></section>\
	      </div>\
	    ',
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
	
	FlexForm.$inject = ['cnFlexFormService', '$scope', '$location'];
	function FlexForm(cnFlexFormService, $scope, $location) {
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
	    //console.log('vm.formName:', vm.formName);
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
	    //console.log('process:', cur, prev);
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
	    //console.log('showForm:', vm.delayForm, vm.formName);
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
	
	//angular
	//.module('cn.flex-form')
	//.directive('cnFlexForm', cnFlexForm);
	
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
	    template: '\n        <div class="col-md-6">\n          <h5 ng-if="vm.config.title.lead">{{::vm.config.title.lead}}</h5>\n          <h1>\n            <i ng-show="vm.config.title.icon" class="{{vm.config.title.icon}}"/>\n            {{vm.config.title.main}}\n          </h1>\n          <h5 ng-if="vm.config.title.sub">{{::vm.config.title.sub}}</h5>\n        </div>\n        <div class="{{vm.config.buttonContainerClass || \'page-action-btns\'}}">\n          <div class="btn-options"\n               ng-mouseover="vm.loadOffscreen()">\n            <a class="btn btn-default-dark"\n               ng-if="vm.config.actionConfig.returnState"\n               ui-sref="{{vm.config.actionConfig.returnState}}">\n              {{vm.config.actionConfig.returnText || \'Cancel\'}}\n            </a>\n            <a class="btn btn-default-dark"\n               ng-if="vm.config.actionConfig.closeButton"\n               ng-click="vm.config.actionConfig.closeButton.handler()">\n               Cancel\n            </a>\n            <span ng-repeat="button in vm.config.actionConfig.actions">\n              <span ng-class="{\'btn-group\': button.options}">\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.config.actionConfig.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}}"\n                   ng-disabled="vm.isDisabled(button)"\n                   ng-click="vm.submit({handler: button.handler})"\n                   uib-tooltip="{{button.helptext}}"\n                   uib-tooltip-placement="bottom"\n                   ng-bind-html="button.text || \'Save\'">\n                </a>\n                <a class="btn {{button.style ? \'btn-\'+button.style : ($index === vm.config.actionConfig.actions.length - 1 ? \'btn-primary\' : \'btn-default-dark\')}} dropdown-toggle"\n                        ng-disabled="vm.isDisabled(button)"\n                        ng-show="button.options"\n                        data-toggle="dropdown">\n                  <span class="caret"></span>\n                </a>\n                <ul class="dropdown-menu" ng-if="button.options">\n                  <li ng-repeat="option in button.options"\n                      ng-disabled="vm.isDisabled(option)">\n                    <a ng-click="vm.submit({handler: option.handler})"\n                       ng-bind-html="option.text">\n                    </a>\n                  </li>\n                </ul>\n              </span>\n            </span>\n          </div>\n          <p class="data-updated-at text-right"\n             id="data-updated-at"\n             ng-hide="vm.config.noData">\n            <a ng-click="vm.updateData()">Update Data</a>\n          </p>\n        </div>'
	  };
	}
	
	FlexFormHeader.$inject = ['$scope'];
	function FlexFormHeader($scope) {
	  var vm = this;
	
	  vm.updateData = updateData;
	  vm.isDisabled = isDisabled;
	
	  ///////////
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMDU3OGVhNmQ0YmQwOWI5MDE2NiIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiY25GbGV4Rm9ybUNvbmZpZyIsIiRpbmplY3QiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJwYXJhbSIsInB1c2giLCIkc3RhdGVQYXJhbXMiLCJnZXRTdGF0ZVBhcmFtcyIsIl8iLCJjaGFpbiIsIm9taXQiLCJ2IiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJ2YWx1ZSIsImNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIiwiZmllbGRUeXBlUmVnaXN0ZXIiLCJjb25kaXRpb24iLCJmaWVsZCIsInR5cGUiLCJpbmNsdWRlcyIsInRpdGxlTWFwIiwidGl0bGVNYXBSZXNvbHZlIiwidGl0bGVNYXBRdWVyeSIsInNjaGVtYSIsImZvcm1hdCIsInJlZ2lzdGVyRmllbGRUeXBlIiwiY25GbGV4Rm9ybVR5cGVzIiwiZmllbGRUeXBlIiwidW5zaGlmdCIsImdldEZpZWxkVHlwZSIsImkiLCJsIiwibGVuZ3RoIiwiY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIiwiJHN0YXRlUHJvdmlkZXIiLCJhZGRTdGF0ZXMiLCJwZXJtaXNzaW9ucyIsInNoYXJlZCIsImNvbnRyb2xsZXJBcyIsInN0YXRlIiwidXJsIiwiY25GbGV4Rm9ybVJvdXRlcyIsInRlbXBsYXRlVXJsIiwic2NoZW1hRm9ybUNvbmZpZyIsImNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIiLCJ0djQiLCJhZGRGb3JtYXQiLCJpc1N0cmluZyIsImRhdGEiLCJ0ZXN0IiwiZXh0ZW5zaW9ucyIsImVhY2giLCJleHRlbnNpb24iLCJyZWdpc3RlckZpZWxkIiwiYWRkVGVtcGxhdGVzIiwiJHRlbXBsYXRlQ2FjaGUiLCJwdXQiLCJzaGFyZWRBdXRvY29tcGxldGVUcGwiLCJ3aW5kb3ciLCJyZXF1aXJlIiwiT2JqZWN0UGF0aCIsImZpZWxkVHlwZUhhbmRsZXJzIiwiZmllbGRQcm9wSGFuZGxlcnMiLCJwcm9wIiwiaGFuZGxlciIsInNlcnZpY2UiLCJwcm9jZXNzU2VsZWN0RGlzcGxheSIsInByb2Nlc3NSZXNvbHZlIiwicHJvY2Vzc0ZpZWxkV2F0Y2giLCJwcm9jZXNzRmllbGRUeXBlIiwicHJvY2Vzc0NvbmRpdGlvbmFsIiwicHJvY2Vzc0RlZmF1bHQiLCJkZWZhdWx0IiwicmVnaXN0ZXJIYW5kbGVyIiwidXBkYXRlU2NoZW1hIiwic2NoZW1hRm9ybURlY29yYXRvcnNQcm92aWRlciIsIkNORmxleEZvcm1TZXJ2aWNlIiwiYWRkTWFwcGluZyIsImNyZWF0ZURpcmVjdGl2ZSIsIkFwaSIsIiRwYXJzZSIsInNmUGF0aCIsIiRpbnRlcnBvbGF0ZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNuVXRpbCIsInNlcnZpY2VzIiwicHJvdG90eXBlIiwiY29tcGlsZSIsImFkZEFycmF5Q29weSIsImFkZFRvRGF0YUNhY2hlIiwiYWRkVG9Gb3JtQ2FjaGUiLCJicm9hZGNhc3RFcnJvcnMiLCJidWlsZEVycm9yIiwiY2xlYW51cCIsImRlcmVnaXN0ZXJIYW5kbGVycyIsImRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzIiwiZ2V0QXJyYXlDb3BpZXMiLCJnZXRBcnJheUNvcGllc0ZvciIsImdldEFycmF5U2NvcGVzIiwiZ2V0RnJvbURhdGFDYWNoZSIsImdldEZyb21Gb3JtQ2FjaGUiLCJnZXRLZXkiLCJnZXRTY2hlbWEiLCJnZXRXYXRjaGFibGVzIiwiaGFuZGxlUmVzb2x2ZSIsImluaXRBcnJheUNvcHlXYXRjaCIsImluaXRNb2RlbFdhdGNoIiwiaW5pdFNjaGVtYVBhcmFtcyIsImlzQ29tcGlsZWQiLCJvbk1vZGVsV2F0Y2giLCJwYXJzZUNvbmRpdGlvbiIsInBhcnNlRXhwcmVzc2lvbiIsInByb2Nlc3NBcnJheSIsInByb2Nlc3NEaXNwbGF5IiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0ZpZWxkUHJvcHMiLCJwcm9jZXNzQ29tcG9uZW50IiwicHJvY2Vzc0N1cnJlbmN5IiwicHJvY2Vzc1BlcmNlbnRhZ2UiLCJwcm9jZXNzRGF0ZSIsInByb2Nlc3NIZWxwIiwicHJvY2Vzc1JhZGlvcyIsInByb2Nlc3NSYWRpb2J1dHRvbnMiLCJwcm9jZXNzUmV1c2FibGUiLCJwcm9jZXNzU2NoZW1hIiwicHJvY2Vzc1NlY3Rpb24iLCJwcm9jZXNzU2VsZWN0IiwicHJvY2Vzc1RhYmxlIiwicHJvY2Vzc1RlbXBsYXRlIiwicHJvY2Vzc1RvZ2dsZSIsInByb2Nlc3NVcGRhdGVkU2NoZW1hIiwicHJvY2Vzc01lZGlhVXBsb2FkIiwicHJvY2Vzc0NzdlVwbG9hZCIsInJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsInJlZ2lzdGVyUmVzb2x2ZSIsInJlcGxhY2VBcnJheUluZGV4IiwicmVwcm9jZXNzRmllbGQiLCJyZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMiLCJzZXRBcnJheUluZGV4Iiwic2V0dXBDb25maWciLCJzZXR1cEFycmF5U2VsZWN0RGlzcGxheSIsInNldHVwU2VsZWN0RGlzcGxheSIsInNldHVwU2NoZW1hUmVmcmVzaCIsIkNORmxleEZvcm1Db25zdHJ1Y3RvciIsIm1vZGVsIiwiQ05GbGV4Rm9ybSIsImRlYnVnIiwiYXJyYXlDb3BpZXMiLCJhcnJheUxpc3RlbmVycyIsImRhdGFDYWNoZSIsImRlZmF1bHRzIiwiZXJyb3JzIiwiZXZlbnRzIiwiZm9ybUNhY2hlIiwibGlzdGVuZXJzIiwicmVzb2x2ZVJlZ2lzdGVyIiwidXBkYXRlcyIsInBhcmFtcyIsImV4dGVuZCIsImZvcm1zIiwiZm9ybSIsImJpbmQiLCJzZXRWYWx1ZSIsImNvbXBpbGVkIiwiZm9ybUN0cmwiLCJnZXRTY2hlbWFGb3JtIiwiZ2V0U2NoZW1hVHlwZSIsImlzQXJyYXkiLCJmaXJzdCIsImN1ckRlZmF1bHQiLCJrZXkiLCJtb2RlbFZhbHVlIiwiZ2V0IiwiaXNUcnVseUVtcHR5IiwiaGFzIiwiZXF1YWxzIiwic2V0IiwiY29weSIsInZhbGlkYXRpb25NZXNzYWdlIiwiZmllbGRzZXQiLCJpdGVtcyIsImZvckVhY2giLCJjb2xsYXBzaWJsZSIsInRvZ2dsZUNvbGxhcHNlIiwiY29sbGFwc2VkIiwicmVuZGVyIiwiaXNGdW5jdGlvbiIsImNhbGwiLCJfb2dLZXlzIiwid2l0aG91dCIsImtleXMiLCJkZXNjcmlwdGlvbiIsInJlYWRvbmx5Iiwic2hvd0NsZWFyQWxsIiwiZmluZCIsInJlamVjdCIsIiRicm9hZGNhc3QiLCJlcnJvciIsImlzRW1wdHkiLCJuZ01vZGVsT3B0aW9ucyIsImFsbG93SW52YWxpZCIsInJlZHVjZSIsInRvdGFsIiwibmV4dCIsImRlcHRoIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwic2hpZnQiLCJleHAiLCJ3YXRjaGFibGVzIiwibmVzdGVkIiwibWF0Y2hOZXN0ZWRFeHByZXNzaW9uIiwicmVwbGFjZVN0ciIsInJlcGxhY2UiLCJyZXNvbHZlIiwiZGF0YVByb3AiLCJmaWVsZFByb3AiLCJ3YXRjaGFibGUiLCJyZXNvbHZlVHlwZSIsIm1hdGNoIiwiaW5kZXhPZiIsImNhY2hlZEZpZWxkIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwiZmllbGRLZXkiLCJyZWdpc3RlciIsImNvbmRpdGlvbmFscyIsInZhbCIsInByZXYiLCJtYXAiLCJwYXRoIiwid2F0Y2giLCJyZXNvbHV0aW9uIiwiYWRqdXN0bWVudCIsImN1ciIsImRhdGUiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwidXBkYXRlUGF0aCIsImZyb21QYXRoIiwidXBkYXRlIiwiZnJvbSIsIm1vbWVudCIsImFkZCIsInRvRGF0ZSIsInJlc3VsdCIsInAiLCJmbG9vciIsImNlaWwiLCJyb3VuZCIsImluaXRpYWxpemUiLCJzdGFydHNXaXRoIiwiZm4iLCJsaXN0IiwicHJlZGljYXRlUGFyYW1zIiwicHJlZGljYXRlQm9keSIsImdlbmVyYXRlUHJlZGljYXRlIiwiYm9keSIsImFyZ3MiLCJzcGxpdCIsImFjYyIsInJ1bkhhbmRsZXIiLCJpc09iamVjdCIsImFyck1hdGNoIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlcnMiLCJhcnJLZXkiLCJvbkFycmF5IiwicmVvcmRlciIsImxhc3RLZXkiLCJhcnJWYWwiLCJpdGVtIiwid2F0Y2hpbmciLCJtb2RlbFdhdGNoIiwiJHdhdGNoIiwiZmlyc3RVcGRhdGUiLCJjbGVhbk1vZGVsIiwicHJldlBhcmFtcyIsImxpc3RlbmVyIiwiaXNJbml0QXJyYXkiLCJpZCIsIiRvbiIsImV2ZW50Iiwic2NvcGUiLCJpbmRleCIsInBhcnNlSW50IiwiJGVtaXQiLCJjb3BpZXMiLCJzcGxpY2UiLCJsaW5rIiwicGx1Y2siLCJrZXlTdGFydCIsImZpbHRlciIsInBhcnNlRmxvYXQiLCJyZXNvbHZlZCIsInN0YXJ0IiwiZ2V0QXNzaWduYWJsZSIsInByb2dyZXNzIiwib2JqIiwiZnVsbFBhdGgiLCJjb25jYXQiLCJzbGljZSIsImFzc2lnbmFibGUiLCJhcnJheSIsInNvcnRPcHRpb25zIiwiZSIsInVpIiwic2VjdGlvbiIsImNvbXBvbmVudCIsImh0bWxDbGFzcyIsImNvbHMiLCJjdXJyZW5jeUZvcm1hdCIsInZpZXciLCJyYWRpb3MiLCJmdWxsV2lkdGgiLCJidG5DbGFzcyIsImRpdmlkZSIsIm1heFZpZXciLCJpY29uQ2xhc3MiLCJtb2RlbEZvcm1hdHRlciIsIm0iLCJtdWx0aXBseSIsImhvdXJzIiwibWludXRlcyIsIm1vZGVsUGFyc2VyIiwiZCIsInN0YXJ0T2YiLCJ2aWV3Rm9ybWF0dGVyIiwiZGF0ZUZvcm1hdCIsInZpZXdQYXJzZXIiLCJnZXRTZWxlY3RWYWxQcm9wIiwic2VsZWN0IiwidmFsdWVQcm9wZXJ0eSIsImdldEFsbG93ZWRTZWxlY3RWYWx1ZSIsImdldFRpdGxlTWFwIiwidmFsUHJvcCIsIm1hcFZhbCIsIngiLCJ1bmRlZmluZWQiLCJvbkluaXQiLCJzZXR0ZXIiLCJuZXdWYWwiLCJxIiwidGl0bGVRdWVyeSIsIm1pbkxvb2t1cCIsImlzRGVmaW5lZCIsIm9uQWRkIiwiZGV0YWlsZWRMaXN0Iiwic2VsZWN0aW9uU3R5bGUiLCJtYXhJdGVtcyIsInZhbGlkIiwiZGlzcGxheUZvcm1hdCIsIml0ZW1Gb3JtYXR0ZXIiLCIkc2V0RGlydHkiLCJ0b2dnbGUiLCJoZWxwIiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJ0cGwiLCJwYXJzZVNjb3BlIiwicHJvY2Vzc29yIiwiYXJyYXlJbmRleCIsInRhYmxlIiwicm93IiwiY29sdW1ucyIsInNlbGVjdERpc3BsYXkiLCJzZWxlY3RGaWVsZCIsImdldEFycmF5SW5kZXgiLCJzZWxlY3RLZXkiLCJzcGxpdEtleSIsImluZGV4ZWRTZWxlY3RLZXkiLCJzZWxlY3RWYWx1ZSIsImZvcm1Db3BpZXMiLCJlbGVtIiwiaW5kZXhlZEtleSIsInNwbGl0SW5kZXhlZEtleSIsInNlbGVjdE1vZGVsIiwiaXRlbVZhbHVlIiwiY291bnQiLCJrZXlNYXAiLCJvbmNlIiwicmVzZXRDb3VudCIsInJlZnJlc2giLCJkZWJvdW5jZSIsImRpZmYiLCJ0aGVuIiwicmVmcmVzaERhdGEiLCJyZXNldCIsInJlZ2lzdGVycyIsInJlcHJvY2Vzc1NjaGVtYSIsImNhY2hlZCIsImN1cnJlbnQiLCJpc0NoaWxkIiwicmVkcmF3Iiwic3ViS2V5IiwibWVzc2FnZSIsImFycmF5SW5kZXhLZXkiLCJleGVjIiwicmUiLCJSZWdFeHAiLCJpc051bWJlciIsImFzQXJyYXkiLCJrZXlDb3B5IiwiY2xvbmUiLCJpbmRleE9mSW5kZXgiLCJtb2RhbE1hcCIsInByb21pc2VNYXAiLCJnZXRQcm9taXNlcyIsInByb21pc2UiLCJnZXRQcm9taXNlIiwiJHEiLCJwcm9taXNlcyIsImRlZmVyIiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyIiwicGFyZW50IiwiY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSIsImRlZiIsIm1vZGFsIiwibW9kYWxJZCIsImdldE1hcHBpbmciLCJyZXNvbHZlTWFwcGluZyIsIm9wdGlvbnMiLCJkZXN0cm95U3RyYXRlZ3kiLCJGbGV4Rm9ybU1vZGFsTG9hZGVyIiwiRmxleEZvcm1Nb2RhbCIsIiRzdGF0ZSIsInZtIiwiYWN0aXZhdGUiLCJvcGVuIiwib25EaXNtaXNzIiwiZmluYWxseSIsImdvQmFjayIsImNhdGNoIiwicmVzdFBhcmFtcyIsImRpc21pc3NFdmVudCIsImRpc21pc3NNb2RhbCIsInRyYW5zaXRpb24iLCJnbyIsImRpc21pc3MiLCIkdWliTW9kYWwiLCJjbkZsZXhGb3JtIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsImZvcm1JbmRleCIsImZvcm1OYW1lIiwiZGVsYXlGb3JtIiwiY2xlYW51cEV2ZW50IiwiRmxleEZvcm0iLCJiaW5kVG9Db250cm9sbGVyIiwiY25GbGV4Rm9ybVNlcnZpY2UiLCIkc2NvcGUiLCIkbG9jYXRpb24iLCJwcm9jZXNzIiwic2hvd0Zvcm0iLCJzZWFyY2giLCJjbkZsZXhGb3JtSGVhZGVyIiwic3VibWl0IiwibG9hZE9mZnNjcmVlbiIsIkZsZXhGb3JtSGVhZGVyIiwidXBkYXRlRGF0YSIsImlzRGlzYWJsZWQiLCJidG5Db25maWciLCJmZlZhbGlkYXRlIiwiYXR0cnMiLCJuZ01vZGVsIiwicmVxdWlyZWQiLCIkdmlld1ZhbHVlIiwiJHNldFZhbGlkaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFRQyxHQUFSOzttQkFFZUMsUUFDWkMsTUFEWSxDQUNMLGNBREssRUFDVyxDQUN0QixXQURzQixFQUV0QixZQUZzQixFQUd0Qiw2QkFIc0IsRUFJdEIsYUFKc0I7QUFLdEI7QUFDQSxVQU5zQixDQURYLEVBU1pDLFFBVFksQ0FTSCxrQkFURyw4QkFV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TUQ7O0FBRUQsVUFBU0EsSUFBVCxDQUFjaUssTUFBZCxFQUFzQjdFLElBQXRCLEVBQTRCMEYsS0FBNUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDO0FBQ0EsT0FBR2QsT0FBT3ZTLElBQVAsSUFBZXVTLE9BQU92UyxJQUFQLENBQVlzVCxRQUE5QixFQUF3QztBQUN0Q2YsWUFBT2hMLE1BQVAsQ0FBYyxZQUFXO0FBQUUsY0FBTzhMLFFBQVFFLFVBQWY7QUFBNEIsTUFBdkQsRUFBeUQsVUFBUzVjLEtBQVQsRUFBZ0I7QUFDdkU7QUFDQTBjLGVBQVFHLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkM7QUFDQUgsZUFBUUcsWUFBUixDQUFxQixTQUFyQixFQUFnQzdjLEtBQWhDO0FBQ0QsTUFKRDtBQUtEO0FBQ0Y7O0FBRUQ7QUFDSTtBQUNBOzttQkFFV3djLFUiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNuLWZsZXgtZm9ybVwiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNuLWZsZXgtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwNTc4ZWE2ZDRiZDA5YjkwMTY2IiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmNvbnNvbGUubG9nKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAvLyduZ0pzb25FeHBsb3JlcicsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjbkZsZXhGb3JtQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVBhcmFtcyddO1xuXG4gIHZhciBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbTogYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMoKSB7XG4gICAgICByZXR1cm4gX1xuICAgICAgICAgIC5jaGFpbigkc3RhdGVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHYpIHx8IF8uaXNOdWxsKHYpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnZhbHVlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlci4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgdmFyIHByb3ZpZGVyID0ge1xuICAgIGFkZFN0YXRlczogYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICByZXR1cm4gcHJvdmlkZXI7XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuY25GbGV4Rm9ybVJvdXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbnNjaGVtYUZvcm1Db25maWcuJGluamVjdCA9IFsnY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciddO1xuXG5mdW5jdGlvbiBzY2hlbWFGb3JtQ29uZmlnKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpIHtcbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnXG4gIF07XG5cbiAgXy5lYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIucmVnaXN0ZXJGaWVsZCh7XG4gICAgICB0eXBlOiBleHRlbnNpb24sXG4gICAgICB0ZW1wbGF0ZVVybDogYGFwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy8ke2V4dGVuc2lvbn0uaHRtbGBcbiAgICB9KTtcbiAgfSk7XG59XG5cbmFkZFRlbXBsYXRlcy4kaW5qZWN0ID0gWyckdGVtcGxhdGVDYWNoZSddO1xuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5KVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS50aXRsZVF1ZXJ5ID8gdHJ1ZSA6IGZhbHNlfX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXAgfHwgKGZvcm0udGl0bGVRdWVyeSAmJiAzIHx8IDApfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIlxuICAgICAgICAgICBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctaW5pdD1cImFycmF5SW5kZXggPSAkaW5kZXhcIiBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBkaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCIvLyBOZWVkIHRoZXNlIG1vZHVsZXMgZm9yIHRlc3QgYnVuZGxlXG52YXIgXyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fIHx8IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIE9iamVjdFBhdGggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuT2JqZWN0UGF0aCB8fCByZXF1aXJlKCdvYmplY3RwYXRoJyk7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheSdcbn07XG5cbmNvbnN0IGZpZWxkUHJvcEhhbmRsZXJzID0gW3tcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gXG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSlcbn1dO1xuXG5jbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLiRpbmplY3QgPSBbXG4gICdzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyJyxcbiAgJ2NuRmxleEZvcm1UeXBlc1Byb3ZpZGVyJ1xuXTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbkNORmxleEZvcm1TZXJ2aWNlLiRpbmplY3QgPSBbXG4gICdBcGknLCAnJHBhcnNlJywgJ2NuRmxleEZvcm1Db25maWcnLCAnY25GbGV4Rm9ybVR5cGVzJywgJ3NmUGF0aCcsXG4gICckaW50ZXJwb2xhdGUnLCAnJHJvb3RTY29wZScsICckdGltZW91dCcsICdjblV0aWwnLCAnJHN0YXRlUGFyYW1zJ1xuXTtcblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoQXBpLCAkcGFyc2UsIGNuRmxleEZvcm1Db25maWcsIGNuRmxleEZvcm1UeXBlcywgc2ZQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJGludGVycG9sYXRlLCAkcm9vdFNjb3BlLCAkdGltZW91dCwgY25VdGlsLCAkc3RhdGVQYXJhbXMpIHtcblxuICB2YXIgc2VydmljZXMgPSBbXTtcbiAgdmFyIHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBnZXRXYXRjaGFibGVzLFxuICAgIGhhbmRsZVJlc29sdmUsXG4gICAgaW5pdEFycmF5Q29weVdhdGNoLFxuICAgIGluaXRNb2RlbFdhdGNoLFxuICAgIGluaXRTY2hlbWFQYXJhbXMsXG4gICAgaXNDb21waWxlZCxcbiAgICBvbk1vZGVsV2F0Y2gsXG4gICAgcGFyc2VDb25kaXRpb24sXG4gICAgcGFyc2VFeHByZXNzaW9uLFxuICAgIHByb2Nlc3NBcnJheSxcbiAgICBwcm9jZXNzRGVmYXVsdCxcbiAgICBwcm9jZXNzRGlzcGxheSxcbiAgICBwcm9jZXNzRmllbGQsXG4gICAgcHJvY2Vzc0ZpZWxkc2V0LFxuICAgIHByb2Nlc3NGaWVsZFByb3BzLFxuICAgIHByb2Nlc3NGaWVsZFR5cGUsXG4gICAgcHJvY2Vzc0ZpZWxkV2F0Y2gsXG4gICAgcHJvY2Vzc0NvbXBvbmVudCxcbiAgICBwcm9jZXNzQ29uZGl0aW9uYWwsXG4gICAgcHJvY2Vzc0N1cnJlbmN5LFxuICAgIHByb2Nlc3NQZXJjZW50YWdlLFxuICAgIHByb2Nlc3NEYXRlLFxuICAgIHByb2Nlc3NIZWxwLFxuICAgIHByb2Nlc3NSYWRpb3MsXG4gICAgcHJvY2Vzc1JhZGlvYnV0dG9ucyxcbiAgICBwcm9jZXNzUmV1c2FibGUsXG4gICAgcHJvY2Vzc1NjaGVtYSxcbiAgICBwcm9jZXNzU2VsZWN0RGlzcGxheSxcbiAgICBwcm9jZXNzUmVzb2x2ZSxcbiAgICBwcm9jZXNzU2VjdGlvbixcbiAgICBwcm9jZXNzU2VsZWN0LFxuICAgIHByb2Nlc3NUYWJsZSxcbiAgICBwcm9jZXNzVGVtcGxhdGUsXG4gICAgcHJvY2Vzc1RvZ2dsZSxcbiAgICBwcm9jZXNzVXBkYXRlZFNjaGVtYSxcbiAgICBwcm9jZXNzTWVkaWFVcGxvYWQsXG4gICAgcHJvY2Vzc0NzdlVwbG9hZCxcbiAgICByZWdpc3RlckFycmF5SGFuZGxlcnMsXG4gICAgcmVnaXN0ZXJIYW5kbGVyLFxuICAgIHJlZ2lzdGVyUmVzb2x2ZSxcbiAgICByZXBsYWNlQXJyYXlJbmRleCxcbiAgICByZXByb2Nlc3NGaWVsZCxcbiAgICByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMsXG4gICAgc2V0QXJyYXlJbmRleCxcbiAgICBzZXR1cENvbmZpZyxcbiAgICBzZXR1cEFycmF5U2VsZWN0RGlzcGxheSxcbiAgICBzZXR1cFNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTY2hlbWFSZWZyZXNoXG4gIH07XG5cbiAgZnVuY3Rpb24gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlO1xuICAgIGlmKHNlcnZpY2VzLmxlbmd0aCkge1xuICAgICAgZm9yKHZhciBpID0gMCwgbCA9IHNlcnZpY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihzZXJ2aWNlc1tpXS5tb2RlbCA9PT0gbW9kZWwpIHtcbiAgICAgICAgICBzZXJ2aWNlID0gc2VydmljZXNbaV07XG4gICAgICAgICAgc2VydmljZS5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIXNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UgPSBuZXcgQ05GbGV4Rm9ybShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgc2VydmljZXMucHVzaChzZXJ2aWNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2UgfHwgbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMuZGVidWcpIHtcbiAgICAgIHdpbmRvdy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIH1cblxuICAgIHRoaXMuYXJyYXlDb3BpZXMgPSB7fTtcbiAgICB0aGlzLmFycmF5TGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5kYXRhQ2FjaGUgPSB7fTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZm9ybUNhY2hlID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICB0aGlzLnJlc29sdmVSZWdpc3RlciA9IHt9O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnVwZGF0ZXMgPSAwO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBjbkZsZXhGb3JtQ29uZmlnLmdldFN0YXRlUGFyYW1zKCk7XG5cbiAgICB0aGlzLl8gPSBfO1xuXG4gICAgdGhpcy5jb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBfLmV4dGVuZChDTkZsZXhGb3JtLnByb3RvdHlwZSwgcHJvdG90eXBlKTtcbiAgXy5leHRlbmQoQ05GbGV4Rm9ybUNvbnN0cnVjdG9yLCBwcm90b3R5cGUpO1xuXG4gIHJldHVybiBDTkZsZXhGb3JtQ29uc3RydWN0b3I7XG5cbiAgLy8vLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBjb21waWxlKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2Uuc2NoZW1hID0gc2NoZW1hO1xuICAgIHNlcnZpY2UubW9kZWwgPSBtb2RlbDtcblxuICAgIGlmKCFzZXJ2aWNlLmlzQ29tcGlsZWQoKSkge1xuICAgICAgc2VydmljZS5zZXR1cENvbmZpZyhjb25maWcpO1xuXG4gICAgICBpZihzY2hlbWEuZm9ybXMpIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtcywgZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBfLmVhY2goc2NoZW1hLmZvcm0sIHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLmluaXRNb2RlbFdhdGNoKCk7XG4gICAgICBzZXJ2aWNlLmluaXRBcnJheUNvcHlXYXRjaCgpO1xuICAgICAgc2VydmljZS5pc0NvbXBpbGVkKHRydWUpO1xuICAgIH1cblxuICAgIHNlcnZpY2UuYnJvYWRjYXN0RXJyb3JzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NvbXBpbGVkKHNldFZhbHVlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNldFZhbHVlKSB7XG4gICAgICBzZXJ2aWNlLnNjaGVtYS5jb21waWxlZCA9IHNldFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VydmljZS5zY2hlbWEgJiYgc2VydmljZS5zY2hlbWEuY29tcGlsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cENvbmZpZyhjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoY29uZmlnKSB7XG4gICAgICBpZihjb25maWcuZm9ybUN0cmwpIHNlcnZpY2UuZm9ybUN0cmwgPSBjb25maWcuZm9ybUN0cmw7XG4gICAgICBpZihjb25maWcudXBkYXRlU2NoZW1hKSBzZXJ2aWNlLnVwZGF0ZVNjaGVtYSA9IGNvbmZpZy51cGRhdGVTY2hlbWE7XG4gICAgICBpZihjb25maWcuZ2V0U2NoZW1hKSBzZXJ2aWNlLmdldFNjaGVtYUZvcm0gPSBzZXJ2aWNlLnNldHVwU2NoZW1hUmVmcmVzaChjb25maWcuZ2V0U2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2NoZW1hKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgY29uc3QgeyBzY2hlbWEgfSA9IGZpZWxkO1xuXG4gICAgZmllbGQuZ2V0U2NoZW1hVHlwZSA9ICgpID0+IF8uaXNBcnJheShzY2hlbWEudHlwZSkgPyBfLmZpcnN0KHNjaGVtYS50eXBlKSA6IHNjaGVtYS50eXBlO1xuICAgIGlmKCFmaWVsZC50eXBlKSBmaWVsZC50eXBlID0gZmllbGQuZ2V0U2NoZW1hVHlwZSAmJiBmaWVsZC5nZXRTY2hlbWFUeXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGVmYXVsdChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcbiAgICBjb25zdCBjdXJEZWZhdWx0ID0gZmllbGQuZGVmYXVsdCB8fCBzY2hlbWEuZGVmYXVsdDtcblxuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgLy8gaWYgc2NoZW1hVXBkYXRlIGhhc24ndCBiZWVuIHRyaWdnZXJlZCwgbGV0IHNjaGVtYUZvcm0gZGlyZWN0aXZlIGhhbmRsZSBkZWZhdWx0c1xuICAgIGlmKHNlcnZpY2UudXBkYXRlcyB8fCBmaWVsZC5kZWZhdWx0KSB7XG4gICAgICBpZihrZXkuaW5jbHVkZXMgJiYga2V5LmluY2x1ZGVzKCdbXScpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZpZWxkLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICBjb25zdCBtb2RlbFZhbHVlID0gbW9kZWwuZ2V0KCk7XG4gICAgICAvLyBpZiB0aGVyZSdzIGFuIGV4aXN0aW5nIGRlZmF1bHQgYW5kIGl0J3MgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSB0byB0aGUgbmV3IGRlZmF1bHRcbiAgICAgIGlmKF8uaXNUcnVseUVtcHR5KG1vZGVsVmFsdWUpIHx8IChfLmhhcyhzZXJ2aWNlLmRlZmF1bHRzLCBrZXkpICYmIGFuZ3VsYXIuZXF1YWxzKG1vZGVsVmFsdWUsIHNlcnZpY2UuZGVmYXVsdHNba2V5XSkpKSB7XG4gICAgICAgIG1vZGVsLnNldChjdXJEZWZhdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VydmljZS5kZWZhdWx0c1trZXldID0gYW5ndWxhci5jb3B5KGN1ckRlZmF1bHQpO1xuXG4gICAgaWYoc2NoZW1hLmZvcm1hdCA9PT0gJ3VybCcgJiYgIWZpZWxkLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9ICd1cmwnO1xuICAgICAgZmllbGQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnTXVzdCBiZSBhIHZhbGlkIHVybCAoaHR0cHM6Ly8uLi4pJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRzZXQoZmllbGRzZXQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBmaWVsZHNldC50eXBlID0gJ2NuLWZpZWxkc2V0JztcbiAgICBmaWVsZHNldC5pdGVtcy5mb3JFYWNoKHNlcnZpY2UucHJvY2Vzc0ZpZWxkLmJpbmQoc2VydmljZSkpO1xuXG4gICAgaWYoZmllbGRzZXQuY29sbGFwc2libGUpIHtcbiAgICAgIGZpZWxkc2V0LnRvZ2dsZUNvbGxhcHNlID0gKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgZmllbGRzZXQuY29sbGFwc2VkID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmllbGRzZXQucmVuZGVyID0gIWZpZWxkc2V0LmNvbGxhcHNlZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmaWVsZHNldC5yZW5kZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZFR5cGUoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCBmaWVsZFR5cGUgPSBjbkZsZXhGb3JtVHlwZXMuZ2V0RmllbGRUeXBlKGZpZWxkKTtcbiAgICBjb25zdCBoYW5kbGVyID0gZmllbGRUeXBlSGFuZGxlcnNbZmllbGRUeXBlXTtcbiAgICBpZihfLmlzU3RyaW5nKGhhbmRsZXIpKSB7XG4gICAgICBzZXJ2aWNlW2hhbmRsZXJdKGZpZWxkKTtcbiAgICB9XG4gICAgZWxzZSBpZihfLmlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICAgIGhhbmRsZXIuY2FsbChzZXJ2aWNlLCBmaWVsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkKGZpZWxkKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZighZmllbGQuX29nS2V5cykge1xuICAgICAgZmllbGQuX29nS2V5cyA9IF8ud2l0aG91dChfLmtleXMoZmllbGQpLCAna2V5JywgJ2h0bWxDbGFzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuYWRkVG9Gb3JtQ2FjaGUoZmllbGQsIGtleSk7XG4gICAgICBjb25zdCBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShrZXkpO1xuXG4gICAgICBpZihzY2hlbWEpIHtcbiAgICAgICAgZmllbGQuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICBpZihzY2hlbWEuZGVzY3JpcHRpb24pIGZpZWxkLmRlc2NyaXB0aW9uID0gc2NoZW1hLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZihmaWVsZC5yZWFkb25seSAmJiAhc2NoZW1hLnJlYWRvbmx5KSBmaWVsZC5yZWFkb25seSA9IGZhbHNlO1xuICAgICAgICBpZihzY2hlbWEudHlwZSA9PT0gJ2FycmF5JyAmJiAhKCdzaG93Q2xlYXJBbGwnIGluIGZpZWxkKSkgZmllbGQuc2hvd0NsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5wcm9jZXNzU2NoZW1hKGZpZWxkKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZFByb3BzKGZpZWxkKTtcblxuICAgIGlmKGtleSkge1xuICAgICAgaWYoXy5maW5kKHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7a2V5OiBrZXl9KTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRQcm9wcyhmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9KSA9PlxuICAgICAgICBfLmhhcyhmaWVsZCwgcHJvcCkgJiYgaGFuZGxlcihmaWVsZCwgc2VydmljZSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSkge1xuICAgIGlmKF8uaXNBcnJheShrZXkpKSB7XG4gICAgICBrZXkgPSBfLnJlZHVjZShrZXksICh0b3RhbCwgbmV4dCkgPT4gXG4gICAgICAgICAgL14oLT9cXGQqKSQvLnRlc3QobmV4dCkgPyB0b3RhbCArICdbJyArIG5leHQgKyAnXScgOiB0b3RhbCArICcuJyArIG5leHQpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cblxuICBmdW5jdGlvbiBnZXRTY2hlbWEoa2V5LCBkZXB0aCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZigha2V5KSByZXR1cm47XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgLy9rZXkgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAvL2tleSA9IGtleVxuICAgIC8vICAgIC5yZXBsYWNlKC9hcnJheUluZGV4L2csICcnKVxuICAgIC8vICAgIC5yZXBsYWNlKC8oXFxbJykoW14uXSspXFwuKFteLl0rKSgnXSkvZywgJy4kMiVmZl9kdCUkMycpXG4gICAgLy8gICAgLnJlcGxhY2UoL1xcLi9nLCAnJWZmX3NwJScpXG4gICAgLy8gICAgLnJlcGxhY2UoLyVmZl9kdCUvZywgJy4nKVxuICAgIC8vICAgIC5zcGxpdCgnJWZmX3NwJScpO1xuICAgIGtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzO1xuXG4gICAgLy8gd2h5IGRvIHdlIGRvIHRoaXM/IGl0J3MgYnJlYWtpbmcgc3R1ZmZcbiAgICAvL2lmKF8ubGFzdChrZXkpID09PSAnJykga2V5LnBvcCgpO1xuXG4gICAgbGV0IGZpcnN0LCBuZXh0O1xuXG4gICAgd2hpbGUoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpcnN0ID0ga2V5WzBdO1xuICAgICAgbmV4dCA9IGtleVsxXTtcbiAgICAgIGlmKC9eLT9cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXYXRjaGFibGVzKGV4cCkge1xuICAgIGNvbnN0IHdhdGNoYWJsZXMgPSBbXTtcbiAgICBsZXQgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgbGV0IHJlcGxhY2VTdHIgPSAnJztcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgaWYoL15cXGQrJC8udGVzdChuZXN0ZWRbMV0pKSB7XG4gICAgICAgIHJlcGxhY2VTdHIgPSBuZXN0ZWRbMF07XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJ2ZmX3JlcGxhY2VfZmYnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3YXRjaGFibGVzLnB1c2gobmVzdGVkWzFdLnJlcGxhY2UoL2ZmX3JlcGxhY2VfZmYvZywgcmVwbGFjZVN0cikpO1xuICAgICAgICByZXBsYWNlU3RyID0gJyc7XG4gICAgICAgIGV4cCA9IGV4cC5yZXBsYWNlKG5lc3RlZFswXSwgJycpO1xuICAgICAgfVxuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi53YXRjaGFibGVzLCBleHAucmVwbGFjZSgvZmZfcmVwbGFjZV9mZi9nLCByZXBsYWNlU3RyKV07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IGtleSA9IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG5cbiAgICBfLmVhY2goZmllbGQucmVzb2x2ZSwgZnVuY3Rpb24oZGF0YVByb3AsIGZpZWxkUHJvcCkge1xuICAgICAgZGF0YVByb3AgPSByZXBsYWNlQXJyYXlJbmRleChkYXRhUHJvcCwga2V5KTtcbiAgICAgIGNvbnNvbGUubG9nKCc6Ojo6IGRhdGFQcm9wIDo6OjonLCBkYXRhUHJvcCwga2V5KTtcbiAgICAgIGlmKGRhdGFQcm9wLmluY2x1ZGVzKCdbYXJyYXlJbmRleF0nKSkgcmV0dXJuO1xuXG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuXG4gICAgICBnZXRXYXRjaGFibGVzKGRhdGFQcm9wKS5mb3JFYWNoKCh3YXRjaGFibGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZVR5cGUgPSB3YXRjaGFibGUubWF0Y2goLyhzY2hlbWFcXC5kYXRhXFwufG1vZGVsXFwuKShcXHcrKS8pO1xuXG4gICAgICAgIGlmKHJlc29sdmVUeXBlKSB7XG4gICAgICAgICAgaWYocmVzb2x2ZVR5cGVbMV0gPT09ICdzY2hlbWEuZGF0YS4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVyUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCByZXNvbHZlVHlwZVsyXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYocmVzb2x2ZVR5cGVbMV0gPT09ICdtb2RlbC4nKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihyZXNvbHZlVHlwZVsyXSwgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgd2F0Y2hhYmxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIGV4cCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICAvLyBpZiB3ZSdyZSByZXNvbHZpbmcgZnJvbSBtb2RlbCBidXQgZGVmYXVsdHMgaGF2ZW4ndCBiZWVuIGFwcGxpZWQgeWV0LCByZXNvbHZlIGZyb20gZGVmYXVsdCBpdHNlbGZcbiAgICBpZighZGF0YSAmJiBleHAuaW5kZXhPZignbW9kZWwuJykgPT09IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGV4cC5yZXBsYWNlKCdtb2RlbC4nLCAnJyk7XG4gICAgICBjb25zdCBjYWNoZWRGaWVsZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpO1xuICAgICAgXG4gICAgICBpZihjYWNoZWRGaWVsZCAmJiBjYWNoZWRGaWVsZC5kZWZhdWx0KSBkYXRhID0gY2FjaGVkRmllbGQuZGVmYXVsdDtcbiAgICAgIGVsc2UgZGF0YSA9IHNlcnZpY2UuZ2V0U2NoZW1hKGtleSkuZGVmYXVsdDtcbiAgICB9XG4gICAgaWYoZGF0YSAmJiBkYXRhLmN1cnNvcikge1xuICAgICAgZmllbGQubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cbiAgICBmaWVsZFtmaWVsZFByb3BdID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG5cbiAgICBmaWVsZFByb3BIYW5kbGVycy5mb3JFYWNoKCh7IHByb3AsIGhhbmRsZXIgfSkgPT4gXG4gICAgICAgIHByb3AgPT09IGZpZWxkUHJvcCAmJiBoYW5kbGVyKGZpZWxkLCBzZXJ2aWNlKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goe1xuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgcHJvcDogZmllbGRQcm9wXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBsZXQgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcblxuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgZGF5cy8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSBhZGp1c3RtZW50LmRhdGVbMV07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZSwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSkuYWRkKGFkanVzdG1lbnQuZGF0ZSwgJ2RheXMnKS50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IF8uaXNVbmRlZmluZWQoY3VyKSA/IGFuZ3VsYXIuY29weShkZWZhdWx0VmFsdWUpIDogYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIG9uQXJyYXkgPSBmdW5jdGlvbihjdXIsIHByZXYsIHJlb3JkZXIpIHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgdmFyIGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYXJyS2V5ICsgJ1snICsgKHByZXYgLSAxKSArICddJyArICcuJyArIGZpZWxkS2V5IDpcbiAgICAgICAgICBhcnJLZXkgKyAnWycgKyAocHJldiAtIDEpICsgJ10nO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXSc7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICB2YXIga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nICsgJy4nICsgZmllbGRLZXkgOlxuICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2FycktleSArICcubGVuZ3RoJ10pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYXJyS2V5ICsgJy5sZW5ndGgnXS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2FycktleSArICcubGVuZ3RoJ10gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gJHJvb3RTY29wZS4kd2F0Y2goXG4gICAgICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VydmljZS5tb2RlbDsgfSxcbiAgICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcbiAgICAgIHNlcnZpY2UucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmICFpc0luaXRBcnJheSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVTY29wZScsIGZ1bmN0aW9uKGV2ZW50LCBzY29wZSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIHZhciBpbmRleCA9IGtleS5tYXRjaCgvXi4qXFxbKFxcZCspXS4qJC8pO1xuXG4gICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gICAgICBpbmRleCA9IGluZGV4ICYmIHBhcnNlSW50KGluZGV4WzFdKTtcblxuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRQcm9wcyhzY29wZS5mb3JtKTtcbiAgICAgIGlmKCFzY29wZS5mb3JtLmNvbmRpdGlvbikgc2NvcGUuZm9ybS5jb25kaXRpb24gPSAndHJ1ZSc7XG5cbiAgICAgIHNlcnZpY2UuYWRkQXJyYXlDb3B5KHNjb3BlLCBrZXksIGluZGV4KTtcbiAgICAgIHNjb3BlLiRlbWl0KCdmbGV4Rm9ybUFycmF5Q29weUFkZGVkJywga2V5KTtcbiAgICB9KSk7XG5cbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKCRyb290U2NvcGUuJG9uKCdzY2hlbWFGb3JtRGVsZXRlU2NvcGUnLCBmdW5jdGlvbihldmVudCwgc2NvcGUsIGluZGV4KSB7XG4gICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoc2NvcGUuZm9ybS5rZXkpLnJlcGxhY2UoL1xcW1xcZCtdL2csICdbXScpO1xuICAgICAgdmFyIGNvcGllcyA9IHNlcnZpY2UuZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5KTtcblxuICAgICAgY29waWVzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKHNjb3BlLmZvcm0ubGluaykge1xuICAgICAgICB2YXIgbGlzdCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLmZvcm0ubGluaywgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBcnJheUNvcHkoZm9ybSwga2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFpbmRleCB8fCBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICBpZighc2VydmljZS5hcnJheUNvcGllc1trZXldKSBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0gPSBbXTtcbiAgICBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV1baW5kZXhdID0gZm9ybTtcbiAgICAvL3NlcnZpY2UuYXJyYXlDb3BpZXNba2V5XS5wdXNoKGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXMoa2V5KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ucGx1Y2soc2VydmljZS5nZXRBcnJheVNjb3BlcyhrZXkpLCAnZm9ybScpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlDb3BpZXNGb3Ioa2V5U3RhcnQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBrZXlTdGFydCArPSAnW10nO1xuXG4gICAgcmV0dXJuIF8uZmlsdGVyKHNlcnZpY2UuYXJyYXlDb3BpZXMsIChjb3B5LCBrZXkpID0+IGtleS5pbmNsdWRlcyhrZXlTdGFydCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXJyYXlTY29wZXMoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHJldHVybiBzZXJ2aWNlLmFycmF5Q29waWVzW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0Zvcm1DYWNoZShmaWVsZCwga2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleSA9IGtleSB8fCBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIGlmKCFzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KSkgc2VydmljZS5mb3JtQ2FjaGVba2V5XSA9IGZpZWxkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbUZvcm1DYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuZm9ybUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb0RhdGFDYWNoZShrZXksIG1vZGVsVmFsdWUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBpZihrZXkpIHtcbiAgICAgIHNlcnZpY2UuZGF0YUNhY2hlW2tleV0gPSBtb2RlbFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21EYXRhQ2FjaGUoa2V5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNlcnZpY2UuZGF0YUNhY2hlW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgcmV0dXJuIGV4cC5tYXRjaCgvXFxbKFteW1xcXV0rKV0oW15bXFxdXSopLyk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlTmVzdGVkRXhwcmVzc2lvbnMoZXhwLCBkZXB0aCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24oZXhwKTtcblxuICAgIHdoaWxlKG5lc3RlZCkge1xuICAgICAgZXhwID0gZXhwLnJlcGxhY2UoYFske25lc3RlZFsxXX1dYCwgYC4ke3NlcnZpY2UucGFyc2VFeHByZXNzaW9uKG5lc3RlZFsxXSwgZGVwdGgpLmdldCgpfWApO1xuICAgICAgbmVzdGVkID0gbWF0Y2hOZXN0ZWRFeHByZXNzaW9uKGV4cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihleHAsIGRlcHRoKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gaWYgZXhwcmVzc2lvbiBpcyBzcGVjaWZpYyB2YWx1ZVxuICAgIGlmKCFleHAgfHwgL14obnVsbHxmYWxzZXx0cnVlfHVuZGVmaW5lZHwnJ3wtP1swLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1xcJ1xcJyc6IHJldHVybiAnJztcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoKSB7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHNlcnZpY2UucmVzb2x2ZU5lc3RlZEV4cHJlc3Npb25zKGV4cCwgZGVwdGgpO1xuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocmVzb2x2ZWQpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gZGVwdGggfHwgc2VydmljZTtcblxuICAgICAgICB3aGlsZShzdGFydCAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICAgIHByb2dyZXNzLnB1c2goa2V5KTtcbiAgICAgICAgICBpZighc3RhcnRba2V5XSkge1xuICAgICAgICAgICAgaWYoL15cXGQ/JC8udGVzdChwYXRoWzBdKSkge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhcnRba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9iajogc3RhcnQsXG4gICAgICAgICAga2V5OiBwYXRoWzBdLFxuICAgICAgICAgIHBhdGg6IHNlcnZpY2UuZ2V0S2V5KHByb2dyZXNzKSxcbiAgICAgICAgICBmdWxsUGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MuY29uY2F0KHBhdGguc2xpY2UoMCwgMSkpKVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSBzZXJ2aWNlLnJlc29sdmVOZXN0ZWRFeHByZXNzaW9ucyhleHAsIGRlcHRoKTtcbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKHJlc29sdmVkKTtcbiAgICAgICAgbGV0IGFzc2lnbmFibGUgPSB0aGlzLmdldEFzc2lnbmFibGUoKTtcbiAgICAgICAgYXNzaWduYWJsZS5vYmpbYXNzaWduYWJsZS5rZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfSxcblxuICAgICAgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBleHA6IGV4cCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAga2V5OiBtYXRjaFsyXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NBcnJheShhcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoYXJyYXkua2V5KTtcblxuICAgIGFycmF5LnNvcnRPcHRpb25zID0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbihlLCB1aSkge1xuICAgICAgICBsZXQgbGlzdGVuZXIgPSBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2Ake2tleX0ubGVuZ3RoYF07XG4gICAgICAgIGxpc3RlbmVyLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgaGFuZGxlcihsaXN0ZW5lci5wcmV2LCBsaXN0ZW5lci5wcmV2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlcnZpY2UucHJvY2Vzc1NlY3Rpb24oYXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbikge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VjdGlvbi5pdGVtcywgc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGNvbXBvbmVudC50eXBlID0gJ3NlY3Rpb24nO1xuICAgIGNvbXBvbmVudC5odG1sQ2xhc3MgPSAncm93JztcblxuICAgIHZhciBjb2xzID0gMTIgLyBfLnJlamVjdChjb21wb25lbnQuaXRlbXMsICdoaWRkZW4nKS5sZW5ndGg7XG5cbiAgICBfLmVhY2goY29tcG9uZW50Lml0ZW1zLCBmdW5jdGlvbihmaWVsZCwgaSkge1xuICAgICAgc2VydmljZS5wcm9jZXNzRmllbGQoZmllbGQpO1xuICAgICAgY29tcG9uZW50Lml0ZW1zW2ldID0ge1xuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICAgIGh0bWxDbGFzczogJ2NvbC1zbS0nICsgY29scyxcbiAgICAgICAgaXRlbXM6IFtmaWVsZF1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3VycmVuY3koZmllbGQpIHtcbiAgICBmaWVsZC5jdXJyZW5jeUZvcm1hdCA9IHtcbiAgICAgICdjdXJyZW5jeS1kb2xsYXJzJzogJ2RvbGxhcnMnLFxuICAgICAgJ2N1cnJlbmN5LW1pY3JvY2VudHMnOiAnbWljcm9jZW50cycsXG4gICAgICAnY3VycmVuY3knOiAnY2VudHMnXG4gICAgfVtmaWVsZC5zY2hlbWEuZm9ybWF0XTtcblxuICAgIGZpZWxkLnR5cGUgPSAnY24tY3VycmVuY3knO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1BlcmNlbnRhZ2UoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXBlcmNlbnRhZ2UnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JldXNhYmxlKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcmV1c2FibGUnO1xuICAgIGZpZWxkLnZpZXcgPSBmaWVsZC52aWV3IHx8ICduZXcnO1xuICAgIGZpZWxkLml0ZW1zLmZvckVhY2goc2VydmljZS5wcm9jZXNzRmllbGQuYmluZChzZXJ2aWNlKSk7XG4gICAgZmllbGQuaXRlbXMgPSBbe1xuICAgICAgdHlwZTogJ3NlY3Rpb24nLFxuICAgICAgaXRlbXM6IGZpZWxkLml0ZW1zLFxuICAgICAgY29uZGl0aW9uOiAnIW1vZGVsLicgKyBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpICsgJy5pZCdcbiAgICB9XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNZWRpYVVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLW1lZGlhdXBsb2FkJztcbiAgICBfLmVhY2goZmllbGQuZGF0YSwgZnVuY3Rpb24oZGF0YVByb3AsIGtleSkge1xuICAgICAgZmllbGQuZGF0YVtrZXldID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZGF0YVByb3ApLmdldCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NzdlVwbG9hZChmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBmaWVsZC50eXBlID0gJ2NuLWNzdnVwbG9hZCc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9zKGZpZWxkKSB7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yYWRpb3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1JhZGlvYnV0dG9ucyhyYWRpb3MpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmFkaW9zLnR5cGUgPSAnY24tcmFkaW9idXR0b25zJztcbiAgICBpZihyYWRpb3MuZnVsbFdpZHRoKSB7XG4gICAgICByYWRpb3MuYnRuQ2xhc3MgPSAnY29sLXNtLScgKyBfLmRpdmlkZSgxMiwgcmFkaW9zLnRpdGxlTWFwLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkYXRlLnR5cGUgPSAnY24tZGF0ZXRpbWVwaWNrZXInO1xuXG4gICAgaWYoZGF0ZS5zY2hlbWEuZm9ybWF0ID09PSAndGltZS1taW51dGVzJykge1xuICAgICAgZGF0ZS5tYXhWaWV3ID0gJ2hvdXInO1xuICAgICAgZGF0ZS5pY29uQ2xhc3MgPSAnZmEgZmEtY2xvY2stbyc7XG5cbiAgICAgIGRhdGUubW9kZWxGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG0gPSBtb21lbnQodmFsKTtcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShtLmhvdXJzKCksIDYwKSwgbS5taW51dGVzKCkpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS5tb2RlbFBhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgZCA9IHBhcnNlSW50KHZhbCk7XG4gICAgICAgIGxldCBob3VycyA9IF8uZmxvb3IoZCAvIDYwKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkICUgNjA7XG5cbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCgnaG91cnMnLCBob3VycykuYWRkKCdtaW51dGVzJywgbWludXRlcyk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLnZpZXdGb3JtYXR0ZXIgPSB2YWwgPT4ge1xuICAgICAgICBpZighdmFsKSByZXR1cm47XG5cbiAgICAgICAgcmV0dXJuIGRhdGUubW9kZWxQYXJzZXIodmFsKS5mb3JtYXQoZGF0ZS5kYXRlRm9ybWF0KTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld1BhcnNlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbWF0Y2ggPSB2YWwubWF0Y2goL14oXFxkezEsMn0pOj8oXFxkezEsMn0pPyAoYXxwKS8pO1xuICAgICAgICBpZighbWF0Y2gpIHJldHVybjtcblxuICAgICAgICBsZXQgaG91cnMgPSBfLmFkZChtYXRjaFsxXSA9PT0gJzEyJyA/IDAgOiBtYXRjaFsxXSwgbWF0Y2hbM10gPT09ICdhJyA/IDAgOiAxMik7XG4gICAgICAgIGxldCBtaW51dGVzID0gbWF0Y2hbMl0gfHwgJzAwJztcblxuICAgICAgICBpZihtaW51dGVzLmxlbmd0aCA9PT0gMSkgbWludXRlcyArPSAnMCc7XG5cbiAgICAgICAgcmV0dXJuIF8uYWRkKF8ubXVsdGlwbHkoaG91cnMsIDYwKSwgbWludXRlcyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KSB7XG4gICAgbGV0IGlzQXJyYXkgPSBzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWVQcm9wZXJ0eSB8fFxuICAgICAgKGlzQXJyYXkgPyBzZWxlY3Quc2NoZW1hLml0ZW1zLnR5cGUgOiBzZWxlY3Quc2NoZW1hLnR5cGUpICE9PSAnb2JqZWN0JyAmJiAndmFsdWUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCB0aXRsZU1hcCkge1xuICAgIHRpdGxlTWFwID0gdGl0bGVNYXAgfHwgc2VsZWN0LmdldFRpdGxlTWFwKCk7XG4gICAgbGV0IHZhbFByb3AgPSBnZXRTZWxlY3RWYWxQcm9wKHNlbGVjdCk7XG4gICAgaWYoIXZhbFByb3ApIHJldHVybjtcblxuICAgIGlmKHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheScpIHtcbiAgICAgIGlmKCF2YWwgfHwgIV8uaXNBcnJheSh2YWwpKSByZXR1cm47XG5cbiAgICAgIGxldCBtYXBWYWwgPSB2YWwubWFwKHggPT4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB4fSkpLmZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgIHJldHVybiBtYXBWYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIF8uZmluZCh0aXRsZU1hcCwge1t2YWxQcm9wXTogdmFsfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdChzZWxlY3QpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IHNlbGVjdC5zY2hlbWE7XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBSZXNvbHZlIHx8IHNlbGVjdC50aXRsZU1hcCkge1xuICAgICAgc2VsZWN0LmdldFRpdGxlTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3QudGl0bGVNYXAgfHwgc2VydmljZS5zY2hlbWEuZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXTtcbiAgICAgIH07XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHVzZSBjb3JyZWN0IHZhbHVlXG4gICAgICAgIHZhciBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZm9ybS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgICBpZihldmVudCA9PT0gJ3RhZy1pbml0Jykge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCBtb2RlbFZhbHVlLmdldCgpKTtcbiAgICAgICAgICBpZihuZXdWYWwgIT09IHVuZGVmaW5lZCkgc2V0dGVyKG5ld1ZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LnRpdGxlTWFwUXVlcnkpIHtcbiAgICAgIHZhciBrZXkgPSBzZWxlY3QudGl0bGVNYXBRdWVyeS5wYXJhbXMucTtcbiAgICAgIHNlbGVjdC50aXRsZVF1ZXJ5ID0gZnVuY3Rpb24ocSkge1xuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIGlmKGtleSkge1xuICAgICAgICAgIHBhcmFtc1trZXldID0gcTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXBpLmdldCh7XG4gICAgICAgICAgdXJsOiBzZWxlY3QudGl0bGVNYXBRdWVyeS51cmwsXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICAvLyB3cmFwIGluIHN0cmluZyBzbyByZXR1cm5zIHRydXRoeSB3aGVuIGNvbXBpbGVkLCBidXQgY29udmVydGVkIHRvIG51bWJlciB3aXRoaW4gZGlyZWN0aXZlXG4gICAgICBpZigha2V5KSBzZWxlY3QubWluTG9va3VwID0gJzAnO1xuXG4gICAgICBzZWxlY3Qub25Jbml0ID0gZnVuY3Rpb24odmFsLCBmb3JtLCBldmVudCwgc2V0dGVyKSB7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgc2V0dGVyKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoc2NoZW1hLml0ZW1zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXTtcbiAgICAgIF8uZWFjaChzY2hlbWEuaXRlbXMucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBrZXkpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoc2NoZW1hLmRlZmF1bHQpKSB7XG4gICAgICAgICAgZGVmYXVsdHMucHVzaCh7XG4gICAgICAgICAgICBcImtleVwiOiBrZXksXG4gICAgICAgICAgICBkZWZhdWx0OiBzY2hlbWEuZGVmYXVsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmKGRlZmF1bHRzLmxlbmd0aCkge1xuICAgICAgICBzZWxlY3Qub25BZGQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50KSB7XG4gICAgICAgICAgaWYodmFsLnZhbHVlICYmIGV2ZW50ID09PSAndGFnLWFkZGVkJykge1xuICAgICAgICAgICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgIGlmKCF2YWwudmFsdWVbcHJvcC5rZXldKSB2YWwudmFsdWVbcHJvcC5rZXldID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFzZWxlY3QudHlwZS5pbmNsdWRlcygnY24tYXV0b2NvbXBsZXRlJykpIHtcbiAgICAgIGlmKHNlbGVjdC5pdGVtcykge1xuICAgICAgICBzZWxlY3QuZGV0YWlsZWRMaXN0ID0gdHJ1ZTtcblxuICAgICAgICBpZihzZWxlY3QuaXRlbXNbMF0udHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICBpZihzZWxlY3QuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgc2VsZWN0Lml0ZW1zID0gW3tcbiAgICAgICAgICAgICAgdHlwZTogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgaXRlbXM6IHNlbGVjdC5pdGVtc1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzRmllbGRzZXQoc2VsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXNlbGVjdC5zZWxlY3Rpb25TdHlsZSkge1xuICAgICAgICAgIHNlbGVjdC5zZWxlY3Rpb25TdHlsZSA9IHNlbGVjdC5rZXkgPT09ICd0YWdzJyA/XG4gICAgICAgICAgICAndGFncycgOiAoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5JyAmJiBzZWxlY3Quc2NoZW1hLm1heEl0ZW1zICE9PSAxKSA/XG4gICAgICAgICAgICAgICdsaXN0JyA6ICdzZWxlY3QnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdC50eXBlID0gJ2NuLWF1dG9jb21wbGV0ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kb24oJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCAoZSwgZGF0YSkgPT4ge1xuICAgICAgICAgIGlmKGRhdGFbc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZV0pIHtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0LmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgICAgICBsZXQgdmFsID0gbW9kZWxWYWx1ZS5nZXQoKTtcbiAgICAgICAgICAgIGlmKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCB2YWxpZCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIHZhbCwgZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSk7IFxuICAgICAgICAgICAgICBpZih2YWxpZCA9PT0gdW5kZWZpbmVkKSBtb2RlbFZhbHVlLnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoc2VsZWN0LmRpc3BsYXlGb3JtYXQpIHtcbiAgICAgIHNlbGVjdC5pdGVtRm9ybWF0dGVyID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoc2VsZWN0LmRpc3BsYXlGb3JtYXQpO1xuICAgIH1cblxuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdC5rZXksIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmZvcm1DdHJsICYmIHNlcnZpY2UuZm9ybUN0cmxbc2VydmljZS5nZXRLZXkoc2VsZWN0LmtleSldO1xuICAgICAgaWYoZm9ybSAmJiBmb3JtLiRzZXREaXJ0eSkgZm9ybS4kc2V0RGlydHkoKTtcbiAgICB9LCBzZWxlY3QudXBkYXRlU2NoZW1hKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUb2dnbGUodG9nZ2xlKSB7XG4gICAgdG9nZ2xlLnR5cGUgPSAnY24tdG9nZ2xlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NIZWxwKGhlbHApIHtcbiAgICBoZWxwLmh0bWxDbGFzcyA9ICdoZWxwLWJsb2NrJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NEaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZGlzcGxheS50eXBlID0gJ2NuLWRpc3BsYXknO1xuICAgIGRpc3BsYXkuZ2V0RGlzcGxheSA9IHNlcnZpY2UucHJvY2Vzc1RlbXBsYXRlKGRpc3BsYXkuZGlzcGxheUZvcm1hdCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGVtcGxhdGUodHBsLCBwYXJzZVNjb3BlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIC8vdmFyIHByb2Nlc3NvciA9IC88KFxcUyspW14+XSo+Lio8XFwvXFwxPi8udGVzdCh0cGwpID8gJGNvbXBpbGUgOiAkaW50ZXJwb2xhdGU7XG4gICAgdmFyIHByb2Nlc3NvciA9ICRpbnRlcnBvbGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmKHBhcnNlU2NvcGUpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoYXJyYXlJbmRleCkpIHtcbiAgICAgICAgICBzY29wZSA9IF8ubWFwKHNjb3BlLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPT09ICdhcnJheUluZGV4JyA/IGFycmF5SW5kZXggOiBrZXk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcGUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzY29wZSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvY2Vzc29yKHRwbCkoc2NvcGUpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzVGFibGUodGFibGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdGFibGUudHlwZSA9ICdjbi10YWJsZSc7XG4gICAgdGFibGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfLmV4dGVuZChyb3cuaXRlbXNbaV0sIHRhYmxlLmNvbHVtbnNbaV0pO1xuICAgICAgICAvL2lmKHJvdy5jb2x1bW5zW2ldLmtleSkgcm93LmNvbHVtbnNbaV0ua2V5ID0gT2JqZWN0UGF0aC5wYXJzZShyb3cuY29sdW1uc1tpXS5rZXkpO1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChyb3cuaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLFxuICAgICAgICBzZWxlY3RGaWVsZCA9IF8uZmluZChzZWxlY3REaXNwbGF5Lml0ZW1zLCAnc2VsZWN0RmllbGQnKSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmKHNjaGVtYSAmJiBzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaGFuZGxlciA9IHNlcnZpY2Uuc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cFNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpO1xuICAgIH1cblxuICAgIHNlbGVjdERpc3BsYXkuc2VsZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHNlbGVjdEZpZWxkLmtleSwgaGFuZGxlciwgc2VsZWN0RmllbGQudXBkYXRlU2NoZW1hLCB0cnVlKTtcbiAgICAvL3NlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UoZnVuY3Rpb24odXBkYXRlU2NoZW1hKSB7XG4gICAgICB2YXIgcGFyYW1zID0gXy5leHRlbmQoY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpLCBzZXJ2aWNlLnBhcmFtcyk7XG4gICAgICB2YXIgZGlmZiA9IGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKTtcbiAgICAgIHZhciBrZXlzO1xuXG4gICAgICBpZihkaWZmIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgJ3VwZGF0ZVNjaGVtYScpKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgYHNjaGVtYS5kYXRhLiR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5zY2hlbWEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCBmdW5jdGlvbihmb3JtKSB7XG5cbiAgICAgICAgICBpZihrZXlzLmluZGV4T2YoZm9ybS5rZXkpID09PSAtMSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGZvcm0ua2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgdmFyIGNhY2hlZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmb3JtLmtleSk7XG4gICAgICAgICAgaWYoY2FjaGVkKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNhY2hlZCwgZm9ybSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGZvcm0ua2V5KTtcbiAgICAgICAgICBpZihjb3BpZXMpIHtcbiAgICAgICAgICAgIGNvcGllcy5mb3JFYWNoKGNvcHkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgICAgICBpZihmb3JtKSBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmb3JtKTtcbiAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ1tdJykpIHtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgICAgICBfLmVhY2goY29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICAgIGlmKGNvcHkpIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmKCF1cGRhdGVba2V5XSkgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBfLmtleXModXBkYXRlKTtcblxuICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKHVwZGF0ZS5rZXkpO1xuXG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCB1cGRhdGUua2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSBjdXJyZW50LnJlZHJhdygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgaWYoIXJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkgcmV0dXJuIHJlc29sdmU7XG4gICAgY29uc3QgYXJyYXlJbmRleEtleSA9IC8oW14uW10qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKGFycmF5SW5kZXhLZXlbMV0gKyAnXFxcXFsoLT9cXFxcZCspXFxcXF0nKTtcbiAgICBjb25zdCBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICBjb25zb2xlLmxvZygncmUsIGluZGV4OicsIHJlLCBpbmRleCwga2V5KTtcbiAgICBpZighaW5kZXgpIHJldHVybiByZXNvbHZlO1xuICAgIHJldHVybiByZXNvbHZlLnJlcGxhY2UobmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzBdLnJlcGxhY2UoLyhcXFt8XFxdKS9nLCAnXFxcXCQxJyksICdnJyksIGluZGV4WzBdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFycmF5SW5kZXgoa2V5KSB7XG4gICAgaWYoXy5pc09iamVjdChrZXkpKSB7XG4gICAgICByZXR1cm4gXy5maW5kKGtleS5rZXksIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gXy5pc051bWJlcihrZXkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvXFxbKFxcZCspXFxdLy5leGVjKGtleSlbMV07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXJyYXlJbmRleChrZXksIGluZGV4LCBhc0FycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXlDb3B5O1xuICAgIGlmKF8uaXNTdHJpbmcoa2V5KSkge1xuICAgICAga2V5Q29weSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5Q29weSA9IF8uY2xvbmUoa2V5KTtcbiAgICB9XG4gICAgdmFyIGluZGV4T2ZJbmRleCA9IGtleUNvcHkuaW5kZXhPZignJyk7XG4gICAga2V5Q29weVtpbmRleE9mSW5kZXhdID0gaW5kZXg7XG5cbiAgICBpZihhc0FycmF5KSB7XG4gICAgICByZXR1cm4ga2V5Q29weTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlcnZpY2UuZ2V0S2V5KGtleUNvcHkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZXJ2aWNlLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtU2VydmljZScsIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3RwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxNYXAgPSB7fTtcbmNvbnN0IHByb21pc2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0UHJvbWlzZXMoc3RhdGUpIHtcbiAgaWYocHJvbWlzZU1hcFtzdGF0ZV0pIHJldHVybiBwcm9taXNlTWFwW3N0YXRlXTtcblxuICBjb25zdCBwcm9taXNlID0ge307XG4gIHByb21pc2VNYXBbc3RhdGVdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSkge1xuICBjb25zdCBwcm9taXNlcyA9IGdldFByb21pc2VzKHN0YXRlKTtcbiAgaWYocHJvbWlzZXNbaWRdKSByZXR1cm4gcHJvbWlzZXNbaWRdO1xuXG4gIGNvbnN0IHByb21pc2UgPSAkcS5kZWZlcigpO1xuICBwcm9taXNlc1tpZF0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKCkge1xuICBwYXJlbnQuJGluamVjdCA9IFsnJHN0YXRlUGFyYW1zJywgJyRxJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZS4kaW5qZWN0ID0gWyckc3RhdGVQYXJhbXMnLCAnJHEnXTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiRmxleEZvcm1Nb2RhbExvYWRlci4kaW5qZWN0ID0gW1xuICAnRmxleEZvcm1Nb2RhbCcsICckc3RhdGUnLCAnJHJvb3RTY29wZScsICckc3RhdGVQYXJhbXMnXG5dO1xuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsTG9hZGVyKEZsZXhGb3JtTW9kYWwsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXNtaXNzTW9kYWwnKTtcbiAgICB2bS5kaXNtaXNzRXZlbnQoKTtcbiAgICB2bS5tb2RhbC5kaXNtaXNzKCk7XG4gIH1cbn1cblxuRmxleEZvcm1Nb2RhbC4kaW5qZWN0ID0gWydjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgJyR1aWJNb2RhbCcsICckc3RhdGVQYXJhbXMnXTtcbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG4gIFxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnMgXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gICAgLy8uZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpO1xuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogJ1xcXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxcXG4gICAgICAgIDxuZy1mb3JtIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxcXG4gICAgICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcXFxuICAgICAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXFxcbiAgICAgICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPjwvbmctZm9ybT5cXFxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XFxcbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPjxwcmUgcHJldHR5LWpzb249XCJ2bS5tb2RlbFwiPjwvcHJlPjwvc2VjdGlvbj5cXFxuICAgICAgPC9kaXY+XFxcbiAgICAnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuRmxleEZvcm0uJGluamVjdCA9IFsnY25GbGV4Rm9ybVNlcnZpY2UnLCAnJHNjb3BlJywgJyRsb2NhdGlvbiddO1xuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gdm0uY29uZmlnLnNjaGVtYTsgfSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIC8vY29uc29sZS5sb2coJ3ZtLmZvcm1OYW1lOicsIHZtLmZvcm1OYW1lKTtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdwcm9jZXNzOicsIGN1ciwgcHJldik7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZtLnNlcnZpY2UuaXNDb21waWxlZCgpOicsIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpKTtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsKTtcbiAgICAgIH1cbiAgICAgIC8vJHNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1SZWRyYXcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdzaG93Rm9ybTonLCB2bS5kZWxheUZvcm0sIHZtLmZvcm1OYW1lKTtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgdm0uc2VydmljZS5jbGVhbnVwKCk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS5jb25maWcudGl0bGUubGVhZFwiPnt7Ojp2bS5jb25maWcudGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0uY29uZmlnLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0uY29uZmlnLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0uY29uZmlnLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0uY29uZmlnLnRpdGxlLnN1YlwiPnt7Ojp2bS5jb25maWcudGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uY29uZmlnLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQtZGFya1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNvbmZpZy5hY3Rpb25Db25maWcucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0uY29uZmlnLmFjdGlvbkNvbmZpZy5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0uY29uZmlnLmFjdGlvbkNvbmZpZy5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0LWRhcmtcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jb25maWcuYWN0aW9uQ29uZmlnLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY29uZmlnLmFjdGlvbkNvbmZpZy5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmNvbmZpZy5hY3Rpb25Db25maWcuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZy5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZy5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5GbGV4Rm9ybUhlYWRlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIHZtLnVwZGF0ZURhdGEgPSB1cGRhdGVEYXRhO1xuICB2bS5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZURhdGE6JywgdXBkYXRlRGF0YSk7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICAvL2NvbnNvbGUubG9nKCckc2NvcGUsIG5nTW9kZWw6JywgJHNjb3BlLmZvcm0sIG5nTW9kZWwpO1xuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=