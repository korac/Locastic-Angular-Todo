(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('DialogController', DialogController);

  DialogController.$inject = ['$mdDialog', '$timeout', 'ListService'];

  function DialogController($mdDialog, $timeout, ListService){
    var vm = this;

    vm.addList = addList;
    vm.list = { name: "" };

    function addList(){
      ListService.addList(vm.list);
      $timeout(function(){
          $mdDialog.cancel();
      }, 200);
    }
  }

})();
