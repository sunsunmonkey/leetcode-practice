function findSubsequences(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const helper: number[] = [];

  function backTrace(startIndex: number) {
    if (helper.length >= 2) {
      resArr.push([...helper]);
    }
    const used: Set<number> = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (used.has(nums[i]) || nums[i] < helper[helper.length - 1]) {
        continue;
      }

      helper.push(nums[i]);
      used.add(nums[i]);
      backTrace(i + 1);
      helper.pop();
    }
  }

  backTrace(0);

  return resArr;
}
