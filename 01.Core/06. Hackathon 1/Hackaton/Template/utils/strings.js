// easy

const slice = (string, start = 0, end = string.length) => {
  // TODO
};

const repeat = (string, n) => {
  // TODO
};

// medium

/**
 * Converts the first character of string to upper case and the remaining to lower case
 *
 * @param {string} the string to capitalize
 * @returns the capitalized string
 */
const capitalize = (string) => {
  if (string.length === 0) {
    return string;
  }
  const firstChar = string.charAt(0).toUpperCase();
  const restChars = string.slice(1).toLowerCase();
  return firstChar + restChars;
};

const replace = (string, char, replacement) => {
  // TODO
};

// hard

const split = (string, separator) => {
  let sepStr = '';
  for (index of string) {
    if (index == separator) {
      continue;
    }
    sepStr += index;
  }

  const sepAr = [];

  for (i=0; i<sepStr.length; i++) {
    sepAr[i]=sepStr[i];
  }
  console.log(sepAr);
};

const trim = (string) => {
  // TODO
};

export { slice, repeat, capitalize, replace, split, trim };
