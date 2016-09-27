(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('BackgroundController', BackgroundController);

  BackgroundController.$inject = ['$rootScope', '$timeout'];

  function BackgroundController($rootScope, $timeout){
    var vm = this;

    vm.disbandThanks = disbandThanks;
    vm.registrationThanks = false;
    
    $rootScope.showThanks = showThanks;

    function disbandThanks(){
      vm.registrationThanks = false;
    }

    function showThanks(){
      vm.registrationThanks = true;

      $timeout(function(){
        vm.registrationThanks = false;
      }, 3000);
    }
  }
})();
