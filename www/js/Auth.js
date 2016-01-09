angular.module('starter')
.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://bizcard.firebaseio.com");
  return $firebaseAuth(ref);
});
