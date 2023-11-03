function reverseStr(s: string, k: number): string {
  let arr: string[] = s.split("");
  const length = s.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < length; i += 2 * k) {
    left = i;
    right = i + k - 1 > length - 1 ? length - 1 : i + k - 1;
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr.join("");
}
