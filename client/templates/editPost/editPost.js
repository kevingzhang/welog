AutoForm.hooks({
  'edit-post': {
    onSuccess: function (operation, result, template) {
		Router.go('postView', {_id: template.data.doc._id })
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});