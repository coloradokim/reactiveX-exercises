// Exercise 4: Implement map()
//
// To make projections easier, let's add a map() function to the Array type.
// Map accepts the projection function to be applied to each item in the source array, and returns the projected array.

var nameArr = ["Kim", "Patty", "Dan", "Catherine", "Jeremiah"]

function nameUpper(arr) {
	var newArr = arr.map(function(item) {
		return item.toUpperCase();
	})
	return newArr
}
console.log(nameUpper(nameArr));
