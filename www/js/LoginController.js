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

  function setUser(uid) {
    Users.setUser(uid);
  }

  function logIn() {
    Auth.logIn(vm.credentials, logInSuccess, function(error) {
      vm.error = error;
    });
  }

  function logInSuccess(uid) {
    setUser(uid);
    navigateToProfile();
  }

  function navigateToProfile() {
    $state.go('tab.profile');
  }

});
