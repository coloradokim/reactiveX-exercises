// Exercise 1: Print all the names in an array
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"]

var printNames = function (arr) {
  var thing = []
  for (var counter = 1; counter < arr.length; counter++) {
    thing += arr[counter]
  }
  return thing
}

console.log(printNames(names));
