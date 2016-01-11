angular.module('bizCard')
.factory("Cards", function($firebaseArray) {
  var cardsRef = new Firebase('https://bizcard.firebaseio.com/cards');
  return $firebaseArray(cardsRef);
});
