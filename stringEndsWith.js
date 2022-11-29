function solution(str, ending){
    // example: solution('abc', 'bc') // returns true
    // str.length-ending.length -> 1 -> first argument of .substring()
    var firstArg = str.length - ending.length;

    // ending.length -> 2
    var secArg = ending.length;

    // str.substring(1,2) === ending
    return str.substr(firstArg, secArg) === ending;
  }