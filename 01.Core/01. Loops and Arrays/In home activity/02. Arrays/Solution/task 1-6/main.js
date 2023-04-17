const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

// 01. Reverse
const arrReversed = arr.reverse();
console.log(`arrReversed: ${arrReversed}`);


// 02. Copy
const arrCopy = arrReversed.slice();
console.log(`arrCopy: ${arrCopy}`);
console.log(`arrCopy === arrReversed: ${arrCopy === arrReversed}`);

// 03. Find if 10 is in the array
const check = arrCopy.includes(10);
console.log(`Is 10 in array: ${check}`);


// 04. Find greater than 6
const element = arrCopy.find(function (el) {
  return el > 6;
});
console.log(`Find first greater than 6 in array: ${element}`);

// 05. Remove duplicates
const removedDuplicates = [];
for (const item of arrCopy) {
  if(!removedDuplicates.includes(item)){
    removedDuplicates.push(item);
  } 
}

console.log(`Removed duplicates: ${removedDuplicates}`);

// 06. Flat the array
const arrOfArr = [1, 2, [3, 4, [5, 6]]];
const arrFlat = arrOfArr.flat(2);
console.log(arrOfArr,'->', arrFlat);

