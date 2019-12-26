// Created by wxc on 2019/12/25
// Updated on 2019/12/26

// 实现 strStr() 函数。
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:
// 输入: haystack = "hello", needle = "ll"
// 输出: 2

// 示例 2:
// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。


// 1.indexOf()
// time: 68ms(61.65%) memory: 34.2MB(37.83%)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// 2.暴力循环 LeetCode@rhinoc
// time: 4244ms(5.14%) memory: 35.6MB(13.62%)
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let flag = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) return i;
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));