function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set();
  let maxLen = 0;
  for (const item of nums) {
    set.add(item);
  }
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let cur = nums[i];
      let len = 1;

      while (set.has(cur + 1)) {
        cur++;
        len++;
      }

      if (len > maxLen) maxLen = len;
    }
  }

  return maxLen;
}
