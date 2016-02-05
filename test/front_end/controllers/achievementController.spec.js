describe('AchievementController', function() {
  var response = {
    data: { title: 'codewars', criteria: '150pts on codewars' }
  };
  var ctrl;
  var scope;
  var AchievementsResourceFactoryMock;

  beforeEach(function() {
    AchievementsResourceFactoryMock = jasmine.createSpyObj('AchievementsResource', ['getAchievement']);
    module('Netstix', {
      AchievementsResource: AchievementsResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    AchievementsResourceFactoryMock.getAchievement.and.returnValue($q.when(response));
    ctrl = $controller('AchievementController', { $routeParams: {id: '2'} });
    scope = $rootScope;
  }));

  it('initializes with achievement info from the GetAchievement Factory', function() {
    scope.$digest();
    expect(ctrl.achievement)
      .toEqual(response.data);
  });
});
