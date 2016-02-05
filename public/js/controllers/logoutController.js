netstix.controller('LogoutController', ['UserAuth', '$window', '$scope', function(UserAuth, $window, $scope) {
  var self = this;

  self.logout = function () {
    UserAuth.logout()
      .then(function () {
        $window.location.href = '/#/achievements';
      });
  };

  self.isLoggedIn = function() {
    return UserAuth.isLoggedIn();
  };

  self.getUser = function() {
    return UserAuth.getUserStatus();
  };
}]);
