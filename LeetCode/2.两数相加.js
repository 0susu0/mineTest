// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例 1：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 示例 3：

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]
//  

// 提示：

// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零

// import Utils from "../utils";
let Utils = require('../utils')


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let listArr1 = []
    let listArr2 = []
    let now = l1
    while (now) {
      listArr1.push(now)
      now = now.next
    }
    now = l2
    while (now) {
      listArr2.push(now)
      now = now.next
    }
    if (listArr1.length > listArr2.length) {
      let len = listArr1.length - listArr2.length
      for (let i = 0; i < len; i++) {
        listArr2.push(new Utils.listNode(0))
      }
    }
    if (listArr1.length < listArr2.length) {
      let len = listArr2.length - listArr1.length
      for (let i = 0; i < len; i++) {
        listArr1.push(new Utils.listNode(0))
      }
    }
    let add = 0
    now = listArr1[0]
    for (let i = 0; i < listArr1.length; i++) {
      listArr1[i].val = listArr1[i].val + listArr2[i].val + add
      add = 0
      if (listArr1[i].val >= 10) {
        add = 1
        listArr1[i].val -= 10
      }
      if (i >= listArr1.length - 1 && add) {
        now.next = new Utils.listNode(add)
        break
      }
      now.next = listArr1[i + 1] ? listArr1[i + 1] : null
      now = now.next
    }
    // console.log(listArr1)
    return listArr1[0]
};


(function () {
  let l1 = Utils.createList([9,9,9,9,9,9,9])
  let l2 = Utils.createList([9,9,9,9])
  let head = addTwoNumbers(l1, l2)
  Utils.consoleList(head)
})()