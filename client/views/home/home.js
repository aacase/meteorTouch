Template.home.gestures({
  'swipeleft .item': function (event, template) {
    /* Do something when user swipes left on .item .panel (elements(s) inside the template html) */
    /* `event` is the Hammer.js event object */
    /* `template` is the `Blaze.TemplateInstance` */
    /* `this` is the data context of the element in your template */
       console.log(event.type);
       alert(event.type);
       Router.go("/left");
  },
  'tap .buttonleft': function (event, template) {
    /* Do something when user swipes left on .item .panel (elements(s) inside the template html) */
    /* `event` is the Hammer.js event object */
    /* `template` is the `Blaze.TemplateInstance` */
    /* `this` is the data context of the element in your template */
       // console.log(event.type);
       // alert(event.type);
       Router.go("/left");
  }
});

$.Velocity.RegisterEffect('transition.pushRightIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['-100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushLeftIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['0%', '-100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushRightOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateX: ['100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushDownIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['0%', '100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushUpOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['-100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushUpIn', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['0%', '-100%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

$.Velocity.RegisterEffect('transition.pushDownOut', {
  defaultDuration: 500,
  calls: [
    [
      {
        translateY: ['100%', '0%'],
        translateZ: 0,
        easing: "ease-in-out",
        opacity: [1, 1]
      }
    ]
  ]
});

Transitioner.transition({
  fromRoute: 'main',
  toRoute: 'slideRight',
  velocityAnimation: {
    "in": 'transition.pushRightIn',
    out: 'transition.slideLeftBigOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideRight',
  toRoute: 'main',
  velocityAnimation: {
    "in": 'transition.slideLeftBigIn',
    out: 'transition.slideRightBigOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideRight',
  toRoute: 'slideLeft',
  velocityAnimation: {
    "in": 'transition.slideLeftBigIn',
    out: 'transition.slideRightBigOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideRight',
  toRoute: 'slideRight',
  velocityAnimation: {
    "in": 'transition.slideLeftBigIn',
    out: 'transition.slideRightBigOut'
  }
});

Transitioner.transition({
  fromRoute: 'main',
  toRoute: 'slideLeft',
  velocityAnimation: {
    "in": 'transition.pushLeftIn',
    out: 'transition.pushRightOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideLeft',
  toRoute: 'main',
  velocityAnimation: {
    "in": 'transition.pushRightIn',
    out: 'transition.pushLeftOut'
  }
});

Transitioner.transition({
  fromRoute: 'main',
  toRoute: 'slideUp',
  velocityAnimation: {
    "in": 'transition.perspectiveUpIn',
    out: 'transition.perspectiveDownOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideUp',
  toRoute: 'main',
  velocityAnimation: {
    "in": [
      'transition.perspectiveDownIn', {
        duration: 2000,
        easing: 'ease-out'
      }
    ],
    out: [
      'transition.perspectiveUpOut', {
        duration: 2000,
        easing: 'ease-out'
      }
    ]
  }
});

Transitioner.transition({
  fromRoute: 'main',
  toRoute: 'slideDown',
  velocityAnimation: {
    "in": 'transition.pushDownIn',
    out: 'transition.pushUpOut'
  }
});

Transitioner.transition({
  fromRoute: 'slideDown',
  toRoute: 'main',
  velocityAnimation: {
    "in": 'transition.pushUpIn',
    out: 'transition.pushDownOut'
  }
});

Transitioner["default"]({
  "in": 'transition.fadeIn',
  out: 'transition.fadeOut'
});
