// 8kyu codewars
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  return numbers.reduce(function(sum, n){     /* reduce ===> return the sum of all the elements in an array */
    return (n*n) + sum;
  }, 0)    /* starting from index 0, run the function(sum, n) */
}
