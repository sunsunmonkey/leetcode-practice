function minSubArrayLen(target: number, nums: number[]): number {
  let result = nums.length + 1;
  let i = 0;
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= target) {
      const subLength = j - i + 1;
      result = result < subLength ? result : subLength;
      sum -= nums[i++];
    }
  }

  return result === nums.length + 1 ? 0 : result;
}
