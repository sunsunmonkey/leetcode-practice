//哈希 前缀
function subarraySumFuck(nums: number[], k: number): number {
  const mp: Map<number, number> = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)!;
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre)! + 1);
    } else {
      mp.set(pre, 1);
    }
  }

  return count;
}

//暴力
function subarraySum(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let pre = 0;
    for (let j = i; j >= 0; j--) {
      pre += nums[j];
      if (pre === k) {
        count++;
      }
    }
  }

  return count;
}
