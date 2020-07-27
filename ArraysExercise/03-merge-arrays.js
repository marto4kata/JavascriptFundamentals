function solve(strArr1, strArr2) {
    return strArr1.map((el, i) => i % 2 === 0 ? Number(el) + Number(strArr2[i]) : el + strArr2[i]).join(' - ')
}
