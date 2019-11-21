// Created by wxc on 2019/11/21

// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
// 请你实现这个将字符串进行指定行数变换的函数：

// 示例 1:
// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:
// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:
// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

// time: 148ms memory: 37.8MB O(n)
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let strArray = [];// 字符数组
    let index = 0;// 数组索引
    let flag = true;// 加减标志

    if (numRows === 1) {
        return s;
    }

    for (let i = 0; i < numRows; i++) {
        strArray.push("");
    }

    for (let j = 0; j <s.length; j++) {
        if (index === 0) {
            flag = true;
        } else if (index === (numRows - 1)) {
            flag = false;
        }

        strArray[index] = strArray[index] + s[j];
        index = flag ? index + 1 : index - 1;
    }
    return strArray.join("");
};

console.log(convert("LEETCODEISHIRING", 3));