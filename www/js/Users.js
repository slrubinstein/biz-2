angular.module('bizCard')
.factory('Users', function(Auth, $firebaseArray) {

  var usersRef = new Firebase('https://bizcard.firebaseio.com/users');
  var users = $firebaseArray(usersRef);

	var user = {};

	return {
		addUser: addUser,
		getUser: getUser
	};

	function addUser(uid) {
		users.$add({
			uid: uid
		});
	}

	function hasCard() {
		return getUser();
	}

	function getUser() {
		// return angular.equals({}, user) ? Auth.getUser() : user;
	}

	function updateUser(data) {
		var index = users.$indexFor(getUser().uid);
		angular.extend(users[index], data);
		users.$save(index)
		.then(function(ref) {

		}, function(error) {

		});
	}

});
