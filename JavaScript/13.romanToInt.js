// Created by wxc on 2019/11/27

// 说明同 intToRoman

//参考 LeetCode@秦时明月
// time: 180ms(53.50%) memory: 39.8MB(78.91%) O(n)
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const str = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        res = str[s[i]] < str[s[i + 1]] ? res - str[s[i]] : res + str[s[i]];
    }

    return res;
};

console.log(romanToInt('MCMXCIV'));