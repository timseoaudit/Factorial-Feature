var assert = require("assert"); // node.js core module called
var Calculate =  require('../index.js') // require the Calculate class from index.js

describe('Calculate', () => { // describe the Calculate class
  describe('.factorial', () => { // describe the factorial method
    it('returns 120 when given the number 5', () => { // it describes the test
        //setup
        const expected = 120; // expected value
        //exercise
        const actual = Calculate.factorial(5) // actual value
        //verify
        assert.strictEqual(actual, expected); // assert that actual === expected    
  });
    it('returns Error when given number is 0', () => { // it describes the test
        //setup
        const expected = 1 // expected value
        //exercise
        const actual = Calculate.factorial(0); // actual value
        //verify
        assert.strictEqual(expected, actual) // assert that actual === expected
    });
  });
});
