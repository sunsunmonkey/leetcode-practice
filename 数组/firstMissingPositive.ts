function firstMissingPositive(nums: number[]): number {
  let res = 1;

  nums.sort((a, b) => a - b);

  nums.map((item) => {
    if (item === res) {
      res++;
    }
  });

  return res;
}
