const n = 5;
const arr = [];

for (let row = 0; row < n; row++) {
  arr[row] = Array.from({ length: n });
}

for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    if (col % 2 === 0) {
      arr[row][col] = col * n + row + 1;
    } else {
      arr[row][col] = col * n - row + n;
    }
  }
}

console.log(arr);
