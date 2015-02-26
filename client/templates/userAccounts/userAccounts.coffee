Template.userAccounts.events
  'click [data-action=logout]': ->
    AccountsTemplates.logout()

AccountsTemplates.addField
  _id: 'username'
  type: 'text'
  required: true
  func: (value) ->
    if Meteor.isClient
      self = this
      Meteor.call 'userExists', value, (err, userExists) ->
        if !userExists
          self.setSuccess()
        else
          self.setError userExists
        self.setValidating false
      return
    # Server
    Meteor.call 'userExists', value