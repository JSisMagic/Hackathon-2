const n = 5;
const arr = [];

for (let row = 0; row < n; row++) {
  arr[row] = Array.from({ length: n });
}

let row = 0;
let col = 0;
let num = 0;

while (num < n * n) {
  while (row < arr.length && arr[row][col] === undefined) {
    arr[row][col] = num + 1;
    row++;
    num++;
  }
  row--;
  col++;

  while (col < arr.length && arr[row][col] === undefined) {
    arr[row][col] = num + 1;
    col++;
    num++;
  }
  col--;
  row--;

  while (row >= 0 && arr[row][col] === undefined) {
    arr[row][col] = num + 1;
    row--;
    num++;
  }
  row++;
  col--;

  while (col >= 0 && arr[row][col] === undefined) {
    arr[row][col] = num + 1;
    col--;
    num++;
  }
  col++;
  row++;
}

console.log(arr);
