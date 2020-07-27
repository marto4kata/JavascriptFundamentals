function solve(radius, height) {
    const baseArea = Math.PI * radius ** 2;

    return `volume = ${(baseArea * height / 3).toFixed(4)}
area = ${(baseArea + Math.PI * (Math.sqrt(radius ** 2 + height ** 2)) * radius).toFixed(4)}`
}
