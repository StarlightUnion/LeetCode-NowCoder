// Created by wxc on 2019/12/06

// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 递归 LeetCode@灵魂画师牧码
// time: 76ms(73.34%) 35.8MB(16.22%)
// https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// 暴力破解 先取出所有值放入一个数组，将其排序后重新转为链表
// time: 92ms(25.86%) memory: 36.6MB(5.81%)
var mergeTwoLists = function(l1, l2) {
    let arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    transform(l1, arr);
    transform(l2, arr);
    arr.sort((a, b) => a - b);
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};

console.log(mergeTwoLists({val: 1, next: {val: 2, next: {val: 4, next: null}}}, {val: 1, next: {val: 3, next: {val: 4, next: null}}}));