Template['inCall'].helpers({
	incomingCall:function(){return Session.get('incomingCall')},
	outboundCall:function(){return Session.get('outboundCall')},
	optionsOverlay:function(){return Session.get('optionsOverlay')},
	favorites:function(){return Session.get('favorites')},
	callPresent:function(){return Session.get('callPresent')}
});

Template['inCall'].events({

	//you're going to need to use if statments here to determine where the x button routes. 
	'click .exitCall' : function () {
	Session.set('incomingCall', false)
	  Router.go('/homescreen');
	},
	'click .exitEdit' : function () {
	Session.set('optionsOverlay', false)
	Session.set('incomingCall', false);
	Session.set('callPresent', false);
	Session.set('inCallMenu', false);
	Session.set('standardMenu', true);
	  Router.go('/homescreen');
	},
	'click .endCall' : function () {
	Session.set('incomingCall', false);
	Session.set('callPresent', false);
	Session.set('inCallMenu', false);
	Session.set('standardMenu', true);
	  Router.go('/homescreen');
	},
	

	'click #DND' : function () {
	Session.set('icon', "<i class='dont icon pukeGreen'></i>");
	
	},
	'click #ignore' : function () {
	Session.set('standardMenu', true);
	Session.set('backScreen',false);
	Session.set('callUI',false);
	Session.set('inCallMenu', false);
	
	}

});

Template.inCall.rendered=function(){
	//when a call is placed, show the call UI for 5 seconds and then go to the main UI again in call
	if( Session.get('callPresent')){
		// Session.set('callPresent', false)
	// 	setTimeout(function(){ Router.go('/homescreen') }, 3000);
	}

	else if (!Session.get('incomingCall') && (!Session.get('optionsOverlay'))&& (!Session.get('favorites'))){
		Session.set('standardMenu', false);
		Session.set('backScreen',false);
		Session.set('callUI',true);
		Session.set('inCallMenu', true)
		Session.set('callPresent', false)
		setTimeout(function(){ Router.go('/homescreen') }, 3000);
		
	}
	else if (Session.get('favorites')){
		Session.set('standardMenu', false);
		Session.set('callPresent', false)
		Session.set('backScreen',false);
		Session.set('callUI',true);
		Session.set('inCallMenu', true)
	}
	
	else {
		Session.set('standardMenu', false);
		Session.set('backScreen',false);
		Session.set('callUI',true);
		Session.set('inCallMenu', true)
		Session.set('callPresent', false)
		setTimeout(function(){ Router.go('/homescreen') }, 3000);
	}
	
}



