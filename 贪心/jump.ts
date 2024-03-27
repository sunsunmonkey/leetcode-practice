function jump(nums: number[]): number {
  if (nums.length === 1) return 0;

  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;

  for (let i = 0; i < nums.length; i++) {
    nextIndex = Math.max(nextIndex, nums[i] + i);

    if (curIndex === i) {
      curIndex = nextIndex;
      steps++;

      if (nextIndex >= nums.length - 1) break;
    }
  }

  return steps;
}
