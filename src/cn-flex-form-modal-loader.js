function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams) {
  'ngInject';

  const vm = this;

  activate();

  //////////

  function activate() {
    FlexFormModal
      .open(vm)
      .then(({ modal, options: { onDismiss } }) => {
        vm.modal = modal;
        vm.modal.result.finally(goBack);
        if(onDismiss) vm.modal.result.catch(() => onDismiss($stateParams.restParams));
        vm.dismissEvent = $rootScope.$on('$stateChangeStart', dismissModal);
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
  }
}

function FlexFormModal(cnFlexFormModalLoaderService, $uibModal, $stateParams) {
  'ngInject';

  return { open };

  ////////////
  
  function open() {
    return (
      cnFlexFormModalLoaderService
        .getMapping($stateParams.modal)
        .then(({ state, options }) => ({
          modal: $uibModal.open(state),
          options 
        }))
    );
  }

}

//angular
    //.module('cn.flex-form')
    //.controller('FlexFormModalLoader', FlexFormModalLoader)
    //.factory('FlexFormModal', FlexFormModal);

export { FlexFormModalLoader, FlexFormModal };
