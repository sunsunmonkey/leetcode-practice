function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      return res;
    }
    if (index > 0 && nums[index] == nums[index - 1]) {
      continue;
    }
    let left = index + 1;
    let right = nums.length - 1;
    while (right > left) {
      if (nums[index] + nums[right] + nums[left] > 0) {
        right--;
      } else if (nums[index] + nums[right] + nums[left] < 0) {
        left++ ;
      } else {
        res.push([nums[index], nums[right], nums[left]]);
        // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重,同时使right和left相切
        while (right > left && nums[right] == nums[right - 1]) right--;
        while (right > left && nums[left] == nums[left + 1]) left++;

        right--;
        left++;
      }
    }
  }

  return res;
}
