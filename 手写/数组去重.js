// 方法1
function quchong1 (arr) {
    let newArr = []
    arr.reduce((map, item) => {
        if (!map[item]) {
            map[item] = 1
            newArr.push(item)
        }
        return map
    }, {})
    return newArr
}

// 方法2
function quchong2 (arr) {
    return [...new Set(arr)]
}


console.log(quchong1([1,2,2,2,3,4,5,6]))
console.log(quchong2([1,2,2,2,3,4,5,6]))