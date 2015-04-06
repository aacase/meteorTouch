Router.configure({
	layoutTemplate:"layout"
})

Router.route('/', function () {
  this.render('launch');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});



Router.map(function() {
    this.route('onecall', { 
        path: '/call/:_id',
        template: 'inCall', // <-- to be explicit
        data: function() {
            return cloudUsers.findOne(this.params._id);
        }
    });
});