// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 示例 4:

// 输入: s = ""
// 输出: 0
//  

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length
  s = s.split('')
  let res = 0
  let arr = []
  for (let i = 0; i < s.length; i++) {
      if (arr.indexOf(s[i]) !== -1) {
          if (arr.length > res) res = arr.length
          s.shift()
          i = 0
          arr = []
          if (s.length <= res) break
      }
      arr.push(s[i])
  }
  if (arr.length > res) res = arr.length
  return res
};

(function () {
  console.log(lengthOfLongestSubstring('abcabcbb'))
  console.log(lengthOfLongestSubstring('dvdf'))
})()