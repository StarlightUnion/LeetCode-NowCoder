// Created by wxc on 2019/11/25

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:
// 输入: 121
// 输出: true
// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

// time: 256ms memory: 45.8MB O(1)
// 字符化反转
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let _x = (x + "").split("").reverse().join("");
    return _x === x + "";
};

// 求余数 LeetCode@Able
var isPalindrome = function(x) {
    let s = 0, y = 0;
    s = x;

    while(s >= 1) {
        y = y * 10 + s % 10;
        s = Math.floor(s / 10);
    }

    return y === x;
}

console.log(isPalindrome(-121));