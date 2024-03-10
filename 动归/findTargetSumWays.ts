function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((pre, cur) => pre + cur);

  if (Math.abs(target) > sum) return 0;
  if ((sum + target) % 2 === 1) return 0;
  target = (sum + target) / 2;

  const dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[target];
}
