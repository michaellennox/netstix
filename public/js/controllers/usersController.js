netstix.controller('UsersController', ['UsersResource', function(UsersResource) {
  var self = this;

  self.init = function() {
    UsersResource.getData()
     .then(function(response) {
       self.users = response.data;
     });
  };

  self.init();
}]);
