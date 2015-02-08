
Template.lists.helpers({
  posts: function() {
    return Posts.find();
  },

  getuser: function() {
    console.log('this', this);
  	var u = Meteor.users.findOne({_id: this.authorId});
  	console.log ("u is ", u);
  	return u;
  }
});

Template.lists.events({
	'click .viewpost': function (event) {
		// body...
		var postid = event.target.getAttribute('data-id');
		console.log(postid);
		Router.go('/postView/'  +  postid);
	}
})