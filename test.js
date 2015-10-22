// Create a function that calculates the sum of the two lowest numbers given an array of positive integers.


function sumTwoSmallestNumbers(arr) {
  arr.forEach(function(item) {
    return Math.min(item)
  })
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
