// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

// 提示：

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let arr = []
  for (let i = 0; i < strs.length; i++) {
      if (typeof strs[i] === 'string') strs[i] = strs[i].split('')
      if (!strs[i].length) {
          if (i) arr.pop()
          break
      }
      if (i === 0) {
          arr.push(strs[i].shift())
          continue
      }
      if (arr[arr.length - 1] !== strs[i].shift()) {
          arr.pop()
          break
      }
      if (i === strs.length - 1) i = -1
  }
  return arr.join('')
};

(function () {
  console.log(longestCommonPrefix(["flower","flow","flight"]))
  console.log(longestCommonPrefix(["dog","racecar","car"]))
})()
