
function currying (fn, ...args1) {
    const length = fn.length
    let allArgs = [...args1]
    const res = (...args2) => {
        allArgs = [...allArgs, ...args2]
        // 长度相等则直接返回函数结果
        if (allArgs.length === length) {
            return fn(...allArgs)
        } else {
            return res
        }
    }
    return res
}


// 实现效果

const add = (a, b, c) => a + b + c;
const a = currying(add, 1)
console.log(a(2,3))