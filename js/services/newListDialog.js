(function(){
  'use strict'

  angular
      .module('TodoApp')
      .service('NewListDialog', NewListDialog);

  function NewListDialog($mdDialog){

    this.show = function(){
      return $mdDialog.show({
                templateUrl: './js/templates/newListDialog.html',
                controller: 'DialogController',
                controllerAs: 'vm',
                clickOutsideToClose:true,
                fullscreen: false
            })
    }
  }
})();
