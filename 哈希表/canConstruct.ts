function canConstruct(ransomNote: string, magazine: string): boolean {
  let helperArr: number[] = new Array(26).fill(0);
  let pivot: number = "a".charCodeAt(0);

  for (let i of ransomNote) {
    helperArr[i.charCodeAt(0) - pivot]++;
  }

  for (let i of magazine) {
    helperArr[i.charCodeAt(0) - pivot]--;
  }

  return helperArr.every((i) => i <= 0);
}
