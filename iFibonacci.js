function iFibonacci(num) {
  var fibs = [0, 1];
  for (var i = 0; i < num; i++) {
    fibs.push(fibs[0] + fibs[1]);
    fibs.shift();
  }
  return fibs[0];
}

console.log(iFibonacci(10));


// 
// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8
