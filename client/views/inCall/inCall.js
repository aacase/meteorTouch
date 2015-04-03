Template['inCall'].helpers({
	incomingCall:function(){return Session.get('incomingCall')},
	outboundCall:function(){return Session.get('outboundCall')},
	optionsOverlay:function(){return Session.get('optionsOverlay')}
});

Template['inCall'].events({

	//you're going to need to use if statments here to determine where the x button routes. 
	'click .exitCall' : function () {
	Session.set('incomingCall', false)
	  Router.go('/homescreen');
	},
	'click .exitEdit' : function () {
	Session.set('optionsOverlay', false)
	  Router.go('/homescreen');
	},
});

Template.inCall.rendered=function(){
	//when a call is placed, show the call UI for 5 seconds and then go to the main UI again in call
	if (!Session.get('incomingCall') && (!Session.get('optionsOverlay'))){
		Session.set('standardMenu', false);
		Session.set('backScreen',false);
		Session.set('callUI',true);
		Session.set('inCallMenu', true)
		setTimeout(function(){ Router.go('/homescreen') }, 3000);
		
	}
}



