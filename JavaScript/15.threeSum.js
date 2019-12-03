// Created by wxc on 2019/12/02
// Updated on 2019/12/03

// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 暴力遍历 利用对象键名比较法去重
// 超出时间限制
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let obj = {};// 创建一个对象

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let arr = [nums[i], nums[j], nums[k]].sort();
                    if (!obj.hasOwnProperty(arr)) {
                        obj[arr] = i;
                        res.push(arr);
                    }
                }
            }
        }
    }
    return res;
};

// 遍历优化 滑动窗口 LeetCode@灵魂画师牧码
// time: 200ms(67.31%) memory: 46.9MB(50.35%)
// https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));