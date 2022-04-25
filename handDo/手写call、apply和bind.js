
// 手写call
Function.prototype.myCall = function (obj, ...args) {
  const content = obj || window

  let fn = Symbol()

  content[fn] = this

  return (function () {
    let res = content[fn](...args)
    delete content[fn]
    return res
  })()
}

// 手写apply
Function.prototype.myApply = function (obj, agrs) {
  const content = obj || window

  let fn = Symbol()

  content[fn] = this

  return (function () {
    let res = content[fn](...agrs)
    delete content[fn]
    return res
  })
}

// 手写bind
Function.prototype.myBind = function (obj, ...agrs) {
  const context = obj || window

  let fn = Symbol()
  context[fn] = this

  let _this = this

  let result = function (...innerAgrs) {
    if (this instanceof _this) {
      this[fn] = _this
      this[fn](...[...agrs, ...innerAgrs])
      delete this[fn]
    } else {
      context[fn](...[...agrs, ...innerAgrs])
      delete context[fn]
    }
  }

  result.prototype = Object.create(this.prototype)
  return result
}

let obj1 = {
  name: 'lily',
  sayHello: function (age) {
    console.log(`my name is ${this.name}, age is ${age}`)
  }
}

let obj2 = {
  name: 'su'
}

obj1.sayHello.myCall(obj2, 18)
console.log(obj2)
