describe('UsersController', function() {
  var response = {
    data: [{ username: 'giamir', id: '2' }]
  };
  var ctrl;
  var scope;
  var UsersResourceFactoryMock;

  beforeEach(function() {
    UsersResourceFactoryMock = jasmine.createSpyObj('UsersResourceFactory', ['getData']);
    module('Netstix', {
      UsersResource: UsersResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, $rootScope) {
    UsersResourceFactoryMock.getData.and.returnValue($q.when(response));
    ctrl = $controller('UsersController');
    scope = $rootScope;
  }));

  it('initializes with users from the UsersResources Factory', function() {
    scope.$digest();
    expect(ctrl.users)
      .toEqual(response.data);
  });
});
