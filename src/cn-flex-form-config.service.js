function cnFlexFormConfigProvider() {

  const ignoreParams = ['page', 'debug', 'sandbox', 'modal', 'modalId'];

  return {
    addIgnoreParam,
    $get: cnFlexFormConfig
  };

  ////////

  function addIgnoreParam(param) {
    ignoreParams.push(param);
  }

  function cnFlexFormConfig($stateParams) {
    'ngInject';

    return {
      getStateParams,
      ignoreParams
    };

    ////////

    function getStateParams(overrides = {}) {
      return (
        _({ ...$stateParams, ...overrides })
        .omit(ignoreParams)
        .omit(v => (_.isUndefined(v) || v === null))
        .value()
      );
    }
  }

}

//angular
    //.module('cn.flex-form')
    //.provider('cnFlexFormConfig', cnFlexFormConfigProvider);

export default cnFlexFormConfigProvider;
