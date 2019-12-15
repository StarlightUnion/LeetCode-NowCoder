// Created by wxc on 2019/12/06
// Updated on 2019/12/14

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例:
// 给定 1->2->3->4, 你应该返回 2->1->4->3.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// time: 60ms(90.47%) memory: 33.9(11.69%)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let arr = [], _arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    transform(head, arr);
    if (arr.length <= 1) return head;
    for (let i = 0; i < arr.length; i += 2) {
        arr[i + 1] !== undefined ? _arr.push(arr[i + 1], arr[i]) : _arr.push(arr[i]);
    }

    for (let i = _arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = _arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};

// 递归 一 LeetCode@Nodreame
// time: 60ms(94.8%) memory: 33.6MB(63.6%)
// https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/jsliang-chong-jie-fa-die-dai-zi-di-gui-by-nodreame/
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

// 递归 二 LeetCode@Nodreame
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let [fst, snd] = [head, head.next];
    [fst.next, snd.next] = [swapPairs(snd.next), fst];
    return snd;
};

console.log(swapPairs({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}}));