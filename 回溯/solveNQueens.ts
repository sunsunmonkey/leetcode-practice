function solveNQueens(n: number): string[][] {
  const board: string[][] = new Array(n)
    .fill(0)
    .map((_) => new Array(n).fill("."));

  const resArr: string[][] = [];

  function backTrace(row: number) {
    if (row === n) {
      resArr.push(transformBoard(board));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(i, row, board)) {
        board[row][i] = "Q";
        backTrace(row + 1);
        board[row][i] = ".";
      }
    }
  }

  backTrace(0);

  return resArr;
}

function isValid(col: number, row: number, board: string[][]): boolean {
  const n: number = board.length;

  for (let row of board) {
    if (row[col] === "Q") return false;
  }

  let x: number = row,
    y: number = col;

  while (x >= 0 && y < n) {
    if (board[x--][y++] === "Q") return false;
  }

  x = row;
  y = col;

  while (y >= 0 && x >= 0) {
    if (board[x--][y--] === "Q") return false;
  }
  return true;
}

function transformBoard(board: string[][]): string[] {
  const resArr: string[] = [];
  for (let row of board) {
    resArr.push(row.join(""));
  }
  return resArr;
}
