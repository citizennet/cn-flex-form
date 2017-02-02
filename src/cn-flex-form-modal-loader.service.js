const modalMap = {};
const promiseMap = {};

function getPromises(state) {
  if(promiseMap[state]) return promiseMap[state];

  const promise = {};
  promiseMap[state] = promise;
  return promise;
}

function getPromise(state, id, $q) {
  const promises = getPromises(state);
  if(promises[id]) return promises[id];

  const promise = $q.defer();
  promises[id] = promise;
  return promise;
}

function cnFlexFormModalLoaderServiceProvider() {

  return {
    addMapping,
    $get: cnFlexFormModalLoaderService
  };

  ////////////

  function addMapping(state, def) {
    def.resolve = { parent };
    modalMap[state] = def;
  }

  function parent($stateParams, $q) {
    'ngInject';

    return (
      getPromise($stateParams.modal, $stateParams.modalId, $q)
      .promise
      .then(({ parent }) => parent)
    );
  }
}

function cnFlexFormModalLoaderService($stateParams, $q) {
  'ngInject';

  return {
    getMapping,
    resolveMapping
  };

  /////////////

  function resolveMapping(state, id, parent, options = {}) {
    const { scope } = options;
    if(scope) {
      scope.options = scope.options || {};
      scope.options.destroyStrategy = 'retain';
      modalMap[state].scope = scope;
    }
    const d = getPromise(state, id, $q);
    d.resolve({ parent, options });
    return d.promise;
  }

  function getMapping(state) {
    const d = $q.defer();
    getPromise($stateParams.modal, $stateParams.modalId, $q)
      .promise
      .then(({ parent, options }) => {
        d.resolve({ state: modalMap[state], options });
        return parent;
      });
    return d.promise;
  }
}

//angular
    //.module('cn.flex-form')
    //.provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider);

export default cnFlexFormModalLoaderServiceProvider;
