SES_USER_LOGIN_KEY = 'sesUserLogin';
SES_PREV_URL_KEY = 'sesPrevUrl';

// global Templage.registerhelper:

Meteor.startup( 
	function()
	{
    	Session.setDefault(SES_USER_LOGIN_KEY, false);
    	Session.setDefault(SES_PREV_URL_KEY, false);
    }
);

/*
// call:
// var result = UI._globalHelpers.functionName(param1, param2);
Template.registerhelper('backupUrlToSes', 
	function(url)
	{
		Session.set(SES_PREV_URL_KEY, url);
	}//
);

Template.registerhelper('getPrevUrl',
	function()
	{
		return Session.get(SES_PREV_URL_KEY);
	}
);
*/