'use strict'

angular.module('TodoApp').service('NewListDialog', function($mdDialog){
  this.show = function(){
    return $mdDialog.show({
              // controller: ['$scope', '$timeout', function($scope, $timeout){
              //
              //   $scope.addList = function(list){
              //     console.log(`List ${list.name} added`);
              //     $timeout(function(){
              //         $mdDialog.cancel();
              //     }, 500);
              //   }
              // }],
              controller: 'DialogController',
              templateUrl: './js/templates/newListDialog.html',
              clickOutsideToClose:true,
              fullscreen: false, //useFullScreen
              // scope: scope.$new()
          })
  }
});
