const printError = function(msg) {
  console.error(msg);
};

const add = (a, b) => {
  if (typeof a !== 'number') {
    printError(`${a} is not a number`);
  }

  if (typeof b !== 'number') {
    printError(`${b} is not a number`);
  }

  return a + b;
};

console.log(add(1, 2, 3, 4, 5));
console.log(add('Telerik', 2, 3, 4, 5));

