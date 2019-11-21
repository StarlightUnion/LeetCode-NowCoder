// Created by wxc on 2019/11/21

// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1: 输入: 123  输出: 321
// 示例 2: 输入: -123 输出: -321
// 示例 3: 输入: 120  输出: 21

// 注意:
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
// 请根据这个假设，如果反转后整数溢出那么就返回 0。

// time: 92ms memory: 36MB o(1)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) return 0;

    let flag;
    if (x < 0) {
        flag = true;
        x = -x;
    } else {
        flag = false;
    }

    let _x = (x + "").split("").reverse().join("");
    _x = flag ? "-" + _x : _x;
    if (parseInt(_x) < Math.pow(-2, 31) || parseInt(_x) > Math.pow(2, 31)) return 0;

    return parseInt(_x);
};

console.log(reverse(123));