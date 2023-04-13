export const removeFirst = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

  // Array destructuring https://medium.freecodecamp.org/array-destructuring-in-es6-30e398f21d10
  const [_, ...newArr] = arr;

  return newArr;
}

export const removeLast = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

  const newArr = arr.slice(0, arr.length - 1);

  return newArr;
};

export const addFirst = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

  const newArr = [element, ...arr];

  return newArr;
};

export const addLast = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

  const newArr = [...arr, element];

  return newArr;
};

export const contains = (arr, element) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} is not an Array!`);
  }

  return arr.includes(element);
};
