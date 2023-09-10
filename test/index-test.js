var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when given the number 5', () => {
        //setup
        const expected = 120;
        //exercise
        const actual = Calculate.factorial(5)
        //verify
        assert.strictEqual(actual, expected);
  });
    it('returns Error when given number is 0', () => {
        //setup
        const expected = 1
        //exercise
        const actual = Calculate.factorial(0);
        //verify
        assert.strictEqual(expected, actual)
    });
  });
});
