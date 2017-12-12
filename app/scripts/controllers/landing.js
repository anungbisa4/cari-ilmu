(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ['$scope', '$http', 'authServices', '$state', '$timeout'];

  function LandingCtrl($scope, $http, authServices, $state, $timeout) {
    // // Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }

    // Sign out

    $scope.signout = function() {

      if (authServices.removeToken()) {
        console.log('kehapus');

      } else {
        console.log('ni masih ada masalah');
        $state.go('login');
      }

    };

    // Another Function



  }

})();
