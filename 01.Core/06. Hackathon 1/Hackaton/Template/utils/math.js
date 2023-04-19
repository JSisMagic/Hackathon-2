// easy

const min = (array) => {
  // TODO
};

const sum = (array) => {
  let sum = 0;
  for (index of array){
      sum += index;
  }
  return sum;
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

/**
 * Swaps the whole part and the reminder part of a given number.
 *
 * @param {number} number The number to swap.
 * @returns {number} The number with the applied swapping.
 * @example swapWholeAndRemainder(1.2) ==> 2.1
 * 
 * @author Gergana Dragoeva Quievy
 */
 const swapWholeAndRemainder = (number) => {
  let result = '';
  const wholePart = Math.floor(number);
  const remainderPart = number.toString().slice(number.toString().indexOf('.')+1);
  result = remainderPart + '.' +  wholePart;

  return +result;
}

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };