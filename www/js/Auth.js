angular.module('bizCard')
.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://bizcard.firebaseio.com");
  return $firebaseAuth(ref);
});
