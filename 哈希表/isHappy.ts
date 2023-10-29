function isHappy(n: number): boolean {
  function getSum(n: number): number {
    let sum = 0;
    while (n) {
      sum += (n % 10) * (n % 10);
      n = parseInt(n / 10 + "");
    }

    return sum;
  }

  const numSet = new Set<number>();

  while (1) {
    n = getSum(n);
    if (n === 1) {
      return true;
    } else if (numSet.has(n)) {
      return false;
    } else {
      numSet.add(n);
    }
  }
  return false;
}


