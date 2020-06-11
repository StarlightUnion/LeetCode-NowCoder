// Created by wxc on 2020/05/18

// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 示例 1:
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

// 示例 2:
// 输入: [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。


// 暴力破解
// time: 264ms(5.47%) cache: 35.3MB(66.67%) 时间复杂度O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//   let n;

//   for (let i = 0; i < nums.length; i++) {
//     let _n = nums[i];
//     if (n !== undefined) {
//       n = _n > n ? _n : n;
//     } else {
//       n = _n;
//     }

//     for (let j = i + 1; j < nums.length; j++) {
//       _n *= nums[j];
//       n = _n > n ? _n : n;
//     }
//   }

//   return n;
// };

// 动态规划 LeetCode@hyj8
// https://leetcode-cn.com/problems/maximum-product-subarray/solution/wa-ni-zhe-ti-jie-shi-xie-gei-bu-hui-dai-ma-de-nu-p/
// time: 88ms(27.47%) cache: 36.1MB(66.67%) 时间复杂度O(n)
var maxProduct = function(nums) {
  let res = nums[0], prevMin = nums[0], prevMax = nums[0]
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    res = Math.max(prevMax, res)
  }
  return res
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2]));