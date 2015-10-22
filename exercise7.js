// Exercise 7: Implement filter()
//
// To make filtering easier, let's add a filter() function to the Array type.
// The filter() function accepts a predicate.
// A predicate is a function that accepts an item in the array,
// and returns a boolean indicating whether the item should be retained in the new array.

var names = ["Kimberly", "Catherine", "Patricia", "Daniel", "Jeremiah", "Schlesinger"]

function longName(arr) {
  nameArr = []
  arr.filter(function(item) {
    if (item.length >= 9) {
      nameArr.push(item)
    }
  })
  return nameArr
}


console.log(longName(names));
