Template.postView.events
  'click #edit-button': (event, template)->
    postId = template.data._id
    Router.go "/editView/#{postId}"

  'click #like-button': (event, template)->
    postId = template.data._id
    liked = Posts.findOne {_id: postId, 'likes.authorId' : Meteor.user()._id}
    if liked
      Posts.update {_id: postId}, {"$pull": {likes: {authorId: Meteor.user()._id}}}
    else
      likeInfo =
        authorId: Meteor.user()._id
        time: Date.now()
      Posts.update {_id: postId}, {"$push": {likes: likeInfo}}

Template.postView.helpers
  userName: (authorId)->
    currentUser = Meteor.users.findOne(authorId)
    currentUser?.username

  isMyPost: ->
    Meteor.user()._id is @authorId if Meteor.user()?
  
  get_avatar_url_from_post:  (post)->
    p = Posts.findOne {_id: post._id}
    usr = Meteor.users.findOne({_id: p.authorId})
    Avatar.getUrl(usr)

  isLiked: ->
    Posts.findOne {_id: @_id, 'likes.authorId' : Meteor.user()._id}

  numLikes: ->
    return @likes.length if @likes?
    return 0