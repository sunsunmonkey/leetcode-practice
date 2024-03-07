function solveSudoku(board: string[][]): void {
  function backTrace(board: string[][]) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] !== ".") continue;
        for (let i = 1; i <= 9; i++) {
          if (isValid(i, board, row, col)) {
            board[row][col] = String(i);
            if (backTrace(board)) return true;
            board[row][col] = ".";
          }
        }

        return false;
      }
    }

    return true;
  }
  backTrace(board);
}

function isValid(
  num: number,
  board: string[][],
  row: number,
  col: number
): boolean {
  const rowLength = board.length;
  const colLength = board[0].length;
  const str = String(num);

  for (let i = 0; i < rowLength; i++) {
    if (str === board[row][i]) return false;
  }

  for (let i = 0; i < colLength; i++) {
    if (str === board[i][col]) return false;
  }

  const rowStartIndex = Math.floor(row / 3) * 3;
  const colStartIndex = Math.floor(col / 3) * 3;

  for (let i = rowStartIndex; i < rowStartIndex + 3; i++) {
    for (let j = colStartIndex; j < colStartIndex + 3; j++) {
      if (str === board[i][j]) return false;
    }
  }

  return true;
}
