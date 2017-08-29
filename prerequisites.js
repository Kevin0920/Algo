// print all numbers from 1 to 255
// for (var i = 1; i < 256; i++) {
//   console.log(i);
// }

// print all odd numbers from 1 to 1000
//
// for (var i = 1; i < 1001; i+=2) {
//   if (i%2!=0) {
//     console.log(i);
//   }
// }

// var sum = 0;
// for (var i = 1; i <= 5000; i+=2) {
//   sum = sum + i;
// }
// console.log(sum);

// var x = [1,3,5,7,9,13];
// for (var i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }

//
// var x = [-3, 3, 15, 7];
// var max = x[0];
// for (var i = 1; i < x.length; i++) {
//   if (x[i] > max) {
//       max = x[i];
//   }
// }
// console.log(max);

// var x = [1, 3, 5, 7, 20];
// var sum = 0;
// for (var i = 0; i < x.length; i++) {
//   sum = sum + x[i];
// }
// var avg = sum / x.length;
// console.log(avg);

// var y = [];
// for (var i = 1; i < 256; i++) {
//   if (i % 2 != 0) {
//     y.push(i);
//   }
// }
// console.log(y);

// var arr = [1, 3, 5, 7, 10, 20, 40];
// var y = 3;
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > y) {
//     count++;
//   }
// }
// console.log("The total numbers are greater than 3 are " + count);

// var arr = [1, 5, 10, -2];
//
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr[i] = 0;
//   }
// }
// console.log(arr);

//
// var arr = [1, 5, 10, -2];
// var max = arr[0];
// var min = arr[0];
// var sum = 0;
// sum = sum + arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   else if (arr[i] < min) {
//     min = arr[i];
//   }
//   sum = sum + arr[i];
// }
//
// var avg = sum / arr.length;
// console.log(max);
// console.log(min);
// console.log(avg);

// var arr = [1, 5, 10, 7, -2];
//
// for (var i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1] = 0;
// console.log(arr);

// var x = [-1, -3, -7, 100, 50];
// for (var i = 0; i < x.length; i++) {
//   if (x[i] < 0) {
//     x[i] = "Dojo Ninja";
//   }
// }
//
// console.log(x);


// var x = [];
// for (var i = 0; i < 10 ; i++) {
//     var randomInt = Math.floor(Math.random() * 101);
//     x.push(randomInt);
// }
// console.log(x);


// var x = [2, 3, 5, 7, 6];
//
// for (var i = 0; i < x.length; i++) {
//   var temp = x[0];
//   x[0] = x[x.length-1];
//   x[x.length-1] = temp;
// }
// console.log(x);


// var x = [-3,5,1,3,2,10];
//
// for (var i = 0; i < 3; i++) {
//   var temp = x[i];
//   x[i] = x[x.length-1-i];
//   x[x.length-1-i] = temp;
// }
//
// console.log(x);


// var arr = [1,3,5,7];
// var x = 10;
// var y = 2;
// arr.push(0);
//
// for (var i = arr.length-1; i > y; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[y] = x;
// console.log(arr);
