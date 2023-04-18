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
  const seperatedAr = [];

    for (index of string){ 
        if(index == separator){
            continue;
        }
        seperatedAr.push(index)
    }
    return seperatedAr
};

const trim = (string) => {
  // TODO
};

export { slice, repeat, capitalize, replace, split, trim };
