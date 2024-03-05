function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const resArr: number[][] = [];
  const path: number[] = [];

  function backTrace(startIndex: number, target: number) {
    if (target < 0) {
      return;
    }

    if (target === 0) {
      resArr.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i !== startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      backTrace(i + 1, target - candidates[i]);
      path.pop();
    }
  }

  backTrace(0, target);

  return resArr;
}
