netstix.controller('NewAchievementController', ['PostAchievements', '$window', function(PostAchievements, $window) {
  var self = this;

  self.createNewAchievement = function() {
    PostAchievements.sendData(self.title, self.criteria, self.points, self.challengeRepo, self.badgeLink)
      .then(function() {
        $window.location.href ='/#/achievements';
     });
  };

}]);
