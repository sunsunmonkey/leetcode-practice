function orangesRotting(grid: number[][]): number {
  let freshCount = 0;
  const queue: [number, number, number][] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let res = 0;
  while (queue.length) {
    const [row, col, time] = queue.shift()!;
    res = time;

    for (const [x, y] of direction) {
      const newRow = x + row;
      const newCol = y + col;

      if (
        newCol >= 0 &&
        newCol < grid[0].length &&
        newRow >= 0 &&
        newRow < grid.length &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2;
        queue.push([newRow, newCol, time + 1]);
        freshCount--;
      }
    }
  }

  return freshCount === 0 ? res : -1;
}
