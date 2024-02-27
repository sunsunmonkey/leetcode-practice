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

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  else if (root.right !== null && root.left === null) {
    return 1 + minDepth(root.right);
  } else if (root.right === null && root.left !== null) {
    return 1 + minDepth(root.left);
  } else return 1 + Math.min(minDepth(root.right), minDepth(root.left));
}

function minDepthIteral(root: TreeNode | null): number {
  let helperArr: (TreeNode | null)[] = [root];
  let curNode: TreeNode | null;
  let depth = 0;
  if (root === null) return depth;
  while (helperArr.length > 0) {
    depth++;
    const length = helperArr.length;
    for (let i = 0; i < length; i++) {
      curNode = helperArr.shift()!;
      if (curNode.right == null && curNode.left === null) return depth;
      if (curNode.right !== null) helperArr.push(curNode.right);
      if (curNode.left !== null) helperArr.push(curNode.left);
    }
  }

  return depth;
}
