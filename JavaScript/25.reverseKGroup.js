// Created by wxc on 2019/12/12

// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
// k 是一个正整数，它的值小于或等于链表的长度。
// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 示例 :
// 给定这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 老办法 处理成数组之后进行排序..
// time: 100ms(29.70%) memory: 37.8MB(12.50%)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let arr = [], _arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    transform(head, arr);
    for (let i = 0; i < arr.length; i += k) {
        let temp = arr.slice(i, i + k);
        temp = temp.length === k ? temp.reverse() : temp;
        _arr = _arr.concat(temp);
    }

    for (let i = _arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = _arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};

// 递归解法 LeetCode@gaoryrt
// time: 80ms(93.94%) memory: 37.1MB(94.64%)
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/submissions/
var reverseKGroup = function(head, k) {
    let len = 0;
    let Prest = head;

    while (len < k) {
        if (Prest === null) return head;
        Prest = Prest.next;
        len += 1;
    }

    let P0 = reverseKGroup(Prest, k);
    let P1 = head;

    while (len > 0) {
        const temp = P1.next;
        P1.next = P0;
        P0 = P1;
        P1 = temp;
        len -= 1;
    }
    return P0;
};

console.log(reverseKGroup({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}, 3));