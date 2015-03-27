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
	standardMenu:function(){return Session.get('standardMenu')},
	dndEnabled:function(){return(Session.get('dndEnabled'))},
	record:function(){return Session.get('record')},
	move:function(){return Session.get('move')}



});

Template.homeScreen.rendered = function(){
	Session.set('infoPanel', false);
	Session.set('directory', false);
	Session.set('homeScreen', true);
	Session.set('location', 'Home');
	Session.set('standardMenu', true);
	Session.set('dndEnabled', "<div class='sixteen wide column sideNav even ' id='dndButton'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
}

Template['homeScreen'].events({
	'click #launchButton' : function () {
	  Router.go('/launch');
	},

	'click #dndButton' : function () {
	  $('#dndButton').removeClass('.even');
	  
	   Session.set('icon', "<i class='dont icon pukeGreen'></i>");
	   Session.set('dndEnabled', "<div class='sixteen wide column sideNav endCall ' id='dndButton'><div class='center aligned' id='dndText'><h1><i class=' dont icon'></i></h1></div><div class='center aligned' id='dndText2'>DND</div></div>");
	   $('#dndButton').addClass('endCall');
	   if($('#dndButton').hasClass('endCall')){
	   	$("#dndButton").attr("id","dndEnabled");
	   }
	},

	'click #dndEnabled' : function () {
	  $('#dndEnabled').removeClass('endCall');
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
	 Session.set('myInfo', false);
	 Session.set('record', true);
	 // Session.set('callUI', true);
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
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('backScreen', true);
	 Session.set('location', 'Move');
	
	},
	'click #backButton' : function () {
	  // $('#dndButton').removeClass('.even')

	  //adding logic here to determine what the back button does:

	  if (Session.get('directory')){
	  	Session.set('homeScreen', false);
	  	Session.set('myInfo', false);
	  	Session.set('call', true);
	  		 // Session.set('callUI', true);
	  	Session.set('directory', false);
	  	Session.set('location', 'Call');
	  }
	  else{
	 Session.set('homeScreen', true);
	 Session.set('myInfo', false);
	 Session.set('backScreen', false);
	 Session.set('standardMenu', true);
	 Session.set('location', 'Home');
	  }
	 
	},
	'click #myInfo' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('backScreen', true);
	 Session.set('myInfo', true);
	 Session.set('location', 'My Info');
	 
	},
	'click #call' : function () {
	  // $('#dndButton').removeClass('.even')
	 Session.set('homeScreen', false);
	 Session.set('myInfo', false);
	 Session.set('call', true);
	 // Session.set('callUI', true);
	 Session.set('directory', false);
	 Session.set('location', 'Call');
	 
	}
});


