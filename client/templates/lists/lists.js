
Template.lists.helpers({
  posts: function() {
    return Posts.find();
  },

  getuser: function(uid) {
  	console.log ("uid is ", uid);
  	var users = Meteor.users.find().fetch();
  	var u = users[uid];
  	console.log ("u is ", u);
  	return u;
  }
});
