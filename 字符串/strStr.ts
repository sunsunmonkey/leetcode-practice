function strStr(haystack: string, needle: string): number {
  if (needle.length == 0) {
    return 0;
  }

  const next = getNext(needle);
  const haystackArr = haystack.split("");
  let j = -1;
  for (let i = 0; i < haystackArr.length; i++) {
    while (j >= 0 && haystackArr[i] !== needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] == needle[j + 1]) {
      j++;
    }
    if (j === needle.length - 1) {
      return i - needle.length + 1;
    }
  }
  return -1;
}

function getNext(needle: string): number[] {
  const next: number[] = [];
  const strArr = needle.split("");
  let j = -1;
  next[0] = j;
  for (let i = 1; i < strArr.length; i++) {
    while (j >= 0 && strArr[i] != strArr[j + 1]) {
      j = next[j];
    }

    if (strArr[i] == strArr[j + 1]) {
      j++;
    }

    next[i] = j;
  }
  return next;
}

