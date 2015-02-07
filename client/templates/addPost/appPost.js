AutoForm.hooks({
  'add-post': {
    onSuccess: function (operation, result, template) {
		Router.go('index')
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});