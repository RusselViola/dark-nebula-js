exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = 'What\'s up';
  },

  iterate : function(obj) {
    var newArr = [];
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        newArr.push(property + ': ' + obj[property]);
      }
    }
    return newArr;
  }
};
