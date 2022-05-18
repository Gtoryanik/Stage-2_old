const NumbersAdd = require('../../app/Add');
const {expect} = require('chai');

describe('is number is a number positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersAdd;
  });
  afterEach(function() {
    validator = null;
  });
  it('should return a + b if a & b is numbers', function() {
    expect(validator.calc(4, 2)).to.be.equal(6);
  });
});