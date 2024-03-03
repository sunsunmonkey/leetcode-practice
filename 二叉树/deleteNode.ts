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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return root;
  if (root.val === key) {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left === null && root.right !== null) {
      return root.right;
    } else if (root.right === null && root.left !== null) {
      return root.left;
    } else {
      let left: TreeNode = root.right!;
      while (left.left) {
        left = left.left;
      }
      left.left = root.left;
      return root.right;
    }
  } else if (root.val > key) root.left = deleteNode(root.left, key);
  else if (root.val < key) root.right = deleteNode(root.right, key);

  return root;
}
