(function() {
  'use strict';
  angular
      .module('cn.flex-form')
      .provider('cnFlexFormConfig', cnFlexFormConfigProvider);

  function cnFlexFormConfigProvider() {

    cnFlexFormConfig.$inject = ['$stateParams'];

    var ignoreParams = ['page', 'debug', 'sandbox', 'modal', 'modalId'];

    return {
      addIgnoreParam: addIgnoreParam,
      $get: cnFlexFormConfig
    };

    ////////

    function addIgnoreParam(param) {
      ignoreParams.push(param);
    }

    function cnFlexFormConfig($stateParams) {
      return {
        getStateParams,
        ignoreParams
      };

      ////////

      function getStateParams() {
        return _
            .chain($stateParams)
            .omit(ignoreParams)
            .omit(function(v) {
              return _.isUndefined(v) || _.isNull(v);
            })
            .value();
      }
    }

  }

})();
