netstix.factory('GetAchievements', ['$http', function($http) {
  return {
    getData: function() {
      return $http({
        url: 'achievements/',
        method: 'GET'
      });
    }
  };
}]);
