netstix.factory('Register', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
  return {
    register: function(username, password) {
      var deferred = $q.defer();

      $http.post('/users', {username: username, password: password})
      .success(function (data, status) {
        if(status === 200 && data.status){
          deferred.resolve();
        } else {
          deferred.reject();
        }
      })
      .error(function (data) {
        deferred.reject();
      });
      return deferred.promise;
    }
  };
}]);
