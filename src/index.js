  module.exports = function reverse (n) {
const isNegative = n < 0;
  const numStr = String(isNegative ? -n : n);
  const reversedStr = numStr.split('').reverse().join('');
  const reversedNum = Number(reversedStr);
  
  return reversedNum;
}
