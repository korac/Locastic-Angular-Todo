(function(){
  'use strict'

  angular
      .module('TodoApp')
      .service('TaskService', TaskService);

  function TaskService($routeParams, $localStorage){

    var userId = $routeParams.id;

    this.addTask = function(task, id){
      var allTasks = this.getAllTasks();
      var taskId = 0;

      if(!allTasks){
        allTasks = [];
      }else{
        taskId = _.max(allTasks, function(task){ return task.id}).id + 1;
      }

      var taskToAdd = {
        id: taskId,
        name: task.name,
        priority: task.priority,
        dueTo: moment(task.dueTo).valueOf(),
        status: task.taskStatus,
        listId: id,
        userId: $routeParams.id
      }

      allTasks.push(taskToAdd);
      this.storeAllTasks(allTasks);
    }

    this.removeTask = function(task){
      var allTasks = this.getAllTasks();
      var updatedTasks = _.without(allTasks, _.findWhere(allTasks, { id: task.id}));
      this.storeAllTasks(updatedTasks);
    }

    this.editTask = function(task){
      var allTasks = this.getAllTasks();
      var alreadyExists = _.findWhere(allTasks, {id: task.id});
      var taskId;

      if(alreadyExists){
        allTasks = _.without(allTasks, _.findWhere(allTasks, { id: task.id}))
        console.log("postojim vec");
        taskId = task.id;
      }

      var taskToAdd = {
        id: taskId,
        name: task.name,
        priority: task.priority,
        dueTo: moment(task.dueTo).valueOf(),
        status: task.taskStatus,
        listId: task.listId,
        userId: task.userId
      }

      allTasks.push(taskToAdd);
      this.storeAllTasks(allTasks);
    }

    this.getAllTasks = function(){
      return $localStorage.tasks;
      // return JSON.parse($window.localStorage.getItem('lists'));
    }
    //
    this.storeAllTasks = function(tasks){
      $localStorage.tasks = tasks;
      // $window.localStorage.setItem('lists', JSON.stringify(lists));
    }
    
  }
})();
