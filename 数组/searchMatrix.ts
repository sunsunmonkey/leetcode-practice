function searchMatrix(matrix: number[][], target: number): boolean {
  let findIndex = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < findIndex; j++) {
      if (matrix[i][j] === target) {
        return true;
      }

      if (matrix[i][j] > target) {
        findIndex = j;
        break;
      }
    }
  }

  return false;
}
