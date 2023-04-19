// easy

const slice = (string, start = 0, end = string.length) => {
  // TODO
};

const repeat = (string, n) => {
  let outputString = '';
  for (let i = 0; i < n; i++) {
    outputString += string;
  }
  return outputString;
  // DONE
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
  const seperatedString = [];
  let singleMember = '';


  for (const symbol of string) {
    if (symbol !== separator) {
      singleMember += symbol;
    } else if (symbol.index === (string.length - 1)) {
      seperatedString.push(singleMember);
    } else {
      seperatedString.push(singleMember);
      singleMember = '';
    }
  }
  return seperatedString;
};

/**
 * The function receives a string from which it removes spaces
 *
 * @param {String} string String with spaces.
 * @returns {String} With removed spaces.
 * @example
 *
 * @author Hristiyan Fachikov
 */
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
