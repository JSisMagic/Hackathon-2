// easy

/**
 * Cut a specific section of a given string and return it as a result.
 *
 * @param {string} string The string to cut.
 * @param {number} [start=0] The start position.
 * @param {number} [end=string.length] The end position.
 * @returns {string} Returns the sliced string.
 *
 * @example slice('hello', 2, 4) ==> 'll'
 *
 * @author Gergana Dragoeva Quievy
 */
const slice = (string, start = 0, end = string.length) => {
  let result = '';
  for (let i = start; i < end; i++) {
    result += string[i];
  }

  return result;
};
/**
 * The function constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
 *
 * @param {string} string Initial string to be copied.
 * @param {n} n The number of times the string will be copied.
 * @returns {outputString} The concatenated string.
 * @author Nikolay Nikolov
 */
const repeat = (string, n) => {
  let outputString = '';
  for (let i = 0; i < n; i++) {
    outputString += string;
  }
  return outputString;
  // DONE
};

/**
 * Converts the first character of string to upper case and the remaining to lower case
 *
 * @param {string} string to capitalize
 * @returns {string} the capitalized string
 * @author Mariela Ivanova
 */
const capitalize = (string) => {
  if (string.length === 0) {
    return string;
  }
  const firstChar = string.charAt(0).toUpperCase();
  const restChars = string.slice(1).toLowerCase();
  return firstChar + restChars;
};

/**
 * Replaces all matches for a single character pattern in a string with replacement string.
 *
 * @param {String} string The string to inspect.
 * @param {String} char The char to replace.
 * @param {String} replacement The match replacement.
 * @returns {String} Returns the modified string.
 * @example
 * 'The cree', 'e', 'is' => 'This crisis'
 * @author Valentin P. Petkov
 */
const replace = (string, char, replacement) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      result += replacement;
    } else {
      result += string[i];
    }
  }
  return result;
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

const trim = (string) => {
  // TODO
};

export { slice, repeat, capitalize, replace, split, trim };
