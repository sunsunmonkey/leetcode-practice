function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;

    while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left;
      if (matrix[i][mid] === target) {
        return true;
      } else if (matrix[i][mid] < target) {
        left = mid + 1;
      } else if (matrix[i][mid] > target) {
        right = mid - 1;
      }
    }

    if (matrix[i][matrix[i].length - 1] > target) {
      return false;
    }
  }

  return false;
}

