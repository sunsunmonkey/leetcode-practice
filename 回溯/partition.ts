function partition(s: string): string[][] {
  const resArr: string[][] = [];
  const helper: string[] = [];

  function backTrace(startIndex: number) {
    if (startIndex === s.length) {
      resArr.push([...helper]);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      const str = s.slice(startIndex, i + 1);
      if (isPalindrome(str)) {
        helper.push(str);
      } else {
        continue;
      }
      backTrace(i + 1);
      helper.pop();
    }
  }

  backTrace(0);
  return resArr;
}

function isPalindrome(s: string): boolean {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
}
console.log(isPalindrome("ab"));
