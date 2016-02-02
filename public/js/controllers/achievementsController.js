netstix.controller('AchievementsController', ['GetAchievements', function(GetAchievements) {
  var self = this;

  self.init = function() {
    GetAchievements.getData()
     .then(function(response) {
       self.achievements = response.data;
     });
  };

  self.init();
}]);
