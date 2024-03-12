function trap(height: number[]): number {
  let sum = 0;
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  leftArr[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    leftArr[i] = Math.max(height[i], leftArr[i - 1]);
  }

  rightArr[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    rightArr[i] = Math.max(height[i], rightArr[i + 1]);
  }
  console.log(leftArr);
  console.log(rightArr);

  for (let i = 0; i < height.length; i++) {
    const count = Math.min(leftArr[i], rightArr[i]) - height[i];

    if (count > 0) sum += count;
  }

  return sum;
}
