(function() {
  'use strict';

  angular
      .module('cn.flex-form')
      .provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);

  var modalMap = {};
  var promiseMap = {};

  function getPromises(state) {
    var promises = promiseMap[state];
    if(!promises) {
      promises = {};
      promiseMap[state] = promises;
    }
    return promises;
  }

  function getPromise(state, id, $q) {
    var promises = getPromises(state);
    var promise = promises[id];
    if(!promise) {
      promise = $q.defer();
      promises[id] = promise;
    }
    return promise;
  }

  function getPromiseForResolve(state, id, $q) {
    var promises = getPromises(state);
    var promise = $q.defer();
    promises[id] = promise;
    return promise;
  }

  function cnFlexFormModalLoaderServiceProvider() {

    var provider = {
      addMapping: addMapping,
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
      return getPromise($stateParams.modal, $stateParams.modalId, $q).promise;
    }
  }

  cnFlexFormModalLoaderService.$inject = ['$q'];

  function cnFlexFormModalLoaderService($q) {
    var service = {
      getMapping: getMapping,
      resolveMapping: resolveMapping
    };

    return service;

    /////////////

    function resolveMapping(state, id, parent) {
      var d = getPromiseForResolve(state, id, $q);
      d.resolve(parent);
      return d.promise;
    }

    function getMapping(state) {
      return modalMap[state];
    }
  }

})();