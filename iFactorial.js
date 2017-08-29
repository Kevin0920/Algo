function iFactorial(num) {
  var multi = 1;
  for (var i = 1; i <= num ; i++) {
    multi *= i;
  }
  return multi;
}
console.log(iFactorial(5));
