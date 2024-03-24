function exist(board: string[][], word: string): boolean {
  const h = board.length;
  const w = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = new Array(h).fill(0).map((_) => new Array(w));

  function backTrace(i: number, j: number, k: number): boolean {
    if (board[i][j] !== word.charAt(k)) {
      return false;
    } else if (k === word.length - 1) {
      return true;
    }

    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      const newX = i + dx;
      const newY = j + dy;

      if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
        if (!visited[newX][newY]) {
          const flag = backTrace(newX, newY, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (backTrace(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
