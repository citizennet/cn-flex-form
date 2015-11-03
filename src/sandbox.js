(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .controller('FlexFormSandbox', FlexFormSandbox);

  /* @ngInject */
  function FlexFormSandbox() {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.onSchema = onSchema;
    vm.model = {};
    vm.config = {};
    vm.schemaStr = '';

    activate();

    ////////////////

    function activate() {
      console.log('FlexFormSandbox');
    }

    function onSchema() {
      if(vm.schemaStr) {
        var schema = angular.fromJson(vm.schemaStr);
        console.log('schema:', schema);
        if(!schema.form && schema.forms) {
          schema.form = schema.forms[0].form;
        }
        vm.config.schema = schema.form && schema;
      }
    }

  }
})();