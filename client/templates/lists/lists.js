
Template.lists.helpers({
  posts: function() {
    return Posts.find();
  },

  getuser: function(authorId) {
  	console.log ("authorId is ", authorId);
  	var u = Meteor.users.findOne({_id: authorId});
  	console.log ("u is ", u);
  	return u;
  }
});
