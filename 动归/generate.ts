function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }
  const res = [[1], [1, 1]];
  if (numRows === 2) {
    return res;
  }

  for (let i = 2; i < numRows; i++) {
    res[i] = [1];
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
    }
    res[i].push(1);
  }

  return res;
}
