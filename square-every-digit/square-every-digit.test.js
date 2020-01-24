const squareDigits = require('./square-every-digit');


it("Test squareDigits", function() {
  expect(squareDigits(9119)).toBe(811181);
});