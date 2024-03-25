function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let findIndex = 0;
  let res = [-1, -1];
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      findIndex = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  let prev = findIndex;
  while (nums[prev] === target) {
    res[0] = prev;
    prev--;
  }
  prev = findIndex;
  while (nums[prev] === target) {
    res[1] = prev;
    prev++;
  }

  return res;
}


