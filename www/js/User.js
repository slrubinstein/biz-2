angular.module('bizCard')
.factory('User', function(Auth) {

	return {
		createAccount: createAccount,
		getUser: getUser,
		logIn: logIn,
		logOut: logOut
	};

	function createAccount(credentials) {
		Auth.$createUser({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log('Logged in as:', authData.uid);
		}).catch(function(error) {
		  console.error('Authentication failed:', error);
		});
	}

	function getUser() {
		var authData = Auth.$getAuth();
		return authData;
	}

	function logIn(credentials, successCallback, errorCallback) {
		return Auth.$authWithPassword({
		  email: credentials.email,
		  password: credentials.password
		}).then(function(authData) {
		  console.log('Logged in as:', authData.uid);
		  successCallback(authData);
		}).catch(function(error) {
		  console.error('Authentication failed:', error);
		  errorCallback(error);
		});
	}

	function logOut() {
		return Auth.$unauth();
	}

});
