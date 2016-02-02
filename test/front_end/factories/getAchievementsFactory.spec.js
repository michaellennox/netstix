describe('factory: GetAchievements', function() {
  var getAchievements;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(GetAchievements) {
     getAchievements = GetAchievements;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .when(
          "GET",
          "achievements/"
        )
        .respond(
          [{ title: 'codewars', criteria: '150pts on codewars' }]
        );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getData', function() {
    it('returns achievements array', function() {
      getAchievements.getData()
        .then(function(response) {
          expect(response.data[0]).toEqual({ title: 'codewars', criteria: '150pts on codewars' });
        });
      httpBackend.flush();
    });
  });
});
