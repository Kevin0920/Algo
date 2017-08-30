function rFibonacci(num) {
    if (num == 1 || num == 2) {
      return 1;
    } else {
      return rFibonacci(num - 1) + rFibonacci(num - 2);
    }
}



console.log(rFibonacci(3) + rFibonacci(4));


// fib(1) => 1    1
// fib(2) => 1    1
// fib(3) => 2    fib(1) + fib(2)
// fib(4) => 3    fib(2) + fib(3)
// fib(5) => 5    fib(3) + fib(4)
