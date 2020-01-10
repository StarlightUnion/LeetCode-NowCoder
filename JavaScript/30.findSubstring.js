// Created by wxc on 2020/01/08

// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
//
// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。

// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]


// 尝试第一弹 会错题意，以为是两两串联。。。
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function(s, words) {
//     let len = words.length,
//         matrix = [],
//         res = [];

//     // 创建矩阵
//     for (let i = 0; i < len; i++) {
//         matrix.push(new Array(len).fill(1));
//     }

//     // 遍历数组
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (i === j) {
//                 matrix[i][j] = 0;
//             } else {
//                 let flag = true,
//                     idx = 0;// 开始检索的位置

//                 while(flag) {
//                     let index = s.indexOf(words[i] + words[j], idx);

//                     if (index >= 0) {
//                         res.push(index);
//                         idx = idx + index + (words[i] + words[j]).length;
//                         flag = true;
//                     } else {
//                         flag = false;
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// };


// 尝试第二弹
var findSubstring = function(s, words) {
    let len = words.length,
        res = [];

    return res;
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));// [0, 9]