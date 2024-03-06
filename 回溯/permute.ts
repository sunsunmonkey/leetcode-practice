function permute(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const helper: number[] = [];
  const helperSet: Set<number> = new Set();

  function backTrace() {
    if (helper.length === nums.length) {
      resArr.push([...helper]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (helperSet.has(nums[i])) {
        continue;
      }

      helper.push(nums[i]);
      helperSet.add(nums[i]);
      backTrace();

      helper.pop();
      helperSet.delete(nums[i]);
    }
  }

  backTrace();

  return resArr;
}
