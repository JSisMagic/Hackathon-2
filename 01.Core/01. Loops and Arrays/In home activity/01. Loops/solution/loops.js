const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

console.log('-------- for loop--------');
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

console.log('------- while loop ---------');
let indx = 0;
while (indx < arr.length) {
  const element = arr[indx];
  console.log(element);
  indx++;
}

console.log('------- for-in loop ---------');
for (const index in arr) {
  const element = arr[index];
  console.log(element);
}

console.log('------- for-of loop ---------');
for (const element of arr) {
  console.log(element);
}

console.log('------- print only first half of the array ---------');
console.log('------- using while & math ---------');
indx = 0;
while (indx <= arr.length / 2) {
  const element = arr[indx];
  console.log(element);
  indx++;
}

console.log('------- using for-in & break ---------');
for (const index in arr) {
  if (index > arr.length / 2) {
    break;
  }
  const element = arr[index];
  console.log(element);
}

// even elements <=> elements that are in even position - 0,2,4,....
console.log('------- print only the even elements ---------');
console.log('------- for-in & continue ---------');
for (const index in arr) {
  if (index % 2 !== 0) {
    continue;
  }
  const element = arr[index];
  console.log(element);
}

// even elements <=> elements that have even number value - 0,2,4,....
console.log('------- print only the even elements ---------');
console.log('------- for-of & continue ---------');
for (const element of arr) {
  if (element % 2 !== 0) {
    continue;
  }
  console.log(element);
}