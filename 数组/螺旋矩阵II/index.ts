function generateMatrix(n: number): number[][] {
  let loop: number = Math.floor(n / 2);
  const resArr: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  let startX = 0,
    startY = 0;
  const mid = Math.floor(n / 2);
  let count = 1;
  let offset = 1;
  let i: number, j: number;

  while (loop--) {
    i = startX;
    j = startY;
    for (j = startY; j < n - offset; j++) {
      resArr[startX][j] = count++;
    }

    for (i = startX; i < n - offset; i++) {
      resArr[i][j] = count++;
    }

    for (; j > startY; j--) {
      resArr[i][j] = count++;
    }

    for (; i > startX; i--) {
      resArr[i][j] = count++;
    }
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 !== 0) {
    resArr[mid][mid] = count;
  }

  return resArr;
}
