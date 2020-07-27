function solve(year, month, day) {
    const dateOfNextDay = new Date(year, month - 1, day + 1);

    const y = dateOfNextDay.getFullYear();
    const mm = dateOfNextDay.getMonth() + 1;
    const dd = dateOfNextDay.getDate();

    return `${y}-${mm}-${dd}`
}