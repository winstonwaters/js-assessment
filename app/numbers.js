exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // valueAtBit: function(num, bit) {
  //
  //
  // },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },
  //thanks stackoverflow  http://stackoverflow.com/questions/9993266/javascript-multiply-not-precise
  multiply: function(a, b) {
    var precise = (a*10)*(b*10)/100;
    return precise;
    console.log(precise);
  }
};
