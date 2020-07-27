function solve(arr) {
    arr.forEach(num => {
        const str = num.toString()

        const firstHalf = str.substring(0, Math.floor(str.length / 2))
        const secondHalf = str.substring(Math.ceil(str.length / 2)).split('').reverse().join('')

        if (firstHalf === secondHalf) {
            console.log(true)
        }else {
            console.log(false)
        }
    })
}