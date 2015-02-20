
Template.postView.events
	'click #edit-button': (event, template)->
		#console.log(event)
		#console.log(template)
		Router.go('editPost', {_id: template.data._id})
	



Template.postView.helpers
  userName:  (authorId)->
  	console.log(authorId)
  	currentUser = Meteor.users.findOne(authorId)
  	return currentUser?.username
  

  isMyPost:  ()->
    return Meteor.user()._id is this.authorId;
  


Template.postView.helpers
  get_avatar_url_from_post:  (post)->
    
    p = Posts.findOne {_id: post._id}
    usr = Meteor.users.findOne({_id: p.authorId})
    return Avatar.getUrl(usr)
  
  isTypeText:->
    @type is 'text'