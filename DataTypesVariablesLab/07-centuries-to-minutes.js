function solve(centuries) {
    const years = centuries * 100;
    const days = Math.trunc(years * 365.2422);

    return `${centuries} centuries = ${years} years = ${days} days = ${days * 24} hours = ${days * 1440} minutes`
}