(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .provider('cnFlexFormTypes', cnFlexFormTypesProvider);

  function cnFlexFormTypesProvider() {

    var fieldTypeRegister = [{
      condition: function(field) {
        return field.type === 'hidden';
      },
      type: 'hidden'
    }, {
      condition: function(field) {
        return field.type.includes('radios');
      },
      type: 'cn-radios'
    }, {
      condition: function(field) {
        return field.type.includes('radiobuttons');
      },
      type: 'cn-radiobuttons'
    }, {
      condition: function(field) {
        return field.type.includes('autocomplete') || field.titleMap || field.titleMapResolve || field.titleMapQuery;
      },
      type: 'cn-autocomplete'
    }, {
      condition: function(field) {
        return field.type === 'cn-datetimepicker' || field.type === 'datetime-local';
      },
      type: 'cn-datetimepicker'
    }, {
      condition: function(field) {
        return field.type === 'help';
      },
      type: 'help'
    }, {
      condition: function(field) {
        return field.type.includes('display');
      },
      type: 'cn-display'
    }, {
      condition: function(field) {
        return field.schema && field.schema.format && field.schema.format.includes('currency');
      },
      type: 'cn-currency'
    }, {
      condition: function(field) {
        return field.schema && field.schema.format === 'percentage';
      },
      type: 'cn-percentage'
    }, {
      condition: function(field) {
        return field.type === 'toggle' || field.type === 'boolean';
      },
      type: 'cn-toggle'
    }, {
      condition: function(field) {
        return field.type === 'mediaupload';
      },
      type: 'cn-mediaupload'
    }, {
      condition: function(field) {
        return field.type === 'reusable';
      },
      type: 'cn-reusable'
    }, {
      condition: function(field) {
        return field.type === 'array';
      },
      type: 'section'
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
        for(var i = 0, l = fieldTypeRegister.length; i < l; i++) {
          if(fieldTypeRegister[i].condition(field)) {
            return fieldTypeRegister[i].type;
          }
        }
        return field.type || field.schema && field.schema.type;
      }
    }

  }

})();