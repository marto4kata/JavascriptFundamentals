function solve(string, char, fullString) {
    let result = string.replace('_', char);
    let output = result === fullString ? 'Matched': 'Not Matched';
    return output
}