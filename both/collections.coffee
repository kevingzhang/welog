@Posts = new Mongo.Collection 'posts'

Posts.attachSchema new SimpleSchema
  title: 
    type: String
    max: 200
    autoform: 
      'label-type': 'stacked'

  'sections.$.type':
    type:String
    allowedValues:['text', 'picture', 'audio', 'video']

  'sections.$.text':
    type:String
    optional:true
    
  'sections.$.pic':
    type:String 
    optional:true 

  'sections.$.time':
    type:Number
    optional:true 

  published: 
    type: Boolean
    defaultValue: true
    autoform: 
      type: 'toggle'

  time:
    type: Date
    autoValue: ->
      if @isInsert
        return new Date()
      else
        @unset()
      
  authorId:
    type: String
    autoValue: ->
      if @isUpdate
        return
      
      if this.isInsert
        return @userId

  'likes.$.authorId':
    type:String
    autoValue: ->
      if @isUpdate
        return

      if this.isInsert
        return @userId

  'likes.$.time':
    type:Number
    optional:true