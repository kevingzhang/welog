Template.actionSheet.events({
  'click [data-action=showLogin]': function (event, template) {
    IonActionSheet.show({
      titleText: 'Login Page',
    {{#if currentUser}}
      buttons: [
        { text: 'Log Out <i class="icon ion-log-out"></i>' },
        { text: 'Cancel <i class="icon ion-android-cancel"></i>' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Cancelled!');
      },
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Shared!');
        }
        if (index === 1) {
          console.log('Moved!');
        }
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('Destructive Action!');
        return true;
      }
    });
  }
});