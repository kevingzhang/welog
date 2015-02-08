Meteor.startup ->
  Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false});
