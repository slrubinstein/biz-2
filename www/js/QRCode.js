angular.module('bizCard')
.factory("QRCode", function() {

  return {
  	createQR: createQR,
  	scanQR: scanQR
  };

  function createQR(id, text) {
  	new QRCode(document.getElementById(id), text);
  }

  function scanQR(successCallback, errorCallback) {
  	try {
    	cordova.plugins.barcodeScanner.scan(successCallback, errorCallback);
  	} catch(e) {
  		console.log(e);
  	}
  }

});
