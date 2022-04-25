// 使用settimeout实现setinterval

function mySetInterval (fn, delay = 0) {
    let timer = null
    const interval = function () {
        fn()
        timer = setTimeout(interval, delay)
    }
    timer = setTimeout(interval, delay)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

const { cancel } = mySetInterval(() => {console.log(666)}, 1000)
setTimeout(() => {
    cancel()
}, 5000);


// 使用setinterval实现settimeout

function mySetTimeout (fn, delay = 0) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, delay)
}


mySetTimeout(() => {console.log(999)}, 1000)