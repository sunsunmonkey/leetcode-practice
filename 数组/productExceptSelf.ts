function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];
  const length = nums.length;

  const leftArr: number[] = new Array(length);

  const rightArr: number[] = new Array(length);

  leftArr[0] = 1;
  for (let i = 1; i < length; i++) {
    leftArr[i] = nums[i - 1] * leftArr[i - 1];
  }

  rightArr[rightArr.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = nums[i + 1] * rightArr[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = leftArr[i] * rightArr[i];
  }

  return res;
}
