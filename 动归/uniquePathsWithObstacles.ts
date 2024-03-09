function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;

  if (obstacleGrid[row - 1][col - 1] === 1 || obstacleGrid[0][0] === 1)
    return 0;

  const dp: number[][] = new Array(row)
    .fill(0)
    .map((_) => new Array(col).fill(0));

  for (let i = 0; i < row && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < col && obstacleGrid[0][i] == 0; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue;
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[row - 1][col - 1];
}
