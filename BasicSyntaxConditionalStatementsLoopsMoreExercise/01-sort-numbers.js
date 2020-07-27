function solve(...nums) {
    return nums.sort((a, b) => b - a).join('\n');
}