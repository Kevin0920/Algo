var nums = [0, 1, 0, 3, 12];

var moveZeroes = function(nums) {
  if (nums == null || nums.length == 0) {
    return;
  }
  var current = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      var temp = nums[current];
      nums[current++] = nums[i];
      nums[i] = temp;
    }
  }
}
