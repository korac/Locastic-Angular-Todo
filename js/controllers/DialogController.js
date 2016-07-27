'use strict'

angular.module('TodoApp').controller('DialogController', function($scope, $mdDialog, $timeout, ListService){

  $scope.addList = function(list){
    ListService.addList(list);
    $timeout(function(){
        $mdDialog.cancel();
    }, 200);
  }
});

angular.module('TodoApp').controller('TaskDialogController', function($scope, $mdDialog, $timeout){
  console.log(id);
  $scope.addTask = function(task){
    TaskService.addTask(task);
    $timeout(function(){
        $mdDialog.cancel();
    }, 200);
  }

  $scope.minDate = new Date();
  $scope.priorities = ["High", "Medium", "Low"];
  $scope.priority = $scope.priorities[0];

  $scope.taskStatuses = ["Incomplete", "Complete"];
  $scope.taskStatus = $scope.taskStatuses[0];
});
