var netstix = angular.module('Netstix', ['ngResource', 'ngRoute', 'ui.bootstrap']);

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
      .when('/users/:id', {
        templateUrl: '../views/partials/users/user.html'
      })
      .when('/achievements/:id/submissions/new', {
        templateUrl: '../views/partials/submissions/new.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
