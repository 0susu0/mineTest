/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function listNode (val) {
  this.val = val
  this.next = null
};

function createList (arr, pos) {
  if (!arr.length) return null
  let head = new listNode(arr.shift())
  let now = head
  let posNode = null
  let index = 0
  while (arr.length) {
      if (pos !== undefined && index === pos) {
        posNode = now
      }
      now.next = new listNode(arr.shift())
      now = now.next
      if (pos !== undefined && !arr.length) {
        if (posNode) now.next = posNode
        else now.next = now
      }
      index++
  }
  return head
}

function consoleList (head) {
  let result = ''
  let now = head
  // console.log(now)
  while (now) {
      // console.log(now.val + '=>')
      result = result + (now === head ? '' :'=>') + now.val
      now = now.next
  }
  console.log(result)
}

module.exports = {
  listNode,
  createList,
  consoleList
}