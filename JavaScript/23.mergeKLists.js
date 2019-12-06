// Created by wxc on 2019/12/06

// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:
// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 暴力破解
// time: 104ms(80.94%) memory: 38.9MB(51.88%)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    let res = new ListNode(null);

    function transform(l, arr) {
        while(l) {
            arr.push(l.val);
            l = l.next;
        }
    }

    lists.map(item => transform(item, arr));
    arr.sort((a, b) => a - b);
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = new ListNode(null);
        res.val = arr[i];
        temp.next = res;
        res = temp;
    }

    return res.next;
};

console.log(mergeKLists([
    {val: 1, next: {val: 4, next: {val: 5, next: null}}},
    {val: 1, next: {val: 3, next: {val: 4, next: null}}},
    {val: 2, next: {val: 6, next: null}}
]));