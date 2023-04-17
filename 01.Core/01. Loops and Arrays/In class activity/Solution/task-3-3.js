const n = 5;
const arr = [];

for (let row = 0; row < n; row++) {
  arr[row] = Array.from({ length: n });
}

let startRow = n - 1;
let startCol = 0;
let num = 0;

while (num < n * n) {
  let row = startRow;
  let col = startCol;

  while (row < arr.length && col < arr.length && arr[row][col] === undefined) {
    arr[row][col] = num + 1;

    row++;
    col++;
    num++;
  }

  if (startRow > 0) {
    startRow--;
    startCol = 0;
  } else {
    startRow = 0;
    startCol++;
  }
}

console.log(arr);
