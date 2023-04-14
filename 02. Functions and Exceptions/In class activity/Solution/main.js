const arr = [1, 2, 3];

// ForEach
const forEach = (arr, fn) => {
  for (const item of arr) {
    // Call the function
    fn(item);
  }
};

// Filter
const filter = (arr, checkFn) => {
  const newArr = [];
  for (const item of arr) {
    if (checkFn(item)) {
      newArr.push(item);
    }
  }

  return newArr;
};

// Map
const map = (arr, modifyFn) => {
  const newArr = [];
  for (const item of arr) {
    const modified = modifyFn(item);
    newArr.push(modified);
  }

  return newArr;
};

const checkFn = element => element % 2 === 1;
const filteredArray = filter(arr, checkFn);

const modifyFn = element => element ** 2;
const modifiedArray = map(filteredArray, modifyFn);

const logFn = element => console.log(element);
forEach(modifiedArray, logFn);
