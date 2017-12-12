(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .controller('TabelPembayaranCtrl', TabelPembayaranCtrl);

  TabelPembayaranCtrl.$inject = ['authServices', '$mdDialog', '$scope', '$filter'];

  function TabelPembayaranCtrl(authServices, $mdDialog, $scope, $filter) {
    // Show data Payment
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllPaymentList(token);

    promise
      .then(function(response) {
        $scope.dataPayment = response.data.results;
        console.log($scope.dataPayment);

      })
      .catch(function error() {
        console.log('error');
      });

    // Show Button if status Bayar

    var confirmDate = new Date();
    confirmDate = $filter('date')(new Date(), "yyyy-MM-dd HH:mm");
    console.log(confirmDate);
    // confirmation
    $scope.date = new Date();
    $scope.getConfirm = function(id) {
      //  Access Login
      if (authServices.isLoggedIn()) {
        console.log('boleh akses');
      } else {
        console.log('gak bboleh akses');
        $state.go('login');
      }
      // End Access Login
      var payment = authServices.setPaymentConfirm(id, token, confirmDate);

      payment
        .then(function(response) {
          var status = response.data.status.errorType;
          if (status === "success") {
            console.log(status);
            var confirm = $mdDialog.confirm()
              .title('Murid telah membayar')
              .ariaLabel('Lucky day')
              .ok('OK')
            $mdDialog.show(confirm).then(function() {
                $state.go('landing.pembayaran');
              }),
              function error() {};

          }

        })
        .catch(function(error) {

          console.log(error);
        });
    };

    // // test
    //
    // // set the default value of our number
    // $scope.myNumber = 0;
    //
    // // function to evaluate if a number is even
    // $scope.a = function(value) {
    //
    //   if (value % 5 === 0)
    //     return $scope.isEven = true;
    //   else
    //     return $scope.isEven = false;
    //
    // };


  }
})();
