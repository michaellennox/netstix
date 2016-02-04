netstix.factory('UserAuth', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {
  var user = null;

  function isLoggedIn() {
    if(user) {
      return true;
    } else {
      return false;
    }
  }

  function getUserStatus() {
    return user;
  }

  function login(username, password) {
    var deferred = $q.defer();
    $http.post('/sessions', {username: username, password: password})
      .success(function (data, status) {
        if(status === 200 && data.status){
          user = data.user;
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

  function logout() {
    var deferred = $q.defer();
    $http.delete('/sessions')
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

  function register(username, password) {
    var deferred = $q.defer();
    $http.post('/users', {username: username, password: password})
      .success(function (data, status) {
        if(status === 200 && data.status){
          user = data.user;
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

  return ({
    isLoggedIn: isLoggedIn,
    getUserStatus: getUserStatus,
    login: login,
    logout: logout,
    register: register
  });
}]);
