// Created by wxc on 2019/11/26

// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。说明：你不能倾斜容器，且 n 的值至少为 2。
 
// 示例:
// 输入: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// 输出: 49

// 暴力破解 遍历
// time: 828ms memory: 35.5MB O(n^2)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_area = 0;// 保存最大区域

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let _height = height[i] >= height[j] ? height[j] : height[i];
            let area = _height * (j - i);
            max_area = area >= max_area ? area : max_area;
        }
    }

    return max_area;
};

// 双指针法
// time: 56ms memory: 35.5MB O(n)
var maxArea = function(height) {
    let left = 0, right = height.length - 1;// 左右边界
    let max_area = 0;// 保存最大区域

    while(left < right) {
        if (height[left] < height[right]) {
            let area = height[left] * (right - left);
            max_area = area >= max_area ? area : max_area;
            left++;
        } else {
            let area = height[right] * (right - left);
            max_area = area >= max_area ? area : max_area;
            right--;
        }
    }
    return max_area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));