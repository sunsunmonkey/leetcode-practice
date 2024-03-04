class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function traversal(nums: number[], left: number, right: number) {
    if (left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = traversal(nums, left, mid - 1);
    root.right = traversal(nums, mid + 1, right);
    return root;
  }

  const root = traversal(nums, 0, nums.length - 1);

  return root;
}
