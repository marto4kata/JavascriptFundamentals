function solve(arr1, arr2) {
    function getCommonElements(arrWithLessLength, arrWithMoreLength) {
        return arrWithLessLength.filter((el) => arrWithMoreLength.includes(el))
    }

    if (arr1.length > arr2.length) {
        return getCommonElements(arr2, arr1).join('\n')
    } else {
        return getCommonElements(arr1, arr2).join('\n')
    }
}