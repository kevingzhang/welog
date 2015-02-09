
Template.lists.helpers({
  posts: function() {
    return Posts.find();
  },

  getuser: function() {
    console.log('this', this);
  	var u = Meteor.users.findOne({_id: this.authorId});
  	console.log ("u is ", u);
  	return u;
  }
});

Template.lists.events({
	'click .viewpost': function (event) {
		// body...
		var postid = event.target.getAttribute('data-id');
		console.log(postid);
		Router.go('/postView/'  +  postid);
	},
	'click #wechat': function (event) {
		wx.config({
			debug: true,
			appId: 'wxe70166b91984eae3',
			timestamp: 1423440181,
			nonceStr: 'ahr9hu1qsteasjo',
			signature: '157cb286717fcb931d591862476d3895b5843754',
			jsApiList: ['chooseImage','getLocation','getNetworkType','scanQRCode','hideOptionMenu']
		});

		wx.ready(function() {
			alert('ready');
			wx.checkJsApi({
				jsApiList: ['getNetworkType','chooseImage','getLocation','scanQRCode','hideOptionMenu'],
				success: function(res) {
					alert('checkJSAPI');
					wx.hideOptionMenu();

					wx.getNetworkType({
						success: function (res) {
							//alert(res);
							var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
							alert("getNetworkType: " + networkType);
						}
					});


					/*
					wx.getLocation({
						success: function (res) {
							alert(res);
							var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
							var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
							var speed = res.speed; // 速度，以米/每秒计
							var accuracy = res.accuracy; // 位置精度
						}
					});
					*/

					wx.scanQRCode({
						needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
						scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
						success: function (res) {
							alert(res);
							var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
						}
					});

					wx.chooseImage({
						success: function (res) {
							alert(res);
							var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						}
					});
				}
			});

		});

	}
});
