
Template.lists.helpers({
  posts: function() {
    return Posts.find({}, {sort:{time:-1}});
  },

  getuser: function() {
    //console.log('this', this);
  	var u = Meteor.users.findOne({_id: this.authorId});
  	console.log ("u is ", u);
  	return u;
  },
  getUserPictureOrDefault: function(){
    return (this.picture&& this.picture.thumbnail) || 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
  }
  
});

Template.lists.events({
	'click .viewpost': function (event) {
		// body...
		var postid = event.target.getAttribute('data-id');
		console.log(postid);
		Router.go('/postView/'  +  postid);
	}
});
