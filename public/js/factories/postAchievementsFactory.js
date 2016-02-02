netstix.factory('PostAchievements', ['$http', '$q', function($http, $q) {
  return {
    sendData: function(title, criteria) {
      var deferred = $q.defer();
      $http.post('/achievements', {title: title, criteria: criteria})
        .success(function (data, status) {
          if(status === 200){
            deferred.resolve(data);
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
