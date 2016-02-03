netstix.factory('GetAchievement', ['$http', function($http) {
  return {
    getData: function(id) {
      return $http({
        url: ('achievements/' + id),
        method: 'GET'
      });
    }
  };
}]);
