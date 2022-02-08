const {
  assert
} = require("chai");
const calcs = require('../calc.js');
const Calc = calcs.Calc;

describe('Calc', () => {
  describe('.add', () => {
    it('returns the sum of two values', () => {
      // Your test goes here
      const calc = new Calc();
      const answer = calc.add(1, 2);
      assert.ok(answer === 3);
    });
    it('logs an error with only one input and undefined memory', () => {
      // Your test goes here
      const calc = new Calc();
      const answer = calc.add(1);
      assert.ok(answer === undefined);
    });
  });

  describe('.subtract', () => {
    it('returns the difference between 2 values', () => {
      const calc = new Calc();
      const answer = calc.subtract(1, 2);
      assert.ok(answer === 1);
    })
    it('logs an error with only one input and undefined memory', () => {
      const calc = new Calc();
      const answer = calc.subtract(1);
      assert.ok(answer === undefined);
    });
  })

  describe('.multiply', () => {
    it('returns the product of 2 values', () => {
      const calc = new Calc();
      const answer = calc.multiply(5, 4);
      assert.ok(answer === 20);
    })
    it('logs an error with only one input and undefined memory', () => {
      const calc = new Calc();
      const answer = calc.multiply(5);
      assert.ok(answer === undefined);
    });
  })

  describe('.divide', () => {
    it('returns value 1 / value 2', () => {
      const calc = new Calc();
      const answer = calc.divide(10, 5);
      assert.ok(answer === 2);
    })
    it('logs an error with only one input and undefined memory', () => {
      const calc = new Calc();
      const answer = calc.divide(1);
      assert.ok(answer === undefined);
    });
  })

  describe('.convertToF', () => {
    it('returns C to F', () => {
      const calc = new Calc();
      const answer = calc.convertToF(30);
      assert.ok(answer === 86);
    })
    it('logs an error if not a number', () => {
      const calc = new Calc();
      const answer = calc.convertToF("hi");
      assert.ok(answer === undefined);
    });
  })

  describe('.convertToC', () => {
    it('returns F to C', () => {
      const calc = new Calc();
      const answer = calc.convertToC(86);
      assert.ok(answer === 30);
    })
    it('logs an error if not a number', () => {
      const calc = new Calc();
      const answer = calc.convertToC("hi");
      console.log(answer)
      assert.ok(answer === undefined);
    });
  })

  describe('.sqrt', () => {
    it('returns the sqrt of a number', () => {
      const calc = new Calc();
      const answer = calc.sqrt(25);
      assert.ok(answer === 5);
    })
    it('logs an error if input not number', () => {
      const calc = new Calc();
      const answer = calc.sqrt("hi");
      assert.equal(isNaN(answer), true)
    });
  })
});