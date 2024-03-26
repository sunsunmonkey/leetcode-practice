//单调栈
function dailyTemperatures(temperatures: number[]): number[] {
  const helperStack: number[] = [-Infinity];
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      helperStack.length &&
      temperatures[helperStack[helperStack.length - 1]] < temperatures[i]
    ) {
      const index = helperStack.pop()!;
      ans[index] = i - index;
    }
    helperStack.push(i);
  }

  return ans;
}
