netstix.controller('LoginController', ['Login', '$window', '$scope', function(Login, $window, $scope) {
  var self = this;

  self.login = function () {
     $scope.error = false;
     $scope.disabled = true;
    Login.login($scope.loginForm.username, $scope.loginForm.password)
     .then(function () {
      $window.location.href ='/sessions';
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
