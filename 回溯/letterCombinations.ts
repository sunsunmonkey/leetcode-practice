function letterCombinations(digits: string): string[] {
  const letterMap: string[] = [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];
  if (!digits) return [];
  const resArr: string[] = [];
  const digArr = digits.split("");
  const helperArr: string[] = [];

  function backTrack(index: number) {
    if (helperArr.length === digArr.length) {
      resArr.push(helperArr.join(""));
      return;
    }
    const dig = digArr[index];

    const charArr = letterMap[dig].split("");

    for (let i = 0; i < charArr.length; i++) {
      helperArr.push(charArr[i]);
      backTrack(index + 1);
      helperArr.pop();
    }
  }
  backTrack(0);

  return resArr;
}
