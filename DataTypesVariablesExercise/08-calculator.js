function solve(num1, operator, num2) {
    const calculation = {
        '*': num1 * num2,
        '/': num1 / num2,
        '-': num1 - num2,
        '+': num1 + num2
    };

    return calculation[operator].toFixed(2)
}