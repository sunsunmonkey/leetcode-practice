function combinationSum3(k: number, n: number): number[][] {
  let resArr: number[][] = [];
  let path: number[] = [];
  function backTracking(k: number, sum: number, statIndex: number) {
    if (sum < 0) {
      return;
    }

    if (path.length === k) {
      if (sum === 0) {
        resArr.push(path.slice());
      }
    }

    for (let i = statIndex; i <= 9; i++) {
      path.push(i);
      backTracking(k, sum - i, i + 1);
      path.pop();
    }
  }
  backTracking(k, n, 1);

  return resArr;
}
