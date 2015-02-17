Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();  //get the platformOverride section in the url.
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
//  this.route('index', {path: '/'});
  this.route('lists', 
    {
      path: '/', 
      subscriptions: function() {
      // Client
      console.log("ready to sub Posts");
      Meteor.subscribe('Posts');
      }
    }
  );
  this.route('actionSheet');
  this.route('backdrop');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
//  this.route('addpost');
  this.route('addpost',
  {
    path: '/addpost',
    
    action: function(){
      console.log('Position a-1');
      if(Meteor.user())
      {
        this.render();
      }
      else
      {
        console.log('Position a');
        url = Router.current().route.path(this);
        console.log('current url is: ', url);
        Session.set(SES_PREV_URL_KEY, url);

        console.log('Position a');
        console.log(Session.get(SES_PREV_URL_KEY));
        Router.go('userAccounts');
      }
    }
  });
  this.route('headersFooters');
//  this.route('lists');
  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slideBox');
  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
  this.route('userAccounts');
  this.route('postView', {
    path: '/postView/:_id',
    subscriptions:function(){
      Meteor.subscribe('post', this.params._id);
    },
    data: function(){
      var tmp_test = Posts.findOne(this.params._id);
      console.log(tmp_test);
      return tmp_test;
    }
  });
  this.route('editPost', {
    path: '/editPost/:_id',
    subscriptions:function(){
      Meteor.subscribe('post', this.params._id);
    }
    , data: function(){
      if(Meteor.user())
        return Posts.findOne(this.params._id);
    }

    , action: function(){
      console.log('posisition-f');
      if(Meteor.user())
      {
        this.render();
      }
      else
      {
        Router.go('userAccounts');
      }
    } 
  }//editPost

  , this.route('editPostNoId',
    {
      path: '/editPost/',
      action: function()
      {
        alert('No postId! Please login first');
        Router.go('userAccounts');
      }
    }
    )
  , this.route('editPostNo',
    {
      path: '/editPost',
      action: function(){
        Router.go('editPostNoId');
      }
    })
  );
});
