(function() {
  'use strict';
  angular
    .module('batch4TeamBFrontendApp')
    .controller('TambahTutorCtrl', TambahTutorCtrl);

  TambahTutorCtrl.$inject = ['$scope', '$mdDialog', '$state', 'authServices'];

  function TambahTutorCtrl($scope, $mdDialog, $state, authServices) {
    var token = authServices.isLoggedIn();
    // Save Teacher
    $scope.name = null;
    $scope.email = null;
    $scope.phoneNumber = null;
    $scope.lastEducation = null;
    $scope.institution = null;

    $scope.saveTeacher = function() {
      var promise = authServices.insertTeacher(
        $scope.name,
        $scope.email,
        $scope.phoneNumber,
        $scope.lastEducation,
        $scope.institution,
        token
      );

      promise
        .then(function(response) {
          var status = response.data.status.errorType;
          if (status === "success") {
            console.log(status);
            var confirm = $mdDialog.confirm()
              .title('Data tutor tersimpan')
              .ariaLabel('Lucky day')
              .ok('OK')
              .cancel('CANCEL');
            console.log('Salah login, coba lagi');
            $mdDialog.show(confirm).then(function() {
                $state.go('landing.tabel-tutor');
              }),
              function error() {};

          }

        })
        .catch(function(error) {

          console.log(error);
        });
    };


  }

})();
