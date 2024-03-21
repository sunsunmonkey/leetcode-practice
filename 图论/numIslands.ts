function numIslands(grid: string[][]): number {
  let dir: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let res = 0;
  let visited = new Array(grid.length)
    .fill(0)
    .map((_) => new Array(grid[0].length));

  function dfs(grid: string[][], visited: boolean[][], x, y) {
    for (let i = 0; i < dir.length; i++) {
      let nextX = x + dir[i][0];
      let nextY = y + dir[i][1];
      if (
        nextX < 0 ||
        nextX > grid.length - 1 ||
        nextY < 0 ||
        nextY > grid[0].length - 1
      ) {
        continue;
      }

      if (!visited[nextX][nextY] && grid[nextX][nextY] === "1") {
        visited[nextX][nextY] = true;

        dfs(grid, visited, nextX, nextY);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        res++;
        visited[i][j] = true;
        dfs(grid, visited, i, j);
      }
    }
  }

  return res;
}
