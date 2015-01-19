/**
 * Created by Bitusi on 19/01/2015.
 */
angular.module('fed2App.services')
  .factory('localStorage', function ($q) {
    'use strict';

    var STORAGE_ID = 'FED-angularjs';

    var store = {
      favourites: [],

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (favourites) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(favourites));
      },

      clearCompleted: function () {
        var deferred = $q.defer();

        var completeFavourites = [];
        var incompleteFavourites = [];
        store.favourites.forEach(function (favourite) {
          if (favourite.completed) {
            completeFavourites.push(favourite);
          } else {
            incompleteFavourites.push(favourite);
          }
        });

        angular.copy(incompleteFavourites, store.favourites);

        store._saveToLocalStorage(store.favourites);
        deferred.resolve(store.favourites);

        return deferred.promise;
      },

      delete: function (favourite) {
        var deferred = $q.defer();

        store.favourites.splice(store.favourites.indexOf(favourite), 1);

        store._saveToLocalStorage(store.favourites);
        deferred.resolve(store.favourites);

        return deferred.promise;
      },

      get: function () {
        var deferred = $q.defer();

        angular.copy(store._getFromLocalStorage(), store.favourites);
        deferred.resolve(store.favourites);

        return deferred.promise;
      },

      insert: function (favourite) {
        var deferred = $q.defer();

        store.favourites.push(favourite);

        store._saveToLocalStorage(store.favourites);
        deferred.resolve(store.favourites);

        return deferred.promise;
      },

      put: function (favourite, index) {
        var deferred = $q.defer();

        store.favourites[index] = favourite;

        store._saveToLocalStorage(store.favourites);
        deferred.resolve(store.favourites);

        return deferred.promise;
      },

      inData: function (check) {
        var inF = false;
        store.favourites.forEach(function (favourite) {
          for (var prop in favourite) {
            if (prop == "comment" || prop == "in_fav" || prop == "$$hashKey" || typeof favourite[prop] === "function" || typeof favourite[prop] === "object") {
              continue;
            }
            if (favourite[prop] !== check[prop]) { return false; }
          }
          inF = true; return false;
        });
        return inF;
      }
    };

    return store;
  });
