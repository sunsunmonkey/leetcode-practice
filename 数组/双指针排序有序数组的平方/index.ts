function sortedSquares(nums: number[]): number[] {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  const newArray = new Array(nums.length - 1);
  let k = nums.length - 1;
  while (startIndex <= endIndex) {
    if (nums[startIndex] ** 2 > nums[endIndex] ** 2) {
      newArray[k--] = nums[startIndex++] ** 2;
    } else {
      newArray[k--] = nums[endIndex--] ** 2;
    }
  }
  return newArray;
}

console.log(sortedSquares([-2, -1, 5, 6]));
