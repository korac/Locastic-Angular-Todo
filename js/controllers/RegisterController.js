(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', 'RegisterService'];

  function RegisterController($location, RegisterService){
    var vm = this;

    vm.register = register;
    vm.toLogin = toLogin;

    function register(){
      RegisterService.register(vm.user);
    }

    function toLogin(){
      $location.path('/login');
    }
  }
})();
