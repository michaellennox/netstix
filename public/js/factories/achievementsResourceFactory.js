netstix.factory('AchievementsResource', ['$http', '$q', function($http, $q) {
  var achievementsResource = {};

  achievementsResource.postAchievements = function(title, criteria, points, challengeRepo, badgeLink) {
    var deferred = $q.defer();
    $http.post('/achievements', {title: title, criteria: criteria, points: points, challengeRepo: challengeRepo, badgeLink: badgeLink})
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
  };

  return achievementsResource;
}]);
