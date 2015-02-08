Template.postView.helpers({
  userName: function (authorId) {
  	console.log(authorId);
  	var currentUser = Meteor.users.findOne(authorId);
  	return currentUser.username;
  }
});
