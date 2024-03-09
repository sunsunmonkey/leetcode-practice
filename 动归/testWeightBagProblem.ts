function testWeightBagProblem(
  weight: number[],
  value: number[],
  size: number
): number {
  const goodLength = weight.length;
  const dp: number[][] = new Array(goodLength)
    .fill(0)
    .map((_) => new Array(size + 1).fill(0));

  for (let i = 0; i <= size; i++) {
    if (i >= weight[0]) {
      dp[0][i] = value[0];
    }
  }

  for (let i = 1; i < goodLength; i++) {
    for (let j = 1; j <= size; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[goodLength - 1][size];
}

function testWeightBagProblemII(
    weight: number[],
    value: number[],
    size: number
  ): number{
    const goodsNum: number = weight.length;
    const dp: number[] = new Array(size + 1).fill(0);
    for (let i = 0; i < goodsNum; i++) {
      for (let j = size; j >= weight[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
      }
    }
    return dp[size];
  }