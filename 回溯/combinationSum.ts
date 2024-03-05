function combinationSum(candidates: number[], target: number): number[][] {
  const resArr: number[][] = [];
  const path: number[] = [];
  function backTrace(target: number, startIndex: number) {
    if (target < 0) {
      return;
    }

    if (target === 0) {
      resArr.push([...path]);
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      backTrace(target - candidates[i], i);
      path.pop();
    }
  }

  backTrace(target, 0);

  return resArr;
}
