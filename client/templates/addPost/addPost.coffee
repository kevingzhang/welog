Template.addPost.helpers
  sections:->
    Session.get 'sections'

Template.addPost.events
  'click a.ion-android-textsms': (e) ->
    sections = (Session.get 'sections') or []

    sections.push {type:'text', time: Date.now()}
    Session.set 'sections', sections
    # ...
  'click a.ion-android-camera': (e) ->
     MeteoricCamera.getPicture {}, (e,r)->
      if e?
        console.log e.message
      else
        sections = (Session.get 'sections') or []
        sections.push {type:'picture', time: Date.now(), pic: r}
        Session.set 'sections', sections
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
    console.log 'Submitting...'
    sections = Session.get 'sections'
    console.log sections

    title = (t.find 'input[name=title]')?.value
    cleanedSections = sections.map (s)->
      delete s.isNotEditMode
      return s
    
    newPost =
      title:title
      sections: cleanedSections
      published:true

    console.log newPost
    postId = Posts.insert newPost
    Router.go "/postView/#{postId}"

    # ...
