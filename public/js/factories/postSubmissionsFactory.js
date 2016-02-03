netstix.factory('PostSubmissions', ['$http', '$q', function($http, $q) {
  return {
    sendData: function(link, comment, id) {
      var deferred = $q.defer();
      $http.post('/achievements/' + id + '/submissions', {link: link, comment: comment})
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
