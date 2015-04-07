Meteor.publish('cloudMeetings', function () {
  return cloudMeetings.find();
});
