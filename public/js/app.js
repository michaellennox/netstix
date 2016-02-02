var netstix = angular.module('Netstix', ['ngResource', 'ngRoute']);

netstix.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: '../views/partials/leaderboard.html'
      // })
      .when('/achievements/', {
        templateUrl: '../views/partials/achievements/index.html'
      })
      .when('/achievements/new', {
        templateUrl: '../views/partials/achievements/new.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
