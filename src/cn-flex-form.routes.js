function cnFlexFormRoutesProvider($stateProvider) {
  'ngInject';

  return {
    addStates,
    $get
  };

  ////////////

  function $get() {
    // nothing to do here, but required
  }

  function addStates({ permissions, name }) {
    const shared = {
      controller: 'FlexFormModalLoader',
      controllerAs: 'vm',
      permissions
    };
    $stateProvider
        .state(`${name}.page.modal`, {
          url: '/~:modal/:modalId',
          ...shared
        })
        .state(`${name}.page.modalParams`, {
          url: '/~:modal/:modalId/:restParams',
          ...shared
        });
  }
}

function cnFlexFormRoutes($stateProvider) {
  'ngInject';

  $stateProvider
      .state('flex-form-sandbox', {
        url: '/flex-form/sandbox',
        controller: 'FlexFormSandbox',
        controllerAs: 'vm',
        templateUrl: 'app/components/cn-flex-form/sandbox.html'
      });
}

export { cnFlexFormRoutes, cnFlexFormRoutesProvider };
