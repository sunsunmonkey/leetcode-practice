function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j * j <= i; j++) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
    }
  }
  return dp[n];
}
