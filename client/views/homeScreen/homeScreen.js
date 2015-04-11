Template.homeScreen.helpers({
	pacificTime:function(){return moment()},
	infoPanel:function(){return Session.get('infoPanel')},
	icon:function(){return Session.get('icon')},
	homeScreen:function(){return Session.get('homeScreen')},
	location:function(){return Session.get('location')},
	directory:function(){return Session.get('directory')},
	myInfo:function(){return Session.get('myInfo')},
	call:function(){return Session.get('call')},
	backScreen:function(){return Session.get('backScreen')},
	callUI:function(){return Session.get('callUI')},
	inCallMenu:function(){return Session.get('inCallMenu')},
	inCallMenu2:function(){return Session.get('inCallMenu2')},
	standardMenu:function(){return Session.get('standardMenu')},
	dndEnabled:function(){return(Session.get('dndEnabled'))},
	record:function(){return Session.get('record')},
	move:function(){return Session.get('move')},
	recents:function(){return Session.get('recents')},
	keypad:function(){return Session.get('keypad')},
	recordingIcon:function(){return Session.get('recordingIcon')},
	system:function(){return Session.get('system')},
	favorites:function(){return Session.get('favorites')},
	meetings:function(){return Session.get('meetings')},
	callPresent:function(){return Session.get('callPresent')},
	mutipleCallers:function(){return Session.get('mutipleCallers')},
	incomingUI:function(){return Session.get('incomingUI')},



});

Template.homeScreen.rendered = function(){
	Session.set('infoPanel', false);
	Session.set('directory', false);
	Session.set('location', 'Home');
	if(Session.get('standardMenu')==false){
		Session.set('standardMenu', false);
	}
	else{
		Session.set('standardMenu', true);
		Session.set('homeScreen', true);
	}
	if(Session.get('recordingMode')){
		Session.set('recordingIcon', '<i class="record icon pukeGreen"></i>')
		
	}
	if (Session.get('icon')=="<i class='dont icon pukeGreen'></i>"){
		Session.set('dndEnabled', "<div class='sixteen wide column sideNav dndInvert ' id='dndActive'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
	}
	else{
		
		Session.set('dndEnabled', "<div class='sixteen wide column sideNav even ' id='dndButton'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
	}

	$('.ui.modal').modal();
	$(".ui.dimmer").dimmer();
	$( "#slider" ).slider({
      range: "min",
      min: 0,
      max: 10,
      value: 0,
      step: .001
    });
    $('#slider').draggable();



    
}

Template['homeScreen'].events({
	'click #launchButton' : function () {
	  Router.go('/launch');
	},

	'click #dndButton' : function () {
	  $('#dndButton').removeClass('.even');
	  
	   Session.set('icon', "<i class='dont icon pukeGreen'></i>");
	   Session.set('dndEnabled', "<div class='sixteen wide column sideNav dndInvert ' id='dndActive'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
	   // $('#dndButton').addClass('endCall');
	   if($('#dndButton').hasClass('dndInvert')){
	   	$("#dndButton").attr("id","dndActive");
	   }
	},

	'click #dndActive' : function () {
	  // $('#dndEnabled').removeClass('endCall');
	  // $('#dndEnabled').addClass('even');
	  Session.set('icon', "");
	  Session.set('dndEnabled', "<div class='sixteen wide column sideNav even ' id='dndButton'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
	  $("#dndEnabled").attr("id","dndButton");
	},
	'click #infoPanel' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('infoPanel', true);
	 $("#infoPanel").attr("id","infoPanelActive");
	 console.log(Session.get('infoPanel'), 'infoPanel')
	},
	'click #infoPanelActive' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('infoPanel', false);
	 $("#infoPanelActive").attr("id","infoPanel");
	 console.log(Session.get('infoPanel'), 'infoPanel')
	},
	'click #directory' : function () {
	  // $('#dndButton').removeClass('.even')
	  Session.set('standardMenu', false);

	 Session.set('directory', true);
	 Session.set('backScreen', true);
	 Session.set('call', false);
	 Session.set('location', "Directories")
	
	},
	'click #record' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('standardMenu', false);
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('record', true);
	 Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('location', 'Record');
	
	},
	'click #system' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('standardMenu', false);
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('system', true);
	 Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('location', 'Record');
	
	},
	'click #move' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('standardMenu', false);
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('move', true);
	Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('location', 'Move');
	
	},
	'click #backButton' : function () {
	  // $('#dndButton').removeClass('.even')

	  //adding logic here to determine what the back button does:

	  if (Session.get('directory')||Session.get('recents')|| Session.get('favorites')){
	  	Session.set('homeScreen', false);
	  	Session.set('recents', false);
	  	Session.set('myInfo', false);
	  	Session.set('favorites', false);
	  	Session.set('call', true);
	  		 // Session.set('callUI', true);
	  	Session.set('directory', false);
	  	Session.set('location', 'Call');
	  }
	  else{
	 Session.set('homeScreen', true);
	 Session.set('myInfo', false);
	 Session.set('backScreen', false);
	 Session.set('move', false);
	 Session.set('record', false);
	 Session.set('standardMenu', true);
	 Session.set('location', 'Home');
	 Session.set('call', false);
	  Session.set('keypad', false);
	  Session.set('system', false);
	  }
	 
	},
	// 'click #myInfo' : function () {
	//   // $('#dndButton').removeClass('.even')
	//  Session.set('homeScreen', false);
	//  Session.set('backScreen', true);
	//  Session.set('myInfo', true);
	//  Session.set('location', 'My Info');
	 
	// },

	'click #endCall' : function () {
	  // $('#dndButton').removeClass('.even')
	if (activeCalls.length > 1){

	 	Session.set('callCounter', Session.get('callCounter')-1);
	 	Session.set('outboundCall', false);
	 	Session.set('callEndOverlay', true);
	 	console.log(Session.get('callEndOverlay'))
	 	Router.go('/inCall');
	}
	else{
		 Session.set('homeScreen', true);
	 Session.set('standardMenu', true);
	 Session.set('backScreen', false);
	 Session.set('myInfo', false);
	 Session.set('inCallMenu', false);
	 Session.set('callUI', false);
	 Session.set('location', 'Home');
	 Session.set('callCounter', Session.get('callCounter')-1);
	 activeCalls=[]
	}
	// console.log('call counter', Session.get('callCounter'))
	 
	},


	'click #call' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('standardMenu', false);
	 Session.set('backScreen', true);
	 Session.set('move', false);

	 Session.set('myInfo', false);
	 Session.set('call', true);
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('location', 'Call');
	 
	 
	},
	'click #recents' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('standardMenu', false);
	 Session.set('backScreen', true);

	 Session.set('myInfo', false);
	 Session.set('call', false);
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('recents', true);
	 Session.set('location', 'Recents');
	 
	},

	'click #favorites' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('standardMenu', false);
	 Session.set('backScreen', true);

	 Session.set('myInfo', false);
	 Session.set('call', false);
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('recents', false);
	 Session.set('favorites', true);

	 Session.set('location', 'Favorites');
	 
	},
	'click #meetings' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('standardMenu', false);
	 Session.set('backScreen', true);

	 Session.set('myInfo', false);
	 Session.set('call', false);
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('recents', false);
	 Session.set('favorites', false);
	 Session.set('meetings', true);

	 Session.set('location', 'Meetings');
	 
	},
	'click #keypad' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('standardMenu', false);
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('keypad', true);
	 Session.set('location', 'Keypad');
	
	},
	'click #callPresent' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('callPresent', true);
	 Session.set('standardMenu', false);
	 Session.set('homeScreen', true);
	 Session.set('myInfo', false);
	 Session.set('call', false);
	 Session.set('directory', false);
	 Session.set('backScreen', true);

	 // Session.set('keypad', true);
	 Session.set('callUI', false);
	 Session.set('location', 'Present');
	 
	 Session.set('recents', false);
	 Session.set('incomingCall', false);
	  Session.set('outboundCall', false);
	   Session.set('optionsOverlay', false);
	    Session.set('favorites', false);
	 Router.go('/inCall')
	
	},
	'click #volume' : function () {
	  $('.modal').modal('toggle');
	 
	 
	},
	'click #add' : function () {
	 Session.set('call', true);
	 Session.set('callUI',false);
	 
	 
	},
	'click #mute' : function(){
		if (Session.get('recordingIcon')=='<i class="mute icon pukeGreen">'){
		Session.set('recordingIcon', '')
		}else{
			Session.set('recordingIcon', '<i class="mute icon pukeGreen">')
		}
	},
	'click .moreButton' : function () {
	  Session.set('inCallMenu', false);
	  Session.set('inCallMenu2', true);
	 
	 
	},
	'click .closeIcon' : function () {
	  Session.set('inCallMenu', true);
	  Session.set('inCallMenu2', false);
	 
	 
	},
	'click #sleep' : function () {
	  $('.dimmer').dimmer('toggle');
	 
	 
	},
	'click #easterEgg' : function () {
		Session.set('callCounter', Session.get('callCounter')+1);
		Session.set('outboundCall',false);
		Session.set('incomingCall',true);
		setTimeout(function(){ Router.go('/inCall') }, 3000);
	},
	'click #enableRecordIcon' : function () {
	  	if (Session.get('recordingIcon')=='<i class="record icon pukeGreen"></i>'){
	  		Session.set('recordingIcon', "");
	  		Session.set('recordingMode', false);
	  	}
	  	else{
	  		Session.set('recordingIcon', '<i class="record icon pukeGreen"></i>');
	  		Session.set('recordingMode', true);
	  	}
	},
});


