describe('AchievementController', function() {
  var response = {
    data: { title: 'codewars', criteria: '150pts on codewars' }
  };
  var ctrl;
  var scope;
  var GetAchievementFactoryMock;

  beforeEach(function() {
    GetAchievementFactoryMock = jasmine.createSpyObj('GetAchievement', ['getData']);
    module('Netstix', {
      GetAchievement: GetAchievementFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    GetAchievementFactoryMock.getData.and.returnValue($q.when(response));
    ctrl = $controller('AchievementController', { $routeParams: {id: '2'} });
    scope = $rootScope;
  }));

  it('initializes with achievement info from the GetAchievement Factory', function() {
    scope.$digest();
    expect(ctrl.achievement)
      .toEqual(response.data);
  });
});
