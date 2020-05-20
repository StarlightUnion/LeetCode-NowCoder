// Created by wxc on 2020/05/13

// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

// 示例：
// 二叉树：[3,9,20,null,null,15,7],
// 3
// / \
// 9  20
//  /  \
// 15   7
// 返回其层次遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


// 广度优先 迭代
// time: 88ms(13.27%) cache: 35MB(83.33%)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [[root.val]],
    rootArr = [root];

  while (rootArr.length) {
    let _res = [],
      _rootArr = [];

    rootArr.map(item => {
      if (item.left) {
        _rootArr.push(item.left);
        _res.push(item.left.val);
      }

      if (item.right) {
        _rootArr.push(item.right);
        _res.push(item.right.val);
      }
    });
    rootArr =  _rootArr;
    if (_res.length) res.push(_res);
  }

  return res;
};


// 递归 LeetCode@lrjets
// time: 72ms(56.90%) cache: 34MB(100%)
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen-8/
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];

  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }

  traversal(root, 0);
  return res;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));