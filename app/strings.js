exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newString = '';
    var letterCount = {};
    for (var i = 0; i < str.length; i++){
      if (!letterCount.hasOwnProperty(str[i])) {
        letterCount[str[i]] = 1;
        newString += str[i];
      }
      else if(letterCount[str[i]] < amount) {
        letterCount[str[i]]++;
        newString += str[i];
        if (str[i] !== str[i + 1]) {
          delete letterCount[str[i]];
        }
      }
    }
    return newString;
  },
  wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var count = 0;
  for (var i = 0; i < arr.length; i++){
    count += arr[i].length;
    if (count >= cols) {
      arr[i] = arr[i] + '\n';
      count = 0;
    } else if (i === arr.length - 1) {
      arr[i] = arr[i];
      count = 0;
    } else if (arr[i].length + arr[i + 1].length >= cols) {
      arr[i] = arr[i] + '\n';
      count = 0;
    } else {
      arr[i] = arr[i] + ' ';
      count++;
    }
  }
  return arr.join('');
},
  reverseString: function(str) {
    var arr = str.split('');
    arr = arr.reverse();
    arr = arr.join('');
    return arr;
  }
};
