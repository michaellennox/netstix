netstix.factory('Login', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
  var user = null;
  return {
    login: function(username, password) {

      var deferred = $q.defer();

      $http.post('/sessions', {username: username, password: password})
       .success(function (data, status) {
        if(status === 200 && data.status){
          user = true;
          deferred.resolve();
        } else {
          user = false;
          deferred.reject();
        }
      })
      .error(function (data) {
        user = false;
        deferred.reject();
      });
      return deferred.promise;
    }
  };
}]);
