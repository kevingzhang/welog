Meteor.startup ()->

<<<<<<< HEAD
  if Posts.find().count() is 0
    for i in [0..10]
=======
  if Meteor.users.find().count() is 0
    for i in [0..10]
      Accounts.createUser
        username: Fake.sentence().substr(0, 5)

  if Posts.find().count() is 0
    for i in [0..10]
      usersArray = Meteor.users.find().fetch()
      uid = Math.random() * 10
      uid = Math.floor(uid)

>>>>>>> FETCH_HEAD
      Posts.insert
        title: Fake.sentence()
        body: Fake.paragraph()
        published: Fake.fromArray [true, false]
        time: new Date()
<<<<<<< HEAD



=======
        authorId: usersArray[uid]._id
>>>>>>> FETCH_HEAD

