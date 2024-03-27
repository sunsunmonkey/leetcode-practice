function maxProfit(prices: number[]): number {
  let res = -Infinity;
  let max = -Infinity;
  for (let i = prices.length - 1; i > -1; i--) {
    const today = prices[i];
    if (max !== -Infinity) {
      res = Math.max(max - today, res);
    }
    max = Math.max(max, today);
  }

  return Math.max(res, 0);
}
