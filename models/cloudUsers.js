cloudUsers = new Mongo.Collection('cloudUsers');


cloudUsers.attachSchema(
    new SimpleSchema({
   
    name: {
      type: String
    },
    extension: {
      type: String
    },
    available: {
      type: Boolean
    },
    favorite: {
      type: Boolean
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  cloudUsers.initEasySearch('name');
  cloudUsers.allow({
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
  cloudUsers.initEasySearch('name');
  cloudUsers.allow({
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
