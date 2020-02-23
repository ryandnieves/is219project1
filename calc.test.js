/* eslint-disable no-undef */
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

const subtract = require('./subtract');

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

const multiply = require('./multiply');

test('multiplies 2 x 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

const divide = require('./divide');

test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});

const square = require('./square');

test('squares 2 ^ 2 to equal 4', () => {
    expect(square(2)).toBe(4);
});

const sqrt = require('./sqrt');

test('square roots 4 to equal 2', () => {
    expect(sqrt(4)).toBe(2);
});
