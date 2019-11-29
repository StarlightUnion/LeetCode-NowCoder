// Created by wxc on 2019/11/27
// Updated on 2019/11/29

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 说明:
// 所有输入只包含小写字母 a-z 。

// 暴力法
// 超出时间限制
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let num = 1;// 个数
    let flag = true;// 是否完成标志
    let matchStr = '';

    if (strs.length) {
        while(flag) {
            matchStr = strs[0].substr(0, num);

            for (let i = 0; i < strs.length; i++) {
                flag = strs[i].startsWith(matchStr);
            }
            num++;
        }
    }

    return matchStr.substr(0, matchStr.length - 1);
};

var longestCommonPrefix = function(strs) {

}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));