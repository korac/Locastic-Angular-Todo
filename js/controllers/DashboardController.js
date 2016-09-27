(function(){
  'use strict'

  angular
      .module('TodoApp')
      .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', '$routeParams', 'AuthenticationService', '$location', '$window', 'NewListDialog', 'AddTaskDialog', 'ListService', 'TaskService', '$localStorage'];

  function DashboardController($scope, $routeParams, AuthenticationService, $location, $window, NewListDialog, AddTaskDialog, ListService, TaskService, $localStorage){
    var vm = this;

    vm.addTaskDialog = addTaskDialog;
    vm.currentDate = moment().startOf('day').valueOf();
    vm.editTask = editTask;
    vm.id = $routeParams.id;
    vm.logout = logout;
    vm.openListDialog = openListDialog;
    vm.orderTasks = orderTasks;
    vm.remove = remove;
    vm.removeTask = removeTask;
    vm.sortOptions = [
      {name: "Date of creation", sort: "createdOn"},
      {name: "List name", sort: "name"}
    ];
    vm.sortBy = vm.sortOptions[0];

    $scope.$watch('sortBy', function(newValue, oldValue){
      vm.sortBy = newValue;
    })

    $scope.$watch(function() {
      return angular.toJson($localStorage);
    }, function() {
      vm.tasks = _.filter($localStorage.tasks, function(item){return item.userId === vm.id});
      vm.lists = _.filter($localStorage.lists, function(item){return item.userId === vm.id});
    });


    function addTaskDialog(list_id){
      AddTaskDialog.show(list_id);
    }

    function editTask(task){
      AddTaskDialog.showEdit(task);
    }

    function logout(){
      AuthenticationService.clearCredentials();
      var users = JSON.parse($window.localStorage.getItem("users"));
      var userLoggedOut = _.find(users, function(item){return item.id === parseInt(vm.id)});
      userLoggedOut.status = "inactive";
      $window.localStorage.setItem("users", JSON.stringify(users));

      $location.path('/login');
    }

    function openListDialog(){
      NewListDialog.show();
    }

    function orderTasks(order){
      vm.taskOrder = order;
    }

    function remove(list){
      ListService.removeList(list);
    }

    function removeTask(task){
      TaskService.removeTask(task);
    }

  }
})();
