// Created by wxc on 2019/12/06

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true

// 洋葱栈 LeetCode@秦时明月
// time: 64ms(82.8%) memory: 33.7MB(80.82%)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = new Map();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");

    for (let i = 0; i < s.length; i++) {
        if (!map.get(s[i])) {
            if (stack.length === 0) {
                return false;
            }
            let n = stack.pop();//返回数组最后一个内容并删除它
            if (map.get(n) !== s[i]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

// 暴力法破解 LeetCode@rhinoc
// time: 88ms(22.66%) memory: 35.9MB(11.72%)
var isValid = function(s) {
    while(s.length) {
        let temp = s;
        s = s.replace("()", "");
        s = s.replace("[]", "");
        s = s.replace("{}", "");
        if (s === temp) return false;
    }
    return true;
};

console.log(isValid("()[]{}"));