describe('LoginController', function() {
  var response = { message: 'ok' };
  var ctrl;
  var scope;
  var LoginFactoryMock;
  var windowMock;

  beforeEach(function() {
    windowMock = { location: { href: jasmine.createSpy() } };
    LoginFactoryMock = jasmine.createSpyObj('Login', ['login']);
    module('Netstix', {
      Login: LoginFactoryMock,
      $window: windowMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    LoginFactoryMock.login.and.returnValue($q.when(response));
    ctrl = $controller('LoginController');
    scope = $rootScope;
  }));

  describe('#loggingIn()', function() {
    it('redirects to /#/achievements', function() {
      ctrl.createNewAchievement();
      scope.$digest();
      expect(windowMock.location.href).toEqual('/#/achievements');
    });
  });
});
