describe('factory: PostAchievements', function() {
  var postAchievements;
  var scope;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(PostAchievements) {
     postAchievements = PostAchievements;
  }));

  beforeEach(inject(function($httpBackend, $rootScope) {
      httpBackend = $httpBackend;
      httpBackend.whenPOST('/achievements').respond(function(){
        return [200, { message: 'Achievement created!'}, {}];
      });
      scope = $rootScope;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#sendData', function() {
    it('returns a success message if the achievement has been created', function() {
      postAchievements.sendData('a title', 'a criteria')
        .then(function(data) {
          expect(data.message).toEqual('Achievement created!');
        });
      httpBackend.flush();
    });
  });
});
