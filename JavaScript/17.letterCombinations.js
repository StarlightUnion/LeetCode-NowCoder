// Created by wxc on 2019/12/04

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
    1        2 abc   3 def
    4 ghi    5 jkl   6 mno
    7 pqrs   8 tuv   9 wxyz
*/

// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// 说明: 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

// 遍历 LeetCode@freemind1992
// time: 72ms(35.2%) memory: 33.9MB(6.86%)
// 时间复杂度O(n^2)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let str = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
    if (!digits || !digits.length) return [];
    if (digits.length === 1) return [...str[digits]];
    let res = [], marr = [];// 结果 和 对比数组

    for (let i = 0; i < digits.length; i++) {
        marr.push([...str[digits[i]]]);
    }

    res = marr.reduce((intval, next) => {
        let temp = [];
        intval.map(item => {
            next.map(list => {
                temp.push(item + list);
            })
        })
        return temp;
    });
    return res;
};

// LeetCode@秦时明月
// time: 56ms(94.47%) memory: 34.3MB(5.01%)
// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/17-dian-hua-hao-ma-de-zi-mu-zu-he-by-alexer-660/
var letterCombinations = function(digits) {
    let str = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
    if (!digits || !digits.length) return [];
    if (digits.length === 1) return [...str[digits]];
    let res = [];// 结果
    let len = digits.length;

    function generate(index, string) {
        if (index === len) {
            res.push(string);
            return;
        }

        let arr = [...str[digits[index]]];
        arr.map(item => {
            generate(index + 1, string + item);
        })
    }

    generate(0, '');
    return res;
}

console.log(letterCombinations("23"));