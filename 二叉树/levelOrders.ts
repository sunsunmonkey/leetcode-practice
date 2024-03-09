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
function levelOrder(root: TreeNode | null): number[][] {
  const resArr: number[][] = [];
  let temArr: number[] = [];
  if (!root) return [];
  const helperArr: TreeNode[] = [root];
  while (helperArr.length > 0) {
    const length = helperArr.length;
    for (let i = 0; i < length; i++) {
      const node = helperArr[0];
      temArr.push(node.val);
      if (node.left) helperArr.push(node.left);
      if (node.right) helperArr.push(node.right);
      helperArr.shift();
    }

    resArr.push(temArr);
    temArr = [];
  }

  return resArr;
}
