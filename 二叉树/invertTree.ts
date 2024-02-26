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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  function swapNode(
    parent: TreeNode,
    left: TreeNode | null,
    right: TreeNode | null
  ) {
    parent.right = left;
    parent.left = right;
  }
  swapNode(root, root.left, root.right);
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// 递归法（中序遍历）
function inOrderInvertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  invertTree(root.left);
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  // 因为左右节点已经进行交换，此时的root.left 是原先的root.right
  invertTree(root.left);
  return root;
}

function iterInvertTree(root: TreeNode | null): TreeNode | null {
  const helperStack: TreeNode[] = [root!];
  let tempNode: TreeNode | null;
  if (root === null) return root;

  while (helperStack.length > 0) {
    const curNode = helperStack.pop()!;

    if (curNode.right !== null) helperStack.push(curNode.right);
    if (curNode.left !== null) helperStack.push(curNode.left);
    tempNode = curNode.left;
    curNode.left = curNode.right;
    curNode.right = tempNode;
  }

  return root;
}
