class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number, children?: TreeNode[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: Node | null): number {
  let depth = 0;
  let temArr = [root];
  let curNode;
  if (root === null) return depth;
  while (temArr.length > 0) {
    depth++;
    const length = temArr.length;
    for (let i = 0; i < length; i++) {
      curNode = temArr.shift();

      temArr.push(...curNode.children);
    }
  }
  return depth;
}
