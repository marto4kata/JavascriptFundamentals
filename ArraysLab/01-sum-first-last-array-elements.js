function solve(arrOfNums) {
    return [...arrOfNums].reduce((a, b) => a + parseInt(b, 10), 0)
}
