function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let middle = 0;
  let right = nums.length - 1;
  while (left <= right) {
    middle = left + Math.floor((right-left)/2);
    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target === nums[middle]) {
      return middle;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
