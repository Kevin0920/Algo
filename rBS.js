function binarySearch(arr, key) {
  var startIndex = 0;
  var stopIndex = arr.length - 1;
  var index = (startIndex + stopIndex) >> 1;

  while(arr[index] != key && startIndex < stopIndex){
    if (key < arr[index]) {
      stopIndex = index - 1;
    } else if (key > arr[index]) {
      startIndex = index + 1;
    }

    index = (startIndex + stopIndex) >> 1;
  }

  if (arr[index] == key) {
    return index;
  } else {
    console.log(key + ' not found!');
    return -1;
  }
}

var arr = [-90,-19,0,2,12,29,33,190,320];

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 12));
console.log(binarySearch(arr, 0));
console.log(binarySearch(arr, 190));









// binarySearch(key, array[], min, max)
// if (max < min) {
//   return -1;
// }
// else {
//   midpoint = findMidPoint(min, max);
// }
// if (array[midpoint] < key) {
//   binarySearch(key, array, midpoint + 1, max)
// }
// else if (array[midpoint] > key) {
//   binarySearch(key, array, midpoint - 1, min)
// }
// else {
//   return midpoint;
// }
