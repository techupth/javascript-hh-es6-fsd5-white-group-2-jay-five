function sum(...number) {
  // Start coding here !
  const totalSum = number.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  }, 0);
  return totalSum;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
