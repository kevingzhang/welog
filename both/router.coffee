Router.configure
  layoutTemplate: 'layout'

Meteor.startup ->
  if Meteor.isClient
    location = Iron.Location.get()
    if location.queryObject.platformOverride
      Session.set 'platformOverride', location.queryObject.platformOverride
  return

Router.map ->
  @route 'lists',
    path: '/'
    subscriptions: ->
      Meteor.subscribe 'postsForList'
      return

  @route 'postView',
    path: '/postView/:_id'
    subscriptions: ->
      Meteor.subscribe 'postForView', @params._id
      return
    data: ->
      Posts.findOne @params._id

  @route 'editPost',
    path: '/editPost/:_id'
    subscriptions: ->
      Meteor.subscribe 'postForView', @params._id
      return
    data: ->
      Posts.findOne @params._id

  @route 'addPost'
  @route 'sideMenu'
  @route 'userAccounts'