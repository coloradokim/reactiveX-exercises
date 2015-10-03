// Exercise 1: Print all the names in an array
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"]

var printNames = function (arr) {
  for (var counter = 1; counter < arr.length; counter++) {
    console.log(arr[counter])
  }
}

printNames(names);
