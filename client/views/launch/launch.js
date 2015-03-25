Template.launch.rendered=function(){
	// Session.set('pacificTime', moment())
}

Template.launch.helpers({
	pacificTime:function(){return moment().tz('America/Los_Angeles').format("h:mm A");},
	mountainTime:function(){return moment().tz('America/Denver').format("h:mm A");},
	centralTime:function(){return moment().tz('America/Chicago').format("h:mm A");},
	easternTime:function(){return moment().tz('America/New_York').format("h:mm A");},
	localTime:function(){return moment().format("h:mm")},
	date:function(){return moment().format('dddd, MMMM D')}
});

Template['launch'].events({
});
