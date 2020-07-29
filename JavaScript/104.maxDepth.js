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

// 递归
// time: 92ms(27.14%) cache: 41.1MB(8.33%)
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (!root) return 0;
//   let leftDepth = 0, rightDepth = 0;

//   leftDepth = maxDepth(root.left);
//   rightDepth = maxDepth(root.right);

//   return Math.max(leftDepth, rightDepth) + 1;
// };


// LeetCode@hyj8 https://leetcode-cn.com/u/hyj8/
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/
var maxDepth = (root) => {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while (queue.length) {
    const levelNum = queue.length;          // 当前层的节点个数
    for (let i = 0; i < levelNum; i++) {    // 逐个让当前层的节点出列
      const cur = queue.shift();            // 当前出列的节点
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right); // 左右子节点入列
    }
    // 当前层所有节点出列，如果有下一层节点，则队列非空
    if (queue.length) depth++;
  }
  return depth;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));