(function() {
  angular
      .module('cn.flex-form')
      .provider('cnFlexFormRoutes', cnFlexFormRoutesProvider)
      .config(cnFlexFormRoutes);

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

    function addStates(options) {
      $stateProvider
          .state(options.name + '.page.modal', {
            url: '/~:modal/:modalId',
            controller: 'FlexFormModalLoader',
            controllerAs: 'vm',
            permissions: options.permissions
          });
    }
  }

  cnFlexFormRoutes.$inject = ['$stateProvider'];
  function cnFlexFormRoutes($stateProvider) {

    $stateProvider
        .state('flex-form-sandbox', {
          url: '/flex-form/sandbox',
          controller: 'FlexFormSandbox',
          controllerAs: 'vm',
          templateUrl: 'app/components/cn-flex-form/sandbox.html'
        });
  }

})();