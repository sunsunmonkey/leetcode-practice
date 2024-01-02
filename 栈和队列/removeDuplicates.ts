function removeDuplicates(s: string): string {
  const helperStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const top = helperStack[helperStack.length - 1];
    if (top === s[i]) {
      helperStack.pop();
    } else {
      helperStack.push(s[i]);
    }
  }
  let res: string = "";
  while (helperStack.length > 0) {
    res = helperStack.pop() + res;
  }
  return res;
}
