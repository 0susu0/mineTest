/*
 * @Author: suLeungs
 * @Date: 2021-09-01 16:07:34
 * @LastEditTime: 2021-09-01 16:27:53
 * @LastEditors: suLeungs
 * @Description: 剑指 Offer 24. 反转链表
 * @FilePath: /mineTest/LeetCode/剑指 Offer 24. 反转链表.js
 */

// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。 

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
//  

// 限制：

// 0 <= 节点个数 <= 5000

let Utils = require('../utils')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let next = null
  let node = null
  let cur = head
  while (cur) {
      // console.log(cur.val)
      node = new ListNode(cur.val)
      node.next = next
      next = node
      cur = cur.next
  }
  return node
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList1 = function(head) {
  let prev = null
  let curr = head
  while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  return prev
};

(function () {
  let l1 = Utils.createList([1,2,3,4,5])
  console.time('reverseList')
  let res = reverseList(l1)
  console.timeEnd('reverseList')
  Utils.consoleList(res)
  let l2 = Utils.createList([1,2,3,4,5])
  console.time('reverseList1')
  res = reverseList1(l2)
  console.timeEnd('reverseList1')
  Utils.consoleList(res)
})()
