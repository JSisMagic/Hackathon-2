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

  let sepStr = '';
  for (index of string){
     if (index == separator){
        continue;
     }
    sepStr += index;
}

let sepAr = [];

for (i=0; i<sepStr.length; i++){
    sepAr[i]=sepStr[i]
}
console.log(sepAr);
};

const trim = (string) => {
  // TODO
};

export { slice, repeat, capitalize, replace, split, trim };
