Template.postView.events
  'click #edit-button': (event, template)->
    postId = template.data._id
    Router.go "/editView/#{postId}"

Template.postView.helpers
  userName: (authorId)->
    currentUser = Meteor.users.findOne(authorId)
    currentUser?.username

  isMyPost: ()->
    Meteor.user()._id is this.authorId
  
  get_avatar_url_from_post:  (post)->
    p = Posts.findOne {_id: post._id}
    usr = Meteor.users.findOne({_id: p.authorId})
    Avatar.getUrl(usr)
