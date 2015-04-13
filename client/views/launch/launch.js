Template.launch.rendered=function(){
	var splash=document.getElementById('splash');
	var swipeRoute= new Hammer(splash);
	swipeRoute.on('swipeleft', function (ev){
		Router.go('/homescreen')
	})
}

Template.launch.helpers({
	pacificTime:function(){return moment().tz('Asia/Tokyo').format("h:mm a");},
	mountainTime:function(){return moment().tz('America/Denver').format("h:mm a");},
	centralTime:function(){return moment().tz('America/New_York').format("h:mm a");},
	easternTime:function(){return moment().tz('Atlantic/Canary').format("h:mm a");},
	localTime:function(){return moment().format("h:mm")},
	date:function(){return moment().format('dddd, MMMM D')}
});

Template['launch'].events({
	'click .launchDown' : function () {
	  Router.go('/homescreen');
	},
	'click .moveUI': function(){
		 Session.set('standardMenu', false);
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('move', true);
	Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('location', 'Local');
	 Session.set('launchMove', true);
	 Router.go('/homescreen')
	},

	'click .MBU' : function(){
	Session.set('outboundCall', true)
	  Session.set('favorites', false)
	  Session.set('favorite', false)
	  Session.set('recentOverlay', false)
	 Router.go('/meeting/bLzwp9RkDZWbeWepa');
	},
	'click .london' : function(){
	Session.set('outboundCall', true)
	  Session.set('favorites', false)
	  Session.set('favorite', false)
	  Session.set('recentOverlay', false)
	 Router.go('/meeting/E3i9pRtwfhn2sTxiE');
	},
	'click .tokyo' : function(){
	Session.set('outboundCall', true)
	  Session.set('favorites', false)
	  Session.set('favorite', false)
	  Session.set('recentOverlay', false)
	 Router.go('/meeting/cBZ8dmxMdmshZuvu4');
	}

	
});

