function lengthOfLongestSubstring(s: string): number {
  let res: number = 0;
  const keySet: Set<string> = new Set();

  let right = -1;

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      keySet.delete(s[i-1]);
    }

    while (right + 1 < s.length && !keySet.has(s[i])) {
      keySet.add(s[++right]);
    }

    res = Math.max(res, right - i + 1);
  }

  return res;
}
