const arr = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];

const sums = [];

// We use the indices of the sums array to store the count of the number
for (const item of arr) {
  sums[item] = !sums[item] ? 1 : sums[item] + 1;
}

let max = 0;
let number = undefined;

for (let i = 0; i < sums.length; i++) {
  if(sums[i] > max){
    number = i;
    max = sums[i];
  }
}

console.log(`The number ${number} is found ${max} times in the array`);



