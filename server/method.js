Meteor.methods({
	newUser: function(user, email, password){
		console.log ('user',user,email,password);
		Accounts.createUser({username: user, email: email, password: password});
	}
});