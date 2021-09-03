/*
 * @Author: suLeungs
 * @Date: 2021-09-02 15:16:44
 * @LastEditTime: 2021-09-02 16:35:35
 * @LastEditors: suLeungs
 * @Description: 678. 有效的括号字符串 难度：中等
 * @FilePath: /mineTest/LeetCode/678. 有效的括号字符串.js
 */

// 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

// 任何左括号 ( 必须有相应的右括号 )。
// 任何右括号 ) 必须有相应的左括号 ( 。
// 左括号 ( 必须在对应的右括号之前 )。
// * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
// 一个空字符串也被视为有效字符串。

// 示例 1:

// 输入: "()"
// 输出: True

// 示例 2:

// 输入: "(*)"
// 输出: True

// 示例 3:

// 输入: "(*))"
// 输出: True

// 注意:

// 字符串大小将在 [1，100] 范围内。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  // if (s.length%2!==0 && s[(s.length-1)/2] !== '*') return false 
  // let heap = []
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === '(' || s[i] === '*') {
  //     heap.push(s[i])
  //     continue
  //   }
  //   let head = heap.shift()
  //   if (head === undefined) return false
  //   if (head === '*' && heap.length !== 0) head = heap.shift()
  // }
  // while (heap.length) {
  //   if (heap.shift() !== '*') return false
  // }
  // return true
  let arr = s.split('')
  let lo = 0, hi = 0
  while (arr.length) {
    switch (arr.shift()) {
      case '(':
        lo++
        hi++
        break
      case ')':
        if (lo > 0) lo--
        hi--
        if (hi < 0) return false
        break
      case '*':
        if (lo <= 0) hi++
        else {
          lo--
          hi++
        }
        break
    }
  }
  if (lo > 0) return false
  return true
};

(function () {
  console.log(checkValidString('(*'))
  console.log(checkValidString(')'))
  console.log(checkValidString('((*))()'))
  console.log(checkValidString('***)*)'))
})()
