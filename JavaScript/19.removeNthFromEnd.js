// Created by wxc on 2019/12/05

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 说明：
// 给定的 n 保证是有效的。

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// time: 80ms(32.79%) memory: 34MB(25.30%)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = [];
    let next = head;

    // 获取链表的值
    while(next) {
        arr.push(next.val);
        next = next.next;
    }
    arr.splice(arr.length - n, 1);

    let res = new ListNode(null);
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};

// 官方题解 双指针法
// time: 72ms(62.66%) memory: 34.1MB(17.38%)
// 时间复杂度O(L) L为链表长度 空间复杂度O(1)
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;//增加哑节点
    let first = dummy, second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while(first != null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
};

let listNode = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
console.log(removeNthFromEnd(listNode, 2));