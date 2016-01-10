angular.module('bizCard')
.factory("User", function(Auth) {

	return {
		createAccount: createAccount,
		logIn: logIn,
		logOut: logOut
	};

	function createAccount(credentials) {
		Auth.$createUser({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}

	function logIn(credentials, successCallback, errorCallback) {
		return Auth.$authWithPassword({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		  successCallback(authData);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		  errorCallback(error);
		});
	}

	function logOut() {
		return Auth.$unauth();
	}

});
