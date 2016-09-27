(function(){
  'use strict'

  angular
      .module('TodoApp')
      .service('ListService', ListService);

  function ListService($routeParams, $localStorage, TaskService){
    
    var userId = $routeParams.id;

    // this.getList = function(userId, listId){
    //   var allLists = getAllLists();
    //   var wantedList = _.find(allLists, function(item){ return item.id === listId})
    //
    //   return wantedList;
    // }

    this.removeList = function(list){
      var allLists = getAllLists();
      var allTasks = TaskService.getAllTasks();

      var updatedLists = _.without(allLists, _.findWhere(allLists, { id: list.id}));
      var updatedTasks = _.filter(allTasks, function(task){ return task.listId !== list.id});

      storeAllLists(updatedLists);
      TaskService.storeAllTasks(updatedTasks);
    }

    this.addList = function(list){
      var allLists = getAllLists();
      var listId = 0;

      if(!allLists){
        allLists = [];
      }else{
        listId = _.max(allLists, function(list){ return list.id}).id + 1;
      }

      var listToAdd = {
        id: listId,
        name: list.name,
        createdOn: moment().valueOf(),
        userId: $routeParams.id
      };

      allLists.push(listToAdd);
      storeAllLists(allLists);
    }

    function getAllLists(){
      return $localStorage.lists;
      // return JSON.parse($window.localStorage.getItem('lists'));
    }

    function storeAllLists(lists){
      $localStorage.lists = lists;
      // $window.localStorage.setItem('lists', JSON.stringify(lists));
    }
  }
})();
