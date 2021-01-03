// 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

// 你应当保留两个分区中每个节点的初始相对位置。

//  

// 示例：

// 输入：head = 1->4->3->2->5->2, x = 3
// 输出：1->2->2->4->3->5


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

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) return head
    let big = []
    let small = []
    let now = head
    while (now) {
        if (now.val >= x) big.push(now)
        // if (now.val === x) middle.push(now)
        if (now.val < x) small.push(now)
        now = now.next
    }
    // console.log(big, small)
    head = small.length ? small.shift() : big.shift()
    now = head
    while (big.length || small.length) {
        if (small.length) {
            now.next = small.shift()
            if (!small.length) now = now.next
        }
        if (!small.length && big.length) {
            now.next = big.shift()
            if (!big.length) {
                now.next.next = null
                break
            }
        }
        now = now.next
    }
    return head
};

(function () {
    let head = createList([1,4,3,2,5,2])
    consoleList(partition(head, 3))
})()