function solve(num) {
    return [...num.toString()].reduce((sum, digit) => sum + parseInt(digit), 0)
}