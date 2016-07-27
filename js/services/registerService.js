'use strict'

angular.module('TodoApp').service('RegisterService', function($window, $location, $rootScope){

  //Some accounts
  var usersArray = [
    {
      id: 0,
      name: "Kristijan",
      lastName: "Korac",
      email: "kiki@kiki.hr",
      password: "test",
      createdOn: moment([2016, 6, 21, 15, 25, 50, 125]).valueOf(),
      lastLogin: moment([2016, 6, 22, 15, 25, 50, 125]).valueOf(),
      status: 'inactive'
    },
    {
      id: 1,
      name: "Ivan",
      lastName: "Matas",
      email: "matas@net.hr",
      password: "zenjara",
      createdOn: moment([2016, 6, 22, 15, 25, 50, 125]).valueOf(),
      lastLogin: moment([2016, 6, 22, 17, 25, 50, 125]).valueOf(),
      status: 'inactive'
    },
    {
      id: 2,
      name: "Mate",
      lastName: "Matić",
      email: "mate@matic.com",
      password: "matematic",
      createdOn: moment([2016, 6, 21, 20, 25, 50, 125]).valueOf(),
      lastLogin: moment([2016, 6, 22, 19, 43, 50, 125]).valueOf(),
      status: 'inactive'
    }
  ];

  var user = {
    name: "",
    lastName: "",
    email: "",
    password: ""
  }

  $window.localStorage.setItem("users", JSON.stringify(usersArray));

  this.register = function(user){
    var userToReg = {
      id: 0,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      createdOn: 0,
      lastLogin: 0,
      status: 'inactive'
    };

    var users = JSON.parse($window.localStorage.getItem("users"));
    var existingUsername = _.find(users, function(item){ return item.email === userToReg.email});

    if(existingUsername !== undefined){
      alert("This username already exists. Please pick another one.");
    }else if(existingUsername === undefined){
      userToReg.id = users.length;
      userToReg.createdOn = moment().valueOf();

      users.push(userToReg);
      $window.localStorage.setItem("users", JSON.stringify(users));
      $location.path('/login');
      $rootScope.showThanks();
    }

    // console.log("Registracija!");
  }
})
