function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= s.length; i++) { //背包
    for (let j = 0; j < i; j++) { //物品
      const tempStr = s.slice(j, i);

      if (wordDict.includes(tempStr) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
