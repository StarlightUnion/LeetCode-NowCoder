// Created by wxc on 2019/10/31

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// time: 160ms memory: 40.3MB O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let str = "";

    for(let i = 0; i < s.length; i++) {
        if(str.indexOf(s[i]) < 0) {
            str += s[i];
            len = str.length > len ? str.length : len;
        } else {
            str += s[i];
            str = str.slice(str.indexOf(s[i]) + 1);
        }
    }
    return len;
};

let str = "abcabcbb";// 3
console.log(lengthOfLongestSubstring(str));

// 题解中的 滑动窗口