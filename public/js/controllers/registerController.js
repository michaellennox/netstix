netstix.controller('RegisterController', ['Register', '$window', '$scope', function(Register, $window, $scope) {
  var self = this;

  self.register = function () {
     $scope.error = false;
     $scope.disabled = true;
   Register.register($scope.registerForm.username, $scope.registerForm.password)
     .then(function () {
       $window.location.href ='/users';
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
