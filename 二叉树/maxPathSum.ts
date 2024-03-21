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

function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;
  function maxGain(node: TreeNode | null): number {
    if (node === null) return 0;
    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);

    res = Math.max(res, node.val + leftGain + rightGain);

    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return res;
}
