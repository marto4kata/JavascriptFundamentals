function solve(startingYield) {
    let days = 0;
    let totalExtracted = 0;

    while (startingYield >= 100) {
        totalExtracted += startingYield - 26;
        startingYield -= 10;
        days++;
    }

    return `${days}\n${days > 0 ? totalExtracted - 26 : totalExtracted}`
}
