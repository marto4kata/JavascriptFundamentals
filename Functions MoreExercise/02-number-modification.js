function solve(num) {
  const strNum = num.toString();
  const sum = [...strNum].reduce((a, b) => a + parseInt(b), 0);
  const numDigits = strNum.length;

  return modifiedNumber(strNum, sum, numDigits);
}



function modifiedNumber(strNum, sum, numDigits) {
  if (sum / numDigits > 5) return strNum;

  return modifiedNumber(strNum + '9', sum + 9, numDigits + 1)
}