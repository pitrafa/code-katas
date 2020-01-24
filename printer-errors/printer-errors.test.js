const printerError = require('./printer-errors');


describe('printerError', () => {
  it('Basic tests', () => {
    const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    expect(printerError(s)).toBe('3/56');
  });
});
