function moveZeroes(nums: number[]): void {
  let flag = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[flag] === 0) {
      nums.splice(flag, 1);
      nums.push(0);
    } else {
      flag++;
    }
  }
}
