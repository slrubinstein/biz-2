angular.module('bizCard')
.factory("Cards", function($firebaseArray, Users) {
  var cardsRef = new Firebase('https://bizcard.firebaseio.com/cards');
  var cards = $firebaseArray(cardsRef);

  return {
  	saveCard: saveCard
  };

  function _addCard(card) {
  	cards.$add(card).then(function(ref) {
  		console.log('card saved as', ref);
  	}, function(error) {
  		console.error('error saving card:', error);
  	});
  }

  function saveCard(card) {
  	if (Users.hasCard()) {
  		_updateCard(card);
  	} else {
  		_addCard(card);
  	}
  }


});
