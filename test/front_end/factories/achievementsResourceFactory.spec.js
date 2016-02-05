describe('factory: AchievementsResource', function() {
  var achievementsResource;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(AchievementsResource) {
     achievementsResource = AchievementsResource;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .whenPOST('/achievements').respond(function(){
          return [200, { message: 'Achievement created!'}, {}];
        });
      httpBackend
        .whenGET("/achievements/2").respond(
          { title: 'codewars', criteria: '150pts on codewars' }
        );
      httpBackend
        .whenGET("/achievements").respond(
          [{ title: 'codewars', criteria: '150pts on codewars' }]
        );
      httpBackend
        .whenPOST('/achievements/55/submissions').respond(function(){
          return [200, { message: 'Submission sent!'}, {}];
        });
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

  describe('#getAchievement', function() {
    it('returns achievement hash', function() {
      achievementsResource.getAchievement(2)
        .then(function(response) {
          expect(response.data).toEqual({ title: 'codewars', criteria: '150pts on codewars' });
        });
      httpBackend.flush();
    });
  });

  describe('#getAchievements', function() {
    it('returns achievements array', function() {
      achievementsResource.getAchievements()
        .then(function(response) {
          expect(response.data[0]).toEqual({ title: 'codewars', criteria: '150pts on codewars' });
        });
      httpBackend.flush();
    });
  });

  describe('#postSubmissions', function() {
    it('returns a success message if the submission has been sent', function() {
      achievementsResource.postSubmissions('https://github.com/Htunny', 'a comment', 55)
        .then(function(data) {
          expect(data.message).toEqual('Submission sent!');
        });
      httpBackend.flush();
    });
  });
});
