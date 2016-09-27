(function(){
  'use strict'

  angular.module('TodoApp').controller('RegisterController', function($scope, $location, RegisterService){

    $scope.register = function(user){
      RegisterService.register(user);
    }

    $scope.toLogin = function(){
      $location.path('/login');
    }
  })
})();
