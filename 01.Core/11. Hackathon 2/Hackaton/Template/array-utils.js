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

/**
 * Takes an array and returns an array of arrays that include each index and element to the original arr;
 * @author Hristiyan Fachikov
 * @return {array} return array of arrays includes each index and element to the original arr.
 */
const entries = () => {
  return (arr) => {
    /**
   * @function entriesFunc
   * @param {arr} array with elements.
   * @param {acc} an empty accumulator that will collect the data
   * @param {el} any An element through which we will take an element from the array
   * @return {array} return array of arrays includes each index and element to the original arr.
   */
    let counter = 0;
    return arr.reduce((acc, el) => {
      acc.push([`${counter}, `, el]);
      counter++;
      return acc;
    }, []);
  };
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

/**
 * Filters the elements equal to a predicate and checks if there are any,
 *  if so it takes the first element, if not it returns null
 * @author Hristiyan Fachikov
 * @param {any} predicate element
 * @return {any} any element or null
 */
const find = (predicate) => {
  /**
   * @function findFunc
   * @param {arr} arr and check whether predicate is include in arr.
   * @param {el} any An element through which we will take an element from the array
   * @return {any} element. If predicate is include in arr return it, or not return null;
   */
  return (arr) => {
    const filterElements = arr.filter((el) => el === predicate);
    return filterElements.length > 0 ? filterElements[0] : null;
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

/**
 * Filters the elements equal to a predicate and checks if there are any,
 *  if so it return true, if not it returns false;
 * @author Hristiyan Fachikov
 * @param {any} predicate element
 * @return {boolean} from inner function
 */
const some = (predicate) => {
  /**
   * @function findFunc
   * @param {arr} arr and check whether predicate is include in arr.
   * @param {el} any An element through which we will take an element from the array
   * @return {boolean}. If predicate is include in arr return true, or return false;
   */
  return (arr) => {
    const findElement = arr.filter((el) => el === predicate);
    return findElement.length > 0 ? true : false;
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

/**
 * Array with nested arrays, which should to flat to first level.
 * @author Hristiyan Fachikov
 * @param {arr} arr to be flat.
 * @return {arr} arr with flat elements.
 */
const flat = (arr) => {
  /**
   * @function flatFunc
   * @param {acc} an empty accumulator that will collect the data
   * @param {el} any An element through which we will take an element from the array
   * @return {arr}. flat array.
   */
  return () => {
    const reduceOverEl = arr.reduce((acc, el) => {
      if (Array.isArray(el)) {
        acc.push(...el);
      } else {
        acc.push(el);
      }
      return acc;
    }, []);
    return reduceOverEl;
  };
  // [1, 2, [3, 4]]
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
