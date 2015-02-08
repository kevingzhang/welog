Template.postView.events({
	'click #edit-button': function(event, template) {
		console.log(event);
		console.log(template);
		Router.go('editPost', {_id: template.data._id})
	}
})