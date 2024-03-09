function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 == 1) return false;
  const target = sum / 2;
  const dp: number[] = new Array(target + 1).fill(0);

  for (let i = 1; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i - 1]] + nums[i]);
    }
  }

  return dp[target] === target;
}
