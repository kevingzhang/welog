Meteor.startup ()->

  if Posts.find().count() is 0
    for i in [0..10]
      Posts.insert
        title: Fake.sentence()
        body: Fake.paragraph()
        published: Fake.fromArray [true, false]
        time: new Date()




