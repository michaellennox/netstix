netstix.controller('LoginController', ['UserAuth', '$window', '$scope', function(UserAuth, $window, $scope) {
  var self = this;

  self.login = function() {
    $scope.error = false;
    $scope.disabled = true;

    UserAuth.login($scope.loginForm.username, $scope.loginForm.password)
      .then(function () {
        $window.location.href ='/#/achievements';
        $scope.disabled = false;
        $scope.loginForm = {};
      })
      .catch(function () {
        $scope.error = true;
        $scope.errorMessage = "Invalid username and/or password";
        $scope.disabled = false;
        $scope.loginForm = {};
      });
  };
}]);
