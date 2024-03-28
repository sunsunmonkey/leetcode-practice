function maxProduct(nums: number[]): number {
    const dp: [number, number][] = new Array(nums.length)
      .fill(0)
      .map((_, i) => [nums[i], nums[i]]);
  
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
      dp[i][0] = Math.max(
        dp[i - 1][0] * nums[i],
        dp[i - 1][1] * nums[i],
        nums[i]
      );
      dp[i][1] = Math.min(
        dp[i - 1][0] * nums[i],
        dp[i - 1][1] * nums[i],
        nums[i]
      );
  
      res = Math.max(res, dp[i][0]);
    }
  
    return res;
  }
  