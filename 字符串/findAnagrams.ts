function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return [];
  const ans: number[] = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    ++sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++pCount[p[i].charCodeAt(0) - "a".charCodeAt(0)];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < s.length - p.length; ++i) {
    --sCount[s[i].charCodeAt(0) - "a".charCodeAt(0)];
    ++sCount[s[i + p.length].charCodeAt(0) - "a".charCodeAt(0)];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
}
