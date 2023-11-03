function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  for (; left < (s.length - 1) / 2; left++) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    right--;
  }
}
