Meteor.publish('cloudUsers', function () {
  return cloudUsers.find();
});
