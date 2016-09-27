(function(){
  'use strict'

  angular
      .module('TodoApp')
      .service('AddTaskDialog', AddTaskDialog);

  function AddTaskDialog($mdDialog){
    this.show = function(id){
      return $mdDialog.show({
                controller: ['$scope', '$timeout', 'TaskService', function($scope, $timeout, TaskService){
                  $scope.addTask = function(task){
                    TaskService.addTask(task, id);
                    $timeout(function(){
                        $mdDialog.cancel();
                    }, 200);
                  }

                  $scope.minDate = new Date();
                  $scope.priorities = ["High", "Medium", "Low"];
                  $scope.priority = $scope.priorities[0];

                  $scope.taskStatuses = ["Incomplete", "Complete"];
                  $scope.taskStatus = $scope.taskStatuses[0];
                }],
                templateUrl: './js/templates/addTaskDialog.html',
                clickOutsideToClose:true,
                fullscreen: false
            })
    }

    this.showEdit = function(task){
      return $mdDialog.show({
                controller: ['$scope', '$timeout', 'TaskService', function($scope, $timeout, TaskService){
                  $scope.editTask = function(task){
                    TaskService.editTask(task);
                    $timeout(function(){
                        $mdDialog.cancel();
                    }, 200);
                  }

                  $scope.task = {
                    id: task.id,
                    name: task.name,
                    priority: task.priority,
                    dueTo: new Date(task.dueTo),
                    taskStatus: task.status,
                    listId: task.listId,
                    userId: task.userId
                  }

                  $scope.priorities = ["High", "Medium", "Low"];
                  $scope.taskStatuses = ["Incomplete", "Complete"];
                }],
                templateUrl: './js/templates/editTaskDialog.html',
                clickOutsideToClose:true,
                fullscreen: false
            })
    }
  }
})();
