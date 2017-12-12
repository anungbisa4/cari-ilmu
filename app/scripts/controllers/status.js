(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('statusCtrl', statusCtrl);

  statusCtrl.$inject = ['authServices', '$window'];

  function statusCtrl(authServices, $window) {
    //  Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // End Access Login
    var token = $window.localStorage.getItem('token');
    if (token) {
      console.log('yeee');
      // authServices.getToken(token)
      //   .then(function(response) {
      //     console.log(response.data.status.errotype);
      //
      //   })
      //   .catch(function(error) {
      //
      //   });
    } else {
      console.log('Anda gagal Login, coba lagi jangan menyerah');

    }
  }


})();
