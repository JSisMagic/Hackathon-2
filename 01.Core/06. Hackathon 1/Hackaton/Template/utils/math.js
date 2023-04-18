// easy

const min = (array) => {
  // TODO
};

const sum = (array) => {
  // TODO
};

// medium

const average = (array) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / array.length;
  }
  return average;
  //DONE
};

const pow = (number, power) => {
  // TODO
};

// hard

const isPrime = (number) => {
  // TODO
};

const swapWholeAndRemainder = (number) => {
  // TODO
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
