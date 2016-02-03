describe('factory: GetAchievement', function() {
  var getAchievement;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(GetAchievement) {
     getAchievement = GetAchievement;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .when(
          "GET",
          "achievements/2"
        )
        .respond(
          { title: 'codewars', criteria: '150pts on codewars' }
        );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getData', function() {
    it('returns achievement hash', function() {
      getAchievement.getData(2)
        .then(function(response) {
          expect(response.data).toEqual({ title: 'codewars', criteria: '150pts on codewars' });
        });
      httpBackend.flush();
    });
  });
});
