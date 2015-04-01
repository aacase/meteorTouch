Router.configure({
	layoutTemplate:"layout"
})

Router.route('/', function () {
  this.render('launch');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('slideRight');

Router.route('slideLeft');

Router.route('slideUp');

Router.route('slideDown');

Router.route('fade');