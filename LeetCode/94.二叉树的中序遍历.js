// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1,2]
// 输出：[2,1]
// 示例 5：


// 输入：root = [1,null,2]
// 输出：[1,2]
//  

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//  

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = []
  let threeTraversalMiddle = function (node) {
      if (!node) return
      threeTraversalMiddle(node.left)
      result.push(node.val)
      threeTraversalMiddle(node.right)
  }
  threeTraversalMiddle(root)
  return result
};

(()=> {
  let root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3)
  console.log(inorderTraversal(root));
})()