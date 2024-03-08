function climbStairs(n: number): number {
  const db: number[] = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2];
  }

  return db[n];
}
