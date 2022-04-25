
// 防抖
function debounce (fn, delay = 500) {
    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

// 节流
function throttle(fn, delay = 200) {
    let flag = false
    return function () {
        if (flag) return
        flag = true
        const args = arguments
        setTimeout(() => {
            fn.apply(this, args)
            flag = false
        }, delay);
    }
}