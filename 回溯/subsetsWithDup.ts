function subsetsWithDup(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const helper: number[] = [];
  nums = nums.sort((a, b) => a - b);
  function backTrace(startIndex: number) {
    resArr.push([...helper]);
    for (let i = startIndex; i < nums.length; i++) {
      if (i !== startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      helper.push(nums[i]);
      backTrace(i + 1);
      helper.pop();
    }
  }

  backTrace(0);
  return resArr;
}
