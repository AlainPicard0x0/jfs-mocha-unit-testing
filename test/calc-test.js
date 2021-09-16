const { assert } = require("chai");
const calcs = require('../calc.js');
const Calc = calcs.Calc;

describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1,2);
        assert.ok(answer===3);
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1);
        assert.ok(answer===undefined);
      });
    });
    describe('.subtract', () => {
      it('returns value 2 minus value 1', () => {
        //setup
        const calc = new Calc();
        //exercise
        const answer = calc.subtract(6,3);
        //verify
        assert.ok(answer===-3);
      });
    });
    describe('.multiply', () => {
      it('returns the product of value 1 * value 2', () => {
        //setup
        const calc = new Calc();
        //exercise
        const answer = calc.multiply(6,3);
        //verify
        assert.ok(answer===18);
      });
    });
    describe('.divide', () => {
      it('returns value 1 divided by value 2', () => {
        //setup
        const calc = new Calc();
        //exercise
        const answer = calc.divide(10,5);
        //verify
        assert.ok(answer===2);
      });
    });
    describe('.convertToF', () => {
      it('returns celsius converted to Fahrenheit', () => {
        //setup
        const calc = new Calc();
        //exercise
        const answer = calc.convertToF(32);
        //verify
        assert.ok(answer===89.6);
      });
    });
  });