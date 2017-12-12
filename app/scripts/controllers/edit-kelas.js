(function() {
  'use strict';
  angular
    .module('batch4TeamBFrontendApp')
    .controller('EditKelasCtrl', EditKelasCtrl);

  EditKelasCtrl.$inject = ['$scope', '$filter', '$state', 'authServices', '$rootScope'];

  function EditKelasCtrl($scope, $filter, $rootScope, $state, authServices) {

    // // Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }

    $scope.list = $rootScope.classesList;

    console.log($scope.list);

  }
})();
