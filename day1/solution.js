let fs = require('fs');
let input = fs.readFileSync('./day1/input', 'utf8');

function floor(x) {
  return Math.floor(x / 3) - 2;
}

function calc(x) {
  return floor(x) <= 0 ? 0 : floor(x) + calc(floor(x));
}

function solve(func) {
  return input.split("\n").map(x => {
    return func(x);
  }).reduce((a, b) => {
    return a + b;
  });
}

console.log(`Problem 1 solution: ${solve(floor)}`);
console.log(`Problem 2 solution: ${solve(calc)}`);
