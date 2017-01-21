(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("objectpath"));
	else if(typeof define === 'function' && define.amd)
		define("all.js", ["lodash", "objectpath"], factory);
	else if(typeof exports === 'object')
		exports["all.js"] = factory(require("lodash"), require("objectpath"));
	else
		root["all.js"] = factory(root["lodash"], root["objectpath"]);
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
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _objectpath = __webpack_require__(7);
	
	var _objectpath2 = _interopRequireDefault(_objectpath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	    return _lodash2.default.isUndefined(field.default) && !_lodash2.default.isUndefined(field.schema.default) && service.processDefault(field);
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
	    reprocessField: reprocessField,
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
	
	    this._ = _lodash2.default;
	
	    this.compile(schema, model, config);
	  }
	
	  _lodash2.default.extend(CNFlexForm.prototype, prototype);
	  _lodash2.default.extend(CNFlexFormConstructor, prototype);
	
	  return CNFlexFormConstructor;
	
	  //////////////
	
	  function compile(schema, model, config) {
	    var service = this;
	
	    service.schema = schema;
	    service.model = model;
	
	    if (!service.isCompiled()) {
	      service.setupConfig(config);
	
	      if (schema.forms) {
	        _lodash2.default.each(schema.forms, function (form) {
	          _lodash2.default.each(form.form, service.processField.bind(service));
	        });
	      } else {
	        _lodash2.default.each(schema.form, service.processField.bind(service));
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
	      return _lodash2.default.isArray(schema.type) ? _lodash2.default.first(schema.type) : schema.type;
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
	      if (_lodash2.default.isTrulyEmpty(modelValue) || _lodash2.default.has(service.defaults, key) && angular.equals(modelValue, service.defaults[key])) {
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
	    var fieldType = cnFlexFormTypes.getFieldType(field);
	    var handler = fieldTypeHandlers[fieldType];
	    if (_lodash2.default.isString(handler)) {
	      service[handler](field);
	    } else if (_lodash2.default.isFunction(handler)) {
	      handler.call(service, field);
	    }
	  }
	
	  function processField(field) {
	    var service = this;
	
	    if (!field._ogKeys) {
	      field._ogKeys = _lodash2.default.without(_lodash2.default.keys(field), 'key', 'htmlClass');
	    }
	
	    var key = service.getKey(field.key);
	
	    if (key) {
	      service.addToFormCache(field, key);
	      field.schema = service.getSchema(key);
	
	      if (field.schema) {
	        if (field.schema.description) field.description = field.schema.description;
	        if (field.readonly && !field.schema.readonly) field.readonly = false;
	        if (field.schema.type === 'array' && !('showClearAll' in field)) field.showClearAll = true;
	      }
	
	      service.processSchema(field);
	    }
	
	    fieldPropHandlers.forEach(function (_ref, index) {
	      var prop = _ref.prop,
	          handler = _ref.handler;
	      return _lodash2.default.has(field, prop) && handler(field, service);
	    });
	
	    if (key) {
	      if (_lodash2.default.find(service.errors, { key: key })) {
	        service.errors = _lodash2.default.reject(service.errors, { key: key });
	        $rootScope.$broadcast('schemaForm.error.' + key, 'schemaForm', true);
	        $rootScope.$broadcast('schemaForm.error.' + key, 'serverValidation', true);
	      }
	
	      if (field.error) {
	        service.errors.push(service.buildError(field));
	        if (_lodash2.default.isEmpty(field.ngModelOptions)) {
	          field.ngModelOptions = {
	            allowInvalid: true
	          };
	        } else {
	          field.ngModelOptions.allowInvalid = true;
	        }
	      }
	    }
	  }
	
	  function getKey(key) {
	    if (_lodash2.default.isArray(key)) {
	      key = _lodash2.default.reduce(key, function (total, next) {
	        if (/^(\d*)$/.test(next)) {
	          return total + '[' + next + ']';
	        }
	        return total + '.' + next;
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
	    key = _objectpath2.default.parse(key);
	    depth = depth || service.schema.schema.properties;
	
	    // why do we do this? it's breaking stuff
	    //if(_.last(key) === '') key.pop();
	
	    var first = void 0,
	        next = void 0;
	
	    while (key.length > 1) {
	      first = key[0];
	      next = key[1];
	      if (/^\d*$/.test(next)) {
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
	
	  function processResolve(field) {
	    var service = this;
	
	    _lodash2.default.each(field.resolve, function (dataProp, fieldProp) {
	      service.handleResolve(field, fieldProp, dataProp);
	
	      var resolveType = dataProp.match(/(schema\.data\.|model\.)(\w+)/);
	
	      if (resolveType) {
	        if (resolveType[1] === 'schema.data.') {
	          service.registerResolve(field, fieldProp, resolveType[2]);
	        } else if (resolveType[1] === 'model.') {
	          service.registerHandler(resolveType[2], function () {
	            service.handleResolve(field, fieldProp, dataProp);
	          });
	        }
	      }
	    });
	
	    return field;
	  }
	
	  function handleResolve(field, fieldProp, exp) {
	    var service = this;
	    var data = service.parseExpression(exp).get();
	    // if we're resolving from model but defaults haven't been applied yet, resolve from default itself
	    if (!data && exp.indexOf('model.') === 0) {
	      data = service.getSchema(exp.replace('model.', '')).default;
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
	    _lodash2.default.each(field.conditionals, function (condition, key) {
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
	
	    field.watch = _lodash2.default.isArray(field.watch) ? field.watch : [field.watch];
	
	    _lodash2.default.each(field.watch, function (watch) {
	      if (watch.resolution) {
	        var adjustment;
	
	        (function () {
	          var condition = watch.condition;
	          var resolution = watch.resolution;
	          var handler = void 0;
	
	          if (_lodash2.default.isFunction(resolution)) {
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
	                      result = _lodash2.default.floor(result, p);
	                    } else if (adjustment.math[1] === '/') {
	                      result = _lodash2.default.ceil(result, p);
	                    } else {
	                      result = _lodash2.default.round(result, p);
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
	
	      return _lodash2.default[fn]($parse(list)(service), generatePredicate(predicateParams, predicateBody));
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
	    if (_lodash2.default.isObject(key) && !_lodash2.default.isArray(key)) {
	      if (!key.key && key.items) {
	        _lodash2.default.each(key.items, function (field) {
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
	    var defaultValue = _lodash2.default.get(service.getSchema(key), 'default');
	
	    if (!service.listeners[key]) {
	      var prev = _lodash2.default.isUndefined(cur) ? angular.copy(defaultValue) : angular.copy(cur);
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
	    _lodash2.default.each(arrVal, function (field, i) {
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
	
	      _lodash2.default.each(service.arrayListeners, function (listener, key) {
	        var val = service.parseExpression(key, service.model).get();
	        if (!angular.equals(val, listener.prev)) {
	          listener.handlers.forEach(function (handler) {
	            return handler(val, listener.prev);
	          });
	          listener.prev = angular.copy(val);
	        }
	      });
	
	      _lodash2.default.each(service.listeners, function (listener, key) {
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
	        if (service.model.id && !service.updates && _lodash2.default.isEmpty(service.prevParams)) {
	          ++service.updates;
	        } else {
	          service.refreshSchema();
	        }
	      }
	    }
	  }
	
	  function initSchemaParams() {
	    var service = this;
	    _lodash2.default.each(service.listeners, function (listener, key) {
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
	    return _lodash2.default.pluck(service.getArrayScopes(key), 'form');
	  }
	
	  function getArrayCopiesFor(keyStart) {
	    var service = this;
	    keyStart += '[]';
	
	    return _lodash2.default.filter(service.arrayCopies, function (copy, key) {
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
	    return exp.match(/\[([^[\]]+)]/);
	  }
	
	  function parseExpression(exp, depth) {
	    var service = this;
	    // if expression is specific value
	    if (!exp || /^(null|false|true|undefined|''|[0-9.]+|\[]|\{})$/.test(exp)) {
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
	        var preParsed = exp;
	        var nested = matchNestedExpression(preParsed);
	
	        while (nested) {
	          preParsed = preParsed.replace(nested[0], '.' + service.parseExpression(nested[1], depth).get());
	          nested = matchNestedExpression(preParsed);
	        }
	
	        var path = _objectpath2.default.parse(preParsed, nested);
	        var start = depth || service;
	
	        while (start && path.length > 1) {
	          start = start[path.shift()];
	        }
	
	        return start && start[path[0]];
	      },
	      getAssignable: function getAssignable() {
	        if (matchNestedExpression(preParsed)) {
	          throw 'Cannot use getAssignable() with nested expression (' + exp + ')';
	        }
	
	        var path = _objectpath2.default.parse(exp);
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
	        if (matchNestedExpression(preParsed)) {
	          throw 'Cannot use set() with nested expression (' + exp + ')';
	        }
	
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
	    _lodash2.default.each(section.items, service.processField.bind(service));
	  }
	
	  function processComponent(component) {
	    var service = this;
	
	    component.type = 'section';
	    component.htmlClass = 'row';
	
	    var cols = 12 / _lodash2.default.reject(component.items, 'hidden').length;
	
	    _lodash2.default.each(component.items, function (field, i) {
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
	    _lodash2.default.each(field.data, function (dataProp, key) {
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
	      radios.btnClass = 'col-sm-' + _lodash2.default.divide(12, radios.titleMap.length);
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
	
	        return _lodash2.default.add(_lodash2.default.multiply(m.hours(), 60), m.minutes());
	      };
	
	      date.modelParser = function (val) {
	        if (!val) return;
	
	        var d = parseInt(val);
	        var hours = _lodash2.default.floor(d / 60);
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
	
	        var hours = _lodash2.default.add(match[1] === '12' ? 0 : match[1], match[3] === 'a' ? 0 : 12);
	        var minutes = match[2] || '00';
	
	        if (minutes.length === 1) minutes += '0';
	
	        return _lodash2.default.add(_lodash2.default.multiply(hours, 60), minutes);
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
	      if (!val || !_lodash2.default.isArray(val)) return;
	
	      var mapVal = val.map(function (x) {
	        return _lodash2.default.find(titleMap, _defineProperty({}, valProp, x));
	      }).filter(function (x) {
	        return x !== undefined;
	      });
	
	      return mapVal;
	    } else {
	      return _lodash2.default.find(titleMap, _defineProperty({}, valProp, val));
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
	      _lodash2.default.each(schema.items.properties, function (schema, key) {
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
	            _lodash2.default.each(defaults, function (prop) {
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
	          scope = _lodash2.default.map(scope, function (key) {
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
	        _lodash2.default.extend(row.items[i], table.columns[i]);
	        //if(row.columns[i].key) row.columns[i].key = ObjectPath.parse(row.columns[i].key);
	        service.processField(row.items[i]);
	      }
	    });
	  }
	
	  function processSelectDisplay(selectDisplay) {
	    var service = this,
	        schema = service.getSchema(selectDisplay.key),
	        selectField = _lodash2.default.find(selectDisplay.items, 'selectField'),
	        handler;
	
	    if (schema && schema.type === 'array') {
	      handler = service.setupArraySelectDisplay(selectDisplay, selectField);
	    } else {
	      handler = service.setupSelectDisplay(selectDisplay, selectField);
	    }
	
	    selectDisplay.selectDisplay = false;
	    service.registerHandler(selectField.key, handler, selectField.updateSchema, true);
	    service.processField(selectDisplay);
	  }
	
	  function setupArraySelectDisplay(selectDisplay, selectField) {
	    var service = this;
	    _lodash2.default.each(selectDisplay.items, function (item) {
	      if (item.condition !== 'false') {
	        item.condition = 'true';
	      }
	    });
	    var handler = function handler(val, prev, key) {
	      var index = getArrayIndex(key);
	      _lodash2.default.each(selectDisplay.items, function (item) {
	        var selectKey = service.getKey(selectField.key);
	        var key = service.getKey(item.key);
	        var splitKey = _objectpath2.default.parse(key);
	        if (selectKey === key) return;
	        var indexedSelectKey = service.setArrayIndex(selectKey, index);
	        var selectValue = service.parseExpression(indexedSelectKey, service.model).get();
	        var formCopies = service.getArrayCopies(key);
	        if (_lodash2.default.includes(selectValue, splitKey[splitKey.length - 1])) {
	          _lodash2.default.each(formCopies, function (copy) {
	            if (getArrayIndex(copy) == index) {
	              copy.condition = 'true';
	            }
	          });
	        } else {
	          _lodash2.default.each(formCopies, function (copy) {
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
	    _lodash2.default.each(selectDisplay.items, function (item) {
	      var key = service.getKey(item.key);
	      var selectKey = service.getKey(selectField.key);
	      if (key === selectKey) return;
	      _lodash2.default.each(model, function (elem, i) {
	        var indexedKey = service.setArrayIndex(key, i);
	        var splitIndexedKey = _objectpath2.default.parse(indexedKey);
	        var indexedSelectKey = service.setArrayIndex(selectKey, i);
	        var selectModel = service.parseExpression(indexedSelectKey, service.model);
	        var selectValue = selectModel.get();
	        var itemValue = service.parseExpression(indexedKey, service.model).get();
	        if (itemValue && !_lodash2.default.includes(selectValue, splitIndexedKey[splitIndexedKey.length - 1])) {
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
	    _lodash2.default.each(defaults, function (elem, i) {
	      var selectKey = service.getKey(selectField.key);
	      var indexedSelectKey = service.setArrayIndex(selectKey, i);
	      var selectModel = service.parseExpression(indexedSelectKey, service.model);
	      var selectValue = selectModel.get();
	      _lodash2.default.each(elem, function (val, key) {
	        if (!selectValue) {
	          selectValue = [];
	        }
	        selectValue.push(key);
	        selectModel.set(selectValue);
	      });
	    });
	    // run handler once all arrayCopies have been instantiated
	    var count = 0;
	    var keyMap = _lodash2.default.pluck(_lodash2.default.reject(selectDisplay.items, { "condition": "false" }), 'key');
	    var once = $rootScope.$on('flexFormArrayCopyAdded', function (event, key) {
	      var model = service.parseExpression(service.getKey(selectDisplay.key), service.model).get();
	      if (model) {
	        var total = model.length * keyMap.length;
	        if (_lodash2.default.includes(keyMap, key)) {
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
	      _lodash2.default.each(selectDisplay.items, function (item) {
	        var key = service.getKey(item.key);
	        var splitKey = _objectpath2.default.parse(key);
	        if (selectKey === key) return;
	        var selectValue = service.parseExpression(selectKey, service.model).get();
	        if (_lodash2.default.includes(selectValue, splitKey[splitKey.length - 1])) {
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
	    _lodash2.default.each(selectDisplay.items, function (item) {
	      var key = service.getKey(item.key);
	      if (selectKey === key) return;
	      var splitKey = _objectpath2.default.parse(key);
	      var itemValue = service.parseExpression(key, service.model).get();
	      if (itemValue && !_lodash2.default.includes(selectValue, splitKey[splitKey.length - 1])) {
	        if (!selectValue) {
	          selectValue = [];
	        }
	        selectValue.push(splitKey[splitKey.length - 1]);
	        selectModel.set(selectValue);
	      }
	    });
	    // handle new objects with values set in the defaults
	    var defaults = service.getSchema(selectDisplay.key).default;
	    _lodash2.default.each(defaults, function (val, key) {
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
	    service.refreshSchema = _lodash2.default.debounce(function (updateSchema) {
	      var params = _lodash2.default.extend(cnFlexFormConfig.getStateParams(), service.params);
	      var diff = cnUtil.diff(service.schema.params, params, true);
	      var keys;
	
	      if (diff || updateSchema) {
	        if (updateSchema) params.updateSchema = updateSchema;else {
	          keys = _lodash2.default.keys(diff);
	
	          if (keys.length > 1) {
	            diff = _lodash2.default.omit(diff, _lodash2.default.isNull);
	            keys = _lodash2.default.keys(diff);
	          }
	
	          params.updateSchema = _lodash2.default.first(keys);
	        }
	
	        if (!params.updateSchema) {
	          diff = cnUtil.diff(params, _lodash2.default.omit(service.schema.params, 'updateSchema'));
	          keys = _lodash2.default.keys(diff);
	
	          params.updateSchema = _lodash2.default.first(keys);
	        }
	
	        refresh(params).then(function (schema) {
	          ++service.updates;
	          //service.updateSchema(schema);
	          service.processUpdatedSchema(schema);
	        });
	      }
	    }, 100);
	
	    service.refreshData = _lodash2.default.debounce(function () {
	      refresh(_lodash2.default.extend(service.schema.params, { updateSchema: 'refreshData' })).then(function (schema) {
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
	        _lodash2.default.each(schema.diff.data, function (data, prop) {
	          if (data && data.data && !_lodash2.default.isEmpty(service.schema.data[prop].data) && !data.reset) {
	            data.data = service.schema.data[prop].data.concat(data.data);
	          }
	          service.schema.data[prop] = data;
	          if (service.resolveRegister[prop]) {
	            _lodash2.default.each(service.resolveRegister[prop], function (registers) {
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
	        _lodash2.default.each(schema.diff.schema, function (schema, key) {
	          service.schema.schema.properties[key] = schema;
	          reprocessSchema(schema, key, keys);
	        });
	      }
	
	      if (schema.diff.form) {
	        $rootScope.$broadcast('cnFlexFormDiff:form', schema.diff.form);
	        _lodash2.default.each(schema.diff.form, function (form) {
	
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
	        _lodash2.default.each(keys, function (key) {
	          var form = service.getFromFormCache(key);
	          if (form) service.processField(form);
	          if (key.includes('[]')) {
	            var copies = service.getArrayCopies(key);
	            _lodash2.default.each(copies, function (copy) {
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
	
	    _lodash2.default.extend(current, _lodash2.default.omit(update, 'items', 'key'));
	
	    current._ogKeys.forEach(function (key) {
	      if (!update[key]) delete current[key];
	    });
	    current._ogKeys = _lodash2.default.keys(update);
	
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
	      _lodash2.default.each(schema.properties, function (schema, subKey) {
	        reprocessSchema(schema, key + '.' + subKey, keys);
	      });
	    }
	    if (schema.items && schema.items.properties) {
	      _lodash2.default.each(schema.properties, function (schema, subKey) {
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
	    var arrayIndexKey = /([^.]*)\[arrayIndex\]/.exec(resolve);
	    var re = new RegExp(arrayIndexKey[1] + '\\[(\\d+)\\]');
	    var index = re.exec(key);
	    return resolve.replace(new RegExp(arrayIndexKey[0].replace(/(\[|\])/g, '\\$1'), 'g'), index[0]);
	  }
	
	  function getArrayIndex(key) {
	    if (_lodash2.default.isObject(key)) {
	      return _lodash2.default.find(key.key, function (key) {
	        return _lodash2.default.isNumber(key);
	      });
	    } else {
	      return (/\[(\d+)\]/.exec(key)[1]
	      );
	    }
	  }
	
	  function setArrayIndex(key, index, asArray) {
	    var service = this;
	    var keyCopy;
	    if (_lodash2.default.isString(key)) {
	      keyCopy = _objectpath2.default.parse(key);
	    } else {
	      keyCopy = _lodash2.default.clone(key);
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
	    _lodash2.default.each(service.events, function (listener) {
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

	module.exports = require("lodash");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("objectpath");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZTE4OTFiZTI2NmYyMzM2MGI5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvX2NuLWZsZXgtZm9ybS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXR5cGVzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NuLWZsZXgtZm9ybS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdHBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbi1mbGV4LWZvcm0taGVhZGVyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYW5ndWxhciIsIm1vZHVsZSIsInByb3ZpZGVyIiwiY29uZmlnIiwicnVuIiwiZmFjdG9yeSIsImNvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJuYW1lIiwiY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyIiwiY25GbGV4Rm9ybUNvbmZpZyIsIiRpbmplY3QiLCJpZ25vcmVQYXJhbXMiLCJhZGRJZ25vcmVQYXJhbSIsIiRnZXQiLCJwYXJhbSIsInB1c2giLCIkc3RhdGVQYXJhbXMiLCJnZXRTdGF0ZVBhcmFtcyIsIl8iLCJjaGFpbiIsIm9taXQiLCJ2IiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJ2YWx1ZSIsImNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyIiwiZmllbGRUeXBlUmVnaXN0ZXIiLCJjb25kaXRpb24iLCJmaWVsZCIsInR5cGUiLCJpbmNsdWRlcyIsInRpdGxlTWFwIiwidGl0bGVNYXBSZXNvbHZlIiwidGl0bGVNYXBRdWVyeSIsInNjaGVtYSIsImZvcm1hdCIsInJlZ2lzdGVyRmllbGRUeXBlIiwiY25GbGV4Rm9ybVR5cGVzIiwiZmllbGRUeXBlIiwidW5zaGlmdCIsImdldEZpZWxkVHlwZSIsImkiLCJsIiwibGVuZ3RoIiwiY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIiwiJHN0YXRlUHJvdmlkZXIiLCJhZGRTdGF0ZXMiLCJwZXJtaXNzaW9ucyIsInNoYXJlZCIsImNvbnRyb2xsZXJBcyIsInN0YXRlIiwidXJsIiwiY25GbGV4Rm9ybVJvdXRlcyIsInRlbXBsYXRlVXJsIiwic2NoZW1hRm9ybUNvbmZpZyIsImNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIiLCJ0djQiLCJhZGRGb3JtYXQiLCJpc1N0cmluZyIsImRhdGEiLCJ0ZXN0IiwiZXh0ZW5zaW9ucyIsImVhY2giLCJleHRlbnNpb24iLCJyZWdpc3RlckZpZWxkIiwiYWRkVGVtcGxhdGVzIiwiJHRlbXBsYXRlQ2FjaGUiLCJwdXQiLCJzaGFyZWRBdXRvY29tcGxldGVUcGwiLCJmaWVsZFR5cGVIYW5kbGVycyIsImZpZWxkUHJvcEhhbmRsZXJzIiwicHJvcCIsImhhbmRsZXIiLCJzZXJ2aWNlIiwicHJvY2Vzc1NlbGVjdERpc3BsYXkiLCJwcm9jZXNzUmVzb2x2ZSIsInByb2Nlc3NGaWVsZFdhdGNoIiwicHJvY2Vzc0ZpZWxkVHlwZSIsInByb2Nlc3NDb25kaXRpb25hbCIsInByb2Nlc3NEZWZhdWx0IiwiZGVmYXVsdCIsInJlZ2lzdGVySGFuZGxlciIsInVwZGF0ZVNjaGVtYSIsInNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIiLCJDTkZsZXhGb3JtU2VydmljZSIsImFkZE1hcHBpbmciLCJjcmVhdGVEaXJlY3RpdmUiLCJBcGkiLCIkcGFyc2UiLCJzZlBhdGgiLCIkaW50ZXJwb2xhdGUiLCIkcm9vdFNjb3BlIiwiJHRpbWVvdXQiLCJjblV0aWwiLCJzZXJ2aWNlcyIsInByb3RvdHlwZSIsImNvbXBpbGUiLCJhZGRBcnJheUNvcHkiLCJhZGRUb0RhdGFDYWNoZSIsImFkZFRvRm9ybUNhY2hlIiwiYnJvYWRjYXN0RXJyb3JzIiwiYnVpbGRFcnJvciIsImNsZWFudXAiLCJkZXJlZ2lzdGVySGFuZGxlcnMiLCJkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyIsImdldEFycmF5Q29waWVzIiwiZ2V0QXJyYXlDb3BpZXNGb3IiLCJnZXRBcnJheVNjb3BlcyIsImdldEZyb21EYXRhQ2FjaGUiLCJnZXRGcm9tRm9ybUNhY2hlIiwiZ2V0S2V5IiwiZ2V0U2NoZW1hIiwiaGFuZGxlUmVzb2x2ZSIsImluaXRBcnJheUNvcHlXYXRjaCIsImluaXRNb2RlbFdhdGNoIiwiaW5pdFNjaGVtYVBhcmFtcyIsImlzQ29tcGlsZWQiLCJvbk1vZGVsV2F0Y2giLCJwYXJzZUNvbmRpdGlvbiIsInBhcnNlRXhwcmVzc2lvbiIsInByb2Nlc3NBcnJheSIsInByb2Nlc3NEaXNwbGF5IiwicHJvY2Vzc0ZpZWxkIiwicHJvY2Vzc0ZpZWxkc2V0IiwicHJvY2Vzc0NvbXBvbmVudCIsInByb2Nlc3NDdXJyZW5jeSIsInByb2Nlc3NQZXJjZW50YWdlIiwicHJvY2Vzc0RhdGUiLCJwcm9jZXNzSGVscCIsInByb2Nlc3NSYWRpb3MiLCJwcm9jZXNzUmFkaW9idXR0b25zIiwicHJvY2Vzc1JldXNhYmxlIiwicHJvY2Vzc1NjaGVtYSIsInByb2Nlc3NTZWN0aW9uIiwicHJvY2Vzc1NlbGVjdCIsInByb2Nlc3NUYWJsZSIsInByb2Nlc3NUZW1wbGF0ZSIsInByb2Nlc3NUb2dnbGUiLCJwcm9jZXNzVXBkYXRlZFNjaGVtYSIsInByb2Nlc3NNZWRpYVVwbG9hZCIsInByb2Nlc3NDc3ZVcGxvYWQiLCJyZWdpc3RlckFycmF5SGFuZGxlcnMiLCJyZWdpc3RlclJlc29sdmUiLCJyZXByb2Nlc3NGaWVsZCIsInNldEFycmF5SW5kZXgiLCJzZXR1cENvbmZpZyIsInNldHVwQXJyYXlTZWxlY3REaXNwbGF5Iiwic2V0dXBTZWxlY3REaXNwbGF5Iiwic2V0dXBTY2hlbWFSZWZyZXNoIiwiQ05GbGV4Rm9ybUNvbnN0cnVjdG9yIiwibW9kZWwiLCJDTkZsZXhGb3JtIiwiZGVidWciLCJ3aW5kb3ciLCJhcnJheUNvcGllcyIsImFycmF5TGlzdGVuZXJzIiwiZGF0YUNhY2hlIiwiZGVmYXVsdHMiLCJlcnJvcnMiLCJldmVudHMiLCJmb3JtQ2FjaGUiLCJsaXN0ZW5lcnMiLCJyZXNvbHZlUmVnaXN0ZXIiLCJ1cGRhdGVzIiwicGFyYW1zIiwiZXh0ZW5kIiwiZm9ybXMiLCJmb3JtIiwiYmluZCIsInNldFZhbHVlIiwiY29tcGlsZWQiLCJmb3JtQ3RybCIsImdldFNjaGVtYUZvcm0iLCJnZXRTY2hlbWFUeXBlIiwiaXNBcnJheSIsImZpcnN0IiwiY3VyRGVmYXVsdCIsImtleSIsIm1vZGVsVmFsdWUiLCJnZXQiLCJpc1RydWx5RW1wdHkiLCJoYXMiLCJlcXVhbHMiLCJzZXQiLCJjb3B5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJmaWVsZHNldCIsIml0ZW1zIiwiZm9yRWFjaCIsImNvbGxhcHNpYmxlIiwidG9nZ2xlQ29sbGFwc2UiLCJjb2xsYXBzZWQiLCJyZW5kZXIiLCJpc0Z1bmN0aW9uIiwiY2FsbCIsIl9vZ0tleXMiLCJ3aXRob3V0Iiwia2V5cyIsImRlc2NyaXB0aW9uIiwicmVhZG9ubHkiLCJzaG93Q2xlYXJBbGwiLCJpbmRleCIsImZpbmQiLCJyZWplY3QiLCIkYnJvYWRjYXN0IiwiZXJyb3IiLCJpc0VtcHR5IiwibmdNb2RlbE9wdGlvbnMiLCJhbGxvd0ludmFsaWQiLCJyZWR1Y2UiLCJ0b3RhbCIsIm5leHQiLCJkZXB0aCIsInBhcnNlIiwicHJvcGVydGllcyIsInNoaWZ0IiwicmVzb2x2ZSIsImRhdGFQcm9wIiwiZmllbGRQcm9wIiwicmVzb2x2ZVR5cGUiLCJtYXRjaCIsImV4cCIsImluZGV4T2YiLCJyZXBsYWNlIiwiY3Vyc29yIiwibG9hZE1vcmUiLCJyZWZyZXNoU2NoZW1hIiwiZmllbGRLZXkiLCJyZWdpc3RlciIsImNvbmRpdGlvbmFscyIsInZhbCIsInByZXYiLCJtYXAiLCJwYXRoIiwid2F0Y2giLCJyZXNvbHV0aW9uIiwiYWRqdXN0bWVudCIsImN1ciIsImRhdGUiLCJ0cmltIiwibWF0aCIsIm9wZXJhdG9yIiwiYWRqdXN0ZXIiLCJ0cmlnZ2VyIiwiY3VyQ29uZGl0aW9uIiwicmVwbGFjZUFycmF5SW5kZXgiLCJ1cGRhdGVQYXRoIiwiZnJvbVBhdGgiLCJ1cGRhdGUiLCJmcm9tIiwibW9tZW50IiwiYWRkIiwidG9EYXRlIiwicmVzdWx0IiwicCIsImZsb29yIiwiY2VpbCIsInJvdW5kIiwiaW5pdGlhbGl6ZSIsInN0YXJ0c1dpdGgiLCJmbiIsImxpc3QiLCJwcmVkaWNhdGVQYXJhbXMiLCJwcmVkaWNhdGVCb2R5IiwiZ2VuZXJhdGVQcmVkaWNhdGUiLCJib2R5IiwiYXJncyIsInNwbGl0IiwiYWNjIiwicnVuSGFuZGxlciIsImlzT2JqZWN0IiwiYXJyTWF0Y2giLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVycyIsImFycktleSIsIm9uQXJyYXkiLCJyZW9yZGVyIiwibGFzdEtleSIsImFyclZhbCIsIml0ZW0iLCJ3YXRjaGluZyIsIm1vZGVsV2F0Y2giLCIkd2F0Y2giLCJmaXJzdFVwZGF0ZSIsImNsZWFuTW9kZWwiLCJwcmV2UGFyYW1zIiwibGlzdGVuZXIiLCJpc0luaXRBcnJheSIsImlkIiwiJG9uIiwiZXZlbnQiLCJzY29wZSIsInBhcnNlSW50IiwiJGVtaXQiLCJjb3BpZXMiLCJzcGxpY2UiLCJsaW5rIiwicGx1Y2siLCJrZXlTdGFydCIsImZpbHRlciIsIm1hdGNoTmVzdGVkRXhwcmVzc2lvbiIsInBhcnNlRmxvYXQiLCJwcmVQYXJzZWQiLCJuZXN0ZWQiLCJzdGFydCIsImdldEFzc2lnbmFibGUiLCJwcm9ncmVzcyIsIm9iaiIsImZ1bGxQYXRoIiwiY29uY2F0Iiwic2xpY2UiLCJhc3NpZ25hYmxlIiwiYXJyYXkiLCJzb3J0T3B0aW9ucyIsImUiLCJ1aSIsInNlY3Rpb24iLCJjb21wb25lbnQiLCJodG1sQ2xhc3MiLCJjb2xzIiwiY3VycmVuY3lGb3JtYXQiLCJ2aWV3IiwicmFkaW9zIiwiZnVsbFdpZHRoIiwiYnRuQ2xhc3MiLCJkaXZpZGUiLCJtYXhWaWV3IiwiaWNvbkNsYXNzIiwibW9kZWxGb3JtYXR0ZXIiLCJtIiwibXVsdGlwbHkiLCJob3VycyIsIm1pbnV0ZXMiLCJtb2RlbFBhcnNlciIsImQiLCJzdGFydE9mIiwidmlld0Zvcm1hdHRlciIsImRhdGVGb3JtYXQiLCJ2aWV3UGFyc2VyIiwiZ2V0U2VsZWN0VmFsUHJvcCIsInNlbGVjdCIsInZhbHVlUHJvcGVydHkiLCJnZXRBbGxvd2VkU2VsZWN0VmFsdWUiLCJnZXRUaXRsZU1hcCIsInZhbFByb3AiLCJtYXBWYWwiLCJ4IiwidW5kZWZpbmVkIiwib25Jbml0Iiwic2V0dGVyIiwibmV3VmFsIiwicSIsInRpdGxlUXVlcnkiLCJtaW5Mb29rdXAiLCJpc0RlZmluZWQiLCJvbkFkZCIsImRldGFpbGVkTGlzdCIsInNlbGVjdGlvblN0eWxlIiwibWF4SXRlbXMiLCJ2YWxpZCIsImRpc3BsYXlGb3JtYXQiLCJpdGVtRm9ybWF0dGVyIiwiJHNldERpcnR5IiwidG9nZ2xlIiwiaGVscCIsImRpc3BsYXkiLCJnZXREaXNwbGF5IiwidHBsIiwicGFyc2VTY29wZSIsInByb2Nlc3NvciIsImFycmF5SW5kZXgiLCJ0YWJsZSIsInJvdyIsImNvbHVtbnMiLCJzZWxlY3REaXNwbGF5Iiwic2VsZWN0RmllbGQiLCJnZXRBcnJheUluZGV4Iiwic2VsZWN0S2V5Iiwic3BsaXRLZXkiLCJpbmRleGVkU2VsZWN0S2V5Iiwic2VsZWN0VmFsdWUiLCJmb3JtQ29waWVzIiwiZWxlbSIsImluZGV4ZWRLZXkiLCJzcGxpdEluZGV4ZWRLZXkiLCJzZWxlY3RNb2RlbCIsIml0ZW1WYWx1ZSIsImNvdW50Iiwia2V5TWFwIiwib25jZSIsInJlc2V0Q291bnQiLCJyZWZyZXNoIiwiZGVib3VuY2UiLCJkaWZmIiwidGhlbiIsInJlZnJlc2hEYXRhIiwicmVzZXQiLCJyZWdpc3RlcnMiLCJyZXByb2Nlc3NTY2hlbWEiLCJjYWNoZWQiLCJjdXJyZW50IiwiaXNDaGlsZCIsInJlZHJhdyIsInN1YktleSIsIm1lc3NhZ2UiLCJhcnJheUluZGV4S2V5IiwiZXhlYyIsInJlIiwiUmVnRXhwIiwiaXNOdW1iZXIiLCJhc0FycmF5Iiwia2V5Q29weSIsImNsb25lIiwiaW5kZXhPZkluZGV4IiwibW9kYWxNYXAiLCJwcm9taXNlTWFwIiwiZ2V0UHJvbWlzZXMiLCJwcm9taXNlIiwiZ2V0UHJvbWlzZSIsIiRxIiwicHJvbWlzZXMiLCJkZWZlciIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciIsInBhcmVudCIsImNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UiLCJkZWYiLCJtb2RhbCIsIm1vZGFsSWQiLCJnZXRNYXBwaW5nIiwicmVzb2x2ZU1hcHBpbmciLCJvcHRpb25zIiwiZGVzdHJveVN0cmF0ZWd5IiwiRmxleEZvcm1Nb2RhbExvYWRlciIsIkZsZXhGb3JtTW9kYWwiLCIkc3RhdGUiLCJ2bSIsImFjdGl2YXRlIiwib3BlbiIsIm9uRGlzbWlzcyIsImZpbmFsbHkiLCJnb0JhY2siLCJjYXRjaCIsInJlc3RQYXJhbXMiLCJkaXNtaXNzRXZlbnQiLCJkaXNtaXNzTW9kYWwiLCJ0cmFuc2l0aW9uIiwiZ28iLCJkaXNtaXNzIiwiJHVpYk1vZGFsIiwiY25GbGV4Rm9ybSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJmb3JtSW5kZXgiLCJmb3JtTmFtZSIsImRlbGF5Rm9ybSIsImNsZWFudXBFdmVudCIsIkZsZXhGb3JtIiwiYmluZFRvQ29udHJvbGxlciIsImNuRmxleEZvcm1TZXJ2aWNlIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwicHJvY2VzcyIsInNob3dGb3JtIiwic2VhcmNoIiwiY25GbGV4Rm9ybUhlYWRlciIsInN1Ym1pdCIsImxvYWRPZmZzY3JlZW4iLCJGbGV4Rm9ybUhlYWRlciIsInVwZGF0ZURhdGEiLCJpc0Rpc2FibGVkIiwiYnRuQ29uZmlnIiwiZmZWYWxpZGF0ZSIsInJlcXVpcmUiLCJhdHRycyIsIm5nTW9kZWwiLCJyZXF1aXJlZCIsIiR2aWV3VmFsdWUiLCIkc2V0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVFDLEdBQVI7O21CQUVlQyxRQUNaQyxNQURZLENBQ0wsY0FESyxFQUNXLENBQ3RCLFdBRHNCLEVBRXRCLFlBRnNCLEVBR3RCLDZCQUhzQixFQUl0QixhQUpzQjtBQUt0QjtBQUNBLFVBTnNCLENBRFgsRUFTWkMsUUFUWSxDQVNILGtCQVRHLDhCQVVaQSxRQVZZLENBVUgsaUJBVkcsNkJBV1pBLFFBWFksQ0FXSCxrQkFYRyx3Q0FZWkMsTUFaWSwrQkFhWkEsTUFiWSx5Q0FjWkMsR0FkWSxxQ0FlWkYsUUFmWSxDQWVILG1CQWZHLHdCQWdCWkEsUUFoQlksQ0FnQkgsOEJBaEJHLG1DQWlCWkcsT0FqQlksQ0FpQkosZUFqQkkseUNBa0JaQyxVQWxCWSxDQWtCRCxxQkFsQkMsK0NBbUJaQyxTQW5CWSxDQW1CRixZQW5CRSx3QkFvQlpBLFNBcEJZLENBb0JGLGtCQXBCRSw4QkFxQlpBLFNBckJZLENBcUJGLFlBckJFLGdDQXNCWkMsSTs7Ozs7Ozs7Ozs7QUNuQ0gsVUFBU0Msd0JBQVQsR0FBb0M7O0FBRWxDQyxvQkFBaUJDLE9BQWpCLEdBQTJCLENBQUMsY0FBRCxDQUEzQjs7QUFFQSxPQUFJQyxlQUFlLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsU0FBbEIsRUFBNkIsT0FBN0IsRUFBc0MsU0FBdEMsQ0FBbkI7O0FBRUEsVUFBTztBQUNMQyxxQkFBZ0JBLGNBRFg7QUFFTEMsV0FBTUo7QUFGRCxJQUFQOztBQUtBOztBQUVBLFlBQVNHLGNBQVQsQ0FBd0JFLEtBQXhCLEVBQStCO0FBQzdCSCxrQkFBYUksSUFBYixDQUFrQkQsS0FBbEI7QUFDRDs7QUFFRCxZQUFTTCxnQkFBVCxDQUEwQk8sWUFBMUIsRUFBd0M7QUFDdEMsWUFBTztBQUNMQyxxQ0FESztBQUVMTjtBQUZLLE1BQVA7O0FBS0E7O0FBRUEsY0FBU00sY0FBVCxHQUEwQjtBQUN4QixjQUFPQyxFQUNGQyxLQURFLENBQ0lILFlBREosRUFFRkksSUFGRSxDQUVHVCxZQUZILEVBR0ZTLElBSEUsQ0FHRyxVQUFTQyxDQUFULEVBQVk7QUFDaEIsZ0JBQU9ILEVBQUVJLFdBQUYsQ0FBY0QsQ0FBZCxLQUFvQkgsRUFBRUssTUFBRixDQUFTRixDQUFULENBQTNCO0FBQ0QsUUFMRSxFQU1GRyxLQU5FLEVBQVA7QUFPRDtBQUNGO0FBRUY7O0FBRUQ7QUFDSTtBQUNBOzttQkFFV2hCLHdCOzs7Ozs7Ozs7OztBQzFDZixVQUFTaUIsdUJBQVQsR0FBbUM7O0FBRWpDLE9BQUlDLG9CQUFvQixDQUFDO0FBQ3ZCQyxnQkFBVztBQUFBLGNBQVNDLE1BQU1DLElBQU4sS0FBZSxRQUF4QjtBQUFBLE1BRFk7QUFFdkJBLFdBQU07QUFGaUIsSUFBRCxFQUdyQjtBQUNERixnQkFBVztBQUFBLGNBQVNDLE1BQU1DLElBQU4sQ0FBV0MsUUFBWCxDQUFvQixRQUFwQixDQUFUO0FBQUEsTUFEVjtBQUVERCxXQUFNO0FBRkwsSUFIcUIsRUFNckI7QUFDREYsZ0JBQVc7QUFBQSxjQUFTQyxNQUFNQyxJQUFOLENBQVdDLFFBQVgsQ0FBb0IsY0FBcEIsQ0FBVDtBQUFBLE1BRFY7QUFFREQsV0FBTTtBQUZMLElBTnFCLEVBU3JCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixDQUFXQyxRQUFYLENBQW9CLGNBQXBCLEtBQXVDRixNQUFNRyxRQUE3QyxJQUF5REgsTUFBTUksZUFBL0QsSUFBa0ZKLE1BQU1LLGFBQWpHO0FBQUEsTUFEVjtBQUVESixXQUFNO0FBRkwsSUFUcUIsRUFZckI7QUFDREYsZ0JBQVc7QUFBQSxjQUFTQyxNQUFNQyxJQUFOLEtBQWUsbUJBQWYsSUFBc0NELE1BQU1DLElBQU4sS0FBZSxnQkFBckQsSUFBeUVELE1BQU1DLElBQU4sS0FBZSxjQUFqRztBQUFBLE1BRFY7QUFFREEsV0FBTTtBQUZMLElBWnFCLEVBZXJCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixLQUFlLE1BQXhCO0FBQUEsTUFEVjtBQUVEQSxXQUFNO0FBRkwsSUFmcUIsRUFrQnJCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixDQUFXQyxRQUFYLENBQW9CLFNBQXBCLENBQVQ7QUFBQSxNQURWO0FBRURELFdBQU07QUFGTCxJQWxCcUIsRUFxQnJCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTU0sTUFBTixJQUFnQk4sTUFBTU0sTUFBTixDQUFhQyxNQUE3QixJQUF1Q1AsTUFBTU0sTUFBTixDQUFhQyxNQUFiLENBQW9CTCxRQUFwQixDQUE2QixVQUE3QixDQUFoRDtBQUFBLE1BRFY7QUFFREQsV0FBTTtBQUZMLElBckJxQixFQXdCckI7QUFDREYsZ0JBQVc7QUFBQSxjQUFTQyxNQUFNTSxNQUFOLElBQWdCTixNQUFNTSxNQUFOLENBQWFDLE1BQWIsS0FBd0IsWUFBakQ7QUFBQSxNQURWO0FBRUROLFdBQU07QUFGTCxJQXhCcUIsRUEyQnJCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixLQUFlLFFBQWYsSUFBMkJELE1BQU1DLElBQU4sS0FBZSxTQUFuRDtBQUFBLE1BRFY7QUFFREEsV0FBTTtBQUZMLElBM0JxQixFQThCckI7QUFDREYsZ0JBQVc7QUFBQSxjQUFTQyxNQUFNQyxJQUFOLEtBQWUsYUFBeEI7QUFBQSxNQURWO0FBRURBLFdBQU07QUFGTCxJQTlCcUIsRUFpQ3JCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixLQUFlLFdBQXhCO0FBQUEsTUFEVjtBQUVEQSxXQUFNO0FBRkwsSUFqQ3FCLEVBb0NyQjtBQUNERixnQkFBVztBQUFBLGNBQVNDLE1BQU1DLElBQU4sS0FBZSxVQUF4QjtBQUFBLE1BRFY7QUFFREEsV0FBTTtBQUZMLElBcENxQixFQXVDckI7QUFDREYsZ0JBQVc7QUFBQSxjQUFTQyxNQUFNQyxJQUFOLEtBQWUsT0FBeEI7QUFBQSxNQURWO0FBRURBLFdBQU07QUFGTCxJQXZDcUIsRUEwQ3JCO0FBQ0RGLGdCQUFXO0FBQUEsY0FBU0MsTUFBTUMsSUFBTixLQUFlLE9BQXhCO0FBQUEsTUFEVjtBQUVEQSxXQUFNO0FBRkwsSUExQ3FCLENBQXhCOztBQStDQSxVQUFPO0FBQ0xPLHdCQUFtQkEsaUJBRGQ7QUFFTHZCLFdBQU13QjtBQUZELElBQVA7O0FBS0E7O0FBRUEsWUFBU0QsaUJBQVQsQ0FBMkJFLFNBQTNCLEVBQXNDO0FBQ3BDWix1QkFBa0JhLE9BQWxCLENBQTBCRCxTQUExQjtBQUNEOztBQUVELFlBQVNELGVBQVQsR0FBMkI7QUFDekIsWUFBTztBQUNMWCwwQkFBbUJBLGlCQURkO0FBRUxjLHFCQUFjQTtBQUZULE1BQVA7O0FBS0E7O0FBRUEsY0FBU0EsWUFBVCxDQUFzQlosS0FBdEIsRUFBNkI7QUFDM0IsWUFBSSxJQUFJYSxJQUFJLENBQVIsRUFBV0MsSUFBSWhCLGtCQUFrQmlCLE1BQXJDLEVBQTZDRixJQUFJQyxDQUFqRCxFQUFvREQsR0FBcEQsRUFBeUQ7QUFDdkQsYUFBR2Ysa0JBQWtCZSxDQUFsQixFQUFxQmQsU0FBckIsQ0FBK0JDLEtBQS9CLENBQUgsRUFBMEM7QUFDeEMsa0JBQU9GLGtCQUFrQmUsQ0FBbEIsRUFBcUJaLElBQTVCO0FBQ0Q7QUFDRjtBQUNELGNBQU9ELE1BQU1DLElBQU4sSUFBY0QsTUFBTU0sTUFBTixJQUFnQk4sTUFBTU0sTUFBTixDQUFhTCxJQUFsRDtBQUNEO0FBQ0Y7QUFFRjs7QUFFRDtBQUNJO0FBQ0E7O21CQUVXSix1Qjs7Ozs7Ozs7Ozs7Ozs7QUNwRmZtQiwwQkFBeUJsQyxPQUF6QixHQUFtQyxDQUFDLGdCQUFELENBQW5DOztBQUVBLFVBQVNrQyx3QkFBVCxDQUFrQ0MsY0FBbEMsRUFBa0Q7QUFDaEQsT0FBSTVDLFdBQVc7QUFDYjZDLGdCQUFXQSxTQURFO0FBRWJqQztBQUZhLElBQWY7O0FBS0EsVUFBT1osUUFBUDs7QUFFQTs7QUFFQSxZQUFTWSxJQUFULEdBQWdCO0FBQ2Q7QUFDRDs7QUFFRCxZQUFTaUMsU0FBVCxPQUEwQztBQUFBLFNBQXJCQyxXQUFxQixRQUFyQkEsV0FBcUI7QUFBQSxTQUFSeEMsSUFBUSxRQUFSQSxJQUFROztBQUN4QyxTQUFNeUMsU0FBUztBQUNiM0MsbUJBQVkscUJBREM7QUFFYjRDLHFCQUFjLElBRkQ7QUFHYkY7QUFIYSxNQUFmO0FBS0FGLG9CQUNLSyxLQURMLENBQ2MzQyxJQURkO0FBRU00QyxZQUFLO0FBRlgsUUFHU0gsTUFIVCxHQUtLRSxLQUxMLENBS2MzQyxJQUxkO0FBTU00QyxZQUFLO0FBTlgsUUFPU0gsTUFQVDtBQVNEO0FBQ0Y7O0FBRURJLGtCQUFpQjFDLE9BQWpCLEdBQTJCLENBQUMsZ0JBQUQsQ0FBM0I7QUFDQSxVQUFTMEMsZ0JBQVQsQ0FBMEJQLGNBQTFCLEVBQTBDOztBQUV4Q0Esa0JBQ0tLLEtBREwsQ0FDVyxtQkFEWCxFQUNnQztBQUMxQkMsVUFBSyxvQkFEcUI7QUFFMUI5QyxpQkFBWSxpQkFGYztBQUcxQjRDLG1CQUFjLElBSFk7QUFJMUJJLGtCQUFhO0FBSmEsSUFEaEM7QUFPRDs7QUFFRDtBQUNJO0FBQ0E7QUFDQTs7U0FFS0QsZ0IsR0FBQUEsZ0I7U0FBa0JSLHdCLEdBQUFBLHdCOzs7Ozs7Ozs7OztBQ25EM0I7QUFDSTtBQUNBOztBQUVKVSxrQkFBaUI1QyxPQUFqQixHQUEyQixDQUFDLDJCQUFELENBQTNCOztBQUVBLFVBQVM0QyxnQkFBVCxDQUEwQkMseUJBQTFCLEVBQXFEO0FBQ25EQyxPQUFJQyxTQUFKLENBQWM7QUFDWixZQUFPO0FBQUEsY0FBUXZDLEVBQUV3QyxRQUFGLENBQVdDLElBQVgsS0FBb0IsQ0FBQyx1QkFBdUJDLElBQXZCLENBQTRCRCxJQUE1QixDQUFyQixJQUEwRCxhQUFsRTtBQUFBO0FBREssSUFBZDs7QUFJQSxPQUFJRSxhQUFhLENBQ2YsYUFEZSxFQUVmLFdBRmUsRUFHZixtQkFIZSxFQUlmLGlCQUplLEVBS2YsMEJBTGUsRUFNZixhQU5lLEVBT2YsV0FQZSxFQVFmLGlCQVJlLEVBU2YsZUFUZSxFQVVmLFlBVmUsRUFXZixnQkFYZSxFQVlmLGNBWmUsRUFhZixhQWJlLEVBY2YsVUFkZSxDQUFqQjs7QUFpQkEzQyxLQUFFNEMsSUFBRixDQUFPRCxVQUFQLEVBQW1CLFVBQVNFLFNBQVQsRUFBb0I7QUFDckNSLCtCQUEwQlMsYUFBMUIsQ0FBd0M7QUFDdENuQyxhQUFNa0MsU0FEZ0M7QUFFdENWLDJEQUFrRFUsU0FBbEQ7QUFGc0MsTUFBeEM7QUFJRCxJQUxEO0FBTUQ7O0FBRURFLGNBQWF2RCxPQUFiLEdBQXVCLENBQUMsZ0JBQUQsQ0FBdkI7O0FBRUEsVUFBU3VELFlBQVQsQ0FBc0JDLGNBQXRCLEVBQXNDO0FBQ3BDQSxrQkFBZUMsR0FBZixDQUNJLGtEQURKOztBQTBCQUQsa0JBQWVDLEdBQWYsQ0FDSSwwREFESjs7QUFpQ0EsT0FBSUMsMnhEQUFKOztBQXdDQUYsa0JBQWVDLEdBQWYsQ0FDSSx3REFESiw4U0FRUUMscUJBUlI7O0FBYUFGLGtCQUFlQyxHQUFmLENBQ0ksaUVBREosMDhCQXNCUUMscUJBdEJSOztBQTJCQUYsa0JBQWVDLEdBQWYsQ0FDSSxvREFESjs7QUFnQ0FELGtCQUFlQyxHQUFmLENBQ0ksa0RBREo7O0FBMkJBRCxrQkFBZUMsR0FBZixDQUNJLHdEQURKOztBQTJCQUQsa0JBQWVDLEdBQWYsQ0FDSSxzREFESjs7QUErQkFELGtCQUFlQyxHQUFmLENBQ0ksbURBREo7O0FBYUFELGtCQUFlQyxHQUFmLENBQ0ksb0RBREo7O0FBb0JBRCxrQkFBZUMsR0FBZixDQUNJLHVEQURKOztBQXdCQUQsa0JBQWVDLEdBQWYsQ0FDSSxxREFESjs7QUFvQkFELGtCQUFlQyxHQUFmLENBQ0ksb0RBREo7O0FBK0JBRCxrQkFBZUMsR0FBZixDQUNJLGlEQURKO0FBbUJEOztTQUVRYixnQixHQUFBQSxnQjtTQUFrQlcsWSxHQUFBQSxZOzs7Ozs7Ozs7Ozs7OztBQ3hhM0I7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNSSxvQkFBb0I7QUFDeEIsZUFBWSxpQkFEWTtBQUV4QixnQkFBYSxlQUZXO0FBR3hCLHNCQUFtQixxQkFISztBQUl4QixzQkFBbUIsZUFKSztBQUt4Qix3QkFBcUIsYUFMRztBQU14QixXQUFRLGFBTmdCO0FBT3hCLGlCQUFjLGdCQVBVO0FBUXhCLGtCQUFlLGlCQVJTO0FBU3hCLG9CQUFpQixtQkFUTztBQVV4QixxQkFBa0Isb0JBVk07QUFXeEIsbUJBQWdCLGtCQVhRO0FBWXhCLGtCQUFlLGlCQVpTO0FBYXhCLGdCQUFhLGVBYlc7QUFjeEIsZUFBWSxjQWRZO0FBZXhCLGdCQUFhLGtCQWZXO0FBZ0J4QixjQUFXLGdCQWhCYTtBQWlCeEIsZUFBWSxnQkFqQlk7QUFrQnhCLFlBQVM7QUFsQmUsRUFBMUI7O0FBcUJBLEtBQU1DLG9CQUFvQixDQUFDO0FBQ3pCQyxTQUFNLGVBRG1CO0FBRXpCQyxZQUFTLGlCQUFDNUMsS0FBRCxFQUFRNkMsT0FBUjtBQUFBLFlBQW9CQSxRQUFRQyxvQkFBUixDQUE2QjlDLEtBQTdCLENBQXBCO0FBQUE7QUFGZ0IsRUFBRCxFQUd2QjtBQUNEMkMsU0FBTSxTQURMO0FBRURDLFlBQVMsaUJBQUM1QyxLQUFELEVBQVE2QyxPQUFSO0FBQUEsWUFBb0JBLFFBQVFFLGNBQVIsQ0FBdUIvQyxLQUF2QixDQUFwQjtBQUFBO0FBRlIsRUFIdUIsRUFNdkI7QUFDRDJDLFNBQU0sT0FETDtBQUVEQyxZQUFTLGlCQUFDNUMsS0FBRCxFQUFRNkMsT0FBUjtBQUFBLFlBQW9CQSxRQUFRRyxpQkFBUixDQUEwQmhELEtBQTFCLENBQXBCO0FBQUE7QUFGUixFQU51QixFQVN2QjtBQUNEMkMsU0FBTSxNQURMO0FBRURDLFlBQVMsaUJBQUM1QyxLQUFELEVBQVE2QyxPQUFSO0FBQUEsWUFBb0JBLFFBQVFJLGdCQUFSLENBQXlCakQsS0FBekIsQ0FBcEI7QUFBQTtBQUZSLEVBVHVCLEVBWXZCO0FBQ0QyQyxTQUFNLGNBREw7QUFFREMsWUFBUyxpQkFBQzVDLEtBQUQsRUFBUTZDLE9BQVI7QUFBQSxZQUFvQkEsUUFBUUssa0JBQVIsQ0FBMkJsRCxLQUEzQixDQUFwQjtBQUFBO0FBRlIsRUFadUIsRUFldkI7QUFDRDJDLFNBQU0sU0FETDtBQUVEQyxZQUFTLGlCQUFDNUMsS0FBRCxFQUFRNkMsT0FBUjtBQUFBLFlBQW9CQSxRQUFRTSxjQUFSLENBQXVCbkQsS0FBdkIsQ0FBcEI7QUFBQTtBQUZSLEVBZnVCLEVBa0J2QjtBQUNEMkMsU0FBTSxRQURMO0FBRURDLFlBQVMsaUJBQUM1QyxLQUFELEVBQVE2QyxPQUFSO0FBQUEsWUFDUCxpQkFBRW5ELFdBQUYsQ0FBY00sTUFBTW9ELE9BQXBCLEtBQWdDLENBQUMsaUJBQUUxRCxXQUFGLENBQWNNLE1BQU1NLE1BQU4sQ0FBYThDLE9BQTNCLENBQWpDLElBQXdFUCxRQUFRTSxjQUFSLENBQXVCbkQsS0FBdkIsQ0FEakU7QUFBQTtBQUZSLEVBbEJ1QixFQXNCdkI7QUFDRDJDLFNBQU0sY0FETDtBQUVEQyxZQUFTLGlCQUFDNUMsS0FBRCxFQUFRNkMsT0FBUjtBQUFBLFlBQW9CQSxRQUFRUSxlQUFSLENBQXdCckQsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUNBLE1BQU1zRCxZQUEzQyxDQUFwQjtBQUFBO0FBRlIsRUF0QnVCLENBQTFCOztBQTJCQTNCLDJCQUEwQjdDLE9BQTFCLEdBQW9DLENBQ2xDLDhCQURrQyxFQUVsQyx5QkFGa0MsQ0FBcEM7O0FBS0EsVUFBUzZDLHlCQUFULENBQW1DNEIsNEJBQW5DLEVBQ21DMUQsdUJBRG5DLEVBQzREO0FBQzFELFVBQU87QUFDTHVDLGlDQURLO0FBRUxuRCxXQUFNdUU7QUFGRCxJQUFQOztBQUtBOztBQUVBLFlBQVNwQixhQUFULENBQXVCMUIsU0FBdkIsRUFBa0M7QUFDaEMsU0FBR0EsVUFBVVgsU0FBYixFQUF3QjtBQUN0QkYsK0JBQXdCVyxpQkFBeEIsQ0FBMEM7QUFDeENULG9CQUFXVyxVQUFVWCxTQURtQjtBQUV4Q0UsZUFBTVMsVUFBVVQ7QUFGd0IsUUFBMUM7QUFJRDs7QUFFRCxTQUFHUyxVQUFVa0MsT0FBYixFQUFzQjtBQUNwQkgseUJBQWtCL0IsVUFBVVQsSUFBNUIsSUFBb0NTLFVBQVVrQyxPQUE5QztBQUNEOztBQUVELFNBQUdsQyxVQUFVZSxXQUFiLEVBQTBCO0FBQ3hCOEIsb0NBQTZCRSxVQUE3QixDQUNJLG9CQURKLEVBRUkvQyxVQUFVVCxJQUZkLEVBR0lTLFVBQVVlLFdBSGQ7QUFLQThCLG9DQUE2QkcsZUFBN0IsQ0FDSWhELFVBQVVULElBRGQsRUFFSVMsVUFBVWUsV0FGZDtBQUlEO0FBQ0Y7QUFDRjs7QUFFRCtCLG1CQUFrQjFFLE9BQWxCLEdBQTRCLENBQzFCLEtBRDBCLEVBQ25CLFFBRG1CLEVBQ1Qsa0JBRFMsRUFDVyxpQkFEWCxFQUM4QixRQUQ5QixFQUUxQixjQUYwQixFQUVWLFlBRlUsRUFFSSxVQUZKLEVBRWdCLFFBRmhCLEVBRTBCLGNBRjFCLENBQTVCOztBQUtBLFVBQVMwRSxpQkFBVCxDQUEyQkcsR0FBM0IsRUFBZ0NDLE1BQWhDLEVBQXdDL0UsZ0JBQXhDLEVBQTBENEIsZUFBMUQsRUFBMkVvRCxNQUEzRSxFQUMyQkMsWUFEM0IsRUFDeUNDLFVBRHpDLEVBQ3FEQyxRQURyRCxFQUMrREMsTUFEL0QsRUFDdUU3RSxZQUR2RSxFQUNxRjs7QUFFbkYsT0FBSThFLFdBQVcsRUFBZjtBQUNBLE9BQUlDLFlBQVk7QUFDZEMscUJBRGM7QUFFZEMsK0JBRmM7QUFHZEMsbUNBSGM7QUFJZEMsbUNBSmM7QUFLZEMscUNBTGM7QUFNZEMsMkJBTmM7QUFPZEMscUJBUGM7QUFRZEMsMkNBUmM7QUFTZEMscURBVGM7QUFVZEMsbUNBVmM7QUFXZEMseUNBWGM7QUFZZEMsbUNBWmM7QUFhZEMsdUNBYmM7QUFjZEMsdUNBZGM7QUFlZEMsbUJBZmM7QUFnQmRDLHlCQWhCYztBQWlCZEMsaUNBakJjO0FBa0JkQywyQ0FsQmM7QUFtQmRDLG1DQW5CYztBQW9CZEMsdUNBcEJjO0FBcUJkQywyQkFyQmM7QUFzQmRDLCtCQXRCYztBQXVCZEMsbUNBdkJjO0FBd0JkQyxxQ0F4QmM7QUF5QmRDLCtCQXpCYztBQTBCZHpDLG1DQTFCYztBQTJCZDBDLG1DQTNCYztBQTRCZEMsK0JBNUJjO0FBNkJkQyxxQ0E3QmM7QUE4QmQvQyx5Q0E5QmM7QUErQmRnRCx1Q0EvQmM7QUFnQ2Q5QywyQ0FoQ2M7QUFpQ2QrQyxxQ0FqQ2M7QUFrQ2RDLHlDQWxDYztBQW1DZEMsNkJBbkNjO0FBb0NkQyw2QkFwQ2M7QUFxQ2RDLGlDQXJDYztBQXNDZEMsNkNBdENjO0FBdUNkQyxxQ0F2Q2M7QUF3Q2RDLGlDQXhDYztBQXlDZDFELCtDQXpDYztBQTBDZEMsbUNBMUNjO0FBMkNkMEQsbUNBM0NjO0FBNENkQyxpQ0E1Q2M7QUE2Q2RDLCtCQTdDYztBQThDZEMscUNBOUNjO0FBK0NkQyxpQ0EvQ2M7QUFnRGRDLCtDQWhEYztBQWlEZEMsMkNBakRjO0FBa0RkQyx1Q0FsRGM7QUFtRGRDLGlEQW5EYztBQW9EZDVELHFDQXBEYztBQXFEZDZELHFDQXJEYztBQXNEZEMsbUNBdERjO0FBdURkQyxpQ0F2RGM7QUF3RGRDLDZCQXhEYztBQXlEZEMscURBekRjO0FBMERkQywyQ0ExRGM7QUEyRGRDO0FBM0RjLElBQWhCOztBQThEQSxZQUFTQyxxQkFBVCxDQUErQm5ILE1BQS9CLEVBQXVDb0gsS0FBdkMsRUFBOENwSixNQUE5QyxFQUFzRDtBQUNwRCxTQUFJdUUsT0FBSjtBQUNBLFNBQUdxQixTQUFTbkQsTUFBWixFQUFvQjtBQUNsQixZQUFJLElBQUlGLElBQUksQ0FBUixFQUFXQyxJQUFJb0QsU0FBU25ELE1BQTVCLEVBQW9DRixJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsYUFBR3FELFNBQVNyRCxDQUFULEVBQVk2RyxLQUFaLEtBQXNCQSxLQUF6QixFQUFnQztBQUM5QjdFLHFCQUFVcUIsU0FBU3JELENBQVQsQ0FBVjtBQUNBZ0MsbUJBQVF1QixPQUFSLENBQWdCOUQsTUFBaEIsRUFBd0JvSCxLQUF4QixFQUErQnBKLE1BQS9CO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxTQUFHLENBQUN1RSxPQUFKLEVBQWE7QUFDWEEsaUJBQVUsSUFBSThFLFVBQUosQ0FBZXJILE1BQWYsRUFBdUJvSCxLQUF2QixFQUE4QnBKLE1BQTlCLENBQVY7QUFDQTRGLGdCQUFTL0UsSUFBVCxDQUFjMEQsT0FBZDtBQUNEO0FBQ0QsWUFBT0EsV0FBVyxJQUFJOEUsVUFBSixDQUFlckgsTUFBZixFQUF1Qm9ILEtBQXZCLEVBQThCcEosTUFBOUIsQ0FBbEI7QUFDRDs7QUFFRCxZQUFTcUosVUFBVCxDQUFvQnJILE1BQXBCLEVBQTRCb0gsS0FBNUIsRUFBbUNwSixNQUFuQyxFQUEyQzs7QUFFekMsU0FBR2MsYUFBYXdJLEtBQWhCLEVBQXVCO0FBQ3JCQyxjQUFPM0QsUUFBUCxHQUFrQkEsUUFBbEI7QUFDRDs7QUFFRCxVQUFLNEQsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFVBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxVQUFLWixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLYSxPQUFMLEdBQWUsQ0FBZjs7QUFFQSxVQUFLQyxNQUFMLEdBQWMzSixpQkFBaUJRLGNBQWpCLEVBQWQ7O0FBRUEsVUFBS0MsQ0FBTDs7QUFFQSxVQUFLOEUsT0FBTCxDQUFhOUQsTUFBYixFQUFxQm9ILEtBQXJCLEVBQTRCcEosTUFBNUI7QUFDRDs7QUFFRCxvQkFBRW1LLE1BQUYsQ0FBU2QsV0FBV3hELFNBQXBCLEVBQStCQSxTQUEvQjtBQUNBLG9CQUFFc0UsTUFBRixDQUFTaEIscUJBQVQsRUFBZ0N0RCxTQUFoQzs7QUFFQSxVQUFPc0QscUJBQVA7O0FBRUE7O0FBRUEsWUFBU3JELE9BQVQsQ0FBaUI5RCxNQUFqQixFQUF5Qm9ILEtBQXpCLEVBQWdDcEosTUFBaEMsRUFBd0M7QUFDdEMsU0FBSXVFLFVBQVUsSUFBZDs7QUFFQUEsYUFBUXZDLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0F1QyxhQUFRNkUsS0FBUixHQUFnQkEsS0FBaEI7O0FBRUEsU0FBRyxDQUFDN0UsUUFBUTJDLFVBQVIsRUFBSixFQUEwQjtBQUN4QjNDLGVBQVF3RSxXQUFSLENBQW9CL0ksTUFBcEI7O0FBRUEsV0FBR2dDLE9BQU9vSSxLQUFWLEVBQWlCO0FBQ2YsMEJBQUV4RyxJQUFGLENBQU81QixPQUFPb0ksS0FBZCxFQUFxQixVQUFTQyxJQUFULEVBQWU7QUFDbEMsNEJBQUV6RyxJQUFGLENBQU95RyxLQUFLQSxJQUFaLEVBQWtCOUYsUUFBUWlELFlBQVIsQ0FBcUI4QyxJQUFyQixDQUEwQi9GLE9BQTFCLENBQWxCO0FBQ0QsVUFGRDtBQUdELFFBSkQsTUFLSztBQUNILDBCQUFFWCxJQUFGLENBQU81QixPQUFPcUksSUFBZCxFQUFvQjlGLFFBQVFpRCxZQUFSLENBQXFCOEMsSUFBckIsQ0FBMEIvRixPQUExQixDQUFwQjtBQUNEOztBQUVEQSxlQUFReUMsY0FBUjtBQUNBekMsZUFBUXdDLGtCQUFSO0FBQ0F4QyxlQUFRMkMsVUFBUixDQUFtQixJQUFuQjtBQUNEOztBQUVEM0MsYUFBUTJCLGVBQVI7QUFDRDs7QUFFRCxZQUFTZ0IsVUFBVCxDQUFvQnFELFFBQXBCLEVBQThCO0FBQzVCLFNBQUloRyxVQUFVLElBQWQ7QUFDQSxTQUFHZ0csUUFBSCxFQUFhO0FBQ1hoRyxlQUFRdkMsTUFBUixDQUFld0ksUUFBZixHQUEwQkQsUUFBMUI7QUFDRDtBQUNELFlBQU9oRyxRQUFRdkMsTUFBUixJQUFrQnVDLFFBQVF2QyxNQUFSLENBQWV3SSxRQUF4QztBQUNEOztBQUVELFlBQVN6QixXQUFULENBQXFCL0ksTUFBckIsRUFBNkI7QUFDM0IsU0FBSXVFLFVBQVUsSUFBZDtBQUNBLFNBQUd2RSxNQUFILEVBQVc7QUFDVCxXQUFHQSxPQUFPeUssUUFBVixFQUFvQmxHLFFBQVFrRyxRQUFSLEdBQW1CekssT0FBT3lLLFFBQTFCO0FBQ3BCLFdBQUd6SyxPQUFPZ0YsWUFBVixFQUF3QlQsUUFBUVMsWUFBUixHQUF1QmhGLE9BQU9nRixZQUE5QjtBQUN4QixXQUFHaEYsT0FBTzZHLFNBQVYsRUFBcUJ0QyxRQUFRbUcsYUFBUixHQUF3Qm5HLFFBQVEyRSxrQkFBUixDQUEyQmxKLE9BQU82RyxTQUFsQyxDQUF4QjtBQUN0QjtBQUNGOztBQUVELFlBQVNxQixhQUFULENBQXVCeEcsS0FBdkIsRUFBOEI7QUFDNUIsU0FBTTZDLFVBQVUsSUFBaEI7QUFENEIsU0FFcEJ2QyxNQUZvQixHQUVUTixLQUZTLENBRXBCTSxNQUZvQjs7O0FBSTVCTixXQUFNaUosYUFBTixHQUFzQjtBQUFBLGNBQU0saUJBQUVDLE9BQUYsQ0FBVTVJLE9BQU9MLElBQWpCLElBQXlCLGlCQUFFa0osS0FBRixDQUFRN0ksT0FBT0wsSUFBZixDQUF6QixHQUFnREssT0FBT0wsSUFBN0Q7QUFBQSxNQUF0QjtBQUNBLFNBQUcsQ0FBQ0QsTUFBTUMsSUFBVixFQUFnQkQsTUFBTUMsSUFBTixHQUFhRCxNQUFNaUosYUFBTixJQUF1QmpKLE1BQU1pSixhQUFOLEVBQXBDO0FBQ2pCOztBQUVELFlBQVM5RixjQUFULENBQXdCbkQsS0FBeEIsRUFBK0I7QUFDN0IsU0FBTTZDLFVBQVUsSUFBaEI7QUFENkIsU0FFckJ2QyxNQUZxQixHQUVWTixLQUZVLENBRXJCTSxNQUZxQjs7QUFHN0IsU0FBTThJLGFBQWFwSixNQUFNb0QsT0FBTixJQUFpQjlDLE9BQU84QyxPQUEzQzs7QUFFQSxTQUFNaUcsTUFBTXhHLFFBQVFxQyxNQUFSLENBQWVsRixNQUFNcUosR0FBckIsQ0FBWjtBQUNBO0FBQ0EsU0FBR3hHLFFBQVEwRixPQUFSLElBQW1CdkksTUFBTW9ELE9BQTVCLEVBQXFDO0FBQ25DLFdBQUdpRyxJQUFJbkosUUFBSixJQUFnQm1KLElBQUluSixRQUFKLENBQWEsSUFBYixDQUFuQixFQUF1QztBQUN2QyxXQUFNd0gsUUFBUTdFLFFBQVE4QyxlQUFSLENBQXdCM0YsTUFBTXFKLEdBQTlCLEVBQW1DeEcsUUFBUTZFLEtBQTNDLENBQWQ7QUFDQSxXQUFNNEIsYUFBYTVCLE1BQU02QixHQUFOLEVBQW5CO0FBQ0E7QUFDQTtBQUNBLFdBQUcsaUJBQUVDLFlBQUYsQ0FBZUYsVUFBZixLQUErQixpQkFBRUcsR0FBRixDQUFNNUcsUUFBUW9GLFFBQWQsRUFBd0JvQixHQUF4QixLQUFnQ2xMLFFBQVF1TCxNQUFSLENBQWVKLFVBQWYsRUFBMkJ6RyxRQUFRb0YsUUFBUixDQUFpQm9CLEdBQWpCLENBQTNCLENBQWxFLEVBQXNIO0FBQ3BIM0IsZUFBTWlDLEdBQU4sQ0FBVVAsVUFBVjtBQUNEO0FBQ0Y7QUFDRHZHLGFBQVFvRixRQUFSLENBQWlCb0IsR0FBakIsSUFBd0JsTCxRQUFReUwsSUFBUixDQUFhUixVQUFiLENBQXhCOztBQUVBLFNBQUc5SSxPQUFPQyxNQUFQLEtBQWtCLEtBQWxCLElBQTJCLENBQUNQLE1BQU02SixpQkFBckMsRUFBd0Q7QUFDdEQsV0FBRyxDQUFDN0osTUFBTUMsSUFBVixFQUFnQkQsTUFBTUMsSUFBTixHQUFhLEtBQWI7QUFDaEJELGFBQU02SixpQkFBTixHQUEwQixtQ0FBMUI7QUFDRDtBQUNGOztBQUVELFlBQVM5RCxlQUFULENBQXlCK0QsUUFBekIsRUFBbUM7QUFDakMsU0FBSWpILFVBQVUsSUFBZDs7QUFFQWlILGNBQVM3SixJQUFULEdBQWdCLGFBQWhCO0FBQ0E2SixjQUFTQyxLQUFULENBQWVDLE9BQWYsQ0FBdUJuSCxRQUFRaUQsWUFBUixDQUFxQjhDLElBQXJCLENBQTBCL0YsT0FBMUIsQ0FBdkI7O0FBRUEsU0FBR2lILFNBQVNHLFdBQVosRUFBeUI7QUFDdkJILGdCQUFTSSxjQUFULEdBQTBCLFVBQUNKLFFBQUQsRUFBYztBQUN0QyxhQUFHQSxTQUFTRyxXQUFaLEVBQXlCO0FBQ3ZCSCxvQkFBU0ssU0FBVCxHQUFxQixDQUFDTCxTQUFTSyxTQUEvQjtBQUNEO0FBQ0YsUUFKRDs7QUFNQUwsZ0JBQVNNLE1BQVQsR0FBa0IsQ0FBQ04sU0FBU0ssU0FBNUI7QUFDRCxNQVJELE1BU0s7QUFDSEwsZ0JBQVNNLE1BQVQsR0FBa0IsSUFBbEI7QUFDRDtBQUNGOztBQUVELFlBQVNuSCxnQkFBVCxDQUEwQmpELEtBQTFCLEVBQWlDO0FBQy9CLFNBQU1VLFlBQVlELGdCQUFnQkcsWUFBaEIsQ0FBNkJaLEtBQTdCLENBQWxCO0FBQ0EsU0FBTTRDLFVBQVVILGtCQUFrQi9CLFNBQWxCLENBQWhCO0FBQ0EsU0FBRyxpQkFBRW9CLFFBQUYsQ0FBV2MsT0FBWCxDQUFILEVBQXdCO0FBQ3RCQyxlQUFRRCxPQUFSLEVBQWlCNUMsS0FBakI7QUFDRCxNQUZELE1BR0ssSUFBRyxpQkFBRXFLLFVBQUYsQ0FBYXpILE9BQWIsQ0FBSCxFQUEwQjtBQUM3QkEsZUFBUTBILElBQVIsQ0FBYXpILE9BQWIsRUFBc0I3QyxLQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsWUFBUzhGLFlBQVQsQ0FBc0I5RixLQUF0QixFQUE2QjtBQUMzQixTQUFNNkMsVUFBVSxJQUFoQjs7QUFFQSxTQUFHLENBQUM3QyxNQUFNdUssT0FBVixFQUFtQjtBQUNqQnZLLGFBQU11SyxPQUFOLEdBQWdCLGlCQUFFQyxPQUFGLENBQVUsaUJBQUVDLElBQUYsQ0FBT3pLLEtBQVAsQ0FBVixFQUF5QixLQUF6QixFQUFnQyxXQUFoQyxDQUFoQjtBQUNEOztBQUVELFNBQU1xSixNQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZWxGLE1BQU1xSixHQUFyQixDQUFaOztBQUVBLFNBQUdBLEdBQUgsRUFBUTtBQUNOeEcsZUFBUTBCLGNBQVIsQ0FBdUJ2RSxLQUF2QixFQUE4QnFKLEdBQTlCO0FBQ0FySixhQUFNTSxNQUFOLEdBQWV1QyxRQUFRc0MsU0FBUixDQUFrQmtFLEdBQWxCLENBQWY7O0FBRUEsV0FBR3JKLE1BQU1NLE1BQVQsRUFBaUI7QUFDZixhQUFHTixNQUFNTSxNQUFOLENBQWFvSyxXQUFoQixFQUE2QjFLLE1BQU0wSyxXQUFOLEdBQW9CMUssTUFBTU0sTUFBTixDQUFhb0ssV0FBakM7QUFDN0IsYUFBRzFLLE1BQU0ySyxRQUFOLElBQWtCLENBQUMzSyxNQUFNTSxNQUFOLENBQWFxSyxRQUFuQyxFQUE2QzNLLE1BQU0ySyxRQUFOLEdBQWlCLEtBQWpCO0FBQzdDLGFBQUczSyxNQUFNTSxNQUFOLENBQWFMLElBQWIsS0FBc0IsT0FBdEIsSUFBaUMsRUFBRSxrQkFBa0JELEtBQXBCLENBQXBDLEVBQWdFQSxNQUFNNEssWUFBTixHQUFxQixJQUFyQjtBQUNqRTs7QUFFRC9ILGVBQVEyRCxhQUFSLENBQXNCeEcsS0FBdEI7QUFDRDs7QUFFRDBDLHVCQUFrQnNILE9BQWxCLENBQTBCLGdCQUFvQmEsS0FBcEI7QUFBQSxXQUFHbEksSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FBU0MsT0FBVCxRQUFTQSxPQUFUO0FBQUEsY0FDdEIsaUJBQUU2RyxHQUFGLENBQU16SixLQUFOLEVBQWEyQyxJQUFiLEtBQXNCQyxRQUFRNUMsS0FBUixFQUFlNkMsT0FBZixDQURBO0FBQUEsTUFBMUI7O0FBSUEsU0FBR3dHLEdBQUgsRUFBUTtBQUNOLFdBQUcsaUJBQUV5QixJQUFGLENBQU9qSSxRQUFRcUYsTUFBZixFQUF1QixFQUFFbUIsUUFBRixFQUF2QixDQUFILEVBQW9DO0FBQ2xDeEcsaUJBQVFxRixNQUFSLEdBQWlCLGlCQUFFNkMsTUFBRixDQUFTbEksUUFBUXFGLE1BQWpCLEVBQXlCLEVBQUNtQixLQUFLQSxHQUFOLEVBQXpCLENBQWpCO0FBQ0F0RixvQkFBV2lILFVBQVgsQ0FBc0Isc0JBQXNCM0IsR0FBNUMsRUFBaUQsWUFBakQsRUFBK0QsSUFBL0Q7QUFDQXRGLG9CQUFXaUgsVUFBWCxDQUFzQixzQkFBc0IzQixHQUE1QyxFQUFpRCxrQkFBakQsRUFBcUUsSUFBckU7QUFDRDs7QUFFRCxXQUFHckosTUFBTWlMLEtBQVQsRUFBZ0I7QUFDZHBJLGlCQUFRcUYsTUFBUixDQUFlL0ksSUFBZixDQUFvQjBELFFBQVE0QixVQUFSLENBQW1CekUsS0FBbkIsQ0FBcEI7QUFDQSxhQUFHLGlCQUFFa0wsT0FBRixDQUFVbEwsTUFBTW1MLGNBQWhCLENBQUgsRUFBb0M7QUFDbENuTCxpQkFBTW1MLGNBQU4sR0FBdUI7QUFDckJDLDJCQUFjO0FBRE8sWUFBdkI7QUFHRCxVQUpELE1BSU87QUFDTHBMLGlCQUFNbUwsY0FBTixDQUFxQkMsWUFBckIsR0FBb0MsSUFBcEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxZQUFTbEcsTUFBVCxDQUFnQm1FLEdBQWhCLEVBQXFCO0FBQ25CLFNBQUcsaUJBQUVILE9BQUYsQ0FBVUcsR0FBVixDQUFILEVBQW1CO0FBQ2pCQSxhQUFNLGlCQUFFZ0MsTUFBRixDQUFTaEMsR0FBVCxFQUFjLFVBQVNpQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUN4QyxhQUFHLFVBQVV2SixJQUFWLENBQWV1SixJQUFmLENBQUgsRUFBeUI7QUFDdkIsa0JBQU9ELFFBQVEsR0FBUixHQUFjQyxJQUFkLEdBQXFCLEdBQTVCO0FBQ0Q7QUFDRCxnQkFBT0QsUUFBUSxHQUFSLEdBQWNDLElBQXJCO0FBQ0QsUUFMSyxDQUFOO0FBTUQ7QUFDRCxZQUFPbEMsR0FBUDtBQUNEOztBQUdELFlBQVNsRSxTQUFULENBQW1Ca0UsR0FBbkIsRUFBd0JtQyxLQUF4QixFQUErQjtBQUM3QixTQUFJM0ksVUFBVSxJQUFkO0FBQ0EsU0FBRyxDQUFDd0csR0FBSixFQUFTOztBQUVUQSxXQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZW1FLEdBQWYsQ0FBTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxXQUFNLHFCQUFXb0MsS0FBWCxDQUFpQnBDLEdBQWpCLENBQU47QUFDQW1DLGFBQVFBLFNBQVMzSSxRQUFRdkMsTUFBUixDQUFlQSxNQUFmLENBQXNCb0wsVUFBdkM7O0FBRUE7QUFDQTs7QUFFQSxTQUFJdkMsY0FBSjtBQUFBLFNBQVdvQyxhQUFYOztBQUVBLFlBQU1sQyxJQUFJdEksTUFBSixHQUFhLENBQW5CLEVBQXNCO0FBQ3BCb0ksZUFBUUUsSUFBSSxDQUFKLENBQVI7QUFDQWtDLGNBQU9sQyxJQUFJLENBQUosQ0FBUDtBQUNBLFdBQUcsUUFBUXJILElBQVIsQ0FBYXVKLElBQWIsQ0FBSCxFQUF1QjtBQUNyQixhQUFHbEMsSUFBSXRJLE1BQUosS0FBZSxDQUFsQixFQUFxQjtBQUNuQnlLLG1CQUFRQSxRQUFRQSxNQUFNbkMsSUFBSXNDLEtBQUosRUFBTixDQUFoQjtBQUNELFVBRkQsTUFHSztBQUNISCxtQkFBUUEsTUFBTW5DLElBQUlzQyxLQUFKLEVBQU4sRUFBbUI1QixLQUFuQixDQUF5QjJCLFVBQWpDO0FBQ0FyQyxlQUFJc0MsS0FBSjtBQUNEO0FBQ0YsUUFSRCxNQVNLO0FBQ0hILGlCQUFRQSxNQUFNbkMsSUFBSXNDLEtBQUosRUFBTixFQUFtQkQsVUFBM0I7QUFDRDtBQUNGOztBQUVEO0FBQ0F2QyxhQUFRRSxJQUFJLENBQUosS0FBVSxPQUFsQjs7QUFFQSxZQUFPbUMsTUFBTXJDLEtBQU4sQ0FBUDtBQUNEOztBQUVELFlBQVNwRyxjQUFULENBQXdCL0MsS0FBeEIsRUFBK0I7QUFDN0IsU0FBSTZDLFVBQVUsSUFBZDs7QUFFQSxzQkFBRVgsSUFBRixDQUFPbEMsTUFBTTRMLE9BQWIsRUFBc0IsVUFBU0MsUUFBVCxFQUFtQkMsU0FBbkIsRUFBOEI7QUFDbERqSixlQUFRdUMsYUFBUixDQUFzQnBGLEtBQXRCLEVBQTZCOEwsU0FBN0IsRUFBd0NELFFBQXhDOztBQUVBLFdBQUlFLGNBQWNGLFNBQVNHLEtBQVQsQ0FBZSwrQkFBZixDQUFsQjs7QUFFQSxXQUFHRCxXQUFILEVBQWdCO0FBQ2QsYUFBR0EsWUFBWSxDQUFaLE1BQW1CLGNBQXRCLEVBQXNDO0FBQ3BDbEosbUJBQVFxRSxlQUFSLENBQXdCbEgsS0FBeEIsRUFBK0I4TCxTQUEvQixFQUEwQ0MsWUFBWSxDQUFaLENBQTFDO0FBQ0QsVUFGRCxNQUdLLElBQUdBLFlBQVksQ0FBWixNQUFtQixRQUF0QixFQUFnQztBQUNuQ2xKLG1CQUFRUSxlQUFSLENBQXdCMEksWUFBWSxDQUFaLENBQXhCLEVBQXdDLFlBQVc7QUFDakRsSixxQkFBUXVDLGFBQVIsQ0FBc0JwRixLQUF0QixFQUE2QjhMLFNBQTdCLEVBQXdDRCxRQUF4QztBQUNELFlBRkQ7QUFHRDtBQUNGO0FBQ0YsTUFmRDs7QUFpQkEsWUFBTzdMLEtBQVA7QUFDRDs7QUFFRCxZQUFTb0YsYUFBVCxDQUF1QnBGLEtBQXZCLEVBQThCOEwsU0FBOUIsRUFBeUNHLEdBQXpDLEVBQThDO0FBQzVDLFNBQUlwSixVQUFVLElBQWQ7QUFDQSxTQUFJZCxPQUFPYyxRQUFROEMsZUFBUixDQUF3QnNHLEdBQXhCLEVBQTZCMUMsR0FBN0IsRUFBWDtBQUNBO0FBQ0EsU0FBRyxDQUFDeEgsSUFBRCxJQUFTa0ssSUFBSUMsT0FBSixDQUFZLFFBQVosTUFBMEIsQ0FBdEMsRUFBeUM7QUFDdkNuSyxjQUFPYyxRQUFRc0MsU0FBUixDQUFrQjhHLElBQUlFLE9BQUosQ0FBWSxRQUFaLEVBQXNCLEVBQXRCLENBQWxCLEVBQTZDL0ksT0FBcEQ7QUFDRDtBQUNELFNBQUdyQixRQUFRQSxLQUFLcUssTUFBaEIsRUFBd0I7QUFDdEJwTSxhQUFNcU0sUUFBTixHQUFpQixZQUFXO0FBQzFCLGFBQUlSLFdBQVdJLElBQUlELEtBQUosQ0FBVSxvQkFBVixFQUFnQyxDQUFoQyxDQUFmO0FBQ0FuSixpQkFBUXlKLGFBQVIsV0FBOEJULFFBQTlCLFNBQTBDOUosS0FBS3FLLE1BQS9DO0FBQ0QsUUFIRDtBQUlELE1BTEQsTUFLTztBQUNMLGNBQU9wTSxNQUFNcU0sUUFBYjtBQUNEO0FBQ0RyTSxXQUFNOEwsU0FBTixJQUFvQi9KLFFBQVFBLEtBQUtBLElBQWQsR0FBc0JBLEtBQUtBLElBQTNCLEdBQWtDQSxJQUFyRDtBQUNEOztBQUVELFlBQVNtRixlQUFULENBQXlCbEgsS0FBekIsRUFBZ0M4TCxTQUFoQyxFQUEyQ0QsUUFBM0MsRUFBcUQ7QUFDbkQsU0FBSWhKLFVBQVUsSUFBZDs7QUFFQSxTQUFJMEosV0FBVzFKLFFBQVFxQyxNQUFSLENBQWVsRixNQUFNcUosR0FBckIsQ0FBZjtBQUNBeEcsYUFBUXlGLGVBQVIsQ0FBd0J1RCxRQUF4QixJQUFvQ2hKLFFBQVF5RixlQUFSLENBQXdCdUQsUUFBeEIsS0FBcUMsRUFBekU7O0FBRUEsU0FBSVcsV0FBVzNKLFFBQVF5RixlQUFSLENBQXdCdUQsUUFBeEIsQ0FBZjtBQUNBVyxjQUFTRCxRQUFULElBQXFCQyxTQUFTRCxRQUFULEtBQXNCLEVBQTNDO0FBQ0FDLGNBQVNELFFBQVQsRUFBbUJwTixJQUFuQixDQUF3QjtBQUN0QmEsY0FBT0EsS0FEZTtBQUV0QjJDLGFBQU1tSjtBQUZnQixNQUF4QjtBQUlEOztBQUVELFlBQVM1SSxrQkFBVCxDQUE0QmxELEtBQTVCLEVBQW1DO0FBQ2pDLFNBQUk2QyxVQUFVLElBQWQ7QUFDQSxzQkFBRVgsSUFBRixDQUFPbEMsTUFBTXlNLFlBQWIsRUFBMkIsVUFBQzFNLFNBQUQsRUFBWXNKLEdBQVosRUFBb0I7QUFDN0MsV0FBSXpHLFVBQVUsU0FBVkEsT0FBVSxDQUFDOEosR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDM0IzTSxlQUFNcUosR0FBTixJQUFheEcsUUFBUTZDLGNBQVIsQ0FBdUIzRixTQUF2QixDQUFiO0FBQ0EsYUFBR3NKLFFBQVEsVUFBWCxFQUF1QjtBQUNyQnRGLHNCQUFXaUgsVUFBWCxDQUFzQixvQkFBdEI7QUFDRDtBQUNGLFFBTEQ7QUFNQWhMLGFBQ0t5TSxZQURMLENBQ2tCcEQsR0FEbEIsRUFFSzJDLEtBRkwsQ0FFVyxrQkFGWCxFQUdLWSxHQUhMLENBR1M7QUFBQSxnQkFBUUMsS0FBS2IsS0FBTCxDQUFXLGlCQUFYLEVBQThCLENBQTlCLENBQVI7QUFBQSxRQUhULEVBSUtoQyxPQUpMLENBSWEsZUFBTztBQUNkbkgsaUJBQVFRLGVBQVIsQ0FBd0JnRyxHQUF4QixFQUE2QnpHLE9BQTdCO0FBQ0QsUUFOTDtBQU9BQTtBQUNELE1BZkQ7QUFnQkQ7O0FBRUQsWUFBU0ksaUJBQVQsQ0FBMkJoRCxLQUEzQixFQUFrQztBQUNoQyxTQUFJNkMsVUFBVSxJQUFkO0FBQUEsU0FDSXZDLFNBQVNOLE1BQU1NLE1BRG5COztBQUdBTixXQUFNOE0sS0FBTixHQUFjLGlCQUFFNUQsT0FBRixDQUFVbEosTUFBTThNLEtBQWhCLElBQXlCOU0sTUFBTThNLEtBQS9CLEdBQXVDLENBQUM5TSxNQUFNOE0sS0FBUCxDQUFyRDs7QUFFQSxzQkFBRTVLLElBQUYsQ0FBT2xDLE1BQU04TSxLQUFiLEVBQW9CLFVBQVNBLEtBQVQsRUFBZ0I7QUFDbEMsV0FBR0EsTUFBTUMsVUFBVCxFQUFxQjtBQUFBLGFBYWJDLFVBYmE7O0FBQUE7QUFDbkIsZUFBSWpOLFlBQVkrTSxNQUFNL00sU0FBdEI7QUFDQSxlQUFJZ04sYUFBYUQsTUFBTUMsVUFBdkI7QUFDQSxlQUFJbkssZ0JBQUo7O0FBRUEsZUFBRyxpQkFBRXlILFVBQUYsQ0FBYTBDLFVBQWIsQ0FBSCxFQUE2QjtBQUMzQm5LLHVCQUFVLGlCQUFTcUssR0FBVCxFQUFjTixJQUFkLEVBQW9CO0FBQzVCLG1CQUFHLENBQUM1TSxTQUFELElBQWM4QyxRQUFRNkMsY0FBUixDQUF1QjNGLFNBQXZCLENBQWpCLEVBQW9EO0FBQ2xEZ04sNEJBQVdFLEdBQVgsRUFBZ0JOLElBQWhCO0FBQ0Q7QUFDRixjQUpEO0FBS0QsWUFORCxNQU9LO0FBQ0NLLDBCQUFhLEVBRGQ7OztBQUdIQSx3QkFBV0UsSUFBWCxHQUFrQkgsV0FBV2YsS0FBWCxDQUFpQixnQkFBakIsQ0FBbEI7O0FBRUEsaUJBQUdnQixXQUFXRSxJQUFkLEVBQW9CO0FBQ2xCRiwwQkFBV0UsSUFBWCxHQUFrQkYsV0FBV0UsSUFBWCxDQUFnQixDQUFoQixDQUFsQjtBQUNBSCw0QkFBYUEsV0FBV1osT0FBWCxDQUFtQmEsV0FBV0UsSUFBOUIsRUFBb0MsRUFBcEMsRUFBd0NDLElBQXhDLEVBQWI7QUFDRCxjQUhELE1BSUs7QUFDSEgsMEJBQVdJLElBQVgsR0FBa0JMLFdBQVdmLEtBQVgsQ0FBaUIsc0JBQWpCLENBQWxCOztBQUVBLG1CQUFHZ0IsV0FBV0ksSUFBZCxFQUFvQjtBQUNsQkosNEJBQVdLLFFBQVgsR0FBc0I7QUFDcEIsd0JBQUssS0FEZTtBQUVwQix3QkFBSyxVQUZlO0FBR3BCLHdCQUFLLFVBSGU7QUFJcEIsd0JBQUs7QUFKZSxtQkFLcEJMLFdBQVdJLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FMb0IsQ0FBdEI7O0FBT0FKLDRCQUFXTSxRQUFYLEdBQXNCekssUUFBUThDLGVBQVIsQ0FBd0JxSCxXQUFXSSxJQUFYLENBQWdCLENBQWhCLENBQXhCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFREwsMEJBQWFBLFdBQVdmLEtBQVgsQ0FBaUIsaUJBQWpCLENBQWI7O0FBRUFwSix1QkFBVSxpQkFBQzhKLEdBQUQsRUFBTUMsSUFBTixFQUFZdEQsR0FBWixFQUFpQmtFLE9BQWpCLEVBQTZCO0FBQ3JDLG1CQUFJQyxlQUFlek4sYUFBYTBOLGtCQUFrQjFOLFNBQWxCLEVBQTZCc0osR0FBN0IsQ0FBaEM7QUFDQSxtQkFBSXFFLGFBQWFELGtCQUFrQlYsV0FBVyxDQUFYLENBQWxCLEVBQWlDMUQsR0FBakMsQ0FBakI7QUFDQSxtQkFBSXNFLFdBQVdGLGtCQUFrQlYsV0FBVyxDQUFYLENBQWxCLEVBQWlDMUQsR0FBakMsQ0FBZjs7QUFFQSxtQkFBSXVFLFNBQVMvSyxRQUFROEMsZUFBUixDQUF3QitILFVBQXhCLENBQWI7O0FBRUE7QUFDQSxtQkFBR0gsWUFBWUssT0FBT2YsSUFBUCxHQUFjeEQsR0FBN0IsRUFBa0M7QUFDbENrRSx5QkFBVUssT0FBT2YsSUFBUCxHQUFjeEQsR0FBeEI7O0FBRUEsbUJBQUl3RSxPQUFPaEwsUUFBUThDLGVBQVIsQ0FBd0JnSSxRQUF4QixDQUFYOztBQUVBLG1CQUFHLENBQUM1TixTQUFELElBQWM4QyxRQUFRNkMsY0FBUixDQUF1QjhILFlBQXZCLENBQWpCLEVBQXVEO0FBQ3JELHFCQUFHUixXQUFXRSxJQUFkLEVBQW9CO0FBQ2xCVSwwQkFBT2pFLEdBQVAsQ0FBV21FLE9BQU9ELEtBQUt0RSxHQUFMLEVBQVAsRUFBbUJ3RSxHQUFuQixDQUF1QmYsV0FBV0UsSUFBbEMsRUFBd0MsTUFBeEMsRUFBZ0RjLE1BQWhELEVBQVg7QUFDRCxrQkFGRCxNQUdLLElBQUdoQixXQUFXSSxJQUFkLEVBQW9CO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBSWEsU0FBU3JLLE9BQU9pSyxLQUFLdEUsR0FBTCxLQUFheUQsV0FBV0ksSUFBWCxDQUFnQixDQUFoQixDQUFiLEdBQWtDSixXQUFXTSxRQUFYLENBQW9CL0QsR0FBcEIsRUFBekMsR0FBYjtBQUNBakosNEJBQVNBLFVBQVVOLE1BQU0rSixLQUFOLEtBQWdCL0osTUFBTStKLEtBQU4sQ0FBWSxDQUFaLEVBQWV6SixNQUFmLElBQTBCTixNQUFNK0osS0FBTixDQUFZLENBQVosRUFBZUEsS0FBZixJQUF3Qi9KLE1BQU0rSixLQUFOLENBQVksQ0FBWixFQUFlQSxLQUFmLENBQXFCLENBQXJCLEVBQXdCekosTUFBMUYsQ0FBbkI7QUFDQSx1QkFBR04sTUFBTUMsSUFBTixLQUFlLGFBQWxCLEVBQWlDO0FBQy9CLHlCQUFJaU8sSUFBSTVOLFVBQVVBLE9BQU9DLE1BQVAsS0FBa0Isa0JBQTVCLEdBQWlELENBQWpELEdBQXFELENBQTdEOztBQUVBLHlCQUFHeU0sV0FBV0ksSUFBWCxDQUFnQixDQUFoQixNQUF1QixHQUExQixFQUErQjtBQUM3QmEsZ0NBQVMsaUJBQUVFLEtBQUYsQ0FBUUYsTUFBUixFQUFnQkMsQ0FBaEIsQ0FBVDtBQUNELHNCQUZELE1BR0ssSUFBR2xCLFdBQVdJLElBQVgsQ0FBZ0IsQ0FBaEIsTUFBdUIsR0FBMUIsRUFBK0I7QUFDbENhLGdDQUFTLGlCQUFFRyxJQUFGLENBQU9ILE1BQVAsRUFBZUMsQ0FBZixDQUFUO0FBQ0Qsc0JBRkksTUFHQTtBQUNIRCxnQ0FBUyxpQkFBRUksS0FBRixDQUFRSixNQUFSLEVBQWdCQyxDQUFoQixDQUFUO0FBQ0Q7QUFDRjtBQUNEO0FBQ0EsdUJBQUdyTCxRQUFRd0YsU0FBUixDQUFrQmtGLE9BQWxCLENBQUgsRUFBK0I7QUFDN0IxSyw2QkFBUXdGLFNBQVIsQ0FBa0JrRixPQUFsQixFQUEyQkEsT0FBM0IsR0FBcUNsRSxHQUFyQztBQUNEO0FBQ0R1RSwwQkFBT2pFLEdBQVAsQ0FBV3NFLFVBQVUsQ0FBckI7QUFDRCxrQkF2QkksTUF3QkE7QUFDSEwsMEJBQU9qRSxHQUFQLENBQVdrRSxLQUFLdEUsR0FBTCxFQUFYO0FBQ0Q7QUFDRjtBQUNGLGNBN0NEO0FBOENEOztBQUVEMUcsbUJBQVFRLGVBQVIsQ0FBd0JyRCxLQUF4QixFQUErQjRDLE9BQS9CLEVBQXdDNUMsTUFBTXNELFlBQTlDLEVBQTREd0osTUFBTXdCLFVBQWxFO0FBdEZtQjtBQXVGcEI7QUFDRixNQXpGRDtBQTBGRDs7QUFFRCxZQUFTNUksY0FBVCxDQUF3QjNGLFNBQXhCLEVBQW1DO0FBQ2pDLFNBQUk4QyxVQUFVLElBQWQ7QUFDQSxTQUFHOUMsVUFBVXdPLFVBQVYsQ0FBcUIsR0FBckIsQ0FBSCxFQUE4QjtBQUM1QixXQUFJdEMsTUFBTSxrRUFBVjs7QUFENEIsOEJBRXVCbE0sVUFBVWlNLEtBQVYsQ0FBZ0JDLEdBQWhCLENBRnZCO0FBQUE7QUFBQSxXQUVyQnVDLEVBRnFCO0FBQUEsV0FFakJDLElBRmlCO0FBQUEsV0FFWEMsZUFGVztBQUFBLFdBRU1DLGFBRk47O0FBRzVCLGNBQU8saUJBQUVILEVBQUYsRUFBTTVLLE9BQU82SyxJQUFQLEVBQWE1TCxPQUFiLENBQU4sRUFBNkIrTCxrQkFBa0JGLGVBQWxCLEVBQW1DQyxhQUFuQyxDQUE3QixDQUFQO0FBQ0QsTUFKRCxNQUlPO0FBQ0wsY0FBTy9LLE9BQU83RCxTQUFQLEVBQWtCOEMsT0FBbEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsWUFBUytMLGlCQUFULENBQTJCcEcsTUFBM0IsRUFBbUNxRyxJQUFuQyxFQUF5QztBQUN2QyxZQUFPO0FBQUEseUNBQUlDLElBQUo7QUFBSUEsYUFBSjtBQUFBOztBQUFBLGNBQ0xsTCxPQUFPaUwsSUFBUCxFQUFhckcsT0FDSjJELE9BREksQ0FDSSxLQURKLEVBQ1csRUFEWCxFQUVKNEMsS0FGSSxDQUVFLEdBRkYsRUFHSjFELE1BSEksQ0FHRyxVQUFDMkQsR0FBRCxFQUFNL0IsR0FBTixFQUFXcE0sQ0FBWCxFQUFpQjtBQUFFbU8sYUFBSS9CLEdBQUosSUFBVzZCLEtBQUtqTyxDQUFMLENBQVgsQ0FBb0IsT0FBT21PLEdBQVA7QUFBYSxRQUh2RCxFQUd5RCxFQUh6RCxDQUFiLENBREs7QUFBQSxNQUFQO0FBTUQ7O0FBRUQsWUFBUzNMLGVBQVQsQ0FBeUJnRyxHQUF6QixFQUE4QnpHLE9BQTlCLEVBQXVDVSxZQUF2QyxFQUFxRDJMLFVBQXJELEVBQWlFO0FBQy9ELFNBQUlwTSxVQUFVLElBQWQ7O0FBRUE7QUFDQSxTQUFHLGlCQUFFcU0sUUFBRixDQUFXN0YsR0FBWCxLQUFtQixDQUFDLGlCQUFFSCxPQUFGLENBQVVHLEdBQVYsQ0FBdkIsRUFBdUM7QUFDckMsV0FBRyxDQUFDQSxJQUFJQSxHQUFMLElBQVlBLElBQUlVLEtBQW5CLEVBQTBCO0FBQ3hCLDBCQUFFN0gsSUFBRixDQUFPbUgsSUFBSVUsS0FBWCxFQUFrQixVQUFTL0osS0FBVCxFQUFnQjtBQUNoQzZDLG1CQUFRUSxlQUFSLENBQXdCckQsS0FBeEIsRUFBK0I0QyxPQUEvQixFQUF3QzVDLE1BQU1zRCxZQUE5QztBQUNELFVBRkQ7QUFHQTtBQUNELFFBTEQsTUFNSztBQUNIK0YsZUFBTUEsSUFBSUEsR0FBVjtBQUNEO0FBQ0Y7O0FBRURBLFdBQU14RyxRQUFRcUMsTUFBUixDQUFlbUUsR0FBZixDQUFOO0FBQ0EsU0FBSThGLFdBQVc5RixJQUFJMkMsS0FBSixDQUFVLHFCQUFWLENBQWY7O0FBRUEsU0FBR21ELFFBQUgsRUFBYTtBQUNYdE0sZUFBUW9FLHFCQUFSLENBQThCa0ksU0FBUyxDQUFULENBQTlCLEVBQTJDQSxTQUFTLENBQVQsQ0FBM0MsRUFBd0R2TSxPQUF4RCxFQUFpRVUsWUFBakUsRUFBK0UyTCxVQUEvRTtBQUNBO0FBQ0Q7O0FBRUQsU0FBSWhDLE1BQU1wSyxRQUFROEMsZUFBUixDQUF3QjBELEdBQXhCLEVBQTZCeEcsUUFBUTZFLEtBQXJDLEVBQTRDNkIsR0FBNUMsRUFBVjtBQUNBLFNBQUk2RixlQUFlLGlCQUFFN0YsR0FBRixDQUFNMUcsUUFBUXNDLFNBQVIsQ0FBa0JrRSxHQUFsQixDQUFOLEVBQThCLFNBQTlCLENBQW5COztBQUVBLFNBQUcsQ0FBQ3hHLFFBQVF3RixTQUFSLENBQWtCZ0IsR0FBbEIsQ0FBSixFQUE0QjtBQUMxQixXQUFJc0QsT0FBTyxpQkFBRWpOLFdBQUYsQ0FBY3VOLEdBQWQsSUFBcUI5TyxRQUFReUwsSUFBUixDQUFhd0YsWUFBYixDQUFyQixHQUFrRGpSLFFBQVF5TCxJQUFSLENBQWFxRCxHQUFiLENBQTdEO0FBQ0FwSyxlQUFRd0YsU0FBUixDQUFrQmdCLEdBQWxCLElBQXlCO0FBQ3ZCZ0csbUJBQVUsRUFEYTtBQUV2Qi9MLHVCQUFjQSxZQUZTO0FBR3ZCcUosZUFBTUE7QUFIaUIsUUFBekI7QUFLRDs7QUFFRCxTQUFHL0osT0FBSCxFQUFZO0FBQ1ZDLGVBQVF3RixTQUFSLENBQWtCZ0IsR0FBbEIsRUFBdUJnRyxRQUF2QixDQUFnQ2xRLElBQWhDLENBQXFDeUQsT0FBckM7QUFDQSxXQUFHcU0sVUFBSCxFQUFlck0sUUFBUXFLLEdBQVIsRUFBYSxJQUFiLEVBQW1CNUQsR0FBbkI7QUFDaEI7QUFDRjs7QUFFRCxZQUFTcEMscUJBQVQsQ0FBK0JxSSxNQUEvQixFQUF1Qy9DLFFBQXZDLEVBQWlEM0osT0FBakQsRUFBMERVLFlBQTFELEVBQXdFMkwsVUFBeEUsRUFBb0Y7QUFDbEYsU0FBSXBNLFVBQVUsSUFBZDtBQUNBLFNBQUkwTSxVQUFVLFNBQVZBLE9BQVUsQ0FBU3RDLEdBQVQsRUFBY04sSUFBZCxFQUFvQjZDLE9BQXBCLEVBQTZCOztBQUV6QyxXQUFHLENBQUM3QyxJQUFELElBQVNBLFNBQVMsQ0FBbEIsSUFBdUIsQ0FBQ00sTUFBTSxDQUFQLElBQVksQ0FBdEMsRUFBeUM7QUFDekMsV0FBSXBNLENBQUosRUFBT0MsQ0FBUCxFQUFVdUksR0FBVjs7QUFFQSxXQUFHc0QsT0FBT00sR0FBUCxJQUFjdUMsT0FBakIsRUFBMEI7QUFDeEIsYUFBSUMsVUFBVWxELFdBQ1orQyxTQUFTLEdBQVQsSUFBZ0IzQyxPQUFPLENBQXZCLElBQTRCLEdBQTVCLEdBQWtDLEdBQWxDLEdBQXdDSixRQUQ1QixHQUVaK0MsU0FBUyxHQUFULElBQWdCM0MsT0FBTyxDQUF2QixJQUE0QixHQUY5Qjs7QUFJQTtBQUNBLGFBQUc5SixRQUFRd0YsU0FBUixDQUFrQm9ILE9BQWxCLENBQUgsRUFBK0I7QUFDN0IsZ0JBQUk1TyxJQUFJLENBQUosRUFBT0MsSUFBSTZMLElBQWYsRUFBcUI5TCxJQUFJQyxDQUF6QixFQUE0QkQsR0FBNUIsRUFBaUM7QUFDL0J3SSxtQkFBTWtELFdBQ0orQyxTQUFTLEdBQVQsR0FBZXpPLENBQWYsR0FBbUIsR0FBbkIsR0FBeUIsR0FBekIsR0FBK0IwTCxRQUQzQixHQUVKK0MsU0FBUyxHQUFULEdBQWV6TyxDQUFmLEdBQW1CLEdBRnJCOztBQUlBZ0MscUJBQVE4QixrQkFBUixDQUEyQjBFLEdBQTNCO0FBQ0Q7QUFDRjtBQUNELGNBQUl4SSxJQUFJLENBQUosRUFBT0MsSUFBSW1NLEdBQWYsRUFBb0JwTSxJQUFJQyxDQUF4QixFQUEyQkQsR0FBM0IsRUFBZ0M7QUFDOUJ3SSxpQkFBTWtELFdBQ0orQyxTQUFTLEdBQVQsR0FBZXpPLENBQWYsR0FBbUIsR0FBbkIsR0FBeUIsR0FBekIsR0FBK0IwTCxRQUQzQixHQUVKK0MsU0FBUyxHQUFULEdBQWV6TyxDQUFmLEdBQW1CLEdBRnJCOztBQUlBZ0MsbUJBQVFRLGVBQVIsQ0FBd0JnRyxHQUF4QixFQUE2QnpHLE9BQTdCLEVBQXNDVSxZQUF0QztBQUNBO0FBQ0E7QUFDRDtBQUNGLFFBeEJELE1BeUJLLElBQUcySixPQUFPTixRQUFRLENBQWYsQ0FBSCxFQUFzQjtBQUN6QixjQUFJOUwsSUFBSThMLE9BQU8sQ0FBWCxFQUFjN0wsSUFBSW1NLEdBQXRCLEVBQTJCcE0sSUFBSUMsQ0FBL0IsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDd0ksaUJBQU1rRCxXQUNKK0MsU0FBUyxHQUFULEdBQWV6TyxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCLEdBQXpCLEdBQStCMEwsUUFEM0IsR0FFSitDLFNBQVMsR0FBVCxHQUFlek8sQ0FBZixHQUFtQixHQUZyQjs7QUFJQWdDLG1CQUFRUSxlQUFSLENBQXdCZ0csR0FBeEIsRUFBNkJ6RyxPQUE3QixFQUFzQ1UsWUFBdEMsRUFBb0QyTCxVQUFwRDtBQUNBO0FBQ0Q7QUFDRjtBQUNGLE1BeENEOztBQTBDQSxTQUFJUyxTQUFTN00sUUFBUThDLGVBQVIsQ0FBd0IySixNQUF4QixFQUFnQ3pNLFFBQVE2RSxLQUF4QyxFQUErQzZCLEdBQS9DLEVBQWI7QUFDQSxzQkFBRXJILElBQUYsQ0FBT3dOLE1BQVAsRUFBZSxVQUFTMVAsS0FBVCxFQUFnQmEsQ0FBaEIsRUFBbUI7QUFDaEMsV0FBSXdJLE1BQU1rRCxXQUNSK0MsU0FBUyxHQUFULEdBQWV6TyxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCLEdBQXpCLEdBQStCMEwsUUFEdkIsR0FFUitDLFNBQVMsR0FBVCxHQUFlek8sQ0FBZixHQUFtQixHQUZyQjs7QUFJQWdDLGVBQVFRLGVBQVIsQ0FBd0JnRyxHQUF4QixFQUE2QnpHLE9BQTdCLEVBQXNDVSxZQUF0QztBQUNBLFdBQUcyTCxVQUFILEVBQWVyTSxRQUFRLElBQVIsRUFBYyxJQUFkLEVBQW9CeUcsR0FBcEI7QUFDaEIsTUFQRDs7QUFTQSxTQUFHeEcsUUFBUWtGLGNBQVIsQ0FBdUJ1SCxTQUFTLFNBQWhDLENBQUgsRUFBK0M7QUFDN0N6TSxlQUFRa0YsY0FBUixDQUF1QnVILFNBQVMsU0FBaEMsRUFBMkNELFFBQTNDLENBQW9EbFEsSUFBcEQsQ0FBeURvUSxPQUF6RDtBQUNELE1BRkQsTUFFTztBQUNMMU0sZUFBUWtGLGNBQVIsQ0FBdUJ1SCxTQUFTLFNBQWhDLElBQTZDO0FBQzNDRCxtQkFBVSxDQUFDRSxPQUFELENBRGlDO0FBRTNDNUMsZUFBTStDLFNBQVNBLE9BQU8zTyxNQUFoQixHQUF5QjtBQUZZLFFBQTdDO0FBSUQ7QUFDRjs7QUFFRCxZQUFTNEQsa0JBQVQsQ0FBNEIwRSxHQUE1QixFQUFpQztBQUMvQixTQUFJeEcsVUFBVSxJQUFkOztBQUVBd0csV0FBTXhHLFFBQVFxQyxNQUFSLENBQWVtRSxHQUFmLENBQU47O0FBRUEsU0FBSThGLFdBQVc5RixJQUFJMkMsS0FBSixDQUFVLHFCQUFWLENBQWY7O0FBRUEsU0FBR21ELFFBQUgsRUFBYTtBQUNYdE0sZUFBUStCLHVCQUFSLENBQWdDdUssU0FBUyxDQUFULENBQWhDLEVBQTZDQSxTQUFTLENBQVQsQ0FBN0M7QUFDQTtBQUNEOztBQUVELFNBQUd0TSxRQUFRd0YsU0FBUixDQUFrQmdCLEdBQWxCLENBQUgsRUFBMkJ4RyxRQUFRd0YsU0FBUixDQUFrQmdCLEdBQWxCLEVBQXVCZ0csUUFBdkIsR0FBa0MsRUFBbEM7QUFDNUI7O0FBRUQsWUFBU3pLLHVCQUFULENBQWlDMEssTUFBakMsRUFBeUMvQyxRQUF6QyxFQUFtRDtBQUNqRCxTQUFJMUosVUFBVSxJQUFkOztBQUVBQSxhQUFROEMsZUFBUixDQUF3QjJKLE1BQXhCLEVBQWdDek0sUUFBUTZFLEtBQXhDLEVBQStDNkIsR0FBL0MsR0FBcURTLE9BQXJELENBQTZELFVBQUMyRixJQUFELEVBQU85TyxDQUFQLEVBQWE7QUFDeEUwTCxrQkFDRTFKLFFBQVE4QixrQkFBUixDQUE4QjJLLE1BQTlCLFNBQXdDek8sQ0FBeEMsVUFBOEMwTCxRQUE5QyxDQURGLEdBRUUxSixRQUFROEIsa0JBQVIsQ0FBOEIySyxNQUE5QixTQUF3Q3pPLENBQXhDLE9BRkY7QUFHRCxNQUpEO0FBS0Q7O0FBRUQsWUFBU3lFLGNBQVQsR0FBMEI7QUFDeEIsU0FBSXpDLFVBQVUsSUFBZDtBQUNBLFNBQUdBLFFBQVErTSxRQUFYLEVBQXFCO0FBQ3JCLFNBQUcvTSxRQUFRZ04sVUFBWCxFQUF1QmhOLFFBQVFnTixVQUFSOztBQUV2QmhOLGFBQVFnTixVQUFSLEdBQXFCOUwsV0FBVytMLE1BQVgsQ0FDakIsWUFBVztBQUFFLGNBQU9qTixRQUFRNkUsS0FBZjtBQUF1QixNQURuQixFQUVqQjdFLFFBQVE0QyxZQUFSLENBQXFCbUQsSUFBckIsQ0FBMEIvRixPQUExQixDQUZpQixFQUdqQixJQUhpQixDQUFyQjs7QUFNQUEsYUFBUTBDLGdCQUFSO0FBQ0ExQyxhQUFRK00sUUFBUixHQUFtQixJQUFuQjtBQUNBL00sYUFBUWtOLFdBQVIsR0FBc0IsSUFBdEI7QUFDRDs7QUFFRCxZQUFTdEssWUFBVCxDQUFzQndILEdBQXRCLEVBQTJCTixJQUEzQixFQUFpQztBQUMvQixTQUFJOUosVUFBVSxJQUFkO0FBQ0E7QUFDQTtBQUNBLFNBQUdBLFFBQVFrTixXQUFSLElBQXVCLENBQUM1UixRQUFRdUwsTUFBUixDQUFldUQsR0FBZixFQUFvQk4sSUFBcEIsQ0FBM0IsRUFBc0Q7QUFDcEQ5SixlQUFRa04sV0FBUixHQUFzQixLQUF0QjtBQUNBOUwsY0FBTytMLFVBQVAsQ0FBa0JuTixRQUFRNkUsS0FBMUI7O0FBRUE3RSxlQUFRb04sVUFBUixHQUFxQjlSLFFBQVF5TCxJQUFSLENBQWEvRyxRQUFRMkYsTUFBckIsQ0FBckI7QUFDQTNGLGVBQVEyRixNQUFSLEdBQWlCM0osaUJBQWlCUSxjQUFqQixFQUFqQjs7QUFFQSx3QkFBRTZDLElBQUYsQ0FBT1csUUFBUWtGLGNBQWYsRUFBK0IsVUFBQ21JLFFBQUQsRUFBVzdHLEdBQVgsRUFBbUI7QUFDaEQsYUFBSXFELE1BQU03SixRQUFROEMsZUFBUixDQUF3QjBELEdBQXhCLEVBQTZCeEcsUUFBUTZFLEtBQXJDLEVBQTRDNkIsR0FBNUMsRUFBVjtBQUNBLGFBQUcsQ0FBQ3BMLFFBQVF1TCxNQUFSLENBQWVnRCxHQUFmLEVBQW9Cd0QsU0FBU3ZELElBQTdCLENBQUosRUFBd0M7QUFDdEN1RCxvQkFBU2IsUUFBVCxDQUFrQnJGLE9BQWxCLENBQTBCO0FBQUEsb0JBQVdwSCxRQUFROEosR0FBUixFQUFhd0QsU0FBU3ZELElBQXRCLENBQVg7QUFBQSxZQUExQjtBQUNBdUQsb0JBQVN2RCxJQUFULEdBQWdCeE8sUUFBUXlMLElBQVIsQ0FBYThDLEdBQWIsQ0FBaEI7QUFDRDtBQUNGLFFBTkQ7O0FBUUEsd0JBQUV4SyxJQUFGLENBQU9XLFFBQVF3RixTQUFmLEVBQTBCLFVBQUM2SCxRQUFELEVBQVc3RyxHQUFYLEVBQW1CO0FBQzNDLGFBQUc2RyxRQUFILEVBQWE7QUFBQTtBQUNYLGlCQUFJeEQsTUFBTTdKLFFBQVE4QyxlQUFSLENBQXdCMEQsR0FBeEIsRUFBNkJ4RyxRQUFRNkUsS0FBckMsRUFBNEM2QixHQUE1QyxFQUFWO0FBQ0EsaUJBQU00RyxjQUFjaFMsUUFBUXVMLE1BQVIsQ0FBZWdELEdBQWYsRUFBb0IsRUFBcEIsS0FBMkIsQ0FBQ3dELFNBQVN2RCxJQUF6RDtBQUNBLGlCQUFHLENBQUN4TyxRQUFRdUwsTUFBUixDQUFlZ0QsR0FBZixFQUFvQndELFNBQVN2RCxJQUE3QixDQUFELElBQXVDLENBQUN3RCxXQUEzQyxFQUF3RDtBQUN0REQsd0JBQVNiLFFBQVQsQ0FBa0JyRixPQUFsQixDQUEwQixtQkFBVztBQUNuQ3BILHlCQUFROEosR0FBUixFQUFhd0QsU0FBU3ZELElBQXRCLEVBQTRCdEQsR0FBNUIsRUFBaUM2RyxTQUFTM0MsT0FBMUM7QUFDRCxnQkFGRDtBQUdBMkMsd0JBQVMzQyxPQUFULEdBQW1CLElBQW5CO0FBQ0EyQyx3QkFBU3ZELElBQVQsR0FBZ0J4TyxRQUFReUwsSUFBUixDQUFhOEMsR0FBYixDQUFoQjtBQUNEO0FBQ0QsaUJBQUd3RCxTQUFTNU0sWUFBVCxJQUF5QixDQUFDbkYsUUFBUXVCLFdBQVIsQ0FBb0JnTixHQUFwQixDQUExQixJQUFzRCxDQUFDeUQsV0FBdkQsSUFBc0V6RCxRQUFRLElBQWpGLEVBQXVGO0FBQ3JGN0osdUJBQVEyRixNQUFSLENBQWVhLEdBQWYsSUFBc0JxRCxHQUF0QjtBQUNEO0FBWlU7QUFhWjtBQUNGLFFBZkQ7O0FBaUJBLFdBQUcsQ0FBQ3ZPLFFBQVF1TCxNQUFSLENBQWU3RyxRQUFRMkYsTUFBdkIsRUFBK0IzRixRQUFRb04sVUFBdkMsQ0FBSixFQUF3RDtBQUN0RCxhQUFHcE4sUUFBUTZFLEtBQVIsQ0FBYzBJLEVBQWQsSUFBb0IsQ0FBQ3ZOLFFBQVEwRixPQUE3QixJQUF3QyxpQkFBRTJDLE9BQUYsQ0FBVXJJLFFBQVFvTixVQUFsQixDQUEzQyxFQUEwRTtBQUN4RSxhQUFFcE4sUUFBUTBGLE9BQVY7QUFDRCxVQUZELE1BR0s7QUFDSDFGLG1CQUFReUosYUFBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFlBQVMvRyxnQkFBVCxHQUE0QjtBQUMxQixTQUFJMUMsVUFBVSxJQUFkO0FBQ0Esc0JBQUVYLElBQUYsQ0FBT1csUUFBUXdGLFNBQWYsRUFBMEIsVUFBUzZILFFBQVQsRUFBbUI3RyxHQUFuQixFQUF3QjtBQUNoRCxXQUFHNkcsUUFBSCxFQUFhO0FBQ1gsYUFBSXhELE1BQU03SixRQUFROEMsZUFBUixDQUF3QjBELEdBQXhCLEVBQTZCeEcsUUFBUTZFLEtBQXJDLEVBQTRDNkIsR0FBNUMsRUFBVjtBQUNBLGFBQUcyRyxTQUFTNU0sWUFBVCxJQUF5QixDQUFDbkYsUUFBUXVCLFdBQVIsQ0FBb0JnTixHQUFwQixDQUExQixJQUFzREEsUUFBUSxJQUFqRSxFQUF1RTtBQUNyRTdKLG1CQUFRMkYsTUFBUixDQUFlYSxHQUFmLElBQXNCcUQsR0FBdEI7QUFDRDtBQUNGO0FBQ0YsTUFQRDtBQVFEOztBQUVELFlBQVNySCxrQkFBVCxHQUE4QjtBQUM1QixTQUFJeEMsVUFBVSxJQUFkOztBQUVBQSxhQUFRc0YsTUFBUixDQUFlaEosSUFBZixDQUFvQjRFLFdBQVdzTSxHQUFYLENBQWUsMEJBQWYsRUFBMkMsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFDcEYsV0FBSWxILE1BQU14RyxRQUFRcUMsTUFBUixDQUFlcUwsTUFBTTVILElBQU4sQ0FBV1UsR0FBMUIsQ0FBVjtBQUNBLFdBQUl3QixRQUFReEIsSUFBSTJDLEtBQUosQ0FBVSxnQkFBVixDQUFaOztBQUVBM0MsYUFBTUEsSUFBSThDLE9BQUosQ0FBWSxTQUFaLEVBQXVCLElBQXZCLENBQU47QUFDQXRCLGVBQVFBLFNBQVMyRixTQUFTM0YsTUFBTSxDQUFOLENBQVQsQ0FBakI7O0FBRUEsV0FBRyxDQUFDMEYsTUFBTTVILElBQU4sQ0FBVzVJLFNBQWYsRUFBMEJ3USxNQUFNNUgsSUFBTixDQUFXNUksU0FBWCxHQUF1QixNQUF2Qjs7QUFFMUI4QyxlQUFRd0IsWUFBUixDQUFxQmtNLEtBQXJCLEVBQTRCbEgsR0FBNUIsRUFBaUN3QixLQUFqQztBQUNBMEYsYUFBTUUsS0FBTixDQUFZLHdCQUFaLEVBQXNDcEgsR0FBdEM7QUFDRCxNQVhtQixDQUFwQjs7QUFhQXhHLGFBQVFzRixNQUFSLENBQWVoSixJQUFmLENBQW9CNEUsV0FBV3NNLEdBQVgsQ0FBZSx1QkFBZixFQUF3QyxVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUF1QjFGLEtBQXZCLEVBQThCO0FBQ3hGLFdBQUl4QixNQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZXFMLE1BQU01SCxJQUFOLENBQVdVLEdBQTFCLEVBQStCOEMsT0FBL0IsQ0FBdUMsU0FBdkMsRUFBa0QsSUFBbEQsQ0FBVjtBQUNBLFdBQUl1RSxTQUFTN04sUUFBUWlDLGlCQUFSLENBQTBCdUUsR0FBMUIsQ0FBYjs7QUFFQXFILGNBQU8xRyxPQUFQLENBQWUsVUFBQ3lFLElBQUQsRUFBVTtBQUN2QkEsY0FBS2tDLE1BQUwsQ0FBWTlGLEtBQVosRUFBbUIsQ0FBbkI7QUFDRCxRQUZEOztBQUlBLFdBQUcwRixNQUFNNUgsSUFBTixDQUFXaUksSUFBZCxFQUFvQjtBQUNsQixhQUFJbkMsT0FBTzVMLFFBQVE4QyxlQUFSLENBQXdCNEssTUFBTTVILElBQU4sQ0FBV2lJLElBQW5DLEVBQXlDL04sUUFBUTZFLEtBQWpELEVBQXdENkIsR0FBeEQsRUFBWDtBQUNBa0YsY0FBS2tDLE1BQUwsQ0FBWTlGLEtBQVosRUFBbUIsQ0FBbkI7QUFDRDtBQUNGLE1BWm1CLENBQXBCO0FBYUQ7O0FBRUQsWUFBU3hHLFlBQVQsQ0FBc0JzRSxJQUF0QixFQUE0QlUsR0FBNUIsRUFBaUN3QixLQUFqQyxFQUF3QztBQUN0QyxTQUFNaEksVUFBVSxJQUFoQjtBQUNBLFNBQUcsQ0FBQ2dJLEtBQUQsSUFBVUEsUUFBUSxDQUFyQixFQUF3QkEsUUFBUSxDQUFSO0FBQ3hCLFNBQUcsQ0FBQ2hJLFFBQVFpRixXQUFSLENBQW9CdUIsR0FBcEIsQ0FBSixFQUE4QnhHLFFBQVFpRixXQUFSLENBQW9CdUIsR0FBcEIsSUFBMkIsRUFBM0I7QUFDOUJ4RyxhQUFRaUYsV0FBUixDQUFvQnVCLEdBQXBCLEVBQXlCd0IsS0FBekIsSUFBa0NsQyxJQUFsQztBQUNBO0FBQ0Q7O0FBRUQsWUFBUzlELGNBQVQsQ0FBd0J3RSxHQUF4QixFQUE2QjtBQUMzQixTQUFNeEcsVUFBVSxJQUFoQjtBQUNBLFlBQU8saUJBQUVnTyxLQUFGLENBQVFoTyxRQUFRa0MsY0FBUixDQUF1QnNFLEdBQXZCLENBQVIsRUFBcUMsTUFBckMsQ0FBUDtBQUNEOztBQUVELFlBQVN2RSxpQkFBVCxDQUEyQmdNLFFBQTNCLEVBQXFDO0FBQ25DLFNBQU1qTyxVQUFVLElBQWhCO0FBQ0FpTyxpQkFBWSxJQUFaOztBQUVBLFlBQU8saUJBQUVDLE1BQUYsQ0FBU2xPLFFBQVFpRixXQUFqQixFQUE4QixVQUFDOEIsSUFBRCxFQUFPUCxHQUFQO0FBQUEsY0FBZUEsSUFBSW5KLFFBQUosQ0FBYTRRLFFBQWIsQ0FBZjtBQUFBLE1BQTlCLENBQVA7QUFDRDs7QUFFRCxZQUFTL0wsY0FBVCxDQUF3QnNFLEdBQXhCLEVBQTZCO0FBQzNCLFNBQUl4RyxVQUFVLElBQWQ7QUFDQSxZQUFPQSxRQUFRaUYsV0FBUixDQUFvQnVCLEdBQXBCLENBQVA7QUFDRDs7QUFFRCxZQUFTOUUsY0FBVCxDQUF3QnZFLEtBQXhCLEVBQStCcUosR0FBL0IsRUFBb0M7QUFDbEMsU0FBSXhHLFVBQVUsSUFBZDtBQUNBd0csV0FBTUEsT0FBT3hHLFFBQVFxQyxNQUFSLENBQWVsRixNQUFNcUosR0FBckIsQ0FBYjtBQUNBLFNBQUcsQ0FBQ3hHLFFBQVFvQyxnQkFBUixDQUF5Qm9FLEdBQXpCLENBQUosRUFBbUN4RyxRQUFRdUYsU0FBUixDQUFrQmlCLEdBQWxCLElBQXlCckosS0FBekI7QUFDcEM7O0FBRUQsWUFBU2lGLGdCQUFULENBQTBCb0UsR0FBMUIsRUFBK0I7QUFDN0IsU0FBSXhHLFVBQVUsSUFBZDtBQUNBLFlBQU9BLFFBQVF1RixTQUFSLENBQWtCaUIsR0FBbEIsQ0FBUDtBQUNEOztBQUVELFlBQVMvRSxjQUFULENBQXdCK0UsR0FBeEIsRUFBNkJDLFVBQTdCLEVBQXlDO0FBQ3ZDLFNBQUl6RyxVQUFVLElBQWQ7O0FBRUEsU0FBR3dHLEdBQUgsRUFBUTtBQUNOeEcsZUFBUW1GLFNBQVIsQ0FBa0JxQixHQUFsQixJQUF5QkMsVUFBekI7QUFDRDtBQUNGOztBQUVELFlBQVN0RSxnQkFBVCxDQUEwQnFFLEdBQTFCLEVBQStCO0FBQzdCLFNBQUl4RyxVQUFVLElBQWQ7O0FBRUEsWUFBT0EsUUFBUW1GLFNBQVIsQ0FBa0JxQixHQUFsQixDQUFQO0FBQ0Q7O0FBRUQsWUFBUzJILHFCQUFULENBQStCL0UsR0FBL0IsRUFBb0M7QUFDbEMsWUFBT0EsSUFBSUQsS0FBSixDQUFVLGNBQVYsQ0FBUDtBQUNEOztBQUVELFlBQVNyRyxlQUFULENBQXlCc0csR0FBekIsRUFBOEJULEtBQTlCLEVBQXFDO0FBQ25DLFNBQU0zSSxVQUFVLElBQWhCO0FBQ0E7QUFDQSxTQUFHLENBQUNvSixHQUFELElBQVEsbURBQW1EakssSUFBbkQsQ0FBd0RpSyxHQUF4RCxDQUFYLEVBQXlFO0FBQ3ZFLGNBQU87QUFDTCxnQkFBTyxlQUFXO0FBQ2hCLGVBQUcsQ0FBQ0EsR0FBSixFQUFTLE9BQU9BLEdBQVA7QUFDVCxtQkFBT0EsR0FBUDtBQUNFLGtCQUFLLE1BQUw7QUFBYSxzQkFBTyxJQUFQO0FBQ2Isa0JBQUssT0FBTDtBQUFjLHNCQUFPLEtBQVA7QUFDZCxrQkFBSyxNQUFMO0FBQWEsc0JBQU8sSUFBUDtBQUNiLGtCQUFLLFdBQUw7QUFBa0I7QUFDbEIsa0JBQUssTUFBTDtBQUFhLHNCQUFPLEVBQVA7QUFDYixrQkFBSyxJQUFMO0FBQVcsc0JBQU8sRUFBUDtBQUNYLGtCQUFLLElBQUw7QUFBVyxzQkFBTyxFQUFQO0FBQ1g7QUFBUyxzQkFBT2dGLFdBQVdoRixHQUFYLENBQVA7QUFSWDtBQVVEO0FBYkksUUFBUDtBQWVEOztBQUVEQSxXQUFNcEosUUFBUXFDLE1BQVIsQ0FBZStHLEdBQWYsQ0FBTjs7QUFFQSxTQUFNRCxRQUFRQyxJQUFJRCxLQUFKLENBQVUsbUJBQVYsQ0FBZDs7QUFFQSxTQUFNMUMsYUFBYTtBQUNqQkMsVUFEaUIsaUJBQ1g7QUFDSixhQUFJMkgsWUFBWWpGLEdBQWhCO0FBQ0EsYUFBSWtGLFNBQVNILHNCQUFzQkUsU0FBdEIsQ0FBYjs7QUFFQSxnQkFBTUMsTUFBTixFQUFjO0FBQ1pELHVCQUFZQSxVQUFVL0UsT0FBVixDQUFrQmdGLE9BQU8sQ0FBUCxDQUFsQixRQUFpQ3RPLFFBQVE4QyxlQUFSLENBQXdCd0wsT0FBTyxDQUFQLENBQXhCLEVBQW1DM0YsS0FBbkMsRUFBMENqQyxHQUExQyxFQUFqQyxDQUFaO0FBQ0E0SCxvQkFBU0gsc0JBQXNCRSxTQUF0QixDQUFUO0FBQ0Q7O0FBRUQsYUFBSXJFLE9BQU8scUJBQVdwQixLQUFYLENBQWlCeUYsU0FBakIsRUFBNEJDLE1BQTVCLENBQVg7QUFDQSxhQUFJQyxRQUFRNUYsU0FBUzNJLE9BQXJCOztBQUVBLGdCQUFNdU8sU0FBU3ZFLEtBQUs5TCxNQUFMLEdBQWMsQ0FBN0IsRUFBZ0M7QUFDOUJxUSxtQkFBUUEsTUFBTXZFLEtBQUtsQixLQUFMLEVBQU4sQ0FBUjtBQUNEOztBQUVELGdCQUFPeUYsU0FBU0EsTUFBTXZFLEtBQUssQ0FBTCxDQUFOLENBQWhCO0FBQ0QsUUFsQmdCO0FBb0JqQndFLG9CQXBCaUIsMkJBb0JEO0FBQ2QsYUFBR0wsc0JBQXNCRSxTQUF0QixDQUFILEVBQXFDO0FBQ25DLHlFQUE0RGpGLEdBQTVEO0FBQ0Q7O0FBRUQsYUFBSVksT0FBTyxxQkFBV3BCLEtBQVgsQ0FBaUJRLEdBQWpCLENBQVg7QUFDQSxhQUFJcUYsV0FBVyxFQUFmO0FBQ0EsYUFBSUYsUUFBUTVGLFNBQVMzSSxPQUFyQjs7QUFFQSxnQkFBTXVPLFNBQVN2RSxLQUFLOUwsTUFBTCxHQUFjLENBQTdCLEVBQWdDO0FBQzlCLGVBQUlzSSxNQUFNd0QsS0FBS2xCLEtBQUwsRUFBVjtBQUNBMkYsb0JBQVNuUyxJQUFULENBQWNrSyxHQUFkO0FBQ0EsZUFBRyxDQUFDK0gsTUFBTS9ILEdBQU4sQ0FBSixFQUFnQjtBQUNkLGlCQUFHLFFBQVFySCxJQUFSLENBQWE2SyxLQUFLLENBQUwsQ0FBYixDQUFILEVBQTBCO0FBQ3hCdUUscUJBQU0vSCxHQUFOLElBQWEsRUFBYjtBQUNELGNBRkQsTUFHSztBQUNIK0gscUJBQU0vSCxHQUFOLElBQWEsRUFBYjtBQUNEO0FBQ0Y7QUFDRCtILG1CQUFRQSxNQUFNL0gsR0FBTixDQUFSO0FBQ0Q7O0FBRUQsZ0JBQU87QUFDTGtJLGdCQUFLSCxLQURBO0FBRUwvSCxnQkFBS3dELEtBQUssQ0FBTCxDQUZBO0FBR0xBLGlCQUFNaEssUUFBUXFDLE1BQVIsQ0FBZW9NLFFBQWYsQ0FIRDtBQUlMRSxxQkFBVTNPLFFBQVFxQyxNQUFSLENBQWVvTSxTQUFTRyxNQUFULENBQWdCNUUsS0FBSzZFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFoQixDQUFmO0FBSkwsVUFBUDtBQU1ELFFBakRnQjtBQW1EakIvSCxVQW5EaUIsZUFtRGIrQyxHQW5EYSxFQW1EUjtBQUNQLGFBQUdzRSxzQkFBc0JFLFNBQXRCLENBQUgsRUFBcUM7QUFDbkMsK0RBQWtEakYsR0FBbEQ7QUFDRDs7QUFFRCxhQUFJMEYsYUFBYSxLQUFLTixhQUFMLEVBQWpCO0FBQ0FNLG9CQUFXSixHQUFYLENBQWVJLFdBQVd0SSxHQUExQixJQUFpQ3FELEdBQWpDO0FBQ0EsZ0JBQU9BLEdBQVA7QUFDRCxRQTNEZ0I7QUE2RGpCRyxXQTdEaUIsa0JBNkRWO0FBQ0wsZ0JBQU87QUFDTFosZ0JBQUtBLEdBREE7QUFFTFQsa0JBQU9BLEtBRkY7QUFHTG5DLGdCQUFLMkMsTUFBTSxDQUFOO0FBSEEsVUFBUDtBQUtEO0FBbkVnQixNQUFuQjs7QUFzRUEsWUFBTzFDLFVBQVA7QUFDRDs7QUFFRCxZQUFTMUQsWUFBVCxDQUFzQmdNLEtBQXRCLEVBQTZCO0FBQzNCLFNBQUkvTyxVQUFVLElBQWQ7QUFDQSxTQUFJd0csTUFBTXhHLFFBQVFxQyxNQUFSLENBQWUwTSxNQUFNdkksR0FBckIsQ0FBVjs7QUFFQXVJLFdBQU1DLFdBQU4sR0FBb0I7QUFDbEJqRSxlQUFRLGdCQUFTa0UsQ0FBVCxFQUFZQyxFQUFaLEVBQWdCO0FBQ3RCLGFBQUk3QixXQUFXck4sUUFBUWtGLGNBQVIsQ0FBMEJzQixHQUExQixhQUFmO0FBQ0E2RyxrQkFBU2IsUUFBVCxDQUFrQnJGLE9BQWxCLENBQTBCLG1CQUFXO0FBQ25DcEgsbUJBQVFzTixTQUFTdkQsSUFBakIsRUFBdUJ1RCxTQUFTdkQsSUFBaEMsRUFBc0MsSUFBdEM7QUFDRCxVQUZEO0FBR0Q7QUFOaUIsTUFBcEI7O0FBU0E5SixhQUFRNEQsY0FBUixDQUF1Qm1MLEtBQXZCO0FBQ0Q7O0FBRUQsWUFBU25MLGNBQVQsQ0FBd0J1TCxPQUF4QixFQUFpQztBQUMvQixTQUFJblAsVUFBVSxJQUFkO0FBQ0Esc0JBQUVYLElBQUYsQ0FBTzhQLFFBQVFqSSxLQUFmLEVBQXNCbEgsUUFBUWlELFlBQVIsQ0FBcUI4QyxJQUFyQixDQUEwQi9GLE9BQTFCLENBQXRCO0FBQ0Q7O0FBRUQsWUFBU21ELGdCQUFULENBQTBCaU0sU0FBMUIsRUFBcUM7QUFDbkMsU0FBSXBQLFVBQVUsSUFBZDs7QUFFQW9QLGVBQVVoUyxJQUFWLEdBQWlCLFNBQWpCO0FBQ0FnUyxlQUFVQyxTQUFWLEdBQXNCLEtBQXRCOztBQUVBLFNBQUlDLE9BQU8sS0FBSyxpQkFBRXBILE1BQUYsQ0FBU2tILFVBQVVsSSxLQUFuQixFQUEwQixRQUExQixFQUFvQ2hKLE1BQXBEOztBQUVBLHNCQUFFbUIsSUFBRixDQUFPK1AsVUFBVWxJLEtBQWpCLEVBQXdCLFVBQVMvSixLQUFULEVBQWdCYSxDQUFoQixFQUFtQjtBQUN6Q2dDLGVBQVFpRCxZQUFSLENBQXFCOUYsS0FBckI7QUFDQWlTLGlCQUFVbEksS0FBVixDQUFnQmxKLENBQWhCLElBQXFCO0FBQ25CWixlQUFNLFNBRGE7QUFFbkJpUyxvQkFBVyxZQUFZQyxJQUZKO0FBR25CcEksZ0JBQU8sQ0FBQy9KLEtBQUQ7QUFIWSxRQUFyQjtBQUtELE1BUEQ7QUFRRDs7QUFFRCxZQUFTaUcsZUFBVCxDQUF5QmpHLEtBQXpCLEVBQWdDO0FBQzlCQSxXQUFNb1MsY0FBTixHQUF1QjtBQUNyQiwyQkFBb0IsU0FEQztBQUVyQiw4QkFBdUIsWUFGRjtBQUdyQixtQkFBWTtBQUhTLE9BSXJCcFMsTUFBTU0sTUFBTixDQUFhQyxNQUpRLENBQXZCOztBQU1BUCxXQUFNQyxJQUFOLEdBQWEsYUFBYjtBQUNEOztBQUVELFlBQVNpRyxpQkFBVCxDQUEyQmxHLEtBQTNCLEVBQWtDO0FBQ2hDQSxXQUFNQyxJQUFOLEdBQWEsZUFBYjtBQUNEOztBQUVELFlBQVNzRyxlQUFULENBQXlCdkcsS0FBekIsRUFBZ0M7QUFDOUIsU0FBSTZDLFVBQVUsSUFBZDtBQUNBN0MsV0FBTUMsSUFBTixHQUFhLGFBQWI7QUFDQUQsV0FBTXFTLElBQU4sR0FBYXJTLE1BQU1xUyxJQUFOLElBQWMsS0FBM0I7QUFDQXJTLFdBQU0rSixLQUFOLENBQVlDLE9BQVosQ0FBb0JuSCxRQUFRaUQsWUFBUixDQUFxQjhDLElBQXJCLENBQTBCL0YsT0FBMUIsQ0FBcEI7QUFDQTdDLFdBQU0rSixLQUFOLEdBQWMsQ0FBQztBQUNiOUosYUFBTSxTQURPO0FBRWI4SixjQUFPL0osTUFBTStKLEtBRkE7QUFHYmhLLGtCQUFXLFlBQVk4QyxRQUFRcUMsTUFBUixDQUFlbEYsTUFBTXFKLEdBQXJCLENBQVosR0FBd0M7QUFIdEMsTUFBRCxDQUFkO0FBS0Q7O0FBRUQsWUFBU3RDLGtCQUFULENBQTRCL0csS0FBNUIsRUFBbUM7QUFDakMsU0FBSTZDLFVBQVUsSUFBZDtBQUNBN0MsV0FBTUMsSUFBTixHQUFhLGdCQUFiO0FBQ0Esc0JBQUVpQyxJQUFGLENBQU9sQyxNQUFNK0IsSUFBYixFQUFtQixVQUFTOEosUUFBVCxFQUFtQnhDLEdBQW5CLEVBQXdCO0FBQ3pDckosYUFBTStCLElBQU4sQ0FBV3NILEdBQVgsSUFBa0J4RyxRQUFROEMsZUFBUixDQUF3QmtHLFFBQXhCLEVBQWtDdEMsR0FBbEMsRUFBbEI7QUFDRCxNQUZEO0FBR0Q7O0FBRUQsWUFBU3ZDLGdCQUFULENBQTBCaEgsS0FBMUIsRUFBaUM7QUFDL0IsU0FBSTZDLFVBQVUsSUFBZDtBQUNBN0MsV0FBTUMsSUFBTixHQUFhLGNBQWI7QUFDRDs7QUFFRCxZQUFTb0csYUFBVCxDQUF1QnJHLEtBQXZCLEVBQThCO0FBQzVCQSxXQUFNQyxJQUFOLEdBQWEsV0FBYjtBQUNEOztBQUVELFlBQVNxRyxtQkFBVCxDQUE2QmdNLE1BQTdCLEVBQXFDO0FBQ25DLFNBQUl6UCxVQUFVLElBQWQ7QUFDQXlQLFlBQU9yUyxJQUFQLEdBQWMsaUJBQWQ7QUFDQSxTQUFHcVMsT0FBT0MsU0FBVixFQUFxQjtBQUNuQkQsY0FBT0UsUUFBUCxHQUFrQixZQUFZLGlCQUFFQyxNQUFGLENBQVMsRUFBVCxFQUFhSCxPQUFPblMsUUFBUCxDQUFnQlksTUFBN0IsQ0FBOUI7QUFDRDtBQUNGOztBQUVELFlBQVNvRixXQUFULENBQXFCK0csSUFBckIsRUFBMkI7QUFDekIsU0FBSXJLLFVBQVUsSUFBZDtBQUNBcUssVUFBS2pOLElBQUwsR0FBWSxtQkFBWjs7QUFFQSxTQUFHaU4sS0FBSzVNLE1BQUwsQ0FBWUMsTUFBWixLQUF1QixjQUExQixFQUEwQztBQUN4QzJNLFlBQUt3RixPQUFMLEdBQWUsTUFBZjtBQUNBeEYsWUFBS3lGLFNBQUwsR0FBaUIsZUFBakI7O0FBRUF6RixZQUFLMEYsY0FBTCxHQUFzQixlQUFPO0FBQzNCLGFBQUcsQ0FBQ2xHLEdBQUosRUFBUzs7QUFFVCxhQUFJbUcsSUFBSS9FLE9BQU9wQixHQUFQLENBQVI7O0FBRUEsZ0JBQU8saUJBQUVxQixHQUFGLENBQU0saUJBQUUrRSxRQUFGLENBQVdELEVBQUVFLEtBQUYsRUFBWCxFQUFzQixFQUF0QixDQUFOLEVBQWlDRixFQUFFRyxPQUFGLEVBQWpDLENBQVA7QUFDRCxRQU5EOztBQVFBOUYsWUFBSytGLFdBQUwsR0FBbUIsZUFBTztBQUN4QixhQUFHLENBQUN2RyxHQUFKLEVBQVM7O0FBRVQsYUFBSXdHLElBQUkxQyxTQUFTOUQsR0FBVCxDQUFSO0FBQ0EsYUFBSXFHLFFBQVEsaUJBQUU1RSxLQUFGLENBQVErRSxJQUFJLEVBQVosQ0FBWjtBQUNBLGFBQUlGLFVBQVVFLElBQUksRUFBbEI7O0FBRUEsZ0JBQU9wRixTQUFTcUYsT0FBVCxDQUFpQixLQUFqQixFQUF3QnBGLEdBQXhCLENBQTRCLE9BQTVCLEVBQXFDZ0YsS0FBckMsRUFBNENoRixHQUE1QyxDQUFnRCxTQUFoRCxFQUEyRGlGLE9BQTNELENBQVA7QUFDRCxRQVJEOztBQVVBOUYsWUFBS2tHLGFBQUwsR0FBcUIsZUFBTztBQUMxQixhQUFHLENBQUMxRyxHQUFKLEVBQVM7O0FBRVQsZ0JBQU9RLEtBQUsrRixXQUFMLENBQWlCdkcsR0FBakIsRUFBc0JuTSxNQUF0QixDQUE2QjJNLEtBQUttRyxVQUFsQyxDQUFQO0FBQ0QsUUFKRDs7QUFNQW5HLFlBQUtvRyxVQUFMLEdBQWtCLGVBQU87QUFDdkIsYUFBRyxDQUFDNUcsR0FBSixFQUFTOztBQUVULGFBQUlWLFFBQVFVLElBQUlWLEtBQUosQ0FBVSw4QkFBVixDQUFaO0FBQ0EsYUFBRyxDQUFDQSxLQUFKLEVBQVc7O0FBRVgsYUFBSStHLFFBQVEsaUJBQUVoRixHQUFGLENBQU0vQixNQUFNLENBQU4sTUFBYSxJQUFiLEdBQW9CLENBQXBCLEdBQXdCQSxNQUFNLENBQU4sQ0FBOUIsRUFBd0NBLE1BQU0sQ0FBTixNQUFhLEdBQWIsR0FBbUIsQ0FBbkIsR0FBdUIsRUFBL0QsQ0FBWjtBQUNBLGFBQUlnSCxVQUFVaEgsTUFBTSxDQUFOLEtBQVksSUFBMUI7O0FBRUEsYUFBR2dILFFBQVFqUyxNQUFSLEtBQW1CLENBQXRCLEVBQXlCaVMsV0FBVyxHQUFYOztBQUV6QixnQkFBTyxpQkFBRWpGLEdBQUYsQ0FBTSxpQkFBRStFLFFBQUYsQ0FBV0MsS0FBWCxFQUFrQixFQUFsQixDQUFOLEVBQTZCQyxPQUE3QixDQUFQO0FBQ0QsUUFaRDtBQWFEO0FBQ0Y7O0FBRUQsWUFBU08sZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ2hDLFNBQUl0SyxVQUFVc0ssT0FBT3ZLLGFBQVAsT0FBMkIsT0FBekM7QUFDQSxZQUFPdUssT0FBT0MsYUFBUCxJQUNMLENBQUN2SyxVQUFVc0ssT0FBT2xULE1BQVAsQ0FBY3lKLEtBQWQsQ0FBb0I5SixJQUE5QixHQUFxQ3VULE9BQU9sVCxNQUFQLENBQWNMLElBQXBELE1BQThELFFBQTlELElBQTBFLE9BRDVFO0FBRUQ7O0FBRUQsWUFBU3lULHFCQUFULENBQStCRixNQUEvQixFQUF1QzlHLEdBQXZDLEVBQTRDdk0sUUFBNUMsRUFBc0Q7QUFDcERBLGdCQUFXQSxZQUFZcVQsT0FBT0csV0FBUCxFQUF2QjtBQUNBLFNBQUlDLFVBQVVMLGlCQUFpQkMsTUFBakIsQ0FBZDtBQUNBLFNBQUcsQ0FBQ0ksT0FBSixFQUFhOztBQUViLFNBQUdKLE9BQU92SyxhQUFQLE9BQTJCLE9BQTlCLEVBQXVDO0FBQ3JDLFdBQUcsQ0FBQ3lELEdBQUQsSUFBUSxDQUFDLGlCQUFFeEQsT0FBRixDQUFVd0QsR0FBVixDQUFaLEVBQTRCOztBQUU1QixXQUFJbUgsU0FBU25ILElBQUlFLEdBQUosQ0FBUTtBQUFBLGdCQUFLLGlCQUFFOUIsSUFBRixDQUFPM0ssUUFBUCxzQkFBbUJ5VCxPQUFuQixFQUE2QkUsQ0FBN0IsRUFBTDtBQUFBLFFBQVIsRUFBK0MvQyxNQUEvQyxDQUFzRDtBQUFBLGdCQUFLK0MsTUFBTUMsU0FBWDtBQUFBLFFBQXRELENBQWI7O0FBRUEsY0FBT0YsTUFBUDtBQUNELE1BTkQsTUFPSztBQUNILGNBQU8saUJBQUUvSSxJQUFGLENBQU8zSyxRQUFQLHNCQUFtQnlULE9BQW5CLEVBQTZCbEgsR0FBN0IsRUFBUDtBQUNEO0FBQ0Y7O0FBRUQsWUFBU2hHLGFBQVQsQ0FBdUI4TSxNQUF2QixFQUErQjtBQUM3QixTQUFJM1EsVUFBVSxJQUFkO0FBQUEsU0FDSXZDLFNBQVNrVCxPQUFPbFQsTUFEcEI7O0FBR0EsU0FBR2tULE9BQU9wVCxlQUFQLElBQTBCb1QsT0FBT3JULFFBQXBDLEVBQThDO0FBQzVDcVQsY0FBT0csV0FBUCxHQUFxQixZQUFXO0FBQzlCLGdCQUFPSCxPQUFPclQsUUFBUCxJQUFtQjBDLFFBQVF2QyxNQUFSLENBQWV5QixJQUFmLENBQW9CeVIsT0FBT3BULGVBQTNCLENBQTFCO0FBQ0QsUUFGRDs7QUFJQW9ULGNBQU9RLE1BQVAsR0FBZ0IsVUFBU3RILEdBQVQsRUFBYy9ELElBQWQsRUFBb0IySCxLQUFwQixFQUEyQjJELE1BQTNCLEVBQW1DO0FBQ2pEO0FBQ0EsYUFBSTNLLGFBQWF6RyxRQUFROEMsZUFBUixDQUF3QmdELEtBQUtVLEdBQTdCLEVBQWtDeEcsUUFBUTZFLEtBQTFDLENBQWpCO0FBQ0EsYUFBRzRJLFVBQVUsVUFBYixFQUF5QjtBQUN2QixlQUFJNEQsU0FBU1Isc0JBQXNCRixNQUF0QixFQUE4QmxLLFdBQVdDLEdBQVgsRUFBOUIsQ0FBYjtBQUNBLGVBQUcySyxXQUFXSCxTQUFkLEVBQXlCRSxPQUFPQyxNQUFQO0FBQzFCO0FBQ0YsUUFQRDtBQVFEOztBQUVELFNBQUdWLE9BQU9uVCxhQUFWLEVBQXlCO0FBQ3ZCLFdBQUlnSixNQUFNbUssT0FBT25ULGFBQVAsQ0FBcUJtSSxNQUFyQixDQUE0QjJMLENBQXRDO0FBQ0FYLGNBQU9ZLFVBQVAsR0FBb0IsVUFBU0QsQ0FBVCxFQUFZO0FBQzlCLGFBQUkzTCxTQUFTLEVBQWI7QUFDQSxhQUFHYSxHQUFILEVBQVE7QUFDTmIsa0JBQU9hLEdBQVAsSUFBYzhLLENBQWQ7QUFDRDtBQUNELGdCQUFPeFEsSUFBSTRGLEdBQUosQ0FBUTtBQUNiaEksZ0JBQUtpUyxPQUFPblQsYUFBUCxDQUFxQmtCLEdBRGI7QUFFYmlILG1CQUFRQTtBQUZLLFVBQVIsQ0FBUDtBQUlELFFBVEQ7O0FBV0E7QUFDQSxXQUFHLENBQUNhLEdBQUosRUFBU21LLE9BQU9hLFNBQVAsR0FBbUIsR0FBbkI7O0FBRVRiLGNBQU9RLE1BQVAsR0FBZ0IsVUFBU3RILEdBQVQsRUFBYy9ELElBQWQsRUFBb0IySCxLQUFwQixFQUEyQjJELE1BQTNCLEVBQW1DO0FBQ2pELGFBQUczRCxVQUFVLFVBQWIsRUFBeUI7QUFDdkIyRCxrQkFBT3ZILEdBQVA7QUFDRDtBQUNGLFFBSkQ7QUFLRDs7QUFFRCxTQUFHcE0sT0FBT3lKLEtBQVYsRUFBaUI7QUFDZixXQUFJOUIsV0FBVyxFQUFmO0FBQ0Esd0JBQUUvRixJQUFGLENBQU81QixPQUFPeUosS0FBUCxDQUFhMkIsVUFBcEIsRUFBZ0MsVUFBU3BMLE1BQVQsRUFBaUIrSSxHQUFqQixFQUFzQjtBQUNwRCxhQUFHbEwsUUFBUW1XLFNBQVIsQ0FBa0JoVSxPQUFPOEMsT0FBekIsQ0FBSCxFQUFzQztBQUNwQzZFLG9CQUFTOUksSUFBVCxDQUFjO0FBQ1osb0JBQU9rSyxHQURLO0FBRVpqRyxzQkFBUzlDLE9BQU84QztBQUZKLFlBQWQ7QUFJRDtBQUNGLFFBUEQ7QUFRQSxXQUFHNkUsU0FBU2xILE1BQVosRUFBb0I7QUFDbEJ5UyxnQkFBT2UsS0FBUCxHQUFlLFVBQVM3SCxHQUFULEVBQWMvRCxJQUFkLEVBQW9CMkgsS0FBcEIsRUFBMkI7QUFDeEMsZUFBRzVELElBQUk5TSxLQUFKLElBQWEwUSxVQUFVLFdBQTFCLEVBQXVDO0FBQ3JDLDhCQUFFcE8sSUFBRixDQUFPK0YsUUFBUCxFQUFpQixVQUFTdEYsSUFBVCxFQUFlO0FBQzlCLG1CQUFHLENBQUMrSixJQUFJOU0sS0FBSixDQUFVK0MsS0FBSzBHLEdBQWYsQ0FBSixFQUF5QnFELElBQUk5TSxLQUFKLENBQVUrQyxLQUFLMEcsR0FBZixJQUFzQjFHLEtBQUtTLE9BQTNCO0FBQzFCLGNBRkQ7QUFHRDtBQUNGLFVBTkQ7QUFPRDtBQUNGOztBQUVELFNBQUcsQ0FBQ29RLE9BQU92VCxJQUFQLENBQVlDLFFBQVosQ0FBcUIsaUJBQXJCLENBQUosRUFBNkM7QUFDM0MsV0FBR3NULE9BQU96SixLQUFWLEVBQWlCO0FBQ2Z5SixnQkFBT2dCLFlBQVAsR0FBc0IsSUFBdEI7O0FBRUEsYUFBR2hCLE9BQU96SixLQUFQLENBQWEsQ0FBYixFQUFnQjlKLElBQWhCLEtBQXlCLFdBQTVCLEVBQXlDO0FBQ3ZDLGVBQUd1VCxPQUFPekosS0FBUCxDQUFhaEosTUFBYixHQUFzQixDQUF6QixFQUE0QjtBQUMxQnlTLG9CQUFPekosS0FBUCxHQUFlLENBQUM7QUFDZDlKLHFCQUFNLFdBRFE7QUFFZDhKLHNCQUFPeUosT0FBT3pKO0FBRkEsY0FBRCxDQUFmO0FBSUQ7O0FBRURsSCxtQkFBUWtELGVBQVIsQ0FBd0J5TixNQUF4QjtBQUNEOztBQUVEQSxnQkFBT3ZULElBQVAsR0FBYywwQkFBZDtBQUNELFFBZkQsTUFnQks7QUFDSCxhQUFHLENBQUN1VCxPQUFPaUIsY0FBWCxFQUEyQjtBQUN6QmpCLGtCQUFPaUIsY0FBUCxHQUF3QmpCLE9BQU9uSyxHQUFQLEtBQWUsTUFBZixHQUN0QixNQURzQixHQUNabUssT0FBT3ZLLGFBQVAsT0FBMkIsT0FBM0IsSUFBc0N1SyxPQUFPbFQsTUFBUCxDQUFjb1UsUUFBZCxLQUEyQixDQUFsRSxHQUNQLE1BRE8sR0FDRSxRQUZiO0FBR0Q7QUFDRGxCLGdCQUFPdlQsSUFBUCxHQUFjLGlCQUFkO0FBQ0Q7O0FBRUQsV0FBR3VULE9BQU9wVCxlQUFWLEVBQTJCO0FBQ3pCMkQsb0JBQVdzTSxHQUFYLENBQWUscUJBQWYsRUFBc0MsVUFBQ3lCLENBQUQsRUFBSS9QLElBQUosRUFBYTtBQUNqRCxlQUFHQSxLQUFLeVIsT0FBT3BULGVBQVosQ0FBSCxFQUFpQztBQUMvQixpQkFBSWtKLGFBQWF6RyxRQUFROEMsZUFBUixDQUF3QjZOLE9BQU9uSyxHQUEvQixFQUFvQ3hHLFFBQVE2RSxLQUE1QyxDQUFqQjtBQUNBLGlCQUFJZ0YsTUFBTXBELFdBQVdDLEdBQVgsRUFBVjtBQUNBLGlCQUFHbUQsUUFBUXFILFNBQVgsRUFBc0I7QUFDcEIsbUJBQUlZLFFBQVFqQixzQkFBc0JGLE1BQXRCLEVBQThCOUcsR0FBOUIsRUFBbUMzSyxLQUFLeVIsT0FBT3BULGVBQVosQ0FBbkMsQ0FBWjtBQUNBLG1CQUFHdVUsVUFBVVosU0FBYixFQUF3QnpLLFdBQVdLLEdBQVg7QUFDekI7QUFDRjtBQUNGLFVBVEQ7QUFVRDtBQUNGOztBQUVELFNBQUc2SixPQUFPb0IsYUFBVixFQUF5QjtBQUN2QnBCLGNBQU9xQixhQUFQLEdBQXVCaFMsUUFBUStELGVBQVIsQ0FBd0I0TSxPQUFPb0IsYUFBL0IsQ0FBdkI7QUFDRDs7QUFFRC9SLGFBQVFRLGVBQVIsQ0FBd0JtUSxPQUFPbkssR0FBL0IsRUFBb0MsVUFBU3FELEdBQVQsRUFBYztBQUNoRCxXQUFJL0QsT0FBTzlGLFFBQVFrRyxRQUFSLElBQW9CbEcsUUFBUWtHLFFBQVIsQ0FBaUJsRyxRQUFRcUMsTUFBUixDQUFlc08sT0FBT25LLEdBQXRCLENBQWpCLENBQS9CO0FBQ0EsV0FBR1YsUUFBUUEsS0FBS21NLFNBQWhCLEVBQTJCbk0sS0FBS21NLFNBQUw7QUFDNUIsTUFIRCxFQUdHdEIsT0FBT2xRLFlBSFY7QUFJRDs7QUFFRCxZQUFTdUQsYUFBVCxDQUF1QmtPLE1BQXZCLEVBQStCO0FBQzdCQSxZQUFPOVUsSUFBUCxHQUFjLFdBQWQ7QUFDRDs7QUFFRCxZQUFTbUcsV0FBVCxDQUFxQjRPLElBQXJCLEVBQTJCO0FBQ3pCQSxVQUFLOUMsU0FBTCxHQUFpQixZQUFqQjtBQUNEOztBQUVELFlBQVNyTSxjQUFULENBQXdCb1AsT0FBeEIsRUFBaUM7QUFDL0IsU0FBSXBTLFVBQVUsSUFBZDtBQUNBb1MsYUFBUWhWLElBQVIsR0FBZSxZQUFmO0FBQ0FnVixhQUFRQyxVQUFSLEdBQXFCclMsUUFBUStELGVBQVIsQ0FBd0JxTyxRQUFRTCxhQUFoQyxFQUErQyxJQUEvQyxDQUFyQjtBQUNEOztBQUVELFlBQVNoTyxlQUFULENBQXlCdU8sR0FBekIsRUFBOEJDLFVBQTlCLEVBQTBDO0FBQ3hDLFNBQUl2UyxVQUFVLElBQWQ7QUFDQTtBQUNBLFNBQUl3UyxZQUFZdlIsWUFBaEI7QUFDQSxZQUFPLFVBQVN5TSxLQUFULEVBQWdCK0UsVUFBaEIsRUFBNEI7QUFDakMsV0FBR0YsVUFBSCxFQUFlO0FBQ2IsYUFBR2pYLFFBQVFtVyxTQUFSLENBQWtCZ0IsVUFBbEIsQ0FBSCxFQUFrQztBQUNoQy9FLG1CQUFRLGlCQUFFM0QsR0FBRixDQUFNMkQsS0FBTixFQUFhLFVBQVNsSCxHQUFULEVBQWM7QUFDakMsb0JBQU9BLFFBQVEsWUFBUixHQUF1QmlNLFVBQXZCLEdBQW9Dak0sR0FBM0M7QUFDRCxZQUZPLENBQVI7QUFHRDtBQUNEa0gsaUJBQVExTixRQUFROEMsZUFBUixDQUF3QjRLLEtBQXhCLEVBQStCMU4sUUFBUTZFLEtBQXZDLEVBQThDNkIsR0FBOUMsRUFBUjtBQUNEO0FBQ0QsY0FBTzhMLFVBQVVGLEdBQVYsRUFBZTVFLEtBQWYsQ0FBUDtBQUNELE1BVkQ7QUFXRDs7QUFFRCxZQUFTNUosWUFBVCxDQUFzQjRPLEtBQXRCLEVBQTZCO0FBQzNCLFNBQUkxUyxVQUFVLElBQWQ7QUFDQTBTLFdBQU10VixJQUFOLEdBQWEsVUFBYjtBQUNBc1YsV0FBTXhMLEtBQU4sQ0FBWUMsT0FBWixDQUFvQixVQUFTd0wsR0FBVCxFQUFjO0FBQ2hDLFlBQUssSUFBSTNVLElBQUksQ0FBYixFQUFnQkEsSUFBSTBVLE1BQU1FLE9BQU4sQ0FBYzFVLE1BQWxDLEVBQTBDRixHQUExQyxFQUErQztBQUM3QywwQkFBRTRILE1BQUYsQ0FBUytNLElBQUl6TCxLQUFKLENBQVVsSixDQUFWLENBQVQsRUFBdUIwVSxNQUFNRSxPQUFOLENBQWM1VSxDQUFkLENBQXZCO0FBQ0E7QUFDQWdDLGlCQUFRaUQsWUFBUixDQUFxQjBQLElBQUl6TCxLQUFKLENBQVVsSixDQUFWLENBQXJCO0FBQ0Q7QUFDRixNQU5EO0FBT0Q7O0FBRUQsWUFBU2lDLG9CQUFULENBQThCNFMsYUFBOUIsRUFBNkM7QUFDM0MsU0FBSTdTLFVBQVUsSUFBZDtBQUFBLFNBQ0l2QyxTQUFTdUMsUUFBUXNDLFNBQVIsQ0FBa0J1USxjQUFjck0sR0FBaEMsQ0FEYjtBQUFBLFNBRUlzTSxjQUFjLGlCQUFFN0ssSUFBRixDQUFPNEssY0FBYzNMLEtBQXJCLEVBQTRCLGFBQTVCLENBRmxCO0FBQUEsU0FHSW5ILE9BSEo7O0FBS0EsU0FBR3RDLFVBQVVBLE9BQU9MLElBQVAsS0FBZ0IsT0FBN0IsRUFBc0M7QUFDcEMyQyxpQkFBVUMsUUFBUXlFLHVCQUFSLENBQWdDb08sYUFBaEMsRUFBK0NDLFdBQS9DLENBQVY7QUFDRCxNQUZELE1BRU87QUFDTC9TLGlCQUFVQyxRQUFRMEUsa0JBQVIsQ0FBMkJtTyxhQUEzQixFQUEwQ0MsV0FBMUMsQ0FBVjtBQUNEOztBQUVERCxtQkFBY0EsYUFBZCxHQUE4QixLQUE5QjtBQUNBN1MsYUFBUVEsZUFBUixDQUF3QnNTLFlBQVl0TSxHQUFwQyxFQUF5Q3pHLE9BQXpDLEVBQWtEK1MsWUFBWXJTLFlBQTlELEVBQTRFLElBQTVFO0FBQ0FULGFBQVFpRCxZQUFSLENBQXFCNFAsYUFBckI7QUFDRDs7QUFFRCxZQUFTcE8sdUJBQVQsQ0FBaUNvTyxhQUFqQyxFQUFnREMsV0FBaEQsRUFBNkQ7QUFDM0QsU0FBSTlTLFVBQVUsSUFBZDtBQUNBLHNCQUFFWCxJQUFGLENBQU93VCxjQUFjM0wsS0FBckIsRUFBNEIsVUFBUzRGLElBQVQsRUFBZTtBQUN6QyxXQUFHQSxLQUFLNVAsU0FBTCxLQUFtQixPQUF0QixFQUErQjtBQUM3QjRQLGNBQUs1UCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0Q7QUFDRixNQUpEO0FBS0EsU0FBSTZDLFVBQVUsU0FBVkEsT0FBVSxDQUFTOEosR0FBVCxFQUFjQyxJQUFkLEVBQW9CdEQsR0FBcEIsRUFBeUI7QUFDckMsV0FBSXdCLFFBQVErSyxjQUFjdk0sR0FBZCxDQUFaO0FBQ0Esd0JBQUVuSCxJQUFGLENBQU93VCxjQUFjM0wsS0FBckIsRUFBNEIsVUFBUzRGLElBQVQsRUFBZTtBQUN6QyxhQUFJa0csWUFBWWhULFFBQVFxQyxNQUFSLENBQWV5USxZQUFZdE0sR0FBM0IsQ0FBaEI7QUFDQSxhQUFJQSxNQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZXlLLEtBQUt0RyxHQUFwQixDQUFWO0FBQ0EsYUFBSXlNLFdBQVcscUJBQVdySyxLQUFYLENBQWlCcEMsR0FBakIsQ0FBZjtBQUNBLGFBQUd3TSxjQUFjeE0sR0FBakIsRUFBc0I7QUFDdEIsYUFBSTBNLG1CQUFtQmxULFFBQVF1RSxhQUFSLENBQXNCeU8sU0FBdEIsRUFBaUNoTCxLQUFqQyxDQUF2QjtBQUNBLGFBQUltTCxjQUFjblQsUUFBUThDLGVBQVIsQ0FBd0JvUSxnQkFBeEIsRUFBMENsVCxRQUFRNkUsS0FBbEQsRUFBeUQ2QixHQUF6RCxFQUFsQjtBQUNBLGFBQUkwTSxhQUFhcFQsUUFBUWdDLGNBQVIsQ0FBdUJ3RSxHQUF2QixDQUFqQjtBQUNBLGFBQUcsaUJBQUVuSixRQUFGLENBQVc4VixXQUFYLEVBQXdCRixTQUFTQSxTQUFTL1UsTUFBVCxHQUFrQixDQUEzQixDQUF4QixDQUFILEVBQTJEO0FBQ3pELDRCQUFFbUIsSUFBRixDQUFPK1QsVUFBUCxFQUFtQixVQUFTck0sSUFBVCxFQUFlO0FBQ2hDLGlCQUFHZ00sY0FBY2hNLElBQWQsS0FBdUJpQixLQUExQixFQUFpQztBQUMvQmpCLG9CQUFLN0osU0FBTCxHQUFpQixNQUFqQjtBQUNEO0FBQ0YsWUFKRDtBQUtELFVBTkQsTUFNTztBQUNMLDRCQUFFbUMsSUFBRixDQUFPK1QsVUFBUCxFQUFtQixVQUFTck0sSUFBVCxFQUFlO0FBQ2hDLGlCQUFHZ00sY0FBY2hNLElBQWQsS0FBdUJpQixLQUExQixFQUFpQztBQUMvQmpCLG9CQUFLN0osU0FBTCxHQUFpQixPQUFqQjtBQUNBOEMsdUJBQVE4QyxlQUFSLENBQXdCOUMsUUFBUXFDLE1BQVIsQ0FBZTBFLEtBQUtQLEdBQXBCLENBQXhCLEVBQWtEeEcsUUFBUTZFLEtBQTFELEVBQWlFaUMsR0FBakU7QUFDRDtBQUNGLFlBTEQ7QUFNRDtBQUNGLFFBdEJEO0FBdUJELE1BekJEO0FBMEJBO0FBQ0EsU0FBSWpDLFFBQVE3RSxRQUFROEMsZUFBUixDQUF3QjlDLFFBQVFxQyxNQUFSLENBQWV3USxjQUFjck0sR0FBN0IsQ0FBeEIsRUFBMkR4RyxRQUFRNkUsS0FBbkUsRUFBMEU2QixHQUExRSxFQUFaO0FBQ0Esc0JBQUVySCxJQUFGLENBQU93VCxjQUFjM0wsS0FBckIsRUFBNEIsVUFBUzRGLElBQVQsRUFBZTtBQUN6QyxXQUFJdEcsTUFBTXhHLFFBQVFxQyxNQUFSLENBQWV5SyxLQUFLdEcsR0FBcEIsQ0FBVjtBQUNBLFdBQUl3TSxZQUFZaFQsUUFBUXFDLE1BQVIsQ0FBZXlRLFlBQVl0TSxHQUEzQixDQUFoQjtBQUNBLFdBQUdBLFFBQVF3TSxTQUFYLEVBQXNCO0FBQ3RCLHdCQUFFM1QsSUFBRixDQUFPd0YsS0FBUCxFQUFjLFVBQVN3TyxJQUFULEVBQWVyVixDQUFmLEVBQWtCO0FBQzlCLGFBQUlzVixhQUFhdFQsUUFBUXVFLGFBQVIsQ0FBc0JpQyxHQUF0QixFQUEyQnhJLENBQTNCLENBQWpCO0FBQ0EsYUFBSXVWLGtCQUFrQixxQkFBVzNLLEtBQVgsQ0FBaUIwSyxVQUFqQixDQUF0QjtBQUNBLGFBQUlKLG1CQUFtQmxULFFBQVF1RSxhQUFSLENBQXNCeU8sU0FBdEIsRUFBaUNoVixDQUFqQyxDQUF2QjtBQUNBLGFBQUl3VixjQUFjeFQsUUFBUThDLGVBQVIsQ0FBd0JvUSxnQkFBeEIsRUFBMENsVCxRQUFRNkUsS0FBbEQsQ0FBbEI7QUFDQSxhQUFJc08sY0FBY0ssWUFBWTlNLEdBQVosRUFBbEI7QUFDQSxhQUFJK00sWUFBWXpULFFBQVE4QyxlQUFSLENBQXdCd1EsVUFBeEIsRUFBb0N0VCxRQUFRNkUsS0FBNUMsRUFBbUQ2QixHQUFuRCxFQUFoQjtBQUNBLGFBQUcrTSxhQUFhLENBQUMsaUJBQUVwVyxRQUFGLENBQVc4VixXQUFYLEVBQXdCSSxnQkFBZ0JBLGdCQUFnQnJWLE1BQWhCLEdBQXlCLENBQXpDLENBQXhCLENBQWpCLEVBQXVGO0FBQ3JGLGVBQUcsQ0FBQ2lWLFdBQUosRUFBaUI7QUFDZkEsMkJBQWMsRUFBZDtBQUNEO0FBQ0RBLHVCQUFZN1csSUFBWixDQUFpQmlYLGdCQUFnQkEsZ0JBQWdCclYsTUFBaEIsR0FBeUIsQ0FBekMsQ0FBakI7QUFDQXNWLHVCQUFZMU0sR0FBWixDQUFnQnFNLFdBQWhCO0FBQ0Q7QUFDRixRQWREO0FBZUQsTUFuQkQ7QUFvQkE7QUFDQSxTQUFJL04sV0FBV3BGLFFBQVFzQyxTQUFSLENBQWtCdVEsY0FBY3JNLEdBQWhDLEVBQXFDakcsT0FBcEQ7QUFDQSxzQkFBRWxCLElBQUYsQ0FBTytGLFFBQVAsRUFBaUIsVUFBU2lPLElBQVQsRUFBZXJWLENBQWYsRUFBa0I7QUFDakMsV0FBSWdWLFlBQVloVCxRQUFRcUMsTUFBUixDQUFleVEsWUFBWXRNLEdBQTNCLENBQWhCO0FBQ0EsV0FBSTBNLG1CQUFtQmxULFFBQVF1RSxhQUFSLENBQXNCeU8sU0FBdEIsRUFBaUNoVixDQUFqQyxDQUF2QjtBQUNBLFdBQUl3VixjQUFjeFQsUUFBUThDLGVBQVIsQ0FBd0JvUSxnQkFBeEIsRUFBMENsVCxRQUFRNkUsS0FBbEQsQ0FBbEI7QUFDQSxXQUFJc08sY0FBY0ssWUFBWTlNLEdBQVosRUFBbEI7QUFDQSx3QkFBRXJILElBQUYsQ0FBT2dVLElBQVAsRUFBYSxVQUFTeEosR0FBVCxFQUFjckQsR0FBZCxFQUFtQjtBQUM5QixhQUFHLENBQUMyTSxXQUFKLEVBQWlCO0FBQ2ZBLHlCQUFjLEVBQWQ7QUFDRDtBQUNEQSxxQkFBWTdXLElBQVosQ0FBaUJrSyxHQUFqQjtBQUNBZ04scUJBQVkxTSxHQUFaLENBQWdCcU0sV0FBaEI7QUFDRCxRQU5EO0FBT0QsTUFaRDtBQWFBO0FBQ0EsU0FBSU8sUUFBUSxDQUFaO0FBQ0EsU0FBSUMsU0FBUyxpQkFBRTNGLEtBQUYsQ0FBUSxpQkFBRTlGLE1BQUYsQ0FBUzJLLGNBQWMzTCxLQUF2QixFQUE4QixFQUFDLGFBQVksT0FBYixFQUE5QixDQUFSLEVBQThELEtBQTlELENBQWI7QUFDQSxTQUFJME0sT0FBTzFTLFdBQVdzTSxHQUFYLENBQWUsd0JBQWYsRUFBeUMsVUFBU0MsS0FBVCxFQUFnQmpILEdBQWhCLEVBQXFCO0FBQ3ZFLFdBQUkzQixRQUFRN0UsUUFBUThDLGVBQVIsQ0FBd0I5QyxRQUFRcUMsTUFBUixDQUFld1EsY0FBY3JNLEdBQTdCLENBQXhCLEVBQTJEeEcsUUFBUTZFLEtBQW5FLEVBQTBFNkIsR0FBMUUsRUFBWjtBQUNBLFdBQUc3QixLQUFILEVBQVU7QUFDUixhQUFJNEQsUUFBUTVELE1BQU0zRyxNQUFOLEdBQWdCeVYsT0FBT3pWLE1BQW5DO0FBQ0EsYUFBRyxpQkFBRWIsUUFBRixDQUFXc1csTUFBWCxFQUFtQm5OLEdBQW5CLENBQUgsRUFBNEI7QUFDMUJrTjtBQUNEO0FBQ0QsYUFBR0EsVUFBVWpMLEtBQWIsRUFBb0I7QUFDbEIsZ0JBQUssSUFBSXpLLElBQUksQ0FBYixFQUFnQkEsSUFBSTZHLE1BQU0zRyxNQUExQixFQUFrQ0YsR0FBbEMsRUFBdUM7QUFDckMrQixxQkFBUSxJQUFSLEVBQWMsSUFBZCxFQUFvQixNQUFNL0IsQ0FBTixHQUFVLEdBQTlCO0FBQ0Q7QUFDRDBWLG1CQUFRLENBQVI7QUFDRDtBQUNGO0FBQ0YsTUFkVSxDQUFYO0FBZUEsU0FBSUcsYUFBYTNTLFdBQVdzTSxHQUFYLENBQWUscUJBQWYsRUFBc0MsWUFBVztBQUNoRWtHLGVBQVEsQ0FBUjtBQUNELE1BRmdCLENBQWpCO0FBR0ExVCxhQUFRc0YsTUFBUixDQUFlaEosSUFBZixDQUFvQnNYLElBQXBCO0FBQ0E1VCxhQUFRc0YsTUFBUixDQUFlaEosSUFBZixDQUFvQnVYLFVBQXBCO0FBQ0EsWUFBTzlULE9BQVA7QUFDRDs7QUFFRCxZQUFTMkUsa0JBQVQsQ0FBNEJtTyxhQUE1QixFQUEyQ0MsV0FBM0MsRUFBd0Q7QUFDdEQsU0FBSTlTLFVBQVUsSUFBZDtBQUNBLFNBQUlELFVBQVUsU0FBVkEsT0FBVSxHQUFXO0FBQ3ZCLFdBQUlpVCxZQUFZaFQsUUFBUXFDLE1BQVIsQ0FBZXlRLFlBQVl0TSxHQUEzQixDQUFoQjtBQUNBLHdCQUFFbkgsSUFBRixDQUFPd1QsY0FBYzNMLEtBQXJCLEVBQTRCLFVBQVM0RixJQUFULEVBQWU7QUFDekMsYUFBSXRHLE1BQU14RyxRQUFRcUMsTUFBUixDQUFleUssS0FBS3RHLEdBQXBCLENBQVY7QUFDQSxhQUFJeU0sV0FBVyxxQkFBV3JLLEtBQVgsQ0FBaUJwQyxHQUFqQixDQUFmO0FBQ0EsYUFBR3dNLGNBQWN4TSxHQUFqQixFQUFzQjtBQUN0QixhQUFJMk0sY0FBY25ULFFBQVE4QyxlQUFSLENBQXdCa1EsU0FBeEIsRUFBbUNoVCxRQUFRNkUsS0FBM0MsRUFBa0Q2QixHQUFsRCxFQUFsQjtBQUNBLGFBQUcsaUJBQUVySixRQUFGLENBQVc4VixXQUFYLEVBQXdCRixTQUFTQSxTQUFTL1UsTUFBVCxHQUFrQixDQUEzQixDQUF4QixDQUFILEVBQTJEO0FBQ3pENE8sZ0JBQUs1UCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0QsVUFGRCxNQUVPO0FBQ0w0UCxnQkFBSzVQLFNBQUwsR0FBaUIsT0FBakI7QUFDQThDLG1CQUFROEMsZUFBUixDQUF3QjBELEdBQXhCLEVBQTZCeEcsUUFBUTZFLEtBQXJDLEVBQTRDaUMsR0FBNUM7QUFDRDtBQUNGLFFBWEQ7QUFZRCxNQWREO0FBZUE7QUFDQSxTQUFJa00sWUFBWWhULFFBQVFxQyxNQUFSLENBQWV5USxZQUFZdE0sR0FBM0IsQ0FBaEI7QUFDQSxTQUFJZ04sY0FBY3hULFFBQVE4QyxlQUFSLENBQXdCa1EsU0FBeEIsRUFBbUNoVCxRQUFRNkUsS0FBM0MsQ0FBbEI7QUFDQSxTQUFJc08sY0FBY0ssWUFBWTlNLEdBQVosRUFBbEI7QUFDQSxzQkFBRXJILElBQUYsQ0FBT3dULGNBQWMzTCxLQUFyQixFQUE0QixVQUFTNEYsSUFBVCxFQUFlO0FBQ3pDLFdBQUl0RyxNQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZXlLLEtBQUt0RyxHQUFwQixDQUFWO0FBQ0EsV0FBR3dNLGNBQWN4TSxHQUFqQixFQUFzQjtBQUN0QixXQUFJeU0sV0FBVyxxQkFBV3JLLEtBQVgsQ0FBaUJwQyxHQUFqQixDQUFmO0FBQ0EsV0FBSWlOLFlBQVl6VCxRQUFROEMsZUFBUixDQUF3QjBELEdBQXhCLEVBQTZCeEcsUUFBUTZFLEtBQXJDLEVBQTRDNkIsR0FBNUMsRUFBaEI7QUFDQSxXQUFHK00sYUFBYSxDQUFDLGlCQUFFcFcsUUFBRixDQUFXOFYsV0FBWCxFQUF3QkYsU0FBU0EsU0FBUy9VLE1BQVQsR0FBa0IsQ0FBM0IsQ0FBeEIsQ0FBakIsRUFBeUU7QUFDdkUsYUFBRyxDQUFDaVYsV0FBSixFQUFpQjtBQUNmQSx5QkFBYyxFQUFkO0FBQ0Q7QUFDREEscUJBQVk3VyxJQUFaLENBQWlCMlcsU0FBU0EsU0FBUy9VLE1BQVQsR0FBa0IsQ0FBM0IsQ0FBakI7QUFDQXNWLHFCQUFZMU0sR0FBWixDQUFnQnFNLFdBQWhCO0FBQ0Q7QUFDRixNQVpEO0FBYUE7QUFDQSxTQUFJL04sV0FBV3BGLFFBQVFzQyxTQUFSLENBQWtCdVEsY0FBY3JNLEdBQWhDLEVBQXFDakcsT0FBcEQ7QUFDQSxzQkFBRWxCLElBQUYsQ0FBTytGLFFBQVAsRUFBaUIsVUFBU3lFLEdBQVQsRUFBY3JELEdBQWQsRUFBbUI7QUFDbEMsV0FBRyxDQUFDMk0sV0FBSixFQUFpQjtBQUNmQSx1QkFBYyxFQUFkO0FBQ0Q7QUFDREEsbUJBQVk3VyxJQUFaLENBQWlCa0ssR0FBakI7QUFDQWdOLG1CQUFZMU0sR0FBWixDQUFnQnFNLFdBQWhCO0FBQ0QsTUFORDtBQU9BO0FBQ0EsU0FBSXRPLFFBQVE3RSxRQUFROEMsZUFBUixDQUF3QitQLGNBQWNyTSxHQUF0QyxFQUEyQ3hHLFFBQVE2RSxLQUFuRCxDQUFaO0FBQ0EsU0FBR08sWUFBWSxDQUFDUCxNQUFNNkIsR0FBTixFQUFoQixFQUE2QjtBQUMzQjdCLGFBQU1pQyxHQUFOLENBQVUxQixRQUFWO0FBQ0Q7O0FBRUQsWUFBT3JGLE9BQVA7QUFDRDs7QUFFRCxZQUFTNEUsa0JBQVQsQ0FBNEJtUCxPQUE1QixFQUFxQztBQUNuQyxTQUFJOVQsVUFBVSxJQUFkO0FBQ0FBLGFBQVF5SixhQUFSLEdBQXdCLGlCQUFFc0ssUUFBRixDQUFXLFVBQVN0VCxZQUFULEVBQXVCO0FBQ3hELFdBQUlrRixTQUFTLGlCQUFFQyxNQUFGLENBQVM1SixpQkFBaUJRLGNBQWpCLEVBQVQsRUFBNEN3RCxRQUFRMkYsTUFBcEQsQ0FBYjtBQUNBLFdBQUlxTyxPQUFPNVMsT0FBTzRTLElBQVAsQ0FBWWhVLFFBQVF2QyxNQUFSLENBQWVrSSxNQUEzQixFQUFtQ0EsTUFBbkMsRUFBMkMsSUFBM0MsQ0FBWDtBQUNBLFdBQUlpQyxJQUFKOztBQUVBLFdBQUdvTSxRQUFRdlQsWUFBWCxFQUF5QjtBQUN2QixhQUFHQSxZQUFILEVBQWlCa0YsT0FBT2xGLFlBQVAsR0FBc0JBLFlBQXRCLENBQWpCLEtBQ0s7QUFDSG1ILGtCQUFPLGlCQUFFQSxJQUFGLENBQU9vTSxJQUFQLENBQVA7O0FBRUEsZUFBR3BNLEtBQUsxSixNQUFMLEdBQWMsQ0FBakIsRUFBb0I7QUFDbEI4VixvQkFBTyxpQkFBRXJYLElBQUYsQ0FBT3FYLElBQVAsRUFBYSxpQkFBRWxYLE1BQWYsQ0FBUDtBQUNBOEssb0JBQU8saUJBQUVBLElBQUYsQ0FBT29NLElBQVAsQ0FBUDtBQUNEOztBQUVEck8sa0JBQU9sRixZQUFQLEdBQXNCLGlCQUFFNkYsS0FBRixDQUFRc0IsSUFBUixDQUF0QjtBQUNEOztBQUVELGFBQUcsQ0FBQ2pDLE9BQU9sRixZQUFYLEVBQXlCO0FBQ3ZCdVQsa0JBQU81UyxPQUFPNFMsSUFBUCxDQUFZck8sTUFBWixFQUFvQixpQkFBRWhKLElBQUYsQ0FBT3FELFFBQVF2QyxNQUFSLENBQWVrSSxNQUF0QixFQUE4QixjQUE5QixDQUFwQixDQUFQO0FBQ0FpQyxrQkFBTyxpQkFBRUEsSUFBRixDQUFPb00sSUFBUCxDQUFQOztBQUVBck8sa0JBQU9sRixZQUFQLEdBQXNCLGlCQUFFNkYsS0FBRixDQUFRc0IsSUFBUixDQUF0QjtBQUNEOztBQUVEa00saUJBQVFuTyxNQUFSLEVBQWdCc08sSUFBaEIsQ0FBcUIsVUFBU3hXLE1BQVQsRUFBaUI7QUFDcEMsYUFBRXVDLFFBQVEwRixPQUFWO0FBQ0E7QUFDQTFGLG1CQUFRaUUsb0JBQVIsQ0FBNkJ4RyxNQUE3QjtBQUNELFVBSkQ7QUFLRDtBQUNGLE1BL0J1QixFQStCckIsR0EvQnFCLENBQXhCOztBQWlDQXVDLGFBQVFrVSxXQUFSLEdBQXNCLGlCQUFFSCxRQUFGLENBQVcsWUFBVztBQUMxQ0QsZUFBUSxpQkFBRWxPLE1BQUYsQ0FBUzVGLFFBQVF2QyxNQUFSLENBQWVrSSxNQUF4QixFQUFnQyxFQUFDbEYsY0FBYyxhQUFmLEVBQWhDLENBQVIsRUFBd0V3VCxJQUF4RSxDQUE2RSxVQUFTeFcsTUFBVCxFQUFpQjtBQUM1RnVDLGlCQUFRaUUsb0JBQVIsQ0FBNkJ4RyxNQUE3QjtBQUNELFFBRkQ7QUFHRCxNQUpxQixFQUluQixHQUptQixDQUF0Qjs7QUFNQXVDLGFBQVFzRixNQUFSLENBQWVoSixJQUFmLENBQW9CNEUsV0FBV3NNLEdBQVgsQ0FBZSxlQUFmLEVBQWdDeE4sUUFBUWtVLFdBQXhDLENBQXBCO0FBQ0Q7O0FBRUQsWUFBU2pRLG9CQUFULENBQThCeEcsTUFBOUIsRUFBc0M7QUFDcEMsU0FBSXVDLFVBQVUsSUFBZDtBQUNBLFNBQUd2QyxPQUFPdVcsSUFBVixFQUFnQjtBQUNkaFUsZUFBUXZDLE1BQVIsQ0FBZWtJLE1BQWYsR0FBd0JsSSxPQUFPa0ksTUFBL0I7O0FBRUEsV0FBR2xJLE9BQU91VyxJQUFQLENBQVk5VSxJQUFmLEVBQXFCO0FBQ25CZ0Msb0JBQVdpSCxVQUFYLENBQXNCLHFCQUF0QixFQUE2QzFLLE9BQU91VyxJQUFQLENBQVk5VSxJQUF6RDtBQUNBLDBCQUFFRyxJQUFGLENBQU81QixPQUFPdVcsSUFBUCxDQUFZOVUsSUFBbkIsRUFBeUIsVUFBQ0EsSUFBRCxFQUFPWSxJQUFQLEVBQWdCO0FBQ3ZDLGVBQUdaLFFBQVFBLEtBQUtBLElBQWIsSUFBcUIsQ0FBQyxpQkFBRW1KLE9BQUYsQ0FBVXJJLFFBQVF2QyxNQUFSLENBQWV5QixJQUFmLENBQW9CWSxJQUFwQixFQUEwQlosSUFBcEMsQ0FBdEIsSUFBbUUsQ0FBQ0EsS0FBS2lWLEtBQTVFLEVBQW1GO0FBQ2pGalYsa0JBQUtBLElBQUwsR0FBWWMsUUFBUXZDLE1BQVIsQ0FBZXlCLElBQWYsQ0FBb0JZLElBQXBCLEVBQTBCWixJQUExQixDQUErQjBQLE1BQS9CLENBQXNDMVAsS0FBS0EsSUFBM0MsQ0FBWjtBQUNEO0FBQ0RjLG1CQUFRdkMsTUFBUixDQUFleUIsSUFBZixDQUFvQlksSUFBcEIsSUFBNEJaLElBQTVCO0FBQ0EsZUFBR2MsUUFBUXlGLGVBQVIsQ0FBd0IzRixJQUF4QixDQUFILEVBQWtDO0FBQ2hDLDhCQUFFVCxJQUFGLENBQU9XLFFBQVF5RixlQUFSLENBQXdCM0YsSUFBeEIsQ0FBUCxFQUFzQyxVQUFDc1UsU0FBRCxFQUFlO0FBQ25EQSx5QkFBVWpOLE9BQVYsQ0FBa0Isb0JBQVk7QUFDNUJuSCx5QkFBUXVDLGFBQVIsQ0FBc0JvSCxTQUFTeE0sS0FBL0IsRUFBc0N3TSxTQUFTN0osSUFBL0MsbUJBQW9FQSxJQUFwRTtBQUNELGdCQUZEO0FBR0QsY0FKRDtBQUtEO0FBQ0YsVUFaRDtBQWFEOztBQUVELFdBQUk4SCxPQUFPLEVBQVg7O0FBRUEsV0FBR25LLE9BQU91VyxJQUFQLENBQVl2VyxNQUFmLEVBQXVCO0FBQ3JCeUQsb0JBQVdpSCxVQUFYLENBQXNCLHVCQUF0QixFQUErQzFLLE9BQU91VyxJQUFQLENBQVl2VyxNQUEzRDtBQUNBLDBCQUFFNEIsSUFBRixDQUFPNUIsT0FBT3VXLElBQVAsQ0FBWXZXLE1BQW5CLEVBQTJCLFVBQVNBLE1BQVQsRUFBaUIrSSxHQUFqQixFQUFzQjtBQUMvQ3hHLG1CQUFRdkMsTUFBUixDQUFlQSxNQUFmLENBQXNCb0wsVUFBdEIsQ0FBaUNyQyxHQUFqQyxJQUF3Qy9JLE1BQXhDO0FBQ0E0VywyQkFBZ0I1VyxNQUFoQixFQUF3QitJLEdBQXhCLEVBQTZCb0IsSUFBN0I7QUFDRCxVQUhEO0FBSUQ7O0FBRUQsV0FBR25LLE9BQU91VyxJQUFQLENBQVlsTyxJQUFmLEVBQXFCO0FBQ25CNUUsb0JBQVdpSCxVQUFYLENBQXNCLHFCQUF0QixFQUE2QzFLLE9BQU91VyxJQUFQLENBQVlsTyxJQUF6RDtBQUNBLDBCQUFFekcsSUFBRixDQUFPNUIsT0FBT3VXLElBQVAsQ0FBWWxPLElBQW5CLEVBQXlCLFVBQVNBLElBQVQsRUFBZTs7QUFFdEMsZUFBRzhCLEtBQUt5QixPQUFMLENBQWF2RCxLQUFLVSxHQUFsQixNQUEyQixDQUFDLENBQS9CLEVBQWtDO0FBQ2hDb0Isa0JBQUt0TCxJQUFMLENBQVV3SixLQUFLVSxHQUFmO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGVBQUk4TixTQUFTdFUsUUFBUW9DLGdCQUFSLENBQXlCMEQsS0FBS1UsR0FBOUIsQ0FBYjtBQUNBLGVBQUc4TixNQUFILEVBQVc7QUFDVHRVLHFCQUFRc0UsY0FBUixDQUF1QmdRLE1BQXZCLEVBQStCeE8sSUFBL0I7QUFDRDtBQUNELGVBQUkrSCxTQUFTN04sUUFBUWdDLGNBQVIsQ0FBdUI4RCxLQUFLVSxHQUE1QixDQUFiO0FBQ0EsZUFBR3FILE1BQUgsRUFBVztBQUNUQSxvQkFBTzFHLE9BQVAsQ0FBZTtBQUFBLHNCQUFRSixRQUFRL0csUUFBUXNFLGNBQVIsQ0FBdUJ5QyxJQUF2QixFQUE2QmpCLElBQTdCLENBQWhCO0FBQUEsY0FBZjtBQUNEO0FBQ0YsVUFsQkQ7QUFtQkQ7O0FBRUQsV0FBRzhCLEtBQUsxSixNQUFSLEVBQWdCO0FBQ2QsMEJBQUVtQixJQUFGLENBQU91SSxJQUFQLEVBQWEsVUFBU3BCLEdBQVQsRUFBYztBQUN6QixlQUFJVixPQUFPOUYsUUFBUW9DLGdCQUFSLENBQXlCb0UsR0FBekIsQ0FBWDtBQUNBLGVBQUdWLElBQUgsRUFBUzlGLFFBQVFpRCxZQUFSLENBQXFCNkMsSUFBckI7QUFDVCxlQUFHVSxJQUFJbkosUUFBSixDQUFhLElBQWIsQ0FBSCxFQUF1QjtBQUNyQixpQkFBSXdRLFNBQVM3TixRQUFRZ0MsY0FBUixDQUF1QndFLEdBQXZCLENBQWI7QUFDQSw4QkFBRW5ILElBQUYsQ0FBT3dPLE1BQVAsRUFBZSxVQUFTOUcsSUFBVCxFQUFlO0FBQzVCLG1CQUFHQSxJQUFILEVBQVMvRyxRQUFRaUQsWUFBUixDQUFxQjhELElBQXJCO0FBQ1YsY0FGRDtBQUdEO0FBQ0YsVUFURDtBQVVEOztBQUVEL0csZUFBUTJCLGVBQVI7QUFDRCxNQW5FRCxNQW9FSztBQUNIM0IsZUFBUVMsWUFBUixDQUFxQmhELE1BQXJCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFTNkcsY0FBVCxDQUF3QmlRLE9BQXhCLEVBQWlDeEosTUFBakMsRUFBeUN5SixPQUF6QyxFQUFrRDtBQUNoRCxTQUFJeFUsVUFBVSxJQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQUcsQ0FBQytLLE9BQU83TixTQUFSLElBQXFCcVgsUUFBUXJYLFNBQWhDLEVBQTJDNk4sT0FBTzdOLFNBQVAsR0FBbUIsTUFBbkI7QUFDM0MsU0FBSXVYLFNBQVMsQ0FBQ0QsT0FBRCxJQUFZRCxRQUFRclgsU0FBUixLQUFzQjZOLE9BQU83TixTQUF0RDs7QUFFQSxzQkFBRTBJLE1BQUYsQ0FBUzJPLE9BQVQsRUFBa0IsaUJBQUU1WCxJQUFGLENBQU9vTyxNQUFQLEVBQWUsT0FBZixFQUF3QixLQUF4QixDQUFsQjs7QUFFQXdKLGFBQVE3TSxPQUFSLENBQWdCUCxPQUFoQixDQUF3QixlQUFPO0FBQzdCLFdBQUcsQ0FBQzRELE9BQU92RSxHQUFQLENBQUosRUFBaUIsT0FBTytOLFFBQVEvTixHQUFSLENBQVA7QUFDbEIsTUFGRDtBQUdBK04sYUFBUTdNLE9BQVIsR0FBa0IsaUJBQUVFLElBQUYsQ0FBT21ELE1BQVAsQ0FBbEI7O0FBRUEvSyxhQUFROEIsa0JBQVIsQ0FBMkJpSixPQUFPdkUsR0FBbEM7O0FBRUF0RixnQkFBV2lILFVBQVgsQ0FBc0IsMEJBQXRCLEVBQWtENEMsT0FBT3ZFLEdBQXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBR2lPLFVBQVVGLFFBQVFFLE1BQXJCLEVBQTZCRixRQUFRRSxNQUFSO0FBQzlCOztBQUVELFlBQVNKLGVBQVQsQ0FBeUI1VyxNQUF6QixFQUFpQytJLEdBQWpDLEVBQXNDb0IsSUFBdEMsRUFBNEM7QUFDMUNBLFVBQUt0TCxJQUFMLENBQVVrSyxHQUFWO0FBQ0EsU0FBRy9JLE9BQU9vTCxVQUFWLEVBQXNCO0FBQ3BCLHdCQUFFeEosSUFBRixDQUFPNUIsT0FBT29MLFVBQWQsRUFBMEIsVUFBU3BMLE1BQVQsRUFBaUJpWCxNQUFqQixFQUF5QjtBQUNqREwseUJBQWdCNVcsTUFBaEIsRUFBd0IrSSxNQUFNLEdBQU4sR0FBWWtPLE1BQXBDLEVBQTRDOU0sSUFBNUM7QUFDRCxRQUZEO0FBR0Q7QUFDRCxTQUFHbkssT0FBT3lKLEtBQVAsSUFBZ0J6SixPQUFPeUosS0FBUCxDQUFhMkIsVUFBaEMsRUFBNEM7QUFDMUMsd0JBQUV4SixJQUFGLENBQU81QixPQUFPb0wsVUFBZCxFQUEwQixVQUFTcEwsTUFBVCxFQUFpQmlYLE1BQWpCLEVBQXlCO0FBQ2pETCx5QkFBZ0I1VyxNQUFoQixFQUF3QitJLE1BQU0sS0FBTixHQUFja08sTUFBdEMsRUFBOEM5TSxJQUE5QztBQUNELFFBRkQ7QUFHRDtBQUNGOztBQUVELFlBQVNoRyxVQUFULENBQW9CekUsS0FBcEIsRUFBMkI7QUFDekIsU0FBSTZDLFVBQVUsSUFBZDtBQUNBLFNBQUl3RyxNQUFNeEcsUUFBUXFDLE1BQVIsQ0FBZWxGLE1BQU1xSixHQUFyQixDQUFWO0FBQ0EsWUFBTztBQUNMQSxZQUFLQSxHQURBO0FBRUxtTyxnQkFBU3hYLE1BQU1pTDtBQUZWLE1BQVA7QUFJRDs7QUFFRCxZQUFTekcsZUFBVCxHQUEyQjtBQUN6QixTQUFJM0IsVUFBVSxJQUFkO0FBQ0FtQixjQUFTLFlBQVc7QUFDbEJuQixlQUFRcUYsTUFBUixDQUFlOEIsT0FBZixDQUF1QixVQUFTaUIsS0FBVCxFQUFnQjtBQUNyQ2xILG9CQUFXaUgsVUFBWCxDQUFzQixzQkFBc0JDLE1BQU01QixHQUFsRCxFQUF1RCxrQkFBdkQsRUFBMkU0QixNQUFNdU0sT0FBakY7QUFDRCxRQUZEO0FBR0QsTUFKRCxFQUlHLENBSkg7QUFLRDs7QUFFRCxZQUFTL0osaUJBQVQsQ0FBMkI3QixPQUEzQixFQUFvQ3ZDLEdBQXBDLEVBQXlDO0FBQ3ZDLFNBQUcsQ0FBQ3VDLFFBQVExTCxRQUFSLENBQWlCLFlBQWpCLENBQUosRUFBb0MsT0FBTzBMLE9BQVA7QUFDcEMsU0FBSTZMLGdCQUFnQix3QkFBd0JDLElBQXhCLENBQTZCOUwsT0FBN0IsQ0FBcEI7QUFDQSxTQUFJK0wsS0FBSyxJQUFJQyxNQUFKLENBQVdILGNBQWMsQ0FBZCxJQUFtQixjQUE5QixDQUFUO0FBQ0EsU0FBSTVNLFFBQVE4TSxHQUFHRCxJQUFILENBQVFyTyxHQUFSLENBQVo7QUFDQSxZQUFPdUMsUUFBUU8sT0FBUixDQUFnQixJQUFJeUwsTUFBSixDQUFXSCxjQUFjLENBQWQsRUFBaUJ0TCxPQUFqQixDQUF5QixVQUF6QixFQUFxQyxNQUFyQyxDQUFYLEVBQXlELEdBQXpELENBQWhCLEVBQStFdEIsTUFBTSxDQUFOLENBQS9FLENBQVA7QUFDRDs7QUFFRCxZQUFTK0ssYUFBVCxDQUF1QnZNLEdBQXZCLEVBQTRCO0FBQzFCLFNBQUcsaUJBQUU2RixRQUFGLENBQVc3RixHQUFYLENBQUgsRUFBb0I7QUFDbEIsY0FBTyxpQkFBRXlCLElBQUYsQ0FBT3pCLElBQUlBLEdBQVgsRUFBZ0IsVUFBU0EsR0FBVCxFQUFjO0FBQ25DLGdCQUFPLGlCQUFFd08sUUFBRixDQUFXeE8sR0FBWCxDQUFQO0FBQ0QsUUFGTSxDQUFQO0FBR0QsTUFKRCxNQUlPO0FBQ0wsY0FBTyxhQUFZcU8sSUFBWixDQUFpQnJPLEdBQWpCLEVBQXNCLENBQXRCO0FBQVA7QUFDRDtBQUNGOztBQUVELFlBQVNqQyxhQUFULENBQXVCaUMsR0FBdkIsRUFBNEJ3QixLQUE1QixFQUFtQ2lOLE9BQW5DLEVBQTRDO0FBQzFDLFNBQUlqVixVQUFVLElBQWQ7QUFDQSxTQUFJa1YsT0FBSjtBQUNBLFNBQUcsaUJBQUVqVyxRQUFGLENBQVd1SCxHQUFYLENBQUgsRUFBb0I7QUFDbEIwTyxpQkFBVSxxQkFBV3RNLEtBQVgsQ0FBaUJwQyxHQUFqQixDQUFWO0FBQ0QsTUFGRCxNQUVPO0FBQ0wwTyxpQkFBVSxpQkFBRUMsS0FBRixDQUFRM08sR0FBUixDQUFWO0FBQ0Q7QUFDRCxTQUFJNE8sZUFBZUYsUUFBUTdMLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBbkI7QUFDQTZMLGFBQVFFLFlBQVIsSUFBd0JwTixLQUF4Qjs7QUFFQSxTQUFHaU4sT0FBSCxFQUFZO0FBQ1YsY0FBT0MsT0FBUDtBQUNELE1BRkQsTUFFTztBQUNMLGNBQU9sVixRQUFRcUMsTUFBUixDQUFlNlMsT0FBZixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFTclQsT0FBVCxHQUFtQjtBQUNqQixTQUFJN0IsVUFBVSxJQUFkO0FBQ0Esc0JBQUVYLElBQUYsQ0FBT1csUUFBUXNGLE1BQWYsRUFBdUIsVUFBUytILFFBQVQsRUFBbUI7QUFDeENBO0FBQ0QsTUFGRDtBQUdEO0FBQ0Y7O0FBRUQ7QUFDSTtBQUNBOzttQkFFV3ZPLHlCOzs7Ozs7QUNockRmLG9DOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNdVcsV0FBVyxFQUFqQjtBQUNBLEtBQU1DLGFBQWEsRUFBbkI7O0FBRUEsVUFBU0MsV0FBVCxDQUFxQjlXLEtBQXJCLEVBQTRCO0FBQzFCLE9BQUc2VyxXQUFXN1csS0FBWCxDQUFILEVBQXNCLE9BQU82VyxXQUFXN1csS0FBWCxDQUFQOztBQUV0QixPQUFNK1csVUFBVSxFQUFoQjtBQUNBRixjQUFXN1csS0FBWCxJQUFvQitXLE9BQXBCO0FBQ0EsVUFBT0EsT0FBUDtBQUNEOztBQUVELFVBQVNDLFVBQVQsQ0FBb0JoWCxLQUFwQixFQUEyQjhPLEVBQTNCLEVBQStCbUksRUFBL0IsRUFBbUM7QUFDakMsT0FBTUMsV0FBV0osWUFBWTlXLEtBQVosQ0FBakI7QUFDQSxPQUFHa1gsU0FBU3BJLEVBQVQsQ0FBSCxFQUFpQixPQUFPb0ksU0FBU3BJLEVBQVQsQ0FBUDs7QUFFakIsT0FBTWlJLFVBQVVFLEdBQUdFLEtBQUgsRUFBaEI7QUFDQUQsWUFBU3BJLEVBQVQsSUFBZWlJLE9BQWY7QUFDQSxVQUFPQSxPQUFQO0FBQ0Q7O0FBRUQsVUFBU0ssb0NBQVQsR0FBZ0Q7QUFDOUNDLFVBQU83WixPQUFQLEdBQWlCLENBQUMsY0FBRCxFQUFpQixJQUFqQixDQUFqQjs7QUFFQSxVQUFPO0FBQ0wyRSwyQkFESztBQUVMeEUsV0FBTTJaO0FBRkQsSUFBUDs7QUFLQTs7QUFFQSxZQUFTblYsVUFBVCxDQUFvQm5DLEtBQXBCLEVBQTJCdVgsR0FBM0IsRUFBZ0M7QUFDOUJBLFNBQUlqTixPQUFKLEdBQWMsRUFBRStNLGNBQUYsRUFBZDtBQUNBVCxjQUFTNVcsS0FBVCxJQUFrQnVYLEdBQWxCO0FBQ0Q7O0FBRUQsWUFBU0YsTUFBVCxDQUFnQnZaLFlBQWhCLEVBQThCbVosRUFBOUIsRUFBa0M7QUFDaEMsWUFDRUQsV0FBV2xaLGFBQWEwWixLQUF4QixFQUErQjFaLGFBQWEyWixPQUE1QyxFQUFxRFIsRUFBckQsRUFDQ0YsT0FERCxDQUVDdkIsSUFGRCxDQUVNO0FBQUEsV0FBRzZCLE1BQUgsUUFBR0EsTUFBSDtBQUFBLGNBQWdCQSxNQUFoQjtBQUFBLE1BRk4sQ0FERjtBQUtEO0FBQ0Y7O0FBRURDLDhCQUE2QjlaLE9BQTdCLEdBQXVDLENBQUMsY0FBRCxFQUFpQixJQUFqQixDQUF2Qzs7QUFFQSxVQUFTOFosNEJBQVQsQ0FBc0N4WixZQUF0QyxFQUFvRG1aLEVBQXBELEVBQXdEOztBQUV0RCxVQUFPO0FBQ0xTLDJCQURLO0FBRUxDO0FBRkssSUFBUDs7QUFLQTs7QUFFQSxZQUFTQSxjQUFULENBQXdCM1gsS0FBeEIsRUFBK0I4TyxFQUEvQixFQUFtQ3VJLE1BQW5DLEVBQXlEO0FBQUEsU0FBZE8sT0FBYyx1RUFBSixFQUFJO0FBQUEsU0FDL0MzSSxLQUQrQyxHQUNyQzJJLE9BRHFDLENBQy9DM0ksS0FEK0M7O0FBRXZELFNBQUdBLEtBQUgsRUFBVTtBQUNSQSxhQUFNMkksT0FBTixHQUFnQjNJLE1BQU0ySSxPQUFOLElBQWlCLEVBQWpDO0FBQ0EzSSxhQUFNMkksT0FBTixDQUFjQyxlQUFkLEdBQWdDLFFBQWhDO0FBQ0FqQixnQkFBUzVXLEtBQVQsRUFBZ0JpUCxLQUFoQixHQUF3QkEsS0FBeEI7QUFDRDtBQUNELFNBQU0yQyxJQUFJb0YsV0FBV2hYLEtBQVgsRUFBa0I4TyxFQUFsQixFQUFzQm1JLEVBQXRCLENBQVY7QUFDQXJGLE9BQUV0SCxPQUFGLENBQVUsRUFBRStNLGNBQUYsRUFBVU8sZ0JBQVYsRUFBVjtBQUNBLFlBQU9oRyxFQUFFbUYsT0FBVDtBQUNEOztBQUVELFlBQVNXLFVBQVQsQ0FBb0IxWCxLQUFwQixFQUEyQjtBQUN6QixTQUFNNFIsSUFBSXFGLEdBQUdFLEtBQUgsRUFBVjtBQUNBSCxnQkFBV2xaLGFBQWEwWixLQUF4QixFQUErQjFaLGFBQWEyWixPQUE1QyxFQUFxRFIsRUFBckQsRUFDR0YsT0FESCxDQUVHdkIsSUFGSCxDQUVRLGlCQUF5QjtBQUFBLFdBQXRCNkIsTUFBc0IsU0FBdEJBLE1BQXNCO0FBQUEsV0FBZE8sT0FBYyxTQUFkQSxPQUFjOztBQUM3QmhHLFNBQUV0SCxPQUFGLENBQVUsRUFBRXRLLE9BQU80VyxTQUFTNVcsS0FBVCxDQUFULEVBQTBCNFgsZ0JBQTFCLEVBQVY7QUFDQSxjQUFPUCxNQUFQO0FBQ0QsTUFMSDtBQU1BLFlBQU96RixFQUFFbUYsT0FBVDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDSTtBQUNBOzttQkFFV0ssb0M7Ozs7Ozs7Ozs7O0FDbkZmVSxxQkFBb0J0YSxPQUFwQixHQUE4QixDQUM1QixlQUQ0QixFQUNYLFFBRFcsRUFDRCxZQURDLEVBQ2EsY0FEYixDQUE5Qjs7QUFJQSxVQUFTc2EsbUJBQVQsQ0FBNkJDLGFBQTdCLEVBQTRDQyxNQUE1QyxFQUFvRHZWLFVBQXBELEVBQWdFM0UsWUFBaEUsRUFBOEU7O0FBRTVFLE9BQU1tYSxLQUFLLElBQVg7O0FBRUFDOztBQUVBOztBQUVBLFlBQVNBLFFBQVQsR0FBb0I7QUFDbEJILG1CQUNHSSxJQURILENBQ1FGLEVBRFIsRUFFR3pDLElBRkgsQ0FFUSxnQkFBdUM7QUFBQSxXQUFwQ2dDLEtBQW9DLFFBQXBDQSxLQUFvQztBQUFBLFdBQWxCWSxTQUFrQixRQUE3QlIsT0FBNkIsQ0FBbEJRLFNBQWtCOztBQUMzQ0gsVUFBR1QsS0FBSCxHQUFXQSxLQUFYO0FBQ0FTLFVBQUdULEtBQUgsQ0FBUzdLLE1BQVQsQ0FBZ0IwTCxPQUFoQixDQUF3QkMsTUFBeEI7QUFDQSxXQUFHRixTQUFILEVBQWNILEdBQUdULEtBQUgsQ0FBUzdLLE1BQVQsQ0FBZ0I0TCxLQUFoQixDQUFzQjtBQUFBLGdCQUFNSCxVQUFVdGEsYUFBYTBhLFVBQXZCLENBQU47QUFBQSxRQUF0QjtBQUNkUCxVQUFHUSxZQUFILEdBQWtCaFcsV0FBV3NNLEdBQVgsQ0FBZSxtQkFBZixFQUFvQzJKLFlBQXBDLENBQWxCO0FBQ0QsTUFQSDtBQVFEOztBQUVELFlBQVNKLE1BQVQsR0FBa0I7QUFDaEIsU0FBRyxDQUFDTixPQUFPVyxVQUFYLEVBQXVCO0FBQ3JCWCxjQUFPWSxFQUFQLENBQVUsR0FBVjtBQUNEO0FBQ0Y7O0FBRUQsWUFBU0YsWUFBVCxHQUF3QjtBQUN0Qi9iLGFBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FxYixRQUFHUSxZQUFIO0FBQ0FSLFFBQUdULEtBQUgsQ0FBU3FCLE9BQVQ7QUFDRDtBQUNGOztBQUVEZCxlQUFjdmEsT0FBZCxHQUF3QixDQUFDLDhCQUFELEVBQWlDLFdBQWpDLEVBQThDLGNBQTlDLENBQXhCO0FBQ0EsVUFBU3VhLGFBQVQsQ0FBdUJULDRCQUF2QixFQUFxRHdCLFNBQXJELEVBQWdFaGIsWUFBaEUsRUFBOEU7O0FBRTVFLFVBQU8sRUFBRXFhLFVBQUYsRUFBUDs7QUFFQTs7QUFFQSxZQUFTQSxJQUFULEdBQWdCO0FBQ2QsWUFDRWIsNkJBQ0dJLFVBREgsQ0FDYzVaLGFBQWEwWixLQUQzQixFQUVHaEMsSUFGSCxDQUVRO0FBQUEsV0FBR3hWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQVU0WCxPQUFWLFNBQVVBLE9BQVY7QUFBQSxjQUF5QjtBQUM3QkosZ0JBQU9zQixVQUFVWCxJQUFWLENBQWVuWSxLQUFmLENBRHNCO0FBRTdCNFg7QUFGNkIsUUFBekI7QUFBQSxNQUZSLENBREY7QUFRRDtBQUVGOztBQUVEO0FBQ0k7QUFDQTtBQUNBOztTQUVLRSxtQixHQUFBQSxtQjtTQUFxQkMsYSxHQUFBQSxhOzs7Ozs7Ozs7OztBQzdEOUIsVUFBU2dCLFVBQVQsR0FBc0I7QUFDcEIsVUFBTztBQUNMQyxlQUFVLEdBREw7QUFFTEMsZUFBVTs7Ozs7Ozs7O01BRkw7QUFZTGhLLFlBQU87QUFDTGpTLGVBQVEsV0FESDtBQUVMb0osY0FBTyxVQUZGO0FBR0w4UyxrQkFBVyxjQUhOO0FBSUxDLGlCQUFVLGFBSkw7QUFLTEMsa0JBQVcsY0FMTjtBQU1MQyxxQkFBYztBQU5ULE1BWkY7QUFvQkxsYyxpQkFBWW1jLFFBcEJQO0FBcUJMdlosbUJBQWMsSUFyQlQ7QUFzQkx3Wix1QkFBa0I7QUF0QmIsSUFBUDtBQXdCRDs7QUFFREQsVUFBUzliLE9BQVQsR0FBbUIsQ0FBQyxtQkFBRCxFQUFzQixRQUF0QixFQUFnQyxXQUFoQyxDQUFuQjtBQUNBLFVBQVM4YixRQUFULENBQWtCRSxpQkFBbEIsRUFBcUNDLE1BQXJDLEVBQTZDQyxTQUE3QyxFQUF3RDtBQUN0RCxPQUFJekIsS0FBSyxJQUFUO0FBQ0FBLE1BQUcxVyxPQUFILEdBQWFrUixTQUFiO0FBQ0F3RixNQUFHcFIsTUFBSCxHQUFZLEVBQVo7O0FBRUFvUixNQUFHQyxRQUFILEdBQWNBLFFBQWQ7QUFDQUQsTUFBRzdVLE9BQUgsR0FBYUEsT0FBYjtBQUNBNlUsTUFBRzBCLE9BQUgsR0FBYUEsT0FBYjtBQUNBMUIsTUFBRzJCLFFBQUgsR0FBY0EsUUFBZDs7QUFFQTNCLE1BQUdwUixNQUFILENBQVVoSixJQUFWLENBQWU0YixPQUFPakwsTUFBUCxDQUFjLFlBQVc7QUFBRSxZQUFPeUosR0FBR2piLE1BQUgsQ0FBVWdDLE1BQWpCO0FBQTBCLElBQXJELEVBQXVEaVosR0FBRzBCLE9BQTFELENBQWY7O0FBRUExQixNQUFHQyxRQUFIOztBQUVBdUIsVUFBTzFLLEdBQVAsQ0FBV2tKLEdBQUdvQixZQUFILElBQW1CLFVBQTlCLEVBQTBDcEIsR0FBRzdVLE9BQTdDOztBQUVBOztBQUVBLFlBQVM4VSxRQUFULEdBQW9CO0FBQ2xCO0FBQ0EsU0FBR3JiLFFBQVEwWixRQUFSLENBQWlCMEIsR0FBR2lCLFNBQXBCLENBQUgsRUFBbUM7QUFDakNqQixVQUFHNVEsSUFBSCxHQUFVNFEsR0FBR2piLE1BQUgsQ0FBVWdDLE1BQVYsQ0FBaUJvSSxLQUFqQixDQUF1QjZRLEdBQUdpQixTQUExQixFQUFxQzdSLElBQS9DO0FBQ0QsTUFGRCxNQUdLO0FBQ0g0USxVQUFHNVEsSUFBSCxHQUFVNFEsR0FBR2piLE1BQUgsQ0FBVWdDLE1BQVYsQ0FBaUJxSSxJQUEzQjtBQUNEOztBQUVEO0FBQ0EsU0FBR3FTLFVBQVVHLE1BQVYsR0FBbUJ2VCxLQUF0QixFQUE2QjtBQUMzQjJSLFVBQUczUixLQUFILEdBQVcsSUFBWDtBQUNEO0FBQ0Y7O0FBRUQsWUFBU3FULE9BQVQsQ0FBaUJoTyxHQUFqQixFQUFzQk4sSUFBdEIsRUFBNEI7QUFDMUI7QUFDQSxTQUFHNE0sR0FBRzVRLElBQU4sRUFBWTtBQUNWLFdBQUcsQ0FBQzRRLEdBQUcxVyxPQUFQLEVBQWdCO0FBQ2QwVyxZQUFHMVcsT0FBSCxHQUFhaVksa0JBQWtCdkIsR0FBR2piLE1BQUgsQ0FBVWdDLE1BQTVCLEVBQW9DaVosR0FBRzdSLEtBQXZDLEVBQThDO0FBQ3pEcUIscUJBQVV3USxHQUFHamIsTUFBSCxDQUFVeUssUUFEcUM7QUFFekQ1RCxzQkFBV29VLEdBQUdqYixNQUFILENBQVU2RyxTQUZvQztBQUd6RDdCLHlCQUFjQTtBQUgyQyxVQUE5QyxDQUFiO0FBS0QsUUFORCxNQU9LO0FBQ0hyRixpQkFBUUMsR0FBUixDQUFZLDBCQUFaLEVBQXdDcWIsR0FBRzFXLE9BQUgsQ0FBVzJDLFVBQVgsRUFBeEM7QUFDQStULFlBQUcxVyxPQUFILENBQVd1QixPQUFYLENBQW1CbVYsR0FBR2piLE1BQUgsQ0FBVWdDLE1BQTdCLEVBQXFDaVosR0FBRzdSLEtBQXhDO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Y7O0FBRUQsWUFBU3dULFFBQVQsR0FBb0I7QUFDbEI7QUFDQSxZQUFPLENBQUMzQixHQUFHbUIsU0FBSixJQUFpQm5CLEdBQUcxVyxPQUFwQixJQUErQjBXLEdBQUcxVyxPQUFILENBQVcyQyxVQUFYLEVBQXRDO0FBQ0Q7O0FBRUQsWUFBU2xDLFlBQVQsQ0FBc0JoRCxNQUF0QixFQUE4QjtBQUM1QmlaLFFBQUdqYixNQUFILENBQVVnQyxNQUFWLEdBQW1CQSxNQUFuQjtBQUNBaVosUUFBR0MsUUFBSDtBQUNEOztBQUVELFlBQVM5VSxPQUFULEdBQW1CO0FBQ2pCcEYsT0FBRTRDLElBQUYsQ0FBT3FYLEdBQUdwUixNQUFWLEVBQWtCLFVBQVMrSCxRQUFULEVBQW1CO0FBQ25DQTtBQUNELE1BRkQ7QUFHQXFKLFFBQUcxVyxPQUFILENBQVc2QixPQUFYO0FBQ0Q7QUFFRjs7QUFFRDtBQUNJO0FBQ0E7O21CQUVXMlYsVTs7Ozs7OztBQ3RHZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUNuTHRDLFVBQVNlLGdCQUFULEdBQTRCO0FBQzFCLFVBQU87QUFDTGQsZUFBVSxHQURMO0FBRUwvSixZQUFPO0FBQ0xqUyxlQUFRLGlCQURIO0FBRUwrYyxlQUFRLFdBRkg7QUFHTEMsc0JBQWU7QUFIVixNQUZGO0FBT0w3YyxpQkFBWThjLGNBUFA7QUFRTFYsdUJBQWtCLElBUmI7QUFTTHhaLG1CQUFjLElBVFQ7QUFVTGtaO0FBVkssSUFBUDtBQWlFRDs7QUFFRGdCLGdCQUFlemMsT0FBZixHQUF5QixDQUFDLFFBQUQsQ0FBekI7QUFDQSxVQUFTeWMsY0FBVCxDQUF3QlIsTUFBeEIsRUFBZ0M7QUFDOUIsT0FBSXhCLEtBQUssSUFBVDs7QUFFQUEsTUFBR2lDLFVBQUgsR0FBZ0JBLFVBQWhCO0FBQ0FqQyxNQUFHa0MsVUFBSCxHQUFnQkEsVUFBaEI7O0FBRUE7O0FBRUEsWUFBU0QsVUFBVCxHQUFzQjtBQUNwQnZkLGFBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCc2QsVUFBM0I7QUFDQVQsWUFBT3RLLEtBQVAsQ0FBYSxlQUFiO0FBQ0Q7O0FBRUQsWUFBU2dMLFVBQVQsQ0FBb0JDLFNBQXBCLEVBQStCO0FBQzdCLFNBQUduQyxHQUFHamIsTUFBSCxDQUFVbWQsVUFBYixFQUF5QixPQUFPbEMsR0FBR2piLE1BQUgsQ0FBVW1kLFVBQVYsQ0FBcUJDLFNBQXJCLENBQVA7QUFDekIsWUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRDtBQUNFO0FBQ0E7O21CQUVhTixnQjs7Ozs7Ozs7Ozs7QUM1RmYsVUFBU08sVUFBVCxHQUFzQjtBQUNwQixVQUFPO0FBQ0xyQixlQUFVLEdBREw7QUFFTC9KLFlBQU8sRUFBRTVILE1BQU0sYUFBUixFQUZGO0FBR0xpVCxjQUFTLFNBSEo7QUFJTGhMLFdBQU1BO0FBSkQsSUFBUDtBQU1EOztBQUVELFVBQVNBLElBQVQsQ0FBY21LLE1BQWQsRUFBc0I3RSxJQUF0QixFQUE0QjJGLEtBQTVCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMxQztBQUNBLE9BQUdmLE9BQU9wUyxJQUFQLElBQWVvUyxPQUFPcFMsSUFBUCxDQUFZb1QsUUFBOUIsRUFBd0M7QUFDdENoQixZQUFPakwsTUFBUCxDQUFjLFlBQVc7QUFBRSxjQUFPZ00sUUFBUUUsVUFBZjtBQUE0QixNQUF2RCxFQUF5RCxVQUFTcGMsS0FBVCxFQUFnQjtBQUN2RTtBQUNBa2MsZUFBUUcsWUFBUixDQUFxQixZQUFyQixFQUFtQyxJQUFuQztBQUNBSCxlQUFRRyxZQUFSLENBQXFCLFNBQXJCLEVBQWdDcmMsS0FBaEM7QUFDRCxNQUpEO0FBS0Q7QUFDRjs7QUFFRDtBQUNJO0FBQ0E7O21CQUVXK2IsVSIsImZpbGUiOiJhbGwuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwib2JqZWN0cGF0aFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFsbC5qc1wiLCBbXCJsb2Rhc2hcIiwgXCJvYmplY3RwYXRoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFsbC5qc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIm9iamVjdHBhdGhcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFsbC5qc1wiXSA9IGZhY3Rvcnkocm9vdFtcImxvZGFzaFwiXSwgcm9vdFtcIm9iamVjdHBhdGhcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZlMTg5MWJlMjY2ZjIzMzYwYjllIiwiaW1wb3J0IGNuRmxleEZvcm1Db25maWdQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIgZnJvbSAnLi9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIsIGNuRmxleEZvcm1Sb3V0ZXMgfSBmcm9tICcuL2NuLWZsZXgtZm9ybS5yb3V0ZXMnO1xuaW1wb3J0IHsgc2NoZW1hRm9ybUNvbmZpZywgYWRkVGVtcGxhdGVzIH0gZnJvbSAnLi9zY2hlbWEtZm9ybS1leHRlbnNpb25zJztcbmltcG9ydCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyIGZyb20gJy4vY24tZmxleC1mb3JtLnNlcnZpY2UnO1xuaW1wb3J0IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VQcm92aWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1tb2RhbC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH0gZnJvbSAnLi9jbi1mbGV4LWZvcm0tbW9kYWwtbG9hZGVyJztcbmltcG9ydCBjbkZsZXhGb3JtIGZyb20gJy4vY24tZmxleC1mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgY25GbGV4Rm9ybUhlYWRlciBmcm9tICcuL2NuLWZsZXgtZm9ybS1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCBmZlZhbGlkYXRlIGZyb20gJy4vY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZSc7XG5cbmNvbnNvbGUubG9nKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NuLmZsZXgtZm9ybScsIFtcbiAgICAndWkucm91dGVyJyxcbiAgICAnc2NoZW1hRm9ybScsXG4gICAgJ3VpLmJvb3RzdHJhcC5kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuVGFnc0lucHV0JyxcbiAgICAvLyduZ0pzb25FeHBsb3JlcicsXG4gICAgJ2NuLnV0aWwnXG4gIF0pXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybUNvbmZpZycsIGNuRmxleEZvcm1Db25maWdQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtVHlwZXMnLCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcilcbiAgLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAuY29uZmlnKGNuRmxleEZvcm1Sb3V0ZXMpXG4gIC5jb25maWcoc2NoZW1hRm9ybUNvbmZpZylcbiAgLnJ1bihhZGRUZW1wbGF0ZXMpXG4gIC5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKVxuICAucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpXG4gIC5mYWN0b3J5KCdGbGV4Rm9ybU1vZGFsJywgRmxleEZvcm1Nb2RhbClcbiAgLmNvbnRyb2xsZXIoJ0ZsZXhGb3JtTW9kYWxMb2FkZXInLCBGbGV4Rm9ybU1vZGFsTG9hZGVyKVxuICAuZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSlcbiAgLmRpcmVjdGl2ZSgnY25GbGV4Rm9ybUhlYWRlcicsIGNuRmxleEZvcm1IZWFkZXIpXG4gIC5kaXJlY3RpdmUoJ2ZmVmFsaWRhdGUnLCBmZlZhbGlkYXRlKVxuICAubmFtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fY24tZmxleC1mb3JtLm1vZHVsZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1Db25maWdQcm92aWRlcigpIHtcblxuICBjbkZsZXhGb3JtQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVBhcmFtcyddO1xuXG4gIHZhciBpZ25vcmVQYXJhbXMgPSBbJ3BhZ2UnLCAnZGVidWcnLCAnc2FuZGJveCcsICdtb2RhbCcsICdtb2RhbElkJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJZ25vcmVQYXJhbTogYWRkSWdub3JlUGFyYW0sXG4gICAgJGdldDogY25GbGV4Rm9ybUNvbmZpZ1xuICB9O1xuXG4gIC8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gYWRkSWdub3JlUGFyYW0ocGFyYW0pIHtcbiAgICBpZ25vcmVQYXJhbXMucHVzaChwYXJhbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtQ29uZmlnKCRzdGF0ZVBhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRTdGF0ZVBhcmFtcyxcbiAgICAgIGlnbm9yZVBhcmFtc1xuICAgIH07XG5cbiAgICAvLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdGVQYXJhbXMoKSB7XG4gICAgICByZXR1cm4gX1xuICAgICAgICAgIC5jaGFpbigkc3RhdGVQYXJhbXMpXG4gICAgICAgICAgLm9taXQoaWdub3JlUGFyYW1zKVxuICAgICAgICAgIC5vbWl0KGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHYpIHx8IF8uaXNOdWxsKHYpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnZhbHVlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtQ29uZmlnJywgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybUNvbmZpZ1Byb3ZpZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NuLWZsZXgtZm9ybS1jb25maWcuc2VydmljZS5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm1UeXBlc1Byb3ZpZGVyKCkge1xuXG4gIHZhciBmaWVsZFR5cGVSZWdpc3RlciA9IFt7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGlkZGVuJyxcbiAgICB0eXBlOiAnaGlkZGVuJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb3MnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdyYWRpb2J1dHRvbnMnKSxcbiAgICB0eXBlOiAnY24tcmFkaW9idXR0b25zJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlLmluY2x1ZGVzKCdhdXRvY29tcGxldGUnKSB8fCBmaWVsZC50aXRsZU1hcCB8fCBmaWVsZC50aXRsZU1hcFJlc29sdmUgfHwgZmllbGQudGl0bGVNYXBRdWVyeSxcbiAgICB0eXBlOiAnY24tYXV0b2NvbXBsZXRlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnY24tZGF0ZXRpbWVwaWNrZXInIHx8IGZpZWxkLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCcgfHwgZmllbGQudHlwZSA9PT0gJ3RpbWUtbWludXRlcycsXG4gICAgdHlwZTogJ2NuLWRhdGV0aW1lcGlja2VyJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnaGVscCcsXG4gICAgdHlwZTogJ2hlbHAnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUuaW5jbHVkZXMoJ2Rpc3BsYXknKSxcbiAgICB0eXBlOiAnY24tZGlzcGxheSdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS5mb3JtYXQgJiYgZmllbGQuc2NoZW1hLmZvcm1hdC5pbmNsdWRlcygnY3VycmVuY3knKSxcbiAgICB0eXBlOiAnY24tY3VycmVuY3knXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnNjaGVtYSAmJiBmaWVsZC5zY2hlbWEuZm9ybWF0ID09PSAncGVyY2VudGFnZScsXG4gICAgdHlwZTogJ2NuLXBlcmNlbnRhZ2UnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0b2dnbGUnIHx8IGZpZWxkLnR5cGUgPT09ICdib29sZWFuJyxcbiAgICB0eXBlOiAnY24tdG9nZ2xlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnbWVkaWF1cGxvYWQnLFxuICAgIHR5cGU6ICdjbi1tZWRpYXVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ2NzdnVwbG9hZCcsXG4gICAgdHlwZTogJ2NuLWNzdnVwbG9hZCdcbiAgfSwge1xuICAgIGNvbmRpdGlvbjogZmllbGQgPT4gZmllbGQudHlwZSA9PT0gJ3JldXNhYmxlJyxcbiAgICB0eXBlOiAnY24tcmV1c2FibGUnXG4gIH0sIHtcbiAgICBjb25kaXRpb246IGZpZWxkID0+IGZpZWxkLnR5cGUgPT09ICd0YWJsZScsXG4gICAgdHlwZTogJ2NuLXRhYmxlJ1xuICB9LCB7XG4gICAgY29uZGl0aW9uOiBmaWVsZCA9PiBmaWVsZC50eXBlID09PSAnYXJyYXknLFxuICAgIHR5cGU6ICdhcnJheSdcbiAgfV07XG5cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RlckZpZWxkVHlwZTogcmVnaXN0ZXJGaWVsZFR5cGUsXG4gICAgJGdldDogY25GbGV4Rm9ybVR5cGVzXG4gIH07XG5cbiAgLy8vLy8vLy9cblxuICBmdW5jdGlvbiByZWdpc3RlckZpZWxkVHlwZShmaWVsZFR5cGUpIHtcbiAgICBmaWVsZFR5cGVSZWdpc3Rlci51bnNoaWZ0KGZpZWxkVHlwZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbkZsZXhGb3JtVHlwZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkVHlwZVJlZ2lzdGVyOiBmaWVsZFR5cGVSZWdpc3RlcixcbiAgICAgIGdldEZpZWxkVHlwZTogZ2V0RmllbGRUeXBlXG4gICAgfTtcblxuICAgIC8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0RmllbGRUeXBlKGZpZWxkKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsID0gZmllbGRUeXBlUmVnaXN0ZXIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGZpZWxkVHlwZVJlZ2lzdGVyW2ldLmNvbmRpdGlvbihmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGRUeXBlUmVnaXN0ZXJbaV0udHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkLnR5cGUgfHwgZmllbGQuc2NoZW1hICYmIGZpZWxkLnNjaGVtYS50eXBlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVR5cGVzJywgY25GbGV4Rm9ybVR5cGVzUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0tdHlwZXMuc2VydmljZS5qcyIsImNuRmxleEZvcm1Sb3V0ZXNQcm92aWRlci4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xuXG5mdW5jdGlvbiBjbkZsZXhGb3JtUm91dGVzUHJvdmlkZXIoJHN0YXRlUHJvdmlkZXIpIHtcbiAgdmFyIHByb3ZpZGVyID0ge1xuICAgIGFkZFN0YXRlczogYWRkU3RhdGVzLFxuICAgICRnZXRcbiAgfTtcblxuICByZXR1cm4gcHJvdmlkZXI7XG5cbiAgLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gJGdldCgpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvIGhlcmUsIGJ1dCByZXF1aXJlZFxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3RhdGVzKHsgcGVybWlzc2lvbnMsIG5hbWUgfSkge1xuICAgIGNvbnN0IHNoYXJlZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdGbGV4Rm9ybU1vZGFsTG9hZGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHBlcm1pc3Npb25zXG4gICAgfTtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAuc3RhdGUoYCR7bmFtZX0ucGFnZS5tb2RhbGAsIHtcbiAgICAgICAgICB1cmw6ICcvfjptb2RhbC86bW9kYWxJZCcsXG4gICAgICAgICAgLi4uc2hhcmVkXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZShgJHtuYW1lfS5wYWdlLm1vZGFsUGFyYW1zYCwge1xuICAgICAgICAgIHVybDogJy9+Om1vZGFsLzptb2RhbElkLzpyZXN0UGFyYW1zJyxcbiAgICAgICAgICAuLi5zaGFyZWRcbiAgICAgICAgfSk7XG4gIH1cbn1cblxuY25GbGV4Rm9ybVJvdXRlcy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlciddO1xuZnVuY3Rpb24gY25GbGV4Rm9ybVJvdXRlcygkc3RhdGVQcm92aWRlcikge1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2ZsZXgtZm9ybS1zYW5kYm94Jywge1xuICAgICAgICB1cmw6ICcvZmxleC1mb3JtL3NhbmRib3gnLFxuICAgICAgICBjb250cm9sbGVyOiAnRmxleEZvcm1TYW5kYm94JyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9zYW5kYm94Lmh0bWwnXG4gICAgICB9KTtcbn1cblxuLy9hbmd1bGFyXG4gICAgLy8ubW9kdWxlKCdjbi5mbGV4LWZvcm0nKVxuICAgIC8vLnByb3ZpZGVyKCdjbkZsZXhGb3JtUm91dGVzJywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyKVxuICAgIC8vLmNvbmZpZyhjbkZsZXhGb3JtUm91dGVzKTtcblxuZXhwb3J0IHsgY25GbGV4Rm9ybVJvdXRlcywgY25GbGV4Rm9ybVJvdXRlc1Byb3ZpZGVyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLnJvdXRlcy5qcyIsIi8vYW5ndWxhci5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29uZmlnKHNjaGVtYUZvcm1Db25maWcpXG4gICAgLy8ucnVuKGFkZFRlbXBsYXRlcyk7XG5cbnNjaGVtYUZvcm1Db25maWcuJGluamVjdCA9IFsnY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlciddO1xuXG5mdW5jdGlvbiBzY2hlbWFGb3JtQ29uZmlnKGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIpIHtcbiAgdHY0LmFkZEZvcm1hdCh7XG4gICAgJ3VybCc6IGRhdGEgPT4gXy5pc1N0cmluZyhkYXRhKSAmJiAhL14oaHR0cHM/OlxcL1xcLy57Mn18JCkvLnRlc3QoZGF0YSkgJiYgJ2ludmFsaWQgdXJsJ1xuICB9KTtcblxuICB2YXIgZXh0ZW5zaW9ucyA9IFtcbiAgICAnY24tZmllbGRzZXQnLFxuICAgICdjbi10b2dnbGUnLFxuICAgICdjbi1kYXRldGltZXBpY2tlcicsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZScsXG4gICAgJ2NuLWF1dG9jb21wbGV0ZS1kZXRhaWxlZCcsXG4gICAgJ2NuLWN1cnJlbmN5JyxcbiAgICAnY24tcmFkaW9zJyxcbiAgICAnY24tcmFkaW9idXR0b25zJyxcbiAgICAnY24tcGVyY2VudGFnZScsXG4gICAgJ2NuLWRpc3BsYXknLFxuICAgICdjbi1tZWRpYXVwbG9hZCcsXG4gICAgJ2NuLWNzdnVwbG9hZCcsXG4gICAgJ2NuLXJldXNhYmxlJyxcbiAgICAnY24tdGFibGUnXG4gIF07XG5cbiAgXy5lYWNoKGV4dGVuc2lvbnMsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgIGNuRmxleEZvcm1TZXJ2aWNlUHJvdmlkZXIucmVnaXN0ZXJGaWVsZCh7XG4gICAgICB0eXBlOiBleHRlbnNpb24sXG4gICAgICB0ZW1wbGF0ZVVybDogYGFwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy8ke2V4dGVuc2lvbn0uaHRtbGBcbiAgICB9KTtcbiAgfSk7XG59XG5cbmFkZFRlbXBsYXRlcy4kaW5qZWN0ID0gWyckdGVtcGxhdGVDYWNoZSddO1xuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi10b2dnbGUuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCIgbmctc2hvdz1cInNob3dUaXRsZSgpXCI+e3tmb3JtLnRpdGxlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8Y24tdG9nZ2xlLXN3aXRjaFxuICAgICAgICAgICAgY2xhc3M9XCJwdWxsLWxlZnRcIlxuICAgICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgb24tdmFsdWU9XCJmb3JtLm9uVmFsdWVcIlxuICAgICAgICAgICAgb2ZmLXZhbHVlPVwiZm9ybS5vZmZWYWx1ZVwiXG4gICAgICAgICAgICByZWFkLW9ubHk9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIHVuZGVmaW5lZC1jbGFzcz1cImZvcm0udW5kZWZpbmVkQ2xhc3NcIi8+XG4gICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ub25UZXh0ICYmIGZvcm0ub2ZmVGV4dFwiPlxuICAgICAgICAgICAge3skJHZhbHVlJCQgPT09IGZvcm0ub25WYWx1ZSA/IGZvcm0ub25UZXh0IDogZm9ybS5vZmZUZXh0fX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRhdGV0aW1lcGlja2VyLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGNuLWRhdGV0aW1lcGlja2VyXG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIGlzLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgbWluLWRhdGU9XCJmb3JtLm1pbkRhdGVcIlxuICAgICAgICAgIG1heC1kYXRlPVwiZm9ybS5tYXhEYXRlXCJcbiAgICAgICAgICBtYXgtdmlldz1cInt7Zm9ybS5tYXhWaWV3fX1cIlxuICAgICAgICAgIGNuLWRhdGUtcmVxdWlyZWQ9XCJmb3JtLnJlcXVpcmVkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7Zm9ybS5wbGFjZWhvbGRlcn19XCJcbiAgICAgICAgICBtb2RlbC10eXBlPVwie3tmb3JtLnNjaGVtYS50eXBlfX1cIlxuICAgICAgICAgIG1vZGVsLWZvcm1hdHRlcj1cImZvcm0ubW9kZWxGb3JtYXR0ZXJcIlxuICAgICAgICAgIG1vZGVsLXBhcnNlcj1cImZvcm0ubW9kZWxQYXJzZXJcIlxuICAgICAgICAgIHZpZXctZm9ybWF0dGVyPVwiZm9ybS52aWV3Rm9ybWF0dGVyXCJcbiAgICAgICAgICB2aWV3LXBhcnNlcj1cImZvcm0udmlld1BhcnNlclwiXG4gICAgICAgICAgZm9ybWF0LXN0cmluZz17e2Zvcm0uZGF0ZUZvcm1hdH19XG4gICAgICAgICAgaWNvbi1jbGFzcz17e2Zvcm0uaWNvbkNsYXNzfX0+XG4gICAgICAgIDwvY24tZGF0ZXRpbWVwaWNrZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gIHZhciBzaGFyZWRBdXRvY29tcGxldGVUcGwgPSBgXG4gICAgICAgIDx0YWdzLWlucHV0XG4gICAgICAgICAgbmctc2hvdz1cImZvcm0ua2V5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgIGlucHV0LWlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgZGlzcGxheS1wcm9wZXJ0eT1cInt7Zm9ybS5kaXNwbGF5UHJvcGVydHkgfHwgJ25hbWUnfX1cIlxuICAgICAgICAgIHZhbHVlLXByb3BlcnR5PVwie3tmb3JtLnZhbHVlUHJvcGVydHl9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2Zvcm0ucGxhY2Vob2xkZXIgfHwgJyAnfX1cIlxuICAgICAgICAgIGNsZWFyLW9uLWJsdXI9XCJ0cnVlXCJcbiAgICAgICAgICBhZGQtb24tY29tbWE9XCJmYWxzZVwiXG4gICAgICAgICAgYWRkLWZyb20tYXV0b2NvbXBsZXRlLW9ubHk9XCJ7eyFmb3JtLmFsbG93TmV3fX1cIlxuICAgICAgICAgIG9uLWJlZm9yZS10YWctYWRkZWQ9XCJmb3JtLm9uQWRkKHt2YWx1ZTogJHRhZ30sIGZvcm0sICRldmVudCwgJHByZXYpXCJcbiAgICAgICAgICBvbi1pbml0PVwiZm9ybS5vbkluaXQoJHRhZywgZm9ybSwgJGV2ZW50LCAkc2V0dGVyKVwiXG4gICAgICAgICAgbW9kZWwtdHlwZT1cInt7Zm9ybS5nZXRTY2hlbWFUeXBlKCl9fVwiXG4gICAgICAgICAgYXJyYXktdmFsdWUtdHlwZT1cInt7Zm9ybS5zY2hlbWEuaXRlbXMudHlwZX19XCJcbiAgICAgICAgICBoaWRlLXRhZ3M9XCJ7e2Zvcm0uZGV0YWlsZWRMaXN0fX1cIlxuICAgICAgICAgIHRhZ3Mtc3R5bGU9XCJ7e2Zvcm0uc2VsZWN0aW9uU3R5bGV9fVwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJ7e2Zvcm0ucmVxdWlyZWR9fVwiXG4gICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5MZW5ndGh9fVwiXG4gICAgICAgICAgYWxsb3dlZC10YWdzLXBhdHRlcm49XCIuKlwiXG4gICAgICAgICAgZHJvcGRvd24taWNvbj1cInRydWVcIlxuICAgICAgICAgIGl0ZW0tZm9ybWF0dGVyPVwiZm9ybS5pdGVtRm9ybWF0dGVyXCJcbiAgICAgICAgICBtaW4tdGFncz1cInt7Zm9ybS5zY2hlbWEubWluSXRlbXN9fVwiXG4gICAgICAgICAgbWF4LXRhZ3M9XCJ7e2Zvcm0uc2NoZW1hLm1heEl0ZW1zIHx8IGZvcm0uZ2V0U2NoZW1hVHlwZSgpICE9PSAnYXJyYXknID8gMSA6IDB9fVwiXG4gICAgICAgICAgYWxsb3ctYnVsaz1cInt7Zm9ybS5idWxrQWRkfX1cIlxuICAgICAgICAgIGJ1bGstZGVsaW1pdGVyPVwie3tmb3JtLmJ1bGtEZWxpbWl0ZXJ9fVwiXG4gICAgICAgICAgYnVsay1wbGFjZWhvbGRlcj1cInt7Zm9ybS5idWxrUGxhY2Vob2xkZXJ9fVwiXG4gICAgICAgICAgc2hvdy1jbGVhci1hbGw9XCJ7e2Zvcm0uc2hvd0NsZWFyQWxsfX1cIlxuICAgICAgICAgIHNob3ctYnV0dG9uPVwidHJ1ZVwiPlxuICAgICAgICAgIDxhdXRvLWNvbXBsZXRlXG4gICAgICAgICAgICBzb3VyY2U9XCJmb3JtLmdldFRpdGxlTWFwICYmIGZvcm0uZ2V0VGl0bGVNYXAoKSB8fCBmb3JtLnRpdGxlUXVlcnkoJHF1ZXJ5KVwiXG4gICAgICAgICAgICBza2lwLWZpbHRlcmluZz1cInt7Zm9ybS50aXRsZVF1ZXJ5ID8gdHJ1ZSA6IGZhbHNlfX1cIlxuICAgICAgICAgICAgbWluLWxlbmd0aD1cInt7Zm9ybS5taW5Mb29rdXAgfHwgKGZvcm0udGl0bGVRdWVyeSAmJiAzIHx8IDApfX1cIj5cbiAgICAgICAgICA8L2F1dG8tY29tcGxldGU+XG4gICAgICAgIDwvdGFncy1pbnB1dD5gO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgJHtzaGFyZWRBdXRvY29tcGxldGVUcGx9XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBzZi1hcnJheT1cImZvcm1cIlxuICAgICAgICAgICBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19LWlucHV0XCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPG9sIGNsYXNzPVwibGlzdC1ncm91cCBjbi1hdXRvY29tcGxldGUtbGlzdFwiXG4gICAgICAgICAgICBuZy1zaG93PVwibW9kZWxBcnJheS5sZW5ndGhcIlxuICAgICAgICAgICAgbmctbW9kZWw9XCJtb2RlbEFycmF5XCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHt7Zm9ybS5maWVsZEh0bWxDbGFzc319XCJcbiAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBtb2RlbEFycmF5IHRyYWNrIGJ5ICRpbmRleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuZy1oaWRlPVwiZm9ybS5yZWFkb25seSB8fCBmb3JtLnJlbW92ZSA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIG5nLWNsaWNrPVwiZGVsZXRlRnJvbUFycmF5KCRpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgbmctaW5pdD1cImFycmF5SW5kZXggPSAkaW5kZXhcIiBmb3JtPVwiY29weVdpdGhJbmRleCgkaW5kZXgpXCIvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7c2hhcmVkQXV0b2NvbXBsZXRlVHBsfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWN1cnJlbmN5Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICBuZy1zaG93PVwic2hvd1RpdGxlKClcIlxuICAgICAgICAgICAgICAgZm9yPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj4kPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1jdXJyZW5jeS1mb3JtYXQ9XCJ7e2Zvcm0uY3VycmVuY3lGb3JtYXR9fVwiXG4gICAgICAgICAgICAgICAgIGNuLWN1cnJlbmN5LXBsYWNlaG9sZGVyPVwie3tmb3JtLnBsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgICAgIG1pbj1cInt7Zm9ybS5taW59fVwiXG4gICAgICAgICAgICAgICAgIG1heD1cInt7Zm9ybS5tYXh9fVwiXG4gICAgICAgICAgICAgICAgIGlkPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcmFkaW9zLmh0bWwnLFxuICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gcmFkaW8tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgbmctcmVwZWF0PVwiaXRlbSBpbiBmb3JtLnRpdGxlTWFwXCI+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmctZGlzYWJsZWQ9XCJmb3JtLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYS12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuZy12YWx1ZT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleS5qb2luKCcuJyl9fVwiPlxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8tYmxvY2staWNvblwiIG5nLWlmPVwiaXRlbS5pY29uQ2xhc3NcIj5cbiAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLmljb25DbGFzc319IGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXJhZGlvYnV0dG9ucy5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNjaGVtYS1mb3JtLXJhZGlvYnV0dG9ucyBjbi1yYWRpb2J1dHRvbnMge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4te3tpdGVtLnZhbHVlfX0ge3tmb3JtLmJ0bkNsYXNzfX0ge3tpdGVtLnZhbHVlID09PSAkJHZhbHVlJCQgPyAnYWN0aXZlJyA6ICcnfX1cIlxuICAgICAgICAgICAgICAgICBuZy1yZXBlYXQ9XCJpdGVtIGluIGZvcm0udGl0bGVNYXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tmb3JtLmZpZWxkSHRtbENsYXNzfX0gaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgc2YtY2hhbmdlZD1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICBmZi12YWxpZGF0ZT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgIG5nLXZhbHVlPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgbmFtZT1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEte3tpdGVtLnZhbHVlfX0gZmEtbGdcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBuZy1iaW5kLWh0bWw9XCJpdGVtLm5hbWVcIj48L3NwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tcGVyY2VudGFnZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkgJiYgZm9ybS5rZXlbMF19fVwiPnt7Zm9ybS50aXRsZX19PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7Zm9ybS5maWVsZENsYXNzfX0gaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBjbi1wZXJjZW50YWdlLWZvcm1hdFxuICAgICAgICAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgICBuZy1tb2RlbC1vcHRpb25zPVwiZm9ybS5uZ01vZGVsT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgICAgbWluPVwie3tmb3JtLm1pbn19XCJcbiAgICAgICAgICAgICAgICAgbWF4PVwie3tmb3JtLm1heH19XCJcbiAgICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIlxuICAgICAgICAgICAgICAgICBuYW1lPVwie3tmb3JtLmtleSAmJiBmb3JtLmtleVswXX19XCJcbiAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCIkJHZhbHVlJCRcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj4lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWRpc3BsYXkuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjbi1kaXNwbGF5e3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxpbnB1dCBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgaWQ9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e2Zvcm0ua2V5LmpvaW4oJy4nKX19XCJcbiAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT1cInt7Zm9ybS5nZXREaXNwbGF5KGZvcm0ua2V5LCBmb3JtLmFycmF5SW5kZXgpfX1cIj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLWZpZWxkc2V0Lmh0bWwnLFxuICAgICAgYFxuICAgICAgPGZpZWxkc2V0IG5nLWRpc2FibGVkPVwiZm9ybS5yZWFkb25seVwiIGNsYXNzPVwic2NoZW1hLWZvcm0tZmllbGRzZXQge3tmb3JtLmh0bWxDbGFzc319XCI+XG4gICAgICAgIDxsZWdlbmQgbmctY2xpY2s9XCJmb3JtLnRvZ2dsZUNvbGxhcHNlKGZvcm0pXCJcbiAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsnc3Itb25seSc6ICFzaG93VGl0bGUoKSwgY29sbGFwc2libGU6IGZvcm0uY29sbGFwc2libGV9XCJcbiAgICAgICAgICAgICAgICBuZy1tb3VzZWVudGVyPVwiZm9ybS5yZW5kZXIgPSB0cnVlXCI+XG4gICAgICAgICAgPGkgbmctc2hvdz1cImZvcm0uY29sbGFwc2libGVcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtY2FyZXQte3tmb3JtLmNvbGxhcHNlZCA/ICdyaWdodCcgOiAnZG93bid9fVwiPjwvaT5cbiAgICAgICAgICB7eyBmb3JtLnRpdGxlIH19XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9ja1wiIG5nLXNob3c9XCJmb3JtLmRlc2NyaXB0aW9uXCIgbmctYmluZC1odG1sPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHVpYi1jb2xsYXBzZT1cImZvcm0uY29sbGFwc2VkXCI+XG4gICAgICAgICAgPGRpdiBuZy1pZj1cImZvcm0ucmVuZGVyXCI+XG4gICAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+YFxuICApO1xuXG4gICR0ZW1wbGF0ZUNhY2hlLnB1dChcbiAgICAgICdhcHAvY29tcG9uZW50cy9jbi1mbGV4LWZvcm0vZm9ybXMvY24tbWVkaWF1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxtZWRpYS11cGxvYWQgbmctbW9kZWw9XCIkJHZhbHVlJCRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLWZpbGUtdHlwZT1cImZvcm0uZmlsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNuLXVwbG9hZC1wYXRoPVwiZm9ybS51cGxvYWRQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1kYXRhPVwiZm9ybS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1wcmV2aWV3LXBhdGg9XCJmb3JtLnByZXZpZXdQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi1tb2RlbC12YWx1ZS1rZXk9XCJmb3JtLm1vZGVsVmFsdWVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLW1vZGVsLW9wdGlvbnM9XCJmb3JtLm5nTW9kZWxPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZi1jaGFuZ2VkPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLXZhbGlkYXRlPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmYtZm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgPC9tZWRpYS11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1jc3Z1cGxvYWQuaHRtbCcsXG4gICAgICBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB7e2Zvcm0uaHRtbENsYXNzfX1cIlxuICAgICAgICAgICBuZy1jbGFzcz1cInsnaGFzLWVycm9yJzogaGFzRXJyb3IoKSwgJ2hhcy1zdWNjZXNzJzogaGFzU3VjY2VzcygpfVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgIG5nLXNob3c9XCJzaG93VGl0bGUoKVwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e2Zvcm0ua2V5ICYmIGZvcm0ua2V5WzBdfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjc3YtdXBsb2FkIG5nLW1vZGVsPVwiJCR2YWx1ZSQkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbi11cGxvYWQtcGF0aD1cImZvcm0udXBsb2FkUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8L2Nzdi11cGxvYWQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscC1ibG9ja1wiIHNmLW1lc3NhZ2U9XCJmb3JtLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICA8L2Rpdj5gXG4gICk7XG5cbiAgJHRlbXBsYXRlQ2FjaGUucHV0KFxuICAgICAgJ2FwcC9jb21wb25lbnRzL2NuLWZsZXgtZm9ybS9mb3Jtcy9jbi1yZXVzYWJsZS5odG1sJyxcbiAgICAgIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNuLXJldXNhYmxlIHt7Zm9ybS5odG1sQ2xhc3N9fVwiXG4gICAgICAgICAgIG5nLWNsYXNzPVwieydoYXMtZXJyb3InOiBoYXNFcnJvcigpLCAnaGFzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzKCl9XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgbmctc2hvdz1cInNob3dUaXRsZSgpXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7Zm9ybS5rZXkuam9pbignLicpfX1cIj57e2Zvcm0udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgIDxjbi1zZWxlY3Qtb3JcbiAgICAgICAgICBuZy1zaG93PVwiZm9ybS5rZXlcIlxuICAgICAgICAgIHNlbGVjdC1mcm9tPVwiZm9ybS5saWJyYXJ5XCJcbiAgICAgICAgICBuZy1tb2RlbD1cIiQkdmFsdWUkJFwiXG4gICAgICAgICAgbmctbW9kZWwtb3B0aW9ucz1cImZvcm0ubmdNb2RlbE9wdGlvbnNcIlxuICAgICAgICAgIHNmLWNoYW5nZWQ9XCJmb3JtXCJcbiAgICAgICAgICBzY2hlbWEtdmFsaWRhdGU9XCJmb3JtXCJcbiAgICAgICAgICBmZi1mb3JtPVwiZm9ybVwiXG4gICAgICAgICAgZGlyZWN0aXZlSWQ9XCJmb3JtLmRpcmVjdGl2ZUlkXCJcbiAgICAgICAgICBpdGVtLXRlbXBsYXRlPVwiZm9ybS5pdGVtVGVtcGxhdGVcIlxuICAgICAgICAgIHRvZ2dsZS10ZXh0PVwiZm9ybS50b2dnbGVUZXh0XCJcbiAgICAgICAgICBkaXNhYmxlZD1cImZvcm0ucmVhZG9ubHlcIlxuICAgICAgICAgIHZpZXc9XCJmb3JtLnZpZXdcIj5cbiAgICAgICAgICA8c2YtZGVjb3JhdG9yIG5nLXJlcGVhdD1cIml0ZW0gaW4gZm9ybS5pdGVtc1wiIGZvcm09XCJpdGVtXCIvPlxuICAgICAgICA8L2NuLXNlbGVjdC1vcj5cbiAgICAgICAgPHAgbmctaWY9XCJmb3JtLmxvYWRNb3JlICYmIGZvcm0udmlldyA9PT0gJ2xpc3QnXCI+XG4gICAgICAgICAgPGEgbmctY2xpY2s9XCJmb3JtLmxvYWRNb3JlKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9ja1wiPkxvYWQgTW9yZTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIiBzZi1tZXNzYWdlPVwiZm9ybS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PmBcbiAgKTtcblxuICAkdGVtcGxhdGVDYWNoZS5wdXQoXG4gICAgICAnYXBwL2NvbXBvbmVudHMvY24tZmxleC1mb3JtL2Zvcm1zL2NuLXRhYmxlLmh0bWwnLFxuICAgICAgYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY24tZmYtdGFibGUge3tmb3JtLmh0bWxDbGFzc319XCJcbiAgICAgICAgICAgbmctY2xhc3M9XCJ7J2hhcy1lcnJvcic6IGhhc0Vycm9yKCksICdoYXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3MoKX1cIj5cbiAgICAgICAgPGg2Pnt7Zm9ybS50aXRsZX19PC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgbmctcmVwZWF0PVwiY29sIGluIGZvcm0uY29sdW1uc1wiIGNsYXNzPVwie3tjb2wuY29sdW1uV2lkdGh9fVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCI+e3tjb2wuY29sdW1uSGVhZGVyfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgbmctcmVwZWF0PVwicm93IGluIGZvcm0uaXRlbXNcIj5cbiAgICAgICAgICA8ZGl2IG5nLXJlcGVhdD1cImNvbCBpbiByb3cuaXRlbXNcIiBjbGFzcz1cInt7Y29sLmNvbHVtbldpZHRofX1cIj5cbiAgICAgICAgICAgIDxzZi1kZWNvcmF0b3IgZm9ybT1cImNvbFwiPjwvc2YtZGVjb3JhdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCIgc2YtbWVzc2FnZT1cImZvcm0uZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gXG4gICk7XG59XG5cbmV4cG9ydCB7IHNjaGVtYUZvcm1Db25maWcsIGFkZFRlbXBsYXRlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjaGVtYS1mb3JtLWV4dGVuc2lvbnMuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IE9iamVjdFBhdGggZnJvbSAnb2JqZWN0cGF0aCc7XG5cbmNvbnN0IGZpZWxkVHlwZUhhbmRsZXJzID0ge1xuICAnZmllbGRzZXQnOiAncHJvY2Vzc0ZpZWxkc2V0JyxcbiAgJ2NuLXJhZGlvcyc6ICdwcm9jZXNzUmFkaW9zJyxcbiAgJ2NuLXJhZGlvYnV0dG9ucyc6ICdwcm9jZXNzUmFkaW9idXR0b25zJyxcbiAgJ2NuLWF1dG9jb21wbGV0ZSc6ICdwcm9jZXNzU2VsZWN0JyxcbiAgJ2NuLWRhdGV0aW1lcGlja2VyJzogJ3Byb2Nlc3NEYXRlJyxcbiAgJ2hlbHAnOiAncHJvY2Vzc0hlbHAnLFxuICAnY24tZGlzcGxheSc6ICdwcm9jZXNzRGlzcGxheScsXG4gICdjbi1jdXJyZW5jeSc6ICdwcm9jZXNzQ3VycmVuY3knLFxuICAnY24tcGVyY2VudGFnZSc6ICdwcm9jZXNzUGVyY2VudGFnZScsXG4gICdjbi1tZWRpYXVwbG9hZCc6ICdwcm9jZXNzTWVkaWFVcGxvYWQnLFxuICAnY24tY3N2dXBsb2FkJzogJ3Byb2Nlc3NDc3ZVcGxvYWQnLFxuICAnY24tcmV1c2FibGUnOiAncHJvY2Vzc1JldXNhYmxlJyxcbiAgJ2NuLXRvZ2dsZSc6ICdwcm9jZXNzVG9nZ2xlJyxcbiAgJ2NuLXRhYmxlJzogJ3Byb2Nlc3NUYWJsZScsXG4gICdjb21wb25lbnQnOiAncHJvY2Vzc0NvbXBvbmVudCcsXG4gICdzZWN0aW9uJzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ3RhYmFycmF5JzogJ3Byb2Nlc3NTZWN0aW9uJyxcbiAgJ2FycmF5JzogJ3Byb2Nlc3NBcnJheSdcbn07XG5cbmNvbnN0IGZpZWxkUHJvcEhhbmRsZXJzID0gW3tcbiAgcHJvcDogJ3NlbGVjdERpc3BsYXknLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc1NlbGVjdERpc3BsYXkoZmllbGQpXG59LCB7XG4gIHByb3A6ICdyZXNvbHZlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NSZXNvbHZlKGZpZWxkKVxufSwge1xuICBwcm9wOiAnd2F0Y2gnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpXG59LCB7XG4gIHByb3A6ICd0eXBlJyxcbiAgaGFuZGxlcjogKGZpZWxkLCBzZXJ2aWNlKSA9PiBzZXJ2aWNlLnByb2Nlc3NGaWVsZFR5cGUoZmllbGQpXG59LCB7XG4gIHByb3A6ICdjb25kaXRpb25hbHMnLFxuICBoYW5kbGVyOiAoZmllbGQsIHNlcnZpY2UpID0+IHNlcnZpY2UucHJvY2Vzc0NvbmRpdGlvbmFsKGZpZWxkKVxufSwge1xuICBwcm9wOiAnZGVmYXVsdCcsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3NjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gXG4gICAgXy5pc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0KSAmJiAhXy5pc1VuZGVmaW5lZChmaWVsZC5zY2hlbWEuZGVmYXVsdCkgJiYgc2VydmljZS5wcm9jZXNzRGVmYXVsdChmaWVsZClcbn0sIHtcbiAgcHJvcDogJ3VwZGF0ZVNjaGVtYScsXG4gIGhhbmRsZXI6IChmaWVsZCwgc2VydmljZSkgPT4gc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIG51bGwsIGZpZWxkLnVwZGF0ZVNjaGVtYSlcbn1dO1xuXG5jbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyLiRpbmplY3QgPSBbXG4gICdzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyJyxcbiAgJ2NuRmxleEZvcm1UeXBlc1Byb3ZpZGVyJ1xuXTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcihzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlcikge1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyRmllbGQsXG4gICAgJGdldDogQ05GbGV4Rm9ybVNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZChmaWVsZFR5cGUpIHtcbiAgICBpZihmaWVsZFR5cGUuY29uZGl0aW9uKSB7XG4gICAgICBjbkZsZXhGb3JtVHlwZXNQcm92aWRlci5yZWdpc3RlckZpZWxkVHlwZSh7XG4gICAgICAgIGNvbmRpdGlvbjogZmllbGRUeXBlLmNvbmRpdGlvbixcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKGZpZWxkVHlwZS5oYW5kbGVyKSB7XG4gICAgICBmaWVsZFR5cGVIYW5kbGVyc1tmaWVsZFR5cGUudHlwZV0gPSBmaWVsZFR5cGUuaGFuZGxlcjtcbiAgICB9XG5cbiAgICBpZihmaWVsZFR5cGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHNjaGVtYUZvcm1EZWNvcmF0b3JzUHJvdmlkZXIuYWRkTWFwcGluZyhcbiAgICAgICAgICAnYm9vdHN0cmFwRGVjb3JhdG9yJyxcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgICBzY2hlbWFGb3JtRGVjb3JhdG9yc1Byb3ZpZGVyLmNyZWF0ZURpcmVjdGl2ZShcbiAgICAgICAgICBmaWVsZFR5cGUudHlwZSxcbiAgICAgICAgICBmaWVsZFR5cGUudGVtcGxhdGVVcmxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbkNORmxleEZvcm1TZXJ2aWNlLiRpbmplY3QgPSBbXG4gICdBcGknLCAnJHBhcnNlJywgJ2NuRmxleEZvcm1Db25maWcnLCAnY25GbGV4Rm9ybVR5cGVzJywgJ3NmUGF0aCcsXG4gICckaW50ZXJwb2xhdGUnLCAnJHJvb3RTY29wZScsICckdGltZW91dCcsICdjblV0aWwnLCAnJHN0YXRlUGFyYW1zJ1xuXTtcblxuZnVuY3Rpb24gQ05GbGV4Rm9ybVNlcnZpY2UoQXBpLCAkcGFyc2UsIGNuRmxleEZvcm1Db25maWcsIGNuRmxleEZvcm1UeXBlcywgc2ZQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJGludGVycG9sYXRlLCAkcm9vdFNjb3BlLCAkdGltZW91dCwgY25VdGlsLCAkc3RhdGVQYXJhbXMpIHtcblxuICB2YXIgc2VydmljZXMgPSBbXTtcbiAgdmFyIHByb3RvdHlwZSA9IHtcbiAgICBjb21waWxlLFxuICAgIGFkZEFycmF5Q29weSxcbiAgICBhZGRUb0RhdGFDYWNoZSxcbiAgICBhZGRUb0Zvcm1DYWNoZSxcbiAgICBicm9hZGNhc3RFcnJvcnMsXG4gICAgYnVpbGRFcnJvcixcbiAgICBjbGVhbnVwLFxuICAgIGRlcmVnaXN0ZXJIYW5kbGVycyxcbiAgICBkZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICBnZXRBcnJheUNvcGllcyxcbiAgICBnZXRBcnJheUNvcGllc0ZvcixcbiAgICBnZXRBcnJheVNjb3BlcyxcbiAgICBnZXRGcm9tRGF0YUNhY2hlLFxuICAgIGdldEZyb21Gb3JtQ2FjaGUsXG4gICAgZ2V0S2V5LFxuICAgIGdldFNjaGVtYSxcbiAgICBoYW5kbGVSZXNvbHZlLFxuICAgIGluaXRBcnJheUNvcHlXYXRjaCxcbiAgICBpbml0TW9kZWxXYXRjaCxcbiAgICBpbml0U2NoZW1hUGFyYW1zLFxuICAgIGlzQ29tcGlsZWQsXG4gICAgb25Nb2RlbFdhdGNoLFxuICAgIHBhcnNlQ29uZGl0aW9uLFxuICAgIHBhcnNlRXhwcmVzc2lvbixcbiAgICBwcm9jZXNzQXJyYXksXG4gICAgcHJvY2Vzc0RlZmF1bHQsXG4gICAgcHJvY2Vzc0Rpc3BsYXksXG4gICAgcHJvY2Vzc0ZpZWxkLFxuICAgIHByb2Nlc3NGaWVsZHNldCxcbiAgICBwcm9jZXNzRmllbGRXYXRjaCxcbiAgICBwcm9jZXNzQ29tcG9uZW50LFxuICAgIHByb2Nlc3NDb25kaXRpb25hbCxcbiAgICBwcm9jZXNzQ3VycmVuY3ksXG4gICAgcHJvY2Vzc1BlcmNlbnRhZ2UsXG4gICAgcHJvY2Vzc0RhdGUsXG4gICAgcHJvY2Vzc0hlbHAsXG4gICAgcHJvY2Vzc1JhZGlvcyxcbiAgICBwcm9jZXNzUmFkaW9idXR0b25zLFxuICAgIHByb2Nlc3NSZXVzYWJsZSxcbiAgICBwcm9jZXNzU2NoZW1hLFxuICAgIHByb2Nlc3NTZWxlY3REaXNwbGF5LFxuICAgIHByb2Nlc3NSZXNvbHZlLFxuICAgIHByb2Nlc3NTZWN0aW9uLFxuICAgIHByb2Nlc3NTZWxlY3QsXG4gICAgcHJvY2Vzc1RhYmxlLFxuICAgIHByb2Nlc3NUZW1wbGF0ZSxcbiAgICBwcm9jZXNzVG9nZ2xlLFxuICAgIHByb2Nlc3NVcGRhdGVkU2NoZW1hLFxuICAgIHByb2Nlc3NNZWRpYVVwbG9hZCxcbiAgICBwcm9jZXNzQ3N2VXBsb2FkLFxuICAgIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyxcbiAgICByZWdpc3RlckhhbmRsZXIsXG4gICAgcmVnaXN0ZXJSZXNvbHZlLFxuICAgIHJlcHJvY2Vzc0ZpZWxkLFxuICAgIHNldEFycmF5SW5kZXgsXG4gICAgc2V0dXBDb25maWcsXG4gICAgc2V0dXBBcnJheVNlbGVjdERpc3BsYXksXG4gICAgc2V0dXBTZWxlY3REaXNwbGF5LFxuICAgIHNldHVwU2NoZW1hUmVmcmVzaFxuICB9O1xuXG4gIGZ1bmN0aW9uIENORmxleEZvcm1Db25zdHJ1Y3RvcihzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcbiAgICB2YXIgc2VydmljZTtcbiAgICBpZihzZXJ2aWNlcy5sZW5ndGgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGwgPSBzZXJ2aWNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoc2VydmljZXNbaV0ubW9kZWwgPT09IG1vZGVsKSB7XG4gICAgICAgICAgc2VydmljZSA9IHNlcnZpY2VzW2ldO1xuICAgICAgICAgIHNlcnZpY2UuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlID0gbmV3IENORmxleEZvcm0oc2NoZW1hLCBtb2RlbCwgY29uZmlnKTtcbiAgICAgIHNlcnZpY2VzLnB1c2goc2VydmljZSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlIHx8IG5ldyBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZyk7XG4gIH1cblxuICBmdW5jdGlvbiBDTkZsZXhGb3JtKHNjaGVtYSwgbW9kZWwsIGNvbmZpZykge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmRlYnVnKSB7XG4gICAgICB3aW5kb3cuc2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB9XG5cbiAgICB0aGlzLmFycmF5Q29waWVzID0ge307XG4gICAgdGhpcy5hcnJheUxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuZGF0YUNhY2hlID0ge307XG4gICAgdGhpcy5kZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICB0aGlzLmZvcm1DYWNoZSA9IHt9O1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXNvbHZlUmVnaXN0ZXIgPSB7fTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy51cGRhdGVzID0gMDtcblxuICAgIHRoaXMucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgdGhpcy5fID0gXztcblxuICAgIHRoaXMuY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpO1xuICB9XG5cbiAgXy5leHRlbmQoQ05GbGV4Rm9ybS5wcm90b3R5cGUsIHByb3RvdHlwZSk7XG4gIF8uZXh0ZW5kKENORmxleEZvcm1Db25zdHJ1Y3RvciwgcHJvdG90eXBlKTtcblxuICByZXR1cm4gQ05GbGV4Rm9ybUNvbnN0cnVjdG9yO1xuXG4gIC8vLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gY29tcGlsZShzY2hlbWEsIG1vZGVsLCBjb25maWcpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnNjaGVtYSA9IHNjaGVtYTtcbiAgICBzZXJ2aWNlLm1vZGVsID0gbW9kZWw7XG5cbiAgICBpZighc2VydmljZS5pc0NvbXBpbGVkKCkpIHtcbiAgICAgIHNlcnZpY2Uuc2V0dXBDb25maWcoY29uZmlnKTtcblxuICAgICAgaWYoc2NoZW1hLmZvcm1zKSB7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZm9ybXMsIGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICBfLmVhY2goZm9ybS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5mb3JtLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5pbml0TW9kZWxXYXRjaCgpO1xuICAgICAgc2VydmljZS5pbml0QXJyYXlDb3B5V2F0Y2goKTtcbiAgICAgIHNlcnZpY2UuaXNDb21waWxlZCh0cnVlKTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlLmJyb2FkY2FzdEVycm9ycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21waWxlZChzZXRWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzZXRWYWx1ZSkge1xuICAgICAgc2VydmljZS5zY2hlbWEuY29tcGlsZWQgPSBzZXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcnZpY2Uuc2NoZW1hICYmIHNlcnZpY2Uuc2NoZW1hLmNvbXBpbGVkO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBDb25maWcoY29uZmlnKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgaWYoY29uZmlnLmZvcm1DdHJsKSBzZXJ2aWNlLmZvcm1DdHJsID0gY29uZmlnLmZvcm1DdHJsO1xuICAgICAgaWYoY29uZmlnLnVwZGF0ZVNjaGVtYSkgc2VydmljZS51cGRhdGVTY2hlbWEgPSBjb25maWcudXBkYXRlU2NoZW1hO1xuICAgICAgaWYoY29uZmlnLmdldFNjaGVtYSkgc2VydmljZS5nZXRTY2hlbWFGb3JtID0gc2VydmljZS5zZXR1cFNjaGVtYVJlZnJlc2goY29uZmlnLmdldFNjaGVtYSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1NjaGVtYShmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2NoZW1hIH0gPSBmaWVsZDtcblxuICAgIGZpZWxkLmdldFNjaGVtYVR5cGUgPSAoKSA9PiBfLmlzQXJyYXkoc2NoZW1hLnR5cGUpID8gXy5maXJzdChzY2hlbWEudHlwZSkgOiBzY2hlbWEudHlwZTtcbiAgICBpZighZmllbGQudHlwZSkgZmllbGQudHlwZSA9IGZpZWxkLmdldFNjaGVtYVR5cGUgJiYgZmllbGQuZ2V0U2NoZW1hVHlwZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0RlZmF1bHQoZmllbGQpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICBjb25zdCB7IHNjaGVtYSB9ID0gZmllbGQ7XG4gICAgY29uc3QgY3VyRGVmYXVsdCA9IGZpZWxkLmRlZmF1bHQgfHwgc2NoZW1hLmRlZmF1bHQ7XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIC8vIGlmIHNjaGVtYVVwZGF0ZSBoYXNuJ3QgYmVlbiB0cmlnZ2VyZWQsIGxldCBzY2hlbWFGb3JtIGRpcmVjdGl2ZSBoYW5kbGUgZGVmYXVsdHNcbiAgICBpZihzZXJ2aWNlLnVwZGF0ZXMgfHwgZmllbGQuZGVmYXVsdCkge1xuICAgICAgaWYoa2V5LmluY2x1ZGVzICYmIGtleS5pbmNsdWRlcygnW10nKSkgcmV0dXJuO1xuICAgICAgY29uc3QgbW9kZWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmaWVsZC5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9IG1vZGVsLmdldCgpO1xuICAgICAgLy8gaWYgdGhlcmUncyBhbiBleGlzdGluZyBkZWZhdWx0IGFuZCBpdCdzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIG5ldyBkZWZhdWx0XG4gICAgICBpZihfLmlzVHJ1bHlFbXB0eShtb2RlbFZhbHVlKSB8fCAoXy5oYXMoc2VydmljZS5kZWZhdWx0cywga2V5KSAmJiBhbmd1bGFyLmVxdWFscyhtb2RlbFZhbHVlLCBzZXJ2aWNlLmRlZmF1bHRzW2tleV0pKSkge1xuICAgICAgICBtb2RlbC5zZXQoY3VyRGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlcnZpY2UuZGVmYXVsdHNba2V5XSA9IGFuZ3VsYXIuY29weShjdXJEZWZhdWx0KTtcblxuICAgIGlmKHNjaGVtYS5mb3JtYXQgPT09ICd1cmwnICYmICFmaWVsZC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgaWYoIWZpZWxkLnR5cGUpIGZpZWxkLnR5cGUgPSAndXJsJztcbiAgICAgIGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlID0gJ011c3QgYmUgYSB2YWxpZCB1cmwgKGh0dHBzOi8vLi4uKSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkc2V0KGZpZWxkc2V0KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgZmllbGRzZXQudHlwZSA9ICdjbi1maWVsZHNldCc7XG4gICAgZmllbGRzZXQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcblxuICAgIGlmKGZpZWxkc2V0LmNvbGxhcHNpYmxlKSB7XG4gICAgICBmaWVsZHNldC50b2dnbGVDb2xsYXBzZSA9IChmaWVsZHNldCkgPT4ge1xuICAgICAgICBpZihmaWVsZHNldC5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgIGZpZWxkc2V0LmNvbGxhcHNlZCA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkc2V0LnJlbmRlciA9ICFmaWVsZHNldC5jb2xsYXBzZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmllbGRzZXQucmVuZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmllbGRUeXBlKGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRUeXBlID0gY25GbGV4Rm9ybVR5cGVzLmdldEZpZWxkVHlwZShmaWVsZCk7XG4gICAgY29uc3QgaGFuZGxlciA9IGZpZWxkVHlwZUhhbmRsZXJzW2ZpZWxkVHlwZV07XG4gICAgaWYoXy5pc1N0cmluZyhoYW5kbGVyKSkge1xuICAgICAgc2VydmljZVtoYW5kbGVyXShmaWVsZCk7XG4gICAgfVxuICAgIGVsc2UgaWYoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoc2VydmljZSwgZmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGaWVsZChmaWVsZCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgaWYoIWZpZWxkLl9vZ0tleXMpIHtcbiAgICAgIGZpZWxkLl9vZ0tleXMgPSBfLndpdGhvdXQoXy5rZXlzKGZpZWxkKSwgJ2tleScsICdodG1sQ2xhc3MnKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuXG4gICAgaWYoa2V5KSB7XG4gICAgICBzZXJ2aWNlLmFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpO1xuICAgICAgZmllbGQuc2NoZW1hID0gc2VydmljZS5nZXRTY2hlbWEoa2V5KTtcblxuICAgICAgaWYoZmllbGQuc2NoZW1hKSB7XG4gICAgICAgIGlmKGZpZWxkLnNjaGVtYS5kZXNjcmlwdGlvbikgZmllbGQuZGVzY3JpcHRpb24gPSBmaWVsZC5zY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICAgIGlmKGZpZWxkLnJlYWRvbmx5ICYmICFmaWVsZC5zY2hlbWEucmVhZG9ubHkpIGZpZWxkLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICAgIGlmKGZpZWxkLnNjaGVtYS50eXBlID09PSAnYXJyYXknICYmICEoJ3Nob3dDbGVhckFsbCcgaW4gZmllbGQpKSBmaWVsZC5zaG93Q2xlYXJBbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZXJ2aWNlLnByb2Nlc3NTY2hlbWEoZmllbGQpO1xuICAgIH1cblxuICAgIGZpZWxkUHJvcEhhbmRsZXJzLmZvckVhY2goKHsgcHJvcCwgaGFuZGxlciB9LCBpbmRleCkgPT5cbiAgICAgICAgXy5oYXMoZmllbGQsIHByb3ApICYmIGhhbmRsZXIoZmllbGQsIHNlcnZpY2UpXG4gICAgKTtcblxuICAgIGlmKGtleSkge1xuICAgICAgaWYoXy5maW5kKHNlcnZpY2UuZXJyb3JzLCB7IGtleSB9KSkge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycyA9IF8ucmVqZWN0KHNlcnZpY2UuZXJyb3JzLCB7a2V5OiBrZXl9KTtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtLmVycm9yLicgKyBrZXksICdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2NoZW1hRm9ybS5lcnJvci4nICsga2V5LCAnc2VydmVyVmFsaWRhdGlvbicsIHRydWUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihmaWVsZC5lcnJvcikge1xuICAgICAgICBzZXJ2aWNlLmVycm9ycy5wdXNoKHNlcnZpY2UuYnVpbGRFcnJvcihmaWVsZCkpO1xuICAgICAgICBpZihfLmlzRW1wdHkoZmllbGQubmdNb2RlbE9wdGlvbnMpKSB7XG4gICAgICAgICAgZmllbGQubmdNb2RlbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbGxvd0ludmFsaWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkLm5nTW9kZWxPcHRpb25zLmFsbG93SW52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRLZXkoa2V5KSB7XG4gICAgaWYoXy5pc0FycmF5KGtleSkpIHtcbiAgICAgIGtleSA9IF8ucmVkdWNlKGtleSwgZnVuY3Rpb24odG90YWwsIG5leHQpIHtcbiAgICAgICAgaWYoL14oXFxkKikkLy50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRvdGFsICsgJ1snICsgbmV4dCArICddJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWwgKyAnLicgKyBuZXh0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGdldFNjaGVtYShrZXksIGRlcHRoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKCFrZXkpIHJldHVybjtcblxuICAgIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGtleSk7XG5cbiAgICAvL2tleSA9IGtleS5zcGxpdCgnLicpO1xuICAgIC8va2V5ID0ga2V5XG4gICAgLy8gICAgLnJlcGxhY2UoL2FycmF5SW5kZXgvZywgJycpXG4gICAgLy8gICAgLnJlcGxhY2UoLyhcXFsnKShbXi5dKylcXC4oW14uXSspKCddKS9nLCAnLiQyJWZmX2R0JSQzJylcbiAgICAvLyAgICAucmVwbGFjZSgvXFwuL2csICclZmZfc3AlJylcbiAgICAvLyAgICAucmVwbGFjZSgvJWZmX2R0JS9nLCAnLicpXG4gICAgLy8gICAgLnNwbGl0KCclZmZfc3AlJyk7XG4gICAga2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgIGRlcHRoID0gZGVwdGggfHwgc2VydmljZS5zY2hlbWEuc2NoZW1hLnByb3BlcnRpZXM7XG5cbiAgICAvLyB3aHkgZG8gd2UgZG8gdGhpcz8gaXQncyBicmVha2luZyBzdHVmZlxuICAgIC8vaWYoXy5sYXN0KGtleSkgPT09ICcnKSBrZXkucG9wKCk7XG5cbiAgICBsZXQgZmlyc3QsIG5leHQ7XG5cbiAgICB3aGlsZShrZXkubGVuZ3RoID4gMSkge1xuICAgICAgZmlyc3QgPSBrZXlbMF07XG4gICAgICBuZXh0ID0ga2V5WzFdO1xuICAgICAgaWYoL15cXGQqJC8udGVzdChuZXh0KSkge1xuICAgICAgICBpZihrZXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZGVwdGggPSBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZXB0aCA9IGRlcHRoW2tleS5zaGlmdCgpXS5pdGVtcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgIGtleS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aFtrZXkuc2hpZnQoKV0ucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBhcnJheSBpdGVtXG4gICAgZmlyc3QgPSBrZXlbMF0gfHwgJ2l0ZW1zJztcblxuICAgIHJldHVybiBkZXB0aFtmaXJzdF07XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzb2x2ZShmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIF8uZWFjaChmaWVsZC5yZXNvbHZlLCBmdW5jdGlvbihkYXRhUHJvcCwgZmllbGRQcm9wKSB7XG4gICAgICBzZXJ2aWNlLmhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApO1xuXG4gICAgICB2YXIgcmVzb2x2ZVR5cGUgPSBkYXRhUHJvcC5tYXRjaCgvKHNjaGVtYVxcLmRhdGFcXC58bW9kZWxcXC4pKFxcdyspLyk7XG5cbiAgICAgIGlmKHJlc29sdmVUeXBlKSB7XG4gICAgICAgIGlmKHJlc29sdmVUeXBlWzFdID09PSAnc2NoZW1hLmRhdGEuJykge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJSZXNvbHZlKGZpZWxkLCBmaWVsZFByb3AsIHJlc29sdmVUeXBlWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJlc29sdmVUeXBlWzFdID09PSAnbW9kZWwuJykge1xuICAgICAgICAgIHNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKHJlc29sdmVUeXBlWzJdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShmaWVsZCwgZmllbGRQcm9wLCBkYXRhUHJvcCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZXhwKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oZXhwKS5nZXQoKTtcbiAgICAvLyBpZiB3ZSdyZSByZXNvbHZpbmcgZnJvbSBtb2RlbCBidXQgZGVmYXVsdHMgaGF2ZW4ndCBiZWVuIGFwcGxpZWQgeWV0LCByZXNvbHZlIGZyb20gZGVmYXVsdCBpdHNlbGZcbiAgICBpZighZGF0YSAmJiBleHAuaW5kZXhPZignbW9kZWwuJykgPT09IDApIHtcbiAgICAgIGRhdGEgPSBzZXJ2aWNlLmdldFNjaGVtYShleHAucmVwbGFjZSgnbW9kZWwuJywgJycpKS5kZWZhdWx0O1xuICAgIH1cbiAgICBpZihkYXRhICYmIGRhdGEuY3Vyc29yKSB7XG4gICAgICBmaWVsZC5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YVByb3AgPSBleHAubWF0Y2goL3NjaGVtYVxcLmRhdGFcXC4oLispLylbMV07XG4gICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYShgZGF0YToke2RhdGFQcm9wfToke2RhdGEuY3Vyc29yfWApO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGZpZWxkLmxvYWRNb3JlO1xuICAgIH1cbiAgICBmaWVsZFtmaWVsZFByb3BdID0gKGRhdGEgJiYgZGF0YS5kYXRhKSA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlclJlc29sdmUoZmllbGQsIGZpZWxkUHJvcCwgZGF0YVByb3ApIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBsZXQgZmllbGRLZXkgPSBzZXJ2aWNlLmdldEtleShmaWVsZC5rZXkpO1xuICAgIHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXSB8fCB7fTtcblxuICAgIGxldCByZWdpc3RlciA9IHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW2RhdGFQcm9wXTtcbiAgICByZWdpc3RlcltmaWVsZEtleV0gPSByZWdpc3RlcltmaWVsZEtleV0gfHwgW107XG4gICAgcmVnaXN0ZXJbZmllbGRLZXldLnB1c2goe1xuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgcHJvcDogZmllbGRQcm9wXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ29uZGl0aW9uYWwoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKGZpZWxkLmNvbmRpdGlvbmFscywgKGNvbmRpdGlvbiwga2V5KSA9PiB7XG4gICAgICBsZXQgaGFuZGxlciA9ICh2YWwsIHByZXYpID0+IHtcbiAgICAgICAgZmllbGRba2V5XSA9IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKTtcbiAgICAgICAgaWYoa2V5ID09PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY2hlbWFGb3JtVmFsaWRhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGZpZWxkXG4gICAgICAgICAgLmNvbmRpdGlvbmFsc1trZXldXG4gICAgICAgICAgLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS9nKVxuICAgICAgICAgIC5tYXAocGF0aCA9PiBwYXRoLm1hdGNoKC9tb2RlbFxcLihbXlxcc10rKS8pWzFdKVxuICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpZWxkV2F0Y2goZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXMsXG4gICAgICAgIHNjaGVtYSA9IGZpZWxkLnNjaGVtYTtcblxuICAgIGZpZWxkLndhdGNoID0gXy5pc0FycmF5KGZpZWxkLndhdGNoKSA/IGZpZWxkLndhdGNoIDogW2ZpZWxkLndhdGNoXTtcblxuICAgIF8uZWFjaChmaWVsZC53YXRjaCwgZnVuY3Rpb24od2F0Y2gpIHtcbiAgICAgIGlmKHdhdGNoLnJlc29sdXRpb24pIHtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHdhdGNoLmNvbmRpdGlvbjtcbiAgICAgICAgbGV0IHJlc29sdXRpb24gPSB3YXRjaC5yZXNvbHV0aW9uO1xuICAgICAgICBsZXQgaGFuZGxlcjtcblxuICAgICAgICBpZihfLmlzRnVuY3Rpb24ocmVzb2x1dGlvbikpIHtcbiAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oY3VyLCBwcmV2KSB7XG4gICAgICAgICAgICBpZighY29uZGl0aW9uIHx8IHNlcnZpY2UucGFyc2VDb25kaXRpb24oY29uZGl0aW9uKSkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uKGN1ciwgcHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHt9O1xuXG4gICAgICAgICAgYWRqdXN0bWVudC5kYXRlID0gcmVzb2x1dGlvbi5tYXRjaCgvXFwrID8oXFxkKykgZGF5cy8pO1xuXG4gICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50LmRhdGUgPSBhZGp1c3RtZW50LmRhdGVbMV07XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5yZXBsYWNlKGFkanVzdG1lbnQuZGF0ZSwgJycpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGp1c3RtZW50Lm1hdGggPSByZXNvbHV0aW9uLm1hdGNoKC8oXFwrfFxcLXxcXC98XFwqKSA/KFxcUyspLyk7XG5cbiAgICAgICAgICAgIGlmKGFkanVzdG1lbnQubWF0aCkge1xuICAgICAgICAgICAgICBhZGp1c3RtZW50Lm9wZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgICcrJzogJ2FkZCcsXG4gICAgICAgICAgICAgICAgJy0nOiAnc3VidHJhY3QnLFxuICAgICAgICAgICAgICAgICcqJzogJ211bHRpcGx5JyxcbiAgICAgICAgICAgICAgICAnLyc6ICdkaXZpZGUnXG4gICAgICAgICAgICAgIH1bYWRqdXN0bWVudC5tYXRoWzFdXTtcblxuICAgICAgICAgICAgICBhZGp1c3RtZW50LmFkanVzdGVyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oYWRqdXN0bWVudC5tYXRoWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHV0aW9uID0gcmVzb2x1dGlvbi5tYXRjaCgvKFxcUyspID89ID8oXFxTKykvKTtcblxuICAgICAgICAgIGhhbmRsZXIgPSAodmFsLCBwcmV2LCBrZXksIHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJDb25kaXRpb24gPSBjb25kaXRpb24gJiYgcmVwbGFjZUFycmF5SW5kZXgoY29uZGl0aW9uLCBrZXkpO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVBhdGggPSByZXBsYWNlQXJyYXlJbmRleChyZXNvbHV0aW9uWzFdLCBrZXkpO1xuICAgICAgICAgICAgbGV0IGZyb21QYXRoID0gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x1dGlvblsyXSwga2V5KTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHVwZGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICAvLyBhdm9pZCBsb29wIHdoZXJlIHR3byB3YXRjaGVzIGtlZXAgdHJpZ2dlcmluZyBlYWNoIG90aGVyXG4gICAgICAgICAgICBpZih0cmlnZ2VyID09PSB1cGRhdGUucGF0aCgpLmtleSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJpZ2dlciA9IHVwZGF0ZS5wYXRoKCkua2V5O1xuXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGZyb21QYXRoKTtcblxuICAgICAgICAgICAgaWYoIWNvbmRpdGlvbiB8fCBzZXJ2aWNlLnBhcnNlQ29uZGl0aW9uKGN1ckNvbmRpdGlvbikpIHtcbiAgICAgICAgICAgICAgaWYoYWRqdXN0bWVudC5kYXRlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChtb21lbnQoZnJvbS5nZXQoKSkuYWRkKGFkanVzdG1lbnQuZGF0ZSwgJ2RheXMnKS50b0RhdGUoKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihhZGp1c3RtZW50Lm1hdGgpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciByZXN1bHQgPSBfW2FkanVzdG1lbnQub3BlcmF0b3JdKGZyb20uZ2V0KCksIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIC8vbGV0IHJlc3VsdCA9IGV2YWwoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAkcGFyc2UoZnJvbS5nZXQoKSArIGFkanVzdG1lbnQubWF0aFsxXSArIGFkanVzdG1lbnQuYWRqdXN0ZXIuZ2V0KCkpKCk7XG4gICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hIHx8IGZpZWxkLml0ZW1zICYmIChmaWVsZC5pdGVtc1swXS5zY2hlbWEgfHwgKGZpZWxkLml0ZW1zWzBdLml0ZW1zICYmIGZpZWxkLml0ZW1zWzBdLml0ZW1zWzBdLnNjaGVtYSkpO1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLnR5cGUgPT09ICdjbi1jdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NoZW1hICYmIHNjaGVtYS5mb3JtYXQgPT09ICdjdXJyZW5jeS1kb2xsYXJzJyA/IDIgOiAwO1xuXG4gICAgICAgICAgICAgICAgICBpZihhZGp1c3RtZW50Lm1hdGhbMV0gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfLmZsb29yKHJlc3VsdCwgcCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmKGFkanVzdG1lbnQubWF0aFsxXSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8uY2VpbChyZXN1bHQsIHApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF8ucm91bmQocmVzdWx0LCBwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9zZXJ2aWNlLmxpc3RlbmVyc1t1cGRhdGUucGF0aCgpLmtleV0ucHJldiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZihzZXJ2aWNlLmxpc3RlbmVyc1t0cmlnZ2VyXSkge1xuICAgICAgICAgICAgICAgICAgc2VydmljZS5saXN0ZW5lcnNbdHJpZ2dlcl0udHJpZ2dlciA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChyZXN1bHQgfHwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLnNldChmcm9tLmdldCgpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihmaWVsZCwgaGFuZGxlciwgZmllbGQudXBkYXRlU2NoZW1hLCB3YXRjaC5pbml0aWFsaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgIGxldCBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihjb25kaXRpb24uc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgIGxldCBleHAgPSAvXl9cXC4oLio/KVxcKCguKj8pLFtcXHMoXSooLio/KVxcKT9cXHMqPT5be1xcc10qKD86cmV0dXJuKT8oLio/KVxcfT9cXCkkLztcbiAgICAgIGxldCBbLCBmbiwgbGlzdCwgcHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5XSA9IGNvbmRpdGlvbi5tYXRjaChleHApO1xuICAgICAgcmV0dXJuIF9bZm5dKCRwYXJzZShsaXN0KShzZXJ2aWNlKSwgZ2VuZXJhdGVQcmVkaWNhdGUocHJlZGljYXRlUGFyYW1zLCBwcmVkaWNhdGVCb2R5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcGFyc2UoY29uZGl0aW9uKShzZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVByZWRpY2F0ZShwYXJhbXMsIGJvZHkpIHtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+XG4gICAgICAkcGFyc2UoYm9keSkocGFyYW1zXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiB7IGFjY1tjdXJdID0gYXJnc1tpXTsgcmV0dXJuIGFjYzsgfSwge30pXG4gICAgICAgICAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJIYW5kbGVyKGtleSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgLy8gaWYgZmllbGQgaXMgcGFzc2VkIGluc3RlYWQgb2Yga2V5XG4gICAgaWYoXy5pc09iamVjdChrZXkpICYmICFfLmlzQXJyYXkoa2V5KSkge1xuICAgICAgaWYoIWtleS5rZXkgJiYga2V5Lml0ZW1zKSB7XG4gICAgICAgIF8uZWFjaChrZXkuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoZmllbGQsIGhhbmRsZXIsIGZpZWxkLnVwZGF0ZVNjaGVtYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAga2V5ID0ga2V5LmtleTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuICAgIHZhciBhcnJNYXRjaCA9IGtleS5tYXRjaCgvKFteW1xcXV0qKVxcW11cXC4/KC4qKS8pO1xuXG4gICAgaWYoYXJyTWF0Y2gpIHtcbiAgICAgIHNlcnZpY2UucmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFyck1hdGNoWzFdLCBhcnJNYXRjaFsyXSwgaGFuZGxlciwgdXBkYXRlU2NoZW1hLCBydW5IYW5kbGVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VyID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXy5nZXQoc2VydmljZS5nZXRTY2hlbWEoa2V5KSwgJ2RlZmF1bHQnKTtcblxuICAgIGlmKCFzZXJ2aWNlLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICB2YXIgcHJldiA9IF8uaXNVbmRlZmluZWQoY3VyKSA/IGFuZ3VsYXIuY29weShkZWZhdWx0VmFsdWUpIDogYW5ndWxhci5jb3B5KGN1cik7XG4gICAgICBzZXJ2aWNlLmxpc3RlbmVyc1trZXldID0ge1xuICAgICAgICBoYW5kbGVyczogW10sXG4gICAgICAgIHVwZGF0ZVNjaGVtYTogdXBkYXRlU2NoZW1hLFxuICAgICAgICBwcmV2OiBwcmV2XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIGlmKHJ1bkhhbmRsZXIpIGhhbmRsZXIoY3VyLCBudWxsLCBrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJLZXksIGZpZWxkS2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgdmFyIG9uQXJyYXkgPSBmdW5jdGlvbihjdXIsIHByZXYsIHJlb3JkZXIpIHtcblxuICAgICAgaWYoIXByZXYgJiYgcHJldiAhPT0gMCAmJiAoY3VyIHwgMCkgPCAxKSByZXR1cm47XG4gICAgICB2YXIgaSwgbCwga2V5O1xuXG4gICAgICBpZihwcmV2ID4gY3VyIHx8IHJlb3JkZXIpIHtcbiAgICAgICAgdmFyIGxhc3RLZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgYXJyS2V5ICsgJ1snICsgKHByZXYgLSAxKSArICddJyArICcuJyArIGZpZWxkS2V5IDpcbiAgICAgICAgICBhcnJLZXkgKyAnWycgKyAocHJldiAtIDEpICsgJ10nO1xuXG4gICAgICAgIC8vIG9ubHkgZGVyZWdpc3RlciBoYW5kbGVycyBvbmNlIGVhY2ggdGltZSBhbiBlbGVtZW50IGlzIHJlbW92ZWRcbiAgICAgICAgaWYoc2VydmljZS5saXN0ZW5lcnNbbGFzdEtleV0pIHtcbiAgICAgICAgICBmb3IoaSA9IDAsIGwgPSBwcmV2OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBmaWVsZEtleSA/XG4gICAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXSc7XG5cbiAgICAgICAgICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihpID0gMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEpO1xuICAgICAgICAgIC8vbm8gbmVlZCB0byBjYWxsIGlmIGp1c3QgcmVyZWdpc2VyaW5nIGhhbmRsZXJzXG4gICAgICAgICAgLy9pZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY3VyID4gKHByZXYgfHwgMCkpIHtcbiAgICAgICAgZm9yKGkgPSBwcmV2IHwgMCwgbCA9IGN1cjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGtleSA9IGZpZWxkS2V5ID9cbiAgICAgICAgICAgIGFycktleSArICdbJyArIGkgKyAnXScgKyAnLicgKyBmaWVsZEtleSA6XG4gICAgICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICAgICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoa2V5LCBoYW5kbGVyLCB1cGRhdGVTY2hlbWEsIHJ1bkhhbmRsZXIpO1xuICAgICAgICAgIC8vaWYocnVuSGFuZGxlcikgaGFuZGxlcihudWxsLCBudWxsLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBhcnJWYWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgIF8uZWFjaChhcnJWYWwsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICB2YXIga2V5ID0gZmllbGRLZXkgP1xuICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nICsgJy4nICsgZmllbGRLZXkgOlxuICAgICAgICBhcnJLZXkgKyAnWycgKyBpICsgJ10nO1xuXG4gICAgICBzZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihrZXksIGhhbmRsZXIsIHVwZGF0ZVNjaGVtYSk7XG4gICAgICBpZihydW5IYW5kbGVyKSBoYW5kbGVyKG51bGwsIG51bGwsIGtleSk7XG4gICAgfSk7XG5cbiAgICBpZihzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2FycktleSArICcubGVuZ3RoJ10pIHtcbiAgICAgIHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYXJyS2V5ICsgJy5sZW5ndGgnXS5oYW5kbGVycy5wdXNoKG9uQXJyYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJ2aWNlLmFycmF5TGlzdGVuZXJzW2FycktleSArICcubGVuZ3RoJ10gPSB7XG4gICAgICAgIGhhbmRsZXJzOiBbb25BcnJheV0sXG4gICAgICAgIHByZXY6IGFyclZhbCA/IGFyclZhbC5sZW5ndGggOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJIYW5kbGVycyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBrZXkgPSBzZXJ2aWNlLmdldEtleShrZXkpO1xuXG4gICAgdmFyIGFyck1hdGNoID0ga2V5Lm1hdGNoKC8oW15bXFxdXSopXFxbXVxcLj8oLiopLyk7XG5cbiAgICBpZihhcnJNYXRjaCkge1xuICAgICAgc2VydmljZS5kZXJlZ2lzdGVyQXJyYXlIYW5kbGVycyhhcnJNYXRjaFsxXSwgYXJyTWF0Y2hbMl0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHNlcnZpY2UubGlzdGVuZXJzW2tleV0pIHNlcnZpY2UubGlzdGVuZXJzW2tleV0uaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlcmVnaXN0ZXJBcnJheUhhbmRsZXJzKGFycktleSwgZmllbGRLZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihhcnJLZXksIHNlcnZpY2UubW9kZWwpLmdldCgpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGZpZWxkS2V5ID9cbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XS4ke2ZpZWxkS2V5fWApIDpcbiAgICAgICAgc2VydmljZS5kZXJlZ2lzdGVySGFuZGxlcnMoYCR7YXJyS2V5fVske2l9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZGVsV2F0Y2goKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGlmKHNlcnZpY2Uud2F0Y2hpbmcpIHJldHVybjtcbiAgICBpZihzZXJ2aWNlLm1vZGVsV2F0Y2gpIHNlcnZpY2UubW9kZWxXYXRjaCgpO1xuXG4gICAgc2VydmljZS5tb2RlbFdhdGNoID0gJHJvb3RTY29wZS4kd2F0Y2goXG4gICAgICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VydmljZS5tb2RlbDsgfSxcbiAgICAgICAgc2VydmljZS5vbk1vZGVsV2F0Y2guYmluZChzZXJ2aWNlKSxcbiAgICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBzZXJ2aWNlLmluaXRTY2hlbWFQYXJhbXMoKTtcbiAgICBzZXJ2aWNlLndhdGNoaW5nID0gdHJ1ZTtcbiAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9kZWxXYXRjaChjdXIsIHByZXYpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy8gd2UgYWx3YXlzIHJ1biB0aHJvdWdoIHRoZSBsaXN0ZW5lcnMgb24gdGhlIGZpcnN0IHVwZGF0ZSBiZWNhdXNlIGFuZ3VsYXIgc2VlbXMgdG8gbWVzcyB1cFxuICAgIC8vIHdoZW4gdGhlIGRlZmF1bHRzIGFyZSBhcHBsaWVkIGFuZCB1c2VzIHRoZSBzYW1lIG9iamVjdCBmb3IgYm90aCBjdXIgYW5kIHByZXZcbiAgICBpZihzZXJ2aWNlLmZpcnN0VXBkYXRlIHx8ICFhbmd1bGFyLmVxdWFscyhjdXIsIHByZXYpKSB7XG4gICAgICBzZXJ2aWNlLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgICBjblV0aWwuY2xlYW5Nb2RlbChzZXJ2aWNlLm1vZGVsKTtcblxuICAgICAgc2VydmljZS5wcmV2UGFyYW1zID0gYW5ndWxhci5jb3B5KHNlcnZpY2UucGFyYW1zKTtcbiAgICAgIHNlcnZpY2UucGFyYW1zID0gY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpO1xuXG4gICAgICBfLmVhY2goc2VydmljZS5hcnJheUxpc3RlbmVycywgKGxpc3RlbmVyLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IHZhbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKCFhbmd1bGFyLmVxdWFscyh2YWwsIGxpc3RlbmVyLnByZXYpKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIodmFsLCBsaXN0ZW5lci5wcmV2KSk7XG4gICAgICAgICAgbGlzdGVuZXIucHJldiA9IGFuZ3VsYXIuY29weSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCAobGlzdGVuZXIsIGtleSkgPT4ge1xuICAgICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICAgIGxldCB2YWwgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihrZXksIHNlcnZpY2UubW9kZWwpLmdldCgpO1xuICAgICAgICAgIGNvbnN0IGlzSW5pdEFycmF5ID0gYW5ndWxhci5lcXVhbHModmFsLCBbXSkgJiYgIWxpc3RlbmVyLnByZXY7XG4gICAgICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHZhbCwgbGlzdGVuZXIucHJldikgJiYgIWlzSW5pdEFycmF5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVyKHZhbCwgbGlzdGVuZXIucHJldiwga2V5LCBsaXN0ZW5lci50cmlnZ2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdGVuZXIudHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICBsaXN0ZW5lci5wcmV2ID0gYW5ndWxhci5jb3B5KHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGxpc3RlbmVyLnVwZGF0ZVNjaGVtYSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZCh2YWwpICYmICFpc0luaXRBcnJheSAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlcnZpY2UucGFyYW1zW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYoIWFuZ3VsYXIuZXF1YWxzKHNlcnZpY2UucGFyYW1zLCBzZXJ2aWNlLnByZXZQYXJhbXMpKSB7XG4gICAgICAgIGlmKHNlcnZpY2UubW9kZWwuaWQgJiYgIXNlcnZpY2UudXBkYXRlcyAmJiBfLmlzRW1wdHkoc2VydmljZS5wcmV2UGFyYW1zKSkge1xuICAgICAgICAgICsrc2VydmljZS51cGRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjaGVtYVBhcmFtcygpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlcnZpY2UubGlzdGVuZXJzLCBmdW5jdGlvbihsaXN0ZW5lciwga2V5KSB7XG4gICAgICBpZihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgdmFsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oa2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYobGlzdGVuZXIudXBkYXRlU2NoZW1hICYmICFhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgc2VydmljZS5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFycmF5Q29weVdhdGNoKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1Qcm9wYWdhdGVTY29wZScsIGZ1bmN0aW9uKGV2ZW50LCBzY29wZSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KHNjb3BlLmZvcm0ua2V5KTtcbiAgICAgIHZhciBpbmRleCA9IGtleS5tYXRjaCgvXi4qXFxbKFxcZCspXS4qJC8pO1xuXG4gICAgICBrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gICAgICBpbmRleCA9IGluZGV4ICYmIHBhcnNlSW50KGluZGV4WzFdKTtcblxuICAgICAgaWYoIXNjb3BlLmZvcm0uY29uZGl0aW9uKSBzY29wZS5mb3JtLmNvbmRpdGlvbiA9ICd0cnVlJztcblxuICAgICAgc2VydmljZS5hZGRBcnJheUNvcHkoc2NvcGUsIGtleSwgaW5kZXgpO1xuICAgICAgc2NvcGUuJGVtaXQoJ2ZsZXhGb3JtQXJyYXlDb3B5QWRkZWQnLCBrZXkpO1xuICAgIH0pKTtcblxuICAgIHNlcnZpY2UuZXZlbnRzLnB1c2goJHJvb3RTY29wZS4kb24oJ3NjaGVtYUZvcm1EZWxldGVTY29wZScsIGZ1bmN0aW9uKGV2ZW50LCBzY29wZSwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShzY29wZS5mb3JtLmtleSkucmVwbGFjZSgvXFxbXFxkK10vZywgJ1tdJyk7XG4gICAgICB2YXIgY29waWVzID0gc2VydmljZS5nZXRBcnJheUNvcGllc0ZvcihrZXkpO1xuXG4gICAgICBjb3BpZXMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9KTtcblxuICAgICAgaWYoc2NvcGUuZm9ybS5saW5rKSB7XG4gICAgICAgIHZhciBsaXN0ID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2NvcGUuZm9ybS5saW5rLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEFycmF5Q29weShmb3JtLCBrZXksIGluZGV4KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXM7XG4gICAgaWYoIWluZGV4IHx8IGluZGV4IDwgMCkgaW5kZXggPSAwO1xuICAgIGlmKCFzZXJ2aWNlLmFycmF5Q29waWVzW2tleV0pIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XSA9IFtdO1xuICAgIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XVtpbmRleF0gPSBmb3JtO1xuICAgIC8vc2VydmljZS5hcnJheUNvcGllc1trZXldLnB1c2goZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllcyhrZXkpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gXy5wbHVjayhzZXJ2aWNlLmdldEFycmF5U2NvcGVzKGtleSksICdmb3JtJyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUNvcGllc0ZvcihrZXlTdGFydCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzO1xuICAgIGtleVN0YXJ0ICs9ICdbXSc7XG5cbiAgICByZXR1cm4gXy5maWx0ZXIoc2VydmljZS5hcnJheUNvcGllcywgKGNvcHksIGtleSkgPT4ga2V5LmluY2x1ZGVzKGtleVN0YXJ0KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheVNjb3BlcyhrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgcmV0dXJuIHNlcnZpY2UuYXJyYXlDb3BpZXNba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRm9ybUNhY2hlKGZpZWxkLCBrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAga2V5ID0ga2V5IHx8IHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSk7XG4gICAgaWYoIXNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShrZXkpKSBzZXJ2aWNlLmZvcm1DYWNoZVtrZXldID0gZmllbGQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tRm9ybUNhY2hlKGtleSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByZXR1cm4gc2VydmljZS5mb3JtQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvRGF0YUNhY2hlKGtleSwgbW9kZWxWYWx1ZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIGlmKGtleSkge1xuICAgICAgc2VydmljZS5kYXRhQ2FjaGVba2V5XSA9IG1vZGVsVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RnJvbURhdGFDYWNoZShrZXkpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG5cbiAgICByZXR1cm4gc2VydmljZS5kYXRhQ2FjaGVba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTmVzdGVkRXhwcmVzc2lvbihleHApIHtcbiAgICByZXR1cm4gZXhwLm1hdGNoKC9cXFsoW15bXFxdXSspXS8pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgZGVwdGgpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcztcbiAgICAvLyBpZiBleHByZXNzaW9uIGlzIHNwZWNpZmljIHZhbHVlXG4gICAgaWYoIWV4cCB8fCAvXihudWxsfGZhbHNlfHRydWV8dW5kZWZpbmVkfCcnfFswLTkuXSt8XFxbXXxcXHt9KSQvLnRlc3QoZXhwKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoIWV4cCkgcmV0dXJuIGV4cDtcbiAgICAgICAgICBzd2l0Y2goZXhwKSB7XG4gICAgICAgICAgICBjYXNlICdudWxsJzogcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ3RydWUnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6IHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgJ1xcJ1xcJyc6IHJldHVybiAnJztcbiAgICAgICAgICAgIGNhc2UgJ1tdJzogcmV0dXJuIFtdO1xuICAgICAgICAgICAgY2FzZSAne30nOiByZXR1cm4ge307XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcGFyc2VGbG9hdChleHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBleHAgPSBzZXJ2aWNlLmdldEtleShleHApO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBleHAubWF0Y2goL14obW9kZWxcXC4pPyhcXFMrKSQvKTtcblxuICAgIGNvbnN0IG1vZGVsVmFsdWUgPSB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGxldCBwcmVQYXJzZWQgPSBleHA7XG4gICAgICAgIGxldCBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24ocHJlUGFyc2VkKTtcblxuICAgICAgICB3aGlsZShuZXN0ZWQpIHtcbiAgICAgICAgICBwcmVQYXJzZWQgPSBwcmVQYXJzZWQucmVwbGFjZShuZXN0ZWRbMF0sIGAuJHtzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihuZXN0ZWRbMV0sIGRlcHRoKS5nZXQoKX1gKTtcbiAgICAgICAgICBuZXN0ZWQgPSBtYXRjaE5lc3RlZEV4cHJlc3Npb24ocHJlUGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBsZXQgcGF0aCA9IE9iamVjdFBhdGgucGFyc2UocHJlUGFyc2VkLCBuZXN0ZWQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRbcGF0aC5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFydCAmJiBzdGFydFtwYXRoWzBdXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEFzc2lnbmFibGUoKSB7XG4gICAgICAgIGlmKG1hdGNoTmVzdGVkRXhwcmVzc2lvbihwcmVQYXJzZWQpKSB7XG4gICAgICAgICAgdGhyb3cgYENhbm5vdCB1c2UgZ2V0QXNzaWduYWJsZSgpIHdpdGggbmVzdGVkIGV4cHJlc3Npb24gKCR7ZXhwfSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhdGggPSBPYmplY3RQYXRoLnBhcnNlKGV4cCk7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBsZXQgc3RhcnQgPSBkZXB0aCB8fCBzZXJ2aWNlO1xuXG4gICAgICAgIHdoaWxlKHN0YXJ0ICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgcHJvZ3Jlc3MucHVzaChrZXkpO1xuICAgICAgICAgIGlmKCFzdGFydFtrZXldKSB7XG4gICAgICAgICAgICBpZigvXlxcZD8kLy50ZXN0KHBhdGhbMF0pKSB7XG4gICAgICAgICAgICAgIHN0YXJ0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBzdGFydFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2JqOiBzdGFydCxcbiAgICAgICAgICBrZXk6IHBhdGhbMF0sXG4gICAgICAgICAgcGF0aDogc2VydmljZS5nZXRLZXkocHJvZ3Jlc3MpLFxuICAgICAgICAgIGZ1bGxQYXRoOiBzZXJ2aWNlLmdldEtleShwcm9ncmVzcy5jb25jYXQocGF0aC5zbGljZSgwLCAxKSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIGlmKG1hdGNoTmVzdGVkRXhwcmVzc2lvbihwcmVQYXJzZWQpKSB7XG4gICAgICAgICAgdGhyb3cgYENhbm5vdCB1c2Ugc2V0KCkgd2l0aCBuZXN0ZWQgZXhwcmVzc2lvbiAoJHtleHB9KWA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXNzaWduYWJsZSA9IHRoaXMuZ2V0QXNzaWduYWJsZSgpO1xuICAgICAgICBhc3NpZ25hYmxlLm9ialthc3NpZ25hYmxlLmtleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9LFxuXG4gICAgICBwYXRoKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV4cDogZXhwLFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBrZXk6IG1hdGNoWzJdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0FycmF5KGFycmF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShhcnJheS5rZXkpO1xuXG4gICAgYXJyYXkuc29ydE9wdGlvbnMgPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKGUsIHVpKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHNlcnZpY2UuYXJyYXlMaXN0ZW5lcnNbYCR7a2V5fS5sZW5ndGhgXTtcbiAgICAgICAgbGlzdGVuZXIuaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBoYW5kbGVyKGxpc3RlbmVyLnByZXYsIGxpc3RlbmVyLnByZXYsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VydmljZS5wcm9jZXNzU2VjdGlvbihhcnJheSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VjdGlvbihzZWN0aW9uKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIF8uZWFjaChzZWN0aW9uLml0ZW1zLCBzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuXG4gICAgY29tcG9uZW50LnR5cGUgPSAnc2VjdGlvbic7XG4gICAgY29tcG9uZW50Lmh0bWxDbGFzcyA9ICdyb3cnO1xuXG4gICAgdmFyIGNvbHMgPSAxMiAvIF8ucmVqZWN0KGNvbXBvbmVudC5pdGVtcywgJ2hpZGRlbicpLmxlbmd0aDtcblxuICAgIF8uZWFjaChjb21wb25lbnQuaXRlbXMsIGZ1bmN0aW9uKGZpZWxkLCBpKSB7XG4gICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmaWVsZCk7XG4gICAgICBjb21wb25lbnQuaXRlbXNbaV0gPSB7XG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgICAgaHRtbENsYXNzOiAnY29sLXNtLScgKyBjb2xzLFxuICAgICAgICBpdGVtczogW2ZpZWxkXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW5jeShmaWVsZCkge1xuICAgIGZpZWxkLmN1cnJlbmN5Rm9ybWF0ID0ge1xuICAgICAgJ2N1cnJlbmN5LWRvbGxhcnMnOiAnZG9sbGFycycsXG4gICAgICAnY3VycmVuY3ktbWljcm9jZW50cyc6ICdtaWNyb2NlbnRzJyxcbiAgICAgICdjdXJyZW5jeSc6ICdjZW50cydcbiAgICB9W2ZpZWxkLnNjaGVtYS5mb3JtYXRdO1xuXG4gICAgZmllbGQudHlwZSA9ICdjbi1jdXJyZW5jeSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUGVyY2VudGFnZShmaWVsZCkge1xuICAgIGZpZWxkLnR5cGUgPSAnY24tcGVyY2VudGFnZSc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmV1c2FibGUoZmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgZmllbGQudHlwZSA9ICdjbi1yZXVzYWJsZSc7XG4gICAgZmllbGQudmlldyA9IGZpZWxkLnZpZXcgfHwgJ25ldyc7XG4gICAgZmllbGQuaXRlbXMuZm9yRWFjaChzZXJ2aWNlLnByb2Nlc3NGaWVsZC5iaW5kKHNlcnZpY2UpKTtcbiAgICBmaWVsZC5pdGVtcyA9IFt7XG4gICAgICB0eXBlOiAnc2VjdGlvbicsXG4gICAgICBpdGVtczogZmllbGQuaXRlbXMsXG4gICAgICBjb25kaXRpb246ICchbW9kZWwuJyArIHNlcnZpY2UuZ2V0S2V5KGZpZWxkLmtleSkgKyAnLmlkJ1xuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01lZGlhVXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tbWVkaWF1cGxvYWQnO1xuICAgIF8uZWFjaChmaWVsZC5kYXRhLCBmdW5jdGlvbihkYXRhUHJvcCwga2V5KSB7XG4gICAgICBmaWVsZC5kYXRhW2tleV0gPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihkYXRhUHJvcCkuZ2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzQ3N2VXBsb2FkKGZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGZpZWxkLnR5cGUgPSAnY24tY3N2dXBsb2FkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NSYWRpb3MoZmllbGQpIHtcbiAgICBmaWVsZC50eXBlID0gJ2NuLXJhZGlvcyc7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzUmFkaW9idXR0b25zKHJhZGlvcykge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICByYWRpb3MudHlwZSA9ICdjbi1yYWRpb2J1dHRvbnMnO1xuICAgIGlmKHJhZGlvcy5mdWxsV2lkdGgpIHtcbiAgICAgIHJhZGlvcy5idG5DbGFzcyA9ICdjb2wtc20tJyArIF8uZGl2aWRlKDEyLCByYWRpb3MudGl0bGVNYXAubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIGRhdGUudHlwZSA9ICdjbi1kYXRldGltZXBpY2tlcic7XG5cbiAgICBpZihkYXRlLnNjaGVtYS5mb3JtYXQgPT09ICd0aW1lLW1pbnV0ZXMnKSB7XG4gICAgICBkYXRlLm1heFZpZXcgPSAnaG91cic7XG4gICAgICBkYXRlLmljb25DbGFzcyA9ICdmYSBmYS1jbG9jay1vJztcblxuICAgICAgZGF0ZS5tb2RlbEZvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICBsZXQgbSA9IG1vbWVudCh2YWwpO1xuXG4gICAgICAgIHJldHVybiBfLmFkZChfLm11bHRpcGx5KG0uaG91cnMoKSwgNjApLCBtLm1pbnV0ZXMoKSk7XG4gICAgICB9O1xuXG4gICAgICBkYXRlLm1vZGVsUGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkID0gcGFyc2VJbnQodmFsKTtcbiAgICAgICAgbGV0IGhvdXJzID0gXy5mbG9vcihkIC8gNjApO1xuICAgICAgICBsZXQgbWludXRlcyA9IGQgJSA2MDtcblxuICAgICAgICByZXR1cm4gbW9tZW50KCkuc3RhcnRPZignZGF5JykuYWRkKCdob3VycycsIGhvdXJzKS5hZGQoJ21pbnV0ZXMnLCBtaW51dGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGRhdGUudmlld0Zvcm1hdHRlciA9IHZhbCA9PiB7XG4gICAgICAgIGlmKCF2YWwpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gZGF0ZS5tb2RlbFBhcnNlcih2YWwpLmZvcm1hdChkYXRlLmRhdGVGb3JtYXQpO1xuICAgICAgfTtcblxuICAgICAgZGF0ZS52aWV3UGFyc2VyID0gdmFsID0+IHtcbiAgICAgICAgaWYoIXZhbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtYXRjaCA9IHZhbC5tYXRjaCgvXihcXGR7MSwyfSk6PyhcXGR7MSwyfSk/IChhfHApLyk7XG4gICAgICAgIGlmKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBob3VycyA9IF8uYWRkKG1hdGNoWzFdID09PSAnMTInID8gMCA6IG1hdGNoWzFdLCBtYXRjaFszXSA9PT0gJ2EnID8gMCA6IDEyKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBtYXRjaFsyXSB8fCAnMDAnO1xuXG4gICAgICAgIGlmKG1pbnV0ZXMubGVuZ3RoID09PSAxKSBtaW51dGVzICs9ICcwJztcblxuICAgICAgICByZXR1cm4gXy5hZGQoXy5tdWx0aXBseShob3VycywgNjApLCBtaW51dGVzKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsUHJvcChzZWxlY3QpIHtcbiAgICBsZXQgaXNBcnJheSA9IHNlbGVjdC5nZXRTY2hlbWFUeXBlKCkgPT09ICdhcnJheSc7XG4gICAgcmV0dXJuIHNlbGVjdC52YWx1ZVByb3BlcnR5IHx8XG4gICAgICAoaXNBcnJheSA/IHNlbGVjdC5zY2hlbWEuaXRlbXMudHlwZSA6IHNlbGVjdC5zY2hlbWEudHlwZSkgIT09ICdvYmplY3QnICYmICd2YWx1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxvd2VkU2VsZWN0VmFsdWUoc2VsZWN0LCB2YWwsIHRpdGxlTWFwKSB7XG4gICAgdGl0bGVNYXAgPSB0aXRsZU1hcCB8fCBzZWxlY3QuZ2V0VGl0bGVNYXAoKTtcbiAgICBsZXQgdmFsUHJvcCA9IGdldFNlbGVjdFZhbFByb3Aoc2VsZWN0KTtcbiAgICBpZighdmFsUHJvcCkgcmV0dXJuO1xuXG4gICAgaWYoc2VsZWN0LmdldFNjaGVtYVR5cGUoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYoIXZhbCB8fCAhXy5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgICAgbGV0IG1hcFZhbCA9IHZhbC5tYXAoeCA9PiBfLmZpbmQodGl0bGVNYXAsIHtbdmFsUHJvcF06IHh9KSkuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgcmV0dXJuIG1hcFZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gXy5maW5kKHRpdGxlTWFwLCB7W3ZhbFByb3BdOiB2YWx9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHNlbGVjdCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcyxcbiAgICAgICAgc2NoZW1hID0gc2VsZWN0LnNjaGVtYTtcblxuICAgIGlmKHNlbGVjdC50aXRsZU1hcFJlc29sdmUgfHwgc2VsZWN0LnRpdGxlTWFwKSB7XG4gICAgICBzZWxlY3QuZ2V0VGl0bGVNYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdC50aXRsZU1hcCB8fCBzZXJ2aWNlLnNjaGVtYS5kYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdO1xuICAgICAgfTtcblxuICAgICAgc2VsZWN0Lm9uSW5pdCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQsIHNldHRlcikge1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgdXNlIGNvcnJlY3QgdmFsdWVcbiAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihmb3JtLmtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIGlmKGV2ZW50ID09PSAndGFnLWluaXQnKSB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IGdldEFsbG93ZWRTZWxlY3RWYWx1ZShzZWxlY3QsIG1vZGVsVmFsdWUuZ2V0KCkpO1xuICAgICAgICAgIGlmKG5ld1ZhbCAhPT0gdW5kZWZpbmVkKSBzZXR0ZXIobmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzZWxlY3QudGl0bGVNYXBRdWVyeSkge1xuICAgICAgdmFyIGtleSA9IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnBhcmFtcy5xO1xuICAgICAgc2VsZWN0LnRpdGxlUXVlcnkgPSBmdW5jdGlvbihxKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYoa2V5KSB7XG4gICAgICAgICAgcGFyYW1zW2tleV0gPSBxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcGkuZ2V0KHtcbiAgICAgICAgICB1cmw6IHNlbGVjdC50aXRsZU1hcFF1ZXJ5LnVybCxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHdyYXAgaW4gc3RyaW5nIHNvIHJldHVybnMgdHJ1dGh5IHdoZW4gY29tcGlsZWQsIGJ1dCBjb252ZXJ0ZWQgdG8gbnVtYmVyIHdpdGhpbiBkaXJlY3RpdmVcbiAgICAgIGlmKCFrZXkpIHNlbGVjdC5taW5Mb29rdXAgPSAnMCc7XG5cbiAgICAgIHNlbGVjdC5vbkluaXQgPSBmdW5jdGlvbih2YWwsIGZvcm0sIGV2ZW50LCBzZXR0ZXIpIHtcbiAgICAgICAgaWYoZXZlbnQgPT09ICd0YWctaW5pdCcpIHtcbiAgICAgICAgICBzZXR0ZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihzY2hlbWEuaXRlbXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IFtdO1xuICAgICAgXy5lYWNoKHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChzY2hlbWEuZGVmYXVsdCkpIHtcbiAgICAgICAgICBkZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIFwia2V5XCI6IGtleSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHNjaGVtYS5kZWZhdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYoZGVmYXVsdHMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdC5vbkFkZCA9IGZ1bmN0aW9uKHZhbCwgZm9ybSwgZXZlbnQpIHtcbiAgICAgICAgICBpZih2YWwudmFsdWUgJiYgZXZlbnQgPT09ICd0YWctYWRkZWQnKSB7XG4gICAgICAgICAgICBfLmVhY2goZGVmYXVsdHMsIGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgICAgaWYoIXZhbC52YWx1ZVtwcm9wLmtleV0pIHZhbC52YWx1ZVtwcm9wLmtleV0gPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXNlbGVjdC50eXBlLmluY2x1ZGVzKCdjbi1hdXRvY29tcGxldGUnKSkge1xuICAgICAgaWYoc2VsZWN0Lml0ZW1zKSB7XG4gICAgICAgIHNlbGVjdC5kZXRhaWxlZExpc3QgPSB0cnVlO1xuXG4gICAgICAgIGlmKHNlbGVjdC5pdGVtc1swXS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGlmKHNlbGVjdC5pdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3QuaXRlbXMgPSBbe1xuICAgICAgICAgICAgICB0eXBlOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICBpdGVtczogc2VsZWN0Lml0ZW1zXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXJ2aWNlLnByb2Nlc3NGaWVsZHNldChzZWxlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlLWRldGFpbGVkJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZighc2VsZWN0LnNlbGVjdGlvblN0eWxlKSB7XG4gICAgICAgICAgc2VsZWN0LnNlbGVjdGlvblN0eWxlID0gc2VsZWN0LmtleSA9PT0gJ3RhZ3MnID9cbiAgICAgICAgICAgICd0YWdzJyA6IChzZWxlY3QuZ2V0U2NoZW1hVHlwZSgpID09PSAnYXJyYXknICYmIHNlbGVjdC5zY2hlbWEubWF4SXRlbXMgIT09IDEpID9cbiAgICAgICAgICAgICAgJ2xpc3QnIDogJ3NlbGVjdCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LnR5cGUgPSAnY24tYXV0b2NvbXBsZXRlJztcbiAgICAgIH1cblxuICAgICAgaWYoc2VsZWN0LnRpdGxlTWFwUmVzb2x2ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRvbignY25GbGV4Rm9ybURpZmY6ZGF0YScsIChlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YVtzZWxlY3QudGl0bGVNYXBSZXNvbHZlXSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihzZWxlY3Qua2V5LCBzZXJ2aWNlLm1vZGVsKTtcbiAgICAgICAgICAgIGxldCB2YWwgPSBtb2RlbFZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHZhbGlkID0gZ2V0QWxsb3dlZFNlbGVjdFZhbHVlKHNlbGVjdCwgdmFsLCBkYXRhW3NlbGVjdC50aXRsZU1hcFJlc29sdmVdKTsgXG4gICAgICAgICAgICAgIGlmKHZhbGlkID09PSB1bmRlZmluZWQpIG1vZGVsVmFsdWUuc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihzZWxlY3QuZGlzcGxheUZvcm1hdCkge1xuICAgICAgc2VsZWN0Lml0ZW1Gb3JtYXR0ZXIgPSBzZXJ2aWNlLnByb2Nlc3NUZW1wbGF0ZShzZWxlY3QuZGlzcGxheUZvcm1hdCk7XG4gICAgfVxuXG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0LmtleSwgZnVuY3Rpb24odmFsKSB7XG4gICAgICB2YXIgZm9ybSA9IHNlcnZpY2UuZm9ybUN0cmwgJiYgc2VydmljZS5mb3JtQ3RybFtzZXJ2aWNlLmdldEtleShzZWxlY3Qua2V5KV07XG4gICAgICBpZihmb3JtICYmIGZvcm0uJHNldERpcnR5KSBmb3JtLiRzZXREaXJ0eSgpO1xuICAgIH0sIHNlbGVjdC51cGRhdGVTY2hlbWEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1RvZ2dsZSh0b2dnbGUpIHtcbiAgICB0b2dnbGUudHlwZSA9ICdjbi10b2dnbGUnO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0hlbHAoaGVscCkge1xuICAgIGhlbHAuaHRtbENsYXNzID0gJ2hlbHAtYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0Rpc3BsYXkoZGlzcGxheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBkaXNwbGF5LnR5cGUgPSAnY24tZGlzcGxheSc7XG4gICAgZGlzcGxheS5nZXREaXNwbGF5ID0gc2VydmljZS5wcm9jZXNzVGVtcGxhdGUoZGlzcGxheS5kaXNwbGF5Rm9ybWF0LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZSh0cGwsIHBhcnNlU2NvcGUpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgLy92YXIgcHJvY2Vzc29yID0gLzwoXFxTKylbXj5dKj4uKjxcXC9cXDE+Ly50ZXN0KHRwbCkgPyAkY29tcGlsZSA6ICRpbnRlcnBvbGF0ZTtcbiAgICB2YXIgcHJvY2Vzc29yID0gJGludGVycG9sYXRlO1xuICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgYXJyYXlJbmRleCkge1xuICAgICAgaWYocGFyc2VTY29wZSkge1xuICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChhcnJheUluZGV4KSkge1xuICAgICAgICAgIHNjb3BlID0gXy5tYXAoc2NvcGUsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gJ2FycmF5SW5kZXgnID8gYXJyYXlJbmRleCA6IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNjb3BlLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9jZXNzb3IodHBsKShzY29wZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYWJsZSh0YWJsZSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB0YWJsZS50eXBlID0gJ2NuLXRhYmxlJztcbiAgICB0YWJsZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF8uZXh0ZW5kKHJvdy5pdGVtc1tpXSwgdGFibGUuY29sdW1uc1tpXSk7XG4gICAgICAgIC8vaWYocm93LmNvbHVtbnNbaV0ua2V5KSByb3cuY29sdW1uc1tpXS5rZXkgPSBPYmplY3RQYXRoLnBhcnNlKHJvdy5jb2x1bW5zW2ldLmtleSk7XG4gICAgICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHJvdy5pdGVtc1tpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5KSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzLFxuICAgICAgICBzY2hlbWEgPSBzZXJ2aWNlLmdldFNjaGVtYShzZWxlY3REaXNwbGF5LmtleSksXG4gICAgICAgIHNlbGVjdEZpZWxkID0gXy5maW5kKHNlbGVjdERpc3BsYXkuaXRlbXMsICdzZWxlY3RGaWVsZCcpLFxuICAgICAgICBoYW5kbGVyO1xuXG4gICAgaWYoc2NoZW1hICYmIHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBoYW5kbGVyID0gc2VydmljZS5zZXR1cEFycmF5U2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSBzZXJ2aWNlLnNldHVwU2VsZWN0RGlzcGxheShzZWxlY3REaXNwbGF5LCBzZWxlY3RGaWVsZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RGlzcGxheS5zZWxlY3REaXNwbGF5ID0gZmFsc2U7XG4gICAgc2VydmljZS5yZWdpc3RlckhhbmRsZXIoc2VsZWN0RmllbGQua2V5LCBoYW5kbGVyLCBzZWxlY3RGaWVsZC51cGRhdGVTY2hlbWEsIHRydWUpO1xuICAgIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKHNlbGVjdERpc3BsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBBcnJheVNlbGVjdERpc3BsYXkoc2VsZWN0RGlzcGxheSwgc2VsZWN0RmllbGQpIHtcbiAgICB2YXIgc2VydmljZSA9IHRoaXM7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmKGl0ZW0uY29uZGl0aW9uICE9PSAnZmFsc2UnKSB7XG4gICAgICAgIGl0ZW0uY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24odmFsLCBwcmV2LCBrZXkpIHtcbiAgICAgIHZhciBpbmRleCA9IGdldEFycmF5SW5kZXgoa2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoaXRlbS5rZXkpO1xuICAgICAgICB2YXIgc3BsaXRLZXkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgICAgIGlmKHNlbGVjdEtleSA9PT0ga2V5KSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleGVkU2VsZWN0S2V5ID0gc2VydmljZS5zZXRBcnJheUluZGV4KHNlbGVjdEtleSwgaW5kZXgpO1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZXJ2aWNlLnBhcnNlRXhwcmVzc2lvbihpbmRleGVkU2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgdmFyIGZvcm1Db3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ3RydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8uZWFjaChmb3JtQ29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICBpZihnZXRBcnJheUluZGV4KGNvcHkpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvcHkuY29uZGl0aW9uID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoY29weS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5zZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IG9iamVjdHMgdGhhdCBkb24ndCBoYXZlIHZhbHVlcyBzZXQgaW4gdGhlIHNlbGVjdEZpZWxkXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VydmljZS5nZXRLZXkoc2VsZWN0RGlzcGxheS5rZXkpLCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICBfLmVhY2goc2VsZWN0RGlzcGxheS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGtleSA9IHNlcnZpY2UuZ2V0S2V5KGl0ZW0ua2V5KTtcbiAgICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgICAgaWYoa2V5ID09PSBzZWxlY3RLZXkpIHJldHVybjtcbiAgICAgIF8uZWFjaChtb2RlbCwgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgICB2YXIgaW5kZXhlZEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChrZXksIGkpO1xuICAgICAgICB2YXIgc3BsaXRJbmRleGVkS2V5ID0gT2JqZWN0UGF0aC5wYXJzZShpbmRleGVkS2V5KTtcbiAgICAgICAgdmFyIGluZGV4ZWRTZWxlY3RLZXkgPSBzZXJ2aWNlLnNldEFycmF5SW5kZXgoc2VsZWN0S2V5LCBpKTtcbiAgICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHNlbGVjdE1vZGVsLmdldCgpO1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZEtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZSAmJiAhXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRJbmRleGVkS2V5W3NwbGl0SW5kZXhlZEtleS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIG5ldyBvYmplY3RzIHdpdGggdmFsdWVzIHNldCBpbiBkZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHNlcnZpY2UuZ2V0U2NoZW1hKHNlbGVjdERpc3BsYXkua2V5KS5kZWZhdWx0O1xuICAgIF8uZWFjaChkZWZhdWx0cywgZnVuY3Rpb24oZWxlbSwgaSkge1xuICAgICAgdmFyIHNlbGVjdEtleSA9IHNlcnZpY2UuZ2V0S2V5KHNlbGVjdEZpZWxkLmtleSk7XG4gICAgICB2YXIgaW5kZXhlZFNlbGVjdEtleSA9IHNlcnZpY2Uuc2V0QXJyYXlJbmRleChzZWxlY3RLZXksIGkpO1xuICAgICAgdmFyIHNlbGVjdE1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oaW5kZXhlZFNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBzZWxlY3RNb2RlbC5nZXQoKTtcbiAgICAgIF8uZWFjaChlbGVtLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goa2V5KTtcbiAgICAgICAgc2VsZWN0TW9kZWwuc2V0KHNlbGVjdFZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJ1biBoYW5kbGVyIG9uY2UgYWxsIGFycmF5Q29waWVzIGhhdmUgYmVlbiBpbnN0YW50aWF0ZWRcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBrZXlNYXAgPSBfLnBsdWNrKF8ucmVqZWN0KHNlbGVjdERpc3BsYXkuaXRlbXMsIHtcImNvbmRpdGlvblwiOlwiZmFsc2VcIn0pLCAna2V5Jyk7XG4gICAgdmFyIG9uY2UgPSAkcm9vdFNjb3BlLiRvbignZmxleEZvcm1BcnJheUNvcHlBZGRlZCcsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlcnZpY2UuZ2V0S2V5KHNlbGVjdERpc3BsYXkua2V5KSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihtb2RlbCkge1xuICAgICAgICB2YXIgdG90YWwgPSBtb2RlbC5sZW5ndGggKiAoa2V5TWFwLmxlbmd0aCk7XG4gICAgICAgIGlmKF8uaW5jbHVkZXMoa2V5TWFwLCBrZXkpKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZihjb3VudCA9PT0gdG90YWwpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYW5kbGVyKG51bGwsIG51bGwsICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVzZXRDb3VudCA9ICRyb290U2NvcGUuJG9uKCdmbGV4Rm9ybS51cGRhdGVQYWdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfSk7XG4gICAgc2VydmljZS5ldmVudHMucHVzaChvbmNlKTtcbiAgICBzZXJ2aWNlLmV2ZW50cy5wdXNoKHJlc2V0Q291bnQpO1xuICAgIHJldHVybiBoYW5kbGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBTZWxlY3REaXNwbGF5KHNlbGVjdERpc3BsYXksIHNlbGVjdEZpZWxkKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZWN0S2V5ID0gc2VydmljZS5nZXRLZXkoc2VsZWN0RmllbGQua2V5KTtcbiAgICAgIF8uZWFjaChzZWxlY3REaXNwbGF5Lml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICAgIHZhciBzcGxpdEtleSA9IE9iamVjdFBhdGgucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYoc2VsZWN0S2V5ID09PSBrZXkpIHJldHVybjtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0S2V5LCBzZXJ2aWNlLm1vZGVsKS5nZXQoKTtcbiAgICAgICAgaWYoXy5pbmNsdWRlcyhzZWxlY3RWYWx1ZSwgc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jb25kaXRpb24gPSAnZmFsc2UnO1xuICAgICAgICAgIHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBvYmplY3RzIHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgc2V0IGluIHRoZSBzZWxlY3RGaWVsZFxuICAgIHZhciBzZWxlY3RLZXkgPSBzZXJ2aWNlLmdldEtleShzZWxlY3RGaWVsZC5rZXkpO1xuICAgIHZhciBzZWxlY3RNb2RlbCA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKHNlbGVjdEtleSwgc2VydmljZS5tb2RlbCk7XG4gICAgdmFyIHNlbGVjdFZhbHVlID0gc2VsZWN0TW9kZWwuZ2V0KCk7XG4gICAgXy5lYWNoKHNlbGVjdERpc3BsYXkuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBzZXJ2aWNlLmdldEtleShpdGVtLmtleSk7XG4gICAgICBpZihzZWxlY3RLZXkgPT09IGtleSkgcmV0dXJuO1xuICAgICAgdmFyIHNwbGl0S2V5ID0gT2JqZWN0UGF0aC5wYXJzZShrZXkpO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IHNlcnZpY2UucGFyc2VFeHByZXNzaW9uKGtleSwgc2VydmljZS5tb2RlbCkuZ2V0KCk7XG4gICAgICBpZihpdGVtVmFsdWUgJiYgIV8uaW5jbHVkZXMoc2VsZWN0VmFsdWUsIHNwbGl0S2V5W3NwbGl0S2V5Lmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBpZighc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFZhbHVlLnB1c2goc3BsaXRLZXlbc3BsaXRLZXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGhhbmRsZSBuZXcgb2JqZWN0cyB3aXRoIHZhbHVlcyBzZXQgaW4gdGhlIGRlZmF1bHRzXG4gICAgdmFyIGRlZmF1bHRzID0gc2VydmljZS5nZXRTY2hlbWEoc2VsZWN0RGlzcGxheS5rZXkpLmRlZmF1bHQ7XG4gICAgXy5lYWNoKGRlZmF1bHRzLCBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgaWYoIXNlbGVjdFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdFZhbHVlID0gW107XG4gICAgICB9XG4gICAgICBzZWxlY3RWYWx1ZS5wdXNoKGtleSk7XG4gICAgICBzZWxlY3RNb2RlbC5zZXQoc2VsZWN0VmFsdWUpO1xuICAgIH0pO1xuICAgIC8vIHNldCBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgdmFyIG1vZGVsID0gc2VydmljZS5wYXJzZUV4cHJlc3Npb24oc2VsZWN0RGlzcGxheS5rZXksIHNlcnZpY2UubW9kZWwpO1xuICAgIGlmKGRlZmF1bHRzICYmICFtb2RlbC5nZXQoKSkge1xuICAgICAgbW9kZWwuc2V0KGRlZmF1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwU2NoZW1hUmVmcmVzaChyZWZyZXNoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgIHNlcnZpY2UucmVmcmVzaFNjaGVtYSA9IF8uZGVib3VuY2UoZnVuY3Rpb24odXBkYXRlU2NoZW1hKSB7XG4gICAgICB2YXIgcGFyYW1zID0gXy5leHRlbmQoY25GbGV4Rm9ybUNvbmZpZy5nZXRTdGF0ZVBhcmFtcygpLCBzZXJ2aWNlLnBhcmFtcyk7XG4gICAgICB2YXIgZGlmZiA9IGNuVXRpbC5kaWZmKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgcGFyYW1zLCB0cnVlKTtcbiAgICAgIHZhciBrZXlzO1xuXG4gICAgICBpZihkaWZmIHx8IHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICBpZih1cGRhdGVTY2hlbWEpIHBhcmFtcy51cGRhdGVTY2hlbWEgPSB1cGRhdGVTY2hlbWE7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXMgPSBfLmtleXMoZGlmZik7XG5cbiAgICAgICAgICBpZihrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGRpZmYgPSBfLm9taXQoZGlmZiwgXy5pc051bGwpO1xuICAgICAgICAgICAga2V5cyA9IF8ua2V5cyhkaWZmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJhbXMudXBkYXRlU2NoZW1hID0gXy5maXJzdChrZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFwYXJhbXMudXBkYXRlU2NoZW1hKSB7XG4gICAgICAgICAgZGlmZiA9IGNuVXRpbC5kaWZmKHBhcmFtcywgXy5vbWl0KHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywgJ3VwZGF0ZVNjaGVtYScpKTtcbiAgICAgICAgICBrZXlzID0gXy5rZXlzKGRpZmYpO1xuXG4gICAgICAgICAgcGFyYW1zLnVwZGF0ZVNjaGVtYSA9IF8uZmlyc3Qoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoKHBhcmFtcykudGhlbihmdW5jdGlvbihzY2hlbWEpIHtcbiAgICAgICAgICArK3NlcnZpY2UudXBkYXRlcztcbiAgICAgICAgICAvL3NlcnZpY2UudXBkYXRlU2NoZW1hKHNjaGVtYSk7XG4gICAgICAgICAgc2VydmljZS5wcm9jZXNzVXBkYXRlZFNjaGVtYShzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5yZWZyZXNoRGF0YSA9IF8uZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICByZWZyZXNoKF8uZXh0ZW5kKHNlcnZpY2Uuc2NoZW1hLnBhcmFtcywge3VwZGF0ZVNjaGVtYTogJ3JlZnJlc2hEYXRhJ30pKS50aGVuKGZ1bmN0aW9uKHNjaGVtYSkge1xuICAgICAgICBzZXJ2aWNlLnByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSk7XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuXG4gICAgc2VydmljZS5ldmVudHMucHVzaCgkcm9vdFNjb3BlLiRvbignZmZSZWZyZXNoRGF0YScsIHNlcnZpY2UucmVmcmVzaERhdGEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NVcGRhdGVkU2NoZW1hKHNjaGVtYSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBpZihzY2hlbWEuZGlmZikge1xuICAgICAgc2VydmljZS5zY2hlbWEucGFyYW1zID0gc2NoZW1hLnBhcmFtcztcblxuICAgICAgaWYoc2NoZW1hLmRpZmYuZGF0YSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NuRmxleEZvcm1EaWZmOmRhdGEnLCBzY2hlbWEuZGlmZi5kYXRhKTtcbiAgICAgICAgXy5lYWNoKHNjaGVtYS5kaWZmLmRhdGEsIChkYXRhLCBwcm9wKSA9PiB7XG4gICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmRhdGEgJiYgIV8uaXNFbXB0eShzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEpICYmICFkYXRhLnJlc2V0KSB7XG4gICAgICAgICAgICBkYXRhLmRhdGEgPSBzZXJ2aWNlLnNjaGVtYS5kYXRhW3Byb3BdLmRhdGEuY29uY2F0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLmRhdGFbcHJvcF0gPSBkYXRhO1xuICAgICAgICAgIGlmKHNlcnZpY2UucmVzb2x2ZVJlZ2lzdGVyW3Byb3BdKSB7XG4gICAgICAgICAgICBfLmVhY2goc2VydmljZS5yZXNvbHZlUmVnaXN0ZXJbcHJvcF0sIChyZWdpc3RlcnMpID0+IHtcbiAgICAgICAgICAgICAgcmVnaXN0ZXJzLmZvckVhY2gocmVnaXN0ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuaGFuZGxlUmVzb2x2ZShyZWdpc3Rlci5maWVsZCwgcmVnaXN0ZXIucHJvcCwgYHNjaGVtYS5kYXRhLiR7cHJvcH1gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICBpZihzY2hlbWEuZGlmZi5zY2hlbWEpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpzY2hlbWEnLCBzY2hlbWEuZGlmZi5zY2hlbWEpO1xuICAgICAgICBfLmVhY2goc2NoZW1hLmRpZmYuc2NoZW1hLCBmdW5jdGlvbihzY2hlbWEsIGtleSkge1xuICAgICAgICAgIHNlcnZpY2Uuc2NoZW1hLnNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gPSBzY2hlbWE7XG4gICAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHNjaGVtYS5kaWZmLmZvcm0pIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtRGlmZjpmb3JtJywgc2NoZW1hLmRpZmYuZm9ybSk7XG4gICAgICAgIF8uZWFjaChzY2hlbWEuZGlmZi5mb3JtLCBmdW5jdGlvbihmb3JtKSB7XG5cbiAgICAgICAgICBpZihrZXlzLmluZGV4T2YoZm9ybS5rZXkpID09PSAtMSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGZvcm0ua2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBkb24ndCB3YW50IHRvIG92ZXJyaWRlIGtleSB3aGVuIGV4dGVuZGluZyBjYWNoZWQgb2JqZWN0c1xuICAgICAgICAgIC8vdmFyIGtleSA9IGZvcm0ua2V5O1xuICAgICAgICAgIC8vZGVsZXRlIGZvcm0ua2V5O1xuXG4gICAgICAgICAgdmFyIGNhY2hlZCA9IHNlcnZpY2UuZ2V0RnJvbUZvcm1DYWNoZShmb3JtLmtleSk7XG4gICAgICAgICAgaWYoY2FjaGVkKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNhY2hlZCwgZm9ybSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGZvcm0ua2V5KTtcbiAgICAgICAgICBpZihjb3BpZXMpIHtcbiAgICAgICAgICAgIGNvcGllcy5mb3JFYWNoKGNvcHkgPT4gY29weSAmJiBzZXJ2aWNlLnJlcHJvY2Vzc0ZpZWxkKGNvcHksIGZvcm0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZihrZXlzLmxlbmd0aCkge1xuICAgICAgICBfLmVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIGZvcm0gPSBzZXJ2aWNlLmdldEZyb21Gb3JtQ2FjaGUoa2V5KTtcbiAgICAgICAgICBpZihmb3JtKSBzZXJ2aWNlLnByb2Nlc3NGaWVsZChmb3JtKTtcbiAgICAgICAgICBpZihrZXkuaW5jbHVkZXMoJ1tdJykpIHtcbiAgICAgICAgICAgIHZhciBjb3BpZXMgPSBzZXJ2aWNlLmdldEFycmF5Q29waWVzKGtleSk7XG4gICAgICAgICAgICBfLmVhY2goY29waWVzLCBmdW5jdGlvbihjb3B5KSB7XG4gICAgICAgICAgICAgIGlmKGNvcHkpIHNlcnZpY2UucHJvY2Vzc0ZpZWxkKGNvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2VydmljZS5icm9hZGNhc3RFcnJvcnMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXJ2aWNlLnVwZGF0ZVNjaGVtYShzY2hlbWEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcHJvY2Vzc0ZpZWxkKGN1cnJlbnQsIHVwZGF0ZSwgaXNDaGlsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcblxuICAgIC8vIG90aGVyIGxvZ2ljIGluIHRoZSBzZXJ2aWNlIHdpbGwgYWRkIGNvbml0aW9uID0gJ3RydWUnIHRvIGZvcmNlXG4gICAgLy8gY29uZGl0aW9uIHRvIGV2YWwgdHJ1ZSwgc28gd2Ugc2V0IHRoZSB1cGRhdGUgY29uZGl0aW9uIHRvICd0cnVlJ1xuICAgIC8vIGJlZm9yZSBjb21wYXJpbmdcbiAgICBpZighdXBkYXRlLmNvbmRpdGlvbiAmJiBjdXJyZW50LmNvbmRpdGlvbikgdXBkYXRlLmNvbmRpdGlvbiA9ICd0cnVlJztcbiAgICBsZXQgcmVkcmF3ID0gIWlzQ2hpbGQgJiYgY3VycmVudC5jb25kaXRpb24gIT09IHVwZGF0ZS5jb25kaXRpb247XG5cbiAgICBfLmV4dGVuZChjdXJyZW50LCBfLm9taXQodXBkYXRlLCAnaXRlbXMnLCAna2V5JykpO1xuXG4gICAgY3VycmVudC5fb2dLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmKCF1cGRhdGVba2V5XSkgZGVsZXRlIGN1cnJlbnRba2V5XTtcbiAgICB9KTtcbiAgICBjdXJyZW50Ll9vZ0tleXMgPSBfLmtleXModXBkYXRlKTtcblxuICAgIHNlcnZpY2UuZGVyZWdpc3RlckhhbmRsZXJzKHVwZGF0ZS5rZXkpO1xuXG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjbkZsZXhGb3JtUmVwcm9jZXNzRmllbGQnLCB1cGRhdGUua2V5KTtcblxuICAgIC8vIHdoeSBkbyB3ZSByZWRyYXc/IElmIHdlJ3JlIGRvaW5nIGl0IHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAgIC8vIHRoYXQgaGFzIGJlZW4gYWRkcmVzc2VkIGZyb20gdGhlIGFuZ3VsYXItc2NoZW1hLWZvcm0gbGlicmFyeVxuICAgIC8vIGlmIHRoZXJlJ3MgYW5vdGhlciBpc3N1ZSwgdHJ5IHRyaWdnZXJpbmcgdGhlIHNwZWNpZmljIGFjdGlvbiByZXF1aXJlZFxuICAgIC8vIGluc3RlYWQgb2YgcmVkcmF3aW5nIHRoZSB3aG9sZSBmb3JtXG4gICAgaWYocmVkcmF3ICYmIGN1cnJlbnQucmVkcmF3KSBjdXJyZW50LnJlZHJhdygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5LCBrZXlzKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgaWYoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJy4nICsgc3ViS2V5LCBrZXlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZihzY2hlbWEuaXRlbXMgJiYgc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMpIHtcbiAgICAgIF8uZWFjaChzY2hlbWEucHJvcGVydGllcywgZnVuY3Rpb24oc2NoZW1hLCBzdWJLZXkpIHtcbiAgICAgICAgcmVwcm9jZXNzU2NoZW1hKHNjaGVtYSwga2V5ICsgJ1tdLicgKyBzdWJLZXksIGtleXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRFcnJvcihmaWVsZCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5ID0gc2VydmljZS5nZXRLZXkoZmllbGQua2V5KTtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvclxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RFcnJvcnMoKSB7XG4gICAgdmFyIHNlcnZpY2UgPSB0aGlzO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VydmljZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm0uZXJyb3IuJyArIGVycm9yLmtleSwgJ3NlcnZlclZhbGlkYXRpb24nLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZUFycmF5SW5kZXgocmVzb2x2ZSwga2V5KSB7XG4gICAgaWYoIXJlc29sdmUuaW5jbHVkZXMoJ2FycmF5SW5kZXgnKSkgcmV0dXJuIHJlc29sdmU7XG4gICAgdmFyIGFycmF5SW5kZXhLZXkgPSAvKFteLl0qKVxcW2FycmF5SW5kZXhcXF0vLmV4ZWMocmVzb2x2ZSk7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChhcnJheUluZGV4S2V5WzFdICsgJ1xcXFxbKFxcXFxkKylcXFxcXScpO1xuICAgIHZhciBpbmRleCA9IHJlLmV4ZWMoa2V5KTtcbiAgICByZXR1cm4gcmVzb2x2ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYXJyYXlJbmRleEtleVswXS5yZXBsYWNlKC8oXFxbfFxcXSkvZywgJ1xcXFwkMScpLCAnZycpLCBpbmRleFswXSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGtleSkge1xuICAgIGlmKF8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgcmV0dXJuIF8uZmluZChrZXkua2V5LCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaXNOdW1iZXIoa2V5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gL1xcWyhcXGQrKVxcXS8uZXhlYyhrZXkpWzFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFycmF5SW5kZXgoa2V5LCBpbmRleCwgYXNBcnJheSkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICB2YXIga2V5Q29weTtcbiAgICBpZihfLmlzU3RyaW5nKGtleSkpIHtcbiAgICAgIGtleUNvcHkgPSBPYmplY3RQYXRoLnBhcnNlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleUNvcHkgPSBfLmNsb25lKGtleSk7XG4gICAgfVxuICAgIHZhciBpbmRleE9mSW5kZXggPSBrZXlDb3B5LmluZGV4T2YoJycpO1xuICAgIGtleUNvcHlbaW5kZXhPZkluZGV4XSA9IGluZGV4O1xuXG4gICAgaWYoYXNBcnJheSkge1xuICAgICAgcmV0dXJuIGtleUNvcHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZXJ2aWNlLmdldEtleShrZXlDb3B5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciBzZXJ2aWNlID0gdGhpcztcbiAgICBfLmVhY2goc2VydmljZS5ldmVudHMsIGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9XG59XG5cbi8vYW5ndWxhclxuICAgIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgICAvLy5wcm92aWRlcignY25GbGV4Rm9ybVNlcnZpY2UnLCBjbkZsZXhGb3JtU2VydmljZVByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY25GbGV4Rm9ybVNlcnZpY2VQcm92aWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbi1mbGV4LWZvcm0uc2VydmljZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9iamVjdHBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvYmplY3RwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbW9kYWxNYXAgPSB7fTtcbmNvbnN0IHByb21pc2VNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0UHJvbWlzZXMoc3RhdGUpIHtcbiAgaWYocHJvbWlzZU1hcFtzdGF0ZV0pIHJldHVybiBwcm9taXNlTWFwW3N0YXRlXTtcblxuICBjb25zdCBwcm9taXNlID0ge307XG4gIHByb21pc2VNYXBbc3RhdGVdID0gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSkge1xuICBjb25zdCBwcm9taXNlcyA9IGdldFByb21pc2VzKHN0YXRlKTtcbiAgaWYocHJvbWlzZXNbaWRdKSByZXR1cm4gcHJvbWlzZXNbaWRdO1xuXG4gIGNvbnN0IHByb21pc2UgPSAkcS5kZWZlcigpO1xuICBwcm9taXNlc1tpZF0gPSBwcm9taXNlO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZVByb3ZpZGVyKCkge1xuICBwYXJlbnQuJGluamVjdCA9IFsnJHN0YXRlUGFyYW1zJywgJyRxJ107XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXBwaW5nLFxuICAgICRnZXQ6IGNuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2VcbiAgfTtcblxuICAvLy8vLy8vLy8vLy9cblxuICBmdW5jdGlvbiBhZGRNYXBwaW5nKHN0YXRlLCBkZWYpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHsgcGFyZW50IH07XG4gICAgbW9kYWxNYXBbc3RhdGVdID0gZGVmO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW50KCRzdGF0ZVBhcmFtcywgJHEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQgfSkgPT4gcGFyZW50KVxuICAgICk7XG4gIH1cbn1cblxuY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZS4kaW5qZWN0ID0gWyckc3RhdGVQYXJhbXMnLCAnJHEnXTtcblxuZnVuY3Rpb24gY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSgkc3RhdGVQYXJhbXMsICRxKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNYXBwaW5nLFxuICAgIHJlc29sdmVNYXBwaW5nXG4gIH07XG5cbiAgLy8vLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVNYXBwaW5nKHN0YXRlLCBpZCwgcGFyZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHNjb3BlIH0gPSBvcHRpb25zO1xuICAgIGlmKHNjb3BlKSB7XG4gICAgICBzY29wZS5vcHRpb25zID0gc2NvcGUub3B0aW9ucyB8fCB7fTtcbiAgICAgIHNjb3BlLm9wdGlvbnMuZGVzdHJveVN0cmF0ZWd5ID0gJ3JldGFpbic7XG4gICAgICBtb2RhbE1hcFtzdGF0ZV0uc2NvcGUgPSBzY29wZTtcbiAgICB9XG4gICAgY29uc3QgZCA9IGdldFByb21pc2Uoc3RhdGUsIGlkLCAkcSk7XG4gICAgZC5yZXNvbHZlKHsgcGFyZW50LCBvcHRpb25zIH0pO1xuICAgIHJldHVybiBkLnByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXBwaW5nKHN0YXRlKSB7XG4gICAgY29uc3QgZCA9ICRxLmRlZmVyKCk7XG4gICAgZ2V0UHJvbWlzZSgkc3RhdGVQYXJhbXMubW9kYWwsICRzdGF0ZVBhcmFtcy5tb2RhbElkLCAkcSlcbiAgICAgIC5wcm9taXNlXG4gICAgICAudGhlbigoeyBwYXJlbnQsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgICBkLnJlc29sdmUoeyBzdGF0ZTogbW9kYWxNYXBbc3RhdGVdLCBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGQucHJvbWlzZTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8ucHJvdmlkZXIoJ2NuRmxleEZvcm1Nb2RhbExvYWRlclNlcnZpY2UnLCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlUHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5zZXJ2aWNlLmpzIiwiRmxleEZvcm1Nb2RhbExvYWRlci4kaW5qZWN0ID0gW1xuICAnRmxleEZvcm1Nb2RhbCcsICckc3RhdGUnLCAnJHJvb3RTY29wZScsICckc3RhdGVQYXJhbXMnXG5dO1xuXG5mdW5jdGlvbiBGbGV4Rm9ybU1vZGFsTG9hZGVyKEZsZXhGb3JtTW9kYWwsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgY29uc3Qgdm0gPSB0aGlzO1xuXG4gIGFjdGl2YXRlKCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIEZsZXhGb3JtTW9kYWxcbiAgICAgIC5vcGVuKHZtKVxuICAgICAgLnRoZW4oKHsgbW9kYWwsIG9wdGlvbnM6IHsgb25EaXNtaXNzIH0gfSkgPT4ge1xuICAgICAgICB2bS5tb2RhbCA9IG1vZGFsO1xuICAgICAgICB2bS5tb2RhbC5yZXN1bHQuZmluYWxseShnb0JhY2spO1xuICAgICAgICBpZihvbkRpc21pc3MpIHZtLm1vZGFsLnJlc3VsdC5jYXRjaCgoKSA9PiBvbkRpc21pc3MoJHN0YXRlUGFyYW1zLnJlc3RQYXJhbXMpKTtcbiAgICAgICAgdm0uZGlzbWlzc0V2ZW50ID0gJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZGlzbWlzc01vZGFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGlmKCEkc3RhdGUudHJhbnNpdGlvbikge1xuICAgICAgJHN0YXRlLmdvKCdeJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlzbWlzc01vZGFsKCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXNtaXNzTW9kYWwnKTtcbiAgICB2bS5kaXNtaXNzRXZlbnQoKTtcbiAgICB2bS5tb2RhbC5kaXNtaXNzKCk7XG4gIH1cbn1cblxuRmxleEZvcm1Nb2RhbC4kaW5qZWN0ID0gWydjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlJywgJyR1aWJNb2RhbCcsICckc3RhdGVQYXJhbXMnXTtcbmZ1bmN0aW9uIEZsZXhGb3JtTW9kYWwoY25GbGV4Rm9ybU1vZGFsTG9hZGVyU2VydmljZSwgJHVpYk1vZGFsLCAkc3RhdGVQYXJhbXMpIHtcblxuICByZXR1cm4geyBvcGVuIH07XG5cbiAgLy8vLy8vLy8vLy8vXG4gIFxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICBjbkZsZXhGb3JtTW9kYWxMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRNYXBwaW5nKCRzdGF0ZVBhcmFtcy5tb2RhbClcbiAgICAgICAgLnRoZW4oKHsgc3RhdGUsIG9wdGlvbnMgfSkgPT4gKHtcbiAgICAgICAgICBtb2RhbDogJHVpYk1vZGFsLm9wZW4oc3RhdGUpLFxuICAgICAgICAgIG9wdGlvbnMgXG4gICAgICAgIH0pKVxuICAgICk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uY29udHJvbGxlcignRmxleEZvcm1Nb2RhbExvYWRlcicsIEZsZXhGb3JtTW9kYWxMb2FkZXIpXG4gICAgLy8uZmFjdG9yeSgnRmxleEZvcm1Nb2RhbCcsIEZsZXhGb3JtTW9kYWwpO1xuXG5leHBvcnQgeyBGbGV4Rm9ybU1vZGFsTG9hZGVyLCBGbGV4Rm9ybU1vZGFsIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLW1vZGFsLWxvYWRlci5qcyIsImZ1bmN0aW9uIGNuRmxleEZvcm0oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTogJ1xcXG4gICAgICA8ZGl2IG5nLWlmPVwidm0uc2hvd0Zvcm0oKVwiPlxcXG4gICAgICAgIDxuZy1mb3JtIG5hbWU9XCJ7e3ZtLmZvcm1OYW1lfX1cIlxcXG4gICAgICAgICAgICAgIHNmLXNjaGVtYT1cInZtLmNvbmZpZy5zY2hlbWEuc2NoZW1hXCJcXFxuICAgICAgICAgICAgICBzZi1mb3JtPVwidm0uZm9ybVwiXFxcbiAgICAgICAgICAgICAgc2YtbW9kZWw9XCJ2bS5tb2RlbFwiPjwvbmctZm9ybT5cXFxuICAgICAgICA8IS0tIGRlYnVnIHBhbmVsIHRvIGRpc3BsYXkgbW9kZWwgLS0+XFxcbiAgICAgICAgPHNlY3Rpb24gbmctaWY9XCJ2bS5kZWJ1Z1wiPjxwcmUgcHJldHR5LWpzb249XCJ2bS5tb2RlbFwiPjwvcHJlPjwvc2VjdGlvbj5cXFxuICAgICAgPC9kaXY+XFxcbiAgICAnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjb25maWc6ICc9ZmZDb25maWcnLFxuICAgICAgbW9kZWw6ICc9ZmZNb2RlbCcsXG4gICAgICBmb3JtSW5kZXg6ICc9ZmZGb3JtSW5kZXgnLFxuICAgICAgZm9ybU5hbWU6ICc9ZmZGb3JtTmFtZScsXG4gICAgICBkZWxheUZvcm06ICc9ZmZEZWxheUZvcm0nLFxuICAgICAgY2xlYW51cEV2ZW50OiAnPWZmQ2xlYW51cEV2ZW50J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogRmxleEZvcm0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcbn1cblxuRmxleEZvcm0uJGluamVjdCA9IFsnY25GbGV4Rm9ybVNlcnZpY2UnLCAnJHNjb3BlJywgJyRsb2NhdGlvbiddO1xuZnVuY3Rpb24gRmxleEZvcm0oY25GbGV4Rm9ybVNlcnZpY2UsICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gIHZhciB2bSA9IHRoaXM7XG4gIHZtLnNlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIHZtLmV2ZW50cyA9IFtdO1xuXG4gIHZtLmFjdGl2YXRlID0gYWN0aXZhdGU7XG4gIHZtLmNsZWFudXAgPSBjbGVhbnVwO1xuICB2bS5wcm9jZXNzID0gcHJvY2VzcztcbiAgdm0uc2hvd0Zvcm0gPSBzaG93Rm9ybTtcblxuICB2bS5ldmVudHMucHVzaCgkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkgeyByZXR1cm4gdm0uY29uZmlnLnNjaGVtYTsgfSwgdm0ucHJvY2VzcykpO1xuXG4gIHZtLmFjdGl2YXRlKCk7XG5cbiAgJHNjb3BlLiRvbih2bS5jbGVhbnVwRXZlbnQgfHwgJyRkZXN0cm95Jywgdm0uY2xlYW51cCk7XG5cbiAgLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICAgIC8vY29uc29sZS5sb2coJ3ZtLmZvcm1OYW1lOicsIHZtLmZvcm1OYW1lKTtcbiAgICBpZihhbmd1bGFyLmlzTnVtYmVyKHZtLmZvcm1JbmRleCkpIHtcbiAgICAgIHZtLmZvcm0gPSB2bS5jb25maWcuc2NoZW1hLmZvcm1zW3ZtLmZvcm1JbmRleF0uZm9ybTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2bS5mb3JtID0gdm0uY29uZmlnLnNjaGVtYS5mb3JtO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgaWYoJGxvY2F0aW9uLnNlYXJjaCgpLmRlYnVnKSB7XG4gICAgICB2bS5kZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhjdXIsIHByZXYpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdwcm9jZXNzOicsIGN1ciwgcHJldik7XG4gICAgaWYodm0uZm9ybSkge1xuICAgICAgaWYoIXZtLnNlcnZpY2UpIHtcbiAgICAgICAgdm0uc2VydmljZSA9IGNuRmxleEZvcm1TZXJ2aWNlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsLCB7XG4gICAgICAgICAgZm9ybUN0cmw6IHZtLmNvbmZpZy5mb3JtQ3RybCxcbiAgICAgICAgICBnZXRTY2hlbWE6IHZtLmNvbmZpZy5nZXRTY2hlbWEsXG4gICAgICAgICAgdXBkYXRlU2NoZW1hOiB1cGRhdGVTY2hlbWFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZtLnNlcnZpY2UuaXNDb21waWxlZCgpOicsIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpKTtcbiAgICAgICAgdm0uc2VydmljZS5jb21waWxlKHZtLmNvbmZpZy5zY2hlbWEsIHZtLm1vZGVsKTtcbiAgICAgIH1cbiAgICAgIC8vJHNjb3BlLiRicm9hZGNhc3QoJ3NjaGVtYUZvcm1SZWRyYXcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdzaG93Rm9ybTonLCB2bS5kZWxheUZvcm0sIHZtLmZvcm1OYW1lKTtcbiAgICByZXR1cm4gIXZtLmRlbGF5Rm9ybSAmJiB2bS5zZXJ2aWNlICYmIHZtLnNlcnZpY2UuaXNDb21waWxlZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2NoZW1hKHNjaGVtYSkge1xuICAgIHZtLmNvbmZpZy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdm0uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgXy5lYWNoKHZtLmV2ZW50cywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgdm0uc2VydmljZS5jbGVhbnVwKCk7XG4gIH1cblxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtJywgY25GbGV4Rm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLmRpcmVjdGl2ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjbkZsZXhGb3JtSGVhZGVyKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNvbmZpZzogJz1mZkhlYWRlckNvbmZpZycsXG4gICAgICBzdWJtaXQ6ICcmZmZTdWJtaXQnLFxuICAgICAgbG9hZE9mZnNjcmVlbjogJyZmZkxvYWRPZmZzY3JlZW4nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBGbGV4Rm9ybUhlYWRlcixcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICA8aDUgbmctaWY9XCJ2bS5jb25maWcudGl0bGUubGVhZFwiPnt7Ojp2bS5jb25maWcudGl0bGUubGVhZH19PC9oNT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICA8aSBuZy1zaG93PVwidm0uY29uZmlnLnRpdGxlLmljb25cIiBjbGFzcz1cInt7dm0uY29uZmlnLnRpdGxlLmljb259fVwiLz5cbiAgICAgICAgICAgIHt7dm0uY29uZmlnLnRpdGxlLm1haW59fVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGg1IG5nLWlmPVwidm0uY29uZmlnLnRpdGxlLnN1YlwiPnt7Ojp2bS5jb25maWcudGl0bGUuc3VifX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7dm0uY29uZmlnLmJ1dHRvbkNvbnRhaW5lckNsYXNzIHx8ICdwYWdlLWFjdGlvbi1idG5zJ319XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1vcHRpb25zXCJcbiAgICAgICAgICAgICAgIG5nLW1vdXNlb3Zlcj1cInZtLmxvYWRPZmZzY3JlZW4oKVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQtZGFya1wiXG4gICAgICAgICAgICAgICBuZy1pZj1cInZtLmNvbmZpZy5hY3Rpb25Db25maWcucmV0dXJuU3RhdGVcIlxuICAgICAgICAgICAgICAgdWktc3JlZj1cInt7dm0uY29uZmlnLmFjdGlvbkNvbmZpZy5yZXR1cm5TdGF0ZX19XCI+XG4gICAgICAgICAgICAgIHt7dm0uY29uZmlnLmFjdGlvbkNvbmZpZy5yZXR1cm5UZXh0IHx8ICdDYW5jZWwnfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0LWRhcmtcIlxuICAgICAgICAgICAgICAgbmctaWY9XCJ2bS5jb25maWcuYWN0aW9uQ29uZmlnLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgICAgIG5nLWNsaWNrPVwidm0uY29uZmlnLmFjdGlvbkNvbmZpZy5jbG9zZUJ1dHRvbi5oYW5kbGVyKClcIj5cbiAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gbmctcmVwZWF0PVwiYnV0dG9uIGluIHZtLmNvbmZpZy5hY3Rpb25Db25maWcuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBuZy1jbGFzcz1cInsnYnRuLWdyb3VwJzogYnV0dG9uLm9wdGlvbnN9XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZy5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19XCJcbiAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgbmctY2xpY2s9XCJ2bS5zdWJtaXQoe2hhbmRsZXI6IGJ1dHRvbi5oYW5kbGVyfSlcIlxuICAgICAgICAgICAgICAgICAgIHVpYi10b29sdGlwPVwie3tidXR0b24uaGVscHRleHR9fVwiXG4gICAgICAgICAgICAgICAgICAgdWliLXRvb2x0aXAtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICBuZy1iaW5kLWh0bWw9XCJidXR0b24udGV4dCB8fCAnU2F2ZSdcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4ge3tidXR0b24uc3R5bGUgPyAnYnRuLScrYnV0dG9uLnN0eWxlIDogKCRpbmRleCA9PT0gdm0uY29uZmlnLmFjdGlvbkNvbmZpZy5hY3Rpb25zLmxlbmd0aCAtIDEgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1kZWZhdWx0LWRhcmsnKX19IGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1kaXNhYmxlZD1cInZtLmlzRGlzYWJsZWQoYnV0dG9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwiYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLWlmPVwiYnV0dG9uLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJvcHRpb24gaW4gYnV0dG9uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIG5nLWRpc2FibGVkPVwidm0uaXNEaXNhYmxlZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIG5nLWNsaWNrPVwidm0uc3VibWl0KHtoYW5kbGVyOiBvcHRpb24uaGFuZGxlcn0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbmctYmluZC1odG1sPVwib3B0aW9uLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkYXRhLXVwZGF0ZWQtYXQgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgaWQ9XCJkYXRhLXVwZGF0ZWQtYXRcIlxuICAgICAgICAgICAgIG5nLWhpZGU9XCJ2bS5jb25maWcubm9EYXRhXCI+XG4gICAgICAgICAgICA8YSBuZy1jbGljaz1cInZtLnVwZGF0ZURhdGEoKVwiPlVwZGF0ZSBEYXRhPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+YFxuICB9O1xufVxuXG5GbGV4Rm9ybUhlYWRlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbmZ1bmN0aW9uIEZsZXhGb3JtSGVhZGVyKCRzY29wZSkge1xuICB2YXIgdm0gPSB0aGlzO1xuXG4gIHZtLnVwZGF0ZURhdGEgPSB1cGRhdGVEYXRhO1xuICB2bS5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblxuICAvLy8vLy8vLy8vL1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZURhdGE6JywgdXBkYXRlRGF0YSk7XG4gICAgJHNjb3BlLiRlbWl0KCdmZlJlZnJlc2hEYXRhJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Rpc2FibGVkKGJ0bkNvbmZpZykge1xuICAgIGlmKHZtLmNvbmZpZy5pc0Rpc2FibGVkKSByZXR1cm4gdm0uY29uZmlnLmlzRGlzYWJsZWQoYnRuQ29uZmlnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy9hbmd1bGFyXG4gIC8vLm1vZHVsZSgnY24uZmxleC1mb3JtJylcbiAgLy8uZGlyZWN0aXZlKCdjbkZsZXhGb3JtSGVhZGVyJywgY25GbGV4Rm9ybUhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGNuRmxleEZvcm1IZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLWhlYWRlci5kaXJlY3RpdmUuanMiLCJmdW5jdGlvbiBmZlZhbGlkYXRlKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHsgZm9ybTogJz1mZlZhbGlkYXRlJyB9LFxuICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICBsaW5rOiBsaW5rXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgbmdNb2RlbCkge1xuICAvL2NvbnNvbGUubG9nKCckc2NvcGUsIG5nTW9kZWw6JywgJHNjb3BlLmZvcm0sIG5nTW9kZWwpO1xuICBpZigkc2NvcGUuZm9ybSAmJiAkc2NvcGUuZm9ybS5yZXF1aXJlZCkge1xuICAgICRzY29wZS4kd2F0Y2goZnVuY3Rpb24oKSB7IHJldHVybiBuZ01vZGVsLiR2aWV3VmFsdWU7IH0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvdmVycmlkZSBzY2hlbWFGb3JtIHZhbGlkYXRpb25cbiAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdzY2hlbWFGb3JtJywgdHJ1ZSk7XG4gICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgndHY0LTMwMicsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vL2FuZ3VsYXJcbiAgICAvLy5tb2R1bGUoJ2NuLmZsZXgtZm9ybScpXG4gICAgLy8uZGlyZWN0aXZlKCdmZlZhbGlkYXRlJywgZmZWYWxpZGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZmVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY24tZmxleC1mb3JtLXZhbGlkYXRlLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=