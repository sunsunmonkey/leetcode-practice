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

function findMode(root: TreeNode | null): number[] {
  let pre: TreeNode | null = null;
  let maxCount = 0;
  let count = 0;
  let resArr: number[] = [];

  function traverse(root: TreeNode | null): void {
    if (root === null) return;
    traverse(root.left);
    if (pre === null) {
      count = 1;
    } else if (pre.val === root.val) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      resArr = [];
      resArr.push(root.val);
    } else if (count === maxCount) {
      resArr.push(root.val);
    }
    pre = root;
    traverse(root.right);
  }

  traverse(root);
  return resArr;
}
