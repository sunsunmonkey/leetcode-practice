function partitionLabels(s: string): number[] {
  const last: number[] = [];
  const ACode = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - ACode] = i;
  }

  let end = 0;
  let start = 0;
  let res: number[] = [];

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - ACode]);
    if (i === end) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }
  return res;
}
