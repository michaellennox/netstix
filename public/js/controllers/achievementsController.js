netstix.controller('AchievementsController', ['GetAchievements', 'UserAuth', function(GetAchievements, UserAuth) {
  var self = this;

  self.init = function() {
    GetAchievements.getData()
     .then(function(response) {
       self.achievements = response.data;
     });
  };

  self.isLoggedIn = function() {
    return UserAuth.isLoggedIn();
  };

  self.init();
}]);
