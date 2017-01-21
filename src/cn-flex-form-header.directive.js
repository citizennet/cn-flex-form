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
          <h1>
            <i ng-show="vm.config.title.icon" class="{{vm.config.title.icon}}"/>
            {{vm.config.title.main}}
          </h1>
          <h5 ng-if="vm.config.title.sub">{{::vm.config.title.sub}}</h5>
        </div>
        <div class="{{vm.config.buttonContainerClass || 'page-action-btns'}}">
          <div class="btn-options"
               ng-mouseover="vm.loadOffscreen()">
            <a class="btn btn-default-dark"
               ng-if="vm.config.actionConfig.returnState"
               ui-sref="{{vm.config.actionConfig.returnState}}">
              {{vm.config.actionConfig.returnText || 'Cancel'}}
            </a>
            <a class="btn btn-default-dark"
               ng-if="vm.config.actionConfig.closeButton"
               ng-click="vm.config.actionConfig.closeButton.handler()">
               Cancel
            </a>
            <span ng-repeat="button in vm.config.actionConfig.actions">
              <span ng-class="{'btn-group': button.options}">
                <a class="btn {{button.style ? 'btn-'+button.style : ($index === vm.config.actionConfig.actions.length - 1 ? 'btn-primary' : 'btn-default-dark')}}"
                   ng-disabled="vm.isDisabled(button)"
                   ng-click="vm.submit({handler: button.handler})"
                   uib-tooltip="{{button.helptext}}"
                   uib-tooltip-placement="bottom"
                   ng-bind-html="button.text || 'Save'">
                </a>
                <a class="btn {{button.style ? 'btn-'+button.style : ($index === vm.config.actionConfig.actions.length - 1 ? 'btn-primary' : 'btn-default-dark')}} dropdown-toggle"
                        ng-disabled="vm.isDisabled(button)"
                        ng-show="button.options"
                        data-toggle="dropdown">
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" ng-if="button.options">
                  <li ng-repeat="option in button.options"
                      ng-disabled="vm.isDisabled(option)">
                    <a ng-click="vm.submit({handler: option.handler})"
                       ng-bind-html="option.text">
                    </a>
                  </li>
                </ul>
              </span>
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

//angular
  //.module('cn.flex-form')
  //.directive('cnFlexFormHeader', cnFlexFormHeader);

export default cnFlexFormHeader;
