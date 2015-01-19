'use strict';

/**
 * @ngdoc function
 * @name fed2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fed2App
 */
angular.module('fed2App.controllers')
  .controller('ProvidersCtrl', ['$scope', '$location', '$window', 'providersServices', 'proivderQuantity', 'localStorage'
    , function ($scope, $location, $window, providersServices, proivderQuantity, localStorage) {

      var favourites = $scope.favourites = localStorage.favourites;
      $scope.$root.title = 'FED | Providers';
      $scope.loading = true;
      $scope.providersLimit = proivderQuantity;
      $scope.predicate = '';
      $scope.reverse = false;
      $scope.comment = '';
      $scope.$on('$viewContentLoaded', function () {
        $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
      });

      $scope.insert = function (obj,comment) {
        obj.comment = comment;
        localStorage.insert(obj);
        obj.in_fav = true;
      };

      $scope.providers = [];

      providersServices.providers.forEach(function (provider) {
          $scope.providers[$scope.providers.length] = { loading: true, name: provider.name, data: [] };
          provider.id = $scope.providers.length - 1;
          provider.async().then(function (d) {
            d.forEach(function (elem) {
              elem.in_fav = localStorage.inData(elem);
            });
            $scope.providers[provider.id] = { loading: false, name: provider.name, data: d };
            $scope.loading = false;
          });
        });

    }]);
