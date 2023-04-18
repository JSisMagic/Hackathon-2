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
  // TODO
};

// hard

const flat = (obj) => {
  // TODO
};

const entries = (obj) => {
  const outputArray = [];
  for (const key in obj) {
    outputArray.push([key, obj[key]]);
  }
  return outputArray;
  //DONE
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
