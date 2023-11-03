function reverseWords(s: string): string {
  let strArr: string[] = s.split("");
  strArr = removeExtraSpace(strArr);
  reverseWord(strArr, 0, strArr.length - 1);

  let start = 0;
  let end = 0;
  while (start < strArr.length) {
    end = start;
    while (strArr[end] !== " " && end < strArr.length) {
      end++;
    }
    reverseWord(strArr, start, end - 1);
    start = end + 1;
  }
  return strArr.join("");
}

function removeExtraSpace(s: string[]): string[] {
  let slow = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (slow !== 0) {
        s[slow++] = " ";
      }
      while (i < s.length && s[i] !== " ") {
        s[slow++] = s[i++];
      }
    }
  }
  return s.slice(0, slow);
}

function reverseWord(s: string[], start: number, end: number) {
  while (start < end) {
    let temp = "";
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

}


