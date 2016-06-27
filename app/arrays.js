exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    //study this
    indexOf: function(arr, item) {
        for (var i=0; i<arr.length; i++){
          if(arr[i] === item)
          return i;
        }
        return -1;
    },

    sum: function(arr) {
        //aggrigation problem. no answer is the answer; just need to form a process
        var sum = 0
        for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
            // sum += arr[i];

        }
        return sum;
    },

    remove: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i--, 1);
          }
        }
        return arr;
    },

    //same as above
    removeWithoutCopy: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i--, 1);
          }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      var newArr = arr1.concat(arr2);
      return newArr;
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;

    },

    count: function(arr, item) {
      var count = 0;
      for(var i =0; i < arr.length; i++){
        if(arr[i] == item)
        count++
      }
      return count;
    },

    //study this
    duplicates: function(arr) {
      var exists = [];
      var doubles = [];
      for (var i=0; i <arr.length; i++) {
        if(exists.indexOf(arr[i]) === -1) {
          exists.push(arr[i]);
        } else if (doubles.indexOf(arr[i]) === -1){
          doubles.push(arr[i]);
        }
      }
      return doubles;
    },


    square: function(arr) {
      var newArr = []
      for (var i = 0; i < arr.length; i++) {
        root = Math.pow(arr[i],2);
        newArr.push(root)
      }
      return newArr;
    },

    findAllOccurrences: function(arr, target) {
      var newArr = [];
      for (var i=0; i<arr.length; i++){
        if(arr[i] === target) {
          newArr.push(i);
        }
      }
      return newArr;
    }
};
