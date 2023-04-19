// easy

const existInObject = (obj, prop) => {
  // TODO
};

const removeProp = (obj, prop) => {
  // TODO
};

// medium

const copy = (obj) => {
  let newObject = {};

  for (const key of Object.keys(obj)) {
      if (Array.isArray(obj[key])) {
          newObject[key] = Array.from(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObject[key] = { ...obj[key] };
      } else {
        newObject[key] = obj[key];
      }
    }
  return newObject;
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
