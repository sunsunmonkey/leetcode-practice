function intersection(nums1: number[], nums2: number[]): number[] {
  let resSet = new Set<number>();
  let nums1Set = new Set<number>(nums1);

  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i);
    }
  }

  return Array.from(resSet);
}
