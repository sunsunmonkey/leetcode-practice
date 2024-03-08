function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  const childLength = g.length - 1;
  const cookieLength = s.length - 1;
  let res = 0;
  for (let i = cookieLength, j = childLength; i >= 0 && j >= 0; j--) {
    if (s[i] >= g[j]) {
      res++;
      i--;
    }
  }

  return res;
}
