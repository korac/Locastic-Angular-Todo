(function(){
  'use strict'

  var app = angular.module("TodoApp", ['ngMaterial', 'ngRoute', 'ngCookies', 'ngStorage', 'md.data.table']);

  app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $routeProvider
        .when('/login', {
          controller: 'LoginController',
          templateUrl: './js/templates/login.html'
        })
        .when('/register', {
          controller: 'RegisterController',
          templateUrl: './js/templates/register.html'
        })
        .when('/:id/dashboard', {
          controller: 'DashboardController',
          templateUrl: './js/templates/dashboard.html'
        })
        .otherwise({ redirectTo: '/login'});

        // $locationProvider.html5Mode(true);
      }])
})();
