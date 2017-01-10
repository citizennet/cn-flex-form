(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .controller('FlexFormModalLoader', FlexFormModalLoader)
      .factory('FlexFormModal', FlexFormModal);

  FlexFormModalLoader.$inject = [
    'FlexFormModal', '$state', '$rootScope', '$stateParams'
  ];
  function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams) {

    const vm = this;

    activate();

    //////////

    function activate() {
      FlexFormModal
        .open(vm)
        .then((modal) => {
          vm.modal = modal;
          vm.modal.result.finally(goBack);
          vm.dismiss = $rootScope.$on('$stateChangeStart', dismissModal);
        });
    }

    function goBack() {
      if(!$state.transition) {
        $state.go('^');
      }
    }

    function dismissModal() {
      console.log('dismissModal:', arguments);
      vm.dismiss();
      vm.modal.dismiss();
    }
  }

  FlexFormModal.$inject = ['cnFlexFormModalLoaderService', '$modal', '$stateParams'];
  function FlexFormModal(cnFlexFormModalLoaderService, $modal, $stateParams) {

    return { open };

    ////////////
    
    function open() {
      return (
        cnFlexFormModalLoaderService
          .getMapping($stateParams.modal)
          .then((currentModal) => $modal.open(currentModal))
      );
    }

  }

})();
