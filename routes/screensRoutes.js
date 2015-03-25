Router.route('/homescreen', function () {
  this.render('homeScreen');
});

Router.route('/directory', function () {
  this.render('directory');
});

Router.route('/incall', function () {
  this.render('inCall');
});

Router.route('/launch', function () {
  this.render('launch');
});
