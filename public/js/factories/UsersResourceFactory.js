netstix.factory('UsersResource', ['$http', function($http) {
  return {
    getData: function(id) {
      id = typeof id !== 'undefined' ? id : '';
      return $http({
        url: 'users/' + id,
        method: 'GET'
      });
    }
  };
}]);
