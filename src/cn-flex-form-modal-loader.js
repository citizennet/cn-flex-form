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
        .then(({ modal, options: { onDismiss } }) => {
          vm.modal = modal;
          vm.modal.result.finally(goBack);
          vm.dismissEvent = $rootScope.$on('$stateChangeStart', dismissModal);
          vm.onDismiss = onDismiss;
        });
    }

    function goBack() {
      if(!$state.transition) {
        $state.go('^');
      }
    }

    function dismissModal() {
      console.log('dismissModal');
      vm.dismissEvent();
      vm.modal.dismiss();
      if(vm.onDismiss) vm.onDismiss($stateParams.restParams);
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
          .then(({ state, options }) => ({
            modal: $modal.open(state),
            options 
          }))
      );
    }

  }

})();
