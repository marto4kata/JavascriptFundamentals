function solve(num1, num2) {
    let sum = 0;
    let str = num1;

    for (let i = num1 + 1; i <= num2; i++) {
        sum += i;
        str += ' ' + i;
    }
    console.log(str);
    console.log(`Sum: ${sum}`)
}