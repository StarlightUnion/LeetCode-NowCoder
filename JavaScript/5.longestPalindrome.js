// Created by wxc on 2019/11/07
// Updated on 2019/12/02

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 示例1
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例2
// 输入: "cbbd"
// 输出: "bb"

// 暴力法破解 滑动窗口
// time: 192ms(54.93%) memory: 37.4MB(46.79%) O(n^2)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let res = '', _res = '';

    // 1.aba模式
    for (let i = 1; i < s.length - 1; i++) {
        let flag = true;
        let left = i - 1, right = i + 1;// 左右边界

        while(flag) {
            if (left >= 0 && right <= s.length - 1) {
                if (s[left] === s[right]) {
                    let str = s.slice(left, right + 1);

                    res = str.length >= res.length ? str : res;
                    left--;
                    right++;
                } else {
                    flag = false;
                }
            } else {
                flag = false;
            }
        }
    }

    // 2.baab模式
    for (let i = 0; i < s.length; i++) {
        let _flag = true;
        let _left = i, _right = i + 1;// 左右边界

        while(_flag) {
            if (_left >= 0 && _right <= s.length - 1) {
                if (s[_left] === s[_right]) {
                    let _str = s.slice(_left, _right + 1);

                    _res = _str.length >= _res.length ? _str : _res;
                    _left--;
                    _right++;
                } else {
                    _flag = false;
                }
            } else {
                _flag = false;
            }
        }
    }

    if (!_res.length) _res = s[0];
    return res.length > _res.length ? res : _res;
};

// 动态规划 LeetCode@DeepWang
// 图解：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/hua-jie-suan-fa-5-zui-chang-hui-wen-zi-chuan-by-de/
var longestPalindrome = function(s) {
    if (s === "") return "";
    let cell = [], maxLen = 0, maxEnd = 0;
    for (let i = 0; i < s.length; i++) {
        cell.push([]);
        for (let j = 0; j < s.length; j++) {
            let beforeIndex = s.length - 1 - i;
            if (s[beforeIndex] === s[j]) {
                if (i === 0 || j === 0) {
                    cell[i][j] = 1;
                } else {
                    cell[i][j] = cell[i - 1][j - 1] + 1;
                }
            } else {
                cell[i][j] = 0; // 不能省略
            }
            if (cell[i][j] > maxLen) {
                let firstIndex = j - cell[i][j] + 1;
                if (beforeIndex === firstIndex) {
                    maxLen = cell[i][j];
                    maxEnd = j;
                }
            }
        }
    }
    return s.slice(maxEnd + 1 - maxLen, maxEnd + 1)
}

console.log(longestPalindrome("abac"));