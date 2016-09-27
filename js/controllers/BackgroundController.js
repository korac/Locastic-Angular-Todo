(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('BackgroundController', BackgroundController);

  BackgroundController.$inject = ['$scope', '$rootScope', '$timeout'];

  function BackgroundController($scope, $rootScope, $timeout){

    $scope.registrationThanks = false;

    $scope.disbandThanks = function(){
      $scope.registrationThanks = false;
    }

    $rootScope.showThanks = function(){
      $scope.registrationThanks = true;

      $timeout(function(){
        $scope.registrationThanks = false;
      }, 3000);
    }
  }
})();
