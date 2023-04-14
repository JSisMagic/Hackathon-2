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

try {
  console.log(add(1, 2));
  console.log(multiply(1, 2));
  console.log(subtract(1, 2));
  console.log(divide(1, 2));
  console.log(add('Telerik', 2));
} catch (error) {
  console.log(error.message);
}
