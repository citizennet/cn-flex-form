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

    var vm = this;
    console.log('FlexFormModalLoader:', $stateParams.modal);

    activate();

    //////////

    function activate() {
      vm.modal = FlexFormModal.open(vm);
      vm.modal.result.finally(goBack);

      vm.dismiss = $rootScope.$on('$stateChangeStart', dismissModal);
    }

    function goBack() {
      $state.go('^');
    }

    function dismissModal() {
      console.log('dismissModal:', arguments);
      vm.dismiss();
      vm.modal.dismiss();
    }
  }

  FlexFormModal.$inject = ['cnFlexFormModalLoaderService', '$modal', '$stateParams'];
  function FlexFormModal(cnFlexFormModalLoaderService, $modal, $stateParams) {

    var instance = {
      open: openModal
    };

    return instance;

    function openModal() {
      var currentModal = cnFlexFormModalLoaderService.getMapping($stateParams.modal);
      console.log('currentModal:', currentModal);

      this.modal = $modal.open(currentModal);
      return this.modal;
    }

  }

})();
