// easy

const existInObject = (obj, prop) => {
  // TODO
};

const removeProp = (obj, prop) => {
  // TODO
};

// medium

const copy = (obj) => {
  // TODO
};

const typeOfProps = (obj) => {
  const savedArr = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    savedArr.push(typeof(obj[key]));
  }
  return savedArr;
};

// hard

const flat = (obj) => {
  // TODO
};

const entries = (obj) => {
  // TODO
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
