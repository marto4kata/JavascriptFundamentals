function solve(arrOfStrings) {
    const commands = {
        'soap': x => x + 10,
        'water': x => x * 1.2,
        'vacuum cleaner': x => x * 1.25,
        'mud': x => x * 0.9
    };

    const value = arrOfStrings.reduce((value, str) => commands[str](value), 0)

    return `The car is ${value.toFixed(2)}% clean.`
}
