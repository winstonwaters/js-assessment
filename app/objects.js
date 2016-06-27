exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);

  },

  //doesnt work
  alterObjects: function(constructor, greeting) {
    return greeting.prototype = greeting;

  },

  iterate: function(obj) {


  }
};
