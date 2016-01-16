angular.module('bizCard')
.factory('Users', function(Auth, $firebaseArray) {

  var usersRef = new Firebase('https://bizcard.firebaseio.com/users');
  var users = $firebaseArray(usersRef);

	var user = {};

	return {
		addUser: addUser,
		getUser: getUser,
		hasCard: hasCard,
		setUser: setUser,
		updateUser: updateUser
	};

	function addUser(uid) {
		users.$add({
			uid: uid
		}).then(function(ref) {
			debugger;
		});
	}

	function hasCard() {
		return !!getUser().card;
	}

	function findUserByUid(uid) {
		return _.find(users, function(u) { return u.uid === uid });
	}

	function getUser() {
		return angular.equals({}, user) ? setUser(Auth.getAuth().uid) : user;
	}

	function setUser(uid) {
		return findUserByUid(uid);
	}

	function updateUser(data) {
		// there must be a better way to do this
		var uid = getUser().uid;
		var $id = findUserByUid(uid).$id;
		var index = users.$indexFor($id);
		angular.extend(users[index], data);
		return users.$save(index);
	}

});
