function solve(char1, char2) {
    const bigger = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))
    const smaller = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))

    function takingNeededChars(start, end) {
        let arrOfCharCodes = []

        for (let i = start + 1; i < end; i++) {
            arrOfCharCodes.push(String.fromCharCode(i))
        }
        return arrOfCharCodes.join(' ')
    }

    return takingNeededChars(smaller, bigger)
}

console.log(solve('a', '#'))