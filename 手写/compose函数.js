// 实现代码组合中的compose函数

function compose (...fn) {
    if (fn.length === 0) return (num) => num
    if (fn.length === 1) return fn[0]
    return fn.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}


function fn1(x) {
    return x + 1
}

function fn2(x) {
    return x + 2
}

function fn3(x) {
    return x + 3
}

function fn4(x) {
    return x + 4
}

let newFn = compose(fn1, fn2, fn3, fn4)
console.log(newFn(0))