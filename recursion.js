function rsum(num) {
  if (num == 1) {
    return 1;
  }
  else {
    return num + rsum(num - 1);
  }
}

console.log(rsum(5));


// rSum(1) = 1                  => 1
// rSum(2) = 1 + 2              => 3
// rSum(3) = 1 + 2 + 3          => 6
// rSum(4) = 1 + 2 + 3 + 4      => 10
// rSum(5) = 1 + 2 + 3 + 4 + 5  => 15
