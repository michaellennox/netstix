netstix.controller('LogoutController', ['UserAuth', '$window', '$scope', function(UserAuth, $window, $scope) {
  var self = this;

  self.logout = function () {
    console.log(UserAuth.getUserStatus());
    UserAuth.logout()
      .then(function () {
        $window.location.href = '/#/achievements';
      });
  };

  self.isLoggedIn = function() {
    console.log(UserAuth.isLoggedIn());
    return UserAuth.isLoggedIn();
  };

  self.getUser = function() {
    return UserAuth.getUserStatus();
  };
}]);
