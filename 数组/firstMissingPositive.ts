function firstMissingPositiveII(nums: number[]): number {
  let res = 1;

  nums.sort((a, b) => a - b);

  nums.map((item) => {
    if (item === res) {
      res++;
    }
  });

  return res;
}

function firstMissingPositive(nums: number[]): number {
  let len = nums.length;
  let i = 0;

  while (i < len) {
    let num = nums[i];
    if (num > 0 && nums[num - 1] !== num && num <= len) {
      swap(nums, i, num - 1);
    } else {
      i++;
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return len + 1;
}
const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};
