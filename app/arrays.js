exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(var i in arr){
      while( arr[i] === item) arr.splice(i,1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item) sum ++;
    }
    return sum;
  },

  duplicates : function(arr) {
    var duplicates = [];
      for (var i = 0; i < arr.length; i++) {
        if (i !== arr.lastIndexOf(arr[i])) {
          if(duplicates.indexOf(arr[i]) === -1)
          duplicates.push(arr[i]);
        }
      }
    return duplicates;
  },

  square : function(arr) {
    var squares = [];
    for (var i = 0; i < arr.length; i++) {
      squares[i] = arr[i] * arr[i];
    }
    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var occurances = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === target){
        occurances.unshift(i);
      }
    }
    return occurances;
  }
};
