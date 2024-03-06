function restoreIpAddresses(s: string): string[] {
  const resArr: string[] = [];
  let helper: string[] = [];

  function backTrace(startIndex: number) {
    if (helper.length === 4 && startIndex === s.length) {
      console.log("11", helper);
      resArr.push(helper.join("."));
      return;
    }

    for (let i = startIndex; i < Math.min(s.length, startIndex + 3); i++) {
      const str = s.slice(startIndex, i + 1);
      if (isValid(str)) {
        helper.push(str);
      } else {
        continue;
      }
      backTrace(i + 1);
      helper.pop();
    }
  }

  backTrace(0);
  console.log("res", resArr);
  return resArr;
}

function isValid(s: string): boolean {
  const num = Number(s);
  if (
    (s.startsWith("0") && s.length > 1) ||
    num > 255 ||
    s.length === 0 ||
    s.length > 3
  ) {
    return false;
  }
  return true;
}
