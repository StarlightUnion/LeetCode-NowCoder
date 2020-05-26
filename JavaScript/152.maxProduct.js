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
// time: 264ms(5.47%) cache: 35.3MB(66.67%)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let n;

  for (let i = 0; i < nums.length; i++) {
    let _n = nums[i];
    if (n !== undefined) {
      n = _n > n ? _n : n;
    } else {
      n = _n;
    }

    for (let j = i + 1; j < nums.length; j++) {
      _n *= nums[j];
      n = _n > n ? _n : n;
    }
  }

  return n;
};

// console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2]));