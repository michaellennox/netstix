netstix.controller('AchievementController', ['AchievementsResource', 'UserAuth', '$routeParams', function(AchievementsResource, UserAuth, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.init = function() {
    AchievementsResource.getAchievement(self.id)
     .then(function(response) {
       self.achievement = response.data;
     });
  };

  self.isLoggedIn = function() {
    return UserAuth.isLoggedIn();
  };

  self.init();
}]);
