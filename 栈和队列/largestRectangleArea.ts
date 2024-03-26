function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const left: number[] = new Array(n).fill(0);
  const right: number[] = new Array(n).fill(0);

  let monoStack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (
      monoStack.length &&
      heights[monoStack[monoStack.length - 1]] >= heights[i]
    ) {
      monoStack.pop();
    }
    left[i] = monoStack.length !== 0 ? monoStack[monoStack.length - 1] : -1;
    monoStack.push(i);
  }

  monoStack = [];
  for (let i = n - 1; i > -1; i--) {
    while (
      monoStack.length &&
      heights[monoStack[monoStack.length - 1]] >= heights[i]
    ) {
      monoStack.pop();
    }
    right[i] = monoStack.length !== 0 ? monoStack[monoStack.length - 1] : n;
    monoStack.push(i);
  }

  let ans = -Infinity;

  for (let i = 0; i < n; i++) {
    const area = (right[i] - left[i] - 1) * heights[i];
    ans = Math.max(ans, area);
  }

  return ans;
}
