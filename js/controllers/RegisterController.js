(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', '$location', 'RegisterService'];

  function RegisterController($scope, $location, RegisterService){

    $scope.register = function(user){
      RegisterService.register(user);
    }

    $scope.toLogin = function(){
      $location.path('/login');
    }
  }
})();
