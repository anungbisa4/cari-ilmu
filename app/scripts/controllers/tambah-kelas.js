(function() {
  'use strict';
  angular
    .module('batch4TeamBFrontendApp')
    .controller('TambahKelasCtrl', TambahKelasCtrl);

  TambahKelasCtrl.$inject = ['$scope', '$filter', '$mdDialog', '$state', 'authServices'];

  function TambahKelasCtrl($scope, $filter, $mdDialog, $state, authServices) {
    //  Access Login
    if (authServices.isLoggedIn()) {
      console.log('boleh akses');
    } else {
      console.log('gak bboleh akses');
      $state.go('login');
    }
    // End Access Login
    // Function for save data
    var token = authServices.isLoggedIn();
    var promise = authServices.getAllTeacherList2(token);
    promise
      .then(function(response) {
        $scope.dataTeacher = response.data.results;
      })
      .catch(function error() {
        console.log('error');
      });

    $scope.min = $filter('date')(new Date(), "yyyy-MM-dd");
    console.log($scope.min);

    $scope.name1 = null;
    $scope.price = null;
    $scope.description1 = null;
    $scope.location1 = null;
    $scope.dateStart = null;
    $scope.category = null;
    $scope.startTime = null;
    $scope.endTime = null;
    $scope.selectTeacher = null;

    $scope.clickClasses = function() {
      var timeSetStart = $filter('date')($scope.startTime, "HH:mm");
      var timeSetEnd = $filter('date')($scope.endTime, "HH:mm");
      var timeSetDate = $filter('date')($scope.dateStart, "yyyy-MM-dd");
      console.log(timeSetEnd);
      var promise2 = authServices.insertClasses(
        $scope.name1,
        $scope.price,
        $scope.description1,
        $scope.location1,
        timeSetDate,
        $scope.category,
        timeSetStart,
        timeSetEnd,
        $scope.selectTeacher,
        token


      );


      promise2
        .then(function(response) {
          $scope.name1 = null;
          $scope.price = null;
          $scope.description1 = null;
          $scope.location1 = null;
          $scope.dateStart = null;
          $scope.category = null;
          $scope.startTime = null;
          $scope.endTime = null;
          $scope.selectTeacher = null;
          $scope.addClassesForm.$setPristine();
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
                $state.go('landing.tabel-kelas');
              }),
              function error() {};

          }

        })
        .catch(function(error) {

          console.log(error);
        });
    };

    // End Function
  }
})();
