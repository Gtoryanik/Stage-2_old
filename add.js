/**
 *
 * A method summing a + b
 * @class NumbersAdd
 */
class NumbersAdd {
  constructor(){
  }
  /**
     *
     *
     * @param {Number} a is a first number
     * @param {Number} b is a second number
     * @return {Number} return a+b if a && b is a number
     * @memberof addNumbers
     */
  calc(a, b) {
    const typeOfVariableA = typeof a;
    const typeOfVariableB = typeof b;
    if (typeOfVariableA !== 'number' ||
            typeOfVariableB !== 'number') {
      throw new Error('It is not a type of number');
    } else {
      return a + b;
    };
  };
}
module.exports = NumbersAdd;
