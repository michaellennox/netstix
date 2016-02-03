var netstix = angular.module('Netstix', ['ngResource', 'ngRoute']);

netstix.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/partials/users/leaderboard.html'
      })
      .when('/achievements/', {
        templateUrl: '../views/partials/achievements/index.html'
      })
      .when('/achievements/new', {
        templateUrl: '../views/partials/achievements/new.html'
      })
      .when('/achievements/:id', {
        templateUrl: '../views/partials/achievements/achievement.html'
      })
      .when('/login', {
        templateUrl: '../views/partials/users/login.html'})
      .when('/register', {
        templateUrl: '../views/partials/users/register.html'})
      .otherwise({
        redirectTo: '/'
      });
  }
]);
