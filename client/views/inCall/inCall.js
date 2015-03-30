Template['inCall'].helpers({
});

Template['inCall'].events({

	//you're going to need to use if statments here to determine where the x button routes. 
	'click .exitCall' : function () {
	  Router.go('/homescreen');
	},
});
