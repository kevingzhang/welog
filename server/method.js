Meteor.methods({
	// you can call this in browser console: Meteor.call('newUser', 'test', 'test@gmail.com', 'test')
	newUser: function(user, email, password){

		Accounts.createUser({username: user, email: email, password: password});
	}
});