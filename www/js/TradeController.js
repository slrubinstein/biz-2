angular.module('bizCard')

.controller('TradeCtrl', function($state, Auth, User, QRCode) {
  
  var vm = this;

  vm.authData;
  vm.message = '';
  vm.scan = scan;
  
  init();

  function init() {
		vm.authData = User.getUser();
  	QRCode.createQR('qr-code', vm.authData.uid);
  }

  function scan() {
  	QRCode.scanQR(function(result) {
  		vm.message = result.text;
  	}, function(e) {
  		console.log(e);
  		vm.message = e;
  	});
  }

});
