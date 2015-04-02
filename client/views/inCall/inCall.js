Template['inCall'].helpers({
	incomingCall:function(){return Session.get('incomingCall')}
});

Template['inCall'].events({

	//you're going to need to use if statments here to determine where the x button routes. 
	'click .exitCall' : function () {
	Session.set('incomingCall', false)
	  Router.go('/homescreen');
	},
});



