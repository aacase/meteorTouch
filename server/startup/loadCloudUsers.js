function loadCloudUsers(user) {
  var userAlreadyExists = typeof cloudUsers.findOne({ name : user.name }) === 'object';

  if (!userAlreadyExists) {
    cloudUsers.insert(user);
  }
}

Meteor.startup(function () {
  var users = YAML.eval(Assets.getText('cloudUsers.yml'));

  for (key in users) if (users.hasOwnProperty(key)) {
    loadCloudUsers(users[key]);
  }
});