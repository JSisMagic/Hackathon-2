/* eslint-disable valid-jsdoc */
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

/**
    * Add an element at the end of the array.
    * The addLast function is a higher-order function designed to make it easy to create new arrays
    * with an additional element at the end. It takes a single argument, the element to be added,
    * and returns a new function.
    * @param {any} element The element to add at the end of *the array
    * @return {addLastFunc} - > inner function
    * @author: Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
    */

const addLast = (element) => {
  /**

     * @function addLastFunc
     * @param {array} array An array to which the element should be added
     * @return {array} A new array that is a copy of the original array with the
     * element added at the end. The inner function addLastFunc takes an array as input
     * and returns a new array. The new array is a copy of the original array with the
     * provided element added to the end. This function uses the spread operator to create a shallow copy of the array,
     * ensuring that the original array remains unmodified.
     */
  return (array) => [...array, element];
};

/**
 * Removes the last element of the array
 *
 * @param {arr} arr the array to remove from
 * @return {newArr} a copy of the array with the removed element
 * @author Mariela Ivanova   <mariela.ivanova.a49@learn.telerikacademy.com>
 */
const removeLast = (arr) => {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
};

/**
 * Get the array's valid indexes.
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
 * @param {Array} arr the array to get the indexes from.
 * @return {Function} inner function.
 */
const keys = (arr) => {
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
 * @author Hristiyan Fachikov <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.telerikacademy.com>
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

/**
 * Concatenates the elements from one array with the elements of another creating a result array with all the elements.
 *
 * @author Valentin Petkov <valentin.petkov.a49@learn.telerikacademy.com>
 *
 * @param {Array} arr: The array to concatenate with.
 * @return {Function} innerConcat: Returns a closure that will concatenate the passed inner array
 * with the already received outer.
 */
const concat = (arr) => {
  /**
   * @function innerConcat
   * @param {Array} innerArr: array to concatenate with the outer array
   * @return {Array}
   */
  return (innerArr) => {
    return [...arr, ...innerArr];
  };
};

/**
 * Execute a provided function once for each array element.
 *
 * The forEach function accepts a callback function 'fn' as an argument.
 * This function will be executed for each element in the provided array.
 *
 * forEach returns a closure (inner function) that accepts an array to iterate over.
 * The inner function does not modify the original array and returns nothing (undefined).
 *
 * @param {function} fn The function to execute for each element.
 *                      It takes the current element as its argument.
 * @return {forEachFunc}  -> inner function
 * @author Gergana Dragoeva Quievy   <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const forEach = (fn) => {
  /**
   * @function forEachFunc
   * @param {array} array // The array to iterate over.
   *                      The 'fn' function will be executed for each element in this array.
   * @return {undefined} forEach does not return any value (returns undefined) and does not modify the original array.
   */
  return (array) => array.map(fn);
};

// medium

/**
 * Create a reversed copy of the array so that the first element becomes the last, the second element becomes the second to last, and so on
 *
 * @param {arr} arr The array to reverse
 * @return {any} The reversed array
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
 *
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
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
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
 * @author Hristiyan Fachikov <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
    const filteredArr = arr.filter(predicate);
    return filteredArr.length > 0 ? filteredArr[0] : null;
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

/**
 * Returns a shallow copy of a portion of an array into a new array object.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.telerikacademy.com>
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

/**
 * Iterates over elements of collection, returning an array of all elements the passed function returns truthy for.
 *
 * @author Valentin Petkov <valentin.petkov.a49@learn.telerikacademy.com>
 *
 * @param {Function} predicate: (el: any, index: number) => boolean
 * A function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {Function} filterFunc: Returns a closure that will iterate over the passed array
 * and will call the received predicate function with each of the elements. Collect all of the elements
 * that the predicate return true for and return it as a new array.
 */
const filter = (predicate) => {
  /**
   * @function filterFunc
   * @param {Array} arr: array to iterate over
   * @return {Array}: new array with elements that pass the predicate test
   */
  // return (arr) => {
  //   const result = [];
  //   arr.forEach((el) => {
  //     if (predicate(el)) {
  //       result.push(el);
  //     }
  //   });
  //   return result;
  return (arr) => {
    const result = [];
    arr.forEach((el, index) => {  // add the index parameter to the forEach callback
      if (predicate(el, index)) { // pass the index to the predicate function
        result.push(el);
      }
    });
    return result;
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
      result = fn(result, currentElement);
    });
    return result;
  };
};

/**
 * Iterates over elements of collection backwards and reducing all of them in a single value.
 *
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
 * @param {function} fn A function that takes in four arguments:
 * @param {initialValue} initialValue The initial value of the accumulator.
 * @return {function} a inner function.
 */
const reduceRight = (fn, initialValue) => {
  return (arr) => {
    /**
     * Inner function.
     *
     *@param {any} currentValue The current element being processed in the array.
     *@param {index} The index of the current element being processed in the array.
     *@return {result} the output number after substraction.
     */
    let result = initialValue;
    arr.slice().reverse().forEach((currentValue, index, reversedArray) => {
      // eslint-disable-next-line max-len
      result = fn(result, currentValue, reversedArray.length - 1 - index, reversedArray);
    });
    return result;
  };
};

/**
 * Filters the elements equal to a predicate and checks if there are any,
 *  if so it return true, if not it returns false;
 * @author Hristiyan Fachikov <hristiyan.fachikov.a49@learn.telerikacademy.com>
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

/**
 * Iterates over elements of a collection and returns
 * true if all the elements pass the predicate function's condition.
 * Otherwise return false.
 *
 * @author Valentin Petkov <valentin.petkov.a49@learn.telerikacademy.com>
 *
 * @param {Function} predicate: (el: any, index: number) => boolean
 * A function that accepts an element and (optionally) an index, and returns a boolean value.
 * @return {Function} everyFunc: Returns a closure that will iterate over the passed array in
 * and will call the received predicate function with each of the elements.
 * If all of the calls return true, return true. Otherwise return false.
 */
const every = (predicate) => {
  /**
   * @function everyFunc
   * @param {Array} arr: array to iterate over
   * @return {Boolean}: result of predicate function
   */
  return (arr) => {
    // TODO
    return arr.filter(predicate).length === arr.length;
  };
};

/**
 * Iterates over elements of a collection and returns true if the searched element is one of them. Otherwise return false
 *
 * @param {element} element The element to search for
 * @return {boolean}  Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return true, otherwise return false
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
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
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
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

/**
 * Finds the index of the first element in the array that satisfies the provided testing function
 *
 * This function is particularly useful when searching for the first occurrence
 * of an element in an array that meets a specific condition.
 * It uses a high-order function (predicate) to determine whether the condition is met.
 *
 * @param {function} predicate The testing function
 * @return {findIndexFunc} inner function
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const findIndex = (predicate) => {
  /**
   * @function findIndexFunc
   *
   * @param {array} array The array to search in
   * @return {number} The index of the first element that satisfies the predicate, or -1 if none is found
   *
   * The inner function uses the array.reduce() method to loop through the array and check
   * each element against the predicate. It returns the index of the first element that satisfies
   * the predicate, or -1 if no such element is found.
   */

  return (array) => array.reduce((acc, curr, index) => {
    if (acc !== -1) {
      return acc;
    } else if (predicate(curr)) {
      return index;
    }
    return acc;
  }, -1);
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
  // eslint-disable-next-line prefer-spread
  const testArray = Array.apply(undefined, Array(length));
  return testArray;
};

/**
 * Combines functions. Pipe flowing left to right, calling each function with the output of the last one.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.telerikacademy.com>
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

/**
 *
 * @author Viktor Petrov <viktor.martinov.p@gmail.com>
 * A higher-order function that takes in one or more functions as arguments and returns a new function that applies each function to the input in reverse order.
 *@param {...function} fns - One or more functions to compose.
 *@return {function} A new function that applies each function to the input in reverse order.
*/

const compose = (...fns) => {
    return (input) => {
      const functions = [...fns]; // Create a new array with the provided functions
      const reversed = functions.reverse(); // Reverse the order of the functions
      reversed.forEach((fn) => { // Apply each function to the input in reverse order
        input = fn(input);
      });
      return input; // Return the result of applying all functions to the input
    };
  };

/**
 * Array with nested arrays, which should to flat to first level.
 * @author Hristiyan Fachikov <hristiyan.fachikov.a49@learn.telerikacademy.com>
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

/**
 * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level (Identical to Map).
 *
 * @author Nikolay Nikolov  <nikolay.nikolov.a49@learn.telerikacademy.com>
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

// eslint-disable-next-line valid-jsdoc

/**
 * Creates an object that will group the array values by a passed grouping function.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 * @param {Function} groupingFn The grouping function that accepts an element
 * and returns the group identifier.
 * @returns {(arr: any[]) => object} A closure that iterates over the passed array
 * and calls the grouping function with each element.
 */
const groupBy = (groupingFn) => {
  return (arr) => {
    return arr.reduce((acc, el) => {
      const group = groupingFn(el);
      if (!acc[group]) acc[group] = [];
      acc[group].push(el);
      return acc;
    }, {});
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
