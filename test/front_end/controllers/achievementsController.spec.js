describe('AchievementsController', function() {
  var data = {
    data: [{ title: 'codewars', criteria: '150pts on codewars' }]
  };
  var ctrl;
  var scope;

  beforeEach(function() {
    GetAchievementsFactoryMock = jasmine.createSpyObj('GetAchievements', ['getData']);
    module('Netstix', {
      GetAchievements: GetAchievementsFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    GetAchievementsFactoryMock.getData.and.returnValue($q.when(data));
    ctrl = $controller('GetAchievementsController');
    scope = $rootScope;
  }));

  it('initializes with achievements from the GetAchievements Factory', function() {
    scope.$digest();
    expect(ctrl.achievements)
      .toEqual([{ title: 'codewars', criteria: '150pts on codewars' }]);
  });
});