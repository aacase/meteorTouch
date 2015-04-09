function loadCloudMeetings(meeting) {
  var meetingAlreadyExists = typeof cloudMeetings.findOne({ name : meeting.name }) === 'object';

  if (!meetingAlreadyExists) {
    cloudMeetings.insert(meeting);
  }
}

Meteor.startup(function () {
  var meetings = YAML.eval(Assets.getText('cloudMeetings.yml'));

  for (key in meetings) if (meetings.hasOwnProperty(key)) {
    loadCloudMeetings(meetings[key]);
  }
});