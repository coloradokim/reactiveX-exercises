// Exercise 2: Use forEach to print all the names in an array

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

function printNames (arr) {
  newArr = []
  arr.forEach(function(el) {
    newArr.push(el)
  })
  return newArr
}

console.log(printNames(names));
