function solve(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            for (let k = 1; k <= num; k++) {
                console.log(String.fromCharCode(i + 96) + String.fromCharCode(j + 96) + String.fromCharCode(k + 96))
            }
        }
    }
}
