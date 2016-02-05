describe('NewSubmissionController', function() {
  var response = { message: 'ok' };
  var ctrl;
  var scope;
  var AchievementsResourceFactoryMock;
  var windowMock;
  var idMock;

  beforeEach(function() {
    windowMock = { location: { href: jasmine.createSpy() } };
    AchievementsResourceFactoryMock = jasmine.createSpyObj('AchievementsResource', ['postSubmissions']);
    module('Netstix', {
      AchievementsResource: AchievementsResourceFactoryMock,
      $window: windowMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    AchievementsResourceFactoryMock.postSubmissions.and.returnValue($q.when(response));
    ctrl = $controller('NewSubmissionController');
    scope = $rootScope;
  }));

  describe('#createNewSubmission()', function() {
    it('redirects to /#/achievements/:id when successful', function() {
      ctrl.id = 55;
      ctrl.createNewSubmission();
      scope.$digest();
      expect(windowMock.location.href).toEqual('/#/achievements/55');
    });
  });
});
