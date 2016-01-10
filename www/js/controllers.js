angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Auth, User) {
  var vm = this;

  $scope.authObj = Auth;

  $scope.settings = {
    enableFriends: true
  };

  $scope.credentials = {
    email: '',
    password: ''
  };

  $scope.createAccount = function() {
    User.createAccount($scope.credentials)
  }

  $scope.logIn = function() {
    User.logIn($scope.credentials)
  }

});
