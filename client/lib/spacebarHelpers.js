Template.registerHelper('debug', function (optionalValue) {
  if (typeof console !== "undefined" || typeof console.log !== "undefined") {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }

    return '';
  }

  // For IE8
  alert(this);

  if (optionalValue) {
    alert(optionalValue);
  }

  return '';
});

Template.registerHelper('constant', function (what) {
  return Meteor.App[what.toUpperCase()];
});

Template.registerHelper('and', function (arg1, arg2) {
  if (arg1 && arg2){
    return true}
});

Template.registerHelper('not', function (arg1, arg2) {
  if (!arg1 && arg2){
    return true}
});

Template.registerHelper('neither', function (arg1, arg2) {
  if (!arg1 && !arg2){
    return true}
});


mongoReplacementModifier = function(keep, change) {
  var $unset = {};
  for (var key in change) {
    if (keep[key] === undefined) {
      $unset[key] = "";
    }
  }
  var copy = _.clone(keep);
  delete copy._id;
  return {$set: copy, $unset: $unset}
};