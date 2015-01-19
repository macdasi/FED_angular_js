'use strict';

/**
 * @ngdoc function
 * @name fed2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fed2App
 */
angular.module('fed2App.controllers')
  .controller('FavouritesCtrl', ['$scope', '$location', '$window', 'localStorage', function ($scope, $location, $window, localStorage) {

    var favourites = $scope.favourites = localStorage.favourites;

    $scope.$root.title = 'FED | Favourites';
    $scope.$on('$viewContentLoaded', function () {
      $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
    $scope.remove = function (obj) {
      localStorage.delete(obj);
    }
  }]);
