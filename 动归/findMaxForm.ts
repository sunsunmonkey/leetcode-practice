function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map((_) => new Array(n + 1).fill(0));

  for (let i = 0; i < strs.length; i++) {
    let zeroNum = 0;
    let oneNum = 0;
    const chars = strs[i];
    for (let k = 0; k < chars.length; k++) {
      if (chars[k] === "0") zeroNum++;
      else oneNum++;
    }

    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }

  return dp[m][n];
}
