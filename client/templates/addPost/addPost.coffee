AutoForm.setDefaultTemplate('ionic')

AutoForm.hooks {
  'add-post':
    onSuccess: (operation, result, template)->
      Router.go 'postView', _id: result
    onError: (operation, error, template)->
      console.log(error)
    
}

Template.addpost.helpers
  sections:->
    Session.get 'sections'
  isTypeText: () ->
    @type is 'text'
    # ...

Template.addpost.events
  'click a.ion-android-textsms': (e) ->
    sections = (Session.get 'sections') or []

    sections.push {type:'text', time: Date.now()}
    Session.set 'sections', sections
    # ...
  'click a.ion-android-camera': (e) ->
    console.log "add text now"
    # ...
  'click a.ion-android-image': (e) ->
    console.log "add text now"

  'click a.right-x-button':(e)->
    time = e.target.getAttribute 'data-id'
    sections = Session.get 'sections'
    newSections = sections.filter (s)->s.time isnt parseInt(time)
    Session.set 'sections', newSections


    # ...