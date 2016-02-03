describe('NewSubmissionController', function() {
  var response = { message: 'ok' };
  var ctrl;
  var scope;
  var PostSubmissionsFactoryMock;
  var windowMock;
  var idMock;

  beforeEach(function() {
    windowMock = { location: { href: jasmine.createSpy() } };
    PostSubmissionsFactoryMock = jasmine.createSpyObj('PostSubmissions', ['sendData']);
    module('Netstix', {
      PostSubmissions: PostSubmissionsFactoryMock,
      $window: windowMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    PostSubmissionsFactoryMock.sendData.and.returnValue($q.when(response));
    ctrl = $controller('NewSubmissionController');
    scope = $rootScope;
  }));

  describe('#createNewSubmission()', function() {
    it('redirects to /#/achievements/:id', function() {
      ctrl.createNewSubmission();
      scope.$digest();
      expect(windowMock.location.href).toEqual('/#/achievements/:id');
    });
  });
});
