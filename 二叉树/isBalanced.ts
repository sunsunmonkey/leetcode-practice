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

function isBalanced(root: TreeNode | null): boolean {
  function getDepth(node: TreeNode | null): number {
    if (node === null) return 0;
    let leftDepth = getDepth(node.left);
    if (leftDepth === -1) return -1;
    let rightDepth = getDepth(node.right);
    if (rightDepth === -1) return -1;

    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }

  return !(getDepth(root) === -1);
}
