function FlexFormModalLoader(FlexFormModal, $state, $rootScope, $stateParams, $scope) {
  'ngInject';

  function FFModalLoaderTag() {}
  $scope.__tag = FFModalLoaderTag();

  const vm = this;

  activate();

  //////////

  function activate() {
    console.log('Activate', vm)
    FlexFormModal
      .open(vm)
      .then(({ modal, options: { onDismiss, onAfterDismiss } }) => {
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
    // unbind event
    vm.dismissEvent();
    vm.modal.opened.then(() =>
        vm.modal.dismiss()
    );
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
        .then(({ state, options }) => {
          console.log('OPEN', state, options);
          return {
            modal: $uibModal.open(state),
            options
          }
        })
    );
  }

}

export { FlexFormModalLoader, FlexFormModal };
