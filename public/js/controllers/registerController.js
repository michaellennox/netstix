netstix.controller('RegisterController', ['UserAuth', '$window', '$scope', function(UserAuth, $window, $scope) {
  var self = this;

  self.register = function () {
    $scope.error = false;
    $scope.disabled = true;

    UserAuth.register($scope.registerForm.username, $scope.registerForm.password)
      .then(function () {
        $window.location.href ='/#/achievements';
        $scope.disabled = false;
        $scope.registerForm = {};
      })
      .catch(function () {
        $scope.error = true;
        $scope.errorMessage = "Something went wrong!";
        $scope.disabled = false;
        $scope.registerForm = {};
      });
  };
}]);
