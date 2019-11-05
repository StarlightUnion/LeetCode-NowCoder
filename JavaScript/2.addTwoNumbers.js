// Created by wxc on 2019/10/31
// Updated on 2019/11/05

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。您可以假设除了数字 0 之外，这两个数都不会以 0 开头

// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 构造链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// time: 140ms memory: 38.2MB
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null);
    let nres = res;
    let carry = 0, val = 0;// 进位 和 值
    let v1 = 0, v2 = 0;// 每个链表的值

    while(l1 || l2) {
        v1 = l1 ? l1.val : 0;
        v2 = l2 ? l2.val : 0;

        val = (v1 + v2 + carry) % 10;
        carry = Math.floor((v1 + v2 + carry) / 10);

        nres.next = new ListNode(val);
        nres = nres.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if(carry) {
        nres.next = new ListNode(carry);
    }

    return res.next;
};

let l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
let l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};
console.log(addTwoNumbers(l1, l2));