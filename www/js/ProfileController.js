angular.module('bizCard')

.controller('ProfileCtrl', function($state, Auth, User) {
  var vm = this;

  vm.logOut = logOut;

  function logOut() {
    User.logOut()
    $state.go('login');
  }
});
