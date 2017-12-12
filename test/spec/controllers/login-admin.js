'use strict';

describe('Controller: LoginAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('batch4TeamBFrontendApp'));

  var LoginAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginAdminCtrl = $controller('LoginAdminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginAdminCtrl.awesomeThings.length).toBe(3);
  });
});
