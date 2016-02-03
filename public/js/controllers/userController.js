netstix.controller('UserController', ['UsersResource', '$routeParams', function(UsersResource, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.init = function() {
    UsersResource.getData(self.id)
     .then(function(response) {
       self.user = response.data;
     });
  };

  self.init();
}]);
