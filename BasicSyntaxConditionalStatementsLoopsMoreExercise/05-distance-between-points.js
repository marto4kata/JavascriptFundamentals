function solve(x1, y1, x2, y2) {
    const sideX = Math.abs(x1 - x2);
    const sideY = Math.abs(y1 - y2);

    return Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
}