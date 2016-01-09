angular.module('starter')
.factory("Cards", function($firebaseArray) {
  var cardsRef = new Firebase("https://bizcard.firebaseio.com/cards");
  return $firebaseArray(cardsRef);
});
