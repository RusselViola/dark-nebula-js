exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var hasNumber = /\d/;
    return hasNumber.test(str);
  },

  containsRepeatingLetter : function(str) {
    var letterArr = /([a-zA-Z])\1/;
    return letterArr.test(str);
  },

  endsWithVowel : function(str) {
    var hasVowel = /[aeiou]$/i;
    return hasVowel.test(str);
  },

  captureThreeNumbers : function(str) {
    var numArr = /\d{3}/.exec(str);
      if (numArr === null) {
        return false;
      }
    return numArr[0];
  },

  matchesPattern : function(str) {
    var numMatch = /^\d{3}(\-\d{3})(\-\d{4})$/;
    return numMatch.test(str);
  },

  isUSD : function(str) {
    var isMoney = /^\$(\d{1,3}(\,\d{3})*|)(\.\d{2})?$/;
    return isMoney.test(str);
  }
};
