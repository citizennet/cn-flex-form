function cnFlexFormTypesProvider() {

  var fieldTypeRegister = [{
    condition: field => field.type === 'hidden',
    type: 'hidden'
  }, {
    condition: field => field.type.includes('radios'),
    type: 'cn-radios'
  }, {
    condition: field => field.type.includes('radiobuttons'),
    type: 'cn-radiobuttons'
  }, {
    condition: field => field.type.includes('autocomplete') || field.titleMap || field.titleMapResolve || field.titleMapQuery,
    type: 'cn-autocomplete'
  }, {
    condition: field => field.type === 'cn-datetimepicker' || field.type === 'datetime-local' || field.type === 'time-minutes',
    type: 'cn-datetimepicker'
  }, {
    condition: field => field.type === 'help',
    type: 'help'
  }, {
    condition: field => field.type.includes('display'),
    type: 'cn-display'
  }, {
    condition: field => field.schema && field.schema.format && field.schema.format.includes('currency'),
    type: 'cn-currency'
  }, {
    condition: field => field.schema && field.schema.format === 'percentage',
    type: 'cn-percentage'
  }, {
    condition: field => field.type === 'toggle' || field.type === 'boolean',
    type: 'cn-toggle'
  }, {
    condition: field => field.type === 'creativeimage',
    type: 'cn-creativeimage'
  }, {
    condition: field => field.type === 'mediaupload',
    type: 'cn-mediaupload'
  }, {
    condition: field => field.type === 'csvupload',
    type: 'cn-csvupload'
  }, {
    condition: field => field.type === 'reusable',
    type: 'cn-reusable'
  }, {
    condition: field => field.type === 'table',
    type: 'cn-table'
  }, {
    condition: field => field.type === 'array',
    type: 'array'
  }, {
    condition: field => field.type === 'schedule',
    type: 'cn-schedule'
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

export default cnFlexFormTypesProvider;
