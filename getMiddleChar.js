// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("A") should return "A"
// #Input
//
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// DEPRECATED -- The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

function getMiddle(s) {
  var position;
  var length;
  if(s.length % 2 == 1) {
      position = s.length / 2;
      length = 1;
  } else {
      position = s.length / 2 - 1;
      length = 2;
  }
  return s.substring(position, position + length)
}

// The substring() method returns the part of the string between the start and end indexes (not included), or to the end of the string.
