function solve(num1, num2, num3) {
    function sum(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }

    return subtract(sum(num1, num2), num3)
}