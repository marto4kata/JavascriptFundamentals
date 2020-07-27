function solve(num) {
    const loadingBar = `[${'%'.repeat(num / 10) + '.'.repeat(10 - num / 10)}]`

    return num === 100 ? `100% Complete!\n${loadingBar}` :`${num}% ${loadingBar}\nStill loading...`
}
