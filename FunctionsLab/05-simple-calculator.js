function solve(num1, num2, operator) {
    const result = {
        multiply : num1 * num2,
        divide : num1 / num2,
        add : num1 + num2,
        subtract : num1 - num2
    }

    return result[operator]
}