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

function findBottomLeftValue(root: TreeNode | null): number {
  let maxDepth = 0;
  if (root === null) return 0;
  let result = root.val;
  function traversal(node: TreeNode, depth: number) {
    if (node.left === null && node.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
        result = node.val;
      }
      return;
    }
    if (node.left) traversal(node.left, depth + 1);
    if (node.right) traversal(node.right, depth + 1);
  }

  traversal(root, 1);

  return result
}
