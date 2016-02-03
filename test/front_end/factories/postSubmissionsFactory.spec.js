describe('factory: PostSubmissions', function() {
  var postSubmissions;
  var scope;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(PostSubmissions) {
     postSubmissions = PostSubmissions;
  }));

  beforeEach(inject(function($httpBackend, $rootScope) {
      httpBackend = $httpBackend;
      httpBackend.whenPOST('/achievements/:id/submissions').respond(function(){
        return [200, { message: 'Submission sent!'}, {}];
      });
      scope = $rootScope;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#sendData', function() {
    it('returns a success message if the submission has been sent', function() {
      postSubmissions.sendData('https://github.com/Htunny', 'a comment')
        .then(function(data) {
          expect(data.message).toEqual('Submission sent!');
        });
      httpBackend.flush();
    });
  });
});
