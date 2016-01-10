angular.module('starter')
.factory("User", function(Auth) {

	return {
		createAccount: createAccount,
		logIn: logIn
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

	function logIn(credentials) {
		Auth.$authWithPassword({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}

});
