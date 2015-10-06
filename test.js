var nums = [1,2,3,4]

function random (arr) {
  var newArr = arr.map(function(item) {
    return item * Math.random()
  })
  return newArr
}
console.log(nums);
console.log(random(nums));
