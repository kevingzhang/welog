AutoForm.hooks({
  'add-post': {
    onSuccess: function (operation, result, template) {
		Router.go('postView', {_id: result })
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});