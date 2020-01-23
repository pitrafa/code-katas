// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript


function divisors(integer) {
  let mod;
  let count = 2;
  let result = [];

  while (count < integer) {
    mod = integer % count;
    if (mod === 0) {
      result.push(count);
    }
    count++ 
  }

  if (result.length > 0) {
    return result;
  }
  return `${integer} is prime`;
};

module.exports = divisors;
