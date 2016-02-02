describe('NewAchievementController', function() {
  var response = { message: 'ok' };
  var ctrl;
  var scope;
  var PostAchievementsFactoryMock;
  var windowMock;

  beforeEach(function() {
    windowMock = { location: { href: jasmine.createSpy() } };
    PostAchievementsFactoryMock = jasmine.createSpyObj('PostAchievements', ['sendData']);
    module('Netstix', {
      PostAchievements: PostAchievementsFactoryMock,
      $window: windowMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    PostAchievementsFactoryMock.sendData.and.returnValue($q.when(response));
    ctrl = $controller('NewAchievementController');
    scope = $rootScope;
  }));

  describe('#createNewAchievement()', function() {
    it('redirects to /#/achievements', function() {
      ctrl.createNewAchievement();
      scope.$digest();
      expect(windowMock.location.href).toEqual('/#/achievements');
    });
  });
});
