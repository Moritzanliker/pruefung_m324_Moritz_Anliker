const assert = require('assert');
const calculate = require('./index');

describe('calculate', function () {
  it('should add two numbers', function () {
    assert.strictEqual(calculate(5, 3, 'add'), 8);
  });

  it('should subtract two numbers', function () {
    assert.strictEqual(calculate(5, 3, 'subtract'), 2);
  });

  it('should throw error for invalid operation', function () {
    assert.throws(() => calculate(5, 3, 'multiply'), Error, 'Invalid operation');
  });
});
