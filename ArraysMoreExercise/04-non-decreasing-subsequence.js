function solve(arr) {
    let currBiggestNum = -Infinity;

    return arr.filter(num => {
        if (parseInt(num) >= currBiggestNum) {
            currBiggestNum = num
            return true
        }

        return false
    }).join(' ')
}

console.log(solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]))