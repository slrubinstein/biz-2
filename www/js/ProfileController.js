angular.module('bizCard')

.controller('ProfileCtrl', function($state, Users, Cards, CardModel, Auth) {
  var vm = this;

  vm.card;
  vm.logOut = logOut;
  vm.saveCard = saveCard;


  init();

  function init() {
  	debugger
  	vm.card = new CardModel(Users.getUser().uid);
  }

  function logOut() {
    Auth.logOut();
    $state.go('login');
  }

  function saveCard() {
  	Cards.saveCard(vm.card)
  	.then(function(ref) {
  		saveCardToUser(ref.key());
  	}, function(error) {

  	});
  }

  function saveCardToUser(key) {
  	Users.updateUser({
  		card: key
  	})
  	.then(function(ref) {
  		console.log('saved', ref);
  	}, function(error) {
  		console.error(error);
  	});
  }

});
