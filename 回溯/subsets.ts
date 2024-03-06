function subsets(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const helper: number[] = [];

  function backTrace(startIndex: number) {
    resArr.push([...helper]);
    for (let i = startIndex; i < nums.length; i++) {
      helper.push(nums[i]);
      backTrace(i + 1);
      helper.pop();
    }
  }

  backTrace(0);
  return resArr;
}
