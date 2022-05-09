// 8kyu codewars
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i) {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    return [positive, negative];
}

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
