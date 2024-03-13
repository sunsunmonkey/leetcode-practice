function minWindow(s: string, t: string): string {
  const differ: Map<string, number> = new Map();

  let res = "";
  let fast = 0;
  let slow = 0;

  const check = () => {
    for (const [_, v] of differ) {
      if (v > 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < t.length; i++) {
    differ.set(t[i], (differ.get(t[i]) || 0) + 1);
  }

  while (fast < s.length) {
    if (differ.has(s[fast])) {
      differ.set(s[fast], differ.get(s[fast])! - 1);
    }

    while (check() && slow <= fast) {
      if (!res || res.length > fast - slow + 1) {
        res = s.slice(slow, fast + 1);
      }

      if (s.length - 1 - slow < t.length) {
        break;
      }

      if (differ.has(s[slow])) {
        differ.set(s[slow], differ.get(s[slow])! + 1);
      }
      slow++;
    }
    fast++;
  }

  return res;
}
