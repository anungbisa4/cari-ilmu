(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$http', 'authServices', '$state'];

  function MainCtrl($scope, $http, authServices, $state) {
    // Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // Classes
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllClassesList(token);
    promise
      .then(function(response) {
        $scope.dataClassess = response.data;

      })
      .catch(function error() {
        console.log('error');
      });

    $scope.page = function() {

    };

    // Student
    var promise2 = authServices.getAllStudentList(token);

    promise2
      .then(function(response) {
        $scope.dataStudent = response.data;

      })
      .catch(function error() {
        console.log('error');
      });

    // Teacher
    var promise3 = authServices.getAllTeacherList(token);

    promise3
      .then(function(response) {
        $scope.dataTeacher = response.data;
      })
      .catch(function error() {
        console.log('error');
      });

    // end function
  }

})();
