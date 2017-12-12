(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('TabelTutorCtrl', TabelTutorCtrl);

  TabelTutorCtrl.$inject = ['authServices', '$scope', '$mdDialog', '$state'];

  function TabelTutorCtrl(authServices, $scope, $mdDialog, $state) {
    //  Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // End Access Login
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllTeacherList(token);
    // Data Teacher
    promise
      .then(function(response) {
        $scope.dataTeacher = response.data.results;
        console.log($scope.dataTeacher);
      })
      .catch(function error() {
        console.log('error');
      });

    // Delete Teacher
    $scope.showConfirm = function(ev, id) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Apakah anda yakin untuk menghapus tutor ini?')
        .textContent('Kelas akan terhapus dari database')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('OK')
        .cancel('CANCEL');

      $mdDialog.show(confirm).then(function() {

        // deleteClasses
        var promise2 = authServices.deleteTeacher(id, token);

        promise2
          .then(function(response) {
            var status = response.data;

            if (status.status.errorType === "success") {
              console.log(status.id);
              $state.go('landing.tabel-tutor');
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
