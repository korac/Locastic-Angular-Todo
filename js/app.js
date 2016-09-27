(function(){
  'use strict'

  var app = angular.module("TodoApp", [
    'ngMaterial',
    'ngRoute',
    'ngCookies',
    'ngStorage',
    'md.data.table'
  ]);

  app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $routeProvider
        .when('/login', {
          templateUrl: './js/templates/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when('/register', {
          templateUrl: './js/templates/register.html',
          controller: 'RegisterController',
          controllerAs: 'register'
        })
        .when('/:id/dashboard', {
          templateUrl: './js/templates/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dashboard'
        })
        .otherwise({ redirectTo: '/login'});

        // $locationProvider.html5Mode(true);
      }])
})();
