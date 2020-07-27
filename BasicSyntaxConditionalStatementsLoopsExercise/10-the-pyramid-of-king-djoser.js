function solve(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLazuli = 0;
    let totalGold = increment;

    let steps = 0;

    for (let i = base; i > 2; i -= 2) {
        steps++;

        const size = i ** 2;
        const stoneSize = (i - 2) ** 2;

        totalStone += stoneSize;

        if (steps % 5 === 0) {
            totalLazuli += size - stoneSize;
        } else {
            totalMarble += size - stoneSize;
        }
    }

    if (base % 2 === 0) {
        totalGold *= 4
    }

    steps++;

    console.log(`Stone required: ${Math.ceil(totalStone * increment)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}