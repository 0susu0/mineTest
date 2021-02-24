// 832. 翻转图像

// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

// 示例 1：

// 输入：[[1,1,0],[1,0,1],[0,0,0]]
// 输出：[[1,0,0],[0,1,0],[1,1,1]]
// 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
//      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]

// 示例 2：

// 输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
//      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// 提示：

// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  let res = new Array(A.length)
  let ODLen = A.length, TDLen = A[0].length
  for (let i = 0; i < ODLen; i++) {
    res[i] = []
    for (let j = TDLen - 1; j >= 0; j--) {
      // console.log(i, TDLen - 1 - j, '\'' + A[i][j] + '\'')
      res[i][TDLen - 1 - j] = A[i][j] ? 0 : 1
      // console.log('\'' + res[i][TDLen - 1 - j] + '\'')
    }
  }
  return res
};

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage1 = function(A) {
  const ODLen = A.length
  const TDLen = A[0].length
  const TDLenH = A[0].length % 2 ? (A[0].length + 1) / 2 : A[0].length / 2
  for (let i = 0; i < ODLen; i++) {
    for (let j = 0; j < TDLenH; j++) {
      if (A[i][j] === A[i][TDLen - 1 - j]) {
        if (j === TDLen - 1 - j) {
          A[i][j] = !A[i][j] * 1
        } else {
          A[i][TDLen - 1 - j] = A[i][j] = !A[i][j] * 1
        }
      }
    }
  }
  return A
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage1([[1,1,0],[1,0,1],[0,0,0]]))
