angular.module('bizCard')

.controller('LoginCtrl', function($state, Auth, Users) {
  var vm = this;

  vm.createAccount = createAccount;
  vm.error = '';
  vm.logIn = logIn;

  vm.credentials = {
    email: '',
    password: ''
  };

  function addNewUser(uid) {
    Users.addUser(uid)
  }

  function createAccount() {
    Auth.createAccount(vm.credentials, createAccountSuccess, function(error) {
      console.error(error);
    });
  }

  function createAccountSuccess(uid) {
    addNewUser(uid);
    navigateToProfile();
  }

  function logIn() {
    Auth.logIn(vm.credentials, function(authData) {
      console.log(authData);
      navigateToProfile();
    }, function(error) {
      vm.error = error;
    });
  }

  function navigateToProfile() {
    $state.go('tab.profile');
  }

});
