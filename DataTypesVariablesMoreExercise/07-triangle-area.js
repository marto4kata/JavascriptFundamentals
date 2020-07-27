function solve(a,b,c) {
    const semiPerimeter = (a + b + c) / 2;

    return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
}