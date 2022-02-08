const { assert } = require("chai");
const calcs = require('../calc.js');
const Calc = calcs.Calc;

describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        // assert.ok (1+2===3)
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

    describe('subtraction', ()=>{
      it('retun the diffrence between the two values', ()=>{
        const calc =  new Calc();
        const answer = calc.subtract(5, 9);
        assert.ok(answer === 4)
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.subtract(1);
        assert.ok(answer===undefined);
      });
      

    })

    describe('multiplicaion', ()=>{
      it('retun the product of the two values', ()=>{
        const calc =  new Calc();
        const answer = calc.multiply(5, 5);
        assert.ok(answer === 25)
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.multiply(5);
        assert.ok(answer===undefined);
      });
    })

    describe('division', ()=>{
      it('retun the division of the two values', ()=>{
        const calc =  new Calc();
        const answer = calc.divide(25, 5);
        assert.ok(answer === 5)
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.divide(5);
        assert.ok(answer===undefined);
      });
    })

    // convertToF

    describe('convertToF', ()=>{
      it('return the convertred values to faranite', ()=>{
        const calc =  new Calc();
        const answer = calc.convertToF(25);
        assert.ok(answer === 77)
      });
      it('logs an error with only one number  it accept ', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.convertToF("5");
        assert.ok(answer===undefined);
      });
    })

    // convert to c 
    describe('convertToC', ()=>{
      it('return the convertred values to celsious ', ()=>{
        const calc =  new Calc();
        const answer = calc.convertToC(77);
        assert.ok(answer === 25)
      });
      it('logs an error with only one number  it accept ', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.convertToC("5");
        assert.ok(answer===undefined);
      });
    })

    describe('mathsquare', ()=>{
      it('return the convertred square value ', ()=>{
        const calc =  new Calc();
        const answer = calc.sqrt(4);
        assert.ok(answer === 2)
      });
      it('logs an error with only one number  it accept ', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.convertToC("5");
        assert.ok(answer===undefined);
      });
    })

  });