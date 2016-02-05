netstix.controller('NewAchievementController', ['AchievementsResource', '$window', function(AchievementsResource, $window) {
  var self = this;

  self.createNewAchievement = function() {
    AchievementsResource.postAchievements(self.title, self.criteria, self.points, self.challengeRepo, self.badgeLink)
      .then(function() {
        $window.location.href ='/#/achievements';
     });
  };

}]);
