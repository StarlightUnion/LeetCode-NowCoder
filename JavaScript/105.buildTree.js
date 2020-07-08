// Created by wxc on 2020/05/22

// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 注意:你可以假设树中没有重复的元素。

// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]

// 返回如下的二叉树：
// 3
// / \
// 9  20
//  /  \
// 15   7


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


// LeetCode@alexer-660
// time: 188ms(19.64%) cache: 111.4MB(100%)
// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/105-cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou--6/
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  const root = new TreeNode(preorder[0]);// 根节点应为前序遍历第一个节点
  const index = inorder.indexOf(preorder[0]);

  // preorder = [3, 9, 20,15,7]
  // inorder = [9, 3, 15,20,7]

  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))