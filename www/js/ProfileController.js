angular.module('bizCard')

.controller('ProfileCtrl', function($rootScope, $state, Users, Cards, CardModel, Auth) {
  var vm = this;
  var loginListener;

  vm.card;
  vm.logOut = logOut;
  vm.saveCard = saveCard;


  init();

  function init() {
  	if (loginListener) {
  		loginListener();
  	}
  	
  	loginListener = $rootScope.$on('login', function() {
  		init();
  	});

  	if (!Users.getUser()) {
  		return $state.go('login');
  	}

  	if (Users.hasCard()) {
  		vm.card = Cards.getCardByKey(Users.getUser().card);
  	} else {
  		vm.card = new CardModel(Users.getUser().$id);
  	}
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
