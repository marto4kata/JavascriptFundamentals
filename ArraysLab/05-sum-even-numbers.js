function solve(arrOfNums) {
    return arrOfNums.reduce((sum, num) => {
        if (num % 2 === 0) {
            sum += parseInt(num,10)
        }

        return sum;
    }, 0)
}