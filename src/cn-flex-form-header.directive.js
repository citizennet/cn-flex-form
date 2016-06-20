(function () {
  'use strict';

  angular
    .module('cn.flex-form')
    .directive('cnFlexFormHeader', cnFlexFormHeader);

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
      template: `
          <div class="col-md-6">
            <h5 ng-if="vm.config.title.lead">{{::vm.config.title.lead}}</h5>
            <h1>{{vm.config.title.main}}</h1>
            <h5 ng-if="vm.config.title.sub">{{::vm.config.title.sub}}</h5>
          </div>
          <div class="{{vm.config.buttonContainerClass || 'page-action-btns'}}">
            <div class="btn-options"
                 ng-mouseover="vm.loadOffscreen()">
              <a class="btn"
                 ng-if="vm.config.actionConfig.returnState"
                 ui-sref="{{vm.config.actionConfig.returnState}}">
                {{vm.config.actionConfig.returnText || 'Cancel'}}
              </a>
              <a class="btn"
                 ng-if="vm.config.actionConfig.closeButton"
                 ng-click="vm.config.actionConfig.closeButton.handler()">
                 Cancel
              </a>
              <span ng-repeat="button in vm.config.actionConfig.actions">
                <a class="btn {{button.style && 'btn-'+button.style}}"
                   ng-disabled="vm.isDisabled(button)"
                   ng-class="{'btn-primary': $index === vm.config.actionConfig.actions.length - 1}"
                   ng-click="vm.submit({ handler: button.handler})"
                   tooltip="{{button.helptext}}"
                   tooltip-placement="bottom"
                   ng-bind-html="button.text || 'Save'">
                </a>
              </span>
            </div>
            <p class="data-updated-at text-right"
               id="data-updated-at"
               ng-hide="vm.config.noData">
              <a ng-click="vm.updateData()">Update Data</a>
            </p>
          </div>`
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
      if(vm.config.isDisabled) return vm.config.isDisabled(btnConfig);
      return false;
    }
  }
})();
