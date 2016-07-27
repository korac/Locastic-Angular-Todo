'use strict'

angular.module('TodoApp').controller('LoginController', function($scope, AuthenticationService, $location, $window){

  AuthenticationService.ClearCredentials();
  $scope.login = function(user){
    $scope.dataLoading = true;
    AuthenticationService.Login(user.email, user.password, function(response){
      if(response.success){
        AuthenticationService.SetCredentials(user.email, user.password);
        var users = JSON.parse($window.localStorage.getItem("users"));
        var userLogged = _.find(users, function(item){return item.email === user.email});
        userLogged.lastLogin = moment().valueOf();
        userLogged.status = "active";

        // var updatedUsers = _.without(users, _.findWhere(users, { email: user.email}));
        // updatedUsers.push(userLogged);
        // console.log(updatedUsers);
        $window.localStorage.setItem("users", JSON.stringify(users));
        $location.path('/' + userLogged.id + '/dashboard');
      }else{
        $scope.error = response.message;
        alert($scope.error);
        $scope.dataLoading = false;
      }
    })
  }

  $scope.toRegister = function(){
    $location.path('/register');
  }
})
