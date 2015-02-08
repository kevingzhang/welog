Template.postView.events({
	'click #edit-button': function(event, template) {
		console.log(event);
		console.log(template);
		Router.go('editPost', {_id: template.data._id})
	}
})

Template.postView.helpers({
  userName: function (authorId) {
  	console.log(authorId);
  	var currentUser = Meteor.users.findOne(authorId);
  	return currentUser.username;
  }
});
