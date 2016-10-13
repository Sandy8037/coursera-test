(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController', myFirstController);

  function myFirstController($scope, $filter) {
    $scope.name = "";
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  };
})();
