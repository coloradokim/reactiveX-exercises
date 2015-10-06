// Exercise 7: Implement filter()
//
// To make filtering easier, let's add a filter() function to the Array type.
// The filter() function accepts a predicate.
// A predicate is a function that accepts an item in the array,
// and returns a boolean indicating whether the item should be retained in the new array.

var names = ["Kimberly", "Catherine", "Patricia", "Daniel", "Jeremiah"]

function longName (arr) {
  var longNames = arr.filter(function(item) {
    return item.length > 7
  })
  return longNames
}

console.log(longName(names));
