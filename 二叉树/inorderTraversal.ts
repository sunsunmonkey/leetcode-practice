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

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  function travelTree(root: TreeNode | null) {
    if (root === null) return;
    travelTree(root.left);
    res.push(root.val);
    travelTree(root.right);
  }
  travelTree(root);
  return res;
}
