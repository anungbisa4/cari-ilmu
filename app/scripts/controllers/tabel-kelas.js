(function() {
  'use strict';
  angular
    .module('batch4TeamBFrontendApp')
    .controller('TabelKelasCtrl', TabelKelasCtrl);

  TabelKelasCtrl.$inject = ['authServices', '$scope', '$mdDialog', '$state', '$rootScope'];

  function TabelKelasCtrl(authServices, $scope, $mdDialog, $state, $rootScope) {
    //  Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // End Access Login
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllClassesList(token);

    promise
      .then(function(response) {
        $scope.dataClassess = response.data.results;
      })
      .catch(function error() {
        console.log('error');
      });

    $scope.page = function() {

    };

    // Update classes

    $scope.getClassesId = function(classesList) {
      $rootScope.list = classesList;
      $state.go('landing.edit-kelas')
      console.log($rootScope.list);
    };
    // Delete Classes

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
        var promise2 = authServices.deleteClasses(id, token);

        promise2
          .then(function(response) {
            var status = response.data;
            if (status.status.errorType === "success") {
              console.log(status.id);
              console.log('terhapus');
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }, function() {});
    };
    // end function

  }

})();
