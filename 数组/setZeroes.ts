function setZeroes(matrix: number[][]): void {
  const zeroIndex: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === 0) {
        zeroIndex.push([i, j]);
      }
    }
  }

  for (let [i, j] of zeroIndex) {
    for (let col = 0; col < matrix[i].length; col++) {
      matrix[i][col] = 0;
    }

    for (let row = 0; row < matrix.length; row++) {
      matrix[row][j] = 0;
    }
  }
}

function setZeroesII(matrix: number[][]): void {
  const row = matrix.length;
  const col = matrix[0].length;

  let flagCol0 = false;
  let flagRow0 = false;

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      flagCol0 = true;
    }
  }

  for (let i = 0; i < col; i++) {
    if (matrix[0][i] === 0) {
      flagRow0 = true;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (flagCol0) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }
}
