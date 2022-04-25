// instanceof主要是查找是否在其原型链上

function instanceOf (c, p) {
    const pp = p.prototype
    let cp = c.__proto__

    while (cp) {
        if (cp === pp) {
            return true
        }
        cp = cp.__proto__
    }
    
    return false
}