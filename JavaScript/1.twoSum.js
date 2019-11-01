// Created by wxc on 2019/10/28

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
// 示例：
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// time: 172ms memory: 34.5MB O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length) {
      for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }
};

var nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));// [0, 1]

// time: 72ms memory: 34.9MB O(n)
var twoSum = function(nums, target) {
  if(nums.length) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
      let flag = map.get(target - nums[i]);
      if(flag != undefined && flag != i) {
        return [flag, i];
      }
      map.set(nums[i], i);
    }
  }
}

var nums = [3, 7, 8, 15];
console.log(twoSum(nums, 11));// [0, 2]