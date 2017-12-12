(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('TabelMuridCtrl', TabelMuridCtrl);

  TabelMuridCtrl.$inject = ['authServices', '$scope', '$state', '$mdDialog'];

  function TabelMuridCtrl(authServices, $scope, $state, $mdDialog) {
    //  Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // End Access Login

    // Show Data Student
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllStudentList(token);

    promise
      .then(function(response) {
        $scope.dataStudent = response.data.results;
        console.log(response.data.results);
      })
      .catch(function error() {
        console.log('error');
      });

    // Delete Student
    $scope.showConfirm = function(ev, id) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Apakah anda yakin untuk menghapus kelas ini?')
        .textContent('Kelas akan terhapus dari database')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('OK')
        .cancel('CANCEL');

      $mdDialog.show(confirm).then(function() {

        // deleteClasses
        var promise2 = authServices.deleteStudent(id, token);

        promise2
          .then(function(response) {
            var status = response.data;

            if (status.status.errorType === "success") {
              console.log(status.id);
              $state.go('landing.tabel-murid');
              console.log('terhapus');

            }

          })
          .catch(function(error) {

            console.log(error);
          });



      }, function() {

      });
    };
    // End Function
  }
})();
