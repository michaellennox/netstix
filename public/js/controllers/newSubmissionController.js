netstix.controller('NewSubmissionController', ['PostSubmissions', '$window', function(PostSubmissions, $window) {
  var self = this;

  self.createNewSubmission = function() {
    PostSubmissions.sendData(self.link, self.comment)
      .then(function() {
        $window.location.href ='/#/achievements/:id';
     });
  };

}]);
