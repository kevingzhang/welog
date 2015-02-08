/**
 * Created by ruiyun_zhou on 2/8/15.
 */
Template.layout.events({
    'click #showProfileMenu': function (event) {
        if(Meteor.user()) {
            IonActionSheet.show({
                titleText: 'Menu',
                buttons: [
                    {text: 'Logout <i class="icon ion-log-out"></i>'}
                ],
            
                cancelText: 'Cancel',
                cancel: function () {
                    //console.log('Cancelled!');
                },
                buttonClicked: function (index) {
                    if (index === 0) {
                        Meteor.logout(function(){
<<<<<<< HEAD
                            toastr.warning("Logged out!");
                            //toastr.clear();
                            alert('User logged out');
=======
//                            alert('User logged out');
                            toastr.success("Successfully logged out!");
>>>>>>> FETCH_HEAD
                            Router.go('lists');
                        });
                    }
                    return true;
                },
                destructiveButtonClicked: function () {
                    console.log('Destructive Action!');
                    return true;
                }
            });
        } 

        else {
            IonActionSheet.show({
                titleText: 'Menu',
                buttons: [
                    {text: 'Login <i class="icon ion-log-in"></i>'}
                ],
                cancelText: 'Cancel',
                cancel: function () {
                    //console.log('Cancelled!');
                },
                buttonClicked: function (index) {
                    if (index === 0) {
                        Router.go('userAccounts');
                    }
                    return true;
                },
                destructiveButtonClicked: function () {
                    console.log('Destructive Action!');
                    return true;
                }
            });
        }
    }
});