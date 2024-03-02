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

function getMinimumDifference(root: TreeNode | null): number {
  let result = Infinity;
  let prev: TreeNode | null = null;
  if (root === null) return result;

  function travelTree(root: TreeNode) {
    if (root.left) travelTree(root.left);
    if (prev !== null) {
      result = Math.min(result, root.val - prev.val);
    }
    prev = root;
    if (root.right) travelTree(root.right);
  }

  travelTree(root);

  return result;
}
