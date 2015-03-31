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
	favoritesList:function(){return Session.get('favoritesList')},
	recentsList:function(){return Session.get('recentsList')}
});

Template['contactList'].events({
	'click .canCall' : function () {
	  Router.go('/inCall');
	},
});


Template.contactList.rendered = function(){
	var favoritesList = [{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false}];
	var recentsList = [{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false},{name:"Aaron", extension:"12345", available:true}, {name:"Farzana", extension:"54321", available:false}]
	Session.set('favoritesList', favoritesList);
	Session.set('recentsList', recentsList);

}