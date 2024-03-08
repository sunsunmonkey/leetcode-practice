function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
  }

  return dp[dp.length - 1];
}
