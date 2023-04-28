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


/**
 * Removes the last element of the array
 *
 * @param {arr} arr the array to remove from
 * @return {newArr} a copy of the array with the removed element
 * @author Mariela Ivanova
 */
const removeLast = (arr) => {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
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
/**
 * Create a reversed copy of the array so that the first element becomes the last, the second element becomes the second to last, and so on
 *
 * @param {arr} arr The array to reverse
 * @return {any} The reversed array
 * @author Mariela Ivanova
 */
const reverse = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const [first, ...rest] = arr;
  const last = rest.pop();
  return [last, ...reverse(rest), first];
};
/**
 * Converts all elements in array into a string separated by separator
 *
 * @param {separator} separator The element separator
 * @return {any} Returns a closure that will join the elements of the array with the passed separator
 * @author Mariela Ivanova
 */
const join = (separator) => {
  /**
   * @function joinFunc
   * @param {arr} arr an array elements to join
   * @return {string} Returns a closure that will join the elements of the array with the passed separator
   */
  return (arr) => {
    if (arr.length === 0) {
      return '';
    }

    return arr.reduce((acc, curr) => acc + separator + curr);
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

/**
 * Iterates over elements of collection and reducing all of them in a single value.
 *
 * @author Viktor Petrov <viktor.martinov.p@gmail.com>
 * @function Fill
 * @param {any} value The value to fill array with.
 * @param {any} start The start position.
 * @param {any} end The end position.
 * @return {array} Returns a closure that will fill the passed array with the value.
 */

const fill = (value, start, end) => {
  /**
 * @function Map
 * @param {number} number The current value of the array.
 * @param {number} index The index of the current value.
 * @return {array} The new value to put in the current index of the array.
 */

  return (arr) => {
    return arr.map((number, index) => {
      if (index >= start && index < end) {
        number = value;
      }
      return number;
    });
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

/**
 * Iterates over elements of collection and reducing all of them in a single value.
 *
 * @author Viktor Petrov <viktor.martinov.p@gmail.com>
 * @function Reduce
 * @param {function} fn a call back function to be applied
 * @param {initialValue} initialValue the starting value of the reduce
 * @return {any} a reduction from all of the items of an array to a single value
 */

const reduce = (fn, initialValue) => {
  /**
   * @function Return
   * @param {array} array to iterate ove
   * @return {any} a reduction from all of the items of an array to a single value
   */

  return (arr) => {
    let result = initialValue;

    /**
       * @function forEach
       * @param {any} element the current element of the iteration
       * @return {any} the accumulated value from the reduction
       */

    arr.forEach((element) => {
      const currentElement = element;
      result = fn(initialValue, currentElement);
    });
    return result;
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
/**
 * Iterates over elements of a collection and returns true if the searched element is one of them. Otherwise return false
 *
 * @param {element} element The element to search for
 * @return {boolean}  Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return true, otherwise return false
 * @author Mariela Ivanova
 */
const includes = (element) => {
  /**
   * @function arr
   * @param {arr} arr an array to search into
   * @return {boolean} returns true or false
   */
  return (arr) => {
    return arr.some((item) => item === element);
  };
};

/**
 * Finds and returns the first index of the searched
 *  element in the array. If the element does not exist in the array, return -1.
 * @author Stefan Donev
 * @param {any} searchedElement The element to search for.
 * @returns {Function} inner function
 */
const indexOf = (searchedElement) => {
  /**
 * inner function.
 * @param {arr} arr array that we are searching in
 * @returns {number} return the index of the element if its found or -1 if it is not
 */
  return (arr) => {
    return arr.reduce((acc, curr, index) =>
      (curr === searchedElement) && (acc === -1) ? index : acc, -1);
  };
};

const findIndex = (predicate) => {
  return (arr) => {
    // TODO
  };
};

// hard

/**
 * Creates an array from object by using its length property.
 *
 * @author Viktor Petrov <viktor.martinov.p@gmail.com>
 * @function arrayFrom(obj)
 * @param {object} length An object that has the length property.
 * @return {array} Returns the created array with length equal to the passed object's length property, filled with undefined values.
 */

const arrayFrom = ({ length }) => {
  /**
   * calls the specified function with a given this value, and arguments provided as an array (
   * @function Array.apply
   * @param {any} undefined The value to create an array with.
   * @param {object} length The length of the array that is going go be created.
   * @return {array} Array with undefined values.
   */
  const testArray = Array.apply(undefined, Array(length));
  return testArray;
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
