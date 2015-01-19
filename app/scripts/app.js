'use strict';

/**
 * @ngdoc overview
 * @name fed2App
 * @description
 * # fed2App
 *
 * Main module of the application.
 */
angular
  .module('fed2App', [
    'ngRoute','fed2App.services','fed2App.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Providers', {
        templateUrl: 'views/Providers.html',
        controller: 'ProvidersCtrl'
      })
      .when('/Favourites', {
        templateUrl: 'views/Favourites.html',
        controller: 'FavouritesCtrl'
      })
      .otherwise({
        templateUrl: '404.html',
        controller: 'Error404Ctrl'
      });
  });
