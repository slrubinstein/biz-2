angular.module('bizCard')
.factory("QRCode", function() {

  return {
  	createQR: createQR
  };

  function createQR(id, text) {
  	new QRCode(document.getElementById(id), text);
  }

});
