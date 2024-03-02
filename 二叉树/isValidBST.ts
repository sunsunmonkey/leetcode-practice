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

function isValidBST(root: TreeNode | null): boolean {
  const traversalArr: number[] = [];
  function inOrderTraverse(root: TreeNode | null) {
    if (root === null) return;
    inOrderTraverse(root.left);
    traversalArr.push(root.val);
    inOrderTraverse(root.right);
  }

  inOrderTraverse(root);

  for (let i = 1; i < traversalArr.length; i++) {
    if (traversalArr[i] <= traversalArr[i - 1]) {
      return false;
    }
  }
  return true;
}
