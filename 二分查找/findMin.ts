function findMin(nums: number[]): number {
  let res = Infinity;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((r - l) / 2) + l;

    if (nums[0] < nums[mid]) {
      if (res > nums[0]) {
        res = nums[0];
      }
      l = mid + 1;
    } else {
      if (res > nums[mid]) {
        res = nums[mid];
      }
      r = mid - 1;
    }
  }

  return res;
}
