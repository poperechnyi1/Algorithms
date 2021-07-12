var twoSum = function (nums, target) {
  let sum = 0;
  if (nums.length === 0) {
    return nums;
  }
  let startMarker = 0;
  let secondMarker = 1;
  while (sum != target) {
    sum = nums[startMarker] + nums[secondMarker];
    if (sum != target) {
      if (secondMarker != nums.length - 1) {
        secondMarker++;
      } else {
        startMarker++;
        secondMarker = startMarker + 1;
      }
    }
  }

  return [startMarker, secondMarker];
};

console.log(twoSum([3, 3], 6));
