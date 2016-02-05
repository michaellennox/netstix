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

  achievementsResource.getAchievement = function(id) {
    return $http({
      url: ('/achievements/' + id),
      method: 'GET'
    });
  };

  achievementsResource.getAchievements = function() {
    return $http({
      url: '/achievements',
      method: 'GET'
    });
  };

  achievementsResource.postSubmissions = function(link, comment, id) {
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
  };

  return achievementsResource;
}]);
