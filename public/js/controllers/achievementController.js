netstix.controller('AchievementController', ['GetAchievement', 'UserAuth', '$routeParams', function(GetAchievement, UserAuth, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.init = function() {
    GetAchievement.getData(self.id)
     .then(function(response) {
       self.achievement = response.data;
     });
  };

  self.isLoggedIn = function() {
    return UserAuth.isLoggedIn();
  };

  self.init();
}]);
