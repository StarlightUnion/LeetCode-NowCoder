// Created by wxc on 2019/10/31
// Updated on 2019/11/01

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

console.log(lengthOfLongestSubstring(""));

// 题解中的 滑动窗口
// time: 80ms memory: 37.3MB O(n)
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1) {
        return 0;
    }

    let len = 0, left = 0, right = 1;
    while(right < s.length) {
        let str = s.slice(left, right);
        let flag = str.indexOf(s[right]);
        if(flag >= 0) {
            left += flag + 1;
        } else {
            len = right - left + 1 > len ? right - left + 1 : len;
        }

        right++;
    }
    return len;
}

console.log(lengthOfLongestSubstring("abcbacbb"));