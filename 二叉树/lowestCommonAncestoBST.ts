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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return root;
  const val1 = p?.val || 0;
  const val2 = q?.val || 0;

  if (root.val < val1 && root.val < val2) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (root.val > val1 && root.val > val2) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}
