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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null;
  const rootVal = postorder.pop()!;
  const root = new TreeNode(rootVal);

  const rootValIndex = inorder.indexOf(rootVal);

  root.left = buildTree(
    inorder.slice(0, rootValIndex),
    postorder.slice(0, inorder.slice(0, rootValIndex).length)
  );
  root.right = buildTree(
    inorder.slice(rootValIndex + 1),
    postorder.slice(inorder.slice(0, rootValIndex).length)
  );
  return root;
}
