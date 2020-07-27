function solve(num) {
    let evenSum = 0
    let oddSum = 0

    Array.from(String(num), Number).forEach(digit => digit % 2 === 0 ? evenSum += digit : oddSum += digit)

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
