function cnFlexForm() {
  return {
    restrict: 'E',
    template: `
      <div ng-if="vm.showForm()">
        <ng-form
          class="clearfix"
          name="{{vm.formName}}"
          sf-schema="vm.config.schema.schema"
          sf-form="vm.form"
          sf-model="vm.model">
        </ng-form>
        <!-- debug panel to display model -->
        <section ng-if="vm.debug">
          <json-explorer json-data="vm.model || '...model not loaded yet'"/>
        </section>
      </div>
    `,
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

  vm.events.push($scope.$watch(function() { return vm.config.schema; }, vm.process));

  vm.activate();

  $scope.$on(vm.cleanupEvent || '$destroy', vm.cleanup);

  //////////

  function activate() {
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
    if(vm.form) {
      if(!vm.service) {
        vm.service = cnFlexFormService(vm.config.schema, vm.model, {
          formCtrl: vm.config.formCtrl,
          getSchema: vm.config.getSchema,
          updateSchema: updateSchema
        });
      }
      else {
        vm.service.compile(vm.config.schema, vm.model);
      }
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
    _.each(vm.events, function(listener) {
      listener();
    });

    cnFlexFormService.destroyService(vm.service);
  }

}

export default cnFlexForm;
