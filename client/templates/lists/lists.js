
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
<<<<<<< HEAD
	'click .viewpost': function() {
=======
	'click .viewPostFromDiv': function (event) {
>>>>>>> 704e52f0b45d4aba9761af9de51901ee3253815a
		// body...
		var postid = this._id;
		console.log(postid);
		Router.go('/postView/'  +  postid);
	}
});

Template.lists.helpers({
  get_avatar_url: function (usr) {
    // http://momentjs.com/
    return Avatar.getUrl(usr);
  }
});
