function solve(num) {
    let sumOfProperDivisors = 0

    for (let i = 1; i < num / 2; i++) {
        if (num % i === 0) {
            sumOfProperDivisors += i;
        }
    }

    if (sumOfProperDivisors === num && sumOfProperDivisors !== 0) {
        return 'We have a perfect number!'
    }

    return 'It\'s not so perfect.'
}
