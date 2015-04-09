cloudMeetings = new Mongo.Collection('cloudMeetings');

cloudMeetings.attachSchema(
     new SimpleSchema({
    name: {
      type: String
    },
    extension: {
      type: String
    },
    available: {
      type: Boolean
    }
  })
);


// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  cloudMeetings.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}

if (Meteor.isClient) {
  cloudMeetings.initEasySearch('name');
  cloudMeetings.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}