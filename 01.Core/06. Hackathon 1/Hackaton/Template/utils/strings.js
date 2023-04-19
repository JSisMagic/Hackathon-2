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
  for (let i = start; i < end ; i++) {
    result += string[i];
  }

  return result;
};

const repeat = (string, n) => {
  let outputString = '';
  for (let i = 0; i < n; i++) {
    outputString += string;
  }
  return outputString;
  //DONE
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

const trim = (string) => {
  // TODO
};

export { slice, repeat, capitalize, replace, split, trim };
