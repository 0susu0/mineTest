/*
 * @Author: suLeungs
 * @Date: 2023-02-14 22:36:38
 * @LastEditTime: 2023-02-14 22:48:27
 * @LastEditors: suLeungs
 * @Description: 
 * @FilePath: /mineTest/LeetCode/删除有序数组中的重复项.js
 */

// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

// 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

// 将最终结果插入 nums 的前 k 个位置后返回 k 。

// 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2,_]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
// 示例 2：

// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   let arrL = 0
   for (let i = 1; i < nums.length; i++) {
     if (nums[arrL] !== nums[i]) {
       nums[arrL + 1] = nums[i]
       arrL++
     }
   }
   return arrL + 1
 };

//  (function () {
//   let nums = [1, 1, 2]
//   console.log(removeDuplicates(nums))
//   console.log(nums)
//  })()
(function () {
  let nums = [1, 1, 2]
  let result = removeDuplicates(nums)
  console.log(result)
  console.log(nums.slice(0, result))
})()
 