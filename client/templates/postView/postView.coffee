Session.setDefault 'key_likeOrLiked', false

Template.postView.events
  'click #edit-button': (event, template)->
    postId = template.data._id
    Router.go "/editView/#{postId}"

  'click #like-button': (event, template)->
    liked = Session.get 'key_likeOrLiked'
    postId = template.data._id
    if (liked)
      Posts.update {_id: postId}, {"$pull": {likes: {authorId: Meteor.user()._id}}}
    else
      likeInfo =
        authorId: Meteor.user()._id
        time: Date.now()
      console.log likeInfo
      Posts.update {_id: postId}, {"$push": {likes: likeInfo}}
    Session.set 'key_likeOrLiked', !liked

Template.postView.helpers
  userName: (authorId)->
    currentUser = Meteor.users.findOne(authorId)
    currentUser?.username

  isMyPost: ->
    Meteor.user()._id is this.authorId
  
  get_avatar_url_from_post:  (post)->
    p = Posts.findOne {_id: post._id}
    usr = Meteor.users.findOne({_id: p.authorId})
    Avatar.getUrl(usr)

  likeOrLiked: ->
    Session.get 'key_likeOrLiked'

  numLikes: ->
    return @likes.length if @likes?
    return 0