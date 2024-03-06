function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const resArr: number[][] = [];
  const helper: number[] = [];
  const helperSet: Set<number> = new Set();

  function backTrace() {
    if (helper.length === nums.length) {
      resArr.push([...helper]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i !== 0 && nums[i] === nums[i - 1] && !helperSet.has(i - 1)) {
        continue;
      }

      if (helperSet.has(i)) {
        continue;
      }

      helper.push(nums[i]);
      helperSet.add(i);
      backTrace();

      helper.pop();
      helperSet.delete(i);
    }
  }

  backTrace();

  return resArr;
}
permuteUnique([1, 1, 2]);
