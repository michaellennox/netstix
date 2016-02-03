describe('factory: UsersResource', function() {
  var usersResource;
  var scope;

  beforeEach(module('Netstix'));

  beforeEach(inject(function(UsersResource) {
    usersResource = UsersResource;
  }));

  beforeEach(inject(function($httpBackend, $rootScope) {
    httpBackend = $httpBackend;
    httpBackend
      .when(
        "GET",
        "users/"
      )
      .respond(
        [{ username: 'giamir', id: '2' }]
      );
      httpBackend
        .when(
          "GET",
          "users/2"
        )
        .respond(
          { username: 'giamir', id: '2' }
        );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getData', function() {
    it('returns an array of users if no argument is passed', function() {
      usersResource.getData()
        .then(function(response) {
          expect(response.data[0]).toEqual({ username: 'giamir', id: '2' });
        });
      httpBackend.flush();
    });
    it('returns a specific user if the id is passed', function() {
      usersResource.getData(2)
        .then(function(response) {
          expect(response.data).toEqual({ username: 'giamir', id: '2' });
        });
      httpBackend.flush();
    });
  });
});
