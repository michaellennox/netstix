netstix.controller('AchievementController', ['GetAchievement', '$routeParams', function(GetAchievement, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.init = function() {
    GetAchievement.getData(self.id)
     .then(function(response) {
       self.achievement = response.data;
     });
  };

  self.init();
}]);
