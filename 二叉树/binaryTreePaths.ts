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

function binaryTreePaths(root: TreeNode | null): string[] {
  function recur(node: TreeNode, path: string, resArr: string[]) {
    path = path + String(node.val);
    if (node.left === null && node.right === null) {
      resArr.push(path);
      return;
    }

    if (node.left) recur(node.left, path + "->", resArr);

    if (node.right) recur(node.right, path + "->", resArr);
  }
  const resArr = [];
  if (root === null) return [];
  recur(root, "", resArr);
  return resArr;
}
