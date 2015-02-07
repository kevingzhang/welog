Meteor.startup ()->

  if Posts.find().count() is 0
    for i in [0..10]
      usersArray = Meteor.users.find().fetch()
      uid = Math.random() * 10
      uid = Math.floor(uid)

      Posts.insert
        title: Fake.sentence()
        body: Fake.paragraph()
        published: Fake.fromArray [true, false]
        time: new Date()
        authorId: usersArray[uid]._id

