exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);

  },

  speak: function(fn, obj) {
    return fn.call(obj);

  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {

    var funcs = [];
    //create closure
    var storedFunc = function(el) {
      return function(){ return fn(el)}
    };

      for(var i =0; i<arr.length;i++) {
        root = Math.pow(arr[i],2);
        funcs.push(storedFunc(arr[i]));
    }
    return funcs;
  },

  partial: function(fn, str1, str2) {
    var back = function(str3){
      return fn(str1,str2,str3);
    };
    return back;
  },

  useArguments: function() {
    arg=0;
    for(var i=0; i < arguments.length; i++){
      arg += arguments[i]
    }
    return arg;
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  // curryIt: function(fn) {
  //
  // }
};
