function solve(arr) {
    return arr.length > 1
        ?
        solve(Array.from({length: arr.length - 1}, (_, i) => arr[i] + arr[i + 1]))
        :
        arr[0];
}
