Meteor.startup ()->

  if Posts.find().count() is 0
    for i in [0..10]
      Posts.insert
        title: Fake.sentence()
        body: Fake.paragraph()
        published: Fake.fromArray [true, false]
        time: new Date()

  if Meteor.users.find().count() is 0
    for i in [0..10]
      Accounts.createUser
        username: Fake.sentence().substr(0, 5)



