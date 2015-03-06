Template.editPost.rendered = ->
  Session.set 'sections', @data.sections

Template.editPost.helpers
  sections:->
    Session.get 'sections'

Template.editPost.events
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

  'click textarea.in-display-mode':(e)->
    timeString = e.target.getAttribute 'data-id'
    timeId = parseInt timeString 
    sections = Session.get 'sections'
    sections.forEach (s)->
      if s.time is timeId 
        s.isNotEditMode = false 
    Session.set 'sections', sections

  'blur textarea.in-edit-mode':(e)->
    text = e.target.value
    timeString = e.target.getAttribute 'data-id'
    timeId = parseInt timeString 
    sections = Session.get 'sections'
    sections.forEach (s)->
      if s.time is timeId 
        s.text = text
        s.isNotEditMode = true 
    Session.set 'sections', sections

  'click a.ion-android-send':(e, t)->
    title = (t.find 'input[name=title]')?.value
    sections = Session.get 'sections'
    cleanedSections = sections.map (s)->
      delete s.isNotEditMode
      return s
    
    updateObj = 
      title:title
      sections: cleanedSections
      published:true

    postId = Posts.update {_id:@_id},{$set:updateObj}
    Router.go "/postView/#{@_id}"

    # ...