function repeatedSubstringPattern(s: string): boolean {
  let next = getNext(s);
  console.log(next);
  let sLength: number = s.length;
  let nextLength: number = next.length;
  let suffixLength: number = next[nextLength - 1] + 1;
  return suffixLength > 0 && sLength % (sLength - suffixLength) === 0;
}

function getNext(needle: string): number[] {
  const next: number[] = [];
  const strArr = needle.split("");
  let j = -1;
  next[0] = j;
  for (let i = 1; i < strArr.length; i++) {
    //这个退的其实也是一种前后缀应用很精秒只能说
    //回退
    while (j >= 0 && strArr[i] !== strArr[j + 1]) {
      j = next[j];
    }

    if (strArr[i] === strArr[j + 1]) {
      j++;
    }

    next[i] = j;
  }

  return next;
}

