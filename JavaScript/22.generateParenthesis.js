// Created by wxc on 2019/12/10

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// LeetCode@秦时明月
// time: 68ms(70.72%) memory: 35.1MB(38.58%)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function _generate(left, right, n, str) {
        if (left == n && right == n) {
            res.push(str)
            return;
        }
        if (left < n)  _generate(left + 1, right, n, str + '(');
        if (left > right) _generate(left, right + 1, n, str + ')');
    }
    _generate(0, 0, n, '');
    return res;
};

// LeetCode@秦时明月
// time: 72ms(53.76%) memory: 34.7MB(71.07%)
var generateParenthesis = function(n) {
    let ress = [[""]];
    for (let i = 1; i <= n; i++) {
        let res = [];
        for (let j = 0; j < i; j++) {
            let first = ress[j];
            let second = ress[i - j - 1]
            for (let key in first) {
                let tmpFirst = first[key];
                for (let secondKey in second) {
                    let tmpSecond = second[secondKey];
                    res.push("(" + tmpFirst + ")" + tmpSecond);
                }
            }
        }
        ress.push(res);
    }
    return ress[ress.length - 1];
};

console.log(generateParenthesis(3));