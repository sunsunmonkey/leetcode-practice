function rotate(matrix: number[][]): void {
  const matrix_new = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix_new[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = matrix_new[i][j];
    }
  }

}

//TODO 原地