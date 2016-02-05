describe('NewAchievementController', function() {
  var ctrl;
  var scope;
  var AchievementsResourceMock;
  var windowMock;

  beforeEach(function() {
    windowMock = { location: { href: jasmine.createSpy() } };
    AchievementsResourceMock = jasmine.createSpyObj(
      'AchievementsResource', ['postAchievements']
    );
    module('Netstix', {
      AchievementsResource: AchievementsResourceMock,
      $window: windowMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    AchievementsResourceMock.postAchievements
      .and.returnValue($q.when({}));
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
