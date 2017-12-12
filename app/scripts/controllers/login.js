(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('LoginAdminCtrl', LoginAdminCtrl);


  LoginAdminCtrl.$inject = ['$scope', '$window', '$state', '$mdDialog', 'authServices'];

  function LoginAdminCtrl($scope, $window, $state, $mdDialog, authServices) {

    // Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
      $state.go('landing.home');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }


    $scope.email = null;
    $scope.password = null;

    $scope.clickLogin = function($event) {




      // proses login = Akses API -> Response (200) -> simpan token di local storage
      // console.log('please bisa ...', $event)
      // console.log($scope.userName, $scope.password);
      var promise = authServices.login(
        $scope.email,
        $scope.password
      );

      // jika ini variabel promise berhasil maka bisa login dan simpen data di local storage
      promise
        .then(function(response) {
          var token = response.data.accessToken;
          if (token) {
            // $cookies.put('cariilmu', token);
            $window.localStorage.setItem('token', token);
            console.log('bisa yes');
            $state.go('landing.home');

          }

        })
        .catch(function(error) {
          var confirm = $mdDialog.confirm()
            .title('Anda salah memasukkan password atau username')
            .ariaLabel('Lucky day')
            .ok('OK')
            .cancel('CANCEL');
          console.log('Salah login, coba lagi');
          $mdDialog.show(confirm).then(function() {
              $state.go('login');
            }),
            function error() {};

        });
    };
  }

})();

// proses login = Akses API -> Response (200) -> simpan token di local storage
// cookie
// LocalStorage
// LocalSession
