// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n){
    return String(n).split('').map(Number).reverse()
}


// String(n) converts a value to a string
// .split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
// .map() Calls Number on each value in the array (casting it to a number) and returns the array of results.
