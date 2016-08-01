'use strict';

/**
 * @ngdoc overview
 * @name piedrapapelApp
 * @description
 * # piedrapapelApp
 *
 * Main module of the application.
 */
angular
  .module('piedrapapelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'underscore'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      /*
      .when('/rules', {
        templateUrl: 'views/rules.html'        
      })
      */
      .when('/game', {
        templateUrl: 'views/game.html'        ,
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
