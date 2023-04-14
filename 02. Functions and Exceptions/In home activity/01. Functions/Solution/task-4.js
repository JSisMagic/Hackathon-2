const checkIfNumber = (number) => {
  if (typeof number !== 'number') {
    throw new Error(`${number} is not a number`);
  }
}

const add = (...numbers) => {
  let result = 0;

  for (const number of numbers) {
    checkIfNumber(number);
    result += number;
  }

  return result;
};

try {
  console.log(add(1, 2, 3, 4, 5));
  console.log(add('Telerik', 2, 3, 4, 5));
} catch (error) {
  console.log(error.message);
}
