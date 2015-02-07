// Server
Meteor.publishComposite('Posts', {
    find: function() {
        // Find top ten highest scoring posts
        return Posts.find({}, { sort: { score: -1 }, limit: 100 });
    },
    children: [
        {
            find: function(post) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Meteor.users.find(
                    { _id: post.authorId },
                    { fields: { createdAt: 1, username: 1, picture: 1 } });
            }
        },
    ]
});