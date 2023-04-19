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

/**
 * Removes a give prop from a given object;
 *
 * @param {obj} obj the object to delete form
 * @param {prop} prop the property to delete
 * @returns  An object with the specific prop deleted.
 * @example removeProp({ a: 5, b: 6 }, 'a') ==> { b: 6 }
 * @author Stefan Donev
 */

const removeProp = (obj, prop) => {
  const keys = Object.keys(obj);
  const newObj = {};
  for (const key of keys) {
    if (key !== prop) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
  // TODO
};

// medium

/**
 * Create a copy of an object.
 *
 * @param object (object): The object to copy.
 * @returns The copied object.
 * @example:
 * const initialObject = { a: 5, b: 6 };
const resultObject = utils.copy(initialObject);

console.log(resultObject);
// => { a: 5, b: 6 }

console.log(initialObject === resultObject);
// => false (different references)
 * @author Viktor Petrov
 */

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

/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param {Object} obj With the property
 * @returns {Array} Returns array with type of all property
 *
 * @author Hristiyan Fachikov
 */
const typeOfProps = (obj) => {
  const savedArr = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    savedArr.push(typeof(obj[key]));
  }
  return savedArr;
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
  const outputArray = [];
  for (const key in obj) {
    outputArray.push([key, obj[key]]);
  }
  return outputArray;
  // DONE
};

export { existInObject, typeOfProps, copy, removeProp, flat, entries };
