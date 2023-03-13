// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//str -> no funny biz
//str -> words are reversed, opposite case

const transformStr = (str) =>
  str
    .split(" ") // split words
    .reverse() // reverse words
    .join(" ") // join words back to string
    .split("") // split characters
    .map((c) => (c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase())) // chang casing
    .join(""); // join characters
