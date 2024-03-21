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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;
  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
  function rootSum(root: TreeNode | null, targetSum: number): number {
    if (root === null) return 0;
    let ret = 0;
    if (root.val === targetSum) {
      ret++;
    }

    ret += rootSum(root.left, targetSum - root.val);
    ret += rootSum(root.right, targetSum - root.val);

    return ret;
  }
}
