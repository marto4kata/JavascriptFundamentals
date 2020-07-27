function solve(arrOfNums) {
    return arrOfNums.reduce((sum, num) => sum + (num % 2 === 0 ? +num : -num), 0)
}