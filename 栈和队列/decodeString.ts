function decodeString(s: string): string {
  let helpStack: string[] = [];
  let i = 0;

  while (i < s.length) {
    if (isNumberString(s[i])) {
      let num = "";

      while (isNumberString(s[i])) {
        num += s[i];
        i++;
      }
      helpStack.push(num);
    } else if (/[a-zA-Z\[]/.test(s[i])) {
      helpStack.push(s[i++]);
    } else if (s[i] === "]") {
      i++;
      const sub: string[] = [];
      while (helpStack[helpStack.length - 1] !== "[") {
        sub.push(helpStack.pop()!);
      }
      sub.reverse();
      helpStack.pop();
      let repTime = parseInt(helpStack.pop()!);
      let t = "";
      let o = sub.join("");
      while (repTime--) {
        t += o;
      }
      helpStack.push(t);
    }
  }
  return helpStack.join("");
}

function isNumberString(s: string) {
  if (/\d/.test(s)) return true;
  return false;
}
