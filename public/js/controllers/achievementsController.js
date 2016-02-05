netstix.controller('AchievementsController', ['AchievementsResource', 'UserAuth', function(AchievementsResource, UserAuth) {
  var self = this;

  self.init = function() {
    AchievementsResource.getAchievements()
     .then(function(response) {
       self.achievements = response.data;
     });
  };

  self.isLoggedIn = function() {
    return UserAuth.isLoggedIn();
  };

  self.init();
}]);
