'use strict';
angular.module('fed2App.services',[]);
angular.module('fed2App.services')
    .value('version', '0.1')
    .constant('proivderQuantity', 50)
    .factory('pinterestService',['$http','MashapeKey', function ($http , MashapeKey) {
        var data = {
            name:'pinterest',
            async: function () {
                // $http returns a promise, which has a then function, which also returns a promise
                var promise = $http.get("https://ismaelc-pinterest.p.mashape.com/macdasi/boards", {
                    headers: {
                        "X-Mashape-Key": MashapeKey,
                        "Accept": "application/json"
                    }
                }).then(function (response) {
                    return response.data.body;
                });
                // Return the promise to the controller
                return promise;
            }
        };
        return data;
    }])
    .factory('bitcointyService',['$http','MashapeKey', function ($http , MashapeKey) {
        var data = {
            name:'bitcointy',
            async: function () {
              // $http returns a promise, which has a then function, which also returns a promise
              var promise = $http.get("https://community-bitcointy.p.mashape.com/all/USD", {
                headers: {
                  "X-Mashape-Key": MashapeKey,
                  "Accept": "text/plain"
                }
              }).then(function (response) {
                return response.data;
              });
              // Return the promise to the controller
              return promise;
            }
        };
        return data;
    }])
    .factory('providersServices', ['pinterestService','bitcointyService', function (pinterestService , bitcointyService) {
        var data = {
            providers: [pinterestService,bitcointyService]
        }
        return data;
    }])


