'use strict';

/**
 * @ngdoc function
 * @name batch4TeamBFrontendApp.controller:PembayaranCtrl
 * @description
 * # PembayaranCtrl
 * Controller of the batch4TeamBFrontendApp
 */
angular.module('batch4TeamBFrontendApp')
  .controller('PembayaranCtrl', function($scope) {
    $scope.clickFunc = function(item) {
      item.Action = " Sudah dibayar ";
      item.css('background-color', 'blue');
    };
  });

// this.awesomeThings = [
//   'HTML5 Boilerplate',
//   'AngularJS',
//   'Karma'
// ];
