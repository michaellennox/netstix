netstix.factory('GetUsers', ['$http', function($http) {
  return {
    getData: function() {
      return $http({
        url: 'users/',
        method: 'GET'
      });
    }
  };
}]);
