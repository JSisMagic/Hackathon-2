// easy

const isMinLength = (str, minLength) => null; // TODO

const isMaxLength = (str, maxLength) => null; // TODO

// medium

const isIn = (value, possibleValues) => null; // TODO

const isArrayOfType = (arr, type) => arr.every((el) => typeof el === type);

// hard

const areValidNumbers = (stringNumbers) => null; // TODO

const sumNumbersFromString = (string) => {
  sum = 0;
  const inputAr = string.split(' ')
  for (index of inputAr){
    sum += +index;
}
return sum;
};

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
