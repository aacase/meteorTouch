Template.homeScreen.helpers=({
	pacificTime:function(){return moment()}
});

Template['homeScreen'].events({
	'click #launchButton' : function () {
	  Router.go('/launch');
	},

	'click #dndButton' : function () {
	  // $('#dndButton').removeClass('.even')
	  $('#dndText').toggleClass('dndRed');
	   $('#dndText2').toggleClass('dndRed');
	   // $('#dndButton').addClass('endCall');
	   // if($('#dndButton').hasClass('endCall')){
	   // 	$("#dndButton").attr("id","dndEnabled");
	   // }
	},

	// 'click #dndEnabled' : function () {
	//   $('#dndEnabled').removeClass('endCall');
	//   $('#dndEnabled').addClass('even');
	//   $("#dndEnabled").attr("id","dndButton");
	// }

});
