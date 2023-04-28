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

/**
 * Get the array's valid indexes.
 * @author Stefan Donev
 * @param {Array} arr the array to get the indexes from.
 * @return {Function} inner function.
 */
const keys = (arr) => {
  // TODO
  let counter = 0;

  /**
   * inner function
   * @return Returns a new array with the valid indexes.
   */
  return arr.reduce((acc) => {
    acc.push(counter);
    counter++;
    return acc;
  }, []);
};

const entries = (arr) => {
  // TODO
};

const slice = (start, end) => {
  return (arr) => {
    // TODO
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

const map = (mapperFn) => {
  return (arr) => {
    // TODO
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

const pipe = (...fns) => {
  return (input) => {
    // TODO
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

const flatMap = (mapperFn) => {
  return (arr) => {
    // TODO
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
