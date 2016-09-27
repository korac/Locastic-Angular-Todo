(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'AuthenticationService', '$location', '$window'];

  function LoginController($scope, AuthenticationService, $location, $window){
    var vm = this;

    vm.login = login;
    vm.toRegister = toRegister;
    vm.user = {user: "", password: ""};

    AuthenticationService.clearCredentials();

    function login(){
      $scope.dataLoading = true;
      AuthenticationService.login(vm.user.email, vm.user.password, function(response){
        if(response.success){
          AuthenticationService.setCredentials(vm.user.email, vm.user.password);
          var users = JSON.parse($window.localStorage.getItem("users"));
          var userLogged = _.find(users, function(item){return item.email === vm.user.email});
          userLogged.lastLogin = moment().valueOf();
          userLogged.status = "active";

          $window.localStorage.setItem("users", JSON.stringify(users));
          $location.path('/' + userLogged.id + '/dashboard');
        }else{
          $scope.error = response.message;
          alert($scope.error);
          $scope.dataLoading = false;
        }
      })
    }

    function toRegister(){
      $location.path('/register');
    }
  }
})();
