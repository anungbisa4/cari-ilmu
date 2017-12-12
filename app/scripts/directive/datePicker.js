(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .directive("datepick", function() {
      return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, elem, attrs, ngModelCtrl) {
          var updateModel = function(dateText) {
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(dateText);
            });
          };
          var options = {
            dateFormat: "dd-mm-yy",
            onSelect: function(dateText) {
              updateModel(dateText);
            }
          };
          elem.datepicker(options);
        }
      }
    });


})();
