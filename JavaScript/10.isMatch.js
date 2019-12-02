// Created by wxc on 2019/11/25
// Updated on 2019/12/02

// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

// 示例 1:
// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:
// 输入:
// s = "aa"
// p = "a*"
// 输出: true
// 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3:
// 输入:
// s = "ab"
// p = ".*"
// 输出: true
// 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
// 示例 4:
// 输入:
// s = "aab"
// p = "c*a*b"
// 输出: true
// 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
// 示例 5:
// 输入:
// s = "mississippi"
// p = "mis*is*p*."
// 输出: false

// ? LeetCode@Zhouao
// time: 80ms memory: 35.3MB O(1)
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return new RegExp(['^', ...p, '$'].join('')).test(s);
};

// 动态规划法 LeetCode@秦时明月
// time: 68ms memory: 35.9MB O(n^2)
// 图解：https://leetcode-cn.com/problems/regular-expression-matching/solution/dong-tai-gui-hua-ji-hui-su-by-song-19/
var isMatch = function(s, p) {
    if (s === null || p === null) {
        return false;
    }
    var m = s.length + 1;
    var n = p.length + 1;
    // 初始化二维状态数组 && 初始化第i行第0列数据
    var dp = new Array(m);
    for (var i = 0; i < m; i++) {
        dp[i] = new Array(n)
        for (var j = 0; j < n; j++) {
            dp[i][j] = false;
        }
    }
    // 初始化第一个状态
    dp[0][0] = true;
    // 初始化第0行j列数据
    for (var j = 2; j < n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    // 动态转移表法
    var curS = 0;//当前待匹配字符串i字符位置
    var curP = 0;//当前匹配规则字符串j字符位置
    var preCurP = 0;//当前匹配规则字符串j字符前一个位置
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            // 从1开始遍历
            curS = s[i - 1];
            curP = p[j - 1];
            preCurP = p[j - 2];
            if (curP === '.' || curS === curP) {
                // 合并<1>、<2>步
                dp[i][j] = dp[i - 1][j - 1];
            } else if (curP === '*') {
                // <5>步两重限制下只有一种情况【preCurP== '*'时不存在，且会报非法情况报语法错误 】
                if(preCurP != '.'  && preCurP != curS){
                    dp[i][j] = dp[i][j - 2]
                }
                // 合并<3><4><6><7><8>步，因为不在上述情况内
                else {
                    dp[i][j] = dp[i - 1][j - 2] || dp[i - 1][j] || dp[i][j - 2]
                }
            }
        }
    }
    return dp[m - 1][n - 1];
}

console.log(isMatch('aab', 'c*a*b'))