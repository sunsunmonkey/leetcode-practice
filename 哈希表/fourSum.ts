function fourSum(nums: number[], target: number): number[][] {
  let first: number = 0,
    second: number,
    third: number,
    fourth: number;
  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (; first < nums.length; first++) {
    if (nums[first] > target && (nums[first] >= 0 || target >= 0)) {
      return res;
    }
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    for (second = first + 1; second < nums.length; second++) {
      if (second - first > 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      third = second + 1;
      fourth = nums.length - 1;
      while (fourth > third) {
        const total = nums[first] + nums[second] + nums[third] + nums[fourth];
        if (total > target) {
          fourth--;
        } else if (total < target) {
          third++;
        } else {
          res.push([nums[first], nums[second], nums[third], nums[fourth]]);
          while (fourth > third && nums[third] === nums[third + 1]) third++;
          while (fourth > third && nums[fourth] === nums[fourth - 1]) fourth--;
          third++;
          fourth--;
        }
      }
    }
  }
  return res;
}
