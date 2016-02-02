describe('AchievementsController', function() {
  var response = {
    data: [{ title: 'codewars', criteria: '150pts on codewars' }]
  };
  var ctrl;
  var scope;
  var GetAchievementsFactoryMock;

  beforeEach(function() {
    GetAchievementsFactoryMock = jasmine.createSpyObj('GetAchievements', ['getData']);
    module('Netstix', {
      GetAchievements: GetAchievementsFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    GetAchievementsFactoryMock.getData.and.returnValue($q.when(response));
    ctrl = $controller('AchievementsController');
    scope = $rootScope;
  }));

  it('initializes with achievements from the GetAchievements Factory', function() {
    scope.$digest();
    expect(ctrl.achievements)
      .toEqual(response.data);
  });
});
