// easy

const slice = (string, start = 0, end = string.length) => {
  // TODO
};

const repeat = (string, n) => {
  // TODO
};

// medium

const capitalize = (string) => {
  // TODO
};

const replace = (string, char, replacement) => {
  // TODO
};

// hard

const split = (string, separator) => {
  // TODO
};

const trim = (string) => {
  // TODO
  let start = 0;
  let end = string.length-1;
  const savedArr = [];
  savedArr.push(string);

  while (start <= end && string[start] === ' ') {
    start++;
  }

  while (end >= start && string[end] === ' ') {
    end--;
  }
  const result = string.slice(start, end + 1);
  return result;
};

export { slice, repeat, capitalize, replace, split, trim };
