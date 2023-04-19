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

/**
 * Splits string by separator.
 *
 * @param string (string): The string to split.
 * @param separator (string): The separator character to split by.
 * @returns (Array): Returns the string segments.
 * @example ('ab-cd-de', '-'), ['ab', 'cd', 'de']
 * @author Viktor Petrov
 */

const split = (string, separator) => {
  const seperatedString = [];
  let singleMember = '';

  for (let i=0; i<=string.length; i++) {
    if (string[i] !== separator && i !== string.length) {
      singleMember += string[i];
    } else if (string[i] === string.length) {
      singleMember += string[i];
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
