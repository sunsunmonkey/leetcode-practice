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

function flatten(root: TreeNode | null): void {
  const resArr: number[] = [];
  if (root === null) return;
  let cur: TreeNode = root!;
  function preOrderTravel(root: TreeNode | null) {
    if (root === null) return;
    resArr.push(root.val);
    preOrderTravel(root.left);
    preOrderTravel(root.right);
  }

  preOrderTravel(root);
  cur.left = null;
  for (let i = 1; i < resArr.length; i++) {
    cur.right = new TreeNode(resArr[i]);
    cur = cur.right;
  }
}
