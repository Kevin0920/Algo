function linearSearch(num, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return "The number was found in array at the index: " + i;
    }
  }
  return -1;
}



console.log(linearSearch(1, [1,4,6,12,18,22,27,33,35,38,40,44,49,50,52]));

console.log(linearSearch(100, [1,4,6,12,18,22,27,33,35,38,40,44,49,50,52]));
