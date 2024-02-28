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

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
}

function countNodesIterator(root: TreeNode | null): number {
  let curNode: TreeNode | null;
  const helperArr = [root];
  if (root === null) return 0;
  let count = 1;
  while (helperArr.length > 0) {
    const length = helperArr.length;
    for (let i = 0; i < length; i++) {
      curNode = helperArr.shift()!;
      if (curNode?.left) {
        helperArr.push(curNode.left);
        count++;
      }
      if (curNode?.right) {
        helperArr.push(curNode.right);
        count++;
      }
    }
  }

  return count;
}

function countNodesMan(root: TreeNode | null): number {
  if (root === null) return 0;
  let curNode: TreeNode | null = root;
  let leftDepth = 0;
  let rightDepth = 0;

  while (curNode) {
    curNode = curNode.left;
    leftDepth++;
  }

  curNode = root;
  while (curNode) {
    curNode = curNode.right;
    rightDepth++;
  }

  if (leftDepth === rightDepth) {
    return 2 ** rightDepth - 1;
  }
  return 1 + countNodesMan(root.left) + countNodesMan(root.right);
}
