function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    let rear = nums.pop();
    nums.unshift(rear!);
  }

}
