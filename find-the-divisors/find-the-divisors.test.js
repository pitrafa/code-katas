const divisors = require('./find-the-divisors');


describe("Testing function", function() {
  it("Correct return-value?", function() {
    expect(divisors(15)).toEqual([3, 5]);
    expect(divisors(12)).toEqual([2, 3, 4, 6]);
    expect(divisors(13)).toEqual("13 is prime");
  });
});
