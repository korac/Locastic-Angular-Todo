'use strict'

angular.module('TodoApp').controller('DashboardController', function($scope, $routeParams, AuthenticationService, $location, $window, NewListDialog, AddTaskDialog, ListService, TaskService, $localStorage){
  $scope.id = $routeParams.id;

  $scope.sortOptions = [
    {name: "Date of creation", sort: "createdOn"},
    {name: "List name", sort: "name"}
  ];
  $scope.sortBy = $scope.sortOptions[0];

  $scope.$watch('sortBy', function(newValue, oldValue){
    $scope.sortBy = newValue;
  })

  $scope.logout = function(){
    AuthenticationService.ClearCredentials();
    var users = JSON.parse($window.localStorage.getItem("users"));
    var userLoggedOut = _.find(users, function(item){return item.id === parseInt($scope.id)});
    userLoggedOut.status = "inactive";
    $window.localStorage.setItem("users", JSON.stringify(users));

    $location.path('/login');
  }

  $scope.openListDialog = function(){
    NewListDialog.show();
  }

  $scope.addTaskDialog = function(id){
    AddTaskDialog.show(id);
  }

  $scope.remove = function(list){
    ListService.removeList(list);
  }

  $scope.removeTask = function(task){
    TaskService.removeTask(task);
  }

  $scope.editTask = function(task){
    AddTaskDialog.showEdit(task);
  }

  $scope.orderTasks = function(order){
    $scope.taskOrder = order;
  }

  $scope.currentDate = moment().startOf('day').valueOf();

  // $scope.lists = _.find(userLists, function(item){return item.userId === parseInt($scope.id)});

  $scope.$watch(function() {
    return angular.toJson($localStorage);
  }, function() {
    $scope.tasks = _.filter($localStorage.tasks, function(item){return item.userId === $scope.id});
    $scope.lists = _.filter($localStorage.lists, function(item){return item.userId === $scope.id});
  });
  // $scope.$watch('lists', function(newLists, oldLists){
  //   console.log("RADI UPDATE");
  //   console.log(newLists);
  //   $localStorage.lists = $scope.lists;
  // })



});
