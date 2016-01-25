(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .directive('cnFlexForm', cnFlexForm);

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
          <pre ng-if="vm.debug">{{vm.model|json}}</pre>\
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

    vm.events.push($scope.$watch(function() { return vm.config.schema; }, vm.process));

    vm.activate();

    $scope.$on(vm.cleanupEvent || '$destroy', vm.cleanup);

    //////////

    function activate() {
      //console.log('vm.formName:', vm.formName);
      if(angular.isNumber(vm.formIndex)) {
        vm.form = vm.config.schema.forms[vm.formIndex].form;
      }
      else {
        vm.form = vm.config.schema.form;
      }

      // debug
      if($location.search().debug) {
        vm.debug = true;
      }
    }

    function process(cur, prev) {
      //console.log('process:', cur, prev);
      if(vm.form) {
        if(!vm.service) {
          vm.service = cnFlexFormService(vm.config.schema, vm.model, {
            formCtrl: vm.config.formCtrl,
            getSchema: vm.config.getSchema,
            updateSchema: updateSchema
          });
        }
        else {
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
      _.each(vm.events, function(listener) {
        listener();
      });
      vm.service.cleanup();
    }

  }
})();