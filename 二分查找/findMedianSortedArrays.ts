function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const n = nums1.length + nums2.length
    return (findK(nums1, nums2, n >> 1) + findK(nums1, nums2, (n - 1) >> 1)) / 2
  
    function findK(nums1: number[], nums2: number[], k: number): number {
      if (nums1.length === 0) return nums2[k]
      if (nums2.length === 0) return nums1[k]
      const i1 = nums1.length >> 1
      const i2 = nums2.length >> 1
      const m1 = nums1[i1]
      const m2 = nums2[i2]
  
      if (i1 + i2 < k) {
        if (m1 > m2) return findK(nums1, nums2.slice(i2 + 1), k - (i2 + 1))
        else return findK(nums1.slice(i1 + 1), nums2, k - (i1 + 1))
      } else {
        if (m1 > m2) return findK(nums1.slice(0, i1), nums2, k)
        else return findK(nums1, nums2.slice(0, i2), k)
      }
    }
  };
  