// easy

/**
 * Checks if the given prop exist in a given object.
 *
 * @param {Object} obj The object to search in
 * @param {String} prop The prop to search for.
 * @returns {Boolean} Returns true if the prop exists and false if it doesn't
 * @example
 * { a: 5 }, 'a' => true
 * @example
 * { a: 5 }, 'b' => false
 * @author Valentin P. Petkov
 */
const existInObject = (obj, prop) => {
  for (const property in obj) {
    if (property === prop) {
      return true;
    }
  }
  return false;
};

const removeProp = (obj, prop) => {
  // TODO
};

// medium

const copy = (obj) => {
  const newObject = {};

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

/**
 * Flat all of the inner objects (just one level deep) inside of a given object, placing their own properties on root level.
 *
 * @param {object} obj The object to be flattened.
 * @return {object} The flattened object.
 *
 * @example1 flat({ a: 5, b: 6 }) ==> { a: 5, b: 6 }
 * @example2 flat({ a: 5, b: { c: 6, d: 7 } }) ==> { a: 5, 'b.c': 6, 'b.d': 7 }
 *
 * @author Gergana Dragoeva Quievy
 */
const flat = (obj) => {
  const flattened = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      for (const innerKey in obj[key]) {
        flattened[`${key}.${innerKey}`] = obj[key][innerKey];
      }
    } else {
      flattened[key] = obj[key];
    }
  }

  return flattened;
};
/**
 * The function returns an array of a given object's own enumerable string-keyed property key-value pairs.
 * 
 * @param {obj} obj The initial object from which we get the key-value pairs. 
 * @returns {outputArray} Returns the array with the key-value pairs. 
 * @author Nikolay Nikolov
 */
const entries = (obj) => {
  let outputArray = [];
  for (const key in obj) {
    outputArray.push([key, obj[key]]);
  }
  return outputArray;
  // DONE
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
