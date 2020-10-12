// 给定一个整数数组nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大值。

// 输入：[-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出：6
// 连续子数组[4, -1, 2, 1]

function maxSubArray (arr) {
  const len = arr.length;

  if (len === 0) {
    return 0;
  }

  const dp = new Array(len);
  dp[0] = arr[0];

  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
  }

  let res = dp[0];
  for (let i = 1; i < len; i++) {
    res = Math.max(res, dp[i]);
  }

  return [dp, res];
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));