(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')

    .factory('authHttpResponseInterceptor', authHttpResponseInterceptor);

  authHttpResponseInterceptor.$inject = ['$q', '$location'];

  function authHttpResponseInterceptor($q, $location) {
    return {
      response: function(response) {
        if (response.status === 401) {
          console.log("Response 401");
        }
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        if (rejection.status === 401) {
          console.log("Response Error 401", rejection);
          $location.path('/login').search('returnTo', $location.path());
        }
        return $q.reject(rejection);
      }
    }
  }

})();
