netstix.controller('NewSubmissionController', ['AchievementsResource', '$window', '$routeParams', function(AchievementsResource, $window, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.createNewSubmission = function() {
    AchievementsResource.postSubmissions(self.link, self.comment, self.id)
      .then(function() {
        $window.location.href = ('/#/achievements/' + self.id);
     });
  };

}]);
