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

function preorderTraversalRecursion(root: TreeNode | null): number[] {
  function traverse(node: TreeNode | null) {
    if (node === null) return;
    res.push(node.val);
    traverse(node?.left);
    traverse(node?.right);
  }
  const res: number[] = [];
  traverse(root);
  return res;
}

function preorderTraversalIterate(root: TreeNode | null): number[] {
  if (root === null) return [];
  let res: number[] = [];
  let helperStack: TreeNode[] = [];
  let curNode: TreeNode = root;
  helperStack.push(curNode);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.val);
    if (curNode.right !== null) helperStack.push(curNode.right);
    if (curNode.left !== null) helperStack.push(curNode.left);
  }
  return res;
}

function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;
  let curNode: TreeNode | null = root;
  while (curNode !== null || helperStack.length > 0) {
    if (curNode !== null) {
      helperStack.push(curNode);
      curNode = curNode.left;
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      curNode = curNode.right;
    }
  }
  return res;
}
