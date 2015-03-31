Template.launch.rendered=function(){
	$('.splash').hammer({});
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


Template.launch.gestures({
  'swipeleft .splash': function (event, template) {
    /* Do something when user swipes left on .item .panel (elements(s) inside the template html) */
    /* `event` is the Hammer.js event object */
    /* `template` is the `Blaze.TemplateInstance` */
    /* `this` is the data context of the element in your template */
       console.log(event.type);
       alert(event.type);
       Router.go("/homescreen");
  }
 
});