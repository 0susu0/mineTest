// 有一堆石头，每块石头的重量都是正整数。

// 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

//  

// 示例：

// 输入：[2,7,4,1,8,1]
// 输出：1
// 解释：
// 先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
// 再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
// 接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
// 最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。
//  

// 提示：

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0]
  let x = 0
  let y = stones.shift()
  let index = 0
  while (true) {
    // console.log(stones)
    if (stones[index] > x && stones[index] < y) {
      if (!x) {
          x = stones.splice(index, 1)[0]
      } else {
          exchange(x, stones[index])
          // x = x ^ stones[index]
          // stones[index] = x ^ stones[index]
          // x = stones[index] ^ x
          index++
      }
      continue
    }
    if (stones[index] >= y) {
      if (x) {
        // let middle = x
        // y = x
        // x = middle
        // middle = y
        // y = stones[index]
        // stones[index] = middle
        // ***********
        x = x ^ y
        y = x ^ y
        x = y ^ x
        // exchange(x, y)
        // exchange(y, stones[index])
        y = y ^ stones[index]
        stones[index] = y ^ stones[index]
        y = stones[index] ^ y
        index++
      } else {
        x = y
        y = stones.splice(index, 1)[0]
      }
      continue
    }
    index++
    if (index >= stones.length) {
      if (y - x) {
        stones.push(y - x)
        // console.log('push', stones)
        // if (stones.length <= 1) break
      }
      // if (!(y - x) && stones.length <= 1) return 0
      x = 0
      y = stones.length <= 1 ? 0 : stones.shift()
      index = 0
    }
    // console.log(y)
    if (!y) break
  }
  // console.log(stones.length)
  if (!stones.length) return 0
  return stones[0]
};

function exchange(a, b) {
  let middle = a
  a = b
  b = middle
}

console.log(lastStoneWeight([2,7,4,1,8,1]))
// console.log(lastStoneWeight([1]))
// console.log(lastStoneWeight([1, 3]))
console.log(lastStoneWeight([3,7,2]))
console.log(lastStoneWeight([1,1,1]))

// function test (a, b) {
//   a = a ^ b
//   b = a ^ b
//   a = b ^ a
//   console.log(a, b)
// }

// test(1, 2)
