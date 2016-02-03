netstix.factory('Logout', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
  var user = null;
  return {
    logout: function() {
      var deferred = $q.defer();
      $http.get('/sessions')
       .success(function (data) {
          user = false;
          deferred.resolve();
       })
       .error(function (data) {
          user = false;
          deferred.reject();
      });
      return deferred.promise;
    }
  };
}]);
