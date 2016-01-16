angular.module('bizCard')
.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://bizcard.firebaseio.com");
  var auth = $firebaseAuth(ref);

  return {
		createAccount: createAccount,
		getAuth: getAuth,
		logIn: logIn,
		logOut: logOut
  }

	function createAccount(credentials, successCallback, errorCallback) {
		auth.$createUser({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log('Logged in as:', authData.uid);
		  successCallback(authData.uid);
		}).catch(function(error) {
		  console.error('Authentication failed:', error);
		});
	}

	function getAuth() {
		return auth.$getAuth();
	}

	function logIn(credentials, successCallback, errorCallback) {
		return auth.$authWithPassword({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log('Logged in as:', authData);
		  successCallback(authData.uid);
		}).catch(function(error) {
		  console.error('Authentication failed:', error);
		  errorCallback(error);
		});
	}

	function logOut() {
		return auth.$unauth();
	}

});
