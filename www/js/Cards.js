angular.module('bizCard')
.factory("Cards", function($firebaseArray, Users) {
  var cardsRef = new Firebase('https://bizcard.firebaseio.com/cards');
  var cards = $firebaseArray(cardsRef);

  return {
  	getCardByKey: getCardByKey,
  	saveCard: saveCard
  };

  function _addCard(card) {
  	return cards.$add(card);
  }

  function getCardByKey(key) {
  	return cards.$getRecord(key);
  }

  function saveCard(card) {
  	if (Users.hasCard()) {
  		return _updateCard(card);
  	} else {
  		return _addCard(card);
  	}
  }

  function saveCardToUserSuccess() {
  	console.log('card saved to user');
  }

  function _updateCard(card) {

  }

});
