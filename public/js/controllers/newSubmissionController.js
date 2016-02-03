netstix.controller('NewSubmissionController', ['PostSubmissions', '$window', '$routeParams', function(PostSubmissions, $window, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.createNewSubmission = function() {
    PostSubmissions.sendData(self.link, self.comment, self.id)
      .then(function() {
        $window.location.href = ('/#/achievements' + self.id);
     });
  };

}]);
