'use strict';

angular.module('pdApp')
  .controller('LoruProductsCtrl', function ($scope) {
    $scope.products = [
      {id: 1, name: 'Product 1', availableOnPlaces: [1, 3, 4]},
      {id: 2, name: 'Product 2', availableOnPlaces: [5]},
      {id: 3, name: 'Product 3', availableOnPlaces: [2, 4]},
      {id: 4, name: 'Product 4', availableOnPlaces: [1, 3]},
      {id: 5, name: 'Product 5', availableOnPlaces: [1]},
      {id: 6, name: 'Product 6', availableOnPlaces: [2, 5]}
    ];
    $scope.places = [
      {id: 1, name: 'Place 1', cost: 4.6},
      {id: 2, name: 'Place 2', cost: 1.8},
      {id: 3, name: 'Place 3', cost: 2},
      {id: 4, name: 'Place 4', cost: 6.9},
      {id: 5, name: 'Place 5', cost: 5.3}
    ];
    $scope.productAvailable = function (product, placeId) {
      console.log(product, placeId);
      return _.contains(product.availableOnPlaces, placeId);
    };
    var initialState = {};
    _.forEach($scope.products, function (product) {
      initialState[product.id] = {};
      _.forEach($scope.places, function (place) {
        initialState[product.id][place.id] = _.contains(product.availableOnPlaces, place.id) ? 'enable' : 'disable';
      });
    });

    var difference = function (initial, override) {
      var diffObj = {};

      for (var name in initial) {
        if (initial.hasOwnProperty(name) && override.hasOwnProperty(name)) {
          if (_.isObject(override[name]) && !_.isArray(override[name])) {
            var diff = difference(initial[name], override[name]);

            if (!_.isEmpty(diff)) {
              diffObj[name] = diff;
            }
          } else if (!_.isEqual(initial[name], override[name])) {
            diffObj[name] = override[name];
          }
        }
      }

      return diffObj;
    };

    $scope.$watch(function () {return $scope.a.changes;}, function (a) {
      var ret = [];
      _.forEach(difference(initialState, a), function (productData, productId) {
        _.forEach(productData, function (status, placeId) {
          ret.push({
            productId: productId,
            placeId: placeId,
            status: status
          });
        });
      });
      $scope.total = _.reduce(ret, function (total, itemData) {
        if ('disable' === itemData.status) {
          return total;
        }

        var placeData = _.find($scope.places, {id: parseInt(itemData.placeId, 10)});
        return total + placeData.cost;
      }, 0);
    }, true);

    $scope.a = {
      changes: _.cloneDeep(initialState),
      b: 'enable'
    };
    $scope.color = 'red';
  })
;
