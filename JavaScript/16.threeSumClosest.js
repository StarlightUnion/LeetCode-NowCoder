// Created by wxc on 2019/12/03

// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
// 返回这三个数的和。假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

// 遍历优化 滑动窗口
// time: 80ms(76.32%) memory: 34.8MB(78.73%)
// 时间复杂度O(nlogn) + O(n^2) = O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return res;
            }
        }
    }
    return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));