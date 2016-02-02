netstix.controller('NewAchievementController', ['PostAchievements', '$window', function(PostAchievements, $window) {
  var self = this;

  self.createNewAchievement = function() {
    PostAchievements.sendData(self.title, self.criteria)
      .then(function() {
        $window.location.href ='/#/achievements';
     });
  };

}]);
