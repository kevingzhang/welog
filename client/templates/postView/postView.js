
Template.postView.events({
	'click #edit-button': function(event, template) {
		console.log(event);
		console.log(template);
		Router.go('editPost', {_id: template.data._id})
	}
});


Template.postView.helpers({
  userName: function (authorId) {
  	console.log(authorId);
  	var currentUser = Meteor.users.findOne(authorId);
  	return currentUser.username;
  },

  isMyPost: function () {
      return Meteor.user()._id === this.authorId;
  }
});

Template.postView.helpers({
  get_avatar_url_from_post: function (post) {
    // http://momentjs.com/
    var p = Posts.findOne({_id: post._id});
    var usr = Meteor.users.findOne({_id: p.authorId});
    return Avatar.getUrl(usr);
  }
});