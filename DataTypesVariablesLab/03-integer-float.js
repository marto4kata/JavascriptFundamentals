function solve(num1, num2, num3) {
    const sum = num1 + num2 + num3;

    console.log(sum + (sum % 1 === 0 ? ' - Integer' : ' - Float'));
}
