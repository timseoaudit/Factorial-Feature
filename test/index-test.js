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
});
});