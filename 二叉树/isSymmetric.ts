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

function isSymmetric(root: TreeNode | null): boolean {
  const right = root?.right || null;
  const left = root?.left || null;
  if (right === null && left === null) return true;
  else if (right === null || left === null) return false;
  else if (right.val !== left.val) return false;
  else return compare(left, right) && compare(right, left);

  function compare(left: TreeNode, right: TreeNode) {
    return left.left?.val === right.right?.val;
  }
}
