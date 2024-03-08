function fib(n: number): number {
  const db: number[] = [0, 1];
  if (n <= 1) return n;

  for (let i = 2; i <= n; i++) {
    let sum = db[0] + db[1];
    db[0] = db[1];
    db[1] = sum;
  }

  return db[1];
}
