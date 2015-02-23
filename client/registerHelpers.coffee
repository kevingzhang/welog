
Template.registerHelper 'humanizedTime', (time)->
  moment(time).format('MMM/D/YYYY h:m:s')

Template.registerHelper 'isTypeText', (type)->
  type is 'text'

Template.registerHelper 'isTypePic', (type)->
  type is 'picture'