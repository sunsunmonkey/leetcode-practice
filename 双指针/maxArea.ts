function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left < right) {
    let temp = Math.min(height[left], height[right]) * (right - left);

    if (temp > result) result = temp;

    if (height[left] > height[right]) {
      right--;
    } else {
      left--;
    }
  }

  return result;
}
