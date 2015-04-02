Template.launch.rendered=function(){
	var splash=document.getElementById('splash');
	var swipeRoute= new Hammer(splash);
	swipeRoute.on('swipeleft', function (ev){
		Router.go('/homescreen')
	})
}

Template.launch.helpers({
	pacificTime:function(){return moment().tz('America/Los_Angeles').format("h:mm a");},
	mountainTime:function(){return moment().tz('America/Denver').format("h:mm a");},
	centralTime:function(){return moment().tz('America/Chicago').format("h:mm a");},
	easternTime:function(){return moment().tz('America/New_York').format("h:mm a");},
	localTime:function(){return moment().format("h:mm")},
	date:function(){return moment().format('dddd, MMMM D')}
});

Template['launch'].events({
	'click .launchDown' : function () {
	  Router.go('/homescreen');
	},

	
});

