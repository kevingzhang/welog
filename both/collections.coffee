
@Posts = new Mongo.Collection 'posts'



Posts.attachSchema new SimpleSchema 
  title: 
    type: String
    max: 200
    autoform: 
      'label-type': 'stacked'
    

  'sections.$.secType':
    type:String

  'sections.$.secBody':
    type:Object
  
  body: 
    type: String
    autoform: 
      rows: 10
      'label-type': 'stacked'
    
  
  published: 
    type: Boolean
    defaultValue: true
    autoform: 
      type: 'toggle'
    
  
  time:
    type: Date
      autoValue: ->
        return new Date
      

  
  authorId:
    type: String
    autoValue: ->
      if @isUpdate
        return
      
      if this.isInsert
        return @userId
      
      
    
  

