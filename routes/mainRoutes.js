Router.configure({
	layoutTemplate:"layout"
})

Router.route('/', function () {
  this.render('launch');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

