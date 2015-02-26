Meteor.publishComposite 'postsForList',
  find: ->
    Posts.find {},
      sort:
        score: -1
      limit: 100
  children: [ {
    find: (post) ->
      Meteor.users.find
        _id: post.authorId
        fields:
          createdAt: 1
          username: 1
          emails: 1
          picture: 1
  } ]

Meteor.publishComposite 'postForView', (postId) -> {
  find: ->
    Posts.find {_id: postId},
      sort:
        score: -1
      limit: 100
  children: [ {
    find: (post) ->
      Meteor.users.find
        _id: post.authorId
        fields:
          createdAt: 1
          username: 1
          emails: 1
          picture: 1
  } ]
}