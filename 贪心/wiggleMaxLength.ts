function wiggleMaxLength(nums: number[]): number {
  if (nums.length <= 1) return length;
  let preDiff: number = 0;
  let curDiff: number = 0;
  let count: number = 1;

  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1];

    if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
      count++;
      preDiff = curDiff;
    }
  }
  return count;
}
