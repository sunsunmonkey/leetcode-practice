function canJump(nums: number[]): boolean {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= max) {
      max = Math.max(i + nums[i], max);
      if (max >= nums.length - 1) {
        return true;
      }
    }
  }

  return false;
}
