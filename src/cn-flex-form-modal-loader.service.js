(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);

  const modalMap = {};
  const promiseMap = {};

  function getPromises(state) {
    let promises = promiseMap[state];
    if(!promises) {
      promises = {};
      promiseMap[state] = promises;
    }
    return promises;
  }

  function getPromise(state, id, $q) {
    let promises = getPromises(state);
    let promise = promises[id];
    if(!promise) {
      promise = $q.defer();
      promises[id] = promise;
    }
    return promise;
  }

  function cnFlexFormModalLoaderServiceProvider() {
    let provider = {
      addMapping,
      $get: cnFlexFormModalLoaderService
    };

    parent.$inject = ['$stateParams', '$q'];

    return provider;

    ////////////

    function addMapping(state, def) {
      def.resolve = {
        parent: parent
      };
      modalMap[state] = def;
    }

    function parent($stateParams, $q) {
      console.log('resolve parent:', $stateParams, $q, getPromise($stateParams.modal, $stateParams.modalId, $q));
      return getPromise($stateParams.modal, $stateParams.modalId, $q).promise;
    }
  }

  cnFlexFormModalLoaderService.$inject = ['$q'];

  function cnFlexFormModalLoaderService($q) {
    const service = {
      getMapping,
      resolveMapping
    };

    return service;

    /////////////

    function resolveMapping(state, id, parent, scope) {
      if(scope) {
        scope.options = scope.options || {};
        scope.options.destroyStrategy = 'retain';
        modalMap[state].scope = scope;
        console.log('resolveMapping:', modalMap[state]);
      }
      const d = getPromise(state, id, $q);
      d.resolve(parent);
      return d.promise;
    }

    function getMapping(state) {
      return modalMap[state];
    }
  }

})();
