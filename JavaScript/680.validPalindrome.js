// Created by wxc on 2020/05/19

// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:
// 输入: "aba"
// 输出: True

// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 注意:
// 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。


// 暴力破解
// time: 204ms(9.22%) cache: 56.9MB(100%)
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      let arr = s.slice(left, right).split("");
      let _arr = s.slice(left + 1, right + 1).split("");

      return arr.join("") === arr.reverse().join("")
        || _arr.join("") === _arr.reverse().join("");
    }
  }

  return true;
}


// LeetCode@jsyt
// https://leetcode-cn.com/problems/valid-palindrome-ii/solution/js-4-xing-dai-ma-jian-dan-yi-dong-by-jsyt/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) l++, r--;
  if (r <= l) return true;
  if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
  return false;
};

console.log(validPalindrome("abca"));
console.log(validPalindrome("abcba"));
console.log(validPalindrome("abbcca"));