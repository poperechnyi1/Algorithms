var twoSum = function (nums, target) {
  let sum = 0;
  if (nums.length === 0) {
    return nums;
  }
  let startMarker = 0;
  let secondMarker = 1;
  while (nums[startMarker] + nums[secondMarker] != target) {
    sum = nums[startMarker] + nums[secondMarker];
    console.log(10, sum);
    if (sum != target) {
      if (secondMarker === nums.length - 1) {
        startMarker++;
        secondMarker = startMarker + 1;
      } else {
        secondMarker++;
      }
    }
  }

  //   console.log(startMarker, secondMarker);

  return [startMarker, secondMarker];
};

console.log(twoSum([0, 4, 3, 0], 0));
