// Created by wxc on 2020/01/03
// Updated on 2020/01/08

// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。

// 示例 1:
// 输入: dividend = 10, divisor = 3
// 输出: 3

// 示例 2:
// 输入: dividend = 7, divisor = -3
// 输出: -2

// 说明:
// 被除数和除数均为 32 位有符号整数。
// 除数不为 0。
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。


// 1. ？ 看不懂... LeetCode@johnh
// https://leetcode-cn.com/problems/divide-two-integers/solution/shi-yong-wei-yi-cao-zuo-qiu-jie-by-johnh/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var INT_MAX = 0x7FFFFFFF;
    var INT_MIN = 1 << 31;

    //先判断符号
    var symbol = (dividend ^ divisor) >> 31;
    //由于Math.abs(INT_MIN)存在溢出问题
    //因此被除数与除数全部转为负数处理
    var _dividend = dividend > 0 ? -dividend : dividend;
    var _divisor = divisor > 0 ? -divisor : divisor;

    var times = divided_negtive(_dividend, _divisor);

    var output = 0;
    for (var i = 0; i < times.length; i++) {
        if (times[i] === 31) {
            //i=31表示INT_MIN，times无第二个元素，直接短路处理
            if (symbol === 0) {
                //符号为正，此时存在INT_MIN转为正数溢出,返回INT_MAX
                return INT_MAX;
            }
            return INT_MIN;
        }
        output += (1 << times[i]);
    }
    return symbol ? -output : output;
};

function divided_negtive(dividend, divisor) {
    //两负数相除
    //如-10/-20当除数小于被除数时，商为0
    if (divisor < dividend) {
        return [];
    }

    var timesMax = 32;
    var timesMin = 0;
    while (timesMax !== timesMin + 1) {
        //二分查找
        var mid = (timesMax + timesMin) >> 1;
        //divisor<<mid后有可能超过-1<<31的范围
        //因此要判断divisor是否大于等于-1<<(31-mid)，一旦小于这个值，则必定溢出
        if (divisor < (-1 << (31 - mid))) {
            //符合溢出条件，说明mid过大，将mid赋给timesMax，供下次折半查找使用
            timesMax = mid;
            continue;
        }

        var testVal = divisor << mid;
        if (testVal < dividend) {
            timesMax = mid;
        } else {
            timesMin = mid;
        }
    }
    return [timesMin].concat(divided_negtive(dividend - (divisor << timesMin), divisor));
}


// 2.chitanda-eru
// https://leetcode-cn.com/problems/divide-two-integers/solution/chu-shu-bei-zeng-by-chitanda-eru/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor, count = 1) {
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    const isMinus = (dividend === absDividend ? 1 : -1) ^ (divisor === absDivisor ? 1 : -1);
    let res = divideDichotomy(absDividend, absDivisor, 0);

    if (isMinus) res = -res;
    if (res > 2147483647) return 2147483647;
    if (res < -2147483648) return -2147483648;
    return res;
};

/**
 * @param {number} absDividend 被除数(非负数)
 * @param {number} originAbsDivisor 最初的除数(非负数)
 * @param {number} res 上一个部分得到的结果
 */
function divideDichotomy(absDividend, originAbsDivisor, res) {
    if (absDividend < originAbsDivisor) return res;
    let count = 1;
    let absDivisor = originAbsDivisor;
    while (absDividend >= absDivisor) {
        const nextAbsDivisor = absDivisor + absDivisor;
        if (absDividend === nextAbsDivisor) return count + count + res;
        if (absDividend < nextAbsDivisor) return divideDichotomy(absDividend - absDivisor, originAbsDivisor, res + count);
        absDivisor = nextAbsDivisor;
        count += count;
    }
}

console.log(divide(10, 3));