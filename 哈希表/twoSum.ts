function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(target - nums[index])) {
      return [Number(map.get(target - nums[index])), index];
    } else {
      map.set(nums[index], index);
    }
  }

  return [];
}


