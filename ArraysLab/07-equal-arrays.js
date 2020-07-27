function solve(arr1, arr2) {
    const index = arr1.findIndex((el, i) => el !== arr2[i]);

    if (index === -1) {
        return `Arrays are identical. Sum: ${arr1.reduce((a, b) => a + parseInt(b, 10), 0)}`;
    } else {
        return `Arrays are not identical. Found difference at ${index} index`;
    }
}
