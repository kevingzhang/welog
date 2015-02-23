
Template.registerHelper 'humanizedTime', (time)->
  moment(time).format('MMM/D/YYYY h:m:s')
