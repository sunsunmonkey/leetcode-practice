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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;

  let res = 0;
  function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    else {
      let LDepth = maxDepth(root.left);
      let RDepth = maxDepth(root.right);
      const sum = LDepth + RDepth;
      if (sum > res) res = sum;
      return Math.max(LDepth, RDepth) + 1;
    }
  }
  maxDepth(root);
  return res;
}
