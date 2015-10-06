var names = ["Kimberly", "Catherine", "Patricia", "Daniel", "Jeremiah"]

function filterAndMap (arr) {
  return arr.filter(function(item) {
    return item.length === 8;
  }).map(function(item) {
    return item + item.length + "!"
  })
}


console.log(filterAndMap(names));
