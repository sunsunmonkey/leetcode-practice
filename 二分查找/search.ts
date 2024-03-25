function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  let l: number = 0;
  let r: number = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((r - l) / 2) + l;

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}
