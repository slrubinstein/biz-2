angular.module('bizCard')

.controller('TradeCtrl', function($state, Auth, User, QRCode) {
  
  var vm = this;

  vm.authData;
  
  init();

  function init() {
		vm.authData = User.getUser();
  	QRCode.createQR('qr-code', vm.authData.uid);
  }

});
