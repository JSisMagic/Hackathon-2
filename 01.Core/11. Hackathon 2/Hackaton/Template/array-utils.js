// easy

/**
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {
  /**
   * @function addFirstFunc
   * @param {array} array an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (array) => [element, ...array];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted

const addLast = (element) => {
  return (arr) => {
    // TODO
  };
};

const removeLast = (arr) => {
  // TODO
};

const keys = (arr) => {
  // TODO
};

const entries = (arr) => {
  // TODO
};

/**
 * Returns a shallow copy of a portion of an array into a new array object.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.com.
 * @param {any} start the initial element to be pushed.
 * @param {any} end the last element to be pushed.
 * @returns {result} Parameter of inner function
 */
const slice = (start, end) => {
  /**
   * @param {arr} arr The array through which we iterate.
   * @param {any} value The index at which to start the extraction.
   * @param {any} index The end index at which to end the extraction.
   * @returns {result} The new array which contains the selected elements.
   */
  return (arr) => {
    return arr.reduce((result, value, index) => {
      if (index >= start && index < end) {
        result.push(value);
      }
      return result;
    }, []);
  };
};

const concat = (arr) => {
  return (innerArr) => {
    // TODO
  };
};

// medium

const reverse = (arr) => {
  // TODO
};

const join = (separator) => {
  return (arr) => {
    // TODO
  };
};

const find = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const fill = (value, start, end) => {
  return (arr) => {
    // TODO
  };
};

const forEach = (fn) => {
  return (arr) => {
    // TODO
  };
};

/**
 * Returns a shallow copy of a portion of an array into a new array object.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.com.
 * @param {function} mapperFn The function that is pushed as a parameter in the outer function.
 * @returns {mappedArr} Array of inner function
 */
const map = (mapperFn) => {
  return (arr) => {
    /**
   * @param {arr} arr The array through which we iterate.
   * @param {any} acc Append the result to the acc on each iteration using the spread operator.
   * @param {any} curr The variable to which we add the changes from the function pushed as an argument.
   * @returns {mappedArr} The mapped array to be returned.
   */
    const mappedArr = arr.reduce((acc, curr) => {
      return [...acc, mapperFn(curr)];
    }, []);
    return mappedArr;
  };
};


const filter = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const reduce = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const reduceRight = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const some = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const every = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const includes = (element) => {
  return (arr) => {
    // TODO
  };
};

const indexOf = (searchedElement) => {
  return (arr) => {
    // TODO
  };
};

const findIndex = (predicate) => {
  return (arr) => {
    // TODO
  };
};

// hard

const arrayFrom = ({ length }) => {
  // TODO
};

/**
 * Combines functions. Pipe flowing left to right, calling each function with the output of the last one.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.com.
 * @param {functions} fns The functions that are provided as input in order to chain them.
 * @returns {pipeFn} returns the output after it has gone through all the functions.
 */
const pipe = (...fns) => {
  return (input) => {
    /**
     * @function pipeFn Function is used with the reduce method to iterate over the input functions in the array and creates a new function that applies each function to its input value in sequence.
     * @param {any} acc Accumulator to which the result is applied.
     * @param {function} currFn Takes the first/next function.
   * @returns {pipeFn} The output of the function which is processed by each function in sequence to produce the final output value.
   */
    const pipeFn = fns.reduce((acc, currFn) => {
      return currFn(acc);
    }, input);
    return pipeFn;
  };
};

const compose = (...fns) => {
  return (input) => {
    // TODO
  };
};

const flat = (arr) => {
  // TODO
};

/**
 * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level (Identical to Map).
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.com.
 * @param {function} mapperFn The function that is pushed as a parameter in the outer function.
 * @returns {array} Array of inner function with flat-mapped elements.
 */
const flatMap = (mapperFn) => {
  /**
   * @param {arr} arr The array to be flat-mapped.
   * @param {any} acc The empty accumulator array to which the concatenated result are pushed.
   * @param {any} curr The variable to which we add the changes from the function pushed as an argument.
   * @returns {array} Array with flat-mapped elements.
   */
  return (arr) => {
    return arr.reduce((acc, curr) => {
      return acc.concat(mapperFn(curr));
    }, []);
  };
};

const groupBy = (groupingFn) => {
  return (arr) => {
    // TODO
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
};
