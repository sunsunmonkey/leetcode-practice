function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0;

  let leftCount = 0;

  if (root.left === null && root.right === null) return 0;

  if (
    root.left !== null &&
    root.left.left === null &&
    root.left.right === null
  ) {
    leftCount = root.left.val;
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + leftCount;
}
