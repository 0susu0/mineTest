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

function createList (arr) {
  let head = new listNode(arr.shift())
  let now = head
  while (arr.length) {
      now.next = new listNode(arr.shift())
      now = now.next
  }
  return head
}

function consoleList (head) {
  let result = ''
  let now = head
  // console.log(now)
  while (now) {
      // console.log(now)
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