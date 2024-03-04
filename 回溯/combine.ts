function combine(n: number, k: number): number[][] {
  let resArr: number[][] = [];
  function backTracking(
    n: number,
    k: number,
    statIndex: number,
    path: number[]
  ) {
    if (path.length === k) {
      resArr.push(path.slice());
      return;
    }

    for (let i = statIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backTracking(n, k, i + 1, path);
      path.pop();
    }
  }

  backTracking(n, k, 1, []);

  return resArr;
}
