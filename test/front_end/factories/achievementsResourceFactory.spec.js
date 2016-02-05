describe('factory: AchievementsResource', function() {
  var achievementsResource;
  var scope;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(AchievementsResource) {
     achievementsResource = AchievementsResource;
  }));

  beforeEach(inject(function($httpBackend, $rootScope) {
      httpBackend = $httpBackend;
      httpBackend
        .whenPOST('/achievements').respond(function(){
          return [200, { message: 'Achievement created!'}, {}];
        });
      scope = $rootScope;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#postAchievements', function() {
    it('returns a success message if the achievement has been created', function() {
      achievementsResource.postAchievements('a title', 'a criteria')
        .then(function(data) {
          expect(data.message).toEqual('Achievement created!');
        });
      httpBackend.flush();
    });
  });
});
