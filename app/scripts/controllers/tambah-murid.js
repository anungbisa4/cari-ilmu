(function() {
  'use strict';
  angular
    .module('batch4TeamBFrontendApp')
    .controller('TambahMuridCtrl', TambahMuridCtrl);

  TambahMuridCtrl.$inject = ['$scope', '$mdDialog', '$state', 'authServices'];

  function TambahMuridCtrl($scope, $mdDialog, $state, authServices) {

    var token = authServices.isLoggedIn();
    $scope.name = null;
    $scope.email = null;
    $scope.username = null;
    $scope.phoneNumber = null;
    $scope.password = null;

    // Insert Student
    $scope.saveStudent = function() {
      var promise = authServices.insertStudent(
        $scope.name,
        $scope.email,
        $scope.username,
        $scope.phoneNumber,
        $scope.password,
        token
      );

      promise
        .then(function(response) {
          var status = response.data.status.errorType;
          if (status === "success") {
            console.log(status);
            var confirm = $mdDialog.confirm()
              .title('Data kelas tersimpan')
              .ariaLabel('Lucky day')
              .ok('OK')
              .cancel('CANCEL');
            console.log('Salah login, coba lagi');
            $mdDialog.show(confirm).then(function() {
                $state.go('landing.tabel-murid');
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
