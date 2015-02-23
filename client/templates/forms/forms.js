AutoForm.hooks({
  'edit-form': {
    onSuccess: function (operation, result, template) {
    	Posts.insert ({title:posts.title});
      alert('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
