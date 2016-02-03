netstix.controller('UsersController', ['GetUsers', function(GetUsers) {
  var self = this;

  self.init = function() {
    GetUsers.getData()
     .then(function(response) {
       self.users = response.data;
     });
  };

  self.init();
}]);
