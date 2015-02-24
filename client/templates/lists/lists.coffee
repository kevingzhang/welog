Template.lists.helpers
  posts: ->
    Posts.find {}, sort: time: -1
  getuser: ->
    Meteor.users.findOne _id: @authorId
  getUserPictureOrDefault: ->
    @picture and @picture.thumbnail or 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
  get_avatar_url: (usr) ->
    Avatar.getUrl usr

Template.lists.events
  'click .viewpost': ->
    Router.go "/postView/#{@_id}"