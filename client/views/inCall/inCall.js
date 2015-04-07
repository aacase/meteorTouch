Template['inCall'].helpers({
	incomingCall:function(){return Session.get('incomingCall')},
	outboundCall:function(){return Session.get('outboundCall')},
	optionsOverlay:function(){return Session.get('optionsOverlay')},
	favorites:function(){return Session.get('favorites')},
	callPresent:function(){return Session.get('callPresent')},
	directoryOverlay:function(){return Session.get('directoryOverlay')},
	recentOverlay:function(){return Session.get('recentOverlay')},
	incomingUI:function(){return Session.get('incomingUI')}
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
	'click .exitPresent' : function () {
	Session.set('optionsOverlay', false)
	Session.set('incomingCall', false);
	Session.set('callPresent', false);
	Session.set('backScreen', false);
	Session.set('inCallMenu', true);
	Session.set('callUI', true);
	Session.set('standardMenu', false);
	  Router.go('/homescreen');
	},
	'click .exitRecent' : function () {
	Session.set('optionsOverlay', false);
	Session.set('incomingCall', false);
	Session.set('callPresent', false);
	Session.set('backScreen', true);
	Session.set('recents', true);
	Session.set('recentOverlay', false)
	Session.set('inCallMenu', false);
	Session.set('callUI', false);
	Session.set('standardMenu', false);
	  Router.go('/homescreen');
	},
	'click .endCall' : function () {
	Session.set('incomingCall', false);
	Session.set('callPresent', false);
	Session.set('inCallMenu', false);
	Session.set('standardMenu', true);
	  Router.go('/homescreen');
	},

	'click .audioCall' : function () {
	Session.set('recentOverlay', false);
	Session.set('outboundCall', true);
	Session.set('standardMenu', false);
		Session.set('backScreen',false);
		Session.set('callUI',true);
		Session.set('inCallMenu', true)
		Session.set('callPresent', false)
	setTimeout(function(){ Router.go('/homescreen') }, 3000);
	  
	},
	
	

	'click #DND' : function () {
	Session.set('icon', '<i class="dont icon pukeGreen"></i>');
	
	},
	'click #ignore' : function () {
	Session.set('standardMenu', true);
	Session.set('backScreen',false);
	Session.set('callUI',false);
	Session.set('inCallMenu', false);
	
	},
	'click .addFav' : function(){
		console.log(this);
		cloudUsers.update({_id:this._id},{$set:{name:this.name, extension:this.extension,available:this.available,favorite:true}});
		Router.go('/')
	}	

});

Template.inCall.rendered=function(){

	if(Session.get('callCounter')>1){
		Session.set('multipleCallers', true)
		console.log("multiple callers?",Session.get('multipleCallers') )
		Session.set('incomingUI', "<div class=' center aligned row'><div class='three wide column callButton greenButton'><div class='bigTime'><img src='/images/add.png' alt='></div><div class='><h2>Add</h2></div></div><div class='one wide column'></div><div class='three wide column callButton greenButton'><div class='bigTime'><img src='/images/add.png' alt='></div><div class='><h2>End & Answer</h2></div></div><div class='one wide column'></div><div class='three wide column callButton endCall' id='ignore'><div class='bigTime'><img src='/images/end.png' alt='></div><div class='><h2>Ignore</h2></div></div><div class='one wide column'></div><div class='three wide column callButton endCall' id='DND'><div class='bigTime'><img src='/images/dnd.png' alt='></div><div class='><h2>DND</h2></div></div></div></div>")

	}
	else{
		Session.set('multipleCallers', false)
		console.log("multiple callers?",Session.get('multipleCallers') )
		Session.set('incomingUI', "<div class=' center aligned row'><div class='three wide column callButton greenButton audioCall'><a href='/call/{{_id}}'><img src='/images/layouts.png' alt=''> Audio Call</a></div><div class='one wide column'></div><div class='three wide column callButton greenButton'><img src='/images/layouts.png' alt=''></div><div class='one wide column'></div><div class='three wide column callButton endCall'><h1><i class='trash icon'></i></h1></div></div>")


	}

	

	//when a call is placed, show the call UI for 5 seconds and then go to the main UI again in call
	if( Session.get('callPresent')){
		// Session.set('callPresent', false)
	// 	setTimeout(function(){ Router.go('/homescreen') }, 3000);
	}

	else if( Session.get('directoryOverlay')){
		// Session.set('callPresent', false)
	// 	setTimeout(function(){ Router.go('/homescreen') }, 3000);
	}

	else if( Session.get('recentOverlay')){
		Session.set('outboundCall', false);
	}

	else if (!Session.get('incomingCall') && (!Session.get('optionsOverlay'))&& (!Session.get('favorites'))){
		Session.set('callCounter', Session.get('callCounter')+1);
		console.log('call counter', Session.get('callCounter'))
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
		Session.set('outboundCall', false);
		setTimeout(function(){ Router.go('/homescreen') }, 3000);
	}
	
}



