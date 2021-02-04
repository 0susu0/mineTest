// 643. 子数组最大平均数 I

// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

// 示例：

// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

// 提示：

// 1 <= k <= n <= 30,000。
// 所给数据范围 [-10,000，10,000]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let res = (nums.slice(0, k)).reduce((sum, cur) => sum + cur, 0)
  let left = 1, right = k, len = nums.length
  while (right < len) {
    let tol = (nums.slice(left, right + 1)).reduce((sum, cur) => sum + cur, 0)
    if (tol > res) res = tol
    left++
    right++
  }
  return res / k
};

/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */
var findMaxAverage1 = function (nums, k) {
  let res = 0, tol = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    tol += nums[i]
    if (i === k - 1) {
      res = tol
      continue
    }
    if (i >= k) tol -= nums[i - k]
    if (tol > res) res = tol
  }
  return res / k
}

console.log(findMaxAverage([-1], 1))
console.log(findMaxAverage1([-1], 1))
// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage1([1,12,-5,-6,50,3], 4))
