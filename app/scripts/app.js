'use strict';

angular.module('pdApp', [
    'ngRoute',
    'ui.bootstrap',
    'corrupt.loadingSpinnerWidget'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
        title: 'Главная'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        title: 'Контакты'
      })
      .when('/about-us', {
        templateUrl: 'views/about_us.html',
        title: 'О нас'
      })
      .when('/products', {
        controller: 'LoruProductsCtrl',
        templateUrl: 'views/loru/products.html',
        title: 'Продукты'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        title: 404
      })
    ;
  })
  .run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, currentRoute) {
      $rootScope.title = currentRoute.title;
    });
  })
;
