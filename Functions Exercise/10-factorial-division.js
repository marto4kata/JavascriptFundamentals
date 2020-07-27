function solve(num1, num2) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1
        }

        return num * factorial(num - 1)
    }

    return (factorial(num1) / factorial(num2)).toFixed(2)
}
