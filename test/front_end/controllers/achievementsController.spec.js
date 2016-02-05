describe('AchievementsController', function() {
  var response = {
    data: [{ title: 'codewars', criteria: '150pts on codewars' }]
  };
  var ctrl;
  var scope;
  var AchievementsResourceFactoryMock;

  beforeEach(function() {
    AchievementsResourceFactoryMock = jasmine.createSpyObj('AchievementsResource', ['getAchievements']);
    module('Netstix', {
      AchievementsResource: AchievementsResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    AchievementsResourceFactoryMock.getAchievements.and.returnValue($q.when(response));
    ctrl = $controller('AchievementsController');
    scope = $rootScope;
  }));

  it('initializes with achievements from the AchievementsResource Factory', function() {
    scope.$digest();
    expect(ctrl.achievements)
      .toEqual(response.data);
  });
});
