angular.module('bizCard')

.controller('LoginCtrl', function($state, Auth, User) {
  var vm = this;

  vm.authObj = Auth;
  vm.createAccount = createAccount;
  vm.error = '';
  vm.logIn = logIn;

  vm.credentials = {
    email: '',
    password: ''
  };

  function createAccount() {
    User.createAccount(vm.credentials)
  }

  function logIn() {
    User.logIn(vm.credentials, function(authData) {
      console.log(authData);
      $state.go('tab.dash');
    }, function(error) {
      vm.error = error;
    });
  }

});
