// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name){
    return name.match(/\b(\w)/g).join('.').toUpperCase()
}

// .match() method retrieves the result of matching a string against a regular expression.
// { You construct a regular expression in one of two ways:
// Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows: const re = /ab+c/;
// Or calling the constructor function of the RegExp object, as follows: const re = new RegExp('ab+c'); }
// /\b(\w)/g => The \b metacharacter matches at the beginning or end of a word. In this case, at the beginning because it comes before the (\w) metacharacter
// => The \w metacharacter matches word characters.
// => The "g" modifier specifies a global match. A global match finds all matches (compared to only the first).

// .join('.') The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. (in this case the dot)
