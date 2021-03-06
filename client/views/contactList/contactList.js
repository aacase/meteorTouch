Template['contactList'].helpers({
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
	move:function(){return Session.get('move')},
	recents:function(){return Session.get('recents')},
	favorites:function(){return Session.get('favorites')},
	recentsList:function(){return Session.get('recentsList')},
	meetingsList:function(){return Session.get('meetingsList')},
	meetings:function(){return Session.get('meetings')},
});

Template['contactList'].events({
	'click .canCall' : function () {
	  activeCalls.push(this.name);
	  Session.set('outboundCall', true)
	  Session.set('favorites', false)
	  Session.set('favorite', false)
	  Session.set('recentOverlay', false)
	  Session.set('callEndOverlay', false)
	  console.log(Session.get('activeCalls'))
	  Router.go('/inCall');
	},
	'click .canMeeting' : function () {
	  activeCalls.push(this.name);
	  Session.set('outboundCall', true)
	  Session.set('favorites', false)
	  Session.set('favorite', false)
	  Session.set('recentOverlay', false)
	  Session.set('callEndOverlay', false)
	  console.log(Session.get('activeCalls'))
	  Router.go('/inCall');
	},
	'click .whatsInAName' : function () {
	  Session.set('optionsOverlay', true)
	  Session.set('favorites', false)
	  Session.set('outboundCall', false)
	  Router.go('/inCall');

	  
	},
	'click .recentName' : function () {
	  Session.set('recentOverlay', true)
	  Session.set('outboundCall', false)
	  Session.set('favorites', false)
	  Router.go('/inCall');
	  

	  
	},
	'click .recentName2' : function () {
	  Session.set('recentOverlay', true)
	 
	  

	  
	},
	'click .directoryName' : function () {
	  // Session.set('optionsOverlay', true)
	  Session.set('directoryOverlay', true);

	  Session.set('outboundCall', false)
	  Router.go('/inCall');

	  
	},
	'click .favName' : function () {
	  Session.set('recentOverlay', false)
	  Session.set('favorites', true)

	  // Router.go('/inCall');

	  
	},
	'click .favAdd' : function () {
	  // Session.set('favorites', true)
	  // Router.go('/inCall');
	  if($('#'+this.extension+'').hasClass('blackStar')){
	  	$('#'+this.extension+'').removeClass('blackStar');
	  	$('#'+this.extension+'').addClass('notAvailable');

	  }
	  else{
	  	$('#'+this.extension+'').addClass('blackStar');
	  	$('#'+this.extension+'').removeClass('notAvailable');
	  }
	  if (this.favorite==true){
	
	 cloudUsers.update({_id:this._id},{$set:{name:this.name, extension:this.extension,available:this.available,favorite:false}});
	 // $('#'+this.extension+'').removeClass('blackStar');
	 // $('#'+this.extension+'').addClass('notAvailable');
	}
	else if (this.favorite==false){

		cloudUsers.update({_id:this._id},{$set:{name:this.name, extension:this.extension,available:this.available,favorite:true}});
		// $('#'+this.extension+'').removeClass('notAvailable');
		// $('#'+this.extension+'').addClass('blackStar');

	}
	



	  
	},
});


Template.contactList.rendered = function(){
	var favoritesList =  [{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false}];
	// var recentsList = [{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false}];
	var recentsList=[]
	var items = cloudUsers.find();
	items.forEach(function(item){
		recentsList.push(item);
	});

	Session.set('favoritesList', favoritesList);
	Session.set('recentsList', recentsList);

	var meetingsList=[];
	var meetings = cloudMeetings.find();
	meetings.forEach(function(meeting){
		meetingsList.push(meeting)
	});
	Session.set('meetingsList', meetingsList);
}