(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var total = $scope.name.length;
      $scope.totalValue = total;
    };
  });
})();
