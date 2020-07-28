// Created by wxc on 2020/07/28

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, depth = 1) {
  let leftDepth = 0, rightDepth = 0;

  if (root.left) {
    leftDepth = maxDepth(root.left, depth++) + depth;
  }

  if (root.right) {
    rightDepth = maxDepth(root.left, depth++) + depth;
  }

  return Math.max(leftDepth, rightDepth);
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));