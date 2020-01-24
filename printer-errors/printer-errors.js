// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript


const printerError = (s) => {
  const valid = 'abcdefghijklm';
  let invalid = 0;

  Array.from(s).forEach((item) => {
    if (!valid.includes(item)) {
      invalid += 1;
    }
  });

  return `${invalid}/${s.length}`;
};


module.exports = printerError;
