// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript


function squareDigits(num) {
  let x = String(num).split('').map((number) => {
    return Math.pow(number, 2);
  })
  return parseInt(x.join(''));
}

module.exports = squareDigits;
