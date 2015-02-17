
Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  time:{
    type: Date,
      autoValue: function() {
        return new Date;
      }

  },
  authorId:{
    type: String,
<<<<<<< HEAD
    autoValue: function(){
      if (this.isUpdate) {
        return;
      }
      if (this.isInsert){
        return this.userId;
      }
      
    }
=======
      autoValue: function() {
        if(this.isUpdate){
          return;
        }
        console.log(Meteor.user()._id);
        return Meteor.user()._id;
      }
>>>>>>> 704e52f0b45d4aba9761af9de51901ee3253815a
  }
}));
