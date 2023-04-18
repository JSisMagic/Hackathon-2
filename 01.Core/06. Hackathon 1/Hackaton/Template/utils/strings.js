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
