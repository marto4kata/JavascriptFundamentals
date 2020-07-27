function solve(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`${i} -> ${[5, 7, 11].includes([...i.toString()].reduce((a, b) => a + parseInt(b), 0)) ? 'True' : 'False'}`)
        // const digitSum = [...i.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
        //
        // let bool = 'False';
        //
        // if (digitSum === 5 || digitSum === 7 || digitSum === 11) {
        //     bool = 'True'
        // }
        //
        // console.log(`${i} -> ${bool}`);
    }
}