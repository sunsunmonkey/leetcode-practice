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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) return false;

  targetSum = targetSum - root.val;

  if (root.left === null && root.right === null && targetSum === 0) return true;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const resArr: number[][] = [];
  if (root === null) return resArr;
  const routeArr: number[] = [root.val];
  travelTree(root, targetSum);
  function travelTree(node: TreeNode, targetSum) {
    targetSum = targetSum - node.val;
    if (node.left === null && node.right === null && targetSum === 0) {
      resArr.push([...routeArr]);
    }

    if (node.left) {
      routeArr.push(node.left.val);
      travelTree(node.left, targetSum);
      routeArr.pop();
    }

    if (node.right) {
      routeArr.push(node.right.val);
      travelTree(node.right, targetSum);
      routeArr.pop();
    }
  }
  return resArr;
}
