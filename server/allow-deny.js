Posts.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    console.log("userId is ", userId);
    console.log("authorId is ", doc.authorId);

    return (userId && doc.authorId === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return (userId && doc.authorId === userId);
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return (userId && doc.authorId === userId);
  }
});

Posts.deny({
  update: function (userId, docs, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'authorId');
  },
  remove: function (userId, doc) {
    // can't remove locked documents
    return doc.authorId !== userId;
  }
});



