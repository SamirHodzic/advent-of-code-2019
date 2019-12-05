let fs = require('fs');
let input = fs
  .readFileSync('./day2/input', 'utf-8')
  .split(',')
  .map(x => +x);

let gravity_assist = (noun, verb, ...A) => {
  (A[1] = noun), (A[2] = verb);

  for (let i = 0; i < A.length; i += 4) {
    let [op, u, v, w] = [A[i], A[i + 1], A[i + 2], A[i + 3]];

    switch (op) {
      case 1:
        A[w] = A[u] + A[v];
        break;
      case 2:
        A[w] = A[u] * A[v];
        break;
      case 99:
        break;
    }
  }

  return A[0];
};

console.log(`Problem 1 solution: ${gravity_assist(12, 2, ...input)}`);

for (let i = 0; i < 100; ++i)
  for (let j = 0; j < 100; ++j)
    if (gravity_assist(i, j, ...input) == 19690720)
      console.log(`Problem 2 solution: ${i}${('0' + j).slice(-2)}`);
