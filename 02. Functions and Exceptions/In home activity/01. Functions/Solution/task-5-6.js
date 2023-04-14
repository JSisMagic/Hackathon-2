const checkIfNumber = (number) => {
  if (typeof number !== 'number') {
    throw new Error(`${number} is not a number`);
  }
}

const add = (a, b) => {
  checkIfNumber(a);
  checkIfNumber(b);

  return a + b;
};

const multiply = (a, b) => {
  checkIfNumber(a);
  checkIfNumber(b);

  return a * b;
};

const subtract = (a, b) => {
  checkIfNumber(a);
  checkIfNumber(b);

  return a - b;
};

const divide = (a, b) => {
  checkIfNumber(a);
  checkIfNumber(b);

  return a / b;
};

const calculator = (a, b, ...fns) =>{
  const results = [];
  for (const fn of fns) {
    const res = fn(a, b);
    results.push(res);
  }

  return results;
};

try {
  console.log(calculator(1, 2, add, add, subtract, divide, multiply));
} catch (error) {
  console.log(error.message);
}
