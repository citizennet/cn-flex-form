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
          <h5 ng-if="vm.title.lead">{{::vm.title.lead}}</h5>
          <h1>
            <i ng-show="vm.title.icon" class="{{vm.title.icon}}"/>
            {{vm.title.main}}
          </h1>
          <h5 ng-if="vm.title.sub">{{::vm.title.sub}}</h5>
        </div>
        <div class="{{vm.buttonContainerClass || 'page-action-btns'}}">
          <div class="btn-options"
               ng-mouseover="vm.loadOffscreen()">
            <a class="btn btn-{{vm.returnStyle ? vm.returnStyle : 'default-dark'"
               ng-if="vm.returnState"
               ui-sref="{{vm.returnState}}">
              {{vm.returnText || 'Cancel'}}
            </a>
            <a class="btn btn-{{vm.closeButton.style ? vm.closeButton.style : 'default-dark'}}"
               ng-if="vm.closeButton"
               ng-click="vm.closeButton.handler()">
               Cancel
            </a>
            <span ng-repeat="button in vm.actions">
              <span ng-class="{'btn-group': button.options}">
                <a class="btn {{button.style ? 'btn-'+button.style : ($index === vm.actions.length - 1 ? 'btn-primary' : 'btn-default-dark')}}"
                   ng-disabled="vm.isDisabled(button)"
                   ng-click="vm.submit({handler: button.handler})"
                   uib-tooltip="{{button.helptext}}"
                   uib-tooltip-placement="bottom"
                   ng-bind-html="button.text || 'Save'">
                </a>
                <a class="btn {{button.style ? 'btn-'+button.style : ($index === vm.actions.length - 1 ? 'btn-primary' : 'btn-default-dark')}} dropdown-toggle"
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

function FlexFormHeader($scope) {
  'ngInject';

  function ffHeaderTag() {}
  $scope.__tag = new ffHeaderTag();

  const vm = this;

  vm.updateData = updateData;
  vm.isDisabled = isDisabled;

  activate();

  ///////////

  function activate() {
    ({ title: vm.title } = vm.config);
    ({
      returnState: vm.returnState,
      returnStyle: vm.returnStyle,
      returnText: vm.returnText,
      closeButton: vm.closeButton,
      actions: vm.actions
    } = vm.config.actionConfig || {});
  }

  function updateData() {
    $scope.$emit('ffRefreshData');
  }

  function isDisabled(btnConfig) {
    if(vm.config.isDisabled) return vm.config.isDisabled(btnConfig);
    return false;
  }
}

export default cnFlexFormHeader;
