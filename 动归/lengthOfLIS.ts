function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1);
  let resMax: number = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    resMax = Math.max(resMax, dp[i]);
  }

  return resMax;
}
