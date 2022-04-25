const myNew = function(fn, args) {
    const newObj = {}
    newObj.__proto__ = fn.prototype
    // 改变实例的this指向
    fn.apply(newObj, args)
    return newObj
}