Meteor.startup(function () {
	Session.set('infoPanel', false);
	$('body').hammer({});
});