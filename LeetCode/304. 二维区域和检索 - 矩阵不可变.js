// 304. 二维区域和检索 - 矩阵不可变

// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

// 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

// 示例：

// 给定 matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12

// 提示：

// 你可以假设矩阵不可变。
// 会多次调用 sumRegion 方法。
// 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const n = matrix ? matrix.length : 0
  const m = matrix[0] ? matrix[0].length : 0
  this.sums = new Array(n).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
      }
  }
  console.log(this.sums)
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let res = 0
  for (let i = row1; i < row2 + 1; i++) {
      res += this.sums[i][col2 + 1] - this.sums[i][col1]
  }
  return res
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/

var obj = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]])
var param_1 = obj.sumRegion(2,1,4,3)
var param_2 = obj.sumRegion(1,1,2,2)
var param_3 = obj.sumRegion(1,2,2,4)
console.log(param_1, param_2, param_3)
var obj1 = new NumMatrix([])
