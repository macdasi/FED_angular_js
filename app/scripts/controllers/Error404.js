'use strict';

/**
 * @ngdoc function
 * @name fed2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fed2App
 */
angular.module('fed2App.controllers',[]);
angular.module('fed2App.controllers')
  .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.$root.title = 'Error 404: Page Not Found';
    $scope.$on('$viewContentLoaded', function () {
      $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
    });
  }]);
